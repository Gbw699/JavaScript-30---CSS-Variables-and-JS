const input = document.querySelectorAll(".input");

function changer() {
  const suffix = this.dataset.suffix || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

input.forEach((input) => {
  input.addEventListener("input", changer);
  input.addEventListener("mousemove", changer);
});
