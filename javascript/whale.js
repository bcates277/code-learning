const input = "you only miss the shots you dont take"
const vowels = ["a", "e", "i","o", "u"]
const resultArray = []

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
  resultArray.push('e')
  }
  if (input[i] === 'u') {
    resultArray.push('u')
  }

  for (let j = 0; j < vowels.length; j++) {
     if (input[i] === vowels[j]){
      resultArray.push(vowels[j])
}
    }
  }
const resultString = resultArray.join('').toUpperCase()
console.log(resultString);


// improved code
const inputNew = "you only miss the shots you dont take"
const vowelsNew = ["a", "e", "i","o", "u"]
const resultArrayNew = []
for (let i = 0; i < inputNew.length; i++) {
  if (inputNew[i] === 'e') {
    resultArrayNew.push('e')
  }
  if (inputNew[i] === 'u') {
    resultArrayNew.push('u')
  }
  if (vowelsNew.includes(inputNew[i])) {
    resultArrayNew.push(inputNew[i])
  }
}
const resultStringNew = resultArrayNew.join('').toUpperCase()
console.log(resultStringNew);