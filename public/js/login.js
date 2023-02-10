var loginBtn = document.getElementById("login");

const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send the e-mail and password to the server

    const response = await fetch("/api/users/login", {
      method: "POST",

      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in");
    }
  }
};

var signUpBtn = document.getElementById("signup-form");

// TODO: ask Andrew
const signupFormHandler = async (event) => {  
  event.preventDefault();
  const fName = document.querySelector("#fname").value.trim();
  const lName = document.querySelector("#lname").value.trim();  
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  
  if (fName && lName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ fName, lName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("didn't work");
    }
  }
};

signUpBtn.onclick = signupFormHandler


document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

 
