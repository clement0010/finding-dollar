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
    <Footer v-if="!$vuetify.breakpoint.mdAndUp" />
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

<style lang="scss">
html {
  overflow-y: auto;
}

a {
  text-decoration: none;
}
strong {
  font-weight: 900;
  color: black;
}

.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #f3f3ff;
  -webkit-box-shadow: inset 0 0 6px #f3f3ff;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scroll::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f3f3ff;
}
</style>
