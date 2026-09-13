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

whatsappButton.addEventListener(
    "click",
    function () {

        alert(
            "Na próxima etapa vamos conectar este botão ao WhatsApp da Forja Sul Studio."
        );

    }
);