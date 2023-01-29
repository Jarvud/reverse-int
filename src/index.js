module.exports = function reverse (n) {
  n = Math.abs(n)
   let array = n.toString().split('').reverse().join('')
   return array
}
