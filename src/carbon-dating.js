const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        typeof sampleActivity !== "string" ||
        isNaN(+sampleActivity) ||
        +sampleActivity === 0 ||
        +sampleActivity > MODERN_ACTIVITY ||
        +sampleActivity < 0
    ) {
        return false;
    } else {
        let answer = Math.ceil(
            (Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD) /
                0.693
        );
        return answer;
    }
};
