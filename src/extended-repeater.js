const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    var str = String(str);

    var repeatTimes = options.repeatTimes;
    var separator;
    var addition;
    var additionRepeatTimes = options.additionRepeatTimes;
    var additionSeparator;

    //separator start
    if (repeatTimes == null) {
        separator = "";
    } else if (options.separator == null) {
        separator = "+";
    } else {
        separator = options.separator;
    }
    // separator end

    //addition start
    if (String(options.addition) === "null") {
        addition = "null";
    } else if (String(options.addition) === "undefined") {
        addition = "";
    } else {
        addition = String(options.addition);
    }
    //addition end

    var add = addition;

    //additionSeparator start
    if (options.additionSeparator == null) {
        additionSeparator = "|";
    } else {
        additionSeparator = options.additionSeparator;
    }
    // additionSeparator end

    for (var i = 0; i < additionRepeatTimes - 1; i++) {
        add = add + additionSeparator + addition;
    }

    var newStr = str + add;
    if (additionRepeatTimes == null) {
        add = "";
    }
    for (var i = 0; i < repeatTimes - 1; i++) {
        newStr = newStr + separator + str + add;
    }

    if (repeatTimes == null) {
        newStr += add;
    }
    return newStr;
};
