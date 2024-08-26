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

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

const printGoals = function (...players) {
  players.forEach((player, i) => {
    console.log(`Goal ${i + 1}: ${player}`);
  });
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
