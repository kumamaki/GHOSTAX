const DropdownItem = {
  props: {
    instance: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    uniqueField() {
      return this.instance.normalizedOptions.fields.unique;
    }
  },
  methods: {
    highlight(item) {
      this.instance.$emit('highlight', item[this.uniqueField]);
    },
    blur(item) {
      this.instance.$emit('blur', item[this.uniqueField]);
    },
    select(item) {
      this.instance.$emit('select', item[this.uniqueField]);
    },
    getItemEvents(item) {
      return {
        mouseover: () => {
          this.highlight(item);
        },
        mouseout: () => {
          this.blur(item);
        },
        click: () => {
          this.select(item);
        }
      };
    }
  },
  render() {
    return this.$scopedSlots.default({
      isSelected: this.item.isSelected,
      isHighlighted: this.item.isHighlighted,

      highlight: this.highlight,
      itemMouseoverEvent: (item) => {
        return this.getItemEvents(item).mouseover();
      },
      itemMouseoutEvent: (item) => {
        return this.getItemEvents(item).mouseout();
      },
      itemEvents: this.getItemEvents
    });
  }
};

export { DropdownItem };
