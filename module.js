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

//8.

//9.

//10.
