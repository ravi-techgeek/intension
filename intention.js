const form = document.getElementById("f");
const input = document.getElementById("s");

input.focus();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) {
    input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
    return;
  }
  // replace() keeps the Intention page out of history, so Back doesn't loop you here.
  location.replace("https://www.youtube.com/results?search_query=" + encodeURIComponent(query));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { input.value = ""; input.focus(); }
});
