class priority_queue {
    constructor(comparator = (a, b) => b - a) {
      this.data = []
      this.comparator = comparator
      this.destroyed = false
    }
  
    _checkDestroyed() {
      if (this.destroyed) throw new Error('This priority_queue object has been destroyed')
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
      this._heapifyUp()
    }
  
    pop() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('priority_queue is empty')
      const top = this.data[0]
      const end = this.data.pop()
      if (!this.empty()) {
        this.data[0] = end
        this._heapifyDown()
      }
      return top
    }
  
    top() {
      this._checkDestroyed()
      if (this.empty()) throw new Error('priority_queue is empty')
      return this.data[0]
    }
  
    clear() {
      this._checkDestroyed()
      this.data = []
    }
  
    destroy() {
      this.data = null
      this.destroyed = true
    }
  
    _heapifyUp() {
      let idx = this.data.length - 1
      const element = this.data[idx]
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2)
        const parent = this.data[parentIdx]
        if (this.comparator(element, parent) >= 0) break
        this.data[idx] = parent
        idx = parentIdx
      }
      this.data[idx] = element
    }
  
    _heapifyDown() {
      let idx = 0
      const length = this.data.length
      const element = this.data[0]
  
      while (true) {
        let leftIdx = 2 * idx + 1
        let rightIdx = 2 * idx + 2
        let swapIdx = idx
  
        if (
          leftIdx < length &&
          this.comparator(this.data[leftIdx], this.data[swapIdx]) < 0
        ) {
          swapIdx = leftIdx
        }
  
        if (
          rightIdx < length &&
          this.comparator(this.data[rightIdx], this.data[swapIdx]) < 0
        ) {
          swapIdx = rightIdx
        }
  
        if (swapIdx === idx) break
  
        this.data[idx] = this.data[swapIdx]
        idx = swapIdx
      }
  
      this.data[idx] = element
    }
  }
  module.exports = priority_queue