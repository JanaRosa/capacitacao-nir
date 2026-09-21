/* =========================================================
   CAPACITA NIR — FUNCIONAMENTO DO MENU
   Idealização e desenvolvimento:
   Janaína Rosa Rodrigues da Silva — 2026
   ========================================================= */


/* =========================================================
   MENU LATERAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");

  /*
   * Abre e fecha o menu no celular
   */

  if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", function () {

      sidebar.classList.toggle("open");

      if (menuOverlay) {
        menuOverlay.classList.toggle("show");
      }

    });

  }


  /*
   * Fecha o menu quando o usuário
   * toca fora dele
   */

  if (menuOverlay) {

    menuOverlay.addEventListener("click", function () {

      sidebar.classList.remove("open");

      menuOverlay.classList.remove("show");

    });

  }


  /*
   * Fecha o menu depois que o usuário
   * escolhe uma opção no celular
   */

  if (sidebar) {

    const menuLinks =
      sidebar.querySelectorAll("a");

    menuLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        if (window.innerWidth <= 720) {

          sidebar.classList.remove("open");

          if (menuOverlay) {
            menuOverlay.classList.remove("show");
          }

        }

      });

    });

  }


  /*
   * Destaca automaticamente a opção
   * correspondente à página atual.
   */

  if (sidebar) {

    const currentPage =
      window.location.pathname.split("/").pop();

    const menuLinks =
      sidebar.querySelectorAll("a");

    menuLinks.forEach(function (link) {

      const linkPage =
        link.getAttribute("href");

      if (
        linkPage &&
        linkPage === currentPage
      ) {

        link.classList.add("active");

      }

    });

  }

});
