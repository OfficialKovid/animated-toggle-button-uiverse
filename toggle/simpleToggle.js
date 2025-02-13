// (Compulsory)In HTML remove checked="darkTheme"

// In css handle the dark theme:
// body.dark-theme {...}
document
  .getElementById("input")
  .addEventListener("change", () =>
    document.body.classList.toggle("dark-theme")
  );

