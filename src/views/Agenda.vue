<template>
  <v-container fluid style="position: absolute; top: 15vh">
    <v-row no-gutters justify="center">
      <v-col cols="8">
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
