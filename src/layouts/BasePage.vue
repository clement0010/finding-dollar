<template>
  <v-container fluid class="ma-0 pa-0">
    <NavigationBar />
    <slot />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/NavigationBar.vue';

export default defineComponent({
  name: 'BasePage',
  components: {
    NavigationBar,
  },
});
</script>
