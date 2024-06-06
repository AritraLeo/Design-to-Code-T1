document.getElementById('contact-button').addEventListener('click', function () {
    console.log('Button clicked');
    document.getElementById('modal-overlay').style.display = 'flex';
    document.getElementById('modal-overlay').style.justifyContent = 'center';
    document.getElementById('modal-overlay').style.alignItems = 'center';
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target.id === 'modal-overlay') {
        console.log('Overlay clicked');
        document.getElementById('modal-overlay').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    }
});

// scroll of services


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".services-container");
    const cards = document.querySelectorAll(".services-card");
    const totalWidth = (cards[0].offsetWidth + 30) * cards.length; // Card width + gap

    container.style.width = `${totalWidth}px`;

    function moveFirstToEnd() {
        container.appendChild(container.firstElementChild);
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        setTimeout(() => {
            container.style.transition = "transform 10s linear";
            container.style.transform = `translateX(-${totalWidth}px)`;
        }, 20);
    }

    container.addEventListener("transitionend", moveFirstToEnd);
    setTimeout(() => {
        container.style.transform = `translateX(-${totalWidth}px)`;
    }, 20);
});



// svg src changes on hover

document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot-row div img");

    function handleMouseEnter(event) {
        dots.forEach(dot => dot.src = "./images/2.svg");
        event.target.src = "./images/1.svg";
    }

    function handleMouseLeave() {
        dots.forEach(dot => dot.src = "./images/2.svg");
        dots[0].src = "./images/1.svg";
    }

    dots.forEach(dot => {
        dot.addEventListener("mouseenter", handleMouseEnter);
        dot.addEventListener("mouseleave", handleMouseLeave);
    });

    // Ensure the first dot is 1.svg initially
    dots[0].src = "./images/1.svg";
});


// project image change
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("main-image");
    const section1 = document.getElementById("section-1");
    const section3 = document.getElementById("section-3");

    section1.addEventListener("click", function () {
        mainImage.src = "./images/3-2.png";
    });

    section1.addEventListener("mouseout", function () {
        mainImage.src = "./images/image.png";
    });

    section3.addEventListener("click", function () {
        mainImage.src = "./images/3-2.png";
    });

    section3.addEventListener("mouseout", function () {
        mainImage.src = "./images/image.png";
    });
});
