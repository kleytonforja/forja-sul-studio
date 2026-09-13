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

        const numeroWhatsApp = "5548999999999";

        const mensagem =
            "Olá! Vi o site da Forja Sul Studio e gostaria de saber mais sobre as soluções digitais.";

        const mensagemCodificada =
            encodeURIComponent(mensagem);

        const urlWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(
            urlWhatsApp,
            "_blank"
        );

    }
);