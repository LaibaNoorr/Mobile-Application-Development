// Shopping Cart Array to hold items
let cart = [];

// Function to add product to the cart using push method
const addItemToCart = (productId, productName, quantity, price) => {
  cart.push({ productId, productName, quantity, price });
  // Notify the user that the item has been added
  console.log(`${productName} has been added to the cart.`);
};

// Function to remove an item from the cart by productId using splice method
const removeItemFromCart = (productId) => {
    // Find the index of the item with the given productId
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    const removedItem = cart.splice(index, 1);
    console.log(`${removedItem[0].productName} has been removed from the cart.`);
  } else {
    console.log(`Item with productId: ${productId} not found.`);
  }
};

// Function to update the quantity of  item in the cart using array
const updateItemQuantity = (productId, newQuantity) => {
     // Map through the cart array and update the quantity of the matching item
  cart = cart.map(item => 
    item.productId === productId 
      ? { ...item, quantity: newQuantity } 
      : item
  );
  console.log(`Quantity updated for productId: ${productId}.`);
};

// Function to calculate the total cost
const calculateTotalCost = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Function to display a cart summary
const displayCartSummary = () => {
  console.log("Cart Summary:");
  cart.map(item => {
    const totalItemPrice = item.price * item.quantity;
    console.log(`Product: ${item.productName}, Quantity: ${item.quantity}, Total Price: $${totalItemPrice}`);
  });
};

// Function to filter out items with zero quantity
const filterZeroQuantityItems = () => {
     // Filter the cart to keep only items with a quantity greater than 0
  cart = cart.filter(item => item.quantity > 0);
  console.log("Items with zero quantity have been removed.");
};

// Bonus: Apply discount code to the total price
const applyDiscount = (discountCode) => {
  const discountRates = {
    'DISCOUNT10': 0.3,
    'DISCOUNT20': 0.22
  };
 // Fetch the discount rate based on the provided discount code or set it to 0 if invalid
  const discount = discountRates[discountCode] || 0;
  const totalCost = calculateTotalCost();
  const discountedPrice = totalCost - (totalCost * discount);
  
  console.log(`Total after applying discount: $${discountedPrice.toFixed(2)}`);
};

// Example being used here
addItemToCart(1357, 'Laptop', 2, 1000);
addItemToCart(2357, 'Phone', 10, 800);
displayCartSummary();
console.log(`Total Cost: $${calculateTotalCost()}`);

updateItemQuantity(2, 3);
displayCartSummary();
console.log(`Total Cost after update: $${calculateTotalCost()}`);

removeItemFromCart(1);
displayCartSummary();
console.log(`Total Cost after removal: $${calculateTotalCost()}`);

filterZeroQuantityItems();
displayCartSummary();

applyDiscount('DISCOUNT20');
