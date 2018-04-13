<template>
  <div class="l-card__body -back">
    <v-card-title primary-title class="l-card__title">
      <div class="headline">{{ event.title }}</div>
    </v-card-title>
    <div class="l-card__info-container">
      <div class="l-card__info grey--text">
        {{ event.description }}
      </div>
      <v-divider></v-divider>
      <card-list title="Aniversariantes">
        <card-list-item
          :name="item"
          v-for="(item, index) in event.birthdays"
          :key="item"
          :isLast="isLastItem(index)">
        </card-list-item>
      </card-list>
      <v-divider></v-divider>
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
import CardList from '@/components/Cards/List'
import CardListItem from '@/components/Cards/Item'

export default {
  components: {
    CardList,
    CardListItem
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCard () {
      this.$emit('toggleCard')
    },
    isLastItem (index) {
      console.log('index', index)

      console.log('length', this.event.birthdays.length)
      console.log((index === (this.event.birthdays.length - 1)))
      return (index === (this.event.birthdays.length - 1))
    }
  }
}
</script>

<style>

</style>
