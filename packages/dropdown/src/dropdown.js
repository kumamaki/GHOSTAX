import uuidv4 from 'uuid/v4';
import { hasClickedAway, listHelpers, optionsHelpers } from './helpers';


const defaultOptions = {
  closeOnSelect: true,
  closeOnClickaway: true,
  resetFilterOnSelect: true,
  fields: {
    unique: 'id',
    label: 'label'
  }
};

const Dropdown = {
  name: 'GhostaxDropdown',
  props: {
    rawList: {
      type: Array,
      required: false
    },
    value: {
      type: [String, Number],
      required: false,
      default: undefined
    },
    filterQuery: {
      type: String,
      required: false,
      default: ''
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
      instanceId: uuidv4(),
      isOpen: false,
      localFilterQuery: this.filterQuery
    };
  },
  computed: {
    normalizedOptions() {
      optionsHelpers.validate.apply(this, [defaultOptions]);
      return optionsHelpers.normalize.apply(this, [defaultOptions]);
    },
    normalizedList() {
      return listHelpers.normalize.apply(this, [this.rawList, this.value]);
    },
    listToRender() {
      return this.normalizedList.filter((item) => {
        return item[this.normalizedOptions.fields.label].includes(this.localFilterQuery);
      });
    },
    selectedLabel() {
      const selectedItem = listHelpers.findSelected.call(this);
      if (selectedItem) {
        return selectedItem[this.normalizedOptions.fields.label];
      }
    }
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        document.addEventListener('click', this.handleClickAway);
        document.addEventListener('keydown', this.handleClickAway);
      } else {
        document.removeEventListener('click', this.handleClickAway);
        document.removeEventListener('keydone', this.handleClickAway);
      }
    },
    localFilterQuery(newFilterQery) {
      this.localFilterQuery = newFilterQery;
    }
  },
  mounted() {
    this.listenOnEvents();
  },
  methods: {
    listenOnEvents() {
      this.$on('item-select', (itemID) => { this.select(itemID); });
      this.$on('item-highlight', (itemID) => { this.highlight(itemID); });
      this.$on('item-blur', (itemID) => { this.blur(itemID); });
    },
    select(itemID) {
      this.unselectAny();
      const itemToChange = listHelpers.findByUID.call(this, itemID);
      itemToChange.isSelected = true;
      this.$emit('input', itemID);
      this.afterSelect(itemID);
    },
    unselectAny(field) {
      const itemToUnselect = this.normalizedList.find((listItem) => {
        return listItem.isSelected;
      });
      if (itemToUnselect) {
        itemToUnselect.isSelected = false;
      }
    },
    afterSelect(itemID) {
      if (this.normalizedOptions.closeOnSelect) {
        this.close();
      }
      if (this.normalizedOptions.resetOnSelect) {
        this.localFilterQuery = '';
      }
    },
    highlight(itemID) {
      const itemToHighlight = listHelpers.findByUID.call(this, itemID);
      itemToHighlight.isHighlighted = true;
      this.$emit('highlight', itemID);
    },
    blur(itemID) {
      const itemToBlur = listHelpers.findByUID.call(this, itemID);
      itemToBlur.isHighlighted = false;
      this.$emit('blur', itemID);
    },
    handleClickAway(event) {
      if (hasClickedAway(this.$el, event) || event.key === 'Escape') {
        this.close();
      }
    },
    open() {
      this.isOpen = true;
      this.$emit('open');
    },
    close() {
      this.isOpen = false;
      this.$emit('close');
    },
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('toggle', this.isOpen);
    },
    filterList(query) {
      if (query) {
        this.listToRender = this.normalizedList.filter((item) => {
          return item[this.normalizedOptions.fields.label].includes(query);
        });
      } else {
        this.listToRender = this.normalizedList;
      }
      this.$emit('filter');
    }
  },
  render() {
    return this.$scopedSlots.default({
      instanceId: this.instanceId,
      instance: this,
      isOpen: this.isOpen,
      isClosed: !this.isOpen,
      value: this.value,
      wholeList: this.normalizedList,
      listToRender: this.listToRender,
      selected: {
        uid: this.value,
        label: this.selectedLabel
      },

      open: this.open,
      close: this.close,
      toggle: this.toggle,
      filter: this.filterList
    });
  }
};

export { Dropdown };
export { DropdownItem } from './dropdownItem';
