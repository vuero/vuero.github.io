import { l as line, a as area, b as areaLineRange$1, c as areaSplineRange, d as bar, s as step, e as areaStep, f as bubble, g as scatter, p as pie, h as donut, i as gauge, r as radar, _ as _sfc_main$1 } from "./VBillboardJS.ae6ef8a0.js";
import { g as themeColors } from "./index.4d6c8e1a.js";
import { s as splineSimple } from "./splineSimple.1e5809e8.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, v as createVNode, t as unref } from "./vendor.9ec557a4.js";
const options$c = {
  data: {
    type: line(),
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062E\u0637",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$8 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [["data1", 230, 190, 300, 500, 300, 400]]
    });
  }, 2e3);
  setTimeout(() => {
    billboard.load({
      columns: [["data3", 130, 150, 200, 300, 200, 100]]
    });
  }, 6500);
};
var genericLine = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$c,
  onReady: onReady$8
});
const options$b = {
  data: {
    type: line(),
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info
    },
    regions: {
      data1: [
        {
          start: 1,
          end: 2,
          style: {
            dasharray: "6 2"
          }
        },
        {
          start: 3,
          style: {
            dasharray: "2 3"
          }
        }
      ],
      data2: [
        {
          end: 3
        }
      ]
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062E\u0637\u06CC \u0628\u0627 \u0645\u0646\u0637\u0642\u0647",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
var regionLine = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$b
});
const options$a = {
  data: {
    type: area(),
    columns: [
      ["data1", 300, 350, 300, 0, 0, 0],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info
    },
    types: {
      data1: "area",
      data2: "area-spline"
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u0646\u0637\u0642\u0647",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
var areaSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$a
});
const options$9 = {
  data: {
    x: "x",
    type: areaLineRange$1(),
    columns: [
      [
        "x",
        "2013-01-01",
        "2013-01-02",
        "2013-01-03",
        "2013-01-04",
        "2013-01-05",
        "2013-01-06"
      ],
      [
        "data1",
        [150, 140, 110],
        [155, 130, 115],
        [160, 135, 120],
        [135, 120, 110],
        [180, 150, 130],
        [199, 160, 125]
      ],
      ["data2", 130, 340, 200, 500, 250, 350]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info,
      data4: themeColors.purple
    },
    types: {
      data1: "area-line-range"
    }
  },
  axis: {
    x: {
      type: "timeseries",
      tick: {
        format: "%Y-%m-%d"
      }
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0628\u0627\u0632\u0647\u200C\u0627\u06CC \u0645\u062D\u06CC\u0637\u06CC",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$7 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [
        [
          "data3",
          [220, 215, 205],
          [240, 225, 215],
          [260, 235, 225],
          [280, 245, 235],
          [270, 255, 225],
          [240, 225, 215]
        ]
      ],
      types: {
        data3: areaSplineRange()
      }
    });
  }, 1e3);
  setTimeout(() => {
    billboard.load({
      columns: [
        [
          "data4",
          { high: 155, low: 145, mid: 150 },
          { high: 200, mid: 190, low: 150 },
          { high: 230, mid: 215, low: 200 },
          { high: 210, mid: 200, low: 180 },
          { high: 220, mid: 210, low: 190 },
          { high: 200, mid: 180, low: 160 }
        ]
      ],
      types: {
        data4: areaSplineRange()
      }
    });
  }, 1500);
};
var areaLineRange = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$9,
  onReady: onReady$7
});
const options$8 = {
  data: {
    type: bar(),
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple
    }
  },
  bar: {
    width: {
      ratio: 0.5
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u06CC\u0644\u0647 \u0627\u06CC",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$6 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [["data3", 130, -150, 200, 300, -200, 100]]
    });
  }, 1e3);
};
var barSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$8,
  onReady: onReady$6
});
const options$7 = {
  data: {
    type: bar(),
    columns: [
      ["data1", -30, 200, 200, 400, -150, 250],
      ["data2", 130, 100, -100, 200, -150, 50],
      ["data3", -230, 200, 200, -300, 250, 250]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.purple
    },
    groups: [["data1", "data2"]]
  },
  grid: {
    y: {
      lines: [
        {
          value: 0
        }
      ]
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u06CC\u0644\u0647 \u0627\u06CC \u0627\u0646\u0628\u0627\u0634\u062A\u0647",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$5 = (billboard) => {
  setTimeout(() => {
    billboard.groups([["data1", "data2", "data3"]]);
  }, 1e3);
  setTimeout(() => {
    billboard.load({
      columns: [["data4", 100, -50, 150, 200, -300, -100]]
    });
  }, 1500);
  setTimeout(() => {
    billboard.groups([["data1", "data2", "data3", "data4"]]);
  }, 2e3);
};
var barStacked = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$7,
  onReady: onReady$5
});
const options$6 = {
  data: {
    columns: [
      ["data1", 300, 350, 300, 0, 0, 100],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple
    },
    types: {
      data1: step(),
      data2: areaStep()
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0645\u0631\u062D\u0644\u0647",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
var stepSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$6
});
const options$5 = {
  data: {
    columns: [
      ["data1", 30, 190, 200, 110, 150, 160, 50, 80, 55, 220],
      ["data2", 130, 100, 10, 143, 80, 50, 200, 123, 185, 98],
      ["data3", 160, 153, 85, 80, 250, 120, 5, 84, 99, 175]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info,
      data4: themeColors.purple
    },
    type: bubble(),
    labels: true
  },
  bubble: {
    maxR: 50
  },
  axis: {
    x: {
      type: "category"
    },
    y: {
      max: 450
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062D\u0628\u0627\u0628",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$4 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [["data1", 100, 50, 150, 200, 100, 350, 58, 210, 80, 126]]
    });
  }, 1e3);
  setTimeout(() => {
    billboard.load({
      columns: [["data2", 305, 350, 55, 25, 335, 29, 258, 310, 180, 226]]
    });
  }, 2e3);
  setTimeout(() => {
    billboard.load({
      columns: [["data3", 223, 121, 259, 247, 53, 159, 95, 111, 307, 337]]
    });
  }, 3e3);
};
var bubbleSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$5,
  onReady: onReady$4
});
const options$4 = {
  data: {
    xs: {
      setosa: "setosa_x",
      versicolor: "versicolor_x"
    },
    columns: [
      [
        "setosa_x",
        3.5,
        3,
        3.2,
        3.1,
        3.6,
        3.9,
        3.4,
        3.4,
        2.9,
        3.1,
        3.7,
        3.4,
        3,
        3,
        4,
        4.4,
        3.9,
        3.5,
        3.8,
        3.8,
        3.4,
        3.7,
        3.6,
        3.3,
        3.4,
        3,
        3.4,
        3.5,
        3.4,
        3.2,
        3.1,
        3.4,
        4.1,
        4.2,
        3.1,
        3.2,
        3.5,
        3.6,
        3,
        3.4,
        3.5,
        2.3,
        3.2,
        3.5,
        3.8,
        3,
        3.8,
        3.2,
        3.7,
        3.3
      ],
      [
        "versicolor_x",
        3.2,
        3.2,
        3.1,
        2.3,
        2.8,
        2.8,
        3.3,
        2.4,
        2.9,
        2.7,
        2,
        3,
        2.2,
        2.9,
        2.9,
        3.1,
        3,
        2.7,
        2.2,
        2.5,
        3.2,
        2.8,
        2.5,
        2.8,
        2.9,
        3,
        2.8,
        3,
        2.9,
        2.6,
        2.4,
        2.4,
        2.7,
        2.7,
        3,
        3.4,
        3.1,
        2.3,
        3,
        2.5,
        2.6,
        3,
        2.6,
        2.3,
        2.7,
        3,
        2.9,
        2.9,
        2.5,
        2.8
      ],
      [
        "setosa",
        0.2,
        0.2,
        0.2,
        0.2,
        0.2,
        0.4,
        0.3,
        0.2,
        0.2,
        0.1,
        0.2,
        0.2,
        0.1,
        0.1,
        0.2,
        0.4,
        0.4,
        0.3,
        0.3,
        0.3,
        0.2,
        0.4,
        0.2,
        0.5,
        0.2,
        0.2,
        0.4,
        0.2,
        0.2,
        0.2,
        0.2,
        0.4,
        0.1,
        0.2,
        0.2,
        0.2,
        0.2,
        0.1,
        0.2,
        0.2,
        0.3,
        0.3,
        0.2,
        0.6,
        0.4,
        0.3,
        0.2,
        0.2,
        0.2,
        0.2
      ],
      [
        "versicolor",
        1.4,
        1.5,
        1.5,
        1.3,
        1.5,
        1.3,
        1.6,
        1,
        1.3,
        1.4,
        1,
        1.5,
        1,
        1.4,
        1.3,
        1.4,
        1.5,
        1,
        1.5,
        1.1,
        1.8,
        1.3,
        1.5,
        1.2,
        1.3,
        1.4,
        1.4,
        1.7,
        1.5,
        1,
        1.1,
        1,
        1.2,
        1.6,
        1.5,
        1.6,
        1.5,
        1.3,
        1.3,
        1.3,
        1.2,
        1.4,
        1.2,
        1,
        1.3,
        1.2,
        1.3,
        1.3,
        1.1,
        1.3
      ]
    ],
    colors: {
      setosa_x: themeColors.accent,
      versicolor_x: themeColors.primary,
      setosa: themeColors.orange,
      versicolor: themeColors.purple,
      virginica_x: themeColors.info,
      virginica: themeColors.success
    },
    type: scatter()
  },
  axis: {
    x: {
      tick: {
        fit: false
      }
    },
    y: {}
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0637\u0631\u062D \u067E\u0631\u0627\u06A9\u0646\u062F\u0647",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$3 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      xs: {
        virginica: "virginica_x"
      },
      columns: [
        [
          "virginica_x",
          3.3,
          2.7,
          3,
          2.9,
          3,
          3,
          2.5,
          2.9,
          2.5,
          3.6,
          3.2,
          2.7,
          3,
          2.5,
          2.8,
          3.2,
          3,
          3.8,
          2.6,
          2.2,
          3.2,
          2.8,
          2.8,
          2.7,
          3.3,
          3.2,
          2.8,
          3,
          2.8,
          3,
          2.8,
          3.8,
          2.8,
          2.8,
          2.6,
          3,
          3.4,
          3.1,
          3,
          3.1,
          3.1,
          3.1,
          2.7,
          3.2,
          3.3,
          3,
          2.5,
          3,
          3.4,
          3
        ],
        [
          "virginica",
          2.5,
          1.9,
          2.1,
          1.8,
          2.2,
          2.1,
          1.7,
          1.8,
          1.8,
          2.5,
          2,
          1.9,
          2.1,
          2,
          2.4,
          2.3,
          1.8,
          2.2,
          2.3,
          1.5,
          2.3,
          2,
          2,
          1.8,
          2.1,
          1.8,
          1.8,
          1.8,
          2.1,
          1.6,
          1.9,
          2,
          2.2,
          1.5,
          1.4,
          2.3,
          2.4,
          1.8,
          1.8,
          2.1,
          2.4,
          2.3,
          1.9,
          2.3,
          2.5,
          2.3,
          1.9,
          2,
          2.3,
          1.8
        ]
      ]
    });
  }, 1e3);
  setTimeout(() => {
    billboard.unload({
      ids: "setosa"
    });
  }, 2e3);
  setTimeout(() => {
    billboard.load({
      columns: [
        [
          "virginica",
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.3,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.1,
          0.1,
          0.2,
          0.4,
          0.4,
          0.3,
          0.3,
          0.3,
          0.2,
          0.4,
          0.2,
          0.5,
          0.2,
          0.2,
          0.4,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.1,
          0.2,
          0.2,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.3,
          0.3,
          0.2,
          0.6,
          0.4,
          0.3,
          0.2,
          0.2,
          0.2,
          0.2
        ]
      ]
    });
  }, 3e3);
};
var scatterSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$4,
  onReady: onReady$3
});
const options$3 = {
  data: {
    columns: [
      ["data1", 30],
      ["data2", 120]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple,
      setosa: themeColors.orange,
      versicolor: themeColors.purple,
      virginica: themeColors.success
    },
    type: pie(),
    onclick(d, element) {
      console.log("[pieSimple] onclick", d, element);
    },
    onover(d, element) {
      console.log("[pieSimple] onover", d, element);
    },
    onout(d, element) {
      console.log("[pieSimple] onout", d, element);
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062F\u0627\u06CC\u0631\u0647 \u0627\u06CC",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$2 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [
        [
          "setosa",
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.3,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.1,
          0.1,
          0.2,
          0.4,
          0.4,
          0.3,
          0.3,
          0.3,
          0.2,
          0.4,
          0.2,
          0.5,
          0.2,
          0.2,
          0.4,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.1,
          0.2,
          0.2,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.3,
          0.3,
          0.2,
          0.6,
          0.4,
          0.3,
          0.2,
          0.2,
          0.2,
          0.2
        ],
        [
          "versicolor",
          1.4,
          1.5,
          1.5,
          1.3,
          1.5,
          1.3,
          1.6,
          1,
          1.3,
          1.4,
          1,
          1.5,
          1,
          1.4,
          1.3,
          1.4,
          1.5,
          1,
          1.5,
          1.1,
          1.8,
          1.3,
          1.5,
          1.2,
          1.3,
          1.4,
          1.4,
          1.7,
          1.5,
          1,
          1.1,
          1,
          1.2,
          1.6,
          1.5,
          1.6,
          1.5,
          1.3,
          1.3,
          1.3,
          1.2,
          1.4,
          1.2,
          1,
          1.3,
          1.2,
          1.3,
          1.3,
          1.1,
          1.3
        ],
        [
          "virginica",
          2.5,
          1.9,
          2.1,
          1.8,
          2.2,
          2.1,
          1.7,
          1.8,
          1.8,
          2.5,
          2,
          1.9,
          2.1,
          2,
          2.4,
          2.3,
          1.8,
          2.2,
          2.3,
          1.5,
          2.3,
          2,
          2,
          1.8,
          2.1,
          1.8,
          1.8,
          1.8,
          2.1,
          1.6,
          1.9,
          2,
          2.2,
          1.5,
          1.4,
          2.3,
          2.4,
          1.8,
          1.8,
          2.1,
          2.4,
          2.3,
          1.9,
          2.3,
          2.5,
          2.3,
          1.9,
          2,
          2.3,
          1.8
        ]
      ]
    });
  }, 2e3);
  setTimeout(() => {
    billboard.unload({ ids: "data1" });
    billboard.unload({ ids: "data2" });
  }, 6500);
};
var pieSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$3,
  onReady: onReady$2
});
const options$2 = {
  data: {
    columns: [
      ["data1", 30],
      ["data2", 120]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple,
      setosa: themeColors.orange,
      versicolor: themeColors.purple,
      virginica: themeColors.success
    },
    type: donut(),
    onclick(d, element) {
      console.log("[donutSimple] onclick", d, element);
    },
    onover(d, element) {
      console.log("[donutSimple] onover", d, element);
    },
    onout(d, element) {
      console.log("[donutSimple] onout", d, element);
    }
  },
  donut: {
    title: "\u0639\u0646\u0648\u0627\u0646 \u062F\u0627\u062E\u0644\u06CC"
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u067E\u06CC\u0631\u0627\u0634\u06A9\u06CC",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady$1 = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [
        [
          "setosa",
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.3,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.1,
          0.1,
          0.2,
          0.4,
          0.4,
          0.3,
          0.3,
          0.3,
          0.2,
          0.4,
          0.2,
          0.5,
          0.2,
          0.2,
          0.4,
          0.2,
          0.2,
          0.2,
          0.2,
          0.4,
          0.1,
          0.2,
          0.2,
          0.2,
          0.2,
          0.1,
          0.2,
          0.2,
          0.3,
          0.3,
          0.2,
          0.6,
          0.4,
          0.3,
          0.2,
          0.2,
          0.2,
          0.2
        ],
        [
          "versicolor",
          1.4,
          1.5,
          1.5,
          1.3,
          1.5,
          1.3,
          1.6,
          1,
          1.3,
          1.4,
          1,
          1.5,
          1,
          1.4,
          1.3,
          1.4,
          1.5,
          1,
          1.5,
          1.1,
          1.8,
          1.3,
          1.5,
          1.2,
          1.3,
          1.4,
          1.4,
          1.7,
          1.5,
          1,
          1.1,
          1,
          1.2,
          1.6,
          1.5,
          1.6,
          1.5,
          1.3,
          1.3,
          1.3,
          1.2,
          1.4,
          1.2,
          1,
          1.3,
          1.2,
          1.3,
          1.3,
          1.1,
          1.3
        ],
        [
          "virginica",
          2.5,
          1.9,
          2.1,
          1.8,
          2.2,
          2.1,
          1.7,
          1.8,
          1.8,
          2.5,
          2,
          1.9,
          2.1,
          2,
          2.4,
          2.3,
          1.8,
          2.2,
          2.3,
          1.5,
          2.3,
          2,
          2,
          1.8,
          2.1,
          1.8,
          1.8,
          1.8,
          2.1,
          1.6,
          1.9,
          2,
          2.2,
          1.5,
          1.4,
          2.3,
          2.4,
          1.8,
          1.8,
          2.1,
          2.4,
          2.3,
          1.9,
          2.3,
          2.5,
          2.3,
          1.9,
          2,
          2.3,
          1.8
        ]
      ]
    });
  }, 2e3);
  setTimeout(() => {
    billboard.unload({ ids: "data1" });
    billboard.unload({ ids: "data2" });
  }, 6500);
};
var donutSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$2,
  onReady: onReady$1
});
const options$1 = {
  data: {
    columns: [["data", 91.4]],
    type: gauge(),
    onclick(d, element) {
      console.log("[gaugeSimple] onclick", d, element);
    },
    onover(d, element) {
      console.log("[gaugeSimple] onover", d, element);
    },
    onout(d, element) {
      console.log("[gaugeSimple] onout", d, element);
    }
  },
  gauge: {},
  color: {
    pattern: [
      themeColors.accent,
      themeColors.info,
      themeColors.primary,
      themeColors.purple
    ],
    threshold: {
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 \u06AF\u06CC\u0631\u06CC",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
const onReady = (billboard) => {
  setTimeout(() => {
    billboard.load({
      columns: [["data", 10]]
    });
  }, 1e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 50]]
    });
  }, 2e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 70]]
    });
  }, 3e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 0]]
    });
  }, 4e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 100]]
    });
  }, 5e3);
};
var gaugeSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options: options$1,
  onReady
});
const options = {
  data: {
    x: "x",
    columns: [
      ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
      ["data1", 330, 350, 200, 380, 150],
      ["data2", 130, 100, 30, 200, 80],
      ["data3", 230, 153, 85, 300, 250]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info,
      data4: themeColors.purple
    },
    type: radar(),
    labels: true
  },
  radar: {
    axis: {
      max: 400
    },
    level: {
      depth: 4
    },
    direction: {
      clockwise: true
    }
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "\u0646\u0645\u0648\u062F\u0627\u0631 \u0631\u0627\u062F\u0627\u0631",
    position: "right",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
var radarSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options
});
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-6" };
const _hoisted_3 = { class: "s-card" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = { class: "s-card" };
const _hoisted_6 = { class: "column is-6" };
const _hoisted_7 = { class: "s-card" };
const _hoisted_8 = { class: "column is-6" };
const _hoisted_9 = { class: "s-card" };
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = { class: "s-card" };
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = { class: "s-card" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = { class: "s-card" };
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = { class: "s-card" };
const _hoisted_18 = { class: "column is-6" };
const _hoisted_19 = { class: "s-card" };
const _hoisted_20 = { class: "column is-6" };
const _hoisted_21 = { class: "s-card" };
const _hoisted_22 = { class: "column is-6" };
const _hoisted_23 = { class: "s-card" };
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = { class: "s-card" };
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = { class: "s-card" };
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = { class: "s-card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VBillboardJS = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(genericLine).options,
              onReady: unref(genericLine).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(regionLine).options
            }, null, 8, ["options"])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(areaSimple).options
            }, null, 8, ["options"])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(areaLineRange).options,
              onReady: unref(areaLineRange).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(barSimple).options,
              onReady: unref(barSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(barStacked).options,
              onReady: unref(barStacked).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(stepSimple).options
            }, null, 8, ["options"])
          ])
        ]),
        createBaseVNode("div", _hoisted_16, [
          createBaseVNode("div", _hoisted_17, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(splineSimple).options
            }, null, 8, ["options"])
          ])
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(bubbleSimple).options,
              onReady: unref(bubbleSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(scatterSimple).options,
              onReady: unref(scatterSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(pieSimple).options,
              onReady: unref(pieSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(donutSimple).options,
              onReady: unref(donutSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(gaugeSimple).options,
              onReady: unref(gaugeSimple).onReady
            }, null, 8, ["options", "onReady"])
          ])
        ]),
        createBaseVNode("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createVNode(_component_VBillboardJS, {
              dir: "ltr",
              options: unref(radarSimple).options
            }, null, 8, ["options"])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
