Array.prototype.removeAnItemFromAnArray = function(...forDeletion) {
  return this.filter(item => !forDeletion.includes(item))
}