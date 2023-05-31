let user = {
  name: "",
  password: "",
  income: 0,
  money: 0,
  inATM: true,
  blockCount: 0,
  credit: false,
  creditMoney: 0,
};
let transactions = "";
let counter = 1; // for transactions
alert("Log in");
do {
  let userName = prompt("Enter your name: ");
  let userPassword = prompt("Enter your password: ");
  if (user.name === userName && userPassword === user.password) {
    let cash = prompt(`Welcome ${user.name}.
    Cash out or pay credit? (yes-cash out, no-pay credit):
    `).toLowerCase();
    while (cash !== "yes" || cash !== "no") {
      if (cash === "yes" || cash === "no") {
        break;
      }
      cash = prompt(
        "Write yes or no (yes-cash out, no-pay credit):"
      ).toLowerCase();
    }
    while (cash === "yes") {
      let userConfirm = prompt(`Your current money: ${user.money}. 
      Do you want to cash out?(yes/no)`).toLowerCase();
      while (userConfirm !== "yes" || userConfirm !== "no") {
        if (userConfirm === "yes" || userConfirm === "no") {
          break;
        }
        userConfirm = prompt(
          "Do you want to cash out? (yes, no):"
        ).toLowerCase();
      }
      if (userConfirm === "yes") {
        if (user.money === 0) {
          credit = prompt(
            `Your current money: ${user.money}
              Do you want credit?(yes/no):`
          ).toLowerCase();
          while (credit !== "yes" || credit !== "no") {
            if (credit === "yes" || credit === "no") {
              break;
            }
            credit = prompt("Write yes or no (yes, no):").toLowerCase();
          }
          if (credit === "yes") {
            if (user.credit === true) {
              alert("You already have credit.");
            } else {
              user.credit = true;
              user.creditMoney = (user.income * 45) / 100;
              user.money += user.creditMoney;
              transactions += `${counter}. Mebleg: ${user.creditMoney} AZN  ${Date.now} (Kredit daxil edilib) \n`;
              counter++;
            }
            continue;
          } else {
            alert("You have no money, see you next month.");
            user.inATM = false;
            break;
          }
        }
        let cashOut = Number(
          prompt(`Your current money: ${user.money}. 
          How much money do you want to cash out: `)
        );
        if (cashOut > user.money) {
          credit = prompt(
            `Your current money: ${user.money}
                Do you want credit?(yes/no):`
          ).toLowerCase();
          while (credit !== "yes" || credit !== "no") {
            if (credit === "yes" || credit === "no") {
              break;
            }
            credit = prompt("Write yes or no (yes, no):").toLowerCase();
          }
          if (credit === "yes") {
            if (user.credit === true) {
              alert("You already have credit.");
            } else {
              user.credit = true;
              user.creditMoney = (user.income * 45) / 100;
              user.money += user.creditMoney;
              transactions += `${counter}. Mebleg: ${user.creditMoney} AZN  ${Date.now} (Kredit daxil edilib) \n`;
              counter++;
            }
            continue;
          } else {
            alert("Let's cash out.");
          }
        } else {
          user.money -= cashOut;
          transactions += `${counter}. Mebleg: ${cashOut} AZN  ${Date.now} (Pul cixarilib) \n`;
          counter++;
          continue
        }
      } else {
        alert(transactions);
      }
    }
  } else {
    let register = "";
    while (register !== "yes" || register !== "no") {
      if (register === "yes" || register === "no") {
        break;
      }
      register = prompt(
        "Your username or password is wrong, try again or register(no-try again, yes-register): "
      ).toLowerCase();
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
      user.money = user.income;
    }
  }
} while (user.inATM);
