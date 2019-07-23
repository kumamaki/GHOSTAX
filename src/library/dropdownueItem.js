import EventBus from '../EventBus';

const DropdownueItem = {
  props: {
    instanceId: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isSelected: false,
      isHighlighted: false
    };
  },
  methods: {
    highlight(item) {
      item.isHighlighted = true;
    },
    blur(item) {
      item.isHighlighted = false;
    },
    select(item) {
      const previouslySelected = this.list.find((item) => {
        return item.isSelected;
      });
      if (previouslySelected) {
        previouslySelected.isSelected = false;
      }
      item.isSelected = !item.isSelected;
      EventBus.$emit(`dropdownue:changeValue${this.instanceId}`, item.id);
      this.$emit('change', item.id);
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

export { DropdownueItem };
