<template>
  <v-container fluid class="pa-0 ma-0" style="height: 100vh">
    <TitleCard />
    <v-row style="height: 50%">
      <v-col style="width: 50%" class="ma-0 pa-0">
        <TopLeft />
      </v-col>
      <v-col style="width: 50%" class="ma-0 pa-0">
        <TopRight />
      </v-col>
    </v-row>
    <v-row style="height: 50%">
      <v-col style="width: 50%" class="ma-0 pa-0">
        <BottomLeft />
      </v-col>
      <v-col style="width: 50%" class="ma-0 pa-0">
        <BottomRight />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import BottomLeft from '@/layouts/BottomLeft.vue';
import BottomRight from '@/layouts/BottomRight.vue';
import TopLeft from '@/layouts/TopLeft.vue';
import TopRight from '@/layouts/TopRight.vue';
import TitleCard from '@/layouts/TitleCard.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    BottomLeft,
    BottomRight,
    TopLeft,
    TopRight,
    TitleCard,
  },
});
</script>

<style scoped></style>
