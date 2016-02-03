greet();

function greet() {
  console.log('hi');
}


var anonGreet = function() {
  console.log('hi');
}

anonGreet();


function log(a) {
  a();
}

log(function() {
  console.log('hi');
});








