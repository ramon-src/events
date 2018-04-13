<template>
  <div class="l-card__body -front">
    <v-card-media class="l-card__image" src="https://anacuder.com/wp-content/uploads/2017/09/every-school-needs-to-adopt-the-birthday-cake-ban.jpg" height="200px" />
    <v-card-title primary-title class="l-card__title">
      <div class="headline">{{ event.title }}</div>
    </v-card-title>
    <div class="l-card__info-container">
      <div class="l-card__info grey--text">
        <v-icon>event</v-icon> {{ event.date }}
      </div>
      <div class="l-card__info grey--text">
        <a target="__BLANK" :href="event.linkLocation"><v-icon>room</v-icon> {{ event.location }}</a>
      </div>
    </div>
    <v-card-actions class="l-card__actions">
      <v-flex xs5  v-if="!attend">
        <v-text-field
          name="name"
          label="Digite seu nome"
          id="name"
          :value="name"
        ></v-text-field>
      </v-flex>
      <v-btn small color="gray" v-if="attend" @click="attend = false">
        Vou ir!
      </v-btn>
      <v-btn small color="gray" v-else @click="attend = true">
        Enviar!
      </v-btn>
      <v-spacer/>
      <v-btn icon @click.native="toggleCard">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      attend: true
    }
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
    }
  }
}
</script>

<style>

</style>
