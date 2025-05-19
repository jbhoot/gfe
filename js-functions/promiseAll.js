export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
    }
    for (let i = 0; i < iterable.length; i++) {
      const item = iterable[i];
      Promise.resolve(item)
        .then((value) => {
          results[i] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    }
  });
}
