

function main() {
    var service_swiper = new Swiper(".services-section-scroller", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 }
        }
    });

    var media_swiper = new Swiper(".media-resource-scroller", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 }
        }
    })


}

fetch("/navbar.html")
    .then(result => {
        return result.text();

    }).then(html => {
        document.getElementById('nav-bar-div').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });

fetch('/footer.html')
    .then(result => {
        return result.text();
    })
    .then(html => {
        document.getElementById('footer-div').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    })



