import Vue from 'vue';
import EventBus from '../EventBus';
import hasClickedAway from '../utils/hasClickedAway';


const Dropdownue = {
  props: {
    initialValue: {
      type: String,
      required: false,
      default: undefined
    },
    list: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: String,
      required: false,
      default: undefined
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnClickaway: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      isOpen: false,
      listItems: [],
      value: this.defaultValue,
      filterQuery: ''
    };
  },
  watch: {
    list: {
      immediate: true,
      deep: true,
      handler(newList) {
        this.listItems = this.list.map((item) => {
          return Vue.observable({
            ...item,
            isSelected: item.isSelected || this.value == item.id || false,
            isHighlighted: item.isHighlighted || false
          })
        });
      }
    },
    isOpen() {
      if (this.isOpen) {
        document.addEventListener('click', this.handleClickAway);
        document.addEventListener('keydown', this.handleClickAway);
      } else {
        document.removeEventListener('click', this.handleClickAway)
        document.removeEventListener('keydone', this.handleClickAway)
      }
    },
    filterQuery(newFilterQuery) {
      this.filter(newFilterQuery);
    }
  },
  mounted() {
    this.listenOnChangeValue();
  },
  methods: {
    listenOnChangeValue() {
      EventBus.$on('changeValue', (newValue) => {
        this.value = newValue;
        if (this.closeOnSelect) {
          this.close();
        }
      });
    },
    handleClickAway(event) {
      if (hasClickedAway(this.$el, event) || event.key === 'Escape') {
        this.close();
      }
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    filter(query) {
      this.listItems = this.listItems.filter((item) => {
        return item.name.includes(query);
      });
    }
  },
  render() {
    return this.$scopedSlots.default({
      isOpen: this.isOpen,
      isClosed: !this.isOpen,
      open: this.open,
      close: this.close,
      toggle: this.toggle,
      value: this.value,
      listItems: this.listItems,
      filter: this.filter
    });
  }
};

export { Dropdownue };
export { DropdownueItem } from './DropdownueItem';
