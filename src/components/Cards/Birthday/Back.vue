<template>
  <div class="l-card__body -back">
    <div class="l-card__info-container">
      <div class="l-card__info grey--text">
        <v-icon>event</v-icon> {{ event.date }}
      </div>
      <div class="l-card__info grey--text">
        <a target="__BLANK" :href="event.linkLocation"><v-icon>room</v-icon> {{ event.location }}</a>
      </div>
    </div>
      <v-btn icon @click.native="toggleCard">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCard () {
      this.$emit('toggleCard')
    }
  }
}
</script>

<style>

</style>
