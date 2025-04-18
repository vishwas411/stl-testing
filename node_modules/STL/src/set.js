class set {
    constructor() {
      this.data = new Set()
      this.destroyed = false
    }
  
    _checkDestroyed() {
      if (this.destroyed) throw new Error('This set object has been destroyed')
    }
  
    insert(val) {
      this._checkDestroyed()
      this.data.add(val)
    }
  
    erase(val) {
      this._checkDestroyed()
      this.data.delete(val)
    }
  
    has(val) {
      this._checkDestroyed()
      return this.data.has(val)
    }
  
    size() {
      this._checkDestroyed()
      return this.data.size
    }
  
    empty() {
      this._checkDestroyed()
      return this.size() === 0
    }
  
    clear() {
      this._checkDestroyed()
      this.data.clear()
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
  module.exports = set
  