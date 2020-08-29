<template>
  <v-row align="center">
    <v-card
        class="mx-auto"
        min-width="900"
        max-width="1000"
        tile
    >
      <v-list flat>
        <v-subheader>ToDos</v-subheader>
        <v-list-item-group multiple>
          <ToDoItem
              :todo="todo"
              v-for="todo in allTodos"
              v-bind:key="todo.id"
          />
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-row>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "ToDos",
  components: {
    ToDoItem
  },
  props: ["todos"],
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions([
        'fetchTodos'
    ]),
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>

</style>
