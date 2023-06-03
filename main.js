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
do {
  let login = confirm("Do you have account? (yes login, no register): ");
  if (login) {
    do {
      let userName = prompt("Enter your name: ");
      let userPassword = prompt("Enter your password: ");
      if (user.name === userName && userPassword === user.password) {
        while (user.inATM) {
          let cash = confirm(`Welcome ${user.name}.
              Cash out or pay credit? (yes-cash out, no-pay credit):
              `);
          if (cash) {
            while (cash) {
              let userConfirm = confirm(`Your current money: ${user.money}. 
              Do you want to cash out?(yes/no)`);
              if (userConfirm) {
                if (user.money === 0) {
                  credit = confirm(
                    `Your current money: ${user.money}
                  Do you want credit?(yes/no):`
                  )
                  if (credit) {
                    if (user.credit === true) {
                      alert(
                        `You already have credit: ${user.creditMoney} AZN. Pay it then take new credit.`
                      );
                      break;
                    } else {
                      user.credit = true;
                      user.creditMoney = ((user.income * 45) / 100) * 12;
                      user.money += user.creditMoney - 0.02 * user.creditMoney;
                      transactions += `${counter}. Mebleg: ${
                        user.creditMoney
                      } AZN  ${Date()} (Kredit daxil edilib) \n`;
                      counter++;
                      continue;
                    }
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
                while (!cashOut || cashOut == "") {
                  cashOut = Number(prompt(`Your current money: ${user.money}. 
                  How much money do you want to cash out: `));
                }
                if (cashOut > user.money) {
                  credit = confirm(
                    `Your current money: ${user.money}
                Do you want credit?(yes/no):`
                  )
                  if (credit) {
                    if (user.credit === true) {
                      alert(
                        `You already have credit: ${user.creditMoney} AZN. Pay it then take new credit.`
                      );
                      break;
                    } else {
                      user.credit = true;
                      user.creditMoney = ((user.income * 45) / 100) * 12;
                      user.money += user.creditMoney - 0.02 * user.creditMoney;
                      transactions += `${counter}. Mebleg: ${
                        user.creditMoney
                      } AZN  ${Date()} (Kredit daxil edilib) \n`;
                      counter++;
                      continue;
                    }
                  } else {
                    alert("Let's cash out.");
                  }
                } else {
                  user.money -= cashOut;
                  transactions += `${counter}. Mebleg: ${cashOut} AZN  ${Date()} (Pul cixarilib) \n`;
                  counter++;
                  break;
                }
              } else {
                alert(transactions);
                user.inATM = false;
                break;
              }
            }
            continue;
          }
          else {
            if (user.creditMoney === 0) {
              alert("You have no credit");
              continue;
            } 
            while (!cash) {
              let userConfirm = confirm(`Your current money: ${user.money}. 
          Your current credit: ${user.creditMoney}.
          Do you want to pay credit?(yes/no)`)
              if (userConfirm) {
                let payMoney = Number(
                  prompt(`Your current money: ${user.money}. 
            Your current credit: ${user.creditMoney}.
            How much money do you want to pay: `)
                );
                while (!payMoney || payMoney == "") {
                  payMoney = Number(prompt(`Your current money: ${user.money}. 
                  Your current credit: ${user.creditMoney}.
                  How much money do you want to pay: `));
                }
                if (user.money === 0) {
                  alert("You don't have money. See you next month.");
                  user.inATM = false;
                  break;
                } else {
                  if (payMoney > user.money) {
                    alert(`You have no ${payMoney} AZN, try again.`);
                    continue;
                  } else {
                    user.money -= payMoney;
                    user.creditMoney -= payMoney;
                    transactions += `${counter}. Mebleg: ${payMoney} AZN  ${Date()} (Kredit odenishi olub) \n`;
                    counter++;
                    alert("You have paid successfully.");
                    if (user.creditMoney === 0) {
                      user.credit = false;
                    }
                    break;
                  }
                }
              } else {
                alert(transactions);
                user.inATM = false;
                break;
              }
            }
          }
        }
      } else {
        let register = confirm(
          "Your username or password is wrong, try again or register(no-try again, yes-register): "
        );
        if (!register) {
          user.blockCount += 1;
          if (user.blockCount === 3) {
            alert("You are blocked for 3 times.");
            user.inATM = false;
          } else {
            continue;
          }
        } else {
          user.name = prompt("Let's register. Enter your name: ");
          while (user.name == "") {
            user.name = prompt("Enter your name: ");
          }
          user.password = prompt("Enter your password: ");
          while (user.password == "") {
            user.password = prompt("Enter your password: ");
          }
          user.income = Number(prompt("Enter your income: "));
          while (!user.income || user.income == "") {
            user.income = Number(prompt("Enter your income: "));
          }
          user.money = user.income;
        }
      }
    } while (user.inATM);
  } else {
    user.name = prompt("Let's register. Enter your name: ");
    while (user.name == "") {
      user.name = prompt("Enter your name: ");
    }
    user.password = prompt("Enter your password: ");
    while (user.password == "") {
      user.password = prompt("Enter your password: ");
    }
    user.income = Number(prompt("Enter your income: "));
    while (!user.income || user.income == "") {
      user.income = Number(prompt("Enter your income: "));
    }
    user.money = user.income;
  }
} while (user.inATM);
