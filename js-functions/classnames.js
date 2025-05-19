/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNamesRecursive(...args) {
    const classes = [];

    args.forEach((arg) => {
        const typeOfArg = typeof arg;

        if (!arg) {
            return;
        }

        if (typeOfArg === "number" || typeOfArg === "string") {
            classes.push(arg);
            return;
        }

        if (typeOfArg === "object" && !Array.isArray(arg)) {
            for (const key in arg) {
                if (Object.hasOwn(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
            return;
        }

        if (Array.isArray(arg)) {
            classes.push(classNamesRecursive(...arg));
            return;
        }
    });

    return classes.join(" ").trim();
}


/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNamesIterative(...args) {
    // Set to ensure that the final result does not have duplicates.
    const classes = new Set();

    while (args.length > 0) {
        const curr = args.shift();
        if (!curr) {
            continue;
        }
        if (Array.isArray(curr)) {
            args.unshift(...curr);
            continue;
        }
        if (typeof curr === "object") {
            for (const key in curr) {
                if (curr[key]) {
                    classes.add(key);
                } else {
                    // delete an added class because it has been turned off later in the classnames() arg.
                    if (classes.has(key)) {
                        classes.delete(key);
                    }
                }
            }
            continue;
        }
        classes.add(curr);
    }
    return [...classes.keys()].join(" ").trim();
}
