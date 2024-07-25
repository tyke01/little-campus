



gsap.to(".box", {
  duration: 2,
  x: 200,
  rotation: 360,
});

gsap.fromTo(".circle", { x: -40, fill: 'blue', }, { x: 40, fill: 'green' });

// TIMING

gsap.to(".green", {
  rotation: 360,
  duration: 1,
});
gsap.to(".purple", {
  rotation: 360,
  duration: 1,
  delay: 1,
});
gsap.to(".orange", {
  rotation: 360,
  duration: 1,
  delay: 2,
});

// create a timeline


// add the tweens to the timeline - Note we're using tl.to not gsap.to

/* 
let tl = gsap.timeline()
 tl.to(".blue", { x: 200, duration: 2 });
 tl.to(".red", { x: 200, duration: 1 });
 tl.to(".lime", { x: 200, duration: 1 });
*/
// --------------------------------- //
/* 
gsap.fromTo(".circle", { x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
  tl.fromTo(".blue", { x: -200 }, { x: 200, duration: 1 });
  tl.fromTo(".red", { x: -200 }, { x: 200, duration: 1 });
  tl.fromTo(".lime", { x: -200 }, { x: 200, duration: 1 });
*/

// --------------------------------- //



// --------------------------------- //
/*
repeatability:
  let tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
*/
/* ==== NOW FOR THE REAL THING ==== */

// --------------------------------------------- //
// let tl = gsap.timeline()
// Infinite loop
const section1 = document.getElementById('section-1')
const section2 = document.getElementById('section-2')
const section3 = document.getElementById('section-3')
const section4 = document.getElementById('section-4')

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
tl.fromTo(".text-anim", { x: 1020 }, { x: -50, duration: 1 })
tl.fromTo(".img-anim", { x: 1020 }, { x: 30, duration: 0.9 })
// ----------------------------------------------- //
tl.fromTo("#section-2", { x: 2020 }, { x: -50, duration: 1 });
tl.fromTo("#section-3", { x: 2020 }, { x: -50, duration: 1 });
tl.fromTo("#section-4", { x: 2020 }, { x: -50, duration: 1 });


// ------------------------⬇------------------------ //

const sections = document.querySelectorAll('.sections')
let currentSection = 0;

function scrollToNextSection() {
  currentSection = (currentSection + 1) % sections.length;
  const nextSection = sections[currentSection];
  gsap.to(window, { scrollTo: nextSection, duration: 1 });
}

setInterval(scrollToNextSection, 2000);

/*
    const sections = document.querySelectorAll(".section");
    let currentSection = 0;

    function scrollToNextSection() {
      currentSection = (currentSection + 1) % sections.length;
      const nextSection = sections[currentSection];
      gsap.to(window, { scrollTo: nextSection, duration: 1 });
    }

    setInterval(scrollToNextSection, 3000);
 */

// -----------------------⬆----------------------- //


// =============== 👇👇DONE DEAL👇👇 ================ //
const slider = document.querySelectorAll('.slider');
const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

masterTl.fromTo('.cool-circle', { x: '100%' }, { x: '0%' })

slider.forEach((div, index) => {
  const tl = gsap.timeline();

  // Slide in the current div
  tl.fromTo(div, { x: '100%' }, { x: '0%', duration: 1 });
  // animation for idividual components

  if (index === 0) {
    // Animation for the first slider
    tl.fromTo('.slider-1-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.5 });
    tl.fromTo('.slider-1-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }

  else if (index === 1) {
    // Animation for the second slider
    tl.fromTo('.slider-2-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.6 });
    tl.fromTo('.slider-2-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }

  else if (index === 2) {
    // Animation for the third slider
    tl.fromTo('.slider-3-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.6 });
    tl.fromTo('.slider-3-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }

  /* else if (index === 3) {
     tl.fromTo('.slider-4-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.6 });
     tl.fromTo('.slider-4-image', { x: '250%' }, { x: '0%', duration: 0.6 });
   } 
   */

  // Wait for a certain duration before sliding the div out
  tl.to(div, { x: '-100%', duration: 0.6, delay: 2 });

  // pause on hover
  div.addEventListener("mouseenter", () => {
    masterTl.pause();
  });

  // play on leave
  div.addEventListener("mouseleave", () => {
    masterTl.play();
  });

  // Add the individual timeline to the master timeline
  masterTl.add(tl);
});


// -------------------------------------------------- //


/*
const sliders = document.querySelectorAll('.slider');

sliders.forEach((div, index) => {
  const tl = gsap.timeline();

  // Slide in the current slider
  tl.fromTo(div, { x: '100%' }, { x: '0%', duration: 1 });

  // Define different animations for each slider's components
  if (index === 0) {
    // Animation for the first slider
    tl.fromTo('.slider-1-text', { x: '-100%' }, { x: '0%', duration: 1, delay: 1 });
    tl.fromTo('.slider-1-image', { x: '100%' }, { x: '0%', duration: 1, delay: 1 });
  } else if (index === 1) {
    // Animation for the second slider
    tl.fromTo('.slider-2-text', { x: '-100%' }, { x: '0%', duration: 1, delay: 1 });
    tl.fromTo('.slider-2-image', { x: '100%' }, { x: '0%', duration: 1, delay: 1 });
  }
  // Add more conditions for other sliders if needed

  // Wait for a certain duration before sliding the slider out
  tl.to(div, { x: '-100%', duration: 1, delay: 2 });

  // pause on hover
  div.addEventListener("mouseenter", () => {
    masterTl.pause();
  });

  // play on leave
  div.addEventListener("mouseleave", () => {
    masterTl.play();
  });

  // Add the individual timeline to the master timeline
  masterTl.add(tl);
});
*/
// -------------------------------------------------- //

/* 👇this is testing the self drawing circle i hope 👇👇 */
const circle = document.getElementById('circle');
const length = circle.getTotalLength(); 
// Set initial styles
gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });
tl.to(circle, { strokeDashoffset: 0, duration: 1, ease: "power1.inOut" });


// SECOND TRIAL 👇👇👇👇👇
const circle3 = document.querySelector('.circle-3');

// Draw the circle
tl.fromTo(circle3, { strokeDasharray: '283', strokeDashoffset: '283' }, { strokeDashoffset: '0', duration: 1, ease: "power1.inOut" });


// ------------------------------------------------------- //
// 
const progress = document.getElementById('progress');
const percentage = 60; // Set your desired progress percentage

gsap.to(progress, {
  duration: 2,
  rotation: `${percentage * 3.6}deg`,
  transformOrigin: 'center',
  ease: 'power1.out',
});





