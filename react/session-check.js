function zytronixRequireSession() {
  const token = localStorage.getItem('zytronix_token');

  if (!token) {
    window.location.href = './login.html';
  }
}

function zytronixLogout() {
  localStorage.removeItem('zytronix_token');
  window.location.href = './login.html';
}
