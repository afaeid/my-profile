var subBtn = document.querySelector('.mail-sender .submit button');
var userName =  document.querySelector('.mail-sender .username');
var userEmail = document.querySelector('.mail-sender .email')
var userSubject = document.querySelector('.mail-sender .subject');
var userMsg = document.querySelector('.mail-sender textarea');

subBtn.onclick = ()=>{
userName.value = '';
userEmail.value = '';
userSubject.value = '';
userMsg.value = '';

alert('Sorry! For security reasons we are currently disable to send messages from web. We are trying to fix it as soon as possible')

}
