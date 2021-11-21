var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { a8 as toRefs, r as ref, h as computed, ab as onMounted, ac as onUnmounted, a9 as watch, N as createBlock, a6 as mergeProps, o as openBlock } from "./vendor.9ec557a4.js";
function u(t) {
  return [null, void 0, false].indexOf(t) !== -1;
}
function c(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(e2) {
      return Object.getOwnPropertyDescriptor(t, e2).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function p(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? c(Object(r), true).forEach(function(e2) {
      f(t, e2, r[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e2) {
      Object.defineProperty(t, e2, Object.getOwnPropertyDescriptor(r, e2));
    });
  }
  return t;
}
function f(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
}
function d(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function h(t) {
  var e = { exports: {} };
  return t(e, e.exports), e.exports;
}
function m(t) {
  return (m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
    return typeof t2;
  } : function(t2) {
    return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
  })(t);
}
var v = h(function(t, e) {
  t.exports = function() {
    var t2 = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    function e2(t3) {
      return t3.split("").reverse().join("");
    }
    function r(t3, e3) {
      return t3.substring(0, e3.length) === e3;
    }
    function n(t3, e3) {
      return t3.slice(-1 * e3.length) === e3;
    }
    function i(t3, e3, r2) {
      if ((t3[e3] || t3[r2]) && t3[e3] === t3[r2])
        throw new Error(e3);
    }
    function o(t3) {
      return typeof t3 == "number" && isFinite(t3);
    }
    function a(t3, e3) {
      return t3 = t3.toString().split("e"), (+((t3 = (t3 = Math.round(+(t3[0] + "e" + (t3[1] ? +t3[1] + e3 : e3)))).toString().split("e"))[0] + "e" + (t3[1] ? +t3[1] - e3 : -e3))).toFixed(e3);
    }
    function s(t3, r2, n2, i2, s2, l2, u3, c3, p3, f2, d2, h2) {
      var m2, v2, g2, b2 = h2, y2 = "", S2 = "";
      return l2 && (h2 = l2(h2)), !!o(h2) && (t3 !== false && parseFloat(h2.toFixed(t3)) === 0 && (h2 = 0), h2 < 0 && (m2 = true, h2 = Math.abs(h2)), t3 !== false && (h2 = a(h2, t3)), (h2 = h2.toString()).indexOf(".") !== -1 ? (g2 = (v2 = h2.split("."))[0], n2 && (y2 = n2 + v2[1])) : g2 = h2, r2 && (g2 = e2(g2).match(/.{1,3}/g), g2 = e2(g2.join(e2(r2)))), m2 && c3 && (S2 += c3), i2 && (S2 += i2), m2 && p3 && (S2 += p3), S2 += g2, S2 += y2, s2 && (S2 += s2), f2 && (S2 = f2(S2, b2)), S2);
    }
    function l(t3, e3, i2, a2, s2, l2, u3, c3, p3, f2, d2, h2) {
      var m2, v2 = "";
      return d2 && (h2 = d2(h2)), !(!h2 || typeof h2 != "string") && (c3 && r(h2, c3) && (h2 = h2.replace(c3, ""), m2 = true), a2 && r(h2, a2) && (h2 = h2.replace(a2, "")), p3 && r(h2, p3) && (h2 = h2.replace(p3, ""), m2 = true), s2 && n(h2, s2) && (h2 = h2.slice(0, -1 * s2.length)), e3 && (h2 = h2.split(e3).join("")), i2 && (h2 = h2.replace(i2, ".")), m2 && (v2 += "-"), (v2 = (v2 += h2).replace(/[^0-9\.\-.]/g, "")) !== "" && (v2 = Number(v2), u3 && (v2 = u3(v2)), !!o(v2) && v2));
    }
    function u2(e3) {
      var r2, n2, o2, a2 = {};
      for (e3.suffix === void 0 && (e3.suffix = e3.postfix), r2 = 0; r2 < t2.length; r2 += 1)
        if ((o2 = e3[n2 = t2[r2]]) === void 0)
          n2 !== "negative" || a2.negativeBefore ? n2 === "mark" && a2.thousand !== "." ? a2[n2] = "." : a2[n2] = false : a2[n2] = "-";
        else if (n2 === "decimals") {
          if (!(o2 >= 0 && o2 < 8))
            throw new Error(n2);
          a2[n2] = o2;
        } else if (n2 === "encoder" || n2 === "decoder" || n2 === "edit" || n2 === "undo") {
          if (typeof o2 != "function")
            throw new Error(n2);
          a2[n2] = o2;
        } else {
          if (typeof o2 != "string")
            throw new Error(n2);
          a2[n2] = o2;
        }
      return i(a2, "mark", "thousand"), i(a2, "prefix", "negative"), i(a2, "prefix", "negativeBefore"), a2;
    }
    function c2(e3, r2, n2) {
      var i2, o2 = [];
      for (i2 = 0; i2 < t2.length; i2 += 1)
        o2.push(e3[t2[i2]]);
      return o2.push(n2), r2.apply("", o2);
    }
    function p2(t3) {
      if (!(this instanceof p2))
        return new p2(t3);
      m(t3) === "object" && (t3 = u2(t3), this.to = function(e3) {
        return c2(t3, s, e3);
      }, this.from = function(e3) {
        return c2(t3, l, e3);
      });
    }
    return p2;
  }();
});
function g(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(e2) {
      return Object.getOwnPropertyDescriptor(t, e2).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function b(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: true, configurable: true, writable: true }) : t[e] = r, t;
}
function y(e, n, i) {
  var o = toRefs(e), a = o.format, s = o.step, l = i.value, u2 = i.classList, c2 = computed(function() {
    return a && a.value ? typeof a.value == "function" ? { to: a.value } : v(function(t) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var r = arguments[e2] != null ? arguments[e2] : {};
        e2 % 2 ? g(Object(r), true).forEach(function(e3) {
          b(t, e3, r[e3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(e3) {
          Object.defineProperty(t, e3, Object.getOwnPropertyDescriptor(r, e3));
        });
      }
      return t;
    }({}, a.value)) : v({ decimals: s.value >= 0 ? 0 : 2 });
  });
  return { tooltipsFormat: computed(function() {
    return Array.isArray(l.value) ? l.value.map(function(t) {
      return c2.value;
    }) : c2.value;
  }), tooltipsMerge: function(t, e2, r) {
    var n2 = getComputedStyle(t).direction === "rtl", i2 = t.noUiSlider.options.direction === "rtl", o2 = t.noUiSlider.options.orientation === "vertical", a2 = t.noUiSlider.getTooltips(), s2 = t.noUiSlider.getOrigins();
    a2.forEach(function(t2, e3) {
      t2 && s2[e3].appendChild(t2);
    }), t.noUiSlider.on("update", function(t2, s3, l2, p2, f2) {
      var d2 = [[]], h2 = [[]], m2 = [[]], v2 = 0;
      a2[0] && (d2[0][0] = 0, h2[0][0] = f2[0], m2[0][0] = c2.value.to(parseFloat(t2[0])));
      for (var g2 = 1; g2 < t2.length; g2++)
        (!a2[g2] || t2[g2] - t2[g2 - 1] > e2) && (d2[++v2] = [], m2[v2] = [], h2[v2] = []), a2[g2] && (d2[v2].push(g2), m2[v2].push(c2.value.to(parseFloat(t2[g2]))), h2[v2].push(f2[g2]));
      d2.forEach(function(t3, e3) {
        for (var s4 = t3.length, l3 = 0; l3 < s4; l3++) {
          var c3 = t3[l3];
          if (l3 === s4 - 1) {
            var p3 = 0;
            h2[e3].forEach(function(t4) {
              p3 += 1e3 - 10 * t4;
            });
            var f3 = o2 ? "bottom" : "right", d3 = i2 ? 0 : s4 - 1, v3 = 1e3 - 10 * h2[e3][d3];
            p3 = (n2 && !o2 ? 100 : 0) + p3 / s4 - v3, a2[c3].innerHTML = m2[e3].join(r), a2[c3].style.display = "block", a2[c3].style[f3] = p3 + "%", a2[c3].classList.contains(u2.value.tooltipHidden) && a2[c3].classList.remove(u2.value.tooltipHidden);
          } else
            a2[c3].style.display = "none", a2[c3].classList.add(u2.value.tooltipHidden);
        }
      });
    });
  } };
}
function S(t) {
  return (S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t2) {
    return typeof t2;
  } : function(t2) {
    return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
  })(t);
}
var x = d(h(function(t, e) {
  !function(t2) {
    function e2(t3) {
      return r(t3) && typeof t3.from == "function";
    }
    function r(t3) {
      return S(t3) === "object" && typeof t3.to == "function";
    }
    function n(t3) {
      t3.parentElement.removeChild(t3);
    }
    function i(t3) {
      return t3 != null;
    }
    function o(t3) {
      t3.preventDefault();
    }
    function a(t3) {
      return t3.filter(function(t4) {
        return !this[t4] && (this[t4] = true);
      }, {});
    }
    function s(t3, e3) {
      return Math.round(t3 / e3) * e3;
    }
    function l(t3, e3) {
      var r2 = t3.getBoundingClientRect(), n2 = t3.ownerDocument, i2 = n2.documentElement, o2 = g2(n2);
      return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o2.x = 0), e3 ? r2.top + o2.y - i2.clientTop : r2.left + o2.x - i2.clientLeft;
    }
    function u2(t3) {
      return typeof t3 == "number" && !isNaN(t3) && isFinite(t3);
    }
    function c2(t3, e3, r2) {
      r2 > 0 && (h2(t3, e3), setTimeout(function() {
        m2(t3, e3);
      }, r2));
    }
    function p2(t3) {
      return Math.max(Math.min(t3, 100), 0);
    }
    function f2(t3) {
      return Array.isArray(t3) ? t3 : [t3];
    }
    function d2(t3) {
      var e3 = (t3 = String(t3)).split(".");
      return e3.length > 1 ? e3[1].length : 0;
    }
    function h2(t3, e3) {
      t3.classList && !/\s/.test(e3) ? t3.classList.add(e3) : t3.className += " " + e3;
    }
    function m2(t3, e3) {
      t3.classList && !/\s/.test(e3) ? t3.classList.remove(e3) : t3.className = t3.className.replace(new RegExp("(^|\\b)" + e3.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function v2(t3, e3) {
      return t3.classList ? t3.classList.contains(e3) : new RegExp("\\b" + e3 + "\\b").test(t3.className);
    }
    function g2(t3) {
      var e3 = window.pageXOffset !== void 0, r2 = (t3.compatMode || "") === "CSS1Compat";
      return { x: e3 ? window.pageXOffset : r2 ? t3.documentElement.scrollLeft : t3.body.scrollLeft, y: e3 ? window.pageYOffset : r2 ? t3.documentElement.scrollTop : t3.body.scrollTop };
    }
    function b2() {
      return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
    }
    function y2() {
      var t3 = false;
      try {
        var e3 = Object.defineProperty({}, "passive", { get: function() {
          t3 = true;
        } });
        window.addEventListener("test", null, e3);
      } catch (t4) {
      }
      return t3;
    }
    function x2() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function w2(t3, e3) {
      return 100 / (e3 - t3);
    }
    function P2(t3, e3, r2) {
      return 100 * e3 / (t3[r2 + 1] - t3[r2]);
    }
    function E(t3, e3) {
      return P2(t3, t3[0] < 0 ? e3 + Math.abs(t3[0]) : e3 - t3[0], 0);
    }
    function N(t3, e3) {
      return e3 * (t3[1] - t3[0]) / 100 + t3[0];
    }
    function C(t3, e3) {
      for (var r2 = 1; t3 >= e3[r2]; )
        r2 += 1;
      return r2;
    }
    function O(t3, e3, r2) {
      if (r2 >= t3.slice(-1)[0])
        return 100;
      var n2 = C(r2, t3), i2 = t3[n2 - 1], o2 = t3[n2], a2 = e3[n2 - 1], s2 = e3[n2];
      return a2 + E([i2, o2], r2) / w2(a2, s2);
    }
    function k(t3, e3, r2) {
      if (r2 >= 100)
        return t3.slice(-1)[0];
      var n2 = C(r2, e3), i2 = t3[n2 - 1], o2 = t3[n2], a2 = e3[n2 - 1];
      return N([i2, o2], (r2 - a2) * w2(a2, e3[n2]));
    }
    function V(t3, e3, r2, n2) {
      if (n2 === 100)
        return n2;
      var i2 = C(n2, t3), o2 = t3[i2 - 1], a2 = t3[i2];
      return r2 ? n2 - o2 > (a2 - o2) / 2 ? a2 : o2 : e3[i2 - 1] ? t3[i2 - 1] + s(n2 - t3[i2 - 1], e3[i2 - 1]) : n2;
    }
    var A, M;
    t2.PipsMode = void 0, (M = t2.PipsMode || (t2.PipsMode = {})).Range = "range", M.Steps = "steps", M.Positions = "positions", M.Count = "count", M.Values = "values", t2.PipsType = void 0, (A = t2.PipsType || (t2.PipsType = {}))[A.None = -1] = "None", A[A.NoValue = 0] = "NoValue", A[A.LargeValue = 1] = "LargeValue", A[A.SmallValue = 2] = "SmallValue";
    var j = function() {
      function t3(t4, e3, r2) {
        var n2;
        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [r2 || false], this.xNumSteps = [false], this.snap = e3;
        var i2 = [];
        for (Object.keys(t4).forEach(function(e4) {
          i2.push([f2(t4[e4]), e4]);
        }), i2.sort(function(t5, e4) {
          return t5[0][0] - e4[0][0];
        }), n2 = 0; n2 < i2.length; n2++)
          this.handleEntryPoint(i2[n2][1], i2[n2][0]);
        for (this.xNumSteps = this.xSteps.slice(0), n2 = 0; n2 < this.xNumSteps.length; n2++)
          this.handleStepPoint(n2, this.xNumSteps[n2]);
      }
      return t3.prototype.getDistance = function(t4) {
        var e3, r2 = [];
        for (e3 = 0; e3 < this.xNumSteps.length - 1; e3++) {
          var n2 = this.xNumSteps[e3];
          if (n2 && t4 / n2 % 1 != 0)
            throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of " + this.xPct[e3] + "% range must be divisible by step.");
          r2[e3] = P2(this.xVal, t4, e3);
        }
        return r2;
      }, t3.prototype.getAbsoluteDistance = function(t4, e3, r2) {
        var n2, i2 = 0;
        if (t4 < this.xPct[this.xPct.length - 1])
          for (; t4 > this.xPct[i2 + 1]; )
            i2++;
        else
          t4 === this.xPct[this.xPct.length - 1] && (i2 = this.xPct.length - 2);
        r2 || t4 !== this.xPct[i2 + 1] || i2++, e3 === null && (e3 = []);
        var o2 = 1, a2 = e3[i2], s2 = 0, l2 = 0, u3 = 0, c3 = 0;
        for (n2 = r2 ? (t4 - this.xPct[i2]) / (this.xPct[i2 + 1] - this.xPct[i2]) : (this.xPct[i2 + 1] - t4) / (this.xPct[i2 + 1] - this.xPct[i2]); a2 > 0; )
          s2 = this.xPct[i2 + 1 + c3] - this.xPct[i2 + c3], e3[i2 + c3] * o2 + 100 - 100 * n2 > 100 ? (l2 = s2 * n2, o2 = (a2 - 100 * n2) / e3[i2 + c3], n2 = 1) : (l2 = e3[i2 + c3] * s2 / 100 * o2, o2 = 0), r2 ? (u3 -= l2, this.xPct.length + c3 >= 1 && c3--) : (u3 += l2, this.xPct.length - c3 >= 1 && c3++), a2 = e3[i2 + c3] * o2;
        return t4 + u3;
      }, t3.prototype.toStepping = function(t4) {
        return t4 = O(this.xVal, this.xPct, t4);
      }, t3.prototype.fromStepping = function(t4) {
        return k(this.xVal, this.xPct, t4);
      }, t3.prototype.getStep = function(t4) {
        return t4 = V(this.xPct, this.xSteps, this.snap, t4);
      }, t3.prototype.getDefaultStep = function(t4, e3, r2) {
        var n2 = C(t4, this.xPct);
        return (t4 === 100 || e3 && t4 === this.xPct[n2 - 1]) && (n2 = Math.max(n2 - 1, 1)), (this.xVal[n2] - this.xVal[n2 - 1]) / r2;
      }, t3.prototype.getNearbySteps = function(t4) {
        var e3 = C(t4, this.xPct);
        return { stepBefore: { startValue: this.xVal[e3 - 2], step: this.xNumSteps[e3 - 2], highestStep: this.xHighestCompleteStep[e3 - 2] }, thisStep: { startValue: this.xVal[e3 - 1], step: this.xNumSteps[e3 - 1], highestStep: this.xHighestCompleteStep[e3 - 1] }, stepAfter: { startValue: this.xVal[e3], step: this.xNumSteps[e3], highestStep: this.xHighestCompleteStep[e3] } };
      }, t3.prototype.countStepDecimals = function() {
        var t4 = this.xNumSteps.map(d2);
        return Math.max.apply(null, t4);
      }, t3.prototype.hasNoSize = function() {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }, t3.prototype.convert = function(t4) {
        return this.getStep(this.toStepping(t4));
      }, t3.prototype.handleEntryPoint = function(t4, e3) {
        var r2;
        if (!u2(r2 = t4 === "min" ? 0 : t4 === "max" ? 100 : parseFloat(t4)) || !u2(e3[0]))
          throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(r2), this.xVal.push(e3[0]);
        var n2 = Number(e3[1]);
        r2 ? this.xSteps.push(!isNaN(n2) && n2) : isNaN(n2) || (this.xSteps[0] = n2), this.xHighestCompleteStep.push(0);
      }, t3.prototype.handleStepPoint = function(t4, e3) {
        if (e3)
          if (this.xVal[t4] !== this.xVal[t4 + 1]) {
            this.xSteps[t4] = P2([this.xVal[t4], this.xVal[t4 + 1]], e3, 0) / w2(this.xPct[t4], this.xPct[t4 + 1]);
            var r2 = (this.xVal[t4 + 1] - this.xVal[t4]) / this.xNumSteps[t4], n2 = Math.ceil(Number(r2.toFixed(3)) - 1), i2 = this.xVal[t4] + this.xNumSteps[t4] * n2;
            this.xHighestCompleteStep[t4] = i2;
          } else
            this.xSteps[t4] = this.xHighestCompleteStep[t4] = this.xVal[t4];
      }, t3;
    }(), U = { to: function(t3) {
      return t3 === void 0 ? "" : t3.toFixed(2);
    }, from: Number }, D = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, L = { tooltips: ".__tooltips", aria: ".__aria" };
    function T(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'step' is not numeric.");
      t3.singleStep = e3;
    }
    function F(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      t3.keyboardPageMultiplier = e3;
    }
    function z(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      t3.keyboardMultiplier = e3;
    }
    function H(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      t3.keyboardDefaultStep = e3;
    }
    function q(t3, e3) {
      if (S(e3) !== "object" || Array.isArray(e3))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (e3.min === void 0 || e3.max === void 0)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      t3.spectrum = new j(e3, t3.snap || false, t3.singleStep);
    }
    function R(t3, e3) {
      if (e3 = f2(e3), !Array.isArray(e3) || !e3.length)
        throw new Error("noUiSlider: 'start' option is incorrect.");
      t3.handles = e3.length, t3.start = e3;
    }
    function B(t3, e3) {
      if (typeof e3 != "boolean")
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
      t3.snap = e3;
    }
    function _(t3, e3) {
      if (typeof e3 != "boolean")
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
      t3.animate = e3;
    }
    function X(t3, e3) {
      if (typeof e3 != "number")
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      t3.animationDuration = e3;
    }
    function Y(t3, e3) {
      var r2, n2 = [false];
      if (e3 === "lower" ? e3 = [true, false] : e3 === "upper" && (e3 = [false, true]), e3 === true || e3 === false) {
        for (r2 = 1; r2 < t3.handles; r2++)
          n2.push(e3);
        n2.push(false);
      } else {
        if (!Array.isArray(e3) || !e3.length || e3.length !== t3.handles + 1)
          throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        n2 = e3;
      }
      t3.connect = n2;
    }
    function I(t3, e3) {
      switch (e3) {
        case "horizontal":
          t3.ort = 0;
          break;
        case "vertical":
          t3.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function $(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      e3 !== 0 && (t3.margin = t3.spectrum.getDistance(e3));
    }
    function W(t3, e3) {
      if (!u2(e3))
        throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (t3.limit = t3.spectrum.getDistance(e3), !t3.limit || t3.handles < 2)
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function G(t3, e3) {
      var r2;
      if (!u2(e3) && !Array.isArray(e3))
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(e3) && e3.length !== 2 && !u2(e3[0]) && !u2(e3[1]))
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (e3 !== 0) {
        for (Array.isArray(e3) || (e3 = [e3, e3]), t3.padding = [t3.spectrum.getDistance(e3[0]), t3.spectrum.getDistance(e3[1])], r2 = 0; r2 < t3.spectrum.xNumSteps.length - 1; r2++)
          if (t3.padding[0][r2] < 0 || t3.padding[1][r2] < 0)
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var n2 = e3[0] + e3[1], i2 = t3.spectrum.xVal[0];
        if (n2 / (t3.spectrum.xVal[t3.spectrum.xVal.length - 1] - i2) > 1)
          throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function J(t3, e3) {
      switch (e3) {
        case "ltr":
          t3.dir = 0;
          break;
        case "rtl":
          t3.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function K(t3, e3) {
      if (typeof e3 != "string")
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var r2 = e3.indexOf("tap") >= 0, n2 = e3.indexOf("drag") >= 0, i2 = e3.indexOf("fixed") >= 0, o2 = e3.indexOf("snap") >= 0, a2 = e3.indexOf("hover") >= 0, s2 = e3.indexOf("unconstrained") >= 0, l2 = e3.indexOf("drag-all") >= 0;
      if (i2) {
        if (t3.handles !== 2)
          throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        $(t3, t3.start[1] - t3.start[0]);
      }
      if (s2 && (t3.margin || t3.limit))
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      t3.events = { tap: r2 || o2, drag: n2, dragAll: l2, fixed: i2, snap: o2, hover: a2, unconstrained: s2 };
    }
    function Q(t3, e3) {
      if (e3 !== false)
        if (e3 === true || r(e3)) {
          t3.tooltips = [];
          for (var n2 = 0; n2 < t3.handles; n2++)
            t3.tooltips.push(e3);
        } else {
          if ((e3 = f2(e3)).length !== t3.handles)
            throw new Error("noUiSlider: must pass a formatter for all handles.");
          e3.forEach(function(t4) {
            if (typeof t4 != "boolean" && !r(t4))
              throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
          }), t3.tooltips = e3;
        }
    }
    function Z(t3, e3) {
      if (e3.length !== t3.handles)
        throw new Error("noUiSlider: must pass a attributes for all handles.");
      t3.handleAttributes = e3;
    }
    function tt(t3, e3) {
      if (!r(e3))
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      t3.ariaFormat = e3;
    }
    function et(t3, r2) {
      if (!e2(r2))
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      t3.format = r2;
    }
    function rt(t3, e3) {
      if (typeof e3 != "boolean")
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      t3.keyboardSupport = e3;
    }
    function nt(t3, e3) {
      t3.documentElement = e3;
    }
    function it(t3, e3) {
      if (typeof e3 != "string" && e3 !== false)
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      t3.cssPrefix = e3;
    }
    function ot(t3, e3) {
      if (S(e3) !== "object")
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
      typeof t3.cssPrefix == "string" ? (t3.cssClasses = {}, Object.keys(e3).forEach(function(r2) {
        t3.cssClasses[r2] = t3.cssPrefix + e3[r2];
      })) : t3.cssClasses = e3;
    }
    function at(t3) {
      var e3 = { margin: null, limit: null, padding: null, animate: true, animationDuration: 300, ariaFormat: U, format: U }, r2 = { step: { r: false, t: T }, keyboardPageMultiplier: { r: false, t: F }, keyboardMultiplier: { r: false, t: z }, keyboardDefaultStep: { r: false, t: H }, start: { r: true, t: R }, connect: { r: true, t: Y }, direction: { r: true, t: J }, snap: { r: false, t: B }, animate: { r: false, t: _ }, animationDuration: { r: false, t: X }, range: { r: true, t: q }, orientation: { r: false, t: I }, margin: { r: false, t: $ }, limit: { r: false, t: W }, padding: { r: false, t: G }, behaviour: { r: true, t: K }, ariaFormat: { r: false, t: tt }, format: { r: false, t: et }, tooltips: { r: false, t: Q }, keyboardSupport: { r: true, t: rt }, documentElement: { r: false, t: nt }, cssPrefix: { r: true, t: it }, cssClasses: { r: true, t: ot }, handleAttributes: { r: false, t: Z } }, n2 = { connect: false, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: true, cssPrefix: "noUi-", cssClasses: D, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
      t3.format && !t3.ariaFormat && (t3.ariaFormat = t3.format), Object.keys(r2).forEach(function(o3) {
        if (i(t3[o3]) || n2[o3] !== void 0)
          r2[o3].t(e3, i(t3[o3]) ? t3[o3] : n2[o3]);
        else if (r2[o3].r)
          throw new Error("noUiSlider: '" + o3 + "' is required.");
      }), e3.pips = t3.pips;
      var o2 = document.createElement("div"), a2 = o2.style.msTransform !== void 0, s2 = o2.style.transform !== void 0;
      e3.transformRule = s2 ? "transform" : a2 ? "msTransform" : "webkitTransform";
      var l2 = [["left", "top"], ["right", "bottom"]];
      return e3.style = l2[e3.dir][e3.ort], e3;
    }
    function st(e3, r2, s2) {
      var u3, d3, S2, w3, P3, E2 = b2(), N2 = x2() && y2(), C2 = e3, O2 = r2.spectrum, k2 = [], V2 = [], A2 = [], M2 = 0, j2 = {}, U2 = e3.ownerDocument, D2 = r2.documentElement || U2.documentElement, T2 = U2.body, F2 = U2.dir === "rtl" || r2.ort === 1 ? 0 : 100;
      function z2(t3, e4) {
        var r3 = U2.createElement("div");
        return e4 && h2(r3, e4), t3.appendChild(r3), r3;
      }
      function H2(t3, e4) {
        var n2 = z2(t3, r2.cssClasses.origin), i2 = z2(n2, r2.cssClasses.handle);
        if (z2(i2, r2.cssClasses.touchArea), i2.setAttribute("data-handle", String(e4)), r2.keyboardSupport && (i2.setAttribute("tabindex", "0"), i2.addEventListener("keydown", function(t4) {
          return dt(t4, e4);
        })), r2.handleAttributes !== void 0) {
          var o2 = r2.handleAttributes[e4];
          Object.keys(o2).forEach(function(t4) {
            i2.setAttribute(t4, o2[t4]);
          });
        }
        return i2.setAttribute("role", "slider"), i2.setAttribute("aria-orientation", r2.ort ? "vertical" : "horizontal"), e4 === 0 ? h2(i2, r2.cssClasses.handleLower) : e4 === r2.handles - 1 && h2(i2, r2.cssClasses.handleUpper), n2;
      }
      function q2(t3, e4) {
        return !!e4 && z2(t3, r2.cssClasses.connect);
      }
      function R2(t3, e4) {
        var n2 = z2(e4, r2.cssClasses.connects);
        d3 = [], (S2 = []).push(q2(n2, t3[0]));
        for (var i2 = 0; i2 < r2.handles; i2++)
          d3.push(H2(e4, i2)), A2[i2] = i2, S2.push(q2(n2, t3[i2 + 1]));
      }
      function B2(t3) {
        return h2(t3, r2.cssClasses.target), r2.dir === 0 ? h2(t3, r2.cssClasses.ltr) : h2(t3, r2.cssClasses.rtl), r2.ort === 0 ? h2(t3, r2.cssClasses.horizontal) : h2(t3, r2.cssClasses.vertical), h2(t3, getComputedStyle(t3).direction === "rtl" ? r2.cssClasses.textDirectionRtl : r2.cssClasses.textDirectionLtr), z2(t3, r2.cssClasses.base);
      }
      function _2(t3, e4) {
        return !(!r2.tooltips || !r2.tooltips[e4]) && z2(t3.firstChild, r2.cssClasses.tooltip);
      }
      function X2() {
        return C2.hasAttribute("disabled");
      }
      function Y2(t3) {
        return d3[t3].hasAttribute("disabled");
      }
      function I2() {
        P3 && (gt("update" + L.tooltips), P3.forEach(function(t3) {
          t3 && n(t3);
        }), P3 = null);
      }
      function $2() {
        I2(), P3 = d3.map(_2), mt("update" + L.tooltips, function(t3, e4, n2) {
          if (P3 && r2.tooltips && P3[e4] !== false) {
            var i2 = t3[e4];
            r2.tooltips[e4] !== true && (i2 = r2.tooltips[e4].to(n2[e4])), P3[e4].innerHTML = i2;
          }
        });
      }
      function W2() {
        gt("update" + L.aria), mt("update" + L.aria, function(t3, e4, n2, i2, o2) {
          A2.forEach(function(t4) {
            var e5 = d3[t4], i3 = yt(V2, t4, 0, true, true, true), a2 = yt(V2, t4, 100, true, true, true), s3 = o2[t4], l2 = String(r2.ariaFormat.to(n2[t4]));
            i3 = O2.fromStepping(i3).toFixed(1), a2 = O2.fromStepping(a2).toFixed(1), s3 = O2.fromStepping(s3).toFixed(1), e5.children[0].setAttribute("aria-valuemin", i3), e5.children[0].setAttribute("aria-valuemax", a2), e5.children[0].setAttribute("aria-valuenow", s3), e5.children[0].setAttribute("aria-valuetext", l2);
          });
        });
      }
      function G2(e4) {
        if (e4.mode === t2.PipsMode.Range || e4.mode === t2.PipsMode.Steps)
          return O2.xVal;
        if (e4.mode === t2.PipsMode.Count) {
          if (e4.values < 2)
            throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var r3 = e4.values - 1, n2 = 100 / r3, i2 = []; r3--; )
            i2[r3] = r3 * n2;
          return i2.push(100), J2(i2, e4.stepped);
        }
        return e4.mode === t2.PipsMode.Positions ? J2(e4.values, e4.stepped) : e4.mode === t2.PipsMode.Values ? e4.stepped ? e4.values.map(function(t3) {
          return O2.fromStepping(O2.getStep(O2.toStepping(t3)));
        }) : e4.values : [];
      }
      function J2(t3, e4) {
        return t3.map(function(t4) {
          return O2.fromStepping(e4 ? O2.getStep(t4) : t4);
        });
      }
      function K2(e4) {
        function r3(t3, e5) {
          return Number((t3 + e5).toFixed(7));
        }
        var n2 = G2(e4), i2 = {}, o2 = O2.xVal[0], s3 = O2.xVal[O2.xVal.length - 1], l2 = false, u4 = false, c3 = 0;
        return (n2 = a(n2.slice().sort(function(t3, e5) {
          return t3 - e5;
        })))[0] !== o2 && (n2.unshift(o2), l2 = true), n2[n2.length - 1] !== s3 && (n2.push(s3), u4 = true), n2.forEach(function(o3, a2) {
          var s4, p3, f3, d4, h3, m3, v3, g3, b3, y3, S3 = o3, x3 = n2[a2 + 1], w4 = e4.mode === t2.PipsMode.Steps;
          for (w4 && (s4 = O2.xNumSteps[a2]), s4 || (s4 = x3 - S3), x3 === void 0 && (x3 = S3), s4 = Math.max(s4, 1e-7), p3 = S3; p3 <= x3; p3 = r3(p3, s4)) {
            for (g3 = (h3 = (d4 = O2.toStepping(p3)) - c3) / (e4.density || 1), y3 = h3 / (b3 = Math.round(g3)), f3 = 1; f3 <= b3; f3 += 1)
              i2[(m3 = c3 + f3 * y3).toFixed(5)] = [O2.fromStepping(m3), 0];
            v3 = n2.indexOf(p3) > -1 ? t2.PipsType.LargeValue : w4 ? t2.PipsType.SmallValue : t2.PipsType.NoValue, !a2 && l2 && p3 !== x3 && (v3 = 0), p3 === x3 && u4 || (i2[d4.toFixed(5)] = [p3, v3]), c3 = d4;
          }
        }), i2;
      }
      function Q2(e4, n2, i2) {
        var o2, a2, s3 = U2.createElement("div"), l2 = ((o2 = {})[t2.PipsType.None] = "", o2[t2.PipsType.NoValue] = r2.cssClasses.valueNormal, o2[t2.PipsType.LargeValue] = r2.cssClasses.valueLarge, o2[t2.PipsType.SmallValue] = r2.cssClasses.valueSub, o2), u4 = ((a2 = {})[t2.PipsType.None] = "", a2[t2.PipsType.NoValue] = r2.cssClasses.markerNormal, a2[t2.PipsType.LargeValue] = r2.cssClasses.markerLarge, a2[t2.PipsType.SmallValue] = r2.cssClasses.markerSub, a2), c3 = [r2.cssClasses.valueHorizontal, r2.cssClasses.valueVertical], p3 = [r2.cssClasses.markerHorizontal, r2.cssClasses.markerVertical];
        function f3(t3, e5) {
          var n3 = e5 === r2.cssClasses.value, i3 = n3 ? l2 : u4;
          return e5 + " " + (n3 ? c3 : p3)[r2.ort] + " " + i3[t3];
        }
        function d4(e5, o3, a3) {
          if ((a3 = n2 ? n2(o3, a3) : a3) !== t2.PipsType.None) {
            var l3 = z2(s3, false);
            l3.className = f3(a3, r2.cssClasses.marker), l3.style[r2.style] = e5 + "%", a3 > t2.PipsType.NoValue && ((l3 = z2(s3, false)).className = f3(a3, r2.cssClasses.value), l3.setAttribute("data-value", String(o3)), l3.style[r2.style] = e5 + "%", l3.innerHTML = String(i2.to(o3)));
          }
        }
        return h2(s3, r2.cssClasses.pips), h2(s3, r2.ort === 0 ? r2.cssClasses.pipsHorizontal : r2.cssClasses.pipsVertical), Object.keys(e4).forEach(function(t3) {
          d4(t3, e4[t3][0], e4[t3][1]);
        }), s3;
      }
      function Z2() {
        w3 && (n(w3), w3 = null);
      }
      function tt2(t3) {
        Z2();
        var e4 = K2(t3), r3 = t3.filter, n2 = t3.format || { to: function(t4) {
          return String(Math.round(t4));
        } };
        return w3 = C2.appendChild(Q2(e4, r3, n2));
      }
      function et2() {
        var t3 = u3.getBoundingClientRect(), e4 = "offset" + ["Width", "Height"][r2.ort];
        return r2.ort === 0 ? t3.width || u3[e4] : t3.height || u3[e4];
      }
      function rt2(t3, e4, n2, i2) {
        var o2 = function(o3) {
          var a3 = nt2(o3, i2.pageOffset, i2.target || e4);
          return !!a3 && !(X2() && !i2.doNotReject) && !(v2(C2, r2.cssClasses.tap) && !i2.doNotReject) && !(t3 === E2.start && a3.buttons !== void 0 && a3.buttons > 1) && (!i2.hover || !a3.buttons) && (N2 || a3.preventDefault(), a3.calcPoint = a3.points[r2.ort], void n2(a3, i2));
        }, a2 = [];
        return t3.split(" ").forEach(function(t4) {
          e4.addEventListener(t4, o2, !!N2 && { passive: true }), a2.push([t4, o2]);
        }), a2;
      }
      function nt2(t3, e4, r3) {
        var n2 = t3.type.indexOf("touch") === 0, i2 = t3.type.indexOf("mouse") === 0, o2 = t3.type.indexOf("pointer") === 0, a2 = 0, s3 = 0;
        if (t3.type.indexOf("MSPointer") === 0 && (o2 = true), t3.type === "mousedown" && !t3.buttons && !t3.touches)
          return false;
        if (n2) {
          var l2 = function(e5) {
            var n3 = e5.target;
            return n3 === r3 || r3.contains(n3) || t3.composed && t3.composedPath().shift() === r3;
          };
          if (t3.type === "touchstart") {
            var u4 = Array.prototype.filter.call(t3.touches, l2);
            if (u4.length > 1)
              return false;
            a2 = u4[0].pageX, s3 = u4[0].pageY;
          } else {
            var c3 = Array.prototype.find.call(t3.changedTouches, l2);
            if (!c3)
              return false;
            a2 = c3.pageX, s3 = c3.pageY;
          }
        }
        return e4 = e4 || g2(U2), (i2 || o2) && (a2 = t3.clientX + e4.x, s3 = t3.clientY + e4.y), t3.pageOffset = e4, t3.points = [a2, s3], t3.cursor = i2 || o2, t3;
      }
      function it2(t3) {
        var e4 = 100 * (t3 - l(u3, r2.ort)) / et2();
        return e4 = p2(e4), r2.dir ? 100 - e4 : e4;
      }
      function ot2(t3) {
        var e4 = 100, r3 = false;
        return d3.forEach(function(n2, i2) {
          if (!Y2(i2)) {
            var o2 = V2[i2], a2 = Math.abs(o2 - t3);
            (a2 < e4 || a2 <= e4 && t3 > o2 || a2 === 100 && e4 === 100) && (r3 = i2, e4 = a2);
          }
        }), r3;
      }
      function st2(t3, e4) {
        t3.type === "mouseout" && t3.target.nodeName === "HTML" && t3.relatedTarget === null && ut2(t3, e4);
      }
      function lt2(t3, e4) {
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && t3.buttons === 0 && e4.buttonsProperty !== 0)
          return ut2(t3, e4);
        var n2 = (r2.dir ? -1 : 1) * (t3.calcPoint - e4.startCalcPoint);
        xt(n2 > 0, 100 * n2 / e4.baseSize, e4.locations, e4.handleNumbers, e4.connect);
      }
      function ut2(t3, e4) {
        e4.handle && (m2(e4.handle, r2.cssClasses.active), M2 -= 1), e4.listeners.forEach(function(t4) {
          D2.removeEventListener(t4[0], t4[1]);
        }), M2 === 0 && (m2(C2, r2.cssClasses.drag), Et(), t3.cursor && (T2.style.cursor = "", T2.removeEventListener("selectstart", o))), e4.handleNumbers.forEach(function(t4) {
          bt("change", t4), bt("set", t4), bt("end", t4);
        });
      }
      function ct(t3, e4) {
        if (!e4.handleNumbers.some(Y2)) {
          var n2;
          e4.handleNumbers.length === 1 && (n2 = d3[e4.handleNumbers[0]].children[0], M2 += 1, h2(n2, r2.cssClasses.active)), t3.stopPropagation();
          var i2 = [], a2 = rt2(E2.move, D2, lt2, { target: t3.target, handle: n2, connect: e4.connect, listeners: i2, startCalcPoint: t3.calcPoint, baseSize: et2(), pageOffset: t3.pageOffset, handleNumbers: e4.handleNumbers, buttonsProperty: t3.buttons, locations: V2.slice() }), s3 = rt2(E2.end, D2, ut2, { target: t3.target, handle: n2, listeners: i2, doNotReject: true, handleNumbers: e4.handleNumbers }), l2 = rt2("mouseout", D2, st2, { target: t3.target, handle: n2, listeners: i2, doNotReject: true, handleNumbers: e4.handleNumbers });
          i2.push.apply(i2, a2.concat(s3, l2)), t3.cursor && (T2.style.cursor = getComputedStyle(t3.target).cursor, d3.length > 1 && h2(C2, r2.cssClasses.drag), T2.addEventListener("selectstart", o, false)), e4.handleNumbers.forEach(function(t4) {
            bt("start", t4);
          });
        }
      }
      function pt(t3) {
        t3.stopPropagation();
        var e4 = it2(t3.calcPoint), n2 = ot2(e4);
        n2 !== false && (r2.events.snap || c2(C2, r2.cssClasses.tap, r2.animationDuration), Nt(n2, e4, true, true), Et(), bt("slide", n2, true), bt("update", n2, true), r2.events.snap ? ct(t3, { handleNumbers: [n2] }) : (bt("change", n2, true), bt("set", n2, true)));
      }
      function ft(t3) {
        var e4 = it2(t3.calcPoint), r3 = O2.getStep(e4), n2 = O2.fromStepping(r3);
        Object.keys(j2).forEach(function(t4) {
          t4.split(".")[0] === "hover" && j2[t4].forEach(function(t5) {
            t5.call(Ft, n2);
          });
        });
      }
      function dt(t3, e4) {
        if (X2() || Y2(e4))
          return false;
        var n2 = ["Left", "Right"], i2 = ["Down", "Up"], o2 = ["PageDown", "PageUp"], a2 = ["Home", "End"];
        r2.dir && !r2.ort ? n2.reverse() : r2.ort && !r2.dir && (i2.reverse(), o2.reverse());
        var s3, l2 = t3.key.replace("Arrow", ""), u4 = l2 === o2[0], c3 = l2 === o2[1], p3 = l2 === i2[0] || l2 === n2[0] || u4, f3 = l2 === i2[1] || l2 === n2[1] || c3, d4 = l2 === a2[0], h3 = l2 === a2[1];
        if (!(p3 || f3 || d4 || h3))
          return true;
        if (t3.preventDefault(), f3 || p3) {
          var m3 = p3 ? 0 : 1, v3 = Ut(e4)[m3];
          if (v3 === null)
            return false;
          v3 === false && (v3 = O2.getDefaultStep(V2[e4], p3, r2.keyboardDefaultStep)), v3 *= c3 || u4 ? r2.keyboardPageMultiplier : r2.keyboardMultiplier, v3 = Math.max(v3, 1e-7), v3 *= p3 ? -1 : 1, s3 = k2[e4] + v3;
        } else
          s3 = h3 ? r2.spectrum.xVal[r2.spectrum.xVal.length - 1] : r2.spectrum.xVal[0];
        return Nt(e4, O2.toStepping(s3), true, true), bt("slide", e4), bt("update", e4), bt("change", e4), bt("set", e4), false;
      }
      function ht(t3) {
        t3.fixed || d3.forEach(function(t4, e4) {
          rt2(E2.start, t4.children[0], ct, { handleNumbers: [e4] });
        }), t3.tap && rt2(E2.start, u3, pt, {}), t3.hover && rt2(E2.move, u3, ft, { hover: true }), t3.drag && S2.forEach(function(e4, n2) {
          if (e4 !== false && n2 !== 0 && n2 !== S2.length - 1) {
            var i2 = d3[n2 - 1], o2 = d3[n2], a2 = [e4], s3 = [i2, o2], l2 = [n2 - 1, n2];
            h2(e4, r2.cssClasses.draggable), t3.fixed && (a2.push(i2.children[0]), a2.push(o2.children[0])), t3.dragAll && (s3 = d3, l2 = A2), a2.forEach(function(t4) {
              rt2(E2.start, t4, ct, { handles: s3, handleNumbers: l2, connect: e4 });
            });
          }
        });
      }
      function mt(t3, e4) {
        j2[t3] = j2[t3] || [], j2[t3].push(e4), t3.split(".")[0] === "update" && d3.forEach(function(t4, e5) {
          bt("update", e5);
        });
      }
      function vt(t3) {
        return t3 === L.aria || t3 === L.tooltips;
      }
      function gt(t3) {
        var e4 = t3 && t3.split(".")[0], r3 = e4 ? t3.substring(e4.length) : t3;
        Object.keys(j2).forEach(function(t4) {
          var n2 = t4.split(".")[0], i2 = t4.substring(n2.length);
          e4 && e4 !== n2 || r3 && r3 !== i2 || vt(i2) && r3 !== i2 || delete j2[t4];
        });
      }
      function bt(t3, e4, n2) {
        Object.keys(j2).forEach(function(i2) {
          var o2 = i2.split(".")[0];
          t3 === o2 && j2[i2].forEach(function(t4) {
            t4.call(Ft, k2.map(r2.format.to), e4, k2.slice(), n2 || false, V2.slice(), Ft);
          });
        });
      }
      function yt(t3, e4, n2, i2, o2, a2) {
        var s3;
        return d3.length > 1 && !r2.events.unconstrained && (i2 && e4 > 0 && (s3 = O2.getAbsoluteDistance(t3[e4 - 1], r2.margin, false), n2 = Math.max(n2, s3)), o2 && e4 < d3.length - 1 && (s3 = O2.getAbsoluteDistance(t3[e4 + 1], r2.margin, true), n2 = Math.min(n2, s3))), d3.length > 1 && r2.limit && (i2 && e4 > 0 && (s3 = O2.getAbsoluteDistance(t3[e4 - 1], r2.limit, false), n2 = Math.min(n2, s3)), o2 && e4 < d3.length - 1 && (s3 = O2.getAbsoluteDistance(t3[e4 + 1], r2.limit, true), n2 = Math.max(n2, s3))), r2.padding && (e4 === 0 && (s3 = O2.getAbsoluteDistance(0, r2.padding[0], false), n2 = Math.max(n2, s3)), e4 === d3.length - 1 && (s3 = O2.getAbsoluteDistance(100, r2.padding[1], true), n2 = Math.min(n2, s3))), !((n2 = p2(n2 = O2.getStep(n2))) === t3[e4] && !a2) && n2;
      }
      function St(t3, e4) {
        var n2 = r2.ort;
        return (n2 ? e4 : t3) + ", " + (n2 ? t3 : e4);
      }
      function xt(t3, e4, r3, n2, i2) {
        var o2 = r3.slice(), a2 = n2[0], s3 = [!t3, t3], l2 = [t3, !t3];
        n2 = n2.slice(), t3 && n2.reverse(), n2.length > 1 ? n2.forEach(function(t4, r4) {
          var n3 = yt(o2, t4, o2[t4] + e4, s3[r4], l2[r4], false);
          n3 === false ? e4 = 0 : (e4 = n3 - o2[t4], o2[t4] = n3);
        }) : s3 = l2 = [true];
        var u4 = false;
        n2.forEach(function(t4, n3) {
          u4 = Nt(t4, r3[t4] + e4, s3[n3], l2[n3]) || u4;
        }), u4 && (n2.forEach(function(t4) {
          bt("update", t4), bt("slide", t4);
        }), i2 != null && bt("drag", a2));
      }
      function wt(t3, e4) {
        return r2.dir ? 100 - t3 - e4 : t3;
      }
      function Pt(t3, e4) {
        V2[t3] = e4, k2[t3] = O2.fromStepping(e4);
        var n2 = "translate(" + St(10 * (wt(e4, 0) - F2) + "%", "0") + ")";
        d3[t3].style[r2.transformRule] = n2, Ct(t3), Ct(t3 + 1);
      }
      function Et() {
        A2.forEach(function(t3) {
          var e4 = V2[t3] > 50 ? -1 : 1, r3 = 3 + (d3.length + e4 * t3);
          d3[t3].style.zIndex = String(r3);
        });
      }
      function Nt(t3, e4, r3, n2, i2) {
        return i2 || (e4 = yt(V2, t3, e4, r3, n2, false)), e4 !== false && (Pt(t3, e4), true);
      }
      function Ct(t3) {
        if (S2[t3]) {
          var e4 = 0, n2 = 100;
          t3 !== 0 && (e4 = V2[t3 - 1]), t3 !== S2.length - 1 && (n2 = V2[t3]);
          var i2 = n2 - e4, o2 = "translate(" + St(wt(e4, i2) + "%", "0") + ")", a2 = "scale(" + St(i2 / 100, "1") + ")";
          S2[t3].style[r2.transformRule] = o2 + " " + a2;
        }
      }
      function Ot(t3, e4) {
        return t3 === null || t3 === false || t3 === void 0 ? V2[e4] : (typeof t3 == "number" && (t3 = String(t3)), (t3 = r2.format.from(t3)) !== false && (t3 = O2.toStepping(t3)), t3 === false || isNaN(t3) ? V2[e4] : t3);
      }
      function kt(t3, e4, n2) {
        var i2 = f2(t3), o2 = V2[0] === void 0;
        e4 = e4 === void 0 || e4, r2.animate && !o2 && c2(C2, r2.cssClasses.tap, r2.animationDuration), A2.forEach(function(t4) {
          Nt(t4, Ot(i2[t4], t4), true, false, n2);
        });
        var a2 = A2.length === 1 ? 0 : 1;
        if (o2 && O2.hasNoSize() && (n2 = true, V2[0] = 0, A2.length > 1)) {
          var s3 = 100 / (A2.length - 1);
          A2.forEach(function(t4) {
            V2[t4] = t4 * s3;
          });
        }
        for (; a2 < A2.length; ++a2)
          A2.forEach(function(t4) {
            Nt(t4, V2[t4], true, true, n2);
          });
        Et(), A2.forEach(function(t4) {
          bt("update", t4), i2[t4] !== null && e4 && bt("set", t4);
        });
      }
      function Vt(t3) {
        kt(r2.start, t3);
      }
      function At(t3, e4, r3, n2) {
        if (!((t3 = Number(t3)) >= 0 && t3 < A2.length))
          throw new Error("noUiSlider: invalid handle number, got: " + t3);
        Nt(t3, Ot(e4, t3), true, true, n2), bt("update", t3), r3 && bt("set", t3);
      }
      function Mt(t3) {
        if (t3 === void 0 && (t3 = false), t3)
          return k2.length === 1 ? k2[0] : k2.slice(0);
        var e4 = k2.map(r2.format.to);
        return e4.length === 1 ? e4[0] : e4;
      }
      function jt() {
        for (gt(L.aria), gt(L.tooltips), Object.keys(r2.cssClasses).forEach(function(t3) {
          m2(C2, r2.cssClasses[t3]);
        }); C2.firstChild; )
          C2.removeChild(C2.firstChild);
        delete C2.noUiSlider;
      }
      function Ut(t3) {
        var e4 = V2[t3], n2 = O2.getNearbySteps(e4), i2 = k2[t3], o2 = n2.thisStep.step, a2 = null;
        if (r2.snap)
          return [i2 - n2.stepBefore.startValue || null, n2.stepAfter.startValue - i2 || null];
        o2 !== false && i2 + o2 > n2.stepAfter.startValue && (o2 = n2.stepAfter.startValue - i2), a2 = i2 > n2.thisStep.startValue ? n2.thisStep.step : n2.stepBefore.step !== false && i2 - n2.stepBefore.highestStep, e4 === 100 ? o2 = null : e4 === 0 && (a2 = null);
        var s3 = O2.countStepDecimals();
        return o2 !== null && o2 !== false && (o2 = Number(o2.toFixed(s3))), a2 !== null && a2 !== false && (a2 = Number(a2.toFixed(s3))), [a2, o2];
      }
      function Dt() {
        return A2.map(Ut);
      }
      function Lt(t3, e4) {
        var n2 = Mt(), o2 = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        o2.forEach(function(e5) {
          t3[e5] !== void 0 && (s2[e5] = t3[e5]);
        });
        var a2 = at(s2);
        o2.forEach(function(e5) {
          t3[e5] !== void 0 && (r2[e5] = a2[e5]);
        }), O2 = a2.spectrum, r2.margin = a2.margin, r2.limit = a2.limit, r2.padding = a2.padding, r2.pips ? tt2(r2.pips) : Z2(), r2.tooltips ? $2() : I2(), V2 = [], kt(i(t3.start) ? t3.start : n2, e4);
      }
      function Tt() {
        u3 = B2(C2), R2(r2.connect, u3), ht(r2.events), kt(r2.start), r2.pips && tt2(r2.pips), r2.tooltips && $2(), W2();
      }
      Tt();
      var Ft = { destroy: jt, steps: Dt, on: mt, off: gt, get: Mt, set: kt, setHandle: At, reset: Vt, __moveHandles: function(t3, e4, r3) {
        xt(t3, e4, V2, r3);
      }, options: s2, updateOptions: Lt, target: C2, removePips: Z2, removeTooltips: I2, getPositions: function() {
        return V2.slice();
      }, getTooltips: function() {
        return P3;
      }, getOrigins: function() {
        return d3;
      }, pips: tt2 };
      return Ft;
    }
    function lt(t3, e3) {
      if (!t3 || !t3.nodeName)
        throw new Error("noUiSlider: create requires a single element, got: " + t3);
      if (t3.noUiSlider)
        throw new Error("noUiSlider: Slider was already initialized.");
      var r2 = st(t3, at(e3), e3);
      return t3.noUiSlider = r2, r2;
    }
    var ut = { __spectrum: j, cssClasses: D, create: lt };
    t2.create = lt, t2.cssClasses = D, t2.default = ut, Object.defineProperty(t2, "__esModule", { value: true });
  }(e);
}));
function w(t, e) {
  var r = e.slice().sort();
  return t.length === e.length && t.slice().sort().every(function(t2, e2) {
    return t2 === r[e2];
  });
}
var P = { name: "Slider", emits: ["input", "update:modelValue", "update", "change"], props: __spreadProps(__spreadValues({}, { value: { validator: function(t) {
  return (t2) => typeof t2 == "number" || t2 instanceof Array || t2 == null || t2 === false;
}, required: false }, modelValue: { validator: function(t) {
  return (t2) => typeof t2 == "number" || t2 instanceof Array || t2 == null || t2 === false;
}, required: false } }), { id: { type: [String, Number], required: false }, disabled: { type: Boolean, required: false, default: false }, min: { type: Number, required: false, default: 0 }, max: { type: Number, required: false, default: 100 }, step: { type: Number, required: false, default: 1 }, orientation: { type: String, required: false, default: "horizontal" }, direction: { type: String, required: false, default: "ltr" }, tooltips: { type: Boolean, required: false, default: true }, options: { type: Object, required: false, default: () => ({}) }, merge: { type: Number, required: false, default: -1 }, format: { type: [Object, Function, Boolean], required: false, default: null }, classes: { type: Object, required: false, default: () => ({}) }, showTooltip: { type: String, required: false, default: "always" }, tooltipPosition: { type: String, required: false, default: null } }), setup(a, s) {
  const l = function(r, n, i) {
    var o = toRefs(r), a2 = o.value, s2 = o.modelValue, l2 = n.expose !== void 0 ? s2 : a2, c3 = ref(l2.value);
    if (u(l2.value))
      throw new Error("Slider v-model must be a Number or Array");
    if (Array.isArray(l2.value) && l2.value.length == 0)
      throw new Error("Slider v-model must not be an empty array");
    return { value: l2, initialValue: c3 };
  }(a, s), c2 = function(e, n, i) {
    var o = toRefs(e), a2 = o.classes, s2 = o.showTooltip, l2 = o.tooltipPosition, u2 = o.orientation, c3 = computed(function() {
      return p({ target: "slider-target", focused: "slider-focused", tooltipFocus: "slider-tooltip-focus", tooltipDrag: "slider-tooltip-drag", ltr: "slider-ltr", rtl: "slider-rtl", horizontal: "slider-horizontal", vertical: "slider-vertical", textDirectionRtl: "slider-txt-dir-rtl", textDirectionLtr: "slider-txt-dir-ltr", base: "slider-base", connects: "slider-connects", connect: "slider-connect", origin: "slider-origin", handle: "slider-handle", handleUpper: "slider-handle-upper", handleLower: "slider-handle-lower", touchArea: "slider-touch-area", tooltip: "slider-tooltip", tooltipTop: "slider-tooltip-top", tooltipBottom: "slider-tooltip-bottom", tooltipLeft: "slider-tooltip-left", tooltipRight: "slider-tooltip-right", tooltipHidden: "slider-tooltip-hidden", active: "slider-active", draggable: "slider-draggable", tap: "slider-state-tap", drag: "slider-state-drag", pips: "slider-pips", pipsHorizontal: "slider-pips-horizontal", pipsVertical: "slider-pips-vertical", marker: "slider-marker", markerHorizontal: "slider-marker-horizontal", markerVertical: "slider-marker-vertical", markerNormal: "slider-marker-normal", markerLarge: "slider-marker-large", markerSub: "slider-marker-sub", value: "slider-value", valueHorizontal: "slider-value-horizontal", valueVertical: "slider-value-vertical", valueNormal: "slider-value-normal", valueLarge: "slider-value-large", valueSub: "slider-value-sub" }, a2.value);
    });
    return { classList: computed(function() {
      var t = p({}, c3.value);
      return s2.value !== "always" && (t.target += " ".concat(s2.value === "drag" ? t.tooltipDrag : t.tooltipFocus)), u2.value === "horizontal" && (t.tooltip += l2.value === "bottom" ? " ".concat(t.tooltipBottom) : " ".concat(t.tooltipTop)), u2.value === "vertical" && (t.tooltip += l2.value === "right" ? " ".concat(t.tooltipRight) : " ".concat(t.tooltipLeft)), t;
    }) };
  }(a), f2 = y(a, 0, { value: l.value, classList: c2.classList }), d2 = function(a2, s2, l2) {
    var c3 = toRefs(a2), p2 = c3.orientation, f3 = c3.direction, d3 = c3.tooltips, h2 = c3.step, m2 = c3.min, v2 = c3.max, g2 = c3.merge, b2 = c3.id, y2 = c3.disabled, S2 = c3.options, P2 = c3.classes, E = c3.format, N = l2.value, C = l2.initialValue, O = l2.tooltipsFormat, k = l2.tooltipsMerge, V = l2.classList, A = ref(null), M = ref(null), j = ref(false), U = computed(function() {
      var t = { cssPrefix: "", cssClasses: V.value, orientation: p2.value, direction: f3.value, tooltips: !!d3.value && O.value, connect: "lower", start: u(N.value) ? m2.value : N.value, range: { min: m2.value, max: v2.value } };
      return h2.value > 0 && (t.step = h2.value), Array.isArray(N.value) && (t.connect = true), t;
    }), D = computed(function() {
      var t = { id: b2 && b2.value ? b2.value : void 0 };
      return y2.value && (t.disabled = true), t;
    }), L = computed(function() {
      return Array.isArray(N.value);
    }), T = function() {
      var t = M.value.get();
      return Array.isArray(t) ? t.map(function(t2) {
        return parseFloat(t2);
      }) : parseFloat(t);
    }, F = function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      M.value.set(t, e);
    }, z = function(t) {
      s2.emit("input", t), s2.emit("update:modelValue", t), s2.emit("update", t);
    }, H = function() {
      M.value = x.create(A.value, Object.assign({}, U.value, S2.value)), d3.value && L.value && g2.value >= 0 && k(A.value, g2.value, " - "), M.value.on("set", function(t) {
        s2.emit("change", T());
      }), M.value.on("update", function(t) {
        if (j.value) {
          var e = T();
          L.value && w(N.value, e) || !L.value && N.value == e ? s2.emit("update", e) : z(e);
        }
      }), A.value.querySelectorAll("[data-handle]").forEach(function(t) {
        t.onblur = function() {
          V.value.focused.split(" ").forEach(function(t2) {
            A.value.classList.remove(t2);
          });
        }, t.onfocus = function() {
          V.value.focused.split(" ").forEach(function(t2) {
            A.value.classList.add(t2);
          });
        };
      }), j.value = true;
    }, q = function() {
      M.value.off(), M.value.destroy(), M.value = null;
    }, R = function(t, e) {
      j.value = false, q(), H();
    };
    return onMounted(H), onUnmounted(q), watch(L, R, { immediate: false }), watch(m2, R, { immediate: false }), watch(v2, R, { immediate: false }), watch(h2, R, { immediate: false }), watch(p2, R, { immediate: false }), watch(f3, R, { immediate: false }), watch(d3, R, { immediate: false }), watch(E, R, { immediate: false, deep: true }), watch(g2, R, { immediate: false }), watch(S2, R, { immediate: false, deep: true }), watch(P2, R, { immediate: false, deep: true }), watch(N, function(t) {
      u(t) ? F(m2.value, false) : (L.value && !w(t, T()) || !L.value && t != T()) && F(t, false);
    }, { deep: true }), { slider: A, slider$: M, isRange: L, sliderProps: D, init: H, destroy: q, refresh: R, update: F, reset: function() {
      z(C.value);
    } };
  }(a, s, { value: l.value, initialValue: l.initialValue, tooltipsFormat: f2.tooltipsFormat, tooltipsMerge: f2.tooltipsMerge, classList: c2.classList });
  return __spreadValues(__spreadValues(__spreadValues({}, c2), f2), d2);
} };
P.render = function(t, e, r, n, i, o) {
  return openBlock(), createBlock("div", mergeProps(t.sliderProps, { ref: "slider" }), null, 16);
}, P.__file = "src/Slider.vue";
export { P as default };
