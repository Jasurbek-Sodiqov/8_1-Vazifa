import { colors } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";

function F26() {
  useEffect(() => {
    var options = {
      series: [26],
      chart: {
        height: 130,
        with: 200,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 370,
          hollow: {
            margin: 0,
            size: "80%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },
          track: {
            background: "#ff984a19",
            strokeWidth: "60%",
            margin: 0,
          },

          dataLabels: {
            show: true,
            name: {
              color: "#888",
              fontSize: "18px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "rgba(23, 23, 37, 0)",
              fontSize: "18px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        colors: "rgba(255, 151, 74, 1)",
        gradient: {
          gradientToColors: ["rgba(255, 151, 74, 1)"],

          opacityFrom: 1,
          opacityTo: 1,
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["26%"],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }, []);
  return <div id="chart" className="foiz"></div>;
}

export default F26;
