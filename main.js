// Change nav style on scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// Contact buttons (circular text buttons)

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// Swiper JS (gallery section)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
            599: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
})



// const nav = document.querySelector('.nav__links');
// const openNavBtn = document.querySelector('#nav__toggle-open');
// const closeNavBtn = document.querySelector('#nav__toggle-close');

// const openNav = () => {
//     nav.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
// }

// openNavBtn.addEventListener('click', openNav);


// const closeNav = () => {
//     nav.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// }

// closeNavBtn.addEventListener('click', closeNav);


//Close nav menu on click of menu link
// if(document.body.clientWidth < 1024) {
//     nav.querySelectorAll('li a').forEach(navLink => {
//         navLink.addEventListener('click', closeNav);
//     })
// }

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// Agregar evento de escucha para el evento resize
window.addEventListener('resize', () => {
    if (document.body.clientWidth < 1024) {
        // Mostrar menú móvil
        nav.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
        nav.querySelectorAll('li a').forEach(navLink => {
            navLink.addEventListener('click', closeNav);
        })
    } else {
        // Mostrar menú de escritorio
        nav.style.display = 'flex';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'none';
        nav.querySelectorAll('li a').forEach(navLink => {
            navLink.removeEventListener('click', closeNav);
        })
    }
});

// Inicializar menú según tamaño de pantalla
if (document.body.clientWidth < 1024) {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
} else {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'none';
}


