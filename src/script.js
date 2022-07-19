
import Application from './javascript/Application.js'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./css/style.css";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const application = new Application()


gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap.timeline();

tl2.from(".gsap_topLv1heading span", 1.8, {
  y: 140,
  ease: "power4.out",
  delay: 1,
  skewY: 17,
  stagger: {
    amount: 0.3
  }
})


document.querySelectorAll(".el_lv2heading").forEach((el) => {

  let tl = gsap.timeline({
    scrollTrigger: {
    trigger: el,
    start:"top 50%",  // start when top of trigger target hits 50% point of viewport
    toggleActions:"restart none none reset",
    end: "bottom center",
    // markers:true
    }
  });
  tl.from(el, {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    })
    .from(
      el,
      {
        // y: "100%",
        duration: 0.8,
        ease: "expo.out"
      },
      "-=0.2"
    )
    .from(
      el,
      {
        // css: { borderBottom: "2px solid black" },
        duration: 2,
        transformOrigin: "right",
        ease: "none"
      },
      "-=1"
    )
    .from(
      el,
      {
        duration: 2,
        transformOrigin: "right",
        ease: "none",
        css: { color: "black" }
      },
      "-=2"
    );

});

/*
const el_lv2headingTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".el_lv2heading", 
    start: "start start",
    end: "+=1000", 
    pin: true, 
    scrub: 1, 
    markers: true,
  },
  stagger: {
    amount: 0.1, 
  },
    repeatDelay: 2,
    yoyo: true
  });
  
  el_lv2headingTl
    .from(".el_lv2heading", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    })
    .from(
      ".el_lv2heading h1",
      {
        y: "100%",
        duration: 0.8,
        ease: "expo.out"
      },
      "-=0.2"
    )
    .from(
      ".el_lv2heading",
      {
        css: { borderBottom: "4px solid black" },
        duration: 2,
        transformOrigin: "right",
        ease: "none"
      },
      "-=1"
    )
    .from(
      ".el_lv2heading h1",
      {
        duration: 2,
        transformOrigin: "right",
        ease: "none",
        css: { color: "black" }
      },
      "-=2"
    );
  
*/

//下からフェードイン
/*
const fadeUps = document.querySelectorAll('.gsap_fadeUp');


fadeUps.forEach((fadeUp, index) => {
  gsap.fromTo(fadeUp, {
    autoAlpha: 0,
    y:80,
  },
  {
    autoAlpha: 1,
    y: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: fadeUp,
      start: 'top center+=100',
      end: 'top top',

    }
  });
  ScrollTrigger.create({
    trigger: fadeUp,
    id: index+1,
    start: 'top center+=100',
    end: 'top top',
    once: true,
  
  });
})
*/