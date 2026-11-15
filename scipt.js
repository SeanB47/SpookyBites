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