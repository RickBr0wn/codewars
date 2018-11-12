const queueTime = (customers, n) => {
  let jobQueue = new Array(n).fill(0)
  const totalNumberOfJobs = customers.length
  for(let i = 0; i <  totalNumberOfJobs; i++)
    jobQueue[jobQueue.indexOf(Math.min(...jobQueue))] += Number(customers.splice(0, 1))
  return jobQueue[jobQueue.indexOf(Math.max(...jobQueue))] 
} 

queueTime([], 1) //? 0
queueTime([1,2,3,4], 1) //? 10
queueTime([2,2,3,3,4,4], 2) //? 9
queueTime([1,2,3,4,5], 100) //? 5