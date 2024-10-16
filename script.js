(function() {
    emailjs.init("jWAkobnISgE3VipTx"); // Replace with your EmailJS user ID
 })();
 
function openHireMeForm() {
    document.getElementById("hireMeForm").style.display = "block";
}

function closeHireMeForm() {
    document.getElementById("hireMeForm").style.display = "none";
}

   document.getElementById('hireMeFormEmailJS').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the default way

      // Send the form data using EmailJS
      emailjs.sendForm('service_leljx6e', 'template_a3q7jzb', this)
         .then(function() {
            alert('Your message has been sent successfully!');
         }, function(error) {
            alert('There was an error sending your message. Please try again.');
         });
   });

