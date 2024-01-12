var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var mailError = document.getElementById("email-error");
var textError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("contact-no").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    mailError.innerHTML = "Email is Required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    mailError.innerHTML = "Invalid Email";
    return false;
  }
  mailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
function validateText() {
  var message = document.getElementById("message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    textError.innerHTML = left + "Characters Required";
    return false;
  }
  textError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateText()
  )
    submitError.style.display = "block";

  submitError.innerHTML = "please fix error to submit";

  setTimeout(function () {
    submitError.style.display = "none";
  }, 3000);
  return false;
}
