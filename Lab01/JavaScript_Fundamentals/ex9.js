// Test data:
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = (temps) => {
  let str = "";
  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}°C in ${i + 1} days ... `;
  }
  console.log(str);
};

console.log("Test data 1");
printForecast(temps1);

console.log("Test data 2");
printForecast(temps2);
