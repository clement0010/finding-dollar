<template>
  <v-container fluid class="ma-0 pa-0">
    <DollarHalf v-if="$vuetify.breakpoint.smAndUp" class="first-dollar" />
    <DollarHalf v-if="$vuetify.breakpoint.xs" class="first-second-dollar" />
    <CoinDouble v-if="$vuetify.breakpoint.smAndUp" class="first-coin-double" />
    <CoinDouble v-if="$vuetify.breakpoint.xs" class="first-second-coin-double" />
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
  top: -5rem;
  right: -5rem;
}
.first-second-dollar {
  position: absolute;
  top: -5rem;
  right: -3rem;
}
.first-coin-double {
  position: absolute;
  top: 3%;
  right: 3%;
  transform: scale(0.5);
}
.first-second-coin-double {
  position: absolute;
  top: -4rem;
  right: 0rem;
  transform: scale(0.5);
}
</style>
