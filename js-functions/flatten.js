function flattenStack(v) {
  const result = [];
  while (v.length > 0) {
    const head = v.pop();
    if (Array.isArray(head)) {
      v.push(...head);
    } else {
      result.push(head);
    }
  }
  return result.reverse();
}

function flattenShift(v) {
  const copy = v.slice();
  const result = [];
  while (copy.length > 0) {
    const item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

function flattenExplode(v) {
  let result = v;
  while (result.some(Array.isArray)) {
    result = [].concat(...result);
  }
  return result;
}
