<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-coin-1.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyCoinSingle',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 100;
      return 100;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 100;
      return 100;
    });
    return {
      width,
      height,
    };
  },
});
</script>
