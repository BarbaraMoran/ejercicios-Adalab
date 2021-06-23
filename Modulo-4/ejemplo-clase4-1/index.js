const fs = require("fs");

function handleRead(err, fileContents) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(fileContents);
    //split
    const lines = fileContents.split("\n");
    console.log(lines);

    lines.forEach((line) => {
      if (line.includes("Roble")) {
        console.log(line);
      }
    });
  }
}

//readFile es asíncrono. Cuando termine de leer el fichero ejecuta la función
fs.readFile("facturas.csv", "utf8", handleRead);
