import { isPromise, optionsHelpers } from './_helpers';

const defaultOptions = {
    fields: {
        data: ''
    }
};

export default {
    name: 'PromiseObserver',
    props: {
        promises: {
            required: false,
            default: null,
            validator(value) {
                return Promise.resolve(value) == value || value == null;
            }
        },
        promise: {
            type: [Object, Array],
            required: false,
            default: null
        },
        options: {
            type: Object,
            required: false,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            hasFulfilled: false,
            hasRejected: false,
            mainData: null,
            response: null,
            reason: '',
            isPending: false
        };
    },
    watch: {
        promise: {
            immediate: true,
            handler() {
                if (this.hasPromise) {
                    this.getReadyForNewOne();
                    this.observe();
                }
            }
        }
    },
    computed: {
        normalizedOptions() {
            optionsHelpers.validate.apply(this, [defaultOptions]);
            return optionsHelpers.normalize.apply(this, [defaultOptions]);
        },
        hasPromise() {
            return !!this.promise && isPromise(this.promise);
        },
        state() {
            if (this.hasRejected) {
                return 'rejected';
            }
            if (this.hasFulfilled) {
                return 'fulfilled';
            }
        }
    },
    methods: {
        getReadyForNewOne() {
            this.hasFulfilled = false;
            this.hasRejected = false;
            this.response = null;
            this.mainData = null;
        },
        observe() {
            this.isPending = true;
            this.promise
                .then((response) => {
                    console.log({ response });
                    this.hasFulfilled = true;
                    this.response = response;
                    this.mainData = response?.[this.normalizedOptions.fields.data] || response;
                    this.$emit('fulfill', response);
                    return response;
                })
                .catch((error) => {
                    this.hasRejected = true;
                    this.reason = error;
                    this.$emit('error', error);
                    return error;
                })
                .finally(() => {
                    this.isPending = false;
                });
        }
    },
    render(h) {
        console.log(this);
        if (this.hasPromise) {
            return this.$scopedSlots.default({
                state: this.state,

                isPending: this.isPending,

                hasFulfilled: this.hasFulfilled,
                response: this.response,
                mainData: this.mainData,

                hasRejected: this.hasRejected,
                reason: this.reason
            });
        }
        return this.$scopedSlots.default({});
    }
};
