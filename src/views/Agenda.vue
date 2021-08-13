<template>
  <v-container
    fluid
    style="position: absolute"
    :class="{ mobile: !$vuetify.breakpoint.smAndUp, web: $vuetify.breakpoint.smAndUp }"
    }
  >
    <v-row no-gutters justify="center">
      <v-col cols="10" md="8">
        <AgendaCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import AgendaCard from '@/components/DisplayCards/AgendaCard.vue';

export default defineComponent({
  name: 'Agenda',
  components: {
    AgendaCard,
  },
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
