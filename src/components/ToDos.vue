<template>
  <v-card>
    <v-list flat>
      <v-subheader>ToDos</v-subheader>
      <v-list-item-group>
        <Loader />
      </v-list-item-group>
      <v-list-item-group
          multiple
          v-if="!isFetchingData"
      >
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
import { mapGetters, mapActions } from 'vuex';
import Loader from "@/components/layout/Loader";
import ToDoItem from "@/components/ToDoItem";

export default {
  name: "ToDos",
  components: {
    ToDoItem,
    Loader
  },
  props: ["todos"],
  computed: mapGetters(['allTodos', 'isFetchingData']),
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
