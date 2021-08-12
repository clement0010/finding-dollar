<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="name"
      sort-by="name"
      group-by="category"
      class="elevation-2"
      show-group-by
      hide-default-footer
    >
      <template #[`item.value`]="{ item }">
        {{ formatThousandSeparator(item.value) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { formatThousandSeparator } from '@/common/';
import { Breakdown } from '@/common/firestore/type';

export default defineComponent({
  name: 'DataTable',
  props: {
    data: {
      type: Array as () => Breakdown[],
      default: () => [],
      required: true,
    },
  },
  setup() {
    const headers = [
      {
        text: 'Items',
        align: 'start',
        value: 'name',
        groupable: false,
        sortable: false,
      },
      { text: 'Category ', value: 'category', align: 'right' },
      { text: 'Value (S$)', value: 'value', align: 'right', groupable: false },
    ];

    return {
      headers,
      formatThousandSeparator,
    };
  },
});
</script>
