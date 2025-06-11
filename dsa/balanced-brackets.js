/**
 * @description
Given a string `str` consisting of characters such as `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is properly balanced.

A string is considered balanced if:

- Each opening bracket bracket is closed by the same type of bracket (e.g., `(` with `)`, `{` with `}`, and `[` with `]`)
- Open brackets are closed in the correct order (e.g., `([])` is valid, but `([)]` is not)
- Any subset of brackets enclosed within a matched pair must also form a valid matched pair (e.g., `{[(])}` is not balanced because the contents inside `{` and `}` are unbalanced).
 *
 * @type {(str: string) => boolean}
 *
 * @constraint
 * - 1 <= `str.length` <= 1000
 * - `str` contains only the characters `(`, `)`, `{`, `}`, `[` and `]`
 *
 * @example
 * isBalancedBrackets("[]") // => true
 * isBalancedBrackets("([)]") // => false
 * isBalancedBrackets("([]){}") // => true
 *
 * @TimeComplexity `O(n)`
 * @SpaceComplexity `O(n)`
 */
export default function isBalancedBrackets(str) {
  const map = {
    "[": "]",
    "{": "}",
    "(": ")"
  };
  const stack = [];

  for (const bracket of str) {
    if (bracket in map) {
      stack.push(bracket);
    } else {
      const lastOpening = stack.pop();
      if (map[lastOpening] !== bracket) {
        return false;
      }
    }
  }
  return true;
}

console.log("[]", isBalancedBrackets("[]"));
console.log("([]){}", isBalancedBrackets("([]){}"));
console.log("([]){}", isBalancedBrackets("([)]"));