const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabLinks);
console.log(tabContent);

tabLinks.forEach(function (e) {
  e.addEventListener("click", openTabs);
});

function openTabs(e) {
  const btnTarget = e.currentTarget;
  const type = btnTarget.dataset.type;

  tabContent.forEach(function (e) {
    e.classList.remove("active");
  });

  tabLinks.forEach(function (e) {
    e.classList.remove("active");
  });

  document.querySelector("#" + type).classList.add("active");

  btnTarget.classList.add("active");
}