document.getElementById('login').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const validateCheckbox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

validateCheckbox.addEventListener('change', () => {
  if (validateCheckbox.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
});
