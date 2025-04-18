/**
 * @module index
 * @author [Vishwas Sahu]
 * @description This file serves as the main entry point for the library, exporting all necessary modules and components.
 */
module.exports = {
  vector: require('./vector'),
  stack: require('./stack'),
  queue: require('./queue'),
  deque: require('./deque'),
  priority_queue: require('./priority_queue'),
  set: require('./set'),
  map: require('./map'),
  ...require('./algorithms')
}