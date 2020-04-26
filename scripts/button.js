const checkbox = document.getElementById('email-form__checkbox__accept');
const btn = document.querySelector('.email-form__submit--sign-up');

console.log(checkbox.checked);
console.log(btn);

checkbox.addEventListener("click", function () {
  console.log(checkbox.checked);
  if (checkbox.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

