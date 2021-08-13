<template>
  <v-container
    fluid
    class="ma-0 pa-0"
    style="position: absolute"
    :class="{ mobile: !$vuetify.breakpoint.smAndUp, web: $vuetify.breakpoint.smAndUp }"
  >
    <v-row no-gutters justify="center">
      <v-col cols="7" align="center">
        <h1 class="text-md-h3 text-sm-h4 text-h5 mb-10 secondary--text">
          Find out more about ICMS Singapore
        </h1>
      </v-col>
      <v-col cols="11" md="8" align="center">
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

<style lang="scss" scoped>
.mobile {
  top: 15vh;
}
.web {
  top: 25vh;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
