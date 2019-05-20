const signForm = (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;

  const url = 'https://stack-o-lite.herokuapp.com/api/v1/auth/login/';

  const signInData = {
    email: userEmail,
    password: userPassword,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInData),
  })
    .then(res => res.json())
    .then((body) => {
      console.log(body);
      if (body.status === 'success') {
        localStorage.setItem('token', body.data.token);
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('errorlog').innerHTML = body.message;
      }
    });
};
const signBtn = document.getElementById('loginBtn');
signBtn.addEventListener('click', signForm);
