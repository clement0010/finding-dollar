<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters class="top" justify="space-between">
      <v-col class="top-left" cols="4">
        <TopLeft />
      </v-col>
      <v-col class="top-right" cols="4">
        <TopRight />
      </v-col>
    </v-row>
    <v-container fluid fill-height class="ma-0 pa-0">
      <v-row no-gutters align="center" justify="center">
        <v-col>
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import TopLeft from '@/layouts/TopLeft.vue';
import TopRight from '@/layouts/TopRight.vue';

export default defineComponent({
  name: 'BasePage',
  components: { TopLeft, TopRight },
});
</script>

<style scoped>
.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
}
.top-left {
  position: relative;
}
.top-right {
  position: relative;
}
.btm {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50vh;
}
</style>
