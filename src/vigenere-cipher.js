const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        if (direct === true) {
            this.directing = true;
        } else {
            this.directing = false;
        }
    }
    encrypt(message, key) {
        if (typeof message === "undefined" || typeof key === "undefined") {
            throw new Error("");
        }

        const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        // Перевели исходное сообщение в чиса
        message = message.toUpperCase();
        let numberMessage = [];
        for (let i = 0; i < message.length; i++) {
            if (alph.some((element) => element === message[i])) {
                numberMessage.push(message[i].codePointAt(0) - 65);
            }
        }

        // Перевели ключ в числа
        key = key.toUpperCase();
        let arrayKey = [];
        for (let i = 0; i < numberMessage.length; i++) {
            arrayKey.push(key[i % key.length]);
        }

        let numberKey = [];
        for (let i = 0; i < arrayKey.length; i++) {
            numberKey.push(arrayKey[i].codePointAt(0) - 65);
        }

        //Криптограмма в числах
        let numberResult = [];
        for (let i = 0; i < numberMessage.length; i++) {
            let numberLetter = numberMessage[i] + numberKey[i];
            if (numberLetter >= 26) {
                numberLetter -= 26;
            }
            numberResult.push(numberLetter);
        }
        //Криптограмма
        let crypto = [];
        for (let i = 0; i < numberResult.length; i++) {
            crypto.push(String.fromCharCode(numberResult[i] + 65));
        }

        for (let i = 0; i < message.length; i++) {
            if (!alph.some((element) => element === message[i])) {
                crypto.splice(i, 0, message[i]);
            }
        }
        if (this.directing === true) {
            return crypto.join("");
        } else {
            return crypto.reverse().join("");
        }
    }

    decrypt(message, key) {
        if (typeof message === "undefined" || typeof key === "undefined") {
            throw new Error("");
        }

        const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        // Перевели исходное сообщение в чиса
        message = message.toUpperCase();
        let numberMessage = [];
        for (let i = 0; i < message.length; i++) {
            if (alph.some((element) => element === message[i])) {
                numberMessage.push(message[i].codePointAt(0) - 65);
            }
        }

        // Перевели ключ в числа
        key = key.toUpperCase();
        let arrayKey = [];
        for (let i = 0; i < numberMessage.length; i++) {
            arrayKey.push(key[i % key.length]);
        }

        let numberKey = [];
        for (let i = 0; i < arrayKey.length; i++) {
            numberKey.push(arrayKey[i].codePointAt(0) - 65);
        }

        //Криптограмма в числах
        let numberResult = [];
        for (let i = 0; i < numberMessage.length; i++) {
            let numberLetter = numberMessage[i] - numberKey[i];
            if (numberLetter < 0) {
                numberLetter += 26;
            }
            numberResult.push(numberLetter);
        }

        //Криптограмма
        let crypto = [];
        for (let i = 0; i < numberResult.length; i++) {
            crypto.push(String.fromCharCode(numberResult[i] + 65));
        }

        for (let i = 0; i < message.length; i++) {
            if (!alph.some((element) => element === message[i])) {
                crypto.splice(i, 0, message[i]);
            }
        }

        if (this.directing === true) {
            return crypto.join("");
        } else {
            return crypto.reverse().join("");
        }
    }
}

module.exports = VigenereCipheringMachine;
