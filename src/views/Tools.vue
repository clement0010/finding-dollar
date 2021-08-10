<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <ToolsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import ToolsCard from '@/components/DisplayCards/ToolsCard.vue';

export default defineComponent({
  name: 'Tools',
  components: { ToolsCard },
});
</script>
