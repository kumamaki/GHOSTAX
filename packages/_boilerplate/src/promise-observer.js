import { optionsHelpers } from './_helpers';

const defaultOptions = {
  fields: {

  }
};

export default {
  name: 'Pagination',
  props: {
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
  },
  computed: {
    normalizedOptions() {
      optionsHelpers.validate.apply(this, [defaultOptions]);
      return optionsHelpers.normalize.apply(this, [defaultOptions]);
    }
  },
  methods: {
  },
  render(h) {
    if (this.hasPromise) {
      return this.$scopedSlots.default({
      });
    }
  }
};
