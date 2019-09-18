import { optionsHelpers } from './_helpers';

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
      currentPage: 1
    };
  },
  watch: {
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
    tail() {
      return this.currentPage * this.pageLimit;
    },
    hasNextPage() {
      return this.tail < this.totalDocs;
    },
    hasPrevPage() {
      return this.tail > this.pageLimit;
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
    if (this.hasPromise) {
      return this.$scopedSlots.default({
        query: this.query,
        totalPages: this.totalPages,
        tail: this.tail,
        hasNextPage: this.hasNextPage,
        hasPrevPage: this.hasPrevPage,
        nextPage: this.nextPage,
        prevPage: this.prevPage,

        goToNextPage: this.goToNextPage,
        goToPrevPage: this.goToPrevPage
      });
    }
  }
};
