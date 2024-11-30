'use strict';

const array = () => {
    const arr = [];

    const getter = (index) => arr[index];
    getter.push = (value) => arr.push(value);
    getter.pop = () => arr.pop();

    return getter;
}

module.exports = { array };
