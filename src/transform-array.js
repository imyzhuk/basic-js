const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    var array = Array.from(arr);
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "--discard-next") {
            if (
                array[i + 2] == "--discard-prev" ||
                array[i + 2] == "--double-prev"
            ) {
                array.splice(i, 3);
            } else if (typeof array[i + 1] === "undefined") {
                array.splice(i, 1);
            } else {
                array.splice(i, 2);
            }
        } else if (array[i] == "--discard-prev") {
            if (typeof array[i - 1] === "undefined") {
                array.splice(i, 1);
            } else {
                array.splice(i - 1, 2);
            }
        } else if (array[i] == "--double-next") {
            if (typeof array[i + 1] === "undefined") {
                array.splice(i, 1);
            } else {
                array.splice(i, 1, array[i + 1]);
            }
        } else if (array[i] == "--double-prev") {
            if (typeof array[i - 1] == "undefined") {
                array.splice(i, 1);
            } else {
                array.splice(i, 1, array[i - 1]);
            }
        }
    }

    return array;
};
