function confirmLogin() {
  let formElements = document.getElementById('loginForm').elements

  if (verifyCred(formElements[0].value, formElements[1].value))
    location.href = '/user.html';
}

function verifyCred(username, password) {
  if (username == 'André' && password == '123456789')
    return true
  return false
}

module.exports = { verifyCred: verifyCred };