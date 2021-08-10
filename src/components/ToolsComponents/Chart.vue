<template>
  <v-card :width="500" class="elevation-5 rounded-lg">
    <DoughnutChart :chartData="barChartData" />
  </v-card>
</template>

<script lang="ts">
import useAnalytics, { barChartConfig } from '@/composable/chartComposition';
import { DoughnutChart } from 'vue-chart-3';
import { defineComponent } from '@vue/composition-api';
import { FinanceTableData } from '@/common/firestore/type';

export default defineComponent({
  name: 'DataChart',
  props: {
    data: {
      type: Array as () => FinanceTableData[],
    },
  },
  components: { DoughnutChart },
  setup() {
    const { barChartData } = useAnalytics();

    return {
      barChartData,
      barChartConfig,
    };
  },
});
</script>
