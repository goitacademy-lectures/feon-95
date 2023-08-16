const formEl = document.querySelector('.modal-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const { user_name, user_email, user_password } = event.currentTarget.elements;
  console.log('🚀 ~ user_password:', user_password.value);
  console.log('🚀 ~ user_email:', user_email.value);
  console.log('🚀 ~ user_name:', user_name.value);

  event.currentTarget.reset();
});
