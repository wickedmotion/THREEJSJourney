import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now()
        // console.log(this.start)
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        // console.log('Time instantiated')

        // this.tick()
        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        // console.log('tick')

        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')

        // console.log(currentTime)
        // console.log(this.delta)
        // console.log(this.elapsed)


        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}