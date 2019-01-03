const input = {
  title: 'Gone with the Wind',
  publishInfo: {
    publishDate: new Date('1936-06-10'),
    movieReleaseDate: new Date('1940-01-17')
  }
}

function replacer(key, value) {
  if(this[key] instanceof Date) {
    return value.substring(0, 10)
  }
  return value
}

const result = JSON.stringify(input, replacer, 2)
const result2 = JSON.stringify(input, null, 2)

console.log(result)
console.log(result2)
console.log(input)

console.log(JSON.stringify(input, null, 2));