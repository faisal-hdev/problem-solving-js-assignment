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

// console.log(checkName());
