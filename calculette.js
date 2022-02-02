

class Calculette {
  constructor() {
    this.inner_value = 0
  }

  // change inner value
  set(value) {

    this.inner_value = value
    return this
  }

  reset() {
    this.inner_value = 0
    return this
  }

  // return inner value
  value() {
    return this.inner_value
  }

  add(value) {
    if (typeof value !== 'number') {
      throw new Error("Unable to handle non-numbers values")
      return undefined
    }

    this.inner_value += value
    return this
  }

  substract(value) {
    if (typeof value !== 'number') {
      throw new Error("Unable to handle non-numbers values")
      return undefined
    }

    this.inner_value -= value
    return this
  }

  multiply(value) {
    if (typeof value !== 'number') {
      throw new Error("Unable to handle non-numbers values")
      return undefined
    }

    this.inner_value *= value
    return this
  }

  divide(value) {
    if (typeof value !== 'number') {
      throw new Error("Unable to handle non-numbers values")
      return undefined
    }

    if (value === 0) {
      throw new Error("Unable to divide by zero")
      return undefined
    }

    this.inner_value /= value
    return this
  }

  print() {
    console.log(this.inner_value)
  }
}




module.exports = Calculette;

