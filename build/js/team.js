
const teams = [
    {
        image: './img/child-2.jpg',
        name: 'Tami Zuckerman',
        gender: 'she/her',
        title: 'President & Founder',
        firstDescription: "Tami Zuckerman worked as an elementary teacher in her hometown of Montreal for over a decade. During this time, Tami was",
        secondDescription: 'appointed special counsel to Montreal&apos;s Lester B Pearson School Board, and often consulted on projects involving early literacy and technology.<br />After going on maternity leave in 2011, Tami co-founded the award-winning technology startup, VarageSale, relocating her family to the west end of Toronto soon after. While looking for child care for their then 2.5-year-old son, she quickly realized there was a shortage of quality care in the Etobicoke area.<br />Soon after, Tami was pregnant with her second child, a daughter. Tami&apos;s mission was clear: to create an early childhood education & daycare centre whose quality of care, highly trained educators, and unique programming were unrivalled in Toronto.',
    },

    {
        image: './img/child-1.jpg',
        name: 'Christina',
        gender: '',
        title: 'Program Director',
        firstDescription: "Christina is a Registered Early Childhood Educator who brings a broad and unique expertise to TLC. She began her career as a",
        secondDescription: 'preschool teacher in 2015. She quickly moved into a leadership position due to her energy, passion, skills and work ethic. <br /> Christina believes it is her duty to provide children with the knowledge and lifelong skills that will positively impact how they live each day. <br /> In her spare time, Christina keeps busy with balloon arrangements and crafting.',
    },

    {
        image: './img/child-3.jpg',
        name: 'Olivia',
        gender: 'she/her',
        title: 'Community Director',
        firstDescription: "Olivia is an Early Childhood Educator with over 6 years of experience working with children from infancy to school age. She is",
        secondDescription: 'knowledgeable in many different teaching philosophies and brings the best parts of each into the classroom. She is passionate about intentional program planning to promote the intellectual, social, emotional and physical development of children. She takes pride in building strong relationships with the children and families and enjoys providing a safe and fun environment.',
    },

    {
        image: './img/child-4.jpg',
        name: 'Rebecca',
        gender: '',
        title: 'Director of Operations',
        firstDescription: "Rebecca is a Registered Early Childhood Educator who has worked with young children since 2009. Her experience as a teacher",
        secondDescription: 'has led her to a management role at TLC. She takes great pride in creating a welcoming and nurturing learning environment for her students, and is sure to encourage and support each child as a unique individual. Rebecca enjoys using her creativity to decorate her classroom, design lesson plans, and overcome challenging situations in the classroom. In her spare time, she enjoys hiking, camping and spending time with family, friends and her dog.',
    },
    {
        image: './img/exterior1.jpg',
        name: 'Danielle',
        gender: 'she/her',
        title: 'Behaviour and Developmental Expert',
        firstDescription: "Danielle is a passionate educator who weaves music, movement, problem-solving activities and dramatic play into everything",
        secondDescription: 'she does. She has spent many years supporting children&apos;s development, strengthening their social skills, and teaching self-regulation and emotional intelligence. Danielle has a diploma in Child and Youth Work and has completed the Autism and Behavioral Science program at Seneca College. She has also completed additional training in Positive Early Childhood Education and Children&apos;s Yoga and Mindfulness. Danielle strongly believes that children remind us to tap into our own inner child, stay imaginative and model kindness.',
    },

    {
        image: './img/indoor-1.jpg',
        name: 'Sharyn Timerman',
        gender: '',
        title: 'Behaviour and Developmental Expert',
        firstDescription: "Sharyn brings 33 years of experience as our Behaviour and Developmental Specialist. She specializes in children&apos;s behaviour from birth",
        secondDescription: 'to the early teen years through individualized and positive parenting techniques.<br />  In 1996, Sharyn founded The Early Years Family Development Center, a support and coaching practice for childhood education professionals and parents alike. Her internationally-renowned “Child Behavior Certification Program” has certified professionals all over the world, including Canada, the USA, Spain, Philippines, Sweden, Saudi Arabia and Russia. <br /> Sharyn&apos;s role at TLC involves continuous training and development of our educators, as well as supporting our parent community.<br /> She holds a degree in Early Childhood Education and multiple other related certifications. She is a wife, mother of three, and grandmother to five grandchildren.',
    },

]

let teamsHTML = ''

teams.forEach((team) => {
    teamsHTML += `
     <div
         id="card"
        class="flex gap-5 bg-white px-5 py-2 shadow-xl rounded-lg"
          >
            <div class="w-[40rem] object-cover  ">
              <img class="rounded-lg" src="${team.image}" alt="" />
            </div>
            <div>
              <div>
                <h1 class="text-gray-950 font-bold">
                  ${team.name}
                  <span class="text-gray-500 text-sm font-medium">${team.gender}</span>
                </h1>
                <p class="text-gray-500">${team.title}</p>
              </div>
              <div>
                <div class="description">
                  <p>
                  ${team.firstDescription}
                  <span id="read-more"  class="hidden extra">
                    ${team.secondDescription}
                  </p>
                </div>

                <button
                  id="more-btn"
                  class="more-btn text-red-400 hover:underline hover:text-red-600 text-xs"
                  data-target="0"
                >
                  Read more ...
                </button>
              </div>
            </div>
          </div>

        `
})

document.getElementById('card-container').innerHTML = teamsHTML

// *
const extraContent = document.querySelectorAll('.extra')
const moreButtons = document.querySelectorAll('.more-btn')
// ! Event listeners take in functions ⬇ 



moreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Find the closest parent element that contains the .extra content
        const card = button.closest('.flex');

        // Toggle the visibility of .extra content within the specific card
        const extraContent = card.querySelector('.extra');
        if (extraContent) {
            extraContent.classList.toggle('hidden');
        }
    });
});









// moreButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         extraContent.forEach((content) => {
//             content.classList.toggle('hidden');
//         })
//     });
// });



/*
moreButtons.addEventListener('click', () => {
    extraContent.classList.toggle('hidden')
    const targetIndex = button.getAttribute('data-target')
    extraContent[targetIndex].classList.toggle('hidden')
})
*/

/* 
    const moreBtn = document.getElementById('more-btn')
    const moreContent = document.getElementById('read-more')
    moreBtn.addEventListener('click', () => {
     moreContent.classList.toggle('hidden');
 });
*/