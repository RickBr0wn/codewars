function queueTime(customerArray, numberOfCheckouts) {
  return Math.max(...customerArray.reduce((checkouts, currentCheckout) => { 
    checkouts[checkouts.indexOf(Math.min(...checkouts))] = checkouts[checkouts.indexOf(Math.min(...checkouts))] + currentCheckout  
    return checkouts 
  },Array(numberOfCheckouts).fill(0)))
 }