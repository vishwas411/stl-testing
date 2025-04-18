class stack {
    constructor() {
      this.items = []
      this.destroyed = false
    }
  
    _checkDestroyed() {
      if (this.destroyed) throw new Error('This stack object has been destroyed')
    }
  
    push(val) {
      this._checkDestroyed()
      this.items.push(val)
    }
  
    pop() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('stack is empty')
      return this.items.pop()
    }
  
    top() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('stack is empty')
      return this.items[this.items.length - 1]
    }
  
    size() {
      this._checkDestroyed()
      return this.items.length
    }
  
    empty() {
      this._checkDestroyed()
      return this.items.length === 0
    }
  
    clear() {
      this._checkDestroyed()
      this.items = []
    }
  
    toArray() {
      this._checkDestroyed()
      return [...this.items]
    }
  
    destroy() {
      this.items = null
      this.destroyed = true
    }
  }
  module.exports = stack
  