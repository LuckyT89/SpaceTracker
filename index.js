fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
    return response.json();
}).then(function(json) {
    let astroCount = json['number'];
    let span = document.getElementById('astro-count');
    span.textContent = astroCount;
});