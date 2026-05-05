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
          isSelected: item.isSelected || String(currentValue) == String(item[this.normalizedOptions.fields.unique]) || false,
          isHighlighted: item.isHighlighted || false
        };
        return newList;
      })
    );
  },
  findByUID(uid) {
    return this.normalizedList.find((listItem) => {
      return listItem[this.normalizedOptions.fields.unique] === uid;
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

export { optionsHelpers };
