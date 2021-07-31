<template>
  <v-app-bar app color="primary">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-app-bar-title>
          <router-link to="/">
            <v-img contain src="@/assets/logo.png" width="175px" aspect-ratio class="mt-3" />
          </router-link>
        </v-app-bar-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <NavigationDropDown />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import NavigationDropDown from './NavigationDropDown.vue';

export default defineComponent({
  name: 'NavigationBarMobile',
  components: {
    NavigationDropDown,
  },
});
</script>
