function extractCurrencyValue(str) {
    return Number(str.substring(1));
  }

console.log(extractCurrencyValue('$120'));