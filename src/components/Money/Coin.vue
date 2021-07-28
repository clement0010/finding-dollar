<template>
  <v-img contain width="50vw" :max-width="maxWidth" src="@/assets/money-coin-1.svg" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MoneyDollar',
  props: {
    maxWidth: {
      type: Number,
      default: 500,
    },
  },
});
</script>
