<template>
  <BasePage>
    <v-container fluid class="ma-0 pa-0 justify-center">
      <v-row no-gutters justify="center"> This is team page </v-row>
    </v-container>
  </BasePage>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import BasePage from '@/layouts/BasePage.vue';

export default defineComponent({
  name: 'Team',
  components: {
    BasePage,
  },
});
</script>
