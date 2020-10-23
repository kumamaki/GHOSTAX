import {
    reactive, ref, computed, watch
} from 'vue';
import {
    optionsHelpers, isBackspace, isDelete, isNumber
} from './_helpers';

const defaultOptions = {
};

export default function useSegmentedInput({ fieldsCount, inputRefs, validation = isNumber }) {
    const resolvedOptions = computed(() => {
        optionsHelpers.validate.apply(this, [defaultOptions]);
        return optionsHelpers.normalize.apply(this, [defaultOptions]);
    });


    const codes = reactive(Array(fieldsCount).fill().map(() => {
        return {
            isFocused: false,
            data: ''
        };
    }));

    const value = computed(() => {
        return codes
            .map((code) => {
                return code.data;
            })
            .filter((code) => {
                return typeof code === 'string';
            })
            .reduce((prevValue, currentValue) => {
                return prevValue + currentValue;
            }, '');
    });


    const firstEmptyFieldIndex = computed(() => {
        return codes.findIndex((code) => {
            return !code.data;
        });
    });


    const focusStates = computed(() => {
        return codes.map((code) => {
            return code.isFocused;
        });
    });
    watch(
        () => {
            return focusStates.value;
        },
        (newFocusStates) => {
            const codeToFocusIndex = newFocusStates.findIndex(Boolean);
            if (codeToFocusIndex >= 0 && codeToFocusIndex <= codes.length) {
                inputRefs.value[codeToFocusIndex].focus();
            }
        }
    );

    const unFocusAllFields = () => {
        codes.forEach((code, index) => {
            inputRefs.value[index].blur();
            code.isFocused = false;
        });
    };

    const focusOn = (codeIndex) => {
        if (codeIndex >= 0 && codeIndex <= codes.length) {
            unFocusAllFields();
            codes[codeIndex].isFocused = true;
        }
    };

    const clearCode = (codeIndex) => {
        if (codeIndex >= 0 && codeIndex <= codes.length) {
            codes[codeIndex].data = null;
        }
    };

    const handleKeydown = ($event, codeIndex) => {
        if (validation($event.keyCode)) {
            codes[codeIndex].data = $event.key;
            focusOn(firstEmptyFieldIndex.value);
        } else if (isBackspace($event.keyCode) || isDelete($event.keyCode)) {
            if (codes[codeIndex].data) {
                clearCode(codeIndex);
                focusOn(codeIndex);
            } else {
                clearCode(codeIndex - 1);
                focusOn(codeIndex - 1);
            }
        }
        $event.preventDefault();
    };

    return {
        codes,
        value,
        ghEvents: {
            keydown: handleKeydown
        }
    };
}
