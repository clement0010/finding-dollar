<template>
  <v-container fluid ma-0 pa-0 fill-height>
    <DollarFolded class="first-dollar" />
    <CoinDouble class="first-coin" />
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
  name: 'TopLeft',
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
  transform: rotate(30deg);
  position: fixed;
  top: -200px;
  left: -100px;
}
.second-dollar {
  transform: rotate(0deg) translateX(0vw);
}
.first-coin {
  position: fixed;
  top: 100px;
  left: -120px;
}
.second-coin {
  transform: rotate(-30deg) scale(0.5);
  position: fixed;
  top: 120px;
  left: 160px;
}
</style>
