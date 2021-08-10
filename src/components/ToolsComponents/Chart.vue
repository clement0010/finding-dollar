<template>
  <v-row justify="center">
    <v-card width="300px" height="300px" class="elevation-5 rounded-lg mt-5">
      <DoughnutChart :chartData="doughnutChartData" :options="doughnutChartConfig" />
    </v-card>
  </v-row>
</template>

<script lang="ts">
import useAnalytics, { doughnutChartConfig } from '@/composable/chartComposition';
import { DoughnutChart } from 'vue-chart-3';
import { defineComponent } from '@vue/composition-api';
import { FinanceTableData } from '@/common/firestore/type';

export default defineComponent({
  name: 'DataChart',
  props: {
    data: {
      type: Array as () => FinanceTableData[],
      required: true,
    },
  },
  components: { DoughnutChart },
  setup(props) {
    const { doughnutChartData } = useAnalytics(props.data);

    return {
      doughnutChartConfig,
      doughnutChartData,
    };
  },
});
</script>
