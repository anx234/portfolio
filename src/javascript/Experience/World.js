import Experience from './Experience.js'
import Sphere from './Sphere.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
              // this.setGradient()
              // this.setSmoke()
               // this.setVignette()
               // this.setParticles()
              this.setSphere()
            }
        })
    }

    setGradient()
    {
        this.gradient = new Gradient()
    }

    setSmoke()
    {
        this.smoke = new Smoke()
    }

    setParticles()
    {
        this.particles = new Particles()
    }

    setVignette()
    {
        this.vignette = new Vignette()
    }
    setSphere()
    {
        this.sphere = new Sphere()
    }
    resize()
    {

    }

    update()
    {
        
        // if(this.gradient)
        //     this.gradient.update()

        // if(this.smoke)
        //     this.smoke.update()

        // if(this.particles)
        //     this.particles.update()
            
            if(this.sphere)
            this.sphere.update()
    }

    destroy()
    {
    }
}