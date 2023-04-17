// Get the form element
const form = document.getElementById('registration-form');

// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Validate the form data
  const name = formData.get('name');
  const age = formData.get('age');
  const gender = formData.get('gender');
  const area = formData.get('area');
  const city = formData.get('city');
  const specialization = formData.get('specialization');
  const experience = formData.get('experience');
  const phone = formData.get('phone');

  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (age < 18 || age > 100) {
    alert('Please enter a valid age.');
    return;
  }

  if (gender === '') {
    alert('Please select your gender.');
    return;
  }

  if (area.trim() === '') {
    alert('Please enter the name of the area you live in.');
    return;
  }

  if (city.trim() === '') {
    alert('Please enter the name of the city you live in.');
    return;
  }

  if (specialization.trim() === '') {
    alert('Please enter your area of specialization.');
    return;
  }

  if (experience < 0) {
    alert('Please enter a valid number of years of experience.');
    return;
  }

  if (phone.trim() === '') {
    alert('Please enter your phone number.');
    return;
  }

  // Submit the form
  form.submit();
});