<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
#app {
  background-color: hsl(35, 68%, 86%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropdown {
  color: hsl(0, 0%, 20%);
  &__handler {
    background-color: white;
    padding: 1em 2em;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: hsl(0, 0%, 98%);
    }
  }
  &__list {
    list-style: none;
    padding: 0;
    background-color: white;
    margin: 0;
    margin-top: -3px;
  }

  &__item {
    padding: 0.5em 1em;
    cursor: pointer;
    user-select: none;
    &--isHighlighted {
      background-color: hsl(0, 0%, 98%);
    }
  }
}
</style>
