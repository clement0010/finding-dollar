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
    <v-row no-gutters class="btm" justify="space-between">
      <v-col class="btm-left" cols="4">
        <BottomLeft :display="display" />
        <Bottom v-if="displayBtm" />
      </v-col>
      <v-col class="btm-right" cols="4">
        <BottomRight :display="display" />
      </v-col>
    </v-row>
    <v-container fluid fill-height class="ma-0 pa-0">
      <v-row no-gutters align="center" justify="center">
        <v-col>
          <transition name="fade">
            <slot />
          </transition>
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
import Bottom from '@/layouts/Bottom.vue';

export default defineComponent({
  name: 'BasePage',
  components: { TopLeft, TopRight, BottomLeft, BottomRight, Bottom },
  setup(_, { root }) {
    return {
      display: computed(() => {
        if (root.$route.name !== 'Home') return false;
        if (root.$vuetify.breakpoint.smAndDown) return false;
        return true;
      }),
      displayBtm: computed(() => {
        if (root.$vuetify.breakpoint.smAndDown && root.$route.name === 'Home') return true;
        return false;
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
.fade-enter-active {
  transition: all 0.8s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
