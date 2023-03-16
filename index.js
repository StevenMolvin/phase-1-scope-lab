var customerName = "bob";
const leastFavCustomer = "Lewis";
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
  
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

function changeLeastFavoriteCustomer() {
  
  leastFavCustomer = "Pete";
  return leastFavCustomer;
}
