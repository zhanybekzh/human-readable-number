const wordsMap = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
};

module.exports = function toReadable(number) {
  if (number <= 20) {
      return wordsMap[number];
  } else if (number < 100) {
      let tens = Math.floor(number / 10) * 10;
      let ones = number % 10;
      return ones === 0
          ? wordsMap[tens]
          : `${wordsMap[tens]} ${wordsMap[ones]}`;
  } else if (number < 1000) {
      let hundreds = Math.floor(number / 100);
      let remainder = number % 100;
      let readableRemainder = remainder ? ` ${toReadable(remainder)}` : "";
      return `${wordsMap[hundreds]} hundred${readableRemainder}`;
  }
};
