export const random = (max = Infinity, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
