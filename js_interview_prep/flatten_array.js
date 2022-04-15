let arr = [1,[2, 3],[3],[[[5]],6]];

const flatten = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flatten(curr));
        }
        return acc.concat(curr);
    }, []);
};

let output = arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
}, []);

console.log(output);

