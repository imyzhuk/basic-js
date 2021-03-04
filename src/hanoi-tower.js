const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var obj = {};
    function inner(n) {
        if (n === 1) {
            return 1;
        } else {
            return 1 + 2 * inner(n - 1);
        }
    }
    obj.turns = inner(disksNumber);
    obj.seconds = Math.floor((obj.turns * 3600) / turnsSpeed);
    return obj;
};
