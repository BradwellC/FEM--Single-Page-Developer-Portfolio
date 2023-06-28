const form = document.querySelector('.contact-form');

const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === '' ? false : true);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = nameEl.value.trim();
  const email = emailEl.value.trim();

  if (!isRequired(username)) {
    showError(nameEl, 'Name cannot be blank.');
  } else {
    showSuccess(nameEl);
    valid = true;
  }

  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Sorry, Invaild format here');
  } else {
    showSuccess(emailEl);
    valid = true;
  }

  return valid;
});

const showError = (input, message) => {
  // get the form-field element
  const formField = input;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};
