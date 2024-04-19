// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Print form data
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // add data after submitting the form
    addData(fullname, email, phone, subject, message);
}

// Function to add data
function addData(fullname, email, phone, subject, message) {
    fetch('http://localhost:8081/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, phone, subject, message }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);
            // Optionally, you can update the UI here with the response data
        })
        .catch(error => console.error('Error:', error));
}



function fetchAllData() {
    fetch('http://localhost:8081/getAllData')
        .then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            // Process the retrieved data here, such as displaying it in the UI
        })
        .catch(error => console.error('Error:', error));
}

// Attach submitForm function to form submit event
document.getElementById('contactForm').addEventListener('submit', submitForm);
