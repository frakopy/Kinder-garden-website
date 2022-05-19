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


//Animation slider 1
gsap.to(".img-sldr1", {x: '0%', stagger: 5,  ease: "slow(0.7, 0.7, false)", repeat: -1, duration: 2})

//Scroll Reveal animation

ScrollReveal().reveal('.imgs-col1', { delay: 300 })