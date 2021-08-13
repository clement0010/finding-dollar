<template>
  <v-card flat color="transparent">
    <v-card-title
      class="
        text-center
        secondary--text
        font-weight-bold
        justify-center
        text-sm-h2 text-md-h1 text-h4
      "
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
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Home',
  components: {},
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
