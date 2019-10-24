import { shallowMount, createLocalVue } from '@vue/test-utils';
import Pagination from '../src/pagination';

const localVue = createLocalVue();

export const getScopedSlot = (field, props = {}) => {
  let scopedSlots = {};
  shallowMount(Pagination, {
    localVue,
    propsData: {
      totalDocs: 370,
      pageLimit: 15,
      pageNumbersSetCount: 8,
      currentPage: 1,
      ...props
    },
    scopedSlots: {
      default(props) {
        scopedSlots = props;
        return this.$createElement('span', {
          data: props
        }, props[field]);
      }
    }
  });
  return scopedSlots[field];
};
