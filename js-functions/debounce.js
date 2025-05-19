export default function debounce(func, wait) {
  const waitTime = wait;
  let handle = undefined;
  return function (...args) {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(func.bind(this, ...args), waitTime);
  };
}
