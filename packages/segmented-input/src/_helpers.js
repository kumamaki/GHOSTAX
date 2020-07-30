import { reactive } from 'vue';

const deepMerge = require('deepmerge');

const optionsHelpers = {
    normalize(defaultOption) {
        return reactive(
            deepMerge(defaultOption, this.options)
        );
    },
    validate(defaultOptions) {
        Object.keys(this.options).forEach((passedOptionKey) => {
            if (!defaultOptions.hasOwnProperty(passedOptionKey)) {
                console.error(`${passedOptionKey} doesn't seem to be a valid option. valid options are -> ${defaultOptions}`);
            }
        });
    }
};

const validators = {
    isRealNumber(number) {
        return Number.isInteger(number) && number > 0;
    }
};

function isBackspace(keyCode) {
    return keyCode === 8;
}
function isDelete(keyCode) {
    return keyCode === 46;
}
function isNumber(keyCode) {
    return (keyCode >= 48 && keyCode <= 57);
}

export {
    optionsHelpers,
    validators,

    isBackspace,
    isDelete,
    isNumber
};
