function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }
}

function validateEmail2(){
  const emailInput = document.getElementById("email-2");
  const errorMessage = document.getElementById("error-message-2");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }
}