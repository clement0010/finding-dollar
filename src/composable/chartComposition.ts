import { ChartOptions } from 'chart.js';
import { computed } from '@vue/composition-api';

export const barChartConfig: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Events Summary',
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      ticks: {
        stepSize: 5,
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAnalytics() {
  // const barData = ref<number[]>([]);

  const barChartData = computed(() => {
    return {
      labels: ['Needs', 'Wants', 'Savings'],
      datasets: [
        {
          data: [100, 100, 100],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
        },
      ],
    };
  });

  return {
    barChartData,
  };
}
