<template>
  <v-container fluid class="ma-0 pa-0" id="bottom-left">
    <DollarFolded class="first-dollar" />
    <Coin class="first-coin" />
    <CoinDouble class="second-coin" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/NavigationBar.vue';
import DollarFolded from '@/components/Money/DollarFolded.vue';
import Coin from '@/components/Money/Coin.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

export default defineComponent({
  name: 'BottomLeft',
  components: {
    NavigationBar,
    DollarFolded,
    CoinDouble,
    Coin,
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
</style>
