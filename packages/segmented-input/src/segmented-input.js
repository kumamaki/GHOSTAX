import {
    optionsHelpers, validators, isBackspace, isDelete, isNumber
} from './_helpers';

const defaultOptions = {
};

export default {
    name: 'GhostaxSegmentedInput',
    model: {
        prop: '',
        event: ''
    },
    props: {
        fieldsCount: {
            type: Number,
            required: true,
            validation(value) {
                return validators.isRealNumber(value);
            }
        },
        validation: {
            type: Function,
            required: false,
            default: isNumber
        }
    },
    data() {
        return {
            codes: Array(this.fieldsCount).fill().map(() => {
                return {
                    isFocused: false,
                    value: null
                };
            }),
            inputsRef: []
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.inputsRef = this._vnode.elm.querySelectorAll('input');
        });
    },
    watch: {
        focusStates: {
            handler(newFocusStates) {
                const codeToFocusIndex = newFocusStates.findIndex(Boolean);
                if (codeToFocusIndex >= 0 && codeToFocusIndex <= this.codes.length) {
                    this.inputsRef[codeToFocusIndex].focus();
                }
            }
        }
    },
    computed: {
        normalizedOptions() {
            optionsHelpers.validate.apply(this, [defaultOptions]);
            return optionsHelpers.normalize.apply(this, [defaultOptions]);
        },
        value() {
            return this.codes
                .map((code) => {
                    return code.value;
                })
                .filter((code) => {
                    return typeof code === 'string';
                })
                .reduce((prevNumber, currentNumber) => {
                    return prevNumber + currentNumber;
                }, '');
        },
        firstEmptyFieldIndex() {
            return this.codes.findIndex((code) => {
                return !code.value;
            });
        },
        focusStates() {
            return this.codes.map((code) => {
                return code.isFocused;
            });
        }
    },
    methods: {
        unFocusAllFields(params) {
            this.codes.forEach((code, index) => {
                this.inputsRef[index].blur();
                code.isFocused = false;
            });
        },
        focusCode(index) {
            if (index >= 0 && index <= this.codes.length) {
                this.unFocusAllFields();
                this.codes[index].isFocused = true;
                this.$emit('focus', index);
            }
        },
        clearField(index) {
            if (index >= 0 && index <= this.codes.length) {
                this.codes[index].value = null;
                this.$emit('delete', index);
            }
        },
        handleKeydown($event, index) {
            if (this.validation($event.keyCode)) {
                this.codes[index].value = $event.key;
                this.focusCode(this.firstEmptyFieldIndex);
                this.$emit('input', {
                    value: $event.key,
                    fieldIndex: index
                });
            } else if (isBackspace($event.keyCode) || isDelete($event.keyCode)) {
                if (this.codes[index].value) {
                    this.clearField(index);
                    this.focusCode(index);
                    this.$emit('input', {
                        value: '',
                        fieldIndex: index
                    });
                } else {
                    this.clearField(index - 1);
                    this.focusCode(index - 1);
                    this.$emit('input', {
                        value: '',
                        fieldIndex: index - 1
                    });
                }
            }
            $event.preventDefault();
        }
    },
    render(h) {
        return h(
            this.tag || 'div',
            this.$scopedSlots.default({
                codes: this.codes,
                value: this.value,
                events: {
                    keydown: this.handleKeydown
                }
            })
        );
    }
};
