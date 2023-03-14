import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter
{
    constructor()
    {
        // console.log('Yup')
        
        super()

        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // console.log(this)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')

            // console.log(this)


        })
    }
}