<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-dollar-2.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyDollarFull',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 400;
      return 300;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.mdAndUp) return 400;
      return 300;
    });

    return {
      width,
      height,
    };
  },
});
</script>
