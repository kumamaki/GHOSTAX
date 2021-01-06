## Usage

First, import the component

```javascript
import GhPagination from '@ghostax/pagination';

export default {
  ...
  components: {
    GhPagination
  },
  ...
}
```

Then wrap your pagination component with `<gh-pagination>...</gh-pagination>`

---

### Simple

This is basic usage of `Pagination` component. only pass required props and get query string and calculated area.

```markup
<template>
    <gh-pagination
        v-model="currentPage"
        :total-docs="400"
        :page-limit="10"
        :page-numbers-set-count="6"
        #default="{ query, pageNumbersSet }"
    >
    <button
      v-for="pageNumber in pageNumbersSet"
      :key="pageNumber"
      @click="handlePageClick(query)"
    >
      {{ pageNumber }}
    </button>
  </gh-pagination>
</template>

<script>
export default {
  // ...
  methods: {
    handlePageClick(query) {
      // query would be like -> pageSize=10&pageNumber=2
    }
  }
  // ...
}
</script>
```

---

### Advance

If you are an advance developer, which you are 🤘, you want to use the full power of this component. Pass `page-numbers-set-count` to customize count of pages before and after current page, and customize query fields to match with backend API.

```markup
<gh-pagination
    v-model="currentPage"
    :total-docs="400"
    :page-limit="10"
    :page-numbers-set-count="6"
    :options="{
        fields: {
            query: {
                pageSize: 'paginationLimit',
                pageNumber: 'paginationPage'
            }
        }
    }"
    #default="{pageNumbersSet, hasNextPage, hasPrevPage, hasFirstPage, hasLastPage, showingInfo, totalPages, goToNextPage, goToPrevPage, goToLastPage, goToFirstPage}"
>
  <div class="paginator">
      <nav class="paginator__pages">
          <button @click="goToFirstPage" />
          <button @click="goToPrevPage" />
          <button
                v-for="pageNumber in pageNumbersSet"
                :key="pageNumber"
                @click="currentPage = pageNumber"
          >
              {{ pageNumber }}
          </button>
          <button @click="goToNextPage" />
          <button @click="goToLastPage" />
      </nav>

      <div class="paginator__showingInfo">
        From
        {{ showingInfo.from }}
        To
        {{ showingInfo.to }}
        Of total
        {{ showingInfo.of }}
      </div>
  </div>
</gh-pagination>
```
