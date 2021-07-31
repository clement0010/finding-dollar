<template>
  <v-app>
    <NavigationBar v-if="$vuetify.breakpoint.mdAndUp" />
    <NavigationBarMobile v-else />

    <v-main class="primary">
      <v-container fluid fill-height class="ma-0 pa-0">
        <router-view />
      </v-container>
    </v-main>
    <Footer v-if="!$vuetify.breakpoint.mdAndUp" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import NavigationBarMobile from '@/components/Navigation/NavigationBarMobile.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    NavigationBarMobile,
    Footer,
  },
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
