<template>
  <v-container v-if="isFetchingData" class="d-flex justify-center">
    <v-progress-circular
        indeterminate
        color="primary"
        :size="100"
        :width="10"
        class="mx-auto"
    />
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(['isFetchingData'])
  }
}
</script>
