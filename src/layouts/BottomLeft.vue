<template>
  <v-container fluid class="ma-0 pa-0">
    <Graph class="first-graph" />
    <DollarFull class="first-dollar" />
    <Coin class="first-coin-single" />
    <CoinDouble class="first-coin-double" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import DollarFull from '@/components/Money/DollarFull.vue';
import Coin from '@/components/Money/Coin.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';
import Graph from '@/components/Money/Graph.vue';

export default defineComponent({
  name: 'BottomLeft',
  components: {
    NavigationBar,
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
  top: 0;
  right: -50%;
  transform: translate(-25%, 10%);
}
.first-coin-double {
  position: absolute;
  bottom: -30%;
  right: -50%;
  transform: scale(0.5);
}
</style>
