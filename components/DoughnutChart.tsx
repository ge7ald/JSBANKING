"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Define the props type
interface DoughnutChartProps {
  accounts?: any[]; // or a more specific type if you have it
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        // Optional: add border colors for better visual
        borderColor: ['#0747b6', '#2265d8', '#2f91fa'],
        borderWidth: 1,
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }


  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false // Hide legend if you want to show it elsewhere
      },
      tooltip: {
        enabled: true
      }
    },
    maintainAspectRatio: false
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart;