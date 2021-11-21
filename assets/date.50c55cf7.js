import { d as dayjs } from "./dayjs.min.9071635e.js";
import { at as commonjsGlobal } from "./vendor.9ec557a4.js";
var customParseFormat$1 = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^\s\d-_:/()]+/, o = {}, s = function(t2) {
      return (t2 = +t2) + (t2 > 68 ? 1900 : 2e3);
    };
    var a = function(t2) {
      return function(e2) {
        this[t2] = +e2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(t2) {
      (this.zone || (this.zone = {})).offset = function(t3) {
        if (!t3)
          return 0;
        if (t3 === "Z")
          return 0;
        var e2 = t3.match(/([+-]|\d\d)/g), n2 = 60 * e2[1] + (+e2[2] || 0);
        return n2 === 0 ? 0 : e2[0] === "+" ? -n2 : n2;
      }(t2);
    }], u = function(t2) {
      var e2 = o[t2];
      return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f));
    }, h = function(t2, e2) {
      var n2, r2 = o.meridiem;
      if (r2) {
        for (var i2 = 1; i2 <= 24; i2 += 1)
          if (t2.indexOf(r2(i2, 0, e2)) > -1) {
            n2 = i2 > 12;
            break;
          }
      } else
        n2 = t2 === (e2 ? "pm" : "PM");
      return n2;
    }, d = { A: [i, function(t2) {
      this.afternoon = h(t2, false);
    }], a: [i, function(t2) {
      this.afternoon = h(t2, true);
    }], S: [/\d/, function(t2) {
      this.milliseconds = 100 * +t2;
    }], SS: [n, function(t2) {
      this.milliseconds = 10 * +t2;
    }], SSS: [/\d{3}/, function(t2) {
      this.milliseconds = +t2;
    }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(t2) {
      var e2 = o.ordinal, n2 = t2.match(/\d+/);
      if (this.day = n2[0], e2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          e2(r2).replace(/\[|\]/g, "") === t2 && (this.day = r2);
    }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(t2) {
      var e2 = u("months"), n2 = (u("monthsShort") || e2.map(function(t3) {
        return t3.substr(0, 3);
      })).indexOf(t2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [i, function(t2) {
      var e2 = u("months").indexOf(t2) + 1;
      if (e2 < 1)
        throw new Error();
      this.month = e2 % 12 || e2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(t2) {
      this.year = s(t2);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    function c(n2) {
      var r2, i2;
      r2 = n2, i2 = o && o.formats;
      for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e2, n3, r3) {
        var o2 = r3 && r3.toUpperCase();
        return n3 || i2[r3] || t[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t2, e3, n4) {
          return e3 || n4.slice(1);
        });
      })).match(e), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
        var u2 = s2[f2], h2 = d[u2], c2 = h2 && h2[0], l = h2 && h2[1];
        s2[f2] = l ? { regex: c2, parser: l } : u2.replace(/^\[|\]$/g, "");
      }
      return function(t2) {
        for (var e2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
          var i3 = s2[n3];
          if (typeof i3 == "string")
            r3 += i3.length;
          else {
            var o2 = i3.regex, f3 = i3.parser, u3 = t2.substr(r3), h3 = o2.exec(u3)[0];
            f3.call(e2, h3), t2 = t2.replace(h3, "");
          }
        }
        return function(t3) {
          var e3 = t3.afternoon;
          if (e3 !== void 0) {
            var n4 = t3.hours;
            e3 ? n4 < 12 && (t3.hours += 12) : n4 === 12 && (t3.hours = 0), delete t3.afternoon;
          }
        }(e2), e2;
      };
    }
    return function(t2, e2, n2) {
      n2.p.customParseFormat = true, t2 && t2.parseTwoDigitYear && (s = t2.parseTwoDigitYear);
      var r2 = e2.prototype, i2 = r2.parse;
      r2.parse = function(t3) {
        var e3 = t3.date, r3 = t3.utc, s2 = t3.args;
        this.$u = r3;
        var a2 = s2[1];
        if (typeof a2 == "string") {
          var f2 = s2[2] === true, u2 = s2[3] === true, h2 = f2 || u2, d2 = s2[2];
          u2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(t4, e4, n3) {
            try {
              if (["x", "X"].indexOf(e4) > -1)
                return new Date((e4 === "X" ? 1e3 : 1) * t4);
              var r4 = c(e4)(t4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, u3 = r4.seconds, h3 = r4.milliseconds, d3 = r4.zone, l2 = new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
              i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
              var p = a3 || 0, v = f3 || 0, D = u3 || 0, g = h3 || 0;
              return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
            } catch (t5) {
              return new Date("");
            }
          }(e3, a2, r3), this.init(), d2 && d2 !== true && (this.$L = this.locale(d2).$L), h2 && e3 != this.format(a2) && (this.$d = new Date("")), o = {};
        } else if (a2 instanceof Array)
          for (var l = a2.length, m = 1; m <= l; m += 1) {
            s2[1] = a2[m - 1];
            var M = n2.apply(this, s2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === l && (this.$d = new Date(""));
          }
        else
          i2.call(this, t3);
      };
    };
  });
})(customParseFormat$1);
var customParseFormat = customParseFormat$1.exports;
dayjs.extend(customParseFormat);
const parseDate = (content, format) => {
  let date = false;
  if (format) {
    switch (format) {
      case "ISO_8601":
        date = content;
        break;
      case "RFC_2822":
        date = dayjs(content.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
        break;
      case "MYSQL":
        date = dayjs(content, "YYYY-MM-DD hh:mm:ss").unix();
        break;
      case "UNIX":
        date = dayjs(content).unix();
        break;
      default:
        date = dayjs(content, format).valueOf();
        break;
    }
  }
  return date;
};
export { parseDate };
