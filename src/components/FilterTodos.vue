<template>
  <v-card>
    <v-select
        :items="pageSizes"
        label="Page size..."
        @change="filterTodos"
    />
  </v-card>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "FilterTodos",
  data() {
    return {
      pageSizes: [5, 10, 15, 30, 100, 200]
    }
  },
  methods: {
    ...mapActions(['filterTodos'])
  }
}
</script>

<style scoped>

</style>