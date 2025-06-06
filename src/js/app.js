

fetch("/navbar.html")
    .then(result => {
        return result.text();

    }).then(html => {
        document.getElementById('nav-bar-div').innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    })