var person = new Object();

person['firstname'] = "andrew";
person['lastname'] = "sagraves";
person['street'] = "8149 pepperdine way";

var firstNameProperty = "firstname";
var street = "street";
console.log(person);


console.log(person.firstname);
console.log(person.lastname);


person.address = new Object();
person.address.street = "8149 pepperdine way";
person.address.city = "knoxville";
person.address.state = "tn";


console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);



