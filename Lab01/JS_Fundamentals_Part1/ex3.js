// Test data 1
const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3;

console.log("Teams score: ", dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore) {
  console.log("Dolphins win");
} else if (koalasAvgScore > dolphinsAvgScore) {
  console.log("Koalas win");
} else if (dolphinsAvgScore === koalasAvgScore) {
  console.log("Dolphins and Koalas draw");
}

// Bonus 1 and 2:
const dolphinsBonusAvgScore = (97 + 112 + 101) / 3;
const koalasBonusAvgScore = (109 + 95 + 123) / 3;
console.log(
  "\nBonus teams score: ",
  dolphinsBonusAvgScore,
  koalasBonusAvgScore
);

if (
  dolphinsBonusAvgScore > koalasBonusAvgScore &&
  dolphinsBonusAvgScore >= 100
) {
  console.log("Dolphins win");
} else if (
  koalasBonusAvgScore > dolphinsBonusAvgScore &&
  koalasBonusAvgScore >= 100
) {
  console.log("Koalas win");
} else if (
  dolphinsBonusAvgScore === koalasBonusAvgScore &&
  dolphinsBonusAvgScore >= 100 &&
  koalasBonusAvgScore >= 100
) {
  console.log("Dolphins and Koalas draw");
} else {
  console.log("No one wins");
}
