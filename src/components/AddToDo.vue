<template>
  <div>
    <form @submit.prevent @submit="addToDo">
      <input type="text" v-model="title" name="title" placeholder="Add ToDo">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
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
