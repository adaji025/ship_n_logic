import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last",
        dataLabels: {
          position: "-10", // top, center, bottom
        },
      },
    },
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "02",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 5, 3, 11, 60],
    },
    {
      name: "series-2",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 5, 3, 11, 60],
    },
  ];

  return <Chart options={options} series={series} height={350} type="bar" />;
};
export default ApexChart;
