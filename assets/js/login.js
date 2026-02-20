import users from "../../data/usres-data.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    // SweetAlert2 is an alternative to the traditional alert
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email or password is incorrect!",
    });
    return;
  }

  const userData = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    isLoggedIn: true,
  };

  //Save directly to localStorage
  localStorage.setItem("authUser", JSON.stringify(userData));

  // SweetAlert2 for success before redirect
  Swal.fire({
    icon: "success",
    title: "Logged in!",
    text: `Welcome, ${user.username}!`,
    timer: 1500,
    showConfirmButton: false,
  }).then(() => {
    window.location.href = "/modules/"; // Redirect to modules page after login
  });
});
