<template>
  <div id="app">
    <v-app>
      <v-container fluid="true">
        <router-view/>
      </v-container>

      <v-bottom-nav :value="true" :fixed="true" class="white">
        <v-btn flat color="teal" value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="favorites">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="nearby">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-app>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Boogaloo|Lato:400,700|Patua+One|Roboto:300,400,700|Vidaloka');
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>
