const windowSize = window.screen.width

//Reading a PDF document 
const divPdf = document.getElementsByClassName('sec-protocol')[0]
const pdfLink = document.getElementById('pdf-link')


fetch('/manual/manual.pdf') .then(result => result.blob()) .then(pdf => {
pdfLink.href= URL.createObjectURL(pdf)
})

divPdf.addEventListener('click', (e) => {
    const element = e.target
    if(element.classList.contains('manual')){
        pdfLink.click()
    }
})

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

//Send form by mail
const form = document.getElementById('form-contact')
const url = 'https://formsubmit.co/ea1b3a4003d31f85661ca395d39818d4'
const modalWind = document.getElementById('modal-container')
const closeIcon = document.getElementById('close-modal')

closeIcon.addEventListener('click', () => {
    gsap.to(".modal-container", {opacity: 0, ease: "slow(0.7, 0.7, false)", duration:1})

    setTimeout(() => {
      modalWind.classList.add('hide-modal') //For Allow to run the above gsap animation
    },2000)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formToSend = new FormData(form)
    const inputs = Array.from(form.querySelectorAll('.data-input')) 
    const valInput1 = inputs[0].value
    const valInput2 = inputs[1].value
    const valInput3 = inputs[2].value
    const valInput4 = inputs[3].value
    const valInput5 = inputs[4].value

    if (valInput1 === '' || valInput2 === '' || valInput3 === '' || valInput4 === '' || valInput5 === ''){
        alert('Debe completar todos los campos del formulario')
    }else{
        fetch(url, {method:'POST', body:formToSend})
        form.reset()
        modalWind.classList.remove('hide-modal')
        gsap.to(".modal-container", {opacity: 1, ease: "slow(0.7, 0.7, false)", duration:1})
        return false
    }
})


//Scroll Reveal animation for images and videos
ScrollReveal().reveal('.imgs-col1', { delay: 200 })
ScrollReveal().reveal('.vid-col1', { delay: 200 })