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

export default defineComponent({
  name: 'DataTable',
  setup() {
    const headers = [
      {
        text: 'Income and Expenses',
        align: 'start',
        value: 'name',
        groupable: false,
        sortable: false,
      },
      { text: 'Category ', value: 'category', align: 'right' },
      { text: 'Value (S$)', value: 'value', align: 'right', groupable: false },
    ];
    const data = [
      {
        name: 'Salary',
        value: 5500,
        category: 'Income',
      },
      {
        name: 'Phone Bill',
        value: 150,
        category: 'Expense',
      },
      {
        name: 'Food & Beverages',
        value: 1200,
        category: 'Expense',
      },
      {
        name: 'Food & Beverages1',
        value: 1200,
        category: 'Expense',
      },
      {
        name: 'Food & Beverages2',
        value: 1200,
        category: 'Expense',
      },
      {
        name: 'Food & Beverages3',
        value: 1200,
        category: 'Expense',
      },
    ];

    return {
      headers,
      data,
      formatThousandSeparator,
    };
  },
});
</script>
