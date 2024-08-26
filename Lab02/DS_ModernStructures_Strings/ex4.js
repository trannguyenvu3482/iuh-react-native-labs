document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").textContent = "Transform to camel case";

const handleTransform = () => {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  rows.forEach((row, i) => {
    const [first, second] = row.trim().toLowerCase().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  });
};

document.querySelector("button").addEventListener("click", handleTransform);
