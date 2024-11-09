// ------------------------------- Toggle icon navbar------------------------------------>
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  
    navbar.classList.toggle('active');  
};



// ------------------------------scroll section active link------------------------.

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {  // corrected variable name here
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });

    // -----------------------------sticky navbar----------------------------------.

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ----------------------remove toggle icon and navbar when click navbar -----------------------

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// -----------------------------------SCROLL REVEL JS-----------------------------------------------------

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});


// ----------------------------------- TYPES JS----------------------------------------------------------->

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer' , 'Data Analyst' , 'Python Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})