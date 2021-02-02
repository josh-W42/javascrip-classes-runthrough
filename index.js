const express = require("express");
const app = express();
const Person = require("./person");

// const leo = new Person("Leo", true);
// const ichigo = new Person("Kurosaki, Ichigo", false);

// ichigo.greet();
// ichigo.eat("Ocha");
// ichigo.fightBattle = function() {
//     console.log(`${this.name}: I fight for my friends!`);

//     if (this.losingTheFight) {
//         ichigo.usePowerOfFriendship();
//     } else {
//         ichigo.throwTheFight();
//     }
// }

// leo.greet();
// leo.walk();
// leo.powerLevel = function() {
//     console.log(`${this.name}: Power level over 9000`);
// }

app.get('/', (req, res) => {
    res.send("You made it");
});

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});