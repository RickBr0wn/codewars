/**
 * A function that answers the question
 * "Are you playing banjo"
 * If your name starts with the letter "R" or
 * lower case "r", you are playing banjo!
 * @param `string` - The name to be tested
 * @returns `string` - The original name and either "plays banjo" or "does not play banjo"
 */
const areYouPlayingBanjo = name =>
  name.charAt(0) === 'R' || name.charAt(0) === 'r'
    ? name + ' plays banjo'
    : name + ' does not play banjo'

module.exports = areYouPlayingBanjo
