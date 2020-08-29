<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox :input-value="active" v-model="todo.completed"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-html="todo.title" v-bind:class="{ 'text-decoration-line-through': todo.completed }"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
            small
            text
            @click="deleteTodo(todo.id)"
        >
          <v-icon>mdi-delete-sweep</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "ToDoItem",
  props: ['todo'],
  methods: {
    ...mapActions(['deleteTodo'])
  }
}
</script>

<style scoped>

</style>
