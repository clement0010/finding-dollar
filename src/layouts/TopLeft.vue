<template>
  <v-container fluid class="ma-0 pa-0">
    <Graph v-if="$vuetify.breakpoint.mdAndUp" class="first-graph" />

    <DollarFolded v-if="$vuetify.breakpoint.smAndUp" class="first-dollar" />
    <DollarFolded v-if="$vuetify.breakpoint.xs" class="second-dollar" />

    <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="first-coin-double" />
    <CoinDouble v-if="$vuetify.breakpoint.xs" class="first-second-coin-double" />

    <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="second-coin-double" />

    <Coin v-if="$vuetify.breakpoint.smAndUp" class="first-coin-single" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import DollarFolded from '@/components/Money/DollarFolded.vue';
import Coin from '@/components/Money/Coin.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';
import Graph from '@/components/Money/Graph.vue';

export default defineComponent({
  name: 'TopLeft',
  components: {
    NavigationBar,
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
  top: 0;
  right: 0;
  transform: translate(-25%, 10%);
}
</style>
