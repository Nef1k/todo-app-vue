<template>
  <v-container>
    <v-row class="d-flex align-stretch">
      <v-col class="" :cols="9">
        <AddToDo class="d-flex align-baseline pa-3 pb-1 pt-1"/>
      </v-col>
      <v-col class="">
        <FilterTodos class="d-flex align-baseline pa-3 pb-1 pt-1"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ToDos />
      </v-col>
    </v-row>
  </v-container>
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
