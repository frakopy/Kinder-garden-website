const windowSize = window.screen.width

//Links to social media 
const icons = document.querySelectorAll('.social-net')

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        if(icon.classList.contains('instagram')){
            window.open('https://www.instagram.com/','_blank')
        }else if(icon.classList.contains('facebook')){
            window.open('https://www.facebook.com/','_blank')
        }else if(icon.classList.contains('whatsapp')){
            linkWhatsap.click()
        }
    })
})


//Modifing whatsapp link
const linkWhatsap = document.getElementById('whatsapp-link')

if(windowSize < 800){
    linkWhatsap.href = 'https:///api.whatsapp.com/send?phone=50764318512'
}else{
    linkWhatsap.href = 'https://web.whatsapp.com/send?phone=50764318512'
}


//Animation Burger Menu 
const burgerIcon = document.getElementById('icon-bars')
const xIcon = document.getElementById('icon-x')
const imgBrgMenu = document.getElementById('img-brg-menu')

const links = document.querySelectorAll('.menu ul li a')

links.forEach(link => {
    link.addEventListener('click', () => {
        gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut}) //Animation for hide menu
    })
})

burgerIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: 0, duration: 1, ease: Power2.easeOut}) //Animation for open menu
})

xIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut}) //Animation for hide menu
})

imgBrgMenu.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut}) //Animation for hide menu
})


//Animation big menu
gsap.to(".bg-menu", {opacity: 1, stagger: 0.5, ease: "slow(0.7, 0.7, false)", duration: 1.5})
gsap.to(".bg-li", { stagger: 0.5, scale: 1, ease: "slow(0.7, 0.7, false)", duration: 1})

