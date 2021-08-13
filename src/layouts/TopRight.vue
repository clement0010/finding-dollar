<template>
  <v-container fluid class="ma-0 pa-0">
    <DollarHalf class="first-dollar" />
    <CoinDouble class="first-coin-double" />
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
  transform: rotate(0deg);
  top: -5rem;
  right: -5rem;
}
.first-coin-double {
  position: absolute;
  top: 0%;
  right: 0%;
  transform: scale(0.5);
}
</style>
