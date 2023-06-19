// function to sync session with logged in user
const loginUser = async (event) => {
    event.preventDefault();
    // local variables
    const username = document.querySelector("#submit-username").value.trim();
    const password = document.querySelector("#submit-password").value.trim();
    // got a light, check for matches
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      // good match show shelf, bad match yell at user
      if (response.ok) {
        document.location.replace("/shelf");
      } else {
        alert(response.statusText);
      }
    }
  };
  

  
  // review view port to find appropriate locations to listen in order to execute functions
  document.querySelector("#login-form").addEventListener("submit", loginUser);