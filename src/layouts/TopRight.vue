<template>
  <v-container fluid class="ma-0 pa-0" id="top-right">
    <DollarFolded class="first-dollar" />
    <CoinDouble class="first-coin" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/NavigationBar.vue';
import DollarFolded from '@/components/Money/DollarFolded.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

export default defineComponent({
  name: 'TopRight',
  components: {
    NavigationBar,
    DollarFolded,
    CoinDouble,
  },
});
</script>

<style scoped>
.first-dollar {
  position: absolute;
  transform: rotate(-60deg);
  top: -30%;
  right: -10%;
}
.first-coin {
  position: absolute;
  right: 10%;
}
</style>
