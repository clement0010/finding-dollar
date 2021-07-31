<template>
  <v-img contain :width="width" :height="height" src="@/assets/money-dollar-1.svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyDollarFolded',
  setup(_, { root }) {
    const width = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 200;
        case 'sm':
          return 300;
        case 'md':
          return 400;
        case 'lg':
          return 450;
        case 'xl':
          return 450;
      }
    });
    const height = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 200;
        case 'sm':
          return 300;
        case 'md':
          return 400;
        case 'lg':
          return 450;
        case 'xl':
          return 450;
      }
    });
    return {
      width,
      height,
    };
  },
});
</script>
