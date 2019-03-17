const hash = (str, buckets) =>
  [...str].reduce((acc, item, index) => acc + str.charCodeAt(index), 0) %
  buckets

let HashTable = function() {
  let hashtable = []
  const buckets = 1000000000

  this.show = () => hashtable

  this.length = () => hashtable.length

  this.add = (key, value) => {
    const index = hash(key, buckets) //?
    if (hashtable[index] === undefined) {
      return (hashtable[index] = { [key]: value })
    }
    return (hashtable[index] = [hashtable[index], { [key]: value }])
  }

  this.find = str => {
    if (typeof str !== 'array') {
      return hashtable[hash(str, buckets)]
    }
    return 'COLLISION'
  }

  this.delete = key => {
    const index = hash(key, buckets) //?
    hashtable[index] = undefined
    return `'${key}' has been removed from the Hashtable`
  }
}

const regex = /^\d/

const str = '1a test string with a number'

regex.test(str) //?

let q = new HashTable() //?
hash('Rick', 150) //?
hash('Meesh', 150) //?
q.show() //?
q.add('Rick', { obj: 'testObj1' }) //?
q.add('Meesh', { obj2: 'testObj2' }) //?
q.show() //?
q.find('Rick') //?
q.find('Meesh') //?
console.log(q.length()) //?
q.add('delete_me', 'data to be delete') //?
q.show() //?
q.delete('delete_me') //?
q.show() //?
