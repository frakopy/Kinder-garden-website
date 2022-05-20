
//Animation Burger Menu 

const burgerIcon = document.getElementById('icon-bars')
const xIcon = document.getElementById('icon-x')
const imgBrgMenu = document.getElementById('img-brg-menu')

burgerIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: 0, duration: 1, ease: Power2.easeOut})
})

xIcon.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut})
})

imgBrgMenu.addEventListener('click', () => {
    gsap.to('.burger-container', {x: '-100%', duration: 1, ease: Power2.easeOut})
})

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

//Form validation 
const form = document.getElementById('form-contact')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = Array.from(form.querySelectorAll('.data-input')) 
    const valInput1 = inputs[0].value
    const valInput2 = inputs[1].value
    const valInput3 = inputs[2].value
    const valInput4 = inputs[3].value
    const valInput5 = inputs[4].value

    if (valInput1 === '' || valInput2 === '' || valInput3 === '' || valInput4 === '' || valInput5 === ''){
        alert('Debe completar todos los campos del formulario')
    }else{
        form.submit()
    }

})


//Animation slider 1
gsap.to(".img-sldr1", {x: '0%', stagger: 5,  ease: "slow(0.7, 0.7, false)", repeat: -1, duration: 2})

//Scroll Reveal animation

ScrollReveal().reveal('.imgs-col1', { delay: 300 })
ScrollReveal().reveal('.vid-col1', { delay: 300 })