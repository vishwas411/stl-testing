const STL = require('STL')

// Test vector
const v = new STL.vector()
v.push(10)
v.push(20)
console.log('Vector:', v.toArray())
v.destroy()

// Test stack
const s = new STL.stack()
s.push(100)
s.push(200)
console.log('Stack top:', s.top())
s.pop()
console.log('Stack after pop:', s.toArray())
s.destroy()

// Test queue
const q = new STL.queue()
q.push(1)
q.push(2)
console.log('Queue front:', q.front())
q.pop()
console.log('Queue after pop:', q.toArray())
q.destroy()

// Test deque
const d = new STL.deque()
d.pushFront(10)
d.pushBack(20)
d.pushFront(5)
console.log('Deque:', d.toArray())
d.popBack()
console.log('Deque after popBack:', d.toArray())
d.destroy()

// Test priority_queue (max-heap default)
const maxPQ = new STL.priority_queue()
maxPQ.push(3)
maxPQ.push(10)
maxPQ.push(5)
console.log('MaxPQ top:', maxPQ.top())
maxPQ.pop()
console.log('MaxPQ after pop:', maxPQ.top())
maxPQ.destroy()

// Test set
const set = new STL.set()
set.insert('a')
set.insert('b')
set.insert('a') // duplicate, should not be added
console.log('Set contents:', set.toArray())
console.log('Set has "b"?', set.has('b'))
set.erase('b')
console.log('Set after erase:', set.toArray())
set.destroy()

// Test map
const m = new STL.map()
m.set('name', 'Vishwas')
m.set('age', 23)
console.log('Map value for name:', m.get('name'))
console.log('Map keys:', m.keys())
m.erase('age')
console.log('Map toObject:', m.toObject())
m.destroy()

// Test algorithms
const arr = [5, 2, 8, 1]
STL.sort(arr)
console.log('Sorted:', arr)
console.log('Binary Search 5:', STL.binarySearch(arr, 5))
console.log('Lower Bound 4:', STL.lowerBound(arr, 4))
console.log('Upper Bound 5:', STL.upperBound(arr, 5))
