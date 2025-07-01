

fetch("https://rlbnwm.github.io/Jonathan-Cohen-Website/navbar.html")
    .then(result => {
        return result.text();

    }).then(html => {
        document.getElementById('nav-bar-div').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });

fetch('https://rlbnwm.github.io/Jonathan-Cohen-Website/footer.html')
    .then(result => {
        return result.text();
    })
    .then(html => {
        document.getElementById('footer-div').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    })
