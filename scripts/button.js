const checkbox = document.getElementById('email-form__checkbox__accept');
const btn = document.querySelector('.email-form__submit--sign-up');

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

