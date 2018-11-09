const expandedForm = num => Array.from(String(num))
  .reverse()
  .map((num, index) => num * (10 ** index))
  .filter(num => num !== 0)
  .reverse()
  .join(' + ')


expandedForm(70304)