import Vue from "vue";
import EventBus from "../EventBus";
import hasClickedAway from "../utils/hasClickedAway";

const Dropdownue = {
  props: {
    list: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: String,
      required: false,
      default: undefined
    },
    filterQuery: {
      type: String,
      required: false,
      default: ""
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
    },
    resetOnSelect: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      isOpen: false,
      formedListItems: [],
      listItemsToRender: [],
      value: this.defaultValue
    };
  },
  watch: {
    list: {
      immediate: true,
      deep: true,
      handler(newList) {
        this.formedListItems = Vue.observable(
          this.list.map(item => {
            const newList = Vue.observable({
              ...item,
              isSelected: item.isSelected || this.value == item.id || false,
              isHighlighted: item.isHighlighted || false
            });
            this.$emit("updateList", newList);
            return newList;
          })
        );
      }
    },
    isOpen() {
      if (this.isOpen) {
        document.addEventListener("click", this.handleClickAway);
        document.addEventListener("keydown", this.handleClickAway);
      } else {
        document.removeEventListener("click", this.handleClickAway);
        document.removeEventListener("keydone", this.handleClickAway);
      }
    },
    filterQuery: {
      immediate: true,
      handler(newFilterQuery) {
        this.filter(newFilterQuery);
      }
    }
  },
  mounted() {
    this.listenOnChangeValue();
  },
  methods: {
    listenOnChangeValue() {
      EventBus.$on("dropdownue:changeValue", newValue => {
        this.select(newValue);
      });
    },
    handleClickAway(event) {
      if (hasClickedAway(this.$el, event) || event.key === "Escape") {
        this.close();
      }
    },
    open() {
      this.isOpen = true;
      this.$emit("open");
    },
    close() {
      this.isOpen = false;
      this.$emit("close");
    },
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit("toggle", this.isOpen);
    },
    filter(query) {
      if (query) {
        this.listItemsToRender = this.formedListItems.filter(item => {
          return item.name.includes(query);
        });
      } else {
        this.listItemsToRender = this.formedListItems;
      }
    },
    select(value) {
      this.value = value;
      this.$emit("change", value);
      if (this.closeOnSelect) {
        this.close();
      }
      if (this.resetOnSelect) {
        this.filter("");
      }
    }
  },
  render() {
    return this.$scopedSlots.default({
      isOpen: this.isOpen,
      isClosed: !this.isOpen,
      value: this.value,
      listItems: this.listItemsToRender,

      open: this.open,
      close: this.close,
      toggle: this.toggle,
      filter: this.filter
    });
  }
};

export { Dropdownue };
export { DropdownueItem } from "./dropdownueItem";
