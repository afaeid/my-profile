var subBtn = document.querySelector('.mail-sender .submit button');
subBtn.onclick = ()=>{
  document.querySelector('.mail-sender .username').value = '';
  document.querySelector('.mail-sender .email').value = '';
  document.querySelector('.mail-sender .subject').value = '';
  document.querySelector('.mail-sender textarea').value = '';

  alert('Sorry! For security reasons we are currently disable to send messages from web. We are trying to fix it as soon as possible')
}
