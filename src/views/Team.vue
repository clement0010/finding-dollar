<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row justify="center" class="mb-15 secondary--text">
      <h1>Find out more about ICMS Singapore</h1>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <TeamCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import TeamCard from '@/components/DisplayCards/TeamCard.vue';

export default defineComponent({
  name: 'Team',
  components: { TeamCard },
});
</script>
