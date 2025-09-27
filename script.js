// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name.length < 3) {
    alert("Name must have at least 3 characters.");
    return;
  }
  if (email === "") {
    alert("Email cannot be empty.");
    return;
  }

  alert("Form submitted successfully! We will contact you soon.");
});

// Dynamic Buy button
let buttons = document.querySelectorAll(".buyBtn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for your interest! This item will be available soon.");
  });
});