GHOSTAX's date-picker provides a robust and easy to use solution for custom date-pickers.  
It will handle all the below, and much more:  

- **Days of the current month**
- **Getting next and previous months handler**
- **A reactive `selectedDays`**
- **Supports multi-select days**
- **Custom behaviour in multi-selected days**
- **Flags for passed days, weekends and weekdays**

This is a pretty common date picker as an example. Keep in mind that because you have the whole controll over the template and script, any extra functionallity which is not supported by __ghDatePicker__ can be easiliy added by yourself.

```vue demo
<template>
    <div class="flex flex-col items-center">
        <div class="text-grayscale-200 bg-grayscale-700 p-2 mb-3 font-mono text-sm rounded-lg">
            modelValue: {{ modelValue || '—' }}
        </div>
        <div class="rounded-xl bg-grayscale-200 p-2">
            <div class="text-grayscale-700 flex flex-col items-center">
                <div class="flex items-center justify-between w-full mb-2 font-semibold">
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToPrev(1)" v-if="!calendar.months[0].isSameAsNow">
                            <IconLeftOutline class="w-3 h-3"/>
                        </button>
                    </div>
                    <span class="flex-grow text-center">
                        {{ calendar.months[0].name }} {{ calendar.years[0].position }}
                    </span>
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToNext(1)">
                            <IconRightOutline class="w-3 h-3"/>
                        </button>
                    </div>
                </div>
                <div class="">
                    <div class="place-content-center gap-1-5 grid grid-cols-7 text-center">
                        <span class="text-grayscale-400 text-xs font-bold" v-for="weekName in weekNames" :key="weekName">
                            {{ weekName }}
                        </span>
                        <button
                            v-for="(day, dayIndex) in calendar.days" :key="dayIndex"
                            @click="toggleSelectDay(day.date)"
                            class="focus:outline-none w-4 h-4 text-base font-medium transition-colors rounded-lg cursor-pointer"
                            :class="{
                                'border-solid border-2 border-primary-base bg-primary-lightest': day.isToday,
                                'text-grayscale-700 hover:bg-grayscale-300': (!day.isBeforeToday && day.isInActiveMonth && !day.isSelected),
                                'text-grayscale-400 pointer-events-none': (day.isBeforeToday || !day.isInActiveMonth && !day.isSelected),
                                'bg-primary-dark text-primary-lightest shadow-primary': day.isSelected
                            }"
                            :style="{ 'grid-column-start': day.positionInWeek + 1 }"
                        >
                            {{ day.positionInMonth }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGhDatePicker } from '/@packages/datePicker';
import IconLeftOutline from '/@vite-icons/eva/chevron-left-outline.vue'
import IconRightOutline from '/@vite-icons/eva/chevron-right-outline.vue'

export default {
    name: 'DatePicker',
    components: {
        IconLeftOutline,
        IconRightOutline
    },
    setup(props, context) {
        const {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker({
            calendar: {
                initialDate: new Date(),
                overflow: true
            }
        });

        const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue,

            weekNames
        };
    }
};
</script>
```

---

## 📦 Install

```shell
npm install @ghostax/datepicker
```

**Also you have to install peerDependenices.** If you already have any of them, and the version is currect, just skip installing that package.

```shell
npm install vue@^3.0.0 core-js@^3.0.0 @babel/runtime@^7.12.0 date-fns@^2.16.0 superstruct@^0.13.0
```

---

## 🤌🏻 Usage

In your `datepciker` component:

```vue
<script>
import { useGhDatePicker } from '@ghostax/datePicker';

export default {
    name: 'DatePicker',
    setup(props, context) {
        const {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker({
            calendar: {
                // initialDate,
                // overflow
            }
        });

        return {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        };
    }
};
</script>
```

Then use `calendar` to build calender's UI, and other exported values to handle interactions.

---

## ⚛️ API - Receives

This is a list of all available parameters to `useGhDatePicker(...)`. None of them are required and if not specified, GHOSTAX will use a default value instead.

<DocApi name="calendar" type="Object">
    <template #defaultValue>
        <pre>
{
    initialDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0),
    overflow: false
}</pre>
    </template>
    <template #description>
        The calendar's configuration. contains `initialDate` and `overflow`. See below for more details.
    </template>
    <DocApi name="calendar.initialDate" type="Object"
    :examples="[
`initialDate: {
    from: new Date(),
    to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
}`,
`initialDate: new Date()`
    ]"
    >
        <template #description>
            Can be one of these two:
            <ul class="pl-3 mt-1 mb-0 list-disc">
                <li>Date to use as a start point for calendar</li>
                <li>An object containing `from` and `to`, when you need to have multiple months at the same time</li>
            </ul>
        </template>
    </DocApi>
    <DocApi name="calendar.overflow" type="Object" class="mt-2"
    :examples="[
