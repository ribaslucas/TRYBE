let n = 5;
let tBase = "*".repeat(n), spaceO = " ".repeat((n - 1) / 2); 

if (n % 2 === 0 ) {
  console.log("The number must be odd!")
} else {
  console.log(spaceO + "*");
  for (let index = 3; index <= n - 2 ; index += 2) {
      spaceO = " ".repeat((n - index) / 2);
      let spaceI = " ".repeat(n - spaceO.length * 2 - 2);
      console.log(spaceO + "*" + spaceI + "*" + spaceO);
  }
  console.log(tBase);
}