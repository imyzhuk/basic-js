const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    var str = "";
    var array = [];
    for (var i = 0; i < members.length; i++) {
        if (typeof members[i] == "string") {
            members[i] = members[i].trim().toUpperCase();
            array.push(members[i]);
        }
    }
    var array = array.sort();
    for (var j = 0; j < array.length; j++) {
        str += array[j][0];
    }
    return str;
};
