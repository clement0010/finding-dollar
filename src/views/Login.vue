<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters>
      <LoginCard justify="center" align="center" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import LoginCard from '@/components/Authentication/LoginCard.vue';

export default defineComponent({
  name: 'Login',
  components: {
    LoginCard,
  },
});
</script>
