const addressbtn = document.querySelector("#address-form");
const addressClose = document.querySelector("#address-close");

addressbtn.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});

addressClose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});
