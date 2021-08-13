<template>
  <v-container fluid class="ma-0 pa-0">
    <transition appear name="slide-fade">
      <DollarHalf v-if="$vuetify.breakpoint.smAndUp" class="first-dollar" />
      <DollarHalf v-if="$vuetify.breakpoint.xs" class="first-second-dollar" />
    </transition>
    <transition appear name="slide-fade-1">
      <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="first-coin-double" />
      <CoinDouble v-if="$vuetify.breakpoint.xs" class="first-second-coin-double" />
    </transition>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import DollarHalf from '@/components/Money/DollarHalf.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

export default defineComponent({
  name: 'TopRight',
  components: {
    DollarHalf,
    CoinDouble,
  },
});
</script>

<style lang="scss" scoped>
.first-dollar {
  position: absolute;
  top: -5rem;
  right: -5rem;
}
.first-second-dollar {
  position: absolute;
  top: -5rem;
  right: -3rem;
}
.first-coin-double {
  position: absolute;
  top: 3%;
  right: 3%;
  transform: scale(0.5);
}
.first-second-coin-double {
  position: absolute;
  top: -4rem;
  right: 0rem;
  transform: scale(0.5);
}
.slide-fade-enter-active {
  transition: all 1.7s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
.slide-fade-1-enter-active {
  transition: all 1s ease;
}
.slide-fade-1-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-1-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
  opacity: 0;
}
.slide-fade-1-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
  opacity: 0;
}
</style>
