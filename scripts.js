document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for contacting RadioMK! We will get back to you soon.");
});

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set the date and time on load
