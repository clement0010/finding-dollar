<template>
  <v-container fluid>
    <NavigationBar />
    <TopLeft />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/NavigationBar.vue';
import TopLeft from '@/layouts/TopLeft.vue';

export default defineComponent({
  name: 'BasePage',
  components: {
    NavigationBar,
    TopLeft,
  },
});
</script>
