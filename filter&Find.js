// Array.filter method returns new array based on conditions, can manipulate the original array (unlike map).
// array.find finds the single object and return undefined if object is not found
const filter=[
    {name: 'bon', age: 48, position: 'developer'},
    {name: 'jan', age: 55, position: 'accountant'},
    {name: 'togo', age: 68, position: 'auditor'},
    {name: 'shruti', age: 27, position: 'designer'},
    {name: 'balasa', age: 21, position: 'photographer'}
]

// filter
const filtered= people.filter((person)=>{
    return person.age>30
  
})

console.log(filtered)
// the answer is
// [
//     { name: 'bon', age: 48, position: 'developer' },
//     { name: 'jan', age: 55, position: 'accountant' },
//     { name: 'togo', age: 68, position: 'auditor' }
//   ]

// FIND
const findPerson= people.find((cartoon)=>{
    if (cartoon.name==='shruti'){
      return cartoon
    }
  
})

console.log(findPerson)
// the result is { name: 'shruti', age: 27, position: 'designer' }