const usernameInputFieldElement = document.querySelector('.js-username-input-field');
const sendButtonElement = document.querySelector('.js-send-button');

sendButtonElement.addEventListener('click', () => {

  location.reload();

})

usernameInputFieldElement.addEventListener('input', () => {
  const username = usernameInputFieldElement.value;
  if (username.length === 5) {
    usernameInputFieldElement.classList.add('animation-weight-1');
  } else if (username.length === 7) {
    usernameInputFieldElement.blur();
    usernameInputFieldElement.classList.add('animation-weight-2');
  } else if (username.length === 10) {
    usernameInputFieldElement.blur();
    usernameInputFieldElement.classList.add('animation-weight-3');
  }
});

usernameInputFieldElement.addEventListener('animationend', () => {

  if (!usernameInputFieldElement.classList.contains('animation-weight-3')) {
    usernameInputFieldElement.focus({preventScroll : true});
  }

})