const makeChange = (c) => {
  c = parseInt(c);

  const change = {
    q: 0, // Quarters
    d: 0, // Dimes
    n: 0, // Nickels
    p: 0, // Pennies
  }

  change.q = Math.floor(c / 25); // Calculate number of quarters
  c %= 25; // Update remaining cents

  change.d = Math.floor(c / 10); // Calculate number of dimes
  c %= 10; // Update remaining cents

  change.n = Math.floor(c / 5); // Calculate number of nickels
  c %= 5; // Update remaining cents

  change.p = c; // Remaining cents are pennies

  return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
