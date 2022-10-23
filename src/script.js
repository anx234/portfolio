
import Application from './javascript/Application.js'
// import { gsap } from "gsap/gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from 'gsap/gsap-core.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';


import "./css/style.css";

const application = new Application()


gsap.registerPlugin(ScrollTrigger);


const fvCover = document.getElementById('gsap_FVCover');
const fv_tl = gsap.timeline();
fv_tl.fromTo(fvCover, 1, { height: "100%" }, { height: "0vh" })
  .fromTo(
    fvCover,
    1.2,
    { width: "100%" },
    { width: "0%" }
  )

var fade_tl = gsap.timeline()
fade_tl.staggerFrom('.gsap_fadein', 1.5, {y:"100%"}, 0.85)


const area  = document.querySelector(".js-area");
const wrap  = document.querySelector(".js-wrap");
const items = document.querySelectorAll(".js-item");
const num   = items.length;

//横幅を指定
gsap.set(wrap,  { width: num * 100 + "%" });
gsap.set(items, { width: 100 / num + "%" });

gsap.to(items, {
  xPercent: -100 * ( num - 1 ), //x方向に移動させる
  ease: "none",
  scrollTrigger: {
    trigger: area, //トリガー
    start: "top top",
    end: "+=100%",
    pin: true, //ピン留め
    scrub: true, //スクロール量に応じて動かす
  }
});



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
      duration: 3,
      opacity: 0,
      transformOrigin: "bottom",
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
         css: { borderBottom: "2px solid black" },
        duration: 2,
        transformOrigin: "rigtopht",
        ease: "none"
      },
      "-=1"
    )
    .from(
      el,
      {
        duration: 2,
        transformOrigin: "top",
        ease: "none",
        css: { color: "white" }
      },
      "-=2"
    );

});


