<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-col cols="12" md="8" align="center">
        <LeaderboardCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import LeaderboardCard from '@/components/DisplayCards/LeaderboardCard.vue';

export default defineComponent({
  name: 'Leaderboard',
  components: { LeaderboardCard },
});
</script>
