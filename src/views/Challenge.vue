<template>
  <v-container fluid style="position: absolute; top: 10vh">
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <ChallengeCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import ChallengeCard from '@/components/DisplayCards/ChallengeCard.vue';

export default defineComponent({
  name: 'Challenge',
  components: { ChallengeCard },
});
</script>
