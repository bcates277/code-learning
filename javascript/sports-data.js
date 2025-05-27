// team object with players and games
const team = {
  _players: [
    { firstName: "Andrew", lastName: "Boyde", age: 38 },
    { firstName: "Lauren", lastName: "Smith", age: 39 },
    { firstName: "Allison", lastName: "Daniels", age: 33 },
  ],
  _games: [
    { opponent: "Wildcats", teamPoints: 55, opponentPoints: 7 },
    { opponent: "Spartans", teamPoints: 21, opponentPoints: 44 },
    { opponent: "Blaze", teamPoints: 10, opponentPoints: 12 },
  ],
  // getters for players and games
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // add player method
  addPlayer(newFirstName, newLastName, newAge) {
    if (!newFirstName || !newLastName || !newAge) {
      console.log("All player details must be provided");
    }
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  //add game method
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
     if (!newOpponent || newTeamPoints === undefined || newOpponentPoints === undefined) {
    console.log('All game details must be provided.');
    return;
  }
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
};
// Adding players and games to the team
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

// Displaying players and games
team._players.forEach((player) => {
  console.log(`Player: ${player.firstName} ${player.lastName}, Age: ${player.age}`);
});

console.log("-----------");

team._games.forEach((game) => {
  console.log(
    `Opponent: ${game.opponent}, Team Points: ${game.teamPoints}, Opponent Points: ${game.opponentPoints}`
  );
});

console.log("-----------");

console.log(
  `${team._games.length} games played with ${team._players.length} players.`
);
