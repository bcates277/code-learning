const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object.keys() returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.
const robotKeys = Object.keys(robot);


console.log(robotKeys);

// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const robotEntries = Object.entries(robot);

console.log(robotEntries);


// Declare newRobot below this line:
const newRobotTwo = {

  }
// Object.assign() copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);