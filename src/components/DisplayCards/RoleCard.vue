<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary">
      <template slot="progress">
        <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
      </template>
      <v-tabs v-model="tab" background-color="transparent" color="white" grow dark slider-size="5">
        <v-tabs-slider class="pb-5" color="accent1"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item.tab" class="rounded-xl">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card min-height="30vh">
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'RoleCard',
  setup() {
    const tab = ref(null);
    const items = [
      { tab: 'One', content: 'Tab 1 Content' },
      { tab: 'Two', content: 'Tab 2 Content' },
      { tab: 'Three', content: 'Tab 3 Content' },
    ];
    return {
      tab,
      items,
    };
  },
});
</script>
