/**
@param {Array<string>} items
@param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
@return {string}
*/
export default function listFormat(items, options = {}) {
  // filter out empty items
  let names = items.filter((i) => i);
  let displayedNames;

  if (options.unique) {
    names = [...new Set(items).values()];
  }

  if (options.sorted) {
    names = names.toSorted();
  }

  if (options.length > 0) {
    displayedNames = names.slice(0, options.length);
  } else {
    displayedNames = names;
  }

  const others = names.length - displayedNames.length;
  if (options.length > 0 && others > 0) {
    displayedNames.push(`${others} ${others === 1 ? "other" : "others"}`);
  }

  let result = "";
  for (let i = 0; i < displayedNames.length; i++) {
    if (i === 0) {
      result = displayedNames[i];
    } else if (i === displayedNames.length - 1) {
      result = result + " and " + displayedNames[i];
    } else {
      result = result + ", " + displayedNames[i];
    }
  }

  return result;
}
