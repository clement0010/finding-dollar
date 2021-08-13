<template>
  <v-container fluid class="ma-0 pa-0">
    <transition appear name="slide-fade">
      <Graph class="first-graph" />
    </transition>
    <transition appear name="slide-fade">
      <DollarFull class="first-dollar" />
    </transition>
    <transition appear name="slide-fade-2">
      <Coin class="first-coin-single" />
    </transition>
    <transition appear name="slide-fade-1">
      <CoinDouble class="first-coin-double" />
    </transition>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import DollarFull from '@/components/Money/DollarFull.vue';
import Coin from '@/components/Money/Coin.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';
import Graph from '@/components/Money/Graph.vue';

export default defineComponent({
  name: 'Bottom',
  components: {
    DollarFull,
    Coin,
    CoinDouble,
    Graph,
  },
});
</script>

<style lang="scss" scoped>
.first-dollar {
  position: absolute;
  transform: rotate(210deg);
  bottom: -8rem;
  left: -3rem;
}
.first-graph {
  position: absolute;
  bottom: -6rem;
  left: 3rem;
  transform: scale(2.5);
}
.first-coin-single {
  position: absolute;
  bottom: 3rem;
  left: -2rem;
  transform: scale(0.8);
}
.first-coin-double {
  position: absolute;
  bottom: -7rem;
  right: -13rem;
  transform: scale(0.5);
}
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-40px);
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
.slide-fade-2-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-2-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-2-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px) rotate(180deg);
  opacity: 0;
}
.slide-fade-2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotate(-180deg);
  opacity: 0;
}
</style>
