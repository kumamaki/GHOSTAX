import { optionsHelpers, validators } from './_helpers';

const _times = require('lodash.times');

const defaultOptions = {
    fields: {
        query: {
            pageSize: 'pageSize',
            pageNumber: 'pageNumber'
        }
    }
};

export default {
    name: 'Pagination',
    model: {
        prop: 'currentPage',
        event: 'change-page'
    },
    props: {
        totalDocs: {
            type: Number,
            required: true,
            validator(value) {
                return validators.isRealNumber(value);
            }
        },
        pageLimit: {
            type: Number,
            required: true,
            validator(value) {
                return validators.isRealNumber(value);
            }
        },
        currentPage: {
            type: Number,
            required: true,
            validator(value) {
                return validators.isRealNumber(value);
            }
        },
        pageNumbersSetCount: {
            type: Number,
            required: false,
            default: 5,
            validator(value) {
                return validators.isRealNumber(value);
            }
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
        };
    },
    watch: {
        currentPage() {
            this.$emit('update', {
                query: this.query,
                pageNumbersSet: this.pageNumbersSet,
                pageSize: this.pageLimit,
                pageNumber: this.currentPage
            });
        }
    },
    computed: {
        normalizedOptions() {
            optionsHelpers.validate.apply(this, [defaultOptions]);
            return optionsHelpers.normalize.apply(this, [defaultOptions]);
        },
        totalPages() {
            return Math.ceil(
                this.totalDocs / this.pageLimit
            );
        },
        itemsPassed() {
            return this.currentPage * this.pageLimit;
        },
        itemsLeft() {
            return this.totalDocs - this.itemsPassed;
        },
        hasNextPage() {
            return this.itemsPassed < this.totalDocs;
        },
        hasPrevPage() {
            return this.itemsPassed > this.pageLimit;
        },
        hasFirstPage() {
            return this.currentPage !== 1;
        },
        hasLastPage() {
            return this.currentPage !== this.totalPages;
        },
        fillsTheLimit() {
            return this.totalDocs >= this.itemsPassed;
        },
        showingInfo() {
            return {
                from: ((this.currentPage - 1) * this.pageLimit) + 1,
                to: (() => {
                    if (this.fillsTheLimit) {
                        return this.currentPage * this.pageLimit;
                    }
                    return this.totalDocs;
                })(),
                of: this.totalDocs
            };
        },
        pageNumbersSet() {
            if (this.totalDocs <= this.pageLimit) {
                return [1];
            }
            const veryStart = 1;
            const veryEnd = this.totalPages;
            const pageNumbersSet = [this.currentPage];
            const pageNumbersSetCount = this.pageNumbersSetCount - 1;
            const { currentPage } = this;
            const idealPreSpan = Math.floor(pageNumbersSetCount / 2);
            const idealPostSpan = Math.ceil(pageNumbersSetCount / 2);

            const { gotPreOverflow, preLeftOver } = (() => {
                const gotPreOverflow = (currentPage - idealPreSpan) < veryStart;
                const preLeftOver = (() => {
                    if (gotPreOverflow) {
                        return Math.abs((idealPreSpan - (currentPage - veryStart)));
                    }
                    return 0;
                })();
                return { gotPreOverflow, preLeftOver };
            })();

            const { gotPostOverflow, postLeftOver } = (() => {
                const gotPostOverflow = (currentPage + idealPostSpan) > veryEnd;
                const postLeftOver = (() => {
                    if (gotPostOverflow) {
                        return Math.abs((currentPage + idealPostSpan) - veryEnd);
                    }
                    return 0;
                })();
                return { gotPostOverflow, postLeftOver };
            })();

            const calculatedPreSpan = (() => {
                if (gotPreOverflow) {
                    return (currentPage - veryStart + postLeftOver);
                }
                return idealPreSpan + postLeftOver;
            })();
            const calculatedPostSpan = (() => {
                if (gotPostOverflow) {
                    return (veryEnd - currentPage + preLeftOver);
                }
                return idealPostSpan + preLeftOver;
            })();

            // Generate pre pages
            _times(calculatedPreSpan, (preSpanIndex) => {
                const prePageNumber = preSpanIndex + 1;
                if ((currentPage - prePageNumber) > 0) {
                    console.log(`Unshifting ${currentPage - prePageNumber}`);
                    pageNumbersSet.unshift(currentPage - prePageNumber);
                }
            });

            // Generate post pages
            _times(calculatedPostSpan, (postSpanIndex) => {
                const postPageNumber = postSpanIndex + 1;
                if ((currentPage + postPageNumber) <= veryEnd) {
                    console.log(`Pushing ${currentPage + postPageNumber}`);
                    pageNumbersSet.push(currentPage + postPageNumber);
                }
            });

            console.log({
                idealPreSpan,
                idealPostSpan
            });
            console.log({
                gotPreOverflow,
                preLeftOver
            });
            console.log({
                gotPostOverflow,
                postLeftOver
            });
            console.log({
                calculatedPreSpan,
                calculatedPostSpan
            });

            return pageNumbersSet;
        },
        query() {
            return `${this.normalizedOptions.fields.query.pageSize}=${this.pageLimit}&${this.normalizedOptions.fields.query.pageNumber}=${this.currentPage}`;
        }
    },
    methods: {
        goToNextPage() {
            if (this.hasNextPage) {
                this.$emit('change-page', this.currentPage + 1);
            } else {
                throw new Error(`There is no page after page ${this.currentPage}`);
            }
        },
        goToPrevPage() {
            if (this.hasPrevPage) {
                this.$emit('change-page', this.currentPage - 1);
            } else {
                throw new Error(`There is no page before page ${this.currentPage}`);
            }
        },
        goToFirstPage() {
            if (this.hasFirstPage) {
                return this.$emit('change-page', 1);
            }
            throw new Error('First page is not navigatable');
        },
        goToLastPage() {
            if (this.hasLastPage) {
                return this.$emit('change-page', this.totalPages);
            }
            throw new Error('Last page is not navigatable');
        }
    },
    render(h) {
        return this.$scopedSlots.default({
            totalPages: this.totalPages,
            itemsPassed: this.itemsPassed,
            itemsLeft: this.itemsLeft,
            hasNextPage: this.hasNextPage,
            hasPrevPage: this.hasPrevPage,
            hasFirstPage: this.hasFirstPage,
            hasLastPage: this.hasLastPage,
            query: this.query,
            pageNumbersSet: this.pageNumbersSet,
            pageSize: this.pageLimit,
            pageNumber: this.currentPage,
            showingInfo: this.showingInfo,

            goToNextPage: this.goToNextPage,
            goToPrevPage: this.goToPrevPage,
            goToFirstPage: this.goToFirstPage,
            goToLastPage: this.goToLastPage
        });
    }
};
