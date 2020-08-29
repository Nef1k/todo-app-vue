<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-app-bar-nav-icon>
      <v-icon>mdi-home</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title class="page-title">ToDo App</v-toolbar-title>

    <v-tabs align-with-title>
      <v-tab v-for="item in items" :key="item.id" :to="{ name: item.route }">{{ item.text }}</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  data: () => ({
    items: [
      {
        id: 1,
        text: 'Home',
        route: 'home',
        icon: 'home'
      },
      {
        id: 2,
        text: 'About',
        route: 'about',
        icon: 'help'
      }
    ]
  }),
  computed: {
    ...mapGetters(['isFetchingData'])
  }
}
</script>

<style>
  .page-title {
    min-width: 240px;
  }
</style>
