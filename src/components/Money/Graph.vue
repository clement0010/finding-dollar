<template>
  <v-img contain :width="width" :height="height" src="@/assets/graph.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Graph',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.lgAndUp) return 600;
      if (root.$vuetify.breakpoint.mdAndUp) return 500;
      return 300;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.lgAndUp) return 600;
      if (root.$vuetify.breakpoint.mdAndUp) return 500;
      return 300;
    });
    return {
      width,
      height,
    };
  },
});
</script>
