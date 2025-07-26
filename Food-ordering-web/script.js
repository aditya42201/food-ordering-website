function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart!");
}

function signupUser(e) {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  localStorage.setItem("user", JSON.stringify({ email, pass }));
  alert("Signup successful!");
  window.location.href = "login.html";
}

function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.pass === pass) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
}
