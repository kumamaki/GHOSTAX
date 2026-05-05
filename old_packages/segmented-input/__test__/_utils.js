import { shallowMount, createLocalVue } from '@vue/test-utils';
import SegmentedInput from '../src/segmented-input';

const localVue = createLocalVue();

export const getScopedSlot = (field, props = {}) => {
    let scopedSlots = {};
    shallowMount(SegmentedInput, {
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
