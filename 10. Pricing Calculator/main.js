// grab everything
const priceInput = document.querySelector("[name=price]");
const quantityInput = document.querySelector("[name=quantity]");
const total = document.querySelector(".total");
const icon = document.querySelector(".icon");

// create the functions that we'll need
function calculatePieCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  total.innerText = `$${cost.toFixed(2)}`;
}

function updateIcon() {
  const quantity = quantityInput.value;
  icon.innerText = quantity;
}

// add our event listeners
priceInput.addEventListener("input", calculatePieCost);
quantityInput.addEventListener("input", calculatePieCost);
quantityInput.addEventListener("input", updateIcon);

calculatePieCost();
updateIcon();
