/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



let fullName = document.querySelector(".fullName")
let email = document.querySelector(".email")
let number = document.querySelector(".number")
let subject = document.querySelector(".subject")
let massage = document.querySelector(".massage")
let hammasi = document.querySelector(".inputs")
let btn = document.querySelector(".btn")

let botId = "7136733258:AAHlT_2Usxo8EUdfHBYtM1hI5coYQ2HkX98"
let myId = "5643272516"
hammasi.addEventListener("click", (e) => {
    if (e.target.textContent == "Send") {
        console.log(true);
        if (fullName.value, email.value, number.value, subject.value, massage.value !== "") {
            let message = `
Full Name:  ${fullName.value}
Email:  ${email.value}
Phone number:  ${number.value}
Email subject:  ${subject.value}
Massage:  ${massage.value}`;
            console.log(message);

            fetch(
                `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${myId}&text=${encodeURIComponent(
                    message
                )}`
            );

            fullName.value = ""
            email.value = ""
            number.value = ""
            subject.value = ""
            massage.value = ""
        }
    }
});