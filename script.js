const windowSize = window.screen.width

//Reading a PDF document 
const divPdf = document.getElementsByClassName('sec-protocol')[0]
const pdfLink = document.getElementById('pdf-link')


fetch('/manual/PortafolioEncanto.pdf') .then(result => result.blob()) .then(pdf => {
pdfLink.href= URL.createObjectURL(pdf)
})

divPdf.addEventListener('click', (e) => {
    const element = e.target
    if(element.classList.contains('manual')){
        pdfLink.click()
    }
})


//Change images banner every 5 seconds
const banner = document.getElementById('banner')
const bannerImages = ['bn3.png', 'bn2.png', 'bn1.png']

let index = 0
setInterval(() => {
    if (index === bannerImages.length) {
        index = 0
    }
    banner.src = `imgs/banner_imgs/banner_index/${bannerImages[index]}`
    gsap.fromTo(banner, {opacity: 0}, {opacity: 1, duration: 2, ease: "slow(0.7, 0.7, false)"});
    index++
}, 5000)


//Links to social media 
const icons = document.querySelectorAll('.social-net')

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        if(icon.classList.contains('instagram')){
            window.open('https://instagram.com/encantojardinmusical?igshid=YmMyMTA2M2Y=','_blank')
        }else if(icon.classList.contains('facebook')){
            window.open('https://www.facebook.com/encantojardinmusical/','_blank')
        }else if(icon.classList.contains('whatsapp')){
            linkWhatsap.click()
        }
    })
})


//Modifing whatsapp link
const linkWhatsap = document.getElementById('whatsapp-link')

if(windowSize < 800){
    linkWhatsap.href = 'https:///api.whatsapp.com/send?phone=573125397320'
}else{
    linkWhatsap.href = 'https://web.whatsapp.com/send?phone=573125397320'
}


//Animation Burger Menu 
const burgerIcon = document.getElementById('icon-bars')
const xIcon = document.getElementById('icon-x')
const imgBrgMenu = document.getElementById('img-brg-menu')


burgerIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: 0, duration: 1, ease: Power2.easeOut}) //Animation for open menu
})

xIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut}) //Animation for hide menu
})

imgBrgMenu.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut}) //Animation for hide menu
})



//Animation slider 1
gsap.to(".img-sldr1", {x: '0%', stagger: 5,  ease: "slow(0.7, 0.7, false)", repeat: -1, duration: 2, repeatDelay: 5})

//Animation big menu
gsap.to(".bg-menu", {opacity: 1, stagger: 0.5, ease: "slow(0.7, 0.7, false)", duration: 1.5})
gsap.to(".bg-li", { stagger: 0.5, scale: 1, ease: "slow(0.7, 0.7, false)", duration: 1})


//Animation paragraph project description
const divScheduleDate = document.getElementById('schedule-date')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

const observer = new IntersectionObserver(animate_p, options)
observer.observe(divScheduleDate)

function animate_p ( entries, observer ) {
	entries.forEach(( entry ) => {
		if (entry.isIntersecting) {
            // console.log(`This element was intercepted ${entry}`)
			gsap.to(".proj-desc", {y:'0%', opacity: 1, ease: "slow(0.7, 0.7, false)", duration: 2})
			observer.unobserve(divScheduleDate) //stop to observe the element strong in order to execute the callback only once
		}
	})
}

//Animating image susuki phrase
const susukiPhrase = document.getElementById('susuki-ph')

const observer2 = new IntersectionObserver(anim_susuki, {threshold: 1})

observer2.observe(susukiPhrase)

function anim_susuki ( entries, observer ) {
	entries.forEach(( entry ) => {
		if (entry.isIntersecting) {
            // console.log(`This element was intercepted ${entry}`)
            setTimeout(() => {
                gsap.to(susukiPhrase, {scale: 1, ease: "slow(0.7, 0.7, false)", duration: 2})
            }, 500)
			observer.unobserve(susukiPhrase) //stop to observe the element strong in order to execute the callback only once
		}
	})
}


//Animation title reasons 
const h2 = document.getElementById('text-reasons').querySelector('h2')
const observer3 = new IntersectionObserver(anim_text, {threshold: 1})

observer3.observe(h2)

function anim_text ( entries, observer ) {
	entries.forEach(( entry ) => {
		if (entry.isIntersecting) {
            setTimeout(() => {
                gsap.to(h2, {y:'0%', duration:1.5, ease: Bounce.easeOut, opacity: 1})
            }, 800)
			observer.unobserve(h2) //stop to observe the element strong in order to execute the callback only once
		}
	})
}

// ------------------------------- Bellow are the animations that has been removed -------------------------------------


//Animating Pharagraph

// if(windowSize > 800) {
//     const h3Reason1 = document.getElementsByClassName('reason1-subtitle')[0].querySelector('h3')
//     const observer4 = new IntersectionObserver(anim_paragraph, {threshold: 1})

//     observer4.observe(h3Reason1)

//     function anim_paragraph ( entries, observer ) {
//         entries.forEach(( entry ) => {
//             if (entry.isIntersecting) {
//                 setTimeout(() => {
//                     gsap.to('.pa-reasons', {x:'0%',stagger: 0.5 ,duration:1, ease: "slow(0.7, 0.7, false)"})
//                 }, 800)
//                 observer.unobserve(h3Reason1) //stop to observe the element strong in order to execute the callback only once
//             }
//         })
//     }
// }


//Animating span activities 
// const divActivts = document.getElementById('activities')
// const iconsList = Array.from(divActivts.querySelectorAll('ul li i'))
// const lastIcon = iconsList[iconsList.length - 1]

// const observer5 = new IntersectionObserver(anim_list, {threshold: 1})

// observer5.observe(lastIcon)

// function anim_list ( entries, observer ) {
// 	entries.forEach(( entry ) => {
// 		if (entry.isIntersecting) {
//             setTimeout(() => {
//                 gsap.to('.activts', {opacity:1, stagger:0.5})
//             }, 500)
// 			observer.unobserve(lastIcon) //stop to observe the element strong in order to execute the callback only once
// 		}
// 	})
// }


