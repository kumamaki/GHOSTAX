<template>
    <demo>

        <gh-pagination
            #default="{pageNumbersSet, hasNextPage, hasPrevPage, hasFirstPage, hasLastPage, showingInfo, totalPages, goToNextPage, goToPrevPage, goToLastPage, goToFirstPage}"
            v-model="currentPage"
            :total-docs="400"
            :page-limit="10"
            :page-numbers-set-count="6"
        >
            <div class="paginator">
                <nav class="paginator__pages">
                    <button
                        :class="{
                            'paginator__goto--state:disabled': !hasFirstPage
                        }"
                        class="paginator__goto | paginator__goto--prev"
                        @click="goToFirstPage"
                    >
                        <svg-icon
                            name="skip-back-mini-line"
                            class="paginator__gotoIcon"
                            :original="true"
                        />
                    </button>

                    <button
                        :class="{
                            'paginator__goto--state:disabled': !hasPrevPage
                        }"
                        class="paginator__goto"
                        @click="goToPrevPage"
                    >
                        <svg-icon
                            name="arrow-left-s-line"
                            class="paginator__gotoIcon"
                            :original="true"
                        />
                    </button>

                    <button
                        v-for="pageNumbersItem in pageNumbersSet"
                        :key="pageNumbersItem"
                        :class="{
                            'paginator__page--isActive': pageNumbersItem === currentPage
                        }"
                        class="paginator__page"
                        @click="currentPage = pageNumbersItem"
                    >
                        {{ pageNumbersItem }}
                    </button>

                    <button
                        :class="{
                            'paginator__goto--state:disabled': !hasNextPage
                        }"
                        class="paginator__goto"
                        @click="goToNextPage"
                    >
                        <svg-icon
                            name="arrow-right-s-line"
                            class="paginator__gotoIcon"
                            :original="true"
                        />
                    </button>

                    <button
                        :class="{
                            'paginator__goto--state:disabled': !hasLastPage
                        }"
                        class="paginator__goto"
                        @click="goToLastPage"
                    >
                        <svg-icon
                            name="skip-forward-mini-line"
                            class="paginator__gotoIcon"
                            :original="true"
                        />
                    </button>
                </nav>

                <div class="paginator__showingInfo">
                    From
                    {{ showingInfo.from }}
                    To
                    {{ showingInfo.to }}
                    Of
                    {{ showingInfo.of }}
                    Items
                </div>
            </div>
        </gh-pagination>
    </demo>
</template>

<script>
import Demo from '../Demo';
import GhPagination from '~packages/pagination/src/pagination.js';
import '~icons/arrow-right-s-line';
import '~icons/arrow-left-s-line';
import '~icons/skip-back-mini-line';
import '~icons/skip-forward-mini-line';

export default {
    name: 'Paginator',
    components: {
        Demo,
        GhPagination
    },
    data() {
        return {
            currentPage: 1
        };
    }
};
</script>

<style scoped lang="scss">
.paginator {
    --gap: #{ms(1)};

    box: horizontal middle;
    user-select: none;

    &__pages {
        box: horizontal middle;
        font-size: ms(1, $thread: typography);
        gap: ms(1);
    }

    &__page {
        box: horizontal middle center;
        size: ms(1);
        transition: color .15s;
        position: relative;
        z-index: 1;
        font-weight: 300;
        color: gray(60);

        &:hover {
            color: gray(40);
        }

        &--isActive {
            pointer-events: none;
            color: $color-thirtary-base;
        }
    }

    &__goto {
        color: gray(30);
        box: horizontal middle center;

        &:hover {
            color: $color-thirtary-darken;
        }

        &--prev {

        }

        &--next {

        }

        &--state {

            &\:disabled {
                color: gray(80);
                pointer-events: none;
            }
        }
    }

    &__gotoIcon {
        size: ms(0);

        &--prev {

        }

        &--next {

        }
    }

    &__showingInfo {
        margin-left: var(--gap);
        padding-left: var(--gap);
        border-left: 2px solid gray(80);
        color: gray(80);
    }
}
</style>
