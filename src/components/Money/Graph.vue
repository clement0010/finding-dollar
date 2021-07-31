<template>
  <v-img contain :width="width" :height="height" src="@/assets/graph.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Graph',
  setup(_, { root }) {
    const width = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 300;
        case 'sm':
          return 300;
        case 'md':
          return 500;
        case 'lg':
          return 500;
        case 'xl':
          return 500;
      }
    });
    const height = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 300;
        case 'sm':
          return 300;
        case 'md':
          return 500;
        case 'lg':
          return 500;
        case 'xl':
          return 500;
      }
    });
    return {
      width,
      height,
    };
  },
});
</script>
