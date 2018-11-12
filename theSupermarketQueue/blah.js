const queueTime = (arrayOfCustomers, numberOfCheckouts) => {
  const totalNumberOfJobs = arrayOfCustomers.length 
  let threadPoolQueue = new Array(numberOfCheckouts).fill(0) 
  for(let i = 0; i <  totalNumberOfJobs; i++) {
    const highestNumberInArray = Math.max(...arrayOfCustomers) 
    const indexOfHighestNumberInArray = arrayOfCustomers.indexOf(highestNumberInArray) 
    let lowestNumberInThreadpoolArray = Math.min(...threadPoolQueue) 
    let indexOfLowestnumberInThreadpoolArray = threadPoolQueue.indexOf(lowestNumberInThreadpoolArray)
    let removedItem = Number(arrayOfCustomers.splice(indexOfHighestNumberInArray, 1))
    threadPoolQueue[indexOfLowestnumberInThreadpoolArray] += removedItem
  }
  let highestNumberInThreadpoolArray = Math.max(...threadPoolQueue) 
  let indexOfHighestnumberInThreadpoolArray = threadPoolQueue.indexOf(highestNumberInThreadpoolArray)
  return threadPoolQueue[indexOfHighestnumberInThreadpoolArray] 
}



queueTime([], 1) 
