<template>
  <v-row align="center">
    <v-card
        class="mx-auto mt-5 pa-5 pb-3"
        min-width="900"
        max-width="1000"
        tile
    >
      <div class="d-flex align-baseline">
        <v-text-field v-model="title" label="What needs to be done?" class="mr-5"></v-text-field>
        <v-btn class="justify-end" @click="addToDo" color="primary">Add</v-btn>
      </div>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addToDo() {
      const newToDo = {
        title: this.title,
        completed: false
      }
      this.$emit('add-todo', newToDo);
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
