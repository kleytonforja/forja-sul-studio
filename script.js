const whatsappButton =
    document.getElementById("whatsappButton");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");

    const menuEstaAberto =
        mainNav.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuEstaAberto
    );

    menuToggle.textContent =
        menuEstaAberto ? "✕" : "☰";
});

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    });

});
whatsappButton.addEventListener(
    "click",
    function () {

        alert(
            "Na próxima etapa vamos conectar este botão ao WhatsApp da Forja Sul Studio."
        );

    }
);