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

### Simple

This is basic usage of `Pagination` component. only pass required props and get query string and calculated area.

```vue
<template>
  <gh-pagination
    :total-docs="250"
    :page-limit="10"
    :current-page="1"
    #default="{ query, area }"
  >
    <button
      v-for="areaItem in area"
      :key="areaItem"
      @click="handlePageClick(query)"
    >
      {{ areaItem }}
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

### Advance

If you are an advance developer, which you are 🤘, you want to use the full power of this component. pass `area-count` to customize pages before and after current page, and customize query fields to match with backend API.

```vue
<gh-pagination
  :total-docs="250"
  :page-limit="10"
  :area-count="7"
  :current-page="1"
  :options="{
      fields: {
          query: {
              pageSize: 'paginationLimit',
              pageNumber: 'paginationPage'
          }
      }
  }"
  #default="{ query, area, hasNextPage, hasPrevPage, hasFirstPage, hasLastPage, showingInfo, totalPages }"
>
  <div class="paginator">
      <nav class="paginator__pages">
          <button @click="handlePageClick(1)" />
          <button @click="handlePageClick(currentPage - 1)" />
          <button
              v-for="areaItem in area"
              :key="areaItem"
              @click="handlePageClick(areaItem)"
          >
              {{ areaItem }}
          </button>
          <button @click="handlePageClick(currentPage + 1)" />
          <button @click="handlePageClick(totalPages)" />
      </nav>

      <dropdown
          class="paginator__limit"
          :list="[
              { id: '10', label: '10' },
              { id: '20', label: '20' },
              { id: '30', label: '30' },
              { id: '40', label: '40' },
          ]"
          :value="limit"
          @input="handleChangeLimit"
      />

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
