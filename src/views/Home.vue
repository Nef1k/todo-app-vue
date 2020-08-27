<template>
  <div>
    <AddToDo v-on:add-todo="addToDo"/>
    <ToDos v-bind:todos="todos" v-on:del-todo="deleteToDo"/>
  </div>
</template>

<script>
import axios from 'axios';

import AddToDo from "@/components/AddToDo";
import ToDos from '@/components/ToDos';

export default {
  name: 'Home',
  components: {
    AddToDo,
    ToDos
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteToDo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addToDo(todo) {
      const { title, completed } = todo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: completed
      })
          .then(res => {
            this.todos = [...this.todos, res.data]
          })
          .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(res => {
          this.todos = res.data;
        })
        .catch(err => {
          console.log(err);
        })
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Verdana, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}

</style>
