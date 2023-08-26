import { Signal, Event, Connection, IsConnection as isConnection } from "./Signal"
import { IsScheduled as isScheduled, Scheduled } from "./Scheduler"

type Lazy = () => void

type DestroyingSignal = Lazy
type CleanedSignal = Lazy
type DestroyedSignal = Lazy

type Item =
    | Disposable
    | Scheduled
    | MutationObserver
    | ResizeObserver
    | HTMLElement
    | Signal<any>
    | Connection<any>
    | Lazy

export abstract class Disposable {
    abstract dispose(): void
}

const isDisposable = (item: any): item is Disposable => {
    return "dispose" in item
}

export class Maid implements Disposable {
    private items: Map<any, Item>
    private destroyedState: boolean

    private destroyingSignal: Signal<DestroyingSignal>
    private cleanedSignal: Signal<CleanedSignal>
    private destroyedSignal: Signal<DestroyedSignal>

    public destroying: Event<DestroyingSignal>
    public cleaned: Event<CleanedSignal>
    public destroyed: Event<DestroyedSignal>

    constructor() {
        this.items = new Map()

        this.destroyedState = false

        this.destroyingSignal = new Signal()
        this.cleanedSignal = new Signal()
        this.destroyedSignal = new Signal()

        this.destroying = this.destroyingSignal.getEvent()
        this.cleaned = this.cleanedSignal.getEvent()
        this.destroyed = this.destroyedSignal.getEvent()
    }

    private cleanItem<T extends Item>(item: T) {
        if (isDisposable(item)) item.dispose()
        else if (isScheduled(item)) item.cancel()
        else if (item instanceof MutationObserver || item instanceof ResizeObserver) item.disconnect()
        else if (isConnection(item)) item.disconnect()
        else if (item instanceof HTMLElement) item.remove()
        else item()
    }

    public give<T extends Item>(item: T, key?: any): T {
        if (this.destroyedState) return this.cleanItem(item), item

        const finalKey = key ?? Symbol()
        if (this.has(finalKey)) this.cleanEntry(finalKey)
        this.items.set(finalKey, item)

        return item
    }

    public giveItems<T extends Item>(...items: T[]): T[] {
        items.map(this.give.bind(this))
        return items
    }

    public has(key: any): boolean {
        return this.items.has(key)
    }

    public cleanEntry(key: any) {
        const item = this.items.get(key)

        if (item === undefined) return
        this.items.delete(key)
        this.cleanItem(item)
    }

    public CleanUp() {
        const keys = Array.from(this.items.keys())
        keys.map(this.cleanEntry.bind(this))

        if (this.destroyedState === false) this.cleanedSignal.fire()
    }

    public IsDestroyed() {
        return this.destroyedState
    }

    // Deconstructor
    public dispose() {
        if (this.destroyedState !== false) return
        this.destroyedState = true

        this.destroyingSignal.fire()

        this.CleanUp()

        delete (this as any).Items

        this.destroyedSignal.fire()

        this.destroyingSignal.dispose()
        this.cleanedSignal.dispose()
        this.destroyedSignal.dispose()

        delete (this as any).DestroyingSignal
        delete (this as any).CleanedSignal
        delete (this as any).DestroyedSignal
    }
}
