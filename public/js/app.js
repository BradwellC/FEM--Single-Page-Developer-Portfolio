const form = document.querySelector('.contact-form');

const name = document.querySelector('#name');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  // prevent form submitting
  e.preventDefault();
});

const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
