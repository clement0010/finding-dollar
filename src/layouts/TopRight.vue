<template>
  <v-container fluid class="ma-0 pa-0">
    <DollarHalf class="first-dollar" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import DollarHalf from '@/components/Money/DollarHalf.vue';

export default defineComponent({
  name: 'TopRight',
  components: {
    DollarHalf,
  },
});
</script>

<style scoped>
.first-dollar {
  position: absolute;
  transform: rotate(0deg);
  top: -5rem;
  right: -5rem;
}
</style>
