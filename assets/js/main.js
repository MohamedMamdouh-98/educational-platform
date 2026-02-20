/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
  const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    header = document.getElementById(headerId),
    main = document.getElementById(mainId);

  if (toggle && sidebar && header && main) {
    toggle.addEventListener("click", () => {
      /* Show sidebar */
      sidebar.classList.toggle("show-sidebar");
      /* Add padding header */
      header.classList.toggle("left-pd");
      /* Add padding main */
      main.classList.toggle("left-pd");
    });
  }
};
showSidebar("header-toggle", "sidebar", "header", "main");

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll(".sidebar__list a");

function linkColor() {
  sidebarLink.forEach((l) => l.classList.remove("active-link"));
  this.classList.add("active-link");
}

sidebarLink.forEach((l) => l.addEventListener("click", linkColor));

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-fill";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[
    selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"
  ](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

function logout() {
  localStorage.removeItem("authUser");
  sessionStorage.removeItem("authUser");
  window.location.href = "/";
}

// Add event listener with null check
const logoutButton = document.getElementById("btn-log-out");
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
} else {
  console.error("Logout button not found!");
}

// Book Modal;;;;;;;;;;;;;;;;;;;;;;;;;;;;

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".guide-button");
  const modal = document.getElementById("bookModal");
  const closeBtn = modal.querySelector(".book-modal__close");
  const overlay = modal.querySelector(".book-modal__overlay");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    // document.body.classList.add("modal-open");
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  replaceHeaderLogo();
});

function replaceHeaderLogo() {
  const logoContainer = document.querySelector(".header__logo");
  if (!logoContainer) return;

  logoContainer.innerHTML = "";

  const img = document.createElement("img");
  img.src = "/assets/img/logo/logo.png";
  img.alt = "Logo";
  img.style.width = "120px";
  img.style.height = "auto";
  img.style.objectFit = "contain";

  logoContainer.appendChild(img);
}

document.addEventListener("DOMContentLoaded", replaceHeaderLogo);
