$(document).ready(function () {
    // Change the navbar background and text color when scrolling
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('transparent').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled').addClass('transparent');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hiddenLeft');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hiddenRight');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {


    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circleCursor");

    const colors = [
        "#ffff00",
        "#fef600",
        "#fdee00",
        "#fbe500",
        "#f9dd00",
        "#f7d400",
        "#f4cc00",
        "#f1c400",
        "#eebc00",
        "#eab402",
        "#e7ac07",
        "#e3a40b",
        "#de9c0f",
        "#d99512",
        "#d58e15",
        "#cf8617",
        "#ca7f19",
        "#c4781b",
        "#bf711c",
        "#b96b1d",
        "#b2641e",
        "#ac5e1f"

    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;

    });

    function animateCircles() {

        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();


});
