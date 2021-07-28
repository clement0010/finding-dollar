<template>
  <v-overlay absolute opacity="0">
    <v-card flat color="transparent">
      <v-card-title class="text-center black--text">
        ICM$ SG:
        <br />
        Finding Dollar
      </v-card-title>
    </v-card>
  </v-overlay>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TitleCard',
});
</script>