`initialDate: {
    from: new Date(),
    to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
}`,
`initialDate: new Date()`
    ]"
    >
         <template #defaultValue>
            <pre>
false</pre>
        </template>
        <template #description>
            If you want the days to be overflowed outside the initial month or not.
            if true, you will get something like: <br> [28] [29] [30] [1] [2] [3] ... [28] [29] [30] [1] [2] [3]<br>
            Calculation would be based on the month's days and arrangement of weeks.
        </template>
    </DocApi>
</DocApi>

<DocApi name="selection" type="Object" class="mt-5">
    <template #defaultValue>
            <pre>
{
    multi: false,
    range: false,
    allowEmpty: true
}</pre>
    </template>
    <template #description>
        The selection's configuration. Whether you need multi-select or a range select for your calendar.
    </template>
    <DocApi name="selection.range" type="one of: Object/false">
        <template #description>
            General setting when you need a range selection. Provide the proper config if you need to enable this.
        </template>
        <DocApi name="selection.range.onFull" type="one of: fresh/modify">
            <template #description>
                What should it do when range is full and a new selection comes in?
                <ul class="pl-3 mt-1 mb-0 list-disc">
                    <li>fresh: Clears all the selected dates. Then selectes the demanded date.</li>
                    <li>modify: Based on the common UX of range selectors from Google, Airbnb, etc., modifies the selected dates.</li>
                </ul>
            </template>
        </DocApi>
    </DocApi>
    <DocApi name="selection.multi" type="Number" class="mt-3">
        <template #description>
            General setting when you need a multi date selector.
            <DocApi name="selection.multi.maximum" type="one of: fresh/modify" class="mt-2">
                <template #description>
                    Maximum number of selected dates allowed. Follows <code>selection.multi.onOverflow</code> when is full. <br>
                    Set to <code>Infinity</code> if you want to allow unlimited number of selected dates.
                </template>
            </DocApi>
            <DocApi name="selection.multi.onOverflow" type="one of: FIFO/LIFO" class="mt-2">
                <template #description>
                    What should it do when maximum number of selected dates is exeeded?
                    <ul class="pl-3 mt-1 mb-0 list-disc">
                        <li>FIFO: Unselect the first selected date and select the new one</li>
                        <li>Unselected the last selected date and select the new one.</li>
                    </ul>
                </template>
            </DocApi>
        </template>
    </DocApi>
</DocApi>

---

## 💻 Examples

