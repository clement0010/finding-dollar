<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-dollar-1.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyDollarFolded',
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
