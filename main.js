//task 1
const arrayOfNumbers = [];
for (let i = 20; i <= 30; i += 0.5) {
  arrayOfNumbers.push(i);
}
console.log(...arrayOfNumbers);

//task 2
const dollarValue = 27;
const arrayOfDollarValue = [];
for (let i = 10; i <= 100; i += 10) {
  arrayOfDollarValue.push(i * 27);
}
console.log(...arrayOfDollarValue);

//task 3
const n = +prompt("Enter a number for tasks 3, 4, 5");
const arrayOfNaturalNumbers = [];

if (n % 1 === 0) {
  if (n < 0) {
    let positiveNumber = n * -1;
    for (let i = 1; i <= 100 && i <= Math.sqrt(positiveNumber); i++) {
      arrayOfNaturalNumbers.push(i);
    }
    console.log("Task 3: " + arrayOfNaturalNumbers);
  } else if (n > 0) {
    for (let i = 1; i <= 100 && i <= Math.sqrt(n); i++) {
      arrayOfNaturalNumbers.push(i);
    }
    console.log("Task 3: " + arrayOfNaturalNumbers);
  }
} else {
  console.log("Enter a whole number");
}

//task 4
if (n < 0) {
  console.log("Task 4: It's not a simple number");
} else if (n > 0) {
  if (n / n === 1 && n / 1 === n) {
    console.log("Task 4: It's a simple number");
  } else {
    console.log("Task 4: It's not a simple number");
  }
}

//task 5

if (n < 0) {
  console.log("Task 5: Enter a positive number");
} else if (!(n % 1 === 0)) {
  console.log("Task 5: It's not a whole number");
} else {
  if (n === 1) {
    console.log("Task 5: 3^0 = " + n);
  } else if (n % 3 !== 0) {
    console.log("Task 5: There is no degree to which to raise the number 3");
  } else if (n % 3 === 0) {
    let degree = 0;
    let isCondition = false;
    for (let i = 3; i <= n; i *= 3) {
      degree++;
      if (i === n) {
        isCondition = true;
        break;
      }
    }
    if (isCondition) {
      console.log(`Task 5: 3^${degree} = ${n}`);
    } else {
      console.log("Task 5: There is no degree to which to raise the number 3");
    }
  }
}
