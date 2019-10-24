import Vue from 'vue';

const deepMerge = require('deepmerge');

const optionsHelpers = {
  normalize(defaultOption) {
    return Vue.observable(
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

export {
  optionsHelpers,
  validators
};
