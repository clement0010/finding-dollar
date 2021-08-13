<template>
  <v-container fluid class="ma-0 pa-0">
    <transition appear name="slide-fade">
      <Graph v-if="display" class="first-graph" />
    </transition>
    <transition appear name="slide-fade">
      <DollarFull v-if="display" class="first-dollar" />
    </transition>
    <transition appear name="slide-fade">
      <Coin v-if="display" class="first-coin-single" />
    </transition>
    <transition appear name="slide-fade-1">
      <CoinDouble v-if="display" class="first-coin-double" />
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
  name: 'BottomLeft',
  components: {
    DollarFull,
    Coin,
    CoinDouble,
    Graph,
  },
  props: {
    display: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.first-dollar {
  position: absolute;
  transform: rotate(210deg);
  bottom: -10rem;
  left: -10rem;
}
.first-coin-single {
  position: absolute;
  bottom: 20%;
  right: 90%;
  transform: scale(1.5);
}
.first-graph {
  position: absolute;
  bottom: -35%;
  right: -50%;
  transform: translate(-25%, 10%);
}
.first-coin-double {
  position: absolute;
  bottom: -30%;
  right: -50%;
  transform: scale(0.5);
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50px);
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
