Array.prototype.removeAnItemFromAnArray = function(...allOfTheArgs) {
  return this.filter(item => !allOfTheArgs.includes(item))
}