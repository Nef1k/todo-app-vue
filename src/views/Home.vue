<template>
  <div>
    <FilterTodos  class="mt-5"/>
    <AddToDo />
    <ToDos class="mt-5"/>
  </div>
</template>

<script>
import AddToDo from "@/components/AddToDo";
import ToDos from '@/components/ToDos';
import FilterTodos from "@/components/FilterTodos";

export default {
  name: 'Home',
  components: {
    AddToDo,
    FilterTodos,
    ToDos
  },
}
</script>
