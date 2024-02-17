//1.
export const pyramidMakerWithAsterisk = (size) =>{
  let result = ''
  for (let i = 1; i <= size; i++){
    let space = ' '.repeat(size - i)
    let asterisk = '*'.repeat(2 * i - 1)
    result += space + asterisk + '\n'
  } return result 
}
//2.
export const passwordCreate = (size) => {
  if (size <= 6){
    return 'Your password needs a minimum of six characters'
  }
  let randomPassword = ''
  const passwordOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < size; i++){
    const randomIndex = Math.floor(Math.random() * passwordOptions.length)
    randomPassword += passwordOptions[randomIndex]
  }
  return randomPassword
}
//3.
export const userNames = (noun,length) => {
  const filteredNames = noun.filter((i) => i.length < length)
 return filteredNames
}
//4.

//5.
export const countWords = (str) => {
  return str.trim().split(/\s+/).length
}
//6.
export const orderNames = (alphabetized) => {
  const sortedNames = [...alphabetized].sort()
  return sortedNames
} 
//7.
export const groupEvenAndOdd = (number) => {
  let odd = []
  let even = []
  for (let i = 0; i <= number; i++){
    if (i % 2 === 0){
      odd.push(i)
    } else if ( i % 2 !== 0){
      even.push(i)
    } 
  }
  return `numeros pares dentro de ${number}: ${odd},
numeros impares dentro de ${number}: ${even}`
  }
//8.
export const transformWordToCamelCase = (phrase) => {
  if (phrase.length === 0) {
    return 'You must provide some text';
  } else if (/[A-Z]/.test(phrase)) {
    return 'The text contains capital letters';
  } else if (/_/.test(phrase)) {
    return 'The text contains underscores';
  }
  const words = phrase.split('-');
  const camelCasePhrase = words.map((word, index) => {
    return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
   return camelCasePhrase;
};
//9.
export const transformCamelCaseInOtherCase = (str) => {
  const camelCase = str
  const kebabCaseText = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  const snakeCaseText = str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
  const pascalCaseText = camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
  return {'kebab-case': kebabCaseText,
          'snake_case': snakeCaseText,
          'pascalCase': pascalCaseText,
          'camelCase': str}
}
//10.
export const returnVowelsWithoutAccent = (str) => {
  const vowelsWithoutAccent = str.replace(/[áéíóúaeiou]/g, inverted => {
    const replaceWithoutAccent = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú'} 
    return replaceWithoutAccent[inverted] 
  })
  return vowelsWithoutAccent
}
//11.
export const returnCapitalLettersInLowerAndOtherWay = (str) => {
  let invertedLetters = ''
  for (let i = 0; i < str.length; i++){
    const letter = str.charAt(i)
    if (letter === letter.toUpperCase()) {
      invertedLetters += letter.toLowerCase()
    } else {
    invertedLetters += letter.toUpperCase()
    }
  }
  return invertedLetters
}

