/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    const v = this[i];
    if(v === undefined) {
      continue;
    }
    if(callbackFn.call(thisArg, v, i, this)) {
      result.push(v);
    }
  }
  return result;
};