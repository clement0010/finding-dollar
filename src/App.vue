<template>
  <v-app>
    <NavigationBar v-if="$vuetify.breakpoint.mdAndUp" />
    <NavigationBarMobile v-else />

    <v-main class="primary">
      <v-container fluid fill-height class="ma-0 pa-0">
        <BasePage>
          <router-view />
        </BasePage>

        <Snackbar />
      </v-container>
    </v-main>
    <Footer v-if="!$vuetify.breakpoint.lgAndUp" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import NavigationBarMobile from '@/components/Navigation/NavigationBarMobile.vue';
import Footer from '@/components/Footer.vue';
import Snackbar from '@/components/Snackbar.vue';

import BasePage from '@/layouts/BasePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    NavigationBarMobile,
    Footer,
    BasePage,
    Snackbar,
  },
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
