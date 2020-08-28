<template>
  <div>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo App</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" v-bind:key="item.id" :to="{ name: item.route }">
            <v-list-item-icon><v-icon>mdi-{{ item.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
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
}
</script>
