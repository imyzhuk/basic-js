const CustomError = require("../extensions/custom-error");

function isNest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) return true;
    }
    return false;
}
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let newArray = [];
        if (!isNest(arr)) {
            return 1;
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    newArray = newArray.concat(arr[i]);
                } else {
                    newArray.push(arr[i]);
                }
            }
            return 1 + this.calculateDepth(newArray);
        }
    }
};