These set of examples can be considered to have medium-to-simple complexity. Read the [API Section](#api-receives) if you need more advanced functionality.

### Multi selection enabled, Maximum of 2, and "LIFO" on overflow

```vue demo
<template>
    <div class="flex flex-col items-center">
        <div class="text-grayscale-200 bg-grayscale-700 p-2 mb-3 font-mono text-sm rounded-lg">
            modelValue: {{ modelValue || '—' }}
        </div>
        <div class="rounded-xl bg-grayscale-200 p-2">
            <div class="text-grayscale-700 flex flex-col items-center">
                <div class="flex items-center justify-between w-full mb-2 font-semibold">
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToPrev(1)" v-if="!calendar.months[0].isSameAsNow">
                            <IconLeftOutline class="w-3 h-3"/>
                        </button>
                    </div>
                    <span class="flex-grow text-center">
                        {{ calendar.months[0].name }} {{ calendar.years[0].position }}
                    </span>
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToNext(1)">
                            <IconRightOutline class="w-3 h-3"/>
                        </button>
                    </div>
                </div>
                <div class="">
                    <div class="place-content-center gap-1-5 grid grid-cols-7 text-center">
                        <span class="text-grayscale-400 text-xs font-bold" v-for="weekName in weekNames" :key="weekName">
                            {{ weekName }}
                        </span>
                        <button
                            v-for="(day, dayIndex) in calendar.days" :key="dayIndex"
                            @click="toggleSelectDay(day.date)"
                            class="focus:outline-none w-4 h-4 text-base font-medium transition-colors rounded-lg cursor-pointer"
                            :class="{
                                'border-solid border-2 border-primary-base bg-primary-lightest': day.isToday,
                                'text-grayscale-700 hover:bg-grayscale-300': (!day.isBeforeToday && day.isInActiveMonth && !day.isSelected),
                                'text-grayscale-400 pointer-events-none': (day.isBeforeToday || !day.isInActiveMonth && !day.isSelected),
                                'bg-primary-dark text-primary-lightest shadow-primary': day.isSelected
                            }"
                            :style="{ 'grid-column-start': day.positionInWeek + 1 }"
                        >
                            {{ day.positionInMonth }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGhDatePicker } from '/@packages/datePicker';
import IconLeftOutline from '/@vite-icons/eva/chevron-left-outline.vue'
import IconRightOutline from '/@vite-icons/eva/chevron-right-outline.vue'

export default {
    name: 'DatePicker',
    components: {
        IconLeftOutline,
        IconRightOutline
    },
    setup(props, context) {
        const {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker({
            preselectedDays: [new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0)],
            selection: {
                multi: {
                    maximum: 2,
                    onOverflow: 'LIFO'
                }
            }
        });

        const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue,

            weekNames
        };
    }
};
</script>
```

---

### Range selection enabled

```vue demo
<template>
    <div class="flex flex-col items-center">
        <div class="text-grayscale-200 bg-grayscale-700 p-2 mb-3 font-mono text-sm rounded-lg">
            modelValue: {{ modelValue || '—' }}
        </div>
        <div class="rounded-xl bg-grayscale-200 p-2">
            <div class="text-grayscale-700 flex flex-col items-center">
                <div class="flex items-center justify-between w-full mb-2 font-semibold">
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToPrev(1)" v-if="!calendar.months[0].isSameAsNow">
                            <IconLeftOutline class="w-3 h-3"/>
                        </button>
                    </div>
                    <span class="flex-grow text-center">
                        {{ calendar.months[0].name }} {{ calendar.years[0].position }}
                    </span>
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToNext(1)">
                            <IconRightOutline class="w-3 h-3"/>
                        </button>
                    </div>
                </div>
                <div class="">
                    <div class="place-content-center gap-1-5 grid grid-cols-7 text-center">
                        <span class="text-grayscale-400 text-xs font-bold" v-for="weekName in weekNames" :key="weekName">
                            {{ weekName }}
                        </span>
                        <button
                            v-for="(day, dayIndex) in calendar.days" :key="dayIndex"
                            @click="toggleSelectDay(day.date)"
                            class="focus:outline-none w-4 h-4 text-base font-medium transition-colors rounded-lg cursor-pointer"
                            :class="{
                                'border-solid border-2 border-primary-base bg-primary-lightest': day.isToday,
                                'text-grayscale-700 hover:bg-grayscale-300': (!day.isBeforeToday && day.isInActiveMonth && !day.isSelected),
                                'text-grayscale-400 pointer-events-none': (day.isBeforeToday || !day.isInActiveMonth && !day.isSelected),
                                'bg-primary-dark text-primary-lightest shadow-primary': day.isSelected
                            }"
                            :style="{ 'grid-column-start': day.positionInWeek + 1 }"
                        >
                            {{ day.positionInMonth }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGhDatePicker } from '/@packages/datePicker';
import IconLeftOutline from '/@vite-icons/eva/chevron-left-outline.vue'
import IconRightOutline from '/@vite-icons/eva/chevron-right-outline.vue'

export default {
    name: 'DatePicker',
    components: {
        IconLeftOutline,
        IconRightOutline
    },
    setup(props, context) {
        const {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker({
            selection: {
                range: {
                    onFull: 'modify'
                }
            }
        });

        const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue,

            weekNames
        };
    }
};
</script>
```

### More than one month

```vue demo
<template>
    <div class="flex flex-col items-center">
        <div class="text-grayscale-200 bg-grayscale-700 p-2 mb-3 font-mono text-sm rounded-lg">
            modelValue: {{ modelValue || '—' }}
        </div>
        <div class="rounded-xl bg-grayscale-200 p-2">
            <div class="text-grayscale-700 flex flex-col items-center">
                <div class="flex w-full mb-2 font-semibold">
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToPrev(1)" v-if="!calendar.months[0].isSameAsNow">
                            <IconLeftOutline class="w-3 h-3"/>
                        </button>
                    </div>
                    <div class="align-items-center flex flex-col mx-2" v-for="month in calendar.months" :key="month.positionInYear">
                        <span class="mb-2 text-center">
                            {{ month.name }} {{ month.yearPosition }}
                        </span>
                        <div class="place-content-start gap-1-5 grid flex-grow grid-cols-7 text-center">
                            <span class="text-grayscale-400 text-xs font-bold" v-for="weekName in weekNames" :key="weekName">
                                {{ weekName }}
                            </span>
                            <button
                                v-for="(day, dayIndex) in month.days" :key="dayIndex"
                                @click="toggleSelectDay(day.date)"
                                class="focus:outline-none w-4 h-4 text-base font-medium transition-colors rounded-lg cursor-pointer"
                                :class="{
                                    'border-solid border-2 border-primary-base bg-primary-lightest': day.isToday,
                                    'text-grayscale-700 hover:bg-grayscale-300': (!day.isBeforeToday && day.isInActiveMonth && !day.isSelected),
                                    'text-grayscale-400 pointer-events-none': (day.isBeforeToday || !day.isInActiveMonth && !day.isSelected),
                                    'bg-primary-dark text-primary-lightest shadow-primary': day.isSelected
                                }"
                                :style="{ 'grid-column-start': day.positionInWeek + 1 }"
                            >
                                {{ day.positionInMonth }}
                            </button>
                        </div>
                    </div>
                    <div class="flex-shrink-0 w-3 h-3">
                        <button @click="changeCalendarMonthToNext(1)">
                            <IconRightOutline class="w-3 h-3"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { endOfMonth, startOfMonth, addMonths } from 'date-fns';
import { useGhDatePicker } from '/@packages/datePicker';
import IconLeftOutline from '/@vite-icons/eva/chevron-left-outline.vue'
import IconRightOutline from '/@vite-icons/eva/chevron-right-outline.vue'

export default {
    name: 'DatePicker',
    components: {
        IconLeftOutline,
        IconRightOutline
    },
    setup(props, context) {
        const {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker({
            calendar: {
                initialDate: {
                    from: startOfMonth(new Date()),
                    to: endOfMonth(addMonths(new Date(), 1))
                },
                overflow: false
            }
        });

        const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return {
            calendar,
            changeCalendarMonthToNext,
            changeCalendarMonthToPrev,
            toggleSelectDay,
            modelValue,

            weekNames
        };
    }
};
</script>
```

### Maybe you don't want to show all the days in the month?

```vue demo
<template>
    <div class="flex flex-col items-center">
        <div class="text-grayscale-200 bg-grayscale-700 p-2 mb-3 font-mono text-sm rounded-lg">
            modelValue: {{ modelValue || '—' }}
        </div>
        <div class="rounded-xl bg-grayscale-200 p-2">
            <div class="text-grayscale-700 flex flex-col items-center">
                <div class="flex items-center justify-between w-full mb-2 font-semibold">
                    <span class="text-center">
                        {{ calendar.months[0].name || calendar?.months[0].name }} {{ calendar.years[0].position }}
                    </span>
                    <button class="bg-grayscale-300 py-0-5 align-items-center focus:outline-none flex px-1 text-xs font-medium transition-colors rounded-lg cursor-pointer" @click="isShowingFullMonth = !isShowingFullMonth">
                        <svg class="mr-1" :class="{ 'transform rotate-180': isShowingFullMonth }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l8 8 8-8"/></svg>
                        {{ isShowingFullMonth ? 'Collapse' : 'Show Full Month' }}
                    </button>
                </div>
                <div class="">
                    <div class="place-content-center gap-1-5 grid grid-cols-7 text-center">
                        <span class="text-grayscale-400 text-xs font-bold" v-for="weekName in weekNames" :key="weekName">
                            {{ weekName }}
                        </span>
                        <button
                            v-for="(day, dayIndex) in calendar.days" :key="dayIndex"
                            @click="toggleSelectDay(day.date)"
                            class="focus:outline-none w-4 h-4 text-base font-medium transition-colors rounded-lg cursor-pointer"
                            :class="{
                                'border-solid border-2 border-primary-base bg-primary-lightest': day.isToday,
                                'text-grayscale-700 hover:bg-grayscale-300': (!day.isBeforeToday && day.isInActiveMonth && !day.isSelected),
                                'text-grayscale-400 pointer-events-none': (day.isBeforeToday && !day.isSelected),
                                'bg-primary-dark text-primary-lightest shadow-primary': day.isSelected
                            }"
                            :style="{ 'grid-column-start': day.positionInWeek + 1 }"
                        >
                            {{ day.positionInMonth }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, watch, computed } from 'vue';
import { useGhDatePicker } from '/@packages/datePicker';
import { lastDayOfWeek, startOfWeek, addWeeks, startOfMonth, endOfMonth  } from 'date-fns';
import IconLeftOutline from '/@vite-icons/eva/chevron-left-outline.vue'
import IconRightOutline from '/@vite-icons/eva/chevron-right-outline.vue'

export default {
    name: 'DatePicker',
    components: {
        IconLeftOutline,
        IconRightOutline
    },
    setup(props, context) {
        const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const options = reactive({
            calendar: {
                initialDate: {
                    from: ref(startOfWeek(new Date())),
                    to: ref(lastDayOfWeek(addWeeks(new Date, 1)))
                },
                overflow: true
            }
        });
        const {
            calendar,
            toggleSelectDay,
            modelValue
        } = useGhDatePicker(options);

        const isShowingFullMonth = ref(false);
        watch(isShowingFullMonth, () => {
            if (isShowingFullMonth.value) {
                options.calendar.initialDate = new Date()
            } else {
                options.calendar.initialDate = {
                    from: startOfWeek(new Date()),
                    to: lastDayOfWeek(addWeeks(new Date, 1))
                }
            }
        })

        return {
            calendar,
            toggleSelectDay,
            modelValue,
            isShowingFullMonth,
            weekNames
        };
    }
};
</script>
```
