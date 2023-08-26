export class FreeArray<I> {
    private Items: Map<Symbol, I>
    private DestroyedState: boolean

    constructor() {
        this.Items = new Map()
        this.DestroyedState = false
    }

    public Push(item: any) {
        const key = Symbol()
        this.Items.set(key, item)
        return key
    }

    public Get(key: Symbol) {
        return this.Items.get(key)
    }

    public Remove(key: Symbol) {
        const item = this.Get(key)
        if (item === undefined) return
        this.Items.delete(key)
        return item
    }

    public GetIterator() {
        return this.Items.entries()
    }

    public IsDestroyed() {
        return this.DestroyedState
    }

    public Destroy() {
        if (this.DestroyedState) return
        this.DestroyedState = true
        delete (this as any).Items
    }
}
