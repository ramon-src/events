<template>
  <div class="l-card__list">
    <div class="l-card__list-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .l-card {
    & &__list {
      padding: 5px 0px;
    }
  }
</style>
