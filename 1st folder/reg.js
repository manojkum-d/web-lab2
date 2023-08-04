function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields');
    return false;
  }

  // Additional validation and submission logic can be added here

  return true;
}
