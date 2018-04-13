<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="u-card-flip-container">
      <v-card class="l-card" :class="{'-flipped': flipped}">
        <front-card :event="event" @toggleCard="flipCard"></front-card>
        <back-card :event="event" @toggleCard="flipCard"></back-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import FrontCard from '@/components/Cards/Birthday/Front'
import BackCard from '@/components/Cards/Birthday/Back'

export default {
  components: {
    FrontCard,
    BackCard
  },
  data () {
    return {
      flipped: false,
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
    flipCard () {
      this.flipped = !this.flipped
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Patua+One');

.u-card-flip-container {
  position: relative;
  perspective: 800px;
}
.l-card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  font-family: 'Patua One', cursive;
    &.-flipped {
      transform: rotateY( -180deg );
    }

  & &__body {
    backface-visibility: hidden;

    &.-front {
    }
    &.-back {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 9000;
      background-color: white;
      transform: rotateY( -180deg );
    }
  }

  & &__title {
    padding-top: 10px;
  }

  & &__info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px;
  }

  & &__info {
    font-size: .9em;
    margin-bottom: 3px;
  }

  a {
    text-decoration: none;
  }

  & &__actions {
    padding: 0px 10px 10px 10px;
  }
}

</style>
