<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <ToDoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";

export default {
  name: "ToDos",
  components: {
    ToDoItem
  },
  props: ["todos"]
}
</script>

<style scoped>

</style>
