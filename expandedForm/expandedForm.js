const expandedForm = num => {
  return Array.from(String(num), Number)
  .reverse()
  .map((num, index) => num * Math.pow(10, index))
  .filter(num => num !== 0)
  .reverse()
  .join(' + ')
}

expandedForm(70304)