const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = '表單尚未連接寄送服務，您的訊息尚未送出。';
});
