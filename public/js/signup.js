  // function for new user
  const createUser = async (event) => {
    event.preventDefault();
    // local variables
    const username = document.querySelector("#create-username").value.trim();
    const email = document.querySelector("#create-email").value.trim();
    const password = document.querySelector("#create-password").value.trim();
    // make sure new user not a clone
    if (username && email && password) {
      const response = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      // user approved allow shelf view, disapproved user gets yelled at
      if (response.ok) {
        document.location.replace("/shelf");
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector("#signup-form").addEventListener("submit", createUser);