<template>
  <v-container fluid class="ma-0 pa-0" id="bottom-left">
    <Graph class="graph" />
    <DollarFolded class="first-dollar" />
    <Coin class="first-coin" />
    <CoinDouble class="second-coin" />
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
  name: 'BottomLeft',
  components: {
    NavigationBar,
    DollarFolded,
    CoinDouble,
    Coin,
    Graph,
  },
});
</script>

<style scoped>
.first-dollar {
  position: absolute;
  transform: rotate(15deg) scale(0.8);
  bottom: -20%;
  left: -5%;
}
.first-coin {
  position: absolute;
  transform: scale(0.5);
  left: -10%;
  bottom: 5%;
}
.second-coin {
  position: absolute;
  transform: scale(0.5);
  left: 30%;
  bottom: -10%;
}
.graph {
  position: absolute;
  transform: scaleY(-1);
  bottom: -10%;
  left: 10%;
}
</style>
