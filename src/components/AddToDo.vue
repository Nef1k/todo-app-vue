<template>
  <v-card>
    <v-text-field v-model="title" label="What needs to be done?" class="mr-5"></v-text-field>
    <v-btn class="justify-end" @click="addToDo" color="primary">Add</v-btn>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddToDo",
  data: () => {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    addToDo() {
      this.addTodo(this.title);
      this.title = '';
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}

</style>
