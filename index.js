

function writeCards(names, event) {
  const cart = []
  
  for (let i = 0; i < names.length; i++) {
   cart.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }

  return cart;
}

function countDown(number) {

while (number >= 0) {
  console.log(number--);
}
return number;
}
