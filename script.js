function submitForm() {
    var formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        address: document.getElementById('address').value,
        pincode: document.getElementById('pincode').value,
        gender: document.getElementById('gender').value,
        food: document.getElementById('food').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value
    };

    // Validate if form data is not empty
    if (Object.values(formData).every(value => value !== '')) {
        // Perform further actions here (e.g., update table, send data to server, etc.)
        console.log('Form data submitted:', formData);
        clearForm();
    } else {
        alert('All fields are required.');
    }
}

function clearForm() {
    document.getElementById('myForm').reset();
}
