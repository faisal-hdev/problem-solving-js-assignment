function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "invalid Number. You should be a valid positive number.";
  } else {
    const gateManCost = 500;
    const lunchCost = 50 * 8;
    const totalStaffCost = gateManCost + lunchCost;

    const perTicketPrice = 120;
    const totalTicketPrice = perTicketPrice * ticketSale;

    const TotalRemainingAmount = totalTicketPrice - totalStaffCost;
    return TotalRemainingAmount;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const goodNameLastChr = ["a", "y", "i", "e", "o", "u", "w"];
    const givenNameLastChr = name.slice(-1).toLowerCase();
    if (goodNameLastChr.includes(givenNameLastChr)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "invalid array. input should be a valid Array.";
  } else {
    let numbersArr = [];
    for (const element of array) {
      if (!isNaN(element) && typeof element === "number") {
        numbersArr.push(element);
      }
    }
    return numbersArr;
  }
}

function password(obj) {
  const { siteName, name, birthYear } = obj;
  if (!siteName || !name || !birthYear || birthYear.toString().length !== 4) {
    return "invalid";
  }
  const siteFirstLetter = siteName.charAt(0).toUpperCase();
  const outPut =
    siteFirstLetter + siteName.slice(1) + "#" + name + "@" + birthYear;
  return outPut;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalPayment = 0;

  for (const singlePayment of arr) {
    if (3000 <= singlePayment) {
      const tax = (singlePayment * 20) / 100;
      const paymentWithoutTax = singlePayment - tax;
      totalPayment = totalPayment + paymentWithoutTax;
    } else {
      totalPayment = totalPayment + singlePayment;
    }
  }

  let totalSaving = totalPayment - livingCost;
  if (totalSaving < 0) {
    return "earn more";
  } else return totalSaving;
}
