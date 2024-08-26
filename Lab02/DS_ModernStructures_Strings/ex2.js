const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

game.scored.forEach((player, i) => {
  console.log(`Goal ${i + 1}: ${player}`);
});

const odds = Object.values(game.odds);
const oddsAvg = odds.reduce((a, b) => a + b, 0) / odds.length;
console.log("Average odd: ", oddsAvg.toFixed(2));

const oddsEntries = Object.entries(game.odds);
oddsEntries.forEach(([team, odd]) => {
  console.log(
    `Odd of ${game[team] ? `victory ${game[team]}` : "draw"}: ${odd}`
  );
});

const scorers = {};
game.scored.forEach((item) => {
  scorers[item] ? scorers[item]++ : (scorers[item] = 1);
});

console.log(scorers);
