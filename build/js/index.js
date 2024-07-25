
// import { gsap } from "gsap/gsap-core";

let lastScroll = 0;
const navbar = document.getElementById('top-nav');
const bottomNav= document.getElementById('bottom-nav')


window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // ? Scrolling down, hide the navbar
    navbar.classList.add('transform', 'translate-y-[-100%]', 'invisible');
    bottomNav.classList.add('transform', 'translate-y-[-55%]')
  } else {
    // ? Scrolling up, show the navbar
    navbar.classList.remove('transform', 'translate-y-[-100%]', 'invisible');
    bottomNav.classList.remove('transform', 'translate-y-[-55%]')

  }

  lastScroll = currentScroll;
})


// * And now for the magic js 👇👇⬇👇👇
const slider = document.querySelectorAll('.slider');
const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

masterTl.fromTo('.cool-circle', {x: '100%'}, {x: '0%'})

slider.forEach((div, index) => {
  const tl = gsap.timeline();

  // ? Slide in the current div
  tl.fromTo(div, { x: '100%' }, { x: '0%', duration: 1 });

  // ? animation for idividual components
  if (index === 0) {
    // ? Animation for the first slider
    tl.fromTo('.slider-1-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.5 });
    tl.fromTo('.slider-1-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }
  else if (index === 1) {
    // ? Animation for the second slider
    tl.fromTo('.slider-2-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.6 });
    tl.fromTo('.slider-2-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }
  else if (index === 2) {
    // ? Animation for the third slider
    tl.fromTo('.slider-3-text', { x: '100%', opacity: 0, scale: 0 }, { x: '0%', opacity: 1, scale: 1, duration: 0.6 });
    tl.fromTo('.slider-3-image', { x: '250%' }, { x: '0%', duration: 0.6 });
  }

  // ? Wait for a certain duration before sliding the div out
  tl.to(div, { x: '-100%', duration: 0.6, delay: 2 });

  /* 
  // ! pause on hover
  ? div.addEventListener("mouseenter", () => {masterTl.pause();});
  // ! play on leave
  ? div.addEventListener("mouseleave", () => {masterTl.play(); });
  */

  // ? Add the individual timeline to the master timeline
  masterTl.add(tl);
});



const comments = [
  {
    image: './img/child-2.jpg',
    name: 'Cee Ocampo',
    comment: 'Our daughter was part of the first cohort at The Little Campus and she has just'
  },
  {
    image: './img/child-1.jpg',
    name: 'Wafa&apos;S',
    comment: 'can&apos;t express how grateful we are for "The Little Campus". It&apos;s been a blessing for my'
  },
  {
    image: './img/child-3.jpg',
    name: 'Christine Silva',
    comment: 'Our son was in the preschool room for a year and a half before heading off to junior'
  },
  {
    image: './img/child-4.jpg',
    name: 'Khatidja Alam',
    comment: 'Lovely facility with the nicest staff and teachers. I wish we had more kids to send here!'
  },
  {
    image: './img/child-2.jpg',
    name: 'Daniel Grossi',
    comment: 'Our daughter was part of the first cohort at The Little Campus and she has just'
  },
  {
    image: './img/exterior1.jpg',
    name: 'Mathew Wade',
    comment: 'This is the smartest and best investment in your child. When first looking for a'
  },
  {
    image: './img/interior-1.jpg',
    name: ' V M',
    comment: 'I wish I had switched my child here sooner. She was at another daycare, which was'
  },
  {
    image: './img/teacher-1.jpg',
    name: 'Sami Masri',
    comment: 'Amazing staff, teachers & overall experience! My kiddo absolutely loves coming to'
  },
  {
    image: './img/teacher-2.jpg',
    name: 'Xinyi Z',
    comment: 'Our journey with The Little Campus was truly exceptional! From 8 to 21'
  },
  {
    image: './img/child-4.jpg',
    name: 'Khatidja Alam',
    comment: 'Lovely facility with the nicest staff and teachers. I wish we had more kids to send here!'
  },
   {
    image: './img/child-1.jpg',
    name: 'Wafa&apos;S',
    comment: 'can&apos;t express how grateful we are for "The Little Campus". It&apos;s been a blessing for my'
  },
  {
    image: './img/child-3.jpg',
    name: 'Christine Silva',
    comment: 'Our son was in the preschool room for a year and a half before heading off to junior'
  },

]

let comentHTML = '';

comments.forEach((comment) => {
  comentHTML += 
  `
  <div id="grid-card" class="bg-gray-100 items-start p-10 rounded-md">
  <div class="flex gap-2">
    <img
      src="${comment.image}"
      alt=""
      class="w-5 aspect-square rounded-full"
    />
    <p>${comment.name}</p>
  </div>
  <div class="text-yellow-500 text-3xl flex">
    &#9733; &#9733; &#9733; &#9733; &#9733;
  </div>
  <p>
    ${comment.comment}
  </p>
  <a href="#" class="text-gray-400 hover:text-gray-600 hover:underline"
    >Read more</a
  >
</div>
  `
})

document.getElementById('grid-container').innerHTML=comentHTML

// !   ⬇⬇    RESPONSIVE DESIGN     ⬇⬇

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = ( () => {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
  })

  hamburgerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click',  toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)