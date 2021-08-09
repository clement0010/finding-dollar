<template>
  <v-footer app padless>
    <v-card flat tile class="text-center pa-0 ma-0" color="accent2" width="100vw">
      <v-card-text class="secondary--text">
        <strong>ICMS SINGAPORE </strong> &copy; {{ new Date().getFullYear() }}
      </v-card-text>
      <v-card-text>
        <v-row justify="center" no-gutters>
          <v-col cols="10" md="6">
            <v-btn text fab small href="https://www.instagram.com/icmscholars/" target="_blank">
              <v-icon color="secondary"> mdi-instagram </v-icon>
            </v-btn>
            <v-btn text fab small href="https://www.facebook.com/icmscholars" target="_blank">
              <v-icon color="secondary"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn text fab small href="https://www.linkedin.com/company/3155872" target="_blank">
              <v-icon color="secondary"> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn text fab small href="mailto:enquiries@icmscholars.org">
              <v-icon color="secondary"> mdi-email </v-icon>
            </v-btn>
            <v-btn text fab small href="https://www.icmscholars.org/" target="_blank">
              <v-icon color="secondary"> mdi-web </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Footer',
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
});
</script>
