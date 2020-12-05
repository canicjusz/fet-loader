function handleAnimations() {
    let animations = [
        ["bounce", "bounce"],
        ["flash", "flash"],
        ["pulse", "pulse"],
        ["shake", "shake"],
        ["headShake", "headShake"],
        ["swing", "swing"],
        ["tada", "tada"],
        ["wobble", "wobble"],
        ["jello", "jello"],
        ["heartBeat", "heartBeat"],
        ["bounceIn", "bounceIn"],
        ["bounceInDown", "bounceInUp"],
        ["bounceInLeft", "bounceInRight"],
        ["fadeIn", "fadeIn"],
        ["fadeInDown", "fadeInUp"],
        ["fadeInLeft", "fadeInRight"],
        ["flip", "flip"],
        ["flipInX", "flipInX"],
        ["flipInY", "flipInY"],
        ["rotateIn", "rotateIn"],
        ["rotateInDownLeft", "rotateInDownRight"],
        ["slideInDown", "slideInUp"],
        ["slideInLeft", "slideInRight"],
        ["zoomIn", "zoomIn"],
        ["zoomInDown", "zoomInUp"],
        ["zoomInLeft", "zoomInRight"],
        ["jackInTheBox", "jackInTheBox"],
    ];

    var num = getRandomInt(animations.length);

    animateCSS('[name="top"]', animations[num][0], animationOver);
    animateCSS('[name="bottom"]', animations[num][1], animationOver);
    console.log("top: " + animations[num][0]);
    console.log("bottom: " + animations[num][1]);
}

function addStuff() {
    at("main").innerHTML =
    `<h1 name="top"    id = "status_text" class="header animated"><a href="https://fetloader.xyz">fetloader.xyz</a></h1>
    <p  name="bottom" id = "text2" class="textiboi animated">Superior cheats loader for Counter-Strike Global Offensive</p>`;
    handleAnimations();
}

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    node.classList.add('delay-2s')

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var at = document.getElementById.bind(document);
window.addEventListener("DOMContentLoaded", () => {
    at("status_text").innerHTML = "loading";

});

window.addEventListener("load", () => {
    setTimeout(() => {
        if (!window.music.paused) {
            addStuff();
            console.log("music already started");
            return;
        }
        at("status_text").innerHTML = "click to enter";
        at("status_text").classList.add("begin");

    }, 100);
});

var temp = 0

function animationOver() {
    temp++;

    if (temp != 2)
        return;

    setTimeout(function() {
        console.log("animations over");
        var doc = document.getElementById("main");
        var inner = doc.innerHTML;
        // WOW this is aids.

        doc.innerHTML +=
            `<div class="textiboi">
        <a id="typElement"></a></div>
        <div class="textiboi">
        <a class="textiboi animated fadeIn" href="https://github.com/clangremlini/fet-loader">Source code</a>
        <a class="textiboi animated fadeIn" href="https://github.com/clangremlini/fet-loader/releases/latest">Download latest release</a>
        <a class="textiboi animated fadeIn" href="https://t.me/ayeloader">TG Channel</a>
        <div class="textiboi">
        <a class="textiboi animated fadeIn" href="https://bit.ly/36KENnu">Donate</a>`;

    }, 550);

}
