class deque {
    constructor() {
      this.items = []
      this.destroyed = false
    }
  
    _checkDestroyed() {
      if (this.destroyed) throw new Error('This deque object has been destroyed')
    }
  
    pushFront(val) {
      this._checkDestroyed()
      this.items.unshift(val)
    }
  
    pushBack(val) {
      this._checkDestroyed()
      this.items.push(val)
    }
  
    popFront() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('deque is empty')
      return this.items.shift()
    }
  
    popBack() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('deque is empty')
      return this.items.pop()
    }
  
    front() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('deque is empty')
      return this.items[0]
    }
  
    back() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('deque is empty')
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
  module.exports = deque
  