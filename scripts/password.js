const btnFirst = document.getElementById('btnFirst');
const btnSecond = document.getElementById('btnSecond');
const signButton = document.querySelector('.email-form__submit--sign-up');
const warningMessage = document.querySelector('.warning-message');

signButton.addEventListener('click', function () {
  if (btnFirst.value !== btnSecond.value) {
    warningMessage.style.display = "block";
  } else {
    warningMessage.style.display = "none";
  }
});