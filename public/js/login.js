const loginUser = async (event) => {
    event.preventDefault();
   
    const username = document.querySelector("#username-input-login").value.trim();
    const password = document.querySelector("#password-input-login").value.trim();
   
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      // 16
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  };
    
  document.querySelector("#login-form").addEventListener("submit", loginUser);