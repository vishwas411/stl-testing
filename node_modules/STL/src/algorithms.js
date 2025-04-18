function sort(arr, comparator = (a, b) => a - b) {
  arr.sort(comparator)
}

function binarySearch(arr, target, comparator = (a, b) => a - b) {
  let left = 0, right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const cmp = comparator(arr[mid], target)
    if (cmp === 0) return mid
    if (cmp < 0) left = mid + 1
    else right = mid - 1
  }
  return -1
}

function lowerBound(arr, target, comparator = (a, b) => a - b) {
  let left = 0, right = arr.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (comparator(arr[mid], target) < 0) left = mid + 1
    else right = mid
  }
  return left
}

function upperBound(arr, target, comparator = (a, b) => a - b) {
  let left = 0, right = arr.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (comparator(arr[mid], target) <= 0) left = mid + 1
    else right = mid
  }
  return left
}

module.exports = {
  sort,
  binarySearch,
  lowerBound,
  upperBound
}
