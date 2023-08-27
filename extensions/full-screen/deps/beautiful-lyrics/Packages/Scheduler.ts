export class Scheduled {
    private id: number
    private cleaner: (id: number) => void

    constructor(cleaner: (id: number) => void, id: number) {
        this.cleaner = cleaner
        this.id = id
    }

    public cancel() {
        // Make sure we aren't already cancelled
        if (this.id === undefined) return
        this.cleaner(this.id)
    }
}

export const Timeout = (seconds: number, callback: (...args: any[]) => any) => {
    return new Scheduled(window.clearTimeout.bind(window), setTimeout(callback, seconds * 1000))
}
export const Interval = (everySeconds: number, callback: (...args: any[]) => any) => {
    return new Scheduled(window.clearTimeout.bind(window), setInterval(callback, everySeconds * 1000))
}
export const OnNextFrame = (callback: (...args: any[]) => any) => {
    return new Scheduled(window.cancelAnimationFrame.bind(window), requestAnimationFrame(callback))
}
