// Change Navbar Styele on Scroll
// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0);
});


// Hide/Show FAQs Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==="fas fa-plus"){
            icon.className="fas fa-minus"
        }else{
            icon.className="fas fa-plus"
        }
    })
})


// ===========================SWIPER JAVASCRIPT======================= 
        const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            600 : {
                slidesPerView: 2,
            }
        }
      });


    //   ===========================DROPDOWN EVENT FOR HAMBURGER MENU=============================

    const menu = document.querySelector('.nav_menu');
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    menuBtn.addEventListener('click', ()=>{
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    });

    const closeNav = ()=>{
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    };

    closeBtn.addEventListener('click', closeNav);