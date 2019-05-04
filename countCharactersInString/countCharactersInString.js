/**
|--------------------------------------------------
| The main idea is to count all the occuring characters(UTF-8) in string. 
| If you have string like this 'aba' then the result should be { 'a': 2, 'b': 1 }
| What if the string is empty ? 
| Then the result should be empty object literal { }
|--------------------------------------------------
*/
function count(str) {
  let table = {}
  str === ''
    ? table
    : [...str].map(letter =>
        Object.keys(table).includes(letter)
          ? table[letter]++
          : (table = { ...table, [letter]: 1 })
      )
  return table
}

console.log(count('aba'), { a: 2, b: 1 })
console.log(count(''), {})
