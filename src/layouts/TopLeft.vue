<template>
  <v-container fluid class="ma-0 pa-0">
    <transition appear name="slide-fade">
      <Graph v-if="$vuetify.breakpoint.mdAndUp" class="first-graph" />
    </transition>
    <transition appear name="slide-fade">
      <DollarFolded v-if="$vuetify.breakpoint.smAndUp" class="first-dollar" />
      <DollarFolded v-if="$vuetify.breakpoint.xs" class="second-dollar" />
    </transition>

    <transition appear name="slide-fade">
      <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="first-coin-double" />
      <CoinDouble v-if="$vuetify.breakpoint.xs" class="first-second-coin-double" />
    </transition>

    <transition appear name="slide-fade-1">
      <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="second-coin-double" />
    </transition>

    <transition appear name="slide-fade-2">
      <Coin v-if="$vuetify.breakpoint.smAndUp" class="first-coin-single" />
    </transition>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import DollarFolded from '@/components/Money/DollarFolded.vue';
import Coin from '@/components/Money/Coin.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

import Graph from '@/components/Money/Graph.vue';

export default defineComponent({
  name: 'TopLeft',
  components: {
    DollarFolded,
    Coin,
    CoinDouble,
    Graph,
  },
});
</script>

<style lang="scss" scoped>
.first-dollar {
  position: absolute;
  transform: rotate(30deg);
  top: -5rem;
  left: -5rem;
}
.second-dollar {
  position: absolute;
  transform: rotate(30deg);
  top: -8rem;
  left: -3rem;
}
.first-coin-double {
  position: absolute;
  top: 15%;
  right: 70%;
  transform: translate(-15%, -15%);
}
.first-second-coin-double {
  position: absolute;
  top: -15%;
  right: 50%;
  transform: scale(0.7);
}
.second-coin-double {
  position: absolute;
  right: 10%;
  bottom: 10%;
  transform: scale(0.5);
}
.third-coin-double {
  position: absolute;
  right: 10%;
  top: 10%;
  transform: scale(0.45);
}
.first-coin-single {
  position: absolute;
  bottom: 0%;
  left: 25%;
  transform: translate(-75%, 0);
}
.second-coin-single {
  position: absolute;
  top: 0%;
  left: 25%;
  transform: scale(0.7);
}
.first-graph {
  position: absolute;
  top: 3rem;
  right: 5rem;
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
  transform: translateX(-300px) rotate(-180deg);
  opacity: 0;
}
.slide-fade-2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotate(180deg);
  opacity: 0;
}
</style>
