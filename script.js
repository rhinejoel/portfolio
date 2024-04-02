function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
			
// SELECT SPECIFIC PROJECTS
$(document).on("click", ".project-filter li", function () {
    $(this)
    .addClass("project-filter-active")
    .siblings()
    .removeClass("project-filter-active");
});

$(document).ready(function () {
    $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
        $(".project-article").show();
    } else {
        console.log(value);
        $(".project-article")
        .not("." + value)
        .hide();
        $(".project-article")
        .filter("." + value)
        .show();
    }
    });
});

// LIGHTBOX
// LIGHTBOX TRANSITION SPEED
lightbox.option({
    resizeDuration: 50,
    fadeDuration: 50,
    imageFadeDuration: 0,
    wrapAround: false,
    alwaysShowNavOnTouchDevices: true
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

// TYPEWRITER
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.12em solid rgb(98, 98, 98)} .typewrite {color: rgb(98, 98, 98)}";
    document.body.appendChild(css);
};