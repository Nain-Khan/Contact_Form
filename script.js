document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Optionally, you can do validation or submit to a backend here
  alert("Thank you! Your message has been submitted.");

  // Reset form
  this.reset();
});
