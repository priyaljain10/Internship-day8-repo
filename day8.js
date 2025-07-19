const form = document.getElementById("registrationForm");

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const branch = document.getElementById('branch');
  const year = document.getElementById('year');
  const password = document.getElementById('password');
  const message = document.getElementById('successMessage'); 

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const branchError = document.getElementById("branchError");
  const yearError = document.getElementById("yearError");
  const passwordError = document.getElementById("passwordError");
  
  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  branchError.textContent = "";
  yearError.textContent = "";
  passwordError.textContent = "";
  message.textContent = "";

  if (!name){
    nameError.textContent = "Name is required";
    isValid=false;
  }

  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes('@')) {
    emailError.textContent = 'Invalid email address';
    isValid = false;
  }

  if (!branch) {
    branchError.textContent = 'Branch is required';
    isValid = false;
  }

  if (!year) {
    yearError.textContent = 'Year is required';
    isValid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    message.textContent = "Registration successful!";
    message.style.color ="green";
    document.getElementById("strength").textContent = "";
    form.reset();
  } else {
    message.textContent = "Please fix the errors above.";
    message.style.color = "brown";
    }
});

document.getElementById('password').addEventListener('input', function() {
  const strength = document.getElementById('strength');
  const value = this.value;
 
   if (!value) {
    strength.textContent = '';
    return;
  }

  if (value.length < 6) {
    strength.textContent = 'Weak password';
    strength.style.color = 'red';
  } else if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) {
    strength.textContent = 'Strong password';
    strength.style.color = 'green';
  } else {
    strength.textContent = 'Medium password';
    strength.style.color = 'orange';
  }

});

  


