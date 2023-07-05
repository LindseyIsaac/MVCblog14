const createUser = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector("#username-input-signup").value.trim();
    const password = document.querySelector("#password-input-signup").value.trim();
    // make sure new user not a clone
    if (username && password) {
      const response = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector("#signup-form").addEventListener("submit", createUser);