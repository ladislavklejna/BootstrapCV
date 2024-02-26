document.addEventListener("DOMContentLoaded", function () {
  //navbar
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const collapseNavbar = function () {
    // Ověříme, zda je navigační menu v rozbalovacím režimu
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(
        navbarToggler.nextElementSibling,
        {
          toggle: false,
        }
      );
      bsCollapse.hide();
    }
  };

  navLinks.forEach(function (link) {
    link.addEventListener("click", collapseNavbar);
  });

  //Vysvětlení:
  // nextElementSibling je JavaScriptová vlastnost, která vrátí element, který je bezprostředně
  // následující sourozencem daného elementu v DOM stromu. V tomto případě hledáte element,
  // který je hned za navbarToggler v HTML struktuře. V kontextu Bootstrap navigace, tento element
  // obvykle reprezentuje rozbalovací část navigační lišty. Pak vytváříte instanci
  // Bootstrap Collapse komponenty pro tento element, kterou pak můžete programově skrýt.

  //tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
