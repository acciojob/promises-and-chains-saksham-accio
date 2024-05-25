// Function to handle button click
document.getElementById("btn").addEventListener("click", function() {
  // Get form inputs
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  // Get values from inputs
  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  // Validate inputs
  if (!age || !name) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a promise for form submission handling
  const submissionPromise = new Promise((resolve, reject) => {
    // Simulate asynchronous processing with setTimeout
    setTimeout(() => {
      if (age >= 18) {
        // Resolve the promise if age is 18 or above
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        // Reject the promise if age is below 18
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Simulating 4 seconds delay
  });

  // Handling promise resolution
  submissionPromise
    .then(message => {
      alert(message);
    })
    .catch(error => {
      alert(error);
    });
});
