<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Category</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { FinanceTableData } from '@/common/firestore/type';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ToolsTable',
  props: {
    data: {
      type: Array as () => FinanceTableData[],
    },
  },
  setup() {
    return {};
  },
});
</script>
