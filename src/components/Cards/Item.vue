<template>
  <span class="l-card__list-item">
    {{ name }}{{ isLast ? '' : ',' }}
  </span>
</template>

<script>
export default {
  name: 'card-list-item',
  data () {
    return {
      printComma: ''
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    isLast: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    isLast () {
      this.printComma = this.isLast ? '' : ','
    }
  }
}
</script>

<style lang="scss">
  .l-card {
    & &__list-item {
      padding: 5px;
    }
  }
</style>
