/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (
    (valueA === null && valueB === null) ||
    (valueA === undefined && valueB === undefined)
  ) {
    return true;
  }

  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    return (
      valueA.length === valueB.length &&
      valueA.every((v, i) => deepEqual(v, valueB[i]))
    );
  }

  if (
    typeof valueA === "object" &&
    typeof valueB === "object" &&
    !Array.isArray(valueA) &&
    !Array.isArray(valueB)
  ) {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);
    return (
      entriesA.length === entriesB.length &&
      entriesA.every(
        ([k, v], i) => k === entriesB[i][0] && deepEqual(v, entriesB[i][1]),
      )
    );
  }

  return valueA === valueB;
}
