import { d as defineComponent, r as ref, h as computed, am as watchPostEffect, o as openBlock, b as createElementBlock, t as unref } from "./vendor.9ec557a4.js";
function createSvgElement(tag, attrs) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const key of Object.keys(attrs)) {
    e.setAttribute(key, attrs[key]);
  }
  return e;
}
function drawBar(el, data, opts) {
  var _a, _b, _c;
  const values = data;
  const max = Math.max(...opts.max === void 0 ? values : values.concat(opts.max));
  const min = Math.min(...opts.min === void 0 ? values : values.concat(opts.min));
  const rect = el.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const diff = max - min;
  const padding = (_a = opts.padding) != null ? _a : 2;
  const xScale = (input) => {
    return input * width / values.length;
  };
  const yScale = (input) => {
    return height - (diff ? (input - min) / diff * height : 1);
  };
  for (let i = 0; i < values.length; i++) {
    const x = xScale(i + padding);
    const w = xScale(i + 1 - padding) - x;
    const value = values[i];
    const valueY = yScale(value);
    let y1 = valueY;
    let y2 = valueY;
    let h;
    if (!diff) {
      h = 1;
    } else if (value < 0) {
      y1 = yScale(Math.min(max, 0));
    } else {
      y2 = yScale(Math.max(min, 0));
    }
    h = y2 - y1;
    if (h === 0) {
      h = 1;
      if (max > 0 && diff) {
        y1--;
      }
    }
    let fill;
    if (typeof opts.fill === "string") {
      fill = opts.fill;
    } else if (Array.isArray(opts.fill)) {
      fill = (_c = (_b = opts.fill) == null ? void 0 : _b[i]) != null ? _c : opts.fill[0];
    } else if (typeof opts.fill === "function") {
      fill = opts.fill(i);
    }
    if (fill) {
      el.appendChild(createSvgElement("rect", {
        fill,
        x,
        y: y1,
        width: w,
        height: h
      }));
    }
  }
}
function drawLine(el, data, opts) {
  var _a, _b;
  const values = data;
  if (values.length === 1) {
    values.push(values[0]);
  }
  const max = Math.max(...opts.max === void 0 ? values : values.concat(opts.max));
  const min = Math.min(...opts.min === void 0 ? values : values.concat(opts.min));
  const rect = el.getBoundingClientRect();
  const strokeWidth = (_a = opts.strokeWidth) != null ? _a : 1;
  const width = rect.width;
  const height = rect.height - strokeWidth;
  const diff = max - min;
  const xScale = (input) => {
    return input * (width / (values.length - 1));
  };
  const yScale = (input) => {
    let y = height;
    if (diff) {
      y -= (input - min) / diff * height;
    }
    return y + strokeWidth / 2;
  };
  const zero = yScale(Math.max(min, 0));
  const coords = [0, zero];
  for (let i = 0; i < values.length; i++) {
    coords.push(xScale(i), yScale(values[i]));
  }
  coords.push(width, zero);
  let fill;
  if (typeof opts.fill === "string") {
    fill = opts.fill;
  } else if (Array.isArray(opts.fill)) {
    fill = (_b = opts.fill) == null ? void 0 : _b[0];
  } else if (typeof opts.fill === "function") {
    fill = opts.fill(0);
  }
  if (fill) {
    el.appendChild(createSvgElement("polygon", {
      fill,
      points: coords.join(" ")
    }));
  }
  if (strokeWidth) {
    el.appendChild(createSvgElement("polyline", {
      fill: "none",
      points: coords.slice(2, coords.length - 2).join(" "),
      stroke: opts.stroke,
      "stroke-width": strokeWidth,
      "stroke-linecap": "square"
    }));
  }
}
function drawPie(el, data, opts) {
  var _a, _b, _c;
  let values = data.map((n) => n > 0 ? n : 0);
  if (values.length === 2) {
    const v1 = values[0];
    const v2 = values[1];
    values = [v1, Math.max(0, v2 - v1)];
  }
  let i = 0;
  let length = values.length;
  let sum = 0;
  for (; i < length; i++) {
    sum += values[i];
  }
  if (!sum) {
    length = 2;
    sum = 1;
    values = [0, 1];
  }
  const rect = el.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy);
  let innerRadius = opts.innerRadius;
  if (opts.type === "donut" && !innerRadius) {
    innerRadius = radius * 0.5;
  }
  const pi = Math.PI;
  const scale = (value, rad) => {
    const radians = value / sum * pi * 2 - pi / 2;
    return [rad * Math.cos(radians) + cx, rad * Math.sin(radians) + cy];
  };
  let cumulative = 0;
  for (i = 0; i < length; i++) {
    const value = values[i];
    const portion = value / sum;
    let $node;
    if (portion === 0) {
      continue;
    }
    if (portion === 1) {
      if (innerRadius) {
        const x2 = cx - 0.01;
        const y1 = cy - radius;
        const y2 = cy - innerRadius;
        $node = createSvgElement("path", {
          d: [
            "M",
            cx,
            y1,
            "A",
            radius,
            radius,
            0,
            1,
            1,
            x2,
            y1,
            "L",
            x2,
            y2,
            "A",
            innerRadius,
            innerRadius,
            0,
            1,
            0,
            cx,
            y2
          ].join(" ")
        });
      } else {
        $node = createSvgElement("circle", {
          cx,
          cy,
          r: radius
        });
      }
    } else {
      const cumulativePlusValue = cumulative + value;
      let d = ["M"].concat(scale(cumulative, radius).map(String), "A", `${radius}`, `${radius}`, "0", portion > 0.5 ? "1" : "0", "1", scale(cumulativePlusValue, radius).map(String), "L");
      if (innerRadius) {
        d = d.concat(scale(cumulativePlusValue, innerRadius).map(String), "A", `${innerRadius}`, `${innerRadius}`, "0", portion > 0.5 ? "1" : "0", "0", scale(cumulative, innerRadius).map(String));
      } else {
        d.push(`${cx}`, `${cy}`);
      }
      cumulative += value;
      $node = createSvgElement("path", {
        d: d.join(" ")
      });
    }
    let fill;
    if (typeof opts.fill === "string") {
      fill = opts.fill;
    } else if (Array.isArray(opts.fill)) {
      fill = (_c = (_a = opts.fill) == null ? void 0 : _a[i]) != null ? _c : (_b = opts.fill) == null ? void 0 : _b[0];
    } else if (typeof opts.fill === "function") {
      fill = opts.fill(i);
    }
    if (fill) {
      $node.setAttribute("fill", fill);
    }
    el.appendChild($node);
  }
}
const _hoisted_1 = ["height", "width"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    values: { type: Array, required: true, default: () => [] },
    type: { type: null, required: true, default: "line" },
    min: { type: Number, required: false, default: void 0 },
    max: { type: Number, required: false, default: void 0 },
    radius: { type: Number, required: false, default: 8 },
    innerRadius: { type: Number, required: false, default: 5 },
    height: { type: Number, required: false, default: 16 },
    width: { type: Number, required: false, default: 16 },
    padding: { type: Number, required: false, default: 0.1 },
    stroke: { type: String, required: false, default: void 0 },
    strokeWidth: { type: Number, required: false, default: 1 },
    fill: { type: Array, required: false, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const svgElement = ref();
    const svgHeight = computed(() => {
      const height = props.height || 16;
      if (props.type === "pie" || props.type === "donut") {
        const diameter = props.radius * 2;
        return height || diameter;
      }
      return height;
    });
    const svgWidth = computed(() => {
      const width = props.width || 16;
      if (props.type === "pie" || props.type === "donut") {
        const diameter = props.radius * 2;
        return width || diameter;
      }
      return width;
    });
    watchPostEffect(() => {
      if (!svgElement.value) {
        return;
      }
      const element = svgElement.value;
      element.innerHTML = "";
      const opts = {
        type: props.type,
        height: props.height,
        width: props.width,
        fill: (idx) => {
          var _a;
          const f = (_a = props.fill) != null ? _a : [];
          return f[idx % f.length];
        }
      };
      switch (props.type) {
        case "bar":
          opts.min = props.min;
          opts.padding = props.padding;
          drawBar(element, props.values, opts);
          break;
        case "line":
          opts.min = props.min;
          opts.stroke = props.stroke;
          opts.strokeWidth = props.strokeWidth;
          drawLine(element, props.values, opts);
          break;
        case "pie":
          opts.radius = props.radius;
          opts.innerRadius = props.innerRadius;
          drawPie(element, props.values, opts);
          break;
        case "donut":
          opts.radius = props.radius;
          opts.innerRadius = props.innerRadius;
          drawPie(element, props.values, opts);
          break;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        ref: (_value, _refs) => {
          _refs["svgElement"] = _value;
          svgElement.value = _value;
        },
        xmlns: "http://www.w3.org/2000/svg",
        class: "peity",
        height: unref(svgHeight),
        width: unref(svgWidth)
      }, null, 8, _hoisted_1);
    };
  }
});
export { _sfc_main as _ };
