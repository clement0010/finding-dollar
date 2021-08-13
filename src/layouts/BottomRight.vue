<template>
  <v-container fluid class="ma-0 pa-0">
    <DollarFull class="first-dollar" />
    <CoinDouble class="first-coin-double" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import DollarFull from '@/components/Money/DollarFull.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

export default defineComponent({
  name: 'BottomRight',
  components: {
    DollarFull,
    CoinDouble,
  },
});
</script>

<style lang="scss" scoped>
.first-dollar {
  position: absolute;
  transform: rotate(-225deg) scale(0.8);
  top: -5rem;
  right: -13rem;
}
.first-coin-double {
  position: absolute;
  bottom: 0rem;
  right: -7rem;
  transform: scale(0.5);
}
</style>
