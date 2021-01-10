export const getRandomInt=function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1))-min
}

export const getRandomIntArray=function getRandomIntArray(num, min, max) {
  const array=[]
  for (let i=0; i<num; i++) {
    array.push(getRandomInt(min, max))
  }
  return array
}