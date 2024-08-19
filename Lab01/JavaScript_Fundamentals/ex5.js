const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test data:
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Test data 2:
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No winner");
  }
};

console.log("Test case 1:");
checkWinner(avgDolphins, avgKoalas);
console.log("Test case 2:");
checkWinner(avgDolphins2, avgKoalas2);
