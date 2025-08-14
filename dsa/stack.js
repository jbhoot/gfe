/**
@description
Implement a stack data structure in JavaScript that contains the following operations:

- `new Stack()`: Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
- `push()`: Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: `O(1)`.
- `pop()`: Removes an item at the top of the stack and returns that item. Required time complexity: `O(1)`.
- `isEmpty()`: Determines if the stack is empty. Required time complexity: `O(1)`.
- `peek()`: Returns the item at the top of the stack without removing it from the stack. Required time complexity: `O(1)`.
- `length()`: Returns the number of items in the stack. Required time complexity: `O(1)`.

@example

const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
*/
export default class Stack {
  #s

  constructor() {
    this.#s = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.#s.push(item);
    return this.#s.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.#s.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.#s.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.#s[this.#s.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.#s.length;
  }
}