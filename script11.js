const clock = document.getElementById("clock");
const theme = document.getElementById("theme");

function update() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(update, 1000);
update();

theme.addEventListener("mouseover", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor == "black" ? "white" : "black";
});
