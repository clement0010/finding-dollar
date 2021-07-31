<template>
  <BasePage>
    <v-card flat color="transparent">
      <v-card-title
        class="text-center secondary--text font-weight-bold justify-center"
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-3']"
      >
        ICM$ SG:
        <br />
        Finding Dollar
      </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn class="rounded-lg secondary" elevation="5">14 AUG 2021</v-btn>
        <v-btn class="rounded-lg secondary" elevation="5">9 AM - 3 PM (SGT)</v-btn>
      </v-card-actions>
    </v-card>
  </BasePage>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import BasePage from '@/layouts/BasePage.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BasePage,
  },
  setup(_, { root }) {
    const test = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          console.log('I am XS');
          return 200;
        case 'sm':
          console.log('I am SM');
          return 300;
        case 'md':
          console.log('I am MD');
          return 300;
        case 'lg':
          console.log('I am LG');
          return 450;
        case 'xl':
          console.log('I am XL');
          return 450;
      }
    });
    return {
      test,
    };
  },
});
</script>
