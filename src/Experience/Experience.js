import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import sources from './sources.js'
import Floor from './World/Floor.js'
import Environment from './World/Environment.js'

// console.log(sources)

let instance = null

export default class Experience
{
    constructor(canvas)
    {
        if(instance)
        {
            // console.log('b')
            return instance
        }
        // console.log('a')

        instance = this

        // Global acces
        window.experience = this
        // console.log('Here Starts A Great Experience')

        // Options
        this.canvas = canvas
        // console.log(this.canvas)

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        this.floor = new Floor()

        // Sizes resize event
        this.sizes.on('resize', () =>
        {
            // console.log('I heard a resize')

            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
        // console.log(this.sizes.width)
        // console.log(this.sizes.height)
        // console.log(this.sizes.pixelRatio)

        
        
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
        
        // console.log(this)
        // console.log('A resize occured')
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
        // console.log('update the experience')
    }
}