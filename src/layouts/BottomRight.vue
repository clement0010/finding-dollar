<template>
  <v-container fluid class="ma-0 pa-0" id="bottom-right">
    <DollarFolded class="first-dollar" />
    <CoinDouble class="first-coin" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import DollarFolded from '@/components/Money/DollarFolded.vue';
import CoinDouble from '@/components/Money/CoinDouble.vue';

export default defineComponent({
  name: 'BottomRight',
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
  transform: rotate(-45deg);
  right: -15%;
  bottom: -10%;
}
.first-coin {
  position: absolute;
  bottom: 5%;
  right: -5%;
}
</style>
