document.addEventListener('DOMContentLoaded', () => {
  const isEven = num => {
    if (num % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  const factorial = num => {
    let total = 1
    for (let i = 2; i <= num; i++) {
      total *= i
    }
    return total
  }

  const kebabToSnake = str => {
    newStr = str.replace(/-/g, '_')
    return newStr
  }

  kebabToSnake()
  factorial()
  isEven()
})