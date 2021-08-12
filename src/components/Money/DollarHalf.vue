<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-dollar-3.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyDollarHalf',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 300;
      return 200;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 300;
      return 200;
    });
    return {
      width,
      height,
    };
  },
});
</script>
