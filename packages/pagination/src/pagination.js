import { optionsHelpers } from './_helpers';

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
  props: {
    totalDocs: {
      type: Number,
      required: true
    },
    pageLimit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    areaCount: {
      type: Number,
      required: false,
      default: 5
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
        area: this.area,
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
    progress() {
      return this.currentPage * this.pageLimit;
    },
    hasNextPage() {
      return this.progress < this.totalDocs;
    },
    hasPrevPage() {
      return this.progress > this.pageLimit;
    },
    hasFirstPage() {
      return this.currentPage !== 1;
    },
    hasLastPage() {
      return this.currentPage !== this.totalPages;
    },
    fillsTheLimit() {
      return this.totalDocs >= this.progress;
    },
    nextPage() {
      if (this.hasNextPage) {
        return this.currentPage + 1;
      }
      return null;
    },
    prevPage() {
      if (this.hasPrevPage) {
        return this.currentPage - 1;
      }
      return null;
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
    area() {
      if (this.totalDocs <= this.pageLimit) {
        return [1];
      }
      const veryStart = 1;
      const veryEnd = this.totalPages;
      const area = [this.currentPage];
      const areaCount = this.areaCount - 1;
      const { currentPage } = this;
      const idealPreSpan = Math.floor(areaCount / 2);
      const idealPostSpan = Math.ceil(areaCount / 2);

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
        return idealPreSpan + preLeftOver;
      })();

      // Generate pre pages
      _times(calculatedPreSpan, (preSpanIndex) => {
        const prePageNumber = preSpanIndex + 1;
        if ((currentPage - prePageNumber) > 0) {
          console.log(`Unshifting ${prePageNumber}`);
          area.unshift(currentPage - prePageNumber);
        }
      });

      // Generate post pages
      _times(calculatedPostSpan, (postSpanIndex) => {
        const postPageNumber = postSpanIndex + 1;
        if ((currentPage + postPageNumber) <= veryEnd) {
          console.log(`Pushing ${postPageNumber}`);
          area.push(currentPage + postPageNumber);
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

      return area;
    },
    query() {
      return `${this.normalizedOptions.fields.query.pageSize}=${this.pageLimit}&${this.normalizedOptions.fields.query.pageNumber}=${this.currentPage}`;
    }
  },
  methods: {
    goToNextPage() {
      if (this.nextPage) {
        this.currentPage = this.nextPage;
      } else {
        console.error(`There is no page after page ${this.currentPage}`);
      }
    },
    goToPrevPage() {
      if (this.prevPage) {
        this.currentPage = this.prevPage;
      } else {
        console.error(`There is no page before page ${this.currentPage}`);
      }
    }
  },
  render(h) {
    return this.$scopedSlots.default({
      totalPages: this.totalPages,
      progress: this.progress,
      hasNextPage: this.hasNextPage,
      hasPrevPage: this.hasPrevPage,
      hasFirstPage: this.hasNextPage,
      hasLastPage: this.hasPrevPage,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
      query: this.query,
      area: this.area,
      pageSize: this.pageLimit,
      pageNumber: this.currentPage,
      showingInfo: this.showingInfo,
      fillsTheLimit: this.fillsTheLimit,

      goToNextPage: this.goToNextPage,
      goToPrevPage: this.goToPrevPage
    });
  }
};
