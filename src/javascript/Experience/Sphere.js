import * as THREE from 'three'
import Experience from './Experience'
import vertexShader from './shaders/sphere/vertex.glsl'
import fragmentShader from './shaders/sphere/fragment.glsl'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


export default class Sphere
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.microphone = this.experience.microphone
        this.resources = this.experience.resources
        this.timeFrequency = 0.0003
        this.elapsedTime = 0

        this.params =  {
			Spherify: 0,
			Twist: 1.0,
			radius: 2,
            Freaquency: 0.1,
            Size: 0.3,
		};


        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'sphere',
                expanded: true
            })

            this.debugFolder.addInput(
                this,
                'timeFrequency',
                { min: 0, max: 0.001, step: 0.000001 }
            )
        }
        

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
        this.gsap()
    }



    setGeometry()
    {
        this.geometry = new THREE.SphereGeometry(1, 512, 512)
        this.geometry.computeTangents()
    }

    setMaterial()
    {
        this.material = new THREE.ShaderMaterial({

            wireframe: false,
            blending: THREE.AdditiveBlending,
            transparent: true,
            uniforms:
            {
                uSize: { value: 1.0 },
                uTime: { value: 0 },
                uFreaquency: { value: 0.0 },
                uTimeFrequency: { value: 0.0004 },
                uTwist: { value: 0 },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    gsap(){
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            scrub: 3,
            ease: 'none',
            markers: false,
            // onEnter: () => console.log('enter'),
            // onLeave: () => console.log('leave'),
            // onEnterBack: () => console.log('enter back'),
            // onLeaveBack: () => console.log('leave back'),
        })
        const sections = document.querySelectorAll('.gsap_section')
        
        gsap.from(this.params, {
			Spherify: this.params.Spherify,
			Twist: this.params.Twist,
            Freaquency: this.params.Freaquency,
            Size: this.params.Size,
            ease: 'expo',
        })
        gsap.to(this.params, {
            // Freaquency: 0.1,
             Twist: 0.0,
            Size: 0.8,
            Freaquency: 0.8,
            // reaquency: 0.4,
            ease: 'Power2.out',
            duration: 8,
            scrollTrigger: {
                trigger: sections[1],
            },
        })
        gsap.to(this.params, {
            duration: 8,
            // Freaquency: 0.8,
            ease: 'Power2.out',
            scrollTrigger: {
                trigger: sections[2],
            },
        })
        gsap.to(this.params, {

            ease: 'Power2.out',
            scrollTrigger: {
                trigger: sections[3],
            },
        })
        gsap.to(this.params, {
            duration: 8,
            //  Freaquency: 0.8,
            // Freaquency: 1.4,
            ease: 'Power2.out',
            scrollTrigger: {
                trigger: sections[4],
            },
        })



    }

    update()
    {
        this.material.uniforms.uTwist.value = this.params.Twist
        this.material.uniforms.uSize.value = this.params.Size
       this.material.uniforms.uFreaquency.value = this.params.Freaquency
        this.material.uniforms.uTime.value = this.time.elapsed
    }



}