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
          return 450;
        case 'sm':
          return 450;
        case 'md':
          return 450;
        case 'lg':
          return 500;
        case 'xl':
          return 500;
      }
    });
    const height = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          return 450;
        case 'sm':
          return 450;
        case 'md':
          return 450;
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
