<template>
  <BasePage>
    <HomeLayout />
  </BasePage>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import BasePage from '@/layouts/BasePage.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BasePage,
    HomeLayout,
  },
});
</script>
