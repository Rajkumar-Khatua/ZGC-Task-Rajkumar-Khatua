// JavaScript to toggle visibility of the search input
document
  .getElementById("searchToggleBtn")
  .addEventListener("click", function () {
    document.getElementById("searchForm").classList.toggle("d-none");
  });
