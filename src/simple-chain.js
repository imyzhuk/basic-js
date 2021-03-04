const CustomError = require("../extensions/custom-error");

const chainMaker = {
    array: [],
    getLength() {
        return this.array.length;
    },
    addLink(value) {
        if (typeof value === "undefined") {
            this.array.push("(  )");
        } else {
            this.array.push("( " + value + " )");
        }
        return this;
    },
    removeLink(position) {
        if (
            typeof position != "number" ||
            position % 1 > 0 ||
            position < 1 ||
            position > this.array.length
        ) {
            this.array.length = 0;
            throw new Error();
        } else {
            this.array.splice(position - 1, 1);
        }
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        var chain = this.array.join("~~");
        this.array.length = 0;
        return chain;
    },
};

module.exports = chainMaker;
