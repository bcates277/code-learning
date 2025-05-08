let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(
    `You will be racing at 9:30AM. Your race number is lucky number ${raceNumber}!`
  );
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(
    `You will race at 11:00AM and your lucky race number will be ${raceNumber}!`
  );
} else if (runnersAge < 18) {
  console.log(
    `You will race at 12:30PM and your lucky race number will be ${raceNumber}!`
  );
} else console.log(`Please see the registration desk!`);
