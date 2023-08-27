import { Signal, Event } from "./Signal"
import { Scheduled } from "./Scheduler"

type Lazy = () => void

type DestroyingSignal = Lazy
type CleanedSignal = Lazy
type DestroyedSignal = Lazy

type Item = Disposable | Scheduled | MutationObserver | ResizeObserver | HTMLElement | Signal<any> | Lazy

export abstract class Disposable {
    abstract dispose(): void
}

const isDisposable = (item: any): item is Disposable => "dispose" in item

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

        this.destroying = this.destroyingSignal.asEvent()
        this.cleaned = this.cleanedSignal.asEvent()
        this.destroyed = this.destroyedSignal.asEvent()
    }

    public subordinate = () => this.handle(new Maid())

    public handle<T extends Item>(item: T, key?: any): T {
        if (this.destroyedState) return this.disposeItem(item), item

        const finalKey = key ?? Symbol()
        if (this.items.has(finalKey)) this.disposeEntry(finalKey)
        this.items.set(finalKey, item)

        return item
    }

    private disposeItem<T extends Item>(item: T) {
        if (isDisposable(item)) item.dispose()
        else if (item instanceof Scheduled) item.cancel()
        else if (item instanceof MutationObserver || item instanceof ResizeObserver) item.disconnect()
        else if (item instanceof HTMLElement) item.remove()
        else item()
    }

    public disposeEntry(key: any) {
        const item = this.items.get(key)

        if (item === undefined) return
        this.items.delete(key)
        this.disposeItem(item)
    }

    public cleanAllEntries() {
        const keys = Array.from(this.items.keys())
        keys.map(this.disposeEntry.bind(this))

        if (this.destroyedState === false) this.cleanedSignal.fire()
    }

    public dispose() {
        if (this.destroyedState !== false) return

        this.destroyingSignal.fire()

        this.cleanAllEntries()

        this.destroyedState = true
        this.destroyedSignal.fire()

        this.destroyingSignal.dispose()
        this.cleanedSignal.dispose()
        this.destroyedSignal.dispose()
    }
}

export const GlobalMaid = new Maid()
