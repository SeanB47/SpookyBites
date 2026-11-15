const restaurantName = "Spooky Bites";
let isOpen = true; 
 
let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;
 
const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};
 
const status = document.getElementById("status");
const result = document.getElementById("result");
 
function displayStatus() {
  status.textContent = isOpen
    ? "We are OPEN!"
    : "We are CLOSED!";
}
 
function toggleStatus() {
  isOpen = !isOpen;
  displayStatus();
}

function showGreeting() {
  const name = document.getElementById("customer").value.trim();
  if (!name) {
    result.textContent = "Please enter your name first!";
    return;
  }
  result.textContent = "Boo! Happy Halloween, " + name + "! Ready for a spooky meal?";
}
 
function recommendMeal(amount) {
  if (amount < 200) {
    return "Try adding a Pumpkin Pasta next time!";
  } else if (amount < 400) {
    return "Pair it with a Spider Pizza for the full spooky feast!";
  } else {
    return "Wow, big order! A Ghost Burger makes a great treat for the road.";
  }
}
 
function placeOrder() {
  customerName = document.getElementById("customer").value.trim();
  const selectedMeal = document.getElementById("meal").value;
  quantity = Number(document.getElementById("quantity").value);
 
  if (!customerName) {
    result.textContent = "Please enter your name first!";
    return;
  }
 
  if (!Number.isInteger(quantity) || quantity < 1) {
    result.textContent = "Please enter a valid quantity.";
    return;
  }
 
  if (!isOpen) {
    result.textContent = "Sorry! The restaurant is closed.";
    return;
  }
 
  mealPrice = prices[selectedMeal];
  total = mealPrice * quantity;
 
  let discountMessage = "";
  if (total >= 300) {
    const discount = total * 0.10;
    total = total - discount;
    discountMessage = " You got a 10% discount (-₱" + discount.toFixed(2) + ").";
  }
 
  const confirmed = confirm(
    "Order " + quantity + " " + selectedMeal + "(s) for ₱" + total.toFixed(2) + "?"
  );
  if (!confirmed) {
    result.textContent = "Order cancelled. Come back anytime!";
    return;
  }
 
  result.textContent =
    "Thank you, " + customerName + "! Your order: " +
    quantity + " " + selectedMeal + "(s). Total: ₱" + total.toFixed(2) + "." +
    discountMessage + " " + recommendMeal(total) + " Enjoy your spooky meal!";
}
 
function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}
 
displayStatus();
 
document.getElementById("orderBtn").addEventListener("click", placeOrder);
document.getElementById("greetBtn").addEventListener("click", showGreeting);
document.getElementById("toggleBtn").addEventListener("click", toggleStatus);
document.querySelector('a[href="#menu"]').addEventListener("click", showMenuMessage);
