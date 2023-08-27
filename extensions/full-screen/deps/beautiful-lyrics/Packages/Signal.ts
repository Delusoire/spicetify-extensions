// Packages
import { pipe as p } from "fp-ts/lib/function"
import { array as a } from "fp-ts"

// Connection Types
type Callback = (...args: any[]) => void
type SignalConnRef<P extends Callback> = P
type SignalConnRefs<P extends Callback> = Map<Symbol, SignalConnRef<P>>

//? Basically a wrapper around Signal, exposing connect and isDisposed
export class Event<P extends Callback> {
    private signal: Signal<P>

    constructor(signal: Signal<P>) {
        this.signal = signal
    }

    public connect(callback: P) {
        return this.signal.connect(callback)
    }
}

export class Signal<P extends Callback> {
    private connRefs: SignalConnRefs<P> = new Map()
    private disposed = false

    public connect(callback: P) {
        if (this.disposed) throw "Cannot connect to a Destroyed Signal"
        const key = Symbol()
        this.connRefs.set(key, callback)
        return () => this.connRefs.delete(key)
    }

    public fire(...args: Parameters<P>) {
        if (this.disposed) throw "Cannot fire a Destroyed Signal"
        p(
            this.connRefs.values(),
            Array.from<SignalConnRef<P>>,
            a.map(cb => cb(...args)),
        )
    }

    public asEvent(): Event<P> {
        return new Event(this)
    }

    public dispose() {
        if (this.disposed) return
        this.connRefs.clear()
        this.disposed = true
    }
}
