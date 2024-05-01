let appstate= 'updating'

const business={
  [appstate]: true
}

console.log(business) 
// the result is
//{ updating: true }



const device= 'Computer'
business[device]= 'Apple'
console.log(business)
// Look how the above object is modified, the result of console.log is 
//{ updating: true, Computer: 'Apple' }

// updating an object with computed property name i.e with [] syntax

const person={
    name: '',
    age:'',
    married:true
  };
  
  function updatePerson(key, value){
    person[key]=value
  }
  
  updatePerson('name', 'muzammal')
  updatePerson("age", 34)
  
  console.log(person)
  // the result will be 
  //{ name: 'muzammal', age: 34, married: true }

  // However if you want to update the whole object by calling the function once, the syntax is little bit changed
  // now we will not use [] syntax
  const anotherPerson={
    name: '',
    age: '',
    married: false
    
  }
  
  function updateAnother(obj){
    Object.assign(anotherPerson,obj)
  }
  
  updateAnother({name:'amber',age: 30, married: true})
  
  console.log(anotherPerson)

  // the result will be { name: 'amber', age: 30, married: true }