document.getElementById("year").textContent = new Date().getFullYear();

const banner = document.getElementById("cookieBanner");
const modal = document.getElementById("cookieModal");
const storedChoice = localStorage.getItem("cookiePreference");
if (!storedChoice) banner.hidden = false;

document.getElementById("cookieAccept").addEventListener("click", () => {
  localStorage.setItem("cookiePreference", "essential-only");
  banner.hidden = true;
});
document.getElementById("cookieSettings").addEventListener("click", () => { modal.hidden = false; });
document.querySelector("[data-open-cookies]").addEventListener("click", () => { modal.hidden = false; });
document.getElementById("cookieClose").addEventListener("click", () => { modal.hidden = true; });
document.getElementById("cookieSave").addEventListener("click", () => {
  localStorage.setItem("cookiePreference", "essential-only");
  modal.hidden = true;
  banner.hidden = true;
});
