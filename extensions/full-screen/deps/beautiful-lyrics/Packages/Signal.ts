// Packages
import { FreeArray } from "./FreeArray"

// Connection Types
type Callback = (...args: any[]) => void
type SignalConnectionReferences<P extends Callback> = FreeArray<{
    Callback: P
    Connection: Connection<P>
}>

// Classes
class Connection<P extends Callback> {
    // Private Properties
    private connectionReferences: SignalConnectionReferences<P>
    private location: Symbol
    private disconnected: boolean

    // Constructor
    constructor(connections: SignalConnectionReferences<P>, callback: P) {
        // Store our signal/callback
        this.connectionReferences = connections

        // Store our initial disconnected state
        this.disconnected = false

        // Now store ourselves
        this.location = connections.Push({
            Callback: callback,
            Connection: this,
        })
    }

    // Public Methods
    public disconnect() {
        if (this.disconnected) return

        // Disconnect ourself
        this.disconnected = true

        // Remove ourselves from our signal
        this.connectionReferences.Remove(this.location)

        // Delete our references
        delete (this as any).Location
        delete (this as any).Callback
        delete (this as any).SignalConnections
    }

    public isDisconnected() {
        return this.disconnected
    }
}

class Event<P extends Callback> {
    // Private Properties
    private Signal: Signal<P>

    // Constructor
    constructor(signal: Signal<P>) {
        // Store our signal
        this.Signal = signal
    }

    // Public Methods
    public connect(callback: P) {
        return this.Signal.connect(callback)
    }

    public isDisposed() {
        return this.Signal.isDisposed()
    }
}

class Signal<P extends Callback> {
    // Private Properties
    private ConnectionReferences: SignalConnectionReferences<P>
    private DestroyedState: boolean

    // Constructor
    constructor() {
        // Create our list of connections
        this.ConnectionReferences = new FreeArray()

        // Store our initial destroyed state
        this.DestroyedState = false
    }

    // Public Methods
    public connect(callback: P): Connection<P> {
        if (this.DestroyedState) throw "Cannot connect to a Destroyed Signal"

        // Return our connection (since the connection handles everything itself)
        return new Connection(this.ConnectionReferences, callback)
    }

    public fire(...args: Parameters<P>) {
        if (this.DestroyedState) throw "Cannot fire a Destroyed Signal"

        for (const [_, reference] of this.ConnectionReferences.GetIterator()) reference.Callback(...args)
    }

    public getEvent(): Event<P> {
        return new Event(this)
    }

    public isDisposed() {
        return this.DestroyedState
    }

    // Deconstructor
    public dispose() {
        if (this.DestroyedState) return

        // Disconnect all of our connections (so that the connection is labeled as Disconnected)
        for (const [_, reference] of this.ConnectionReferences.GetIterator()) {
            reference.Connection.disconnect()
        }

        // Disconnect ourself
        this.DestroyedState = true

        // Delete our references
        delete (this as any).ConnectionReferences
    }
}

// Exports
export type { Event, Connection }
export const IsConnection = (value: any): value is Connection<any> => {
    return value instanceof Connection
}
export { Signal }
