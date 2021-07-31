<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-coin-1.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyCoinSingle',
  setup(_, { root }) {
    const width = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 100;
        case 'sm':
          return 100;
        case 'md':
          return 100;
        case 'lg':
          return 100;
        case 'xl':
          return 100;
      }
    });
    const height = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 100;
        case 'sm':
          return 100;
        case 'md':
          return 100;
        case 'lg':
          return 100;
        case 'xl':
          return 100;
      }
    });
    return {
      width,
      height,
    };
  },
});
</script>
