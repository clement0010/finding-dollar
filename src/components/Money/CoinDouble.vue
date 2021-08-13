<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-coin-2.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyCoinDouble',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 300;
      return 250;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 300;
      return 250;
    });
    return {
      width,
      height,
    };
  },
});
</script>
