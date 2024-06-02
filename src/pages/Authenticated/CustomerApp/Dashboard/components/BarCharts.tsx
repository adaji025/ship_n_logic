import Chart from "react-apexcharts";

const ApexChart = () => {
  const options = {
    plotOptions: {
      bar: {
        borderRadius: 6,
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
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};
export default ApexChart;
