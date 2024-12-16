const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thanks for registering! See you then 😊");

  registrationForm.reset();
});

const donationForm = document.getElementById("donationForm");

donationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const donationType = document.querySelector('input[name="donation"]:checked');

  if (donationType) {
    if (donationType.value === "once") {
      alert(
        "Thank you for your one-time donation! Your support means a lot. 😊"
      );
    } else if (donationType.value === "recurring") {
      alert(
        "Thank you for setting up a recurring donation! Your ongoing support makes a big difference. 🌟"
      );
    }
  } else {
    alert("Please select a donation type.");
  }

  donationForm.reset();
});
