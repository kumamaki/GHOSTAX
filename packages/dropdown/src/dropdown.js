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
    defaultValue: {
      type: String,
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
      value: this.defaultValue
    };
  },
  computed: {
    nomalizedOptions() {
      optionsHelpers.validate(this.options, defaultOptions);
      return optionsHelpers.normalize(this.options, defaultOptions);
    },
    normalizedList() {
      return listHelpers.normalize(this.rawList, this.value);
    },
    listToRender() {
      return this.normalizedList.filter((item) => {
        return item[this.nomalizedOptions.fields.label].includes(this.filterQuery);
      });
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
    }
  },
  mounted() {
    this.normalizeOptions();
    this.listenOnChangeValue();
  },
  methods: {
    normalizeOptions() {
      this.normalizedOptions = optionsHelpers.normalize(this.options);
    },
    listenOnChangeValue() {
      // EventBus.$on(`ghostax/dropdown:changeValue${this.instanceId}`, (newValue) => {
      //   this.select(newValue);
      // });
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
          return item[this.nomalizedOptions.fields.label].includes(query);
        });
      } else {
        this.listToRender = this.normalizedList;
      }
    },
    select(value) {
      this.value = value;
      this.$emit('change', value);
      if (this.closeOnSelect) {
        this.close();
      }
      if (this.resetOnSelect) {
        this.filterList('');
      }
    }
  },
  render() {
    return this.$scopedSlots.default({
      instanceId: this.instanceId,
      isOpen: this.isOpen,
      isClosed: !this.isOpen,
      value: this.value,
      listToRender: this.listToRender,

      open: this.open,
      close: this.close,
      toggle: this.toggle,
      filter: this.filter
    });
  }
};

export { Dropdown };
export { DropdownItem } from './dropdownItem';
