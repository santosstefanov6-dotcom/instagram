// Лек ефект при движение на мишката

document.addEventListener("mousemove", (event) => {

    const card = document.querySelector(".card");

    const x = (window.innerWidth / 2 - event.clientX) / 80;
    const y = (window.innerHeight / 2 - event.clientY) / 80;

    card.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

    const card = document.querySelector(".card");

    card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

});