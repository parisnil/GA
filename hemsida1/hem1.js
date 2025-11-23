document.addEventListener("DOMContentLoaded", function () {
  const meny_knapp = document.getElementById("meny_knapp");
  const meny = document.getElementById("meny");
  const close_meny = document.getElementById("close_meny");
  const meny_over = document.getElementById("meny_over");

  if (meny_knapp && meny && close_meny && meny_over) {
    meny_knapp.addEventListener("click", () => {
      meny.classList.add("active");
      meny_over.classList.add("active");
    });

    close_meny.addEventListener("click", () => {
      meny.classList.remove("active");
      meny_over.classList.remove("active");
    });

    meny_over.addEventListener("click", () => {
      meny.classList.remove("active");
      meny_over.classList.remove("active");
    });
  }

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".menu_link");

  navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#e74c3c';
            link.style.fontWeight = 'bold';
        }
    });

  const kontakt = document.getElementById("kontakt");
  if (kontakt) {
    kontakt.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(kontakt);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (!name || !email || !message) {
        alert("Vänligen fyll i alla fält.");
        return;
      }

      alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
      kontakt.reset();
    });
  }
});
