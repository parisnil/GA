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

  // Hämta alla navigationslänkar
  const navLinks = document.querySelectorAll(".menu_link");
});
