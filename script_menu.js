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

//Acordion animation
const acordionBtns = Array.from(document.getElementsByClassName('accordion')) 

acordionBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        btn.classList.toggle('active-btn')
        const icon = btn.querySelector('i')
        const id_icon = icon.getAttribute('id')
        let panel = btn.nextElementSibling
        if (panel.style.maxHeight) {
            gsap.to(`#${id_icon}`, {rotation: 0, duration:0.5 })
            panel.style.maxHeight = null;
        }else {
            gsap.to(`#${id_icon}`, {rotation: -180, duration:0.5 })
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})

//Scroll Reveal animation for images and videos
ScrollReveal().reveal('.imgs-col1', { delay: 300 })
ScrollReveal().reveal('.vid-col1', { delay: 300 })