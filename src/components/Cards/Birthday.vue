<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="https://anacuder.com/wp-content/uploads/2017/09/every-school-needs-to-adopt-the-birthday-cake-ban.jpg" height="200px" />
        <v-card-title primary-title>
          <div>
            <div class="headline">Aniversariantes do mês!</div>

            <span class="grey--text">
              <v-icon>event</v-icon> 20/04/2018</span>
            <span class="grey--text">
              <v-icon>room</v-icon> 4 Beer</span>
          </div>
        </v-card-title>
        <div/>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-spacer/>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
