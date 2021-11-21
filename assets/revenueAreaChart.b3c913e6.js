import { g as themeColors } from "./index.4d6c8e1a.js";
const randomizeArray = function(arg) {
  const array = arg.slice();
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
const sparklineData = [
  472,
  454,
  547,
  385,
  562,
  247,
  652,
  318,
  379,
  391,
  622,
  515,
  355,
  415,
  358,
  271,
  932,
  534,
  615,
  278,
  546,
  435,
  192,
  465
];
const spark1 = {
  chart: {
    id: "sparkline1",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.primary],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "\u0645\u062C\u0645\u0648\u0639 \u0641\u0631\u0648\u0634",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  xaxis: {
    type: "datetime"
  },
  title: {
    text: "\u0645\u062C\u0645\u0648\u0639 \u0641\u0631\u0648\u0634",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors.lightText
    }
  },
  subtitle: {
    text: "\u06F9,\u06F3\u06F7\u06F4",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark2 = {
  chart: {
    id: "sparkline2",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.info],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0648\u062F",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  xaxis: {
    type: "datetime"
  },
  title: {
    text: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0648\u062F",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors.lightText
    }
  },
  subtitle: {
    text: "\u06F2\u06F4 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark3 = {
  chart: {
    id: "sparkline3",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.accent],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0641\u0627\u0631\u0634\u0627\u062A",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  title: {
    text: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0641\u0627\u0631\u0634\u0627\u062A",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors.lightText
    }
  },
  subtitle: {
    text: "\u06F4\u06F3\u06F6\u06F1 \u0633\u0641\u0627\u0631\u0634",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark4 = {
  chart: {
    id: "sparkline3",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors.purple],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "\u0633\u0648\u062F \u062A\u0644\u0641\u06CC\u0642\u06CC",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  title: {
    text: "\u0633\u0648\u062F \u062A\u0644\u0641\u06CC\u0642\u06CC",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors.lightText
    }
  },
  subtitle: {
    text: "\u06F1\u06F6 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646",
    align: "right",
    offsetX: 0,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const revenueOptions = {
  series: [
    {
      name: "\u0628\u0627\u0632\u06AF\u0634\u062A\u06CC",
      data: [318.42, 407.16, 284.12, 517, 452.45, 1209.34, 1010.11]
    },
    {
      name: "\u062A\u0627\u0632\u0647 \u0648\u0627\u0631\u062F",
      data: [112.42, 324.45, 457.5, 312.75, 342.45, 527.56, 414.75]
    },
    {
      name: "\u0627\u0628\u0637\u0627\u0644 \u0634\u062F\u0647",
      data: [787.89, 534.46, 365.78, 107.45, 145.78, 54.42, 27.12]
    }
  ],
  chart: {
    height: 250,
    type: "area",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  yaxis: {
    opposite: true
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-09-19T00:00:00.000Z",
      "2020-09-20T01:30:00.000Z",
      "2020-09-21T02:30:00.000Z",
      "2020-09-22T03:30:00.000Z",
      "2020-09-23T04:30:00.000Z",
      "2020-09-24T05:30:00.000Z",
      "2020-09-25T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
export { spark2 as a, spark3 as b, spark4 as c, revenueOptions as r, spark1 as s };
