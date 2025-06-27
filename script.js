const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(button => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
