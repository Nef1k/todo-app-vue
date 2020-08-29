<template>
  <v-row align="center">
    <v-card
        class="mx-auto pa-5"
        min-width="900"
        max-width="1000"
        tile
    >
      <v-select
          :items="pageSizes"
          label="Page size..."
          @change="filterTodos"
      />
    </v-card>
  </v-row>
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