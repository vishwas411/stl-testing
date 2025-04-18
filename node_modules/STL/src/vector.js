class vector {
  constructor() {
    this.data = []
    this.destroyed = false
  }

  _checkDestroyed() {
    if (this.destroyed) throw new Error('This vector object has been destroyed')
  }

  size() {
    this._checkDestroyed()
    return this.data.length
  }

  empty() {
    this._checkDestroyed()
    return this.size() === 0
  }

  push(val) {
    this._checkDestroyed()
    this.data.push(val)
  }

  pop() {
    this._checkDestroyed()
    if (this.empty()) throw new Error('vector is empty')
    return this.data.pop()
  }

  at(index) {
    this._checkDestroyed()
    if (index < 0 || index >= this.size()) throw new Error('Index out of bounds')
    return this.data[index]
  }

  front() {
    this._checkDestroyed()
    if (this.empty()) throw new Error('vector is empty')
    return this.data[0]
  }

  back() {
    this._checkDestroyed()
    if (this.empty()) throw new Error('vector is empty')
    return this.data[this.size() - 1]
  }

  clear() {
    this._checkDestroyed()
    this.data = []
  }

  toArray() {
    this._checkDestroyed()
    return [...this.data]
  }

  destroy() {
    this.data = null
    this.destroyed = true
  }
}
module.exports = vector