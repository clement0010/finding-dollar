import { ChartOptions, ChartData, TooltipModel, TooltipItem } from 'chart.js';
import { computed, ref } from '@vue/composition-api';
import { FinanceTableData } from '@/common/firestore/type';
import { parseFinanceData } from '@/common';

export const doughnutChartConfig: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '50/30/20 Chart',
      font: {
        size: 20,
        family: 'Montserrat',
      },
    },
    tooltip: {
      callbacks: {
        label: function (this: TooltipModel<'doughnut'>, data: TooltipItem<'doughnut'>) {
          return (data.label + ' ' + data.dataset.data[data.dataIndex] + '%') as string | string[];
        },
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAnalytics(data: FinanceTableData[]) {
  const doughnutData = ref(parseFinanceData(data));

  const doughnutChartData = computed<ChartData<'doughnut'>>(() => {
    return {
      labels: ['Wants', 'Needs', 'Savings'],
      datasets: [
        {
          data: doughnutData.value,
          backgroundColor: ['#0E49A6', '#07BF9B', '#F3F3FF'],
        },
      ],
    };
  });

  return {
    doughnutChartData,
  };
}
