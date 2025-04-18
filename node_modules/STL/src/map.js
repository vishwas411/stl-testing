class map {
    constructor() {
      this.data = new Map()
      this.destroyed = false
    }
  
    _checkDestroyed() {
      if (this.destroyed) throw new Error('This map object has been destroyed')
    }
  
    set(key, value) {
      this._checkDestroyed()
      this.data.set(key, value)
    }
  
    get(key) {
      this._checkDestroyed()
      return this.data.get(key)
    }
  
    has(key) {
      this._checkDestroyed()
      return this.data.has(key)
    }
  
    erase(key) {
      this._checkDestroyed()
      this.data.delete(key)
    }
  
    size() {
      this._checkDestroyed()
      return this.data.size
    }
  
    empty() {
      this._checkDestroyed()
      return this.data.size === 0
    }
  
    clear() {
      this._checkDestroyed()
      this.data.clear()
    }
  
    keys() {
      this._checkDestroyed()
      return [...this.data.keys()]
    }
  
    values() {
      this._checkDestroyed()
      return [...this.data.values()]
    }
  
    entries() {
      this._checkDestroyed()
      return [...this.data.entries()]
    }
  
    toObject() {
      this._checkDestroyed()
      const obj = {}
      for (const [key, value] of this.data) {
        obj[key] = value
      }
      return obj
    }
  
    destroy() {
      this.data = null
      this.destroyed = true
    }
  }
  module.exports = map
  