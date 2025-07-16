document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const branch = document.getElementById('branch');
  const year = document.getElementById('year');
  const password = document.getElementById('password');
  const message = document.getElementById('message');

  document.querySelectorAll('.error').forEach(el => el.textContent='');
  
   let isValid = true;

  if (!name){
    showError(name, 'Name is required');
    isValid=false;
  }

  if (!email) {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!email.value.includes('@')) {
    showError(email, 'Invalid email format');
    isValid = false;
  }

  if (!branch) {
    showError(branch, 'Branch is required');
    isValid = false;
  }

  if (!year) {
    showError(year, 'Year is required');
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters');
    isValid = false;
  }

  if (isValid) {
    document.getElementById("registrationForm").style.color ='green';
    document.getElementById("registrationForm").displaytext = 'Registration successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Please fix the errors above.';
  }
});

document.getElementById('password').addEventListener('input', function() {
  const strength = document.getElementById('strength');
  const value = this.value;
 
   if (value.length === 0) {
    strength.textContent = '';
    return;
  }

  if (value.length < 6) {
    strength.textContent = 'Weak';
    strength.style.color = 'red';
  } else if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) {
    strength.textContent = 'Strong';
    strength.style.color = 'green';
  } else {
    strength.textContent = 'Medium';
    strength.style.color = 'orange';
  }

});

  


