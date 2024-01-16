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

    $(document).ready(function () {
        $("div[data-includeHTML]").each(function () {                
            $(this).load($(this).attr("data-includeHTML"));
        });
    });



    window.onload = function () {
        var cursor = document.getElementById('cursor');
        cursor.style.opacity = 1;
        cursor.classList.add('typing-cursor');
        typeWriter();
    }


    var speed = 39;
    var deletespeed = 20;
    var forward = true; // Flag to control typing direction

    function typeWriter() {
        var i = 0;
        var typewriterElement = document.getElementById("typewriter");

        var initialText = "Hi, my name is Aloysius";
        var defaultText = "Welcome to my portfolio";

        var currentText = initialText; // Start with the initial text

        function type() {
            if (i < currentText.length && forward) {
                typewriterElement.textContent += currentText.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                forward = false; // Change direction to rewinding
                setTimeout(rewind, 2000); // Wait for 2 seconds, then rewind
            }
        }

        function rewind() {
            if (i >= 0 && !forward) {
                typewriterElement.textContent = currentText.substring(0, i);
                i--;
                setTimeout(rewind, deletespeed);
            } else {
                forward = true; // Change direction to typing
                i = 0; // Reset the position

                // Switch between initial and default text
                currentText = currentText === initialText ? defaultText : initialText;
                setTimeout(type, 0); // Start typing again
            }
        }

        type();
    }


