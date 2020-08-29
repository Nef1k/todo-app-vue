<template>
  <v-card>
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
