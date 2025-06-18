


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

// CTA Banner

// CTA Banner fade out functionality
window.addEventListener('scroll', function () {
    const ctaBanner = document.getElementById('cta-banner');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate when we're near the bottom of the page
    const bottomThreshold = documentHeight - windowHeight - 100; // 100px from bottom

    if (scrollPosition >= bottomThreshold) {
        // Fade out the banner when near bottom
        const opacity = Math.max(0, 1 - ((scrollPosition - bottomThreshold) / 100));
        ctaBanner.style.opacity = opacity;
        ctaBanner.style.transition = 'opacity 0.3s ease';
    } else {
        // Show the banner normally
        ctaBanner.style.opacity = '1';
    }
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {  // When you scroll down 50px
        console.log("Scroll identified");
        navbar.classList.add('navbar-faded');
    } else {
        navbar.classList.remove('navbar-faded');
    }
});
