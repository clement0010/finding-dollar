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
      <v-row no-gutters class="btm" justify="space-between">
        <v-col class="btm-left" cols="4">
          <BottomLeft v-if="display" />
        </v-col>
        <v-col class="btm-right" cols="4">
          <BottomRight v-if="display" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import TopLeft from '@/layouts/TopLeft.vue';
import TopRight from '@/layouts/TopRight.vue';
import BottomLeft from '@/layouts/BottomLeft.vue';
import BottomRight from '@/layouts/BottomRight.vue';

export default defineComponent({
  name: 'BasePage',
  components: { TopLeft, TopRight, BottomLeft, BottomRight },
  setup(_, { root }) {
    return {
      display: computed(() => {
        if (root.$route.name !== 'Home') return false;
        if (root.$vuetify.breakpoint.smAndDown) return false;
        return true;
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
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
.btm-left {
  position: relative;
}
.btm-right {
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
