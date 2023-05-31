let user = "";
let income;

alert("Log in");

do {
  let userEnter = prompt("Enter your name: ");
  if (user === userEnter) {
    alert(`Welcome ${user}`);
  } else {
    alert("You are not registered before.");
    user = prompt("Enter your name: ");
    income = Number(prompt("Enter your income: "));
  }
} while (income > 0);
