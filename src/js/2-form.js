const form = document.querySelector('.feedback-form');
const emailKey = 'feedback-form-email';
const messageKey = 'feedback-form-message';

form.elements.email.value = localStorage.getItem(emailKey) ?? '';
form.elements.message.value = localStorage.getItem(messageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(emailKey, form.elements.email.value.trim());
  localStorage.setItem(messageKey, form.elements.message.value.trim());
});
form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.email.value);
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(emailKey);
  localStorage.removeItem(messageKey);
  form.reset();
});
