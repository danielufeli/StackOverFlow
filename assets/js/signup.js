const signUpForm = (e) => {
  e.preventDefault();
  const fiName = document.getElementById('fname').value;
  const laName = document.getElementById('lname').value;
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const userPassword1 = document.getElementById('confirmpassword').value;

  const url = 'https://stack-o-lite.herokuapp.com/api/v1/auth/signup';

  const signUpData = {
    firstName: fiName,
    lastName: laName,
    email: userEmail,
    password: userPassword,
    confirmPassword: userPassword1,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  })
    .then(res => res.json())
    .then((body) => {
      if (body.status === 'success') {
        localStorage.setItem('token', body.data.token);
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('errorlog').innerHTML = body.message;
      }
    });
};
const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', signUpForm);
