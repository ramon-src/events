<template>
  <div>
    <birthday-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></birthday-card>
  </div>
 </template>

<script>
import { mapGetters } from 'vuex'
import BirthdayCard from '@/components/Cards/Birthday'

export default {
  components: { BirthdayCard },
  computed: {
    ...mapGetters([
      'events'
    ])
  }
}
</script>

<style>

</style>
