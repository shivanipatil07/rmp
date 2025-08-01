document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');
  
    if (username === "" || password === "") {
      errorMsg.textContent = "Please enter both username and password.";
    } else {
      errorMsg.textContent = "";
      alert(`Logged in as ${username}`);
      // Here you can redirect or send data to a server
    }
  });
  