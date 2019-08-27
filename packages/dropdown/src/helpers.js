import deepMerge from 'deepmerge';


const hasClickedAway = (element, event) => {
  return !element.contains(event.target);
};

export { hasClickedAway };


const listHelpers = {
  normalize(list = [], currentValue) {
    return list.map((item) => {
      const newList = {
        ...item,
        isSelected: item.isSelected || currentValue == item.id || false,
        isHighlighted: item.isHighlighted || false
      };
      return newList;
    });
  }
};

export { listHelpers };


const optionsHelpers = {
  normalize(options, defaultOption) {
    return deepMerge(defaultOption, options);
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
