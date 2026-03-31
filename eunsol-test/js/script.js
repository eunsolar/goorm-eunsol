emailjs.init("abahbAUNNE71LUcz4");

function sendMail() {
  var btn = document.getElementById('send-btn');
  var name = document.getElementById('from_name').value.trim();
  var email = document.getElementById('from_email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('모든 항목을 입력해주시면 감사합니다!');
    return;
  }

  btn.textContent = 'SENDING...';
  btn.disabled = true;

  emailjs.send("service_vu77341", "template_4buej7k", {
    name: name,
    from_email: email,
    message: message,
    time: new Date().toLocaleString('ko-KR')
  }).then(function() {
    btn.textContent = 'SENT! ✓';
    btn.style.background = '#C8E6C9';
    document.getElementById('from_name').value = '';
    document.getElementById('from_email').value = '';
    document.getElementById('message').value = '';
    setTimeout(function() {
      btn.textContent = 'SEND ▶';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, function(error) {
    alert('전송 실패! 다시 시도해주세요!');
    btn.textContent = 'SEND ▶';
    btn.disabled = false;
  });
}