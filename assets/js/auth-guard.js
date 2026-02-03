// assets/js/auth-guard.js

// Fetch user data from localStorage only
const authUser = JSON.parse(localStorage.getItem("authUser"));

const path = window.location.pathname;

// Public Pages only
const publicPages = [
  "/", // root
  "/index.html", // landing
  "/login/", // login folder
  "/login/index.html", // login file
];

// Is the page public?

const isPublicPage = publicPages.includes(path);

// If not logged in and not a public page → Return to login
if (!authUser && !isPublicPage) {
  window.location.href = "/login/";
}

// If logged in and entered login → Return to home
if (authUser && path.includes("/login")) {
  window.location.href = "/home/";
}
