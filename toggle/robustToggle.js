// In HTML remove checked="darkTheme"

// In css handle the dark theme:
// body.dark-theme {...}

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("input");

  // Load saved theme preference
  if (localStorage.getItem("darkTheme") === "true") {
    themeToggle.checked = true;
    document.body.classList.add("dark-theme");
  } else {
    themeToggle.checked = false;
    document.body.classList.remove("dark-theme");
  }

  // Listen for toggle changes
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("darkTheme", "false");
    }
  });
});
