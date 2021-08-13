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
</style>
