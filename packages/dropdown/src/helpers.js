import Vue from 'vue';

const deepMerge = require('deepmerge');


const hasClickedAway = (element, event) => {
  return !element.contains(event.target);
};

export { hasClickedAway };


const listHelpers = {
  normalize(list = [], currentValue) {
    return Vue.observable(
      list.map((item) => {
        const newList = {
          ...item,
          isSelected: item.isSelected || currentValue == item.id || false,
          isHighlighted: item.isHighlighted || false
        };
        return newList;
      })
    );
  },
  findByUID(itemID) {
    return this.normalizedList.find((listItem) => {
      return listItem[this.normalizedOptions.fields.unique] === itemID;
    });
  },
  findSelected() {
    return this.normalizedList.find((listItem) => {
      return listItem.isSelected;
    });
  }
};

export { listHelpers };


const optionsHelpers = {
  normalize(options, defaultOption) {
    return Vue.observable(
      deepMerge(defaultOption, options)
    );
  },
  validate(passedOptions, defaultOptions) {
    Object.keys(passedOptions).forEach((passedOptionKey) => {
      if (!defaultOptions.hasOwnProperty(passedOptionKey)) {
        console.error(`${passedOptionKey} doesn't seem to be a valid option. valid options are -> ${defaultOptions}`);
      }
    });
  }
};

export { optionsHelpers };
