<template>
  <v-container
    fluid
    style="position: absolute"
    :class="{ mobile: !$vuetify.breakpoint.smAndUp, web: $vuetify.breakpoint.smAndUp }"
  >
    <v-row no-gutters justify="center">
      <v-col cols="10" md="8">
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

<style lang="scss" scoped>
.mobile {
  top: 5vh;
}
.web {
  top: 10vh;
}
</style>
