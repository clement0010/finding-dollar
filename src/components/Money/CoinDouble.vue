<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-coin-2.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyCoinDouble',
  setup(_, { root }) {
    const width = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 200;
        case 'sm':
          return 200;
        case 'md':
          return 250;
        case 'lg':
          return 250;
        case 'xl':
          return 300;
      }
    });
    const height = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 200;
        case 'sm':
          return 200;
        case 'md':
          return 250;
        case 'lg':
          return 250;
        case 'xl':
          return 300;
      }
    });
    return {
      width,
      height,
    };
  },
});
</script>
