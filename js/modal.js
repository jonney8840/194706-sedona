var link = document.querySelector(".search-btn");
var popup = document.querySelector(".modal-search");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("search-show")) {
    popup.classList.remove("search-show");
  } else {
    popup.classList.add("search-show");
  }
});
