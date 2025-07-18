const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});


const  scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".h h2",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".h h1",{
    ...scrollRevealOption,
    delay: 550,
});

ScrollReveal().reveal(".h p",{
    ...scrollRevealOption,
    delay: 950,
});

ScrollReveal().reveal(".h_btns",{
    ...scrollRevealOption,
    delay: 1450,
});

ScrollReveal().reveal(".h_btns a span",{
    ...scrollRevealOption,
    delay: 1950,
});

ScrollReveal().reveal(".steps_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".job-category_card",{
    duration:1000,
    interval:500,
});

ScrollReveal().reveal(".job_grid",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".offer_card",{
    ...scrollRevealOption,
    interval:500,
});

const swiper = new Swiper("swiper",{
    loop: true,
});
