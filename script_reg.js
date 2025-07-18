document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    document.getElementById("msg").textContent = "Please fill all fields!";
    return;
  }

  const userData = { name, email, password };

  // Save to localStorage (simulate database)
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  document.getElementById("msg").textContent = "Registration successful!";
  document.getElementById("registerForm").reset();
});
