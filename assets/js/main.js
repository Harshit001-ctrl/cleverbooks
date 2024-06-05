//SHOW MENU 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//  CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//  SHOW SCROLL TOP 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// DARK LIGHT THEME 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})



// GSAP


gsap.to(".accessory", {
    transform: "translateX(-110%)",
    scrollTrigger: {
        trigger: ".accessory",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top -95%",
        pin: true,
        scrub: 1,
    }
})


gsap.to(".accessory2", {
    transform: "translateX(-110%)",
    scrollTrigger: {
        trigger: ".accessory2",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top -70%",
        pin: true,
        scrub: 1,
    }
})

gsap.to(".accessory3", {
    transform: "translateX(-110%)",
    scrollTrigger: {
        trigger: ".accessory3",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top -70%",
        pin: true,
        scrub: 1,
    }
})

// REVIEW

let listOfData = [
    {
        contentId: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
        profileId: "profile1.jpg",
        bannerImageId: "product.webp"
    },
    {
        contentId: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
        profileId: "profile2.jpg",
        bannerImageId: "product2.webp"
    }
];


document.getElementById('btnNext').addEventListener('click', function () {
    let contentIdElement = document.getElementById('contentId');
    let profileIdElement = document.getElementById('profileId');
    let bannerImageIdElement = document.getElementById('bannerImageId');




    let currentImageName = profileIdElement.getAttribute('src') + "";

    let index = 0;
    for (let i = 0; i < listOfData.length; i++) {
        if (listOfData[i]['profileId'] == currentImageName) {
            index = i;
        }
    }

    if (index == (listOfData.length - 1)) {
        index = 0;
    } else {
        index = index + 1;
    }


    contentIdElement.innerText=listOfData[index]['contentId'];
    profileIdElement.setAttribute('src',listOfData[index]['profileId'])
    bannerImageIdElement.setAttribute('src',listOfData[index]['bannerImageId'])
    

});

var Path=`M 20 100 Q 500 100 900 80`

var finalPath=`M 10 100 Q 500 100 900 100`

var string=document.querySelector('#string')

string.addEventListener("mousemove",function(dets){
    path =`M 20 120 Q ${dets.x} ${dets.y} 900 80`
     
    gsap.to("svg path",{
        attr:{ d:path },
        duration:0.3,
        ease:"power3.out"
    })

})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{

        attr:{d:finalPath},
        duration:0.3,
        ease:"elastic.out(1,0.2 )"
    })
})