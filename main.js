let user = {
  name: "",
  password: "",
  income: 0,
  inATM: true,
  blockCount: 0,
};

alert("Log in");

do {
  let userName = prompt("Enter your name: ");
  let userPassword = prompt("Enter your password: ");
  if (user.name === userName && userPassword === user.password) {
    alert(`Welcome ${user}`);
  } else {
    let register = "";
    while (register !== "yes" || register !== "no") {
      if (register === "yes" || register === "no") {
        break;
      }
      register = prompt(
        "Your username or password is wrong, try again or register(no-try again, yes-register): "
      ).toLowerCase();
      console.log(register);
    }
    if (register === "no") {
      user.blockCount += 1;
      if (user.blockCount === 3) {
        alert("You are blocked for 3 times.");
        user.inATM = false;
      } else {
        continue;
      }
    } else {
      user.name = prompt("Let's register. Enter your name: ");
      user.password = prompt("Enter your password: ");
      user.income = Number(prompt("Enter your income: "));
    }
  }
} while (user.inATM);
