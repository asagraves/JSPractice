var Andrew = {
  firstname: 'Andrew',
  lastname: 'sagraves',
  address: {
    street: '8149 pepperdine way',
    city: 'knoxville'
  }

};

function greet(person) {
  console.log('Hello ' + person.firstname)
}

greet(Andrew);

greet({
  firstname: 'Andrew',
  lastname: 'sagraves'
});

Andrew.address2 = {
  street: 'bloom dr'
}





