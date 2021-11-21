var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { d as defineComponent, r as ref, w as watchEffect, aa as nextTick, o as openBlock, b as createElementBlock } from "./vendor.9ec557a4.js";
var t0 = new Date(), t1 = new Date();
function newInterval(floori, offseti, count, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? new Date() : new Date(+date2)), date2;
  }
  interval2.floor = function(date2) {
    return floori(date2 = new Date(+date2)), date2;
  };
  interval2.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = function(date2) {
    var d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = function(date2, step2) {
    return offseti(date2 = new Date(+date2), step2 == null ? 1 : Math.floor(step2)), date2;
  };
  interval2.range = function(start2, stop, step2) {
    var range = [], previous;
    start2 = interval2.ceil(start2);
    step2 = step2 == null ? 1 : Math.floor(step2);
    if (!(start2 < stop) || !(step2 > 0))
      return range;
    do
      range.push(previous = new Date(+start2)), offseti(start2, step2), floori(start2);
    while (previous < start2 && start2 < stop);
    return range;
  };
  interval2.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step2) {
      if (date2 >= date2) {
        if (step2 < 0)
          while (++step2 <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step2 >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count) {
    interval2.count = function(start2, end) {
      t0.setTime(+start2), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval2.every = function(step2) {
      step2 = Math.floor(step2);
      return !isFinite(step2) || !(step2 > 0) ? null : !(step2 > 1) ? interval2 : interval2.filter(field ? function(d) {
        return field(d) % step2 === 0;
      } : function(d) {
        return interval2.count(0, d) % step2 === 0;
      });
    };
  }
  return interval2;
}
var millisecond = newInterval(function() {
}, function(date2, step2) {
  date2.setTime(+date2 + step2);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0))
    return null;
  if (!(k > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k) * k);
  }, function(date2, step2) {
    date2.setTime(+date2 + step2 * k);
  }, function(start2, end) {
    return (end - start2) / k;
  });
};
var millisecond$1 = millisecond;
const durationSecond = 1e3;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step2) {
  date2.setTime(+date2 + step2 * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var utcSecond = second;
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step2) {
  date2.setTime(+date2 + step2 * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var timeMinute = minute;
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step2) {
  date2.setTime(+date2 + step2 * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var timeHour = hour;
var day = newInterval((date2) => date2.setHours(0, 0, 0, 0), (date2, step2) => date2.setDate(date2.getDate() + step2), (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay, (date2) => date2.getDate() - 1);
var timeDay = day;
function weekday(i) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step2) {
    date2.setDate(date2.getDate() + step2 * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
weekday(2);
weekday(3);
var thursday = weekday(4);
weekday(5);
weekday(6);
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step2) {
  date2.setMonth(date2.getMonth() + step2);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var timeMonth = month;
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step2) {
  date2.setFullYear(date2.getFullYear() + step2);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step2) {
    date2.setFullYear(date2.getFullYear() + step2 * k);
  });
};
var timeYear = year;
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step2) {
  date2.setTime(+date2 + step2 * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute$1 = utcMinute;
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step2) {
  date2.setTime(+date2 + step2 * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour$1 = utcHour;
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step2) {
  date2.setUTCDate(date2.getUTCDate() + step2);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay$1 = utcDay;
function utcWeekday(i) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step2) {
    date2.setUTCDate(date2.getUTCDate() + step2 * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
utcWeekday(2);
utcWeekday(3);
var utcThursday = utcWeekday(4);
utcWeekday(5);
utcWeekday(6);
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step2) {
  date2.setUTCMonth(date2.getUTCMonth() + step2);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth$1 = utcMonth;
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step2) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step2);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step2) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step2 * k);
  });
};
var utcYear$1 = utcYear;
function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x2) => f(d) - x2;
    compare = ascendingComparator(f);
  }
  function left2(a, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x2) < 0)
        lo = mid + 1;
      else
        hi = mid;
    }
    return lo;
  }
  function right2(a, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x2) > 0)
        hi = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center2(a, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a.length;
    const i = left2(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function ascendingComparator(f) {
  return (d, x2) => ascending$1(f(d), x2);
}
function number$3(x2) {
  return x2 === null ? NaN : +x2;
}
const ascendingBisect = bisector(ascending$1);
const bisectRight = ascendingBisect.right;
bisector(number$3).center;
var bisect = bisectRight;
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start2, stop, count) {
  var reverse, i = -1, n, ticks2, step2;
  stop = +stop, start2 = +start2, count = +count;
  if (start2 === stop && count > 0)
    return [start2];
  if (reverse = stop < start2)
    n = start2, start2 = stop, stop = n;
  if ((step2 = tickIncrement(start2, stop, count)) === 0 || !isFinite(step2))
    return [];
  if (step2 > 0) {
    let r0 = Math.round(start2 / step2), r1 = Math.round(stop / step2);
    if (r0 * step2 < start2)
      ++r0;
    if (r1 * step2 > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) * step2;
  } else {
    step2 = -step2;
    let r0 = Math.round(start2 * step2), r1 = Math.round(stop * step2);
    if (r0 / step2 < start2)
      ++r0;
    if (r1 / step2 > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) / step2;
  }
  if (reverse)
    ticks2.reverse();
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  var step2 = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log(step2) / Math.LN10), error = step2 / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start2, stop, count) {
  var step0 = Math.abs(stop - start2) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start2 ? -step1 : step1;
}
function ticker(year2, month2, week, day2, hour2, minute2) {
  const tickIntervals = [
    [utcSecond, 1, durationSecond],
    [utcSecond, 5, 5 * durationSecond],
    [utcSecond, 15, 15 * durationSecond],
    [utcSecond, 30, 30 * durationSecond],
    [minute2, 1, durationMinute],
    [minute2, 5, 5 * durationMinute],
    [minute2, 15, 15 * durationMinute],
    [minute2, 30, 30 * durationMinute],
    [hour2, 1, durationHour],
    [hour2, 3, 3 * durationHour],
    [hour2, 6, 6 * durationHour],
    [hour2, 12, 12 * durationHour],
    [day2, 1, durationDay],
    [day2, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function ticks2(start2, stop, count) {
    const reverse = stop < start2;
    if (reverse)
      [start2, stop] = [stop, start2];
    const interval2 = count && typeof count.range === "function" ? count : tickInterval(start2, stop, count);
    const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count) {
    const target = Math.abs(stop - start2) / count;
    const i = bisector(([, , step3]) => step3).right(tickIntervals, target);
    if (i === tickIntervals.length)
      return year2.every(tickStep(start2 / durationYear, stop / durationYear, count));
    if (i === 0)
      return millisecond$1.every(Math.max(tickStep(start2, stop, count), 1));
    const [t, step2] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step2);
  }
  return [ticks2, tickInterval];
}
const [utcTicks, utcTickInterval] = ticker(utcYear$1, utcMonth$1, utcSunday, utcDay$1, utcHour$1, utcMinute$1);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, sunday, timeDay, timeHour, timeMinute);
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y3, m, d) {
  return { y: y3, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale$1(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear$1,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date))
        date2 = new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null)
            c = specifier.charAt(++i);
          else
            pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c])
            c = format2(date2, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay$1.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m)
        return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0)
          return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad$1(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad$1(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad$1(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad$1(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad$1(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad$1(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad$1(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad$1(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad$1(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p) {
  return pad$1(sunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad$1(thursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad$1(monday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear$1(d, p) {
  return pad$1(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad$1(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad$1(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
  return pad$1(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad$1(z / 60 | 0, "0", 2) + pad$1(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad$1(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad$1(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad$1(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad$1(1 + utcDay$1.count(utcYear$1(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad$1(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad$1(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad$1(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad$1(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad$1(utcSunday.count(utcYear$1(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad$1(utcThursday.count(utcYear$1(d), d) + (utcYear$1(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad$1(utcMonday.count(utcYear$1(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad$1(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad$1(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var locale$1;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  timeParse = locale$1.parse;
  utcFormat = locale$1.utcFormat;
  utcParse = locale$1.utcParse;
  return locale$1;
}
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array$1(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    var group = select2.apply(this, arguments);
    return group == null ? [] : array$1(group);
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return this.children;
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$3(x2) {
  return function() {
    return x2;
  };
}
function bindIndex(parent, group, enter, update, exit, data2) {
  var i = 0, node, groupLength = group.length, dataLength = data2.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data2[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data2[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data2, key) {
  var i, node, nodeByKeyValue = new Map(), groupLength = group.length, dataLength = data2.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data2[i], i, data2) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data2[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data2[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$3(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data2 = array$1(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data2.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data2, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null)
    update = onupdate(update);
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(selection2) {
  if (!(selection2 instanceof Selection$1))
    throw new Error("invalid merge");
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size2 = 0;
  for (const node of this)
    ++size2;
  return size2;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options2) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options2);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options2);
    o = { type: typename.type, name: typename.name, value, listener, options: options2 };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options2) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options2));
  return this;
}
function dispatchEvent(node, type2, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function selection_dispatch(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function sourceEvent(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent)
    event = sourceEvent2;
  return event;
}
function pointer(event, node) {
  event = sourceEvent(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point2 = svg.createSVGPoint();
      point2.x = event.clientX, point2.y = event.clientY;
      point2 = point2.matrixTransform(node.getScreenCTM().inverse());
      return [point2.x, point2.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
function selectAll(selector2) {
  return typeof selector2 === "string" ? new Selection$1([document.querySelectorAll(selector2)], [document.documentElement]) : new Selection$1([selector2 == null ? [] : array$1(selector2)], root);
}
var noop$1 = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _)
      copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop$1, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable(view) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent, true);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
var constant$2 = (x2) => () => x2;
function DragEvent(type2, {
  sourceEvent: sourceEvent2,
  subject,
  target,
  identifier,
  active,
  x: x2,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x2, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag$1() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    dragDisable(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type2, event2, touch2) {
      var p0 = p, n;
      switch (type2) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(type2, that, new DragEvent(type2, {
        sourceEvent: event2,
        subject: s,
        target: drag2,
        identifier,
        active: n,
        x: p[0] + dx,
        y: p[1] + dy,
        dx: p[0] - p0[0],
        dy: p[1] - p0[1],
        dispatch: dispatch2
      }), d);
    };
  }
  drag2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$2(!!_), drag2) : filter2;
  };
  drag2.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag2) : container;
  };
  drag2.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag2) : subject;
  };
  drag2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color$2, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color$2(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color$2(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend$1(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color$2(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max2)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend$1(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var constant$1 = (x2) => () => x2;
function linear$2(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y3) {
  return a = Math.pow(a, y3), b = Math.pow(b, y3) - a, y3 = 1 / y3, function(t) {
    return Math.pow(a + t * b, y3);
  };
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y3) : constant$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$2(a, d) : constant$1(isNaN(a) ? b : a);
}
var interpolateRgb = function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb$1(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1.gamma = rgbGamma;
  return rgb$1;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x2[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x2[i](t);
    return c;
  };
}
function date$1(a, b) {
  var d = new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color$2(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color$2 ? interpolateRgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
var degrees = 180 / Math.PI;
var identity$5 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$5 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$5;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$5;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale2(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale2(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t02, t12 = taskHead, t2, time2 = Infinity;
  while (t12) {
    if (t12._call) {
      if (time2 > t12._time)
        time2 = t12._time;
      t02 = t12, t12 = t12._next;
    } else {
      t2 = t12._next, t12._next = null;
      t12 = t02 ? t02._next = t2 : taskHead = t2;
    }
  }
  taskTail = t02;
  sleep(time2);
}
function sleep(time2) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity)
      timeout$1 = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    group,
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule2, 0, self2.time);
  function schedule2(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}
function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color$2 ? interpolateRgb : (c = color$2(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t02 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t02 = (i0 = i) && attrInterpolate(name, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set(this, id2).ease = v;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t02 = (i0 = i) && textInterpolate(i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size2 = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size2 === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size2 === 0)
      resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
const linear$1 = (t) => +t;
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}
var EOL = {}, EOF = {}, QUOTE = 34, NEWLINE = 10, RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object2 = objectConverter(columns);
  return function(row, i) {
    return f(object2(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}
function formatYear(year2) {
  return year2 < 0 ? "-" + pad(-year2, 6) : year2 > 9999 ? "+" + pad(year2, 6) : pad(year2, 4);
}
function formatDate(date2) {
  var hours = date2.getUTCHours(), minutes = date2.getUTCMinutes(), seconds = date2.getUTCSeconds(), milliseconds = date2.getUTCMilliseconds();
  return isNaN(date2) ? "Invalid Date" : formatYear(date2.getUTCFullYear()) + "-" + pad(date2.getUTCMonth() + 1, 2) + "-" + pad(date2.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}
function dsv(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text2, f) {
    var convert, columns, rows = parseRows(text2, function(row, i) {
      if (convert)
        return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text2, f) {
    var rows = [], N = text2.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text2.charCodeAt(N - 1) === NEWLINE)
      --N;
    if (text2.charCodeAt(N - 1) === RETURN)
      --N;
    function token() {
      if (eof)
        return EOF;
      if (eol)
        return eol = false, EOL;
      var i, j = I, c;
      if (text2.charCodeAt(j) === QUOTE) {
        while (I++ < N && text2.charCodeAt(I) !== QUOTE || text2.charCodeAt(++I) === QUOTE)
          ;
        if ((i = I) >= N)
          eof = true;
        else if ((c = text2.charCodeAt(I++)) === NEWLINE)
          eol = true;
        else if (c === RETURN) {
          eol = true;
          if (text2.charCodeAt(I) === NEWLINE)
            ++I;
        }
        return text2.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c = text2.charCodeAt(i = I++)) === NEWLINE)
          eol = true;
        else if (c === RETURN) {
          eol = true;
          if (text2.charCodeAt(I) === NEWLINE)
            ++I;
        } else if (c !== DELIMITER)
          continue;
        return text2.slice(j, i);
      }
      return eof = true, text2.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF)
        row.push(t), t = token();
      if (f && (row = f(row, n++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}
var csv = dsv(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var tsv = dsv("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
function initRange(domain2, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain2);
      break;
    default:
      this.range(range).domain(domain2);
      break;
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = new Map(), domain2 = [], range = [], unknown = implicit;
  function scale2(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit)
        return unknown;
      index.set(key, i = domain2.push(d));
    }
    return range[(i - 1) % range.length];
  }
  scale2.domain = function(_) {
    if (!arguments.length)
      return domain2.slice();
    domain2 = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key))
        continue;
      index.set(key, domain2.push(value));
    }
    return scale2;
  };
  scale2.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale2) : range.slice();
  };
  scale2.unknown = function(_) {
    return arguments.length ? (unknown = _, scale2) : unknown;
  };
  scale2.copy = function() {
    return ordinal(domain2, range).unknown(unknown);
  };
  initRange.apply(scale2, arguments);
  return scale2;
}
function constants(x2) {
  return function() {
    return x2;
  };
}
function number$2(x2) {
  return +x2;
}
var unit = [0, 1];
function identity$4(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain2, range, interpolate2) {
  var d0 = domain2[0], d1 = domain2[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain2, range, interpolate2) {
  var j = Math.min(domain2.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain2[j] < domain2[0]) {
    domain2 = domain2.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain2[i], domain2[i + 1]);
    r[i] = interpolate2(range[i], range[i + 1]);
  }
  return function(x2) {
    var i2 = bisect(domain2, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain2 = unit, range = unit, interpolate2 = interpolate$1, transform2, untransform, unknown, clamp = identity$4, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain2.length, range.length);
    if (clamp !== identity$4)
      clamp = clamper(domain2[0], domain2[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale2;
  }
  function scale2(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain2.map(transform2), range, interpolate2)))(transform2(clamp(x2)));
  }
  scale2.invert = function(y3) {
    return clamp(untransform((input || (input = piecewise(range, domain2.map(transform2), interpolateNumber)))(y3)));
  };
  scale2.domain = function(_) {
    return arguments.length ? (domain2 = Array.from(_, number$2), rescale()) : domain2.slice();
  };
  scale2.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale2.rangeRound = function(_) {
    return range = Array.from(_), interpolate2 = interpolateRound, rescale();
  };
  scale2.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$4, rescale()) : clamp !== identity$4;
  };
  scale2.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale2.unknown = function(_) {
    return arguments.length ? (unknown = _, scale2) : unknown;
  };
  return function(t, u) {
    transform2 = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity$4, identity$4);
}
function formatDecimal(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}
function exponent(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}
function formatRounded(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
var formatTypes = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded(x2 * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};
function identity$3(x2) {
  return x2;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$3 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$3 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes[type2])
      precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format$1;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format$1 = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step2) {
  return Math.max(0, -exponent(Math.abs(step2)));
}
function precisionPrefix(step2, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step2)));
}
function precisionRound(step2, max2) {
  step2 = Math.abs(step2), max2 = Math.abs(max2) - step2;
  return Math.max(0, exponent(max2) - exponent(step2)) + 1;
}
function tickFormat(start2, stop, count, specifier) {
  var step2 = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step2, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step2, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step2)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format$1(specifier);
}
function linearish(scale2) {
  var domain2 = scale2.domain;
  scale2.ticks = function(count) {
    var d = domain2();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale2.tickFormat = function(count, specifier) {
    var d = domain2();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale2.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain2();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step2;
    var maxIter = 10;
    if (stop < start2) {
      step2 = start2, start2 = stop, stop = step2;
      step2 = i0, i0 = i1, i1 = step2;
    }
    while (maxIter-- > 0) {
      step2 = tickIncrement(start2, stop, count);
      if (step2 === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain2(d);
      } else if (step2 > 0) {
        start2 = Math.floor(start2 / step2) * step2;
        stop = Math.ceil(stop / step2) * step2;
      } else if (step2 < 0) {
        start2 = Math.ceil(start2 * step2) / step2;
        stop = Math.floor(stop * step2) / step2;
      } else {
        break;
      }
      prestep = step2;
    }
    return scale2;
  };
  return scale2;
}
function linear() {
  var scale2 = continuous();
  scale2.copy = function() {
    return copy(scale2, linear());
  };
  initRange.apply(scale2, arguments);
  return linearish(scale2);
}
function nice(domain2, interval2) {
  domain2 = domain2.slice();
  var i0 = 0, i1 = domain2.length - 1, x0 = domain2[i0], x1 = domain2[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain2[i0] = interval2.floor(x0);
  domain2[i1] = interval2.ceil(x1);
  return domain2;
}
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x2) {
    return Math.pow(base, x2);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x2) {
    return Math.log(x2) / base;
  });
}
function reflect(f) {
  return function(x2) {
    return -f(-x2);
  };
}
function loggish(transform2) {
  var scale2 = transform2(transformLog, transformExp), domain2 = scale2.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain2()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform2(transformLogn, transformExpn);
    } else {
      transform2(transformLog, transformExp);
    }
    return scale2;
  }
  scale2.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale2.domain = function(_) {
    return arguments.length ? (domain2(_), rescale()) : domain2();
  };
  scale2.ticks = function(count) {
    var d = domain2(), u = d[0], v = d[d.length - 1], r;
    if (r = v < u)
      i = u, u = v, v = i;
    var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0)
        for (; i <= j; ++i) {
          for (k = 1, p = pows(i); k < base; ++k) {
            t = p * k;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k = base - 1, p = pows(i); k >= 1; --k) {
            t = p * k;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      if (z.length * 2 < n)
        z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale2.tickFormat = function(count, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format$1(specifier);
    if (count === Infinity)
      return specifier;
    if (count == null)
      count = 10;
    var k = Math.max(1, base * count / scale2.ticks().length);
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k ? specifier(d) : "";
    };
  };
  scale2.nice = function() {
    return domain2(nice(domain2(), {
      floor: function(x2) {
        return pows(Math.floor(logs(x2)));
      },
      ceil: function(x2) {
        return pows(Math.ceil(logs(x2)));
      }
    }));
  };
  return scale2;
}
function log() {
  var scale2 = loggish(transformer()).domain([1, 10]);
  scale2.copy = function() {
    return copy(scale2, log()).base(scale2.base());
  };
  initRange.apply(scale2, arguments);
  return scale2;
}
function transformSymlog(c) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c));
  };
}
function transformSymexp(c) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c;
  };
}
function symlogish(transform2) {
  var c = 1, scale2 = transform2(transformSymlog(c), transformSymexp(c));
  scale2.constant = function(_) {
    return arguments.length ? transform2(transformSymlog(c = +_), transformSymexp(c)) : c;
  };
  return linearish(scale2);
}
function symlog() {
  var scale2 = symlogish(transformer());
  scale2.copy = function() {
    return copy(scale2, symlog()).constant(scale2.constant());
  };
  return initRange.apply(scale2, arguments);
}
function date(t) {
  return new Date(t);
}
function number$1(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2) {
  var scale2 = continuous(), invert = scale2.invert, domain2 = scale2.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale2.invert = function(y3) {
    return new Date(invert(y3));
  };
  scale2.domain = function(_) {
    return arguments.length ? domain2(Array.from(_, number$1)) : domain2().map(date);
  };
  scale2.ticks = function(interval2) {
    var d = domain2();
    return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
  };
  scale2.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale2.nice = function(interval2) {
    var d = domain2();
    if (!interval2 || typeof interval2.range !== "function")
      interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain2(nice(d, interval2)) : scale2;
  };
  scale2.copy = function() {
    return copy(scale2, calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2));
  };
  return scale2;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, sunday, timeDay, timeHour, timeMinute, utcSecond, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear$1, utcMonth$1, utcSunday, utcDay$1, utcHour$1, utcMinute$1, utcSecond, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
const pi$1 = Math.PI, tau$1 = 2 * pi$1, epsilon$2 = 1e-6, tauEpsilon = tau$1 - epsilon$2;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x2, y3) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y3);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y3) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y3);
  },
  quadraticCurveTo: function(x1, y1, x2, y3) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y3);
  },
  bezierCurveTo: function(x1, y1, x2, y22, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y22 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y22, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y22 = +y22, r = +r;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon$2))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$2) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon$2) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y3, r, a0, a1, ccw) {
    x2 = +x2, y3 = +y3, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y3 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon$2 || Math.abs(this._y1 - y0) > epsilon$2) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau$1 + tau$1;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y3 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon$2) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi$1) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y3 + r * Math.sin(a1));
    }
  },
  rect: function(x2, y3, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y3) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
function constant(x2) {
  return function constant2() {
    return x2;
  };
}
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;
var epsilon$1 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi : Math.acos(x2);
}
function asin(x2) {
  return x2 >= 1 ? halfPi : x2 <= -1 ? -halfPi : Math.asin(x2);
}
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y22, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y22, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon$1)
    return;
  t = (x32 * (y0 - y22) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
  function arc2() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path();
    if (r1 < r0)
      r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon$1))
      context.moveTo(0, 0);
    else if (da > tau - epsilon$1) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$1) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon$1 && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t02, t12;
      if (rp > epsilon$1) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon$1)
          p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$1)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon$1) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }
      if (!(da1 > epsilon$1))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon$1) {
        t02 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t12 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc1 < rc)
          context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r1, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), !cw);
          context.arc(t12.cx, t12.cy, rc1, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon$1) || !(da0 > epsilon$1))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon$1) {
        t02 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t12 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc0 < rc)
          context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r0, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), cw);
          context.arc(t12.cx, t12.cy, rc0, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc2.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };
  arc2.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : innerRadius;
  };
  arc2.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : outerRadius;
  };
  arc2.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : cornerRadius;
  };
  arc2.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc2) : padRadius;
  };
  arc2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc2) : startAngle;
  };
  arc2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc2) : endAngle;
  };
  arc2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc2) : padAngle;
  };
  arc2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc2) : context;
  };
  return arc2;
}
function array(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y3);
        break;
    }
  }
};
function curveLinear(context) {
  return new Linear(context);
}
function x$1(p) {
  return p[0];
}
function y$1(p) {
  return p[1];
}
function line$1(x2, y3) {
  var defined = constant(true), context = null, curve = curveLinear, output = null;
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x$1 : constant(x2);
  y3 = typeof y3 === "function" ? y3 : y3 === void 0 ? y$1 : constant(y3);
  function line2(data2) {
    var i, n = (data2 = array(data2)).length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data2[i], i, data2)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x2(d, i, data2), +y3(d, i, data2));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant(+_), line2) : x2;
  };
  line2.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant(+_), line2) : y3;
  };
  line2.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line2) : defined;
  };
  line2.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line2) : curve;
  };
  line2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line2) : context;
  };
  return line2;
}
function area$1(x0, y0, y1) {
  var x1 = null, defined = constant(true), context = null, curve = curveLinear, output = null;
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x$1 : constant(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant(0) : constant(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y$1 : constant(+y1);
  function area2(data2) {
    var i, j, k, n = (data2 = array(data2)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data2[i], i, data2)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data2), y0z[i] = +y0(d, i, data2);
        output.point(x1 ? +x1(d, i, data2) : x0z[i], y1 ? +y1(d, i, data2) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line$1().defined(defined).curve(curve).context(context);
  }
  area2.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area2) : x0;
  };
  area2.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area2) : x0;
  };
  area2.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area2) : x1;
  };
  area2.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area2) : y0;
  };
  area2.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area2) : y0;
  };
  area2.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area2) : y1;
  };
  area2.lineX0 = area2.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area2.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area2.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area2.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area2) : defined;
  };
  area2.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area2) : curve;
  };
  area2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area2) : context;
  };
  return area2;
}
function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function identity$2(d) {
  return d;
}
function pie$1() {
  var value = identity$2, sortValues = descending, sort = null, startAngle = constant(0), endAngle = constant(tau), padAngle = constant(0);
  function pie2(data2) {
    var i, n = (data2 = array(data2)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data2[i], i, data2)) > 0) {
        sum += v;
      }
    }
    if (sortValues != null)
      index.sort(function(i2, j2) {
        return sortValues(arcs[i2], arcs[j2]);
      });
    else if (sort != null)
      index.sort(function(i2, j2) {
        return sort(data2[i2], data2[j2]);
      });
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data2[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie2.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie2) : value;
  };
  pie2.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie2) : sortValues;
  };
  pie2.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie2) : sort;
  };
  pie2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie2) : startAngle;
  };
  pie2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie2) : endAngle;
  };
  pie2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie2) : padAngle;
  };
  return pie2;
}
function noop() {
}
function point$3(that, x2, y3) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x2) / 6, (that._y0 + 4 * that._y1 + y3) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point$3(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point$3(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function curveBasis(context) {
  return new Basis(context);
}
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y3;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y3;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y3;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y3) / 6);
        break;
      default:
        point$3(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function curveBasisClosed(context) {
  return new BasisClosed(context);
}
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y3) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point$3(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function curveBasisOpen(context) {
  return new BasisOpen(context);
}
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y3 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x0 = x2[0], y0 = y3[0], dx = x2[j] - x0, dy = y3[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y3[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y3) {
    this._x.push(+x2);
    this._y.push(+y3);
  }
};
var curveBundle = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);
function point$2(that, x2, y3) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x2), that._y2 + that._k * (that._y1 - y3), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point$2(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y3;
        break;
      case 2:
        this._point = 3;
      default:
        point$2(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCardinal = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y3;
        break;
      default:
        point$2(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCardinalClosed = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$2(this, x2, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCardinalOpen = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);
function point$1(that, x2, y3) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon$1) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon$1) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y3 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point$1(this, x2, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCatmullRom = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y3;
        break;
      default:
        point$1(this, x2, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCatmullRomClosed = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point$1(this, x2, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var curveCatmullRomOpen = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    if (this._point)
      this._context.lineTo(x2, y3);
    else
      this._point = 1, this._context.moveTo(x2, y3);
  }
};
function curveLinearClosed(context) {
  return new LinearClosed(context);
}
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y22) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    var t12 = NaN;
    x2 = +x2, y3 = +y3;
    if (x2 === this._x1 && y3 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t12 = slope3(this, x2, y3)), t12);
        break;
      default:
        point(this, this._t0, t12 = slope3(this, x2, y3));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y3;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y3) {
  MonotoneX.prototype.point.call(this, y3, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y3) {
    this._context.moveTo(y3, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y3) {
    this._context.lineTo(y3, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y22, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y22, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y3 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y3[0]) : this._context.moveTo(x2[0], y3[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y3[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y3);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y3[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y3) {
    this._x.push(+x2);
    this._y.push(+y3);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i)
    a[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i)
    m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x2[i + 1] - a[i + 1];
  return [a, b];
}
function curveNatural(context) {
  return new Natural(context);
}
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y3) {
    x2 = +x2, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y3) : this._context.moveTo(x2, y3);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y3);
          this._context.lineTo(x2, y3);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y3);
        }
        break;
      }
    }
    this._x = x2, this._y = y3;
  }
};
function curveStep(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}
var slice = Array.prototype.slice;
function identity$1(x2) {
  return x2;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(x2) {
  return "translate(" + x2 + ",0)";
}
function translateY(y3) {
  return "translate(0," + y3 + ")";
}
function number(scale2) {
  return (d) => +scale2(d);
}
function center(scale2, offset) {
  offset = Math.max(0, scale2.bandwidth() - offset * 2) / 2;
  if (scale2.round())
    offset = Math.round(offset);
  return (d) => +scale2(d) + offset;
}
function entering() {
  return !this.__axis;
}
function axis$2(orient, scale2) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x2 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale2.ticks ? scale2.ticks.apply(scale2, tickArguments) : scale2.domain() : tickValues, format2 = tickFormat2 == null ? scale2.tickFormat ? scale2.tickFormat.apply(scale2, tickArguments) : identity$1 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale2.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale2.bandwidth ? center : number)(scale2.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale2).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line2 = tick.select("line"), text2 = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line2 = line2.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x2 + "2", k * tickSizeInner));
    text2 = text2.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x2, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line2 = line2.transition(context);
      text2 = text2.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d) + offset);
    });
    line2.attr(x2 + "2", k * tickSizeInner);
    text2.attr(x2, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale2 = _, axis2) : scale2;
  };
  axis2.ticks = function() {
    return tickArguments = slice.call(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisTop(scale2) {
  return axis$2(top, scale2);
}
function axisRight(scale2) {
  return axis$2(right, scale2);
}
function axisBottom(scale2) {
  return axis$2(bottom, scale2);
}
function axisLeft(scale2) {
  return axis$2(left, scale2);
}
function Transform(k, x2, y3) {
  this.k = k;
  this.x = x2;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x2, y3) {
    return x2 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y3);
  },
  apply: function(point2) {
    return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
/*!
* Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * 
 * billboard.js, JavaScript chart library
 * https://naver.github.io/billboard.js/
 * 
 * @version 3.1.5
*/
var CLASS = {
  arc: "bb-arc",
  arcLabelLine: "bb-arc-label-line",
  arcs: "bb-arcs",
  area: "bb-area",
  areas: "bb-areas",
  axis: "bb-axis",
  axisX: "bb-axis-x",
  axisXLabel: "bb-axis-x-label",
  axisY: "bb-axis-y",
  axisY2: "bb-axis-y2",
  axisY2Label: "bb-axis-y2-label",
  axisYLabel: "bb-axis-y-label",
  bar: "bb-bar",
  bars: "bb-bars",
  brush: "bb-brush",
  button: "bb-button",
  buttonZoomReset: "bb-zoom-reset",
  candlestick: "bb-candlestick",
  candlesticks: "bb-candlesticks",
  chart: "bb-chart",
  chartArc: "bb-chart-arc",
  chartArcs: "bb-chart-arcs",
  chartArcsBackground: "bb-chart-arcs-background",
  chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
  chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
  chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
  chartArcsTitle: "bb-chart-arcs-title",
  chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
  chartBar: "bb-chart-bar",
  chartBars: "bb-chart-bars",
  chartCandlestick: "bb-chart-candlestick",
  chartCandlesticks: "bb-chart-candlesticks",
  chartCircles: "bb-chart-circles",
  chartLine: "bb-chart-line",
  chartLines: "bb-chart-lines",
  chartRadar: "bb-chart-radar",
  chartRadars: "bb-chart-radars",
  chartText: "bb-chart-text",
  chartTexts: "bb-chart-texts",
  circle: "bb-circle",
  circles: "bb-circles",
  colorPattern: "bb-color-pattern",
  colorScale: "bb-colorscale",
  defocused: "bb-defocused",
  dragarea: "bb-dragarea",
  empty: "bb-empty",
  eventRect: "bb-event-rect",
  eventRects: "bb-event-rects",
  eventRectsMultiple: "bb-event-rects-multiple",
  eventRectsSingle: "bb-event-rects-single",
  focused: "bb-focused",
  gaugeValue: "bb-gauge-value",
  grid: "bb-grid",
  gridLines: "bb-grid-lines",
  legend: "bb-legend",
  legendBackground: "bb-legend-background",
  legendItem: "bb-legend-item",
  legendItemEvent: "bb-legend-item-event",
  legendItemFocused: "bb-legend-item-focused",
  legendItemHidden: "bb-legend-item-hidden",
  legendItemPoint: "bb-legend-item-point",
  legendItemTile: "bb-legend-item-tile",
  level: "bb-level",
  levels: "bb-levels",
  line: "bb-line",
  lines: "bb-lines",
  main: "bb-main",
  region: "bb-region",
  regions: "bb-regions",
  selectedCircle: "bb-selected-circle",
  selectedCircles: "bb-selected-circles",
  shape: "bb-shape",
  shapes: "bb-shapes",
  stanfordElements: "bb-stanford-elements",
  stanfordLine: "bb-stanford-line",
  stanfordLines: "bb-stanford-lines",
  stanfordRegion: "bb-stanford-region",
  stanfordRegions: "bb-stanford-regions",
  subchart: "bb-subchart",
  target: "bb-target",
  text: "bb-text",
  texts: "bb-texts",
  title: "bb-title",
  tooltip: "bb-tooltip",
  tooltipContainer: "bb-tooltip-container",
  tooltipName: "bb-tooltip-name",
  valueDown: "bb-value-down",
  valueUp: "bb-value-up",
  xgrid: "bb-xgrid",
  xgridFocus: "bb-xgrid-focus",
  xgridLine: "bb-xgrid-line",
  xgridLines: "bb-xgrid-lines",
  xgrids: "bb-xgrids",
  ygrid: "bb-ygrid",
  ygridFocus: "bb-ygrid-focus",
  ygridLine: "bb-ygrid-line",
  ygridLines: "bb-ygrid-lines",
  ygrids: "bb-ygrids",
  zoomBrush: "bb-zoom-brush",
  EXPANDED: "_expanded_",
  SELECTED: "_selected_",
  INCLUDED: "_included_",
  TextOverlapping: "text-overlapping"
};
var Element = function() {
  function Element2() {
    var element = {
      chart: null,
      main: null,
      svg: null,
      axis: {
        x: null,
        y: null,
        y2: null,
        subX: null
      },
      defs: null,
      tooltip: null,
      legend: null,
      title: null,
      subchart: {
        main: null,
        bar: null,
        line: null,
        area: null
      },
      arcs: null,
      bar: null,
      candlestick: null,
      line: null,
      area: null,
      circle: null,
      radar: null,
      text: null,
      grid: {
        main: null,
        x: null,
        y: null
      },
      gridLines: {
        main: null,
        x: null,
        y: null
      },
      region: {
        main: null,
        list: null
      },
      eventRect: null,
      zoomResetBtn: null
    };
    return element;
  }
  return Element2;
}();
var State = function() {
  function State2() {
    return {
      width: 0,
      width2: 0,
      height: 0,
      height2: 0,
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      margin2: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      margin3: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      arcWidth: 0,
      arcHeight: 0,
      xAxisHeight: 0,
      hasAxis: false,
      hasRadar: false,
      current: {
        width: 0,
        height: 0,
        dataMax: 0,
        maxTickWidths: {
          x: { size: 0, ticks: [], clipPath: 0, domain: "" },
          y: { size: 0, domain: "" },
          y2: { size: 0, domain: "" }
        },
        types: []
      },
      isLegendRight: false,
      isLegendInset: false,
      isLegendTop: false,
      isLegendLeft: false,
      legendStep: 0,
      legendItemWidth: 0,
      legendItemHeight: 0,
      legendHasRendered: false,
      eventReceiver: {
        currentIdx: -1,
        rect: {},
        data: [],
        coords: []
      },
      axis: {
        x: {
          padding: { left: 0, right: 0 },
          tickCount: 0
        }
      },
      rotatedPadding: {
        left: 30,
        right: 0,
        top: 5
      },
      withoutFadeIn: {},
      inputType: "",
      datetimeId: "",
      clip: {
        id: "",
        idXAxis: "",
        idYAxis: "",
        idXAxisTickTexts: "",
        idGrid: "",
        idSubchart: "",
        path: "",
        pathXAxis: "",
        pathYAxis: "",
        pathXAxisTickTexts: "",
        pathGrid: ""
      },
      event: null,
      dragStart: null,
      dragging: false,
      flowing: false,
      cancelClick: false,
      mouseover: false,
      rendered: false,
      transiting: false,
      redrawing: false,
      resizing: false,
      toggling: false,
      zooming: false,
      hasNegativeValue: false,
      hasPositiveValue: true,
      orgAreaOpacity: "0.2",
      hiddenTargetIds: [],
      hiddenLegendIds: [],
      focusedTargetIds: [],
      defocusedTargetIds: [],
      radius: 0,
      innerRadius: 0,
      outerRadius: void 0,
      innerRadiusRatio: 0,
      gaugeArcWidth: 0,
      radiusExpanded: 0,
      xgridAttr: {
        x1: null,
        x2: null,
        y1: null,
        y2: null
      }
    };
  }
  return State2;
}();
var classes = {
  element: Element,
  state: State
};
var Store = function() {
  function Store2() {
    var _this = this;
    Object.keys(classes).forEach(function(v) {
      _this[v] = new classes[v]();
    });
  }
  Store2.prototype.getStore = function(name) {
    return this[name];
  };
  return Store2;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _assign = function __assign() {
  return _assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++)
      for (var p in s = arguments[i], s)
        Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    return t;
  }, _assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var ar, i = 0, l = from.length; i < l; i++)
      (ar || !(i in from)) && (!ar && (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
}
var main = {
  bindto: "#chart",
  background: {},
  clipPath: true,
  svg_classname: void 0,
  size_width: void 0,
  size_height: void 0,
  padding_left: void 0,
  padding_right: void 0,
  padding_top: void 0,
  padding_bottom: void 0,
  resize_auto: true,
  onover: void 0,
  onout: void 0,
  onresize: void 0,
  onresized: void 0,
  onbeforeinit: void 0,
  oninit: void 0,
  onafterinit: void 0,
  onrendered: void 0,
  transition_duration: 350,
  plugins: [],
  render: {},
  regions: []
};
var data$2 = {
  data_x: void 0,
  data_idConverter: function(id2) {
    return id2;
  },
  data_names: {},
  data_classes: {},
  data_type: void 0,
  data_types: {},
  data_order: "desc",
  data_groups: [],
  data_color: void 0,
  data_colors: {},
  data_labels: {},
  data_labels_backgroundColors: void 0,
  data_labels_colors: void 0,
  data_labels_position: {},
  data_hide: false,
  data_filter: void 0,
  data_onclick: function() {
  },
  data_onover: function() {
  },
  data_onout: function() {
  },
  data_onshown: void 0,
  data_onhidden: void 0,
  data_onmin: void 0,
  data_onmax: void 0,
  data_url: void 0,
  data_headers: void 0,
  data_json: void 0,
  data_rows: void 0,
  data_columns: void 0,
  data_mimeType: "csv",
  data_keys: void 0,
  data_empty_label_text: ""
};
var color$1 = {
  color_pattern: [],
  color_tiles: void 0,
  color_threshold: {},
  color_onover: void 0
};
var interaction$1 = {
  interaction_enabled: true,
  interaction_brighten: true,
  interaction_inputType_mouse: true,
  interaction_inputType_touch: {}
};
var legend$2 = {
  legend_show: true,
  legend_hide: false,
  legend_contents_bindto: void 0,
  legend_contents_template: void 0,
  legend_position: "bottom",
  legend_inset_anchor: "top-left",
  legend_inset_x: 10,
  legend_inset_y: 0,
  legend_inset_step: void 0,
  legend_item_onclick: void 0,
  legend_item_onover: void 0,
  legend_item_onout: void 0,
  legend_equally: false,
  legend_padding: 0,
  legend_item_tile_width: 10,
  legend_item_tile_height: 10,
  legend_usePoint: false
};
var title$1 = {
  title_text: void 0,
  title_padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  title_position: "center"
};
var tooltip$2 = {
  tooltip_show: true,
  tooltip_doNotHide: false,
  tooltip_grouped: true,
  tooltip_format_title: void 0,
  tooltip_format_name: void 0,
  tooltip_format_value: void 0,
  tooltip_position: void 0,
  tooltip_contents: {},
  tooltip_init_show: false,
  tooltip_init_x: 0,
  tooltip_init_position: {
    top: "0px",
    left: "50px"
  },
  tooltip_linked: false,
  tooltip_linked_name: "",
  tooltip_onshow: function() {
  },
  tooltip_onhide: function() {
  },
  tooltip_onshown: function() {
  },
  tooltip_onhidden: function() {
  },
  tooltip_order: null
};
var win = function() {
  var root2 = typeof globalThis === "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof global === "object" && global !== null && global.Object === Object && global || typeof self === "object" && self !== null && self.Object === Object && self;
  return root2 || Function("return this")();
}();
win.requestIdleCallback = win.requestIdleCallback || function(cb) {
  return setTimeout(cb, 1);
};
win.cancelIdleCallback = win.cancelIdleCallback || function(id2) {
  return clearTimeout(id2);
};
var doc = win && win.document;
var isValue = function(v) {
  return v || v === 0;
};
var isFunction = function(v) {
  return typeof v === "function";
};
var isString = function(v) {
  return typeof v === "string";
};
var isNumber = function(v) {
  return typeof v === "number";
};
var isUndefined = function(v) {
  return typeof v === "undefined";
};
var isDefined = function(v) {
  return typeof v !== "undefined";
};
var isboolean = function(v) {
  return typeof v === "boolean";
};
var ceil10 = function(v) {
  return Math.ceil(v / 10) * 10;
};
var asHalfPixel = function(n) {
  return Math.ceil(n) + 0.5;
};
var diffDomain = function(d) {
  return d[1] - d[0];
};
var isObjectType = function(v) {
  return typeof v === "object";
};
var isEmpty = function(o) {
  return isUndefined(o) || o === null || isString(o) && o.length === 0 || isObjectType(o) && !(o instanceof Date) && Object.keys(o).length === 0 || isNumber(o) && isNaN(o);
};
var notEmpty = function(o) {
  return !isEmpty(o);
};
var isArray = function(arr) {
  return Array.isArray(arr);
};
var isObject = function(obj) {
  return obj && !obj.nodeType && isObjectType(obj) && !isArray(obj);
};
function getOption(options2, key, defaultValue) {
  return isDefined(options2[key]) ? options2[key] : defaultValue;
}
function hasValue(dict, value) {
  var found = false;
  Object.keys(dict).forEach(function(key) {
    return dict[key] === value && (found = true);
  });
  return found;
}
function callFn(fn) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var isFn = isFunction(fn);
  isFn && fn.call.apply(fn, args);
  return isFn;
}
function endall(transition2, cb) {
  var n = 0;
  var end = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    !--n && cb.apply.apply(cb, __spreadArray([this], args));
  };
  if ("duration" in transition2) {
    transition2.each(function() {
      return ++n;
    }).on("end", end);
  } else {
    ++n;
    transition2.call(end);
  }
}
function sanitise(str) {
  return isString(str) ? str.replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
}
function setTextValue(node, text2, dy, toMiddle) {
  if (dy === void 0) {
    dy = [-1, 1];
  }
  if (toMiddle === void 0) {
    toMiddle = false;
  }
  if (!node || !isString(text2)) {
    return;
  }
  if (text2.indexOf("\n") === -1) {
    node.text(text2);
  } else {
    var diff = [node.text(), text2].map(function(v) {
      return v.replace(/[\s\n]/g, "");
    });
    if (diff[0] !== diff[1]) {
      var multiline = text2.split("\n");
      var len_1 = toMiddle ? multiline.length - 1 : 1;
      node.html("");
      multiline.forEach(function(v, i) {
        node.append("tspan").attr("x", 0).attr("dy", (i === 0 ? dy[0] * len_1 : dy[1]) + "em").text(v);
      });
    }
  }
}
function getRectSegList(path2) {
  var _a = path2.getBBox(), x2 = _a.x, y3 = _a.y, width = _a.width, height = _a.height;
  return [
    { x: x2, y: y3 + height },
    { x: x2, y: y3 },
    { x: x2 + width, y: y3 },
    { x: x2 + width, y: y3 + height }
  ];
}
function getPathBox(path2) {
  var _a = path2.getBoundingClientRect(), width = _a.width, height = _a.height;
  var items = getRectSegList(path2);
  var x2 = items[0].x;
  var y3 = Math.min(items[0].y, items[1].y);
  return {
    x: x2,
    y: y3,
    width,
    height
  };
}
function getPointer(event, element) {
  var touches = event && (event.touches || event.sourceEvent && event.sourceEvent.touches);
  var pointer$1 = event ? pointer(touches ? touches[0] : event, element) : [0, 0];
  return pointer$1;
}
function getBrushSelection(ctx) {
  var event = ctx.event, $el = ctx.$el;
  var main2 = $el.subchart.main || $el.main;
  var selection2;
  if (event && event.type === "brush") {
    selection2 = event.selection;
  } else if (main2 && (selection2 = main2.select("." + CLASS.brush).node())) {
    selection2 = brushSelection(selection2);
  }
  return selection2;
}
function getBoundingRect(node) {
  var needEvaluate = !("rect" in node) || "rect" in node && node.hasAttribute("width") && node.rect.width !== +node.getAttribute("width");
  return needEvaluate ? node.rect = node.getBoundingClientRect() : node.rect;
}
function getRandom(asStr) {
  if (asStr === void 0) {
    asStr = true;
  }
  var rand = Math.random();
  return asStr ? String(rand) : rand;
}
function findIndex(arr, v, start2, end, isRotated) {
  if (start2 > end) {
    return -1;
  }
  var mid = Math.floor((start2 + end) / 2);
  var _a = arr[mid], x2 = _a.x, _b = _a.w, w = _b === void 0 ? 0 : _b;
  if (isRotated) {
    x2 = arr[mid].y;
    w = arr[mid].h;
  }
  if (v >= x2 && v <= x2 + w) {
    return mid;
  }
  return v < x2 ? findIndex(arr, v, start2, mid - 1, isRotated) : findIndex(arr, v, mid + 1, end, isRotated);
}
function brushEmpty(ctx) {
  var selection2 = getBrushSelection(ctx);
  if (selection2) {
    return selection2[0] === selection2[1];
  }
  return true;
}
function deepClone() {
  var objectN = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objectN[_i] = arguments[_i];
  }
  var clone = function(v) {
    if (isObject(v) && v.constructor) {
      var r = new v.constructor();
      for (var k in v) {
        r[k] = clone(v[k]);
      }
      return r;
    }
    return v;
  };
  return objectN.map(function(v) {
    return clone(v);
  }).reduce(function(a, c) {
    return _assign(_assign({}, a), c);
  });
}
function extend(target, source) {
  if (target === void 0) {
    target = {};
  }
  if (isArray(source)) {
    source.forEach(function(v) {
      return extend(target, v);
    });
  }
  for (var p in source) {
    if (/^\d+$/.test(p) || p in target) {
      continue;
    }
    target[p] = source[p];
  }
  return target;
}
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var toArray = function(v) {
  return [].slice.call(v);
};
function getCssRules(styleSheets) {
  var rules = [];
  styleSheets.forEach(function(sheet) {
    try {
      if (sheet.cssRules && sheet.cssRules.length) {
        rules = rules.concat(toArray(sheet.cssRules));
      }
    } catch (e) {
      console.error("Error while reading rules from " + sheet.href + ": " + e.toString());
    }
  });
  return rules;
}
var getTranslation = function(node) {
  var transform2 = node ? node.transform : null;
  var baseVal = transform2 && transform2.baseVal;
  return baseVal && baseVal.numberOfItems ? baseVal.getItem(0).matrix : { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
};
function getUnique(data2) {
  var isDate = data2[0] instanceof Date;
  var d = (isDate ? data2.map(Number) : data2).filter(function(v, i, self2) {
    return self2.indexOf(v) === i;
  });
  return isDate ? d.map(function(v) {
    return new Date(v);
  }) : d;
}
function mergeArray(arr) {
  return arr && arr.length ? arr.reduce(function(p, c) {
    return p.concat(c);
  }) : [];
}
function mergeObj(target) {
  var objectN = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    objectN[_i - 1] = arguments[_i];
  }
  if (!objectN.length || objectN.length === 1 && !objectN[0]) {
    return target;
  }
  var source = objectN.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function(key) {
      var value = source[key];
      if (isObject(value)) {
        !target[key] && (target[key] = {});
        target[key] = mergeObj(target[key], value);
      } else {
        target[key] = isArray(value) ? value.concat() : value;
      }
    });
  }
  return mergeObj.apply(void 0, __spreadArray([target], objectN));
}
function sortValue(data2, isAsc) {
  if (isAsc === void 0) {
    isAsc = true;
  }
  var fn;
  if (data2[0] instanceof Date) {
    fn = isAsc ? function(a, b) {
      return a - b;
    } : function(a, b) {
      return b - a;
    };
  } else {
    if (isAsc && !data2.every(isNaN)) {
      fn = function(a, b) {
        return a - b;
      };
    } else if (!isAsc) {
      fn = function(a, b) {
        return a > b && -1 || a < b && 1 || a === b && 0;
      };
    }
  }
  return data2.concat().sort(fn);
}
function getMinMax$1(type2, data2) {
  var res = data2.filter(function(v) {
    return notEmpty(v);
  });
  if (res.length) {
    if (isNumber(res[0])) {
      res = Math[type2].apply(Math, res);
    } else if (res[0] instanceof Date) {
      res = sortValue(res, type2 === "min")[0];
    }
  } else {
    res = void 0;
  }
  return res;
}
var getRange = function(start2, end, step2) {
  if (step2 === void 0) {
    step2 = 1;
  }
  var res = [];
  var n = Math.max(0, Math.ceil((end - start2) / step2)) | 0;
  for (var i = start2; i < n; i++) {
    res.push(start2 + i * step2);
  }
  return res;
};
var emulateEvent = {
  mouse: function() {
    var getParams = function() {
      return {
        bubbles: false,
        cancelable: false,
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0
      };
    };
    try {
      new MouseEvent("t");
      return function(el, eventType, params) {
        if (params === void 0) {
          params = getParams();
        }
        el.dispatchEvent(new MouseEvent(eventType, params));
      };
    } catch (e) {
      return function(el, eventType, params) {
        if (params === void 0) {
          params = getParams();
        }
        var mouseEvent = doc.createEvent("MouseEvent");
        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, win, 0, params.screenX, params.screenY, params.clientX, params.clientY, false, false, false, false, 0, null);
        el.dispatchEvent(mouseEvent);
      };
    }
  }(),
  touch: function(el, eventType, params) {
    var touchObj = new Touch(mergeObj({
      identifier: Date.now(),
      target: el,
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5
    }, params));
    el.dispatchEvent(new TouchEvent(eventType, {
      cancelable: true,
      bubbles: true,
      shiftKey: true,
      touches: [touchObj],
      targetTouches: [],
      changedTouches: [touchObj]
    }));
  }
};
function tplProcess(tpl, data2) {
  var res = tpl;
  for (var x2 in data2) {
    res = res.replace(new RegExp("{=" + x2 + "}", "g"), data2[x2]);
  }
  return res;
}
function parseDate(date2) {
  var parsedDate;
  if (date2 instanceof Date) {
    parsedDate = date2;
  } else if (isString(date2)) {
    var _a = this, config = _a.config, format2 = _a.format;
    parsedDate = format2.dataTime(config.data_xFormat)(date2);
  } else if (isNumber(date2) && !isNaN(date2)) {
    parsedDate = new Date(+date2);
  }
  if (!parsedDate || isNaN(+parsedDate)) {
    console && console.error && console.error("Failed to parse x '" + date2 + "' to Date object");
  }
  return parsedDate;
}
function isTabVisible() {
  return !doc.hidden;
}
function convertInputType(mouse, touch) {
  var isMobile = false;
  if (/Mobi/.test(win.navigator.userAgent) && touch) {
    var hasTouchPoints = win.navigator && "maxTouchPoints" in win.navigator && win.navigator.maxTouchPoints > 0;
    var hasTouch = "ontouchmove" in win || win.DocumentTouch && doc instanceof win.DocumentTouch;
    isMobile = hasTouchPoints || hasTouch;
  }
  var hasMouse = mouse && !isMobile ? "onmouseover" in win : false;
  return hasMouse && "mouse" || isMobile && "touch" || null;
}
var Options = function() {
  function Options2() {
    return deepClone(main, data$2, color$1, interaction$1, legend$2, title$1, tooltip$2, Options2.data);
  }
  Options2.setOptions = function(options2) {
    this.data = options2.reduce(function(a, c) {
      return _assign(_assign({}, a), c);
    }, this.data);
  };
  Options2.data = {};
  return Options2;
}();
var KEY = {
  bubbleBaseLength: "$baseLength",
  colorPattern: "__colorPattern__",
  dataMinMax: "$dataMinMax",
  dataTotalSum: "$dataTotalSum",
  dataTotalPerIndex: "$totalPerIndex",
  legendItemTextBox: "legendItemTextBox",
  radarPoints: "$radarPoints",
  setOverOut: "setOverOut",
  callOverOutForTouch: "callOverOutForTouch",
  textRect: "textRect"
};
var Cache = function() {
  function Cache2() {
    this.cache = {};
  }
  Cache2.prototype.add = function(key, value, isDataType) {
    if (isDataType === void 0) {
      isDataType = false;
    }
    this.cache[key] = isDataType ? this.cloneTarget(value) : value;
    return this.cache[key];
  };
  Cache2.prototype.remove = function(key) {
    var _this = this;
    toArray(key).forEach(function(v) {
      return delete _this.cache[v];
    });
  };
  Cache2.prototype.get = function(key, isDataType) {
    if (isDataType === void 0) {
      isDataType = false;
    }
    if (isDataType) {
      var targets = [];
      for (var i = 0, id2 = void 0; id2 = key[i]; i++) {
        if (id2 in this.cache) {
          targets.push(this.cloneTarget(this.cache[id2]));
        }
      }
      return targets;
    } else {
      var value = this.cache[key];
      return isValue(value) ? value : null;
    }
  };
  Cache2.prototype.reset = function(all) {
    var $$ = this;
    for (var x2 in $$.cache) {
      if (all || /^\$/.test(x2)) {
        $$.cache[x2] = null;
      }
    }
  };
  Cache2.prototype.cloneTarget = function(target) {
    return {
      id: target.id,
      id_org: target.id_org,
      values: target.values.map(function(d) {
        return { x: d.x, value: d.value, id: d.id };
      })
    };
  };
  return Cache2;
}();
var setTimeout$1 = win.setTimeout, clearTimeout$1 = win.clearTimeout;
function generateResize() {
  var fn = [];
  var timeout2;
  var callResizeFn = function() {
    callResizeFn.clear();
    timeout2 = setTimeout$1(function() {
      fn.forEach(function(f) {
        return f();
      });
    }, 200);
  };
  callResizeFn.clear = function() {
    if (timeout2) {
      clearTimeout$1(timeout2);
      timeout2 = null;
    }
  };
  callResizeFn.add = function(f) {
    return fn.push(f);
  };
  callResizeFn.remove = function(f) {
    return fn.splice(fn.indexOf(f), 1);
  };
  return callResizeFn;
}
function generateWait() {
  var transitionsToWait = [];
  var f = function(t, callback) {
    var timer2;
    function loop() {
      var done = 0;
      for (var i = 0, t_1; t_1 = transitionsToWait[i]; i++) {
        if (t_1 === true || t_1.empty && t_1.empty()) {
          done++;
          continue;
        }
        try {
          t_1.transition();
        } catch (e) {
          done++;
        }
      }
      timer2 && clearTimeout$1(timer2);
      if (done === transitionsToWait.length) {
        callback && callback();
      } else {
        timer2 = setTimeout$1(loop, 50);
      }
    }
    loop();
  };
  f.add = function(t) {
    isArray(t) ? transitionsToWait = transitionsToWait.concat(t) : transitionsToWait.push(t);
  };
  return f;
}
var dataConvert = {
  convertData: function(args, callback) {
    var data2;
    if (args.bindto) {
      data2 = {};
      ["url", "mimeType", "headers", "keys", "json", "keys", "rows", "columns"].forEach(function(v) {
        var key = "data_" + v;
        if (key in args) {
          data2[v] = args[key];
        }
      });
    } else {
      data2 = args;
    }
    if (data2.url && callback) {
      this.convertUrlToData(data2.url, data2.mimeType, data2.headers, data2.keys, callback);
    } else if (data2.json) {
      data2 = this.convertJsonToData(data2.json, data2.keys);
    } else if (data2.rows) {
      data2 = this.convertRowsToData(data2.rows);
    } else if (data2.columns) {
      data2 = this.convertColumnsToData(data2.columns);
    } else if (args.bindto) {
      throw Error("url or json or rows or columns is required.");
    }
    return isArray(data2) && data2;
  },
  convertUrlToData: function(url, mimeType, headers, keys, done) {
    var _this = this;
    if (mimeType === void 0) {
      mimeType = "csv";
    }
    var req = new XMLHttpRequest();
    req.open("GET", url);
    if (headers) {
      Object.keys(headers).forEach(function(key) {
        req.setRequestHeader(key, headers[key]);
      });
    }
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          var response = req.responseText;
          response && done.call(_this, _this["convert" + capitalize(mimeType) + "ToData"](mimeType === "json" ? JSON.parse(response) : response, keys));
        } else {
          throw new Error(url + ": Something went wrong loading!");
        }
      }
    };
    req.send();
  },
  convertCsvTsvToData: function(parser, xsv) {
    var rows = parser.rows(xsv);
    var d;
    if (rows.length === 1) {
      d = [{}];
      rows[0].forEach(function(id2) {
        d[0][id2] = null;
      });
    } else {
      d = parser.parse(xsv);
    }
    return d;
  },
  convertCsvToData: function(xsv) {
    return this.convertCsvTsvToData({
      rows: csvParseRows,
      parse: csvParse
    }, xsv);
  },
  convertTsvToData: function(tsv2) {
    return this.convertCsvTsvToData({
      rows: tsvParseRows,
      parse: tsvParse
    }, tsv2);
  },
  convertJsonToData: function(json, keysParam) {
    var _this = this;
    var config = this.config;
    var newRows = [];
    var targetKeys;
    var data2;
    if (isArray(json)) {
      var keys = keysParam || config.data_keys;
      if (keys.x) {
        targetKeys = keys.value.concat(keys.x);
        config.data_x = keys.x;
      } else {
        targetKeys = keys.value;
      }
      newRows.push(targetKeys);
      json.forEach(function(o) {
        var newRow = targetKeys.map(function(key) {
          var v = _this.findValueInJson(o, key);
          if (isUndefined(v)) {
            v = null;
          }
          return v;
        });
        newRows.push(newRow);
      });
      data2 = this.convertRowsToData(newRows);
    } else {
      Object.keys(json).forEach(function(key) {
        var tmp = json[key].concat();
        tmp.unshift(key);
        newRows.push(tmp);
      });
      data2 = this.convertColumnsToData(newRows);
    }
    return data2;
  },
  findValueInJson: function(object2, path2) {
    if (object2[path2] !== void 0) {
      return object2[path2];
    }
    var convertedPath = path2.replace(/\[(\w+)\]/g, ".$1");
    var pathArray = convertedPath.replace(/^\./, "").split(".");
    var target = object2;
    pathArray.some(function(k) {
      return !(target = target && k in target ? target[k] : void 0);
    });
    return target;
  },
  convertRowsToData: function(rows) {
    var keys = rows[0];
    var newRows = [];
    rows.forEach(function(row, i) {
      if (i > 0) {
        var newRow_1 = {};
        row.forEach(function(v, j) {
          if (isUndefined(v)) {
            throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
          }
          newRow_1[keys[j]] = v;
        });
        newRows.push(newRow_1);
      }
    });
    return newRows;
  },
  convertColumnsToData: function(columns) {
    var newRows = [];
    columns.forEach(function(col, i) {
      var key = col[0];
      col.forEach(function(v, j) {
        if (j > 0) {
          if (isUndefined(newRows[j - 1])) {
            newRows[j - 1] = {};
          }
          if (isUndefined(v)) {
            throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
          }
          newRows[j - 1][key] = v;
        }
      });
    });
    return newRows;
  },
  convertDataToTargets: function(data2, appendXs) {
    var _this = this;
    var $$ = this;
    var axis2 = $$.axis, config = $$.config, state = $$.state;
    var isCategorized = false;
    var isTimeSeries = false;
    var isCustomX = false;
    if (axis2) {
      isCategorized = axis2.isCategorized();
      isTimeSeries = axis2.isTimeSeries();
      isCustomX = axis2.isCustomX();
    }
    var dataKeys = Object.keys(data2[0] || {});
    var ids = dataKeys.length ? dataKeys.filter($$.isNotX, $$) : [];
    var xs = dataKeys.length ? dataKeys.filter($$.isX, $$) : [];
    var xsData;
    ids.forEach(function(id2) {
      var xKey = _this.getXKey(id2);
      if (isCustomX || isTimeSeries) {
        if (xs.indexOf(xKey) >= 0) {
          xsData = (appendXs && $$.data.xs[id2] || []).concat(data2.map(function(d) {
            return d[xKey];
          }).filter(isValue).map(function(rawX, i) {
            return $$.generateTargetX(rawX, id2, i);
          }));
        } else if (config.data_x) {
          xsData = _this.getOtherTargetXs();
        } else if (notEmpty(config.data_xs)) {
          xsData = $$.getXValuesOfXKey(xKey, $$.data.targets);
        }
      } else {
        xsData = data2.map(function(d, i) {
          return i;
        });
      }
      xsData && (_this.data.xs[id2] = xsData);
    });
    ids.forEach(function(id2) {
      if (!_this.data.xs[id2]) {
        throw new Error('x is not defined for id = "' + id2 + '".');
      }
    });
    var targets = ids.map(function(id2, index) {
      var convertedId = config.data_idConverter.bind($$.api)(id2);
      var xKey = $$.getXKey(id2);
      var isCategory = isCustomX && isCategorized;
      var hasCategory = isCategory && data2.map(function(v) {
        return v.x;
      }).every(function(v) {
        return config.axis_x_categories.indexOf(v) > -1;
      });
      var isDataAppend = data2.__append__;
      var xIndex = xKey === null && isDataAppend ? $$.api.data.values(id2).length : 0;
      return {
        id: convertedId,
        id_org: id2,
        values: data2.map(function(d, i) {
          var rawX = d[xKey];
          var value = d[id2];
          var x2;
          value = value !== null && !isNaN(value) && !isObject(value) ? +value : isArray(value) || isObject(value) ? value : null;
          if ((isCategory || state.hasRadar) && index === 0 && !isUndefined(rawX)) {
            if (!hasCategory && index === 0 && i === 0 && !isDataAppend) {
              config.axis_x_categories = [];
            }
            x2 = config.axis_x_categories.indexOf(rawX);
            if (x2 === -1) {
              x2 = config.axis_x_categories.length;
              config.axis_x_categories.push(rawX);
            }
          } else {
            x2 = $$.generateTargetX(rawX, id2, xIndex + i);
          }
          if (isUndefined(value) || $$.data.xs[id2].length <= i) {
            x2 = void 0;
          }
          return { x: x2, value, id: convertedId };
        }).filter(function(v) {
          return isDefined(v.x);
        })
      };
    });
    targets.forEach(function(t) {
      if (config.data_xSort) {
        t.values = t.values.sort(function(v1, v2) {
          var x1 = v1.x || v1.x === 0 ? v1.x : Infinity;
          var x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
          return x1 - x2;
        });
      }
      t.values.forEach(function(v, i) {
        return v.index = i;
      });
      $$.data.xs[t.id].sort(function(v1, v2) {
        return v1 - v2;
      });
    });
    state.hasNegativeValue = $$.hasNegativeValueInTargets(targets);
    state.hasPositiveValue = $$.hasPositiveValueInTargets(targets);
    if (config.data_type) {
      $$.setTargetType($$.mapToIds(targets).filter(function(id2) {
        return !(id2 in config.data_types);
      }), config.data_type);
    }
    targets.forEach(function(d) {
      return $$.cache.add(d.id_org, d, true);
    });
    return targets;
  }
};
var data$1 = {
  isX: function(key) {
    var $$ = this;
    var config = $$.config;
    var dataKey = config.data_x && key === config.data_x;
    var existValue = notEmpty(config.data_xs) && hasValue(config.data_xs, key);
    return dataKey || existValue;
  },
  isNotX: function(key) {
    return !this.isX(key);
  },
  isStackNormalized: function() {
    var config = this.config;
    return !!(config.data_stack_normalize && config.data_groups.length);
  },
  isGrouped: function(id2) {
    var groups = this.config.data_groups;
    return id2 ? groups.some(function(v) {
      return v.indexOf(id2) >= 0 && v.length > 1;
    }) : groups.length > 0;
  },
  getXKey: function(id2) {
    var $$ = this;
    var config = $$.config;
    return config.data_x ? config.data_x : notEmpty(config.data_xs) ? config.data_xs[id2] : null;
  },
  getXValuesOfXKey: function(key, targets) {
    var $$ = this;
    var ids = targets && notEmpty(targets) ? $$.mapToIds(targets) : [];
    var xValues;
    ids.forEach(function(id2) {
      if ($$.getXKey(id2) === key) {
        xValues = $$.data.xs[id2];
      }
    });
    return xValues;
  },
  getIndexByX: function(x2, basedX) {
    var $$ = this;
    return basedX ? basedX.indexOf(isString(x2) ? x2 : +x2) : ($$.filterByX($$.data.targets, x2)[0] || { index: null }).index;
  },
  getXValue: function(id2, i) {
    var $$ = this;
    return id2 in $$.data.xs && $$.data.xs[id2] && isValue($$.data.xs[id2][i]) ? $$.data.xs[id2][i] : i;
  },
  getOtherTargetXs: function() {
    var $$ = this;
    var idsForX = Object.keys($$.data.xs);
    return idsForX.length ? $$.data.xs[idsForX[0]] : null;
  },
  getOtherTargetX: function(index) {
    var xs = this.getOtherTargetXs();
    return xs && index < xs.length ? xs[index] : null;
  },
  addXs: function(xs) {
    var $$ = this;
    var config = $$.config;
    Object.keys(xs).forEach(function(id2) {
      config.data_xs[id2] = xs[id2];
    });
  },
  isMultipleX: function() {
    return notEmpty(this.config.data_xs) || !this.config.data_xSort || this.hasType("bubble") || this.hasType("scatter");
  },
  addName: function(data2) {
    var $$ = this;
    var config = $$.config;
    var name;
    if (data2) {
      name = config.data_names[data2.id];
      data2.name = name !== void 0 ? name : data2.id;
    }
    return data2;
  },
  getAllValuesOnIndex: function(index, filterNull) {
    if (filterNull === void 0) {
      filterNull = false;
    }
    var $$ = this;
    var value = $$.filterTargetsToShow($$.data.targets).map(function(t) {
      return $$.addName($$.getValueOnIndex(t.values, index));
    });
    if (filterNull) {
      value = value.filter(function(v) {
        return isValue(v.value);
      });
    }
    return value;
  },
  getValueOnIndex: function(values, index) {
    var valueOnIndex = values.filter(function(v) {
      return v.index === index;
    });
    return valueOnIndex.length ? valueOnIndex[0] : null;
  },
  updateTargetX: function(targets, x2) {
    var $$ = this;
    targets.forEach(function(t) {
      t.values.forEach(function(v, i) {
        v.x = $$.generateTargetX(x2[i], t.id, i);
      });
      $$.data.xs[t.id] = x2;
    });
  },
  updateTargetXs: function(targets, xs) {
    var $$ = this;
    targets.forEach(function(t) {
      xs[t.id] && $$.updateTargetX([t], xs[t.id]);
    });
  },
  generateTargetX: function(rawX, id2, index) {
    var $$ = this;
    var axis2 = $$.axis;
    var x2 = axis2 && axis2.isCategorized() ? index : rawX || index;
    if (axis2 && axis2.isTimeSeries()) {
      var fn = parseDate.bind($$);
      x2 = rawX ? fn(rawX) : fn($$.getXValue(id2, index));
    } else if (axis2 && axis2.isCustomX() && !axis2.isCategorized()) {
      x2 = isValue(rawX) ? +rawX : $$.getXValue(id2, index);
    }
    return x2;
  },
  updateXs: function(values) {
    if (values.length) {
      this.axis.xs = values.map(function(v) {
        return v.x;
      });
    }
  },
  getPrevX: function(i) {
    var x2 = this.axis.xs[i - 1];
    return isDefined(x2) ? x2 : null;
  },
  getNextX: function(i) {
    var x2 = this.axis.xs[i + 1];
    return isDefined(x2) ? x2 : null;
  },
  getBaseValue: function(data2) {
    var $$ = this;
    var hasAxis = $$.state.hasAxis;
    var value = data2.value;
    if (value && hasAxis) {
      if ($$.isAreaRangeType(data2)) {
        value = $$.getRangedData(data2, "mid");
      } else if ($$.isBubbleZType(data2)) {
        value = $$.getBubbleZData(value, "y");
      }
    }
    return value;
  },
  getMinMaxValue: function(data2) {
    var getBaseValue = this.getBaseValue.bind(this);
    var min2;
    var max2;
    (data2 || this.data.targets.map(function(t) {
      return t.values;
    })).forEach(function(v, i) {
      var value = v.map(getBaseValue).filter(isNumber);
      min2 = Math.min.apply(Math, __spreadArray([i ? min2 : Infinity], value));
      max2 = Math.max.apply(Math, __spreadArray([i ? max2 : -Infinity], value));
    });
    return { min: min2, max: max2 };
  },
  getMinMaxData: function() {
    var $$ = this;
    var cacheKey2 = KEY.dataMinMax;
    var minMaxData = $$.cache.get(cacheKey2);
    if (!minMaxData) {
      var data2 = $$.data.targets.map(function(t) {
        return t.values;
      });
      var minMax_1 = $$.getMinMaxValue(data2);
      var min_1 = [];
      var max_1 = [];
      data2.forEach(function(v) {
        var minData = $$.getFilteredDataByValue(v, minMax_1.min);
        var maxData = $$.getFilteredDataByValue(v, minMax_1.max);
        if (minData.length) {
          min_1 = min_1.concat(minData);
        }
        if (maxData.length) {
          max_1 = max_1.concat(maxData);
        }
      });
      $$.cache.add(cacheKey2, minMaxData = { min: min_1, max: max_1 });
    }
    return minMaxData;
  },
  getTotalPerIndex: function() {
    var $$ = this;
    var cacheKey2 = KEY.dataTotalPerIndex;
    var sum = $$.cache.get(cacheKey2);
    if ($$.isStackNormalized() && !sum) {
      sum = [];
      $$.data.targets.forEach(function(row) {
        row.values.forEach(function(v, i) {
          if (!sum[i]) {
            sum[i] = 0;
          }
          sum[i] += isNumber(v.value) ? v.value : 0;
        });
      });
    }
    return sum;
  },
  getTotalDataSum: function(subtractHidden) {
    var $$ = this;
    var cacheKey2 = KEY.dataTotalSum;
    var total = $$.cache.get(cacheKey2);
    if (!isNumber(total)) {
      var sum = mergeArray($$.data.targets.map(function(t) {
        return t.values;
      })).map(function(v) {
        return v.value;
      }).reduce(function(p, c) {
        return p + c;
      });
      $$.cache.add(cacheKey2, total = sum);
    }
    if (subtractHidden) {
      total -= $$.getHiddenTotalDataSum();
    }
    return total;
  },
  getHiddenTotalDataSum: function() {
    var $$ = this;
    var api2 = $$.api, hiddenTargetIds = $$.state.hiddenTargetIds;
    var total = 0;
    if (hiddenTargetIds.length) {
      total = api2.data.values.bind(api2)(hiddenTargetIds).reduce(function(p, c) {
        return p + c;
      });
    }
    return total;
  },
  getFilteredDataByValue: function(data2, value) {
    var _this = this;
    return data2.filter(function(t) {
      return _this.getBaseValue(t) === value;
    });
  },
  getMaxDataCount: function() {
    return Math.max.apply(Math, this.data.targets.map(function(t) {
      return t.values.length;
    }));
  },
  getMaxDataCountTarget: function() {
    var target = this.filterTargetsToShow() || [];
    var length = target.length;
    if (length > 1) {
      target = target.map(function(t) {
        return t.values;
      }).reduce(function(a, b) {
        return a.concat(b);
      }).map(function(v) {
        return v.x;
      });
      target = sortValue(getUnique(target)).map(function(x2, index) {
        return { x: x2, index };
      });
    } else if (length) {
      target = target[0].values;
    }
    return target;
  },
  mapToIds: function(targets) {
    return targets.map(function(d) {
      return d.id;
    });
  },
  mapToTargetIds: function(ids) {
    var $$ = this;
    return ids ? isArray(ids) ? ids.concat() : [ids] : $$.mapToIds($$.data.targets);
  },
  hasTarget: function(targets, id2) {
    var ids = this.mapToIds(targets);
    for (var i = 0, val = void 0; val = ids[i]; i++) {
      if (val === id2) {
        return true;
      }
    }
    return false;
  },
  isTargetToShow: function(targetId) {
    return this.state.hiddenTargetIds.indexOf(targetId) < 0;
  },
  isLegendToShow: function(targetId) {
    return this.state.hiddenLegendIds.indexOf(targetId) < 0;
  },
  filterTargetsToShow: function(targets) {
    var $$ = this;
    return (targets || $$.data.targets).filter(function(t) {
      return $$.isTargetToShow(t.id);
    });
  },
  mapTargetsToUniqueXs: function(targets) {
    var $$ = this;
    var axis2 = $$.axis;
    var xs = [];
    if (targets && targets.length) {
      xs = getUnique(mergeArray(targets.map(function(t) {
        return t.values.map(function(v) {
          return +v.x;
        });
      })));
      xs = axis2 && axis2.isTimeSeries() ? xs.map(function(x2) {
        return new Date(+x2);
      }) : xs.map(function(x2) {
        return +x2;
      });
    }
    return sortValue(xs);
  },
  addTargetIds: function(type2, targetIds) {
    var state = this.state;
    var ids = isArray(targetIds) ? targetIds : [targetIds];
    ids.forEach(function(v) {
      state[type2].indexOf(v) < 0 && state[type2].push(v);
    });
  },
  removeTargetIds: function(type2, targetIds) {
    var state = this.state;
    var ids = isArray(targetIds) ? targetIds : [targetIds];
    ids.forEach(function(v) {
      var index = state[type2].indexOf(v);
      index >= 0 && state[type2].splice(index, 1);
    });
  },
  addHiddenTargetIds: function(targetIds) {
    this.addTargetIds("hiddenTargetIds", targetIds);
  },
  removeHiddenTargetIds: function(targetIds) {
    this.removeTargetIds("hiddenTargetIds", targetIds);
  },
  addHiddenLegendIds: function(targetIds) {
    this.addTargetIds("hiddenLegendIds", targetIds);
  },
  removeHiddenLegendIds: function(targetIds) {
    this.removeTargetIds("hiddenLegendIds", targetIds);
  },
  getValuesAsIdKeyed: function(targets) {
    var $$ = this;
    var hasAxis = $$.state.hasAxis;
    var ys = {};
    var isMultipleX = $$.isMultipleX();
    var xs = isMultipleX ? $$.mapTargetsToUniqueXs(targets).map(function(v) {
      return isString(v) ? v : +v;
    }) : null;
    targets.forEach(function(t) {
      var data2 = [];
      t.values.filter(function(_a) {
        var value = _a.value;
        return isValue(value) || value === null;
      }).forEach(function(v) {
        var value = v.value;
        if (value !== null && $$.isCandlestickType(v)) {
          value = isArray(value) ? value.slice(0, 4) : [value.open, value.high, value.low, value.close];
        }
        if (isArray(value)) {
          data2.push.apply(data2, value);
        } else if (isObject(value) && "high" in value) {
          data2.push.apply(data2, Object.values(value));
        } else if ($$.isBubbleZType(v)) {
          data2.push(hasAxis && $$.getBubbleZData(value, "y"));
        } else {
          if (isMultipleX) {
            data2[$$.getIndexByX(v.x, xs)] = value;
          } else {
            data2.push(value);
          }
        }
      });
      ys[t.id] = data2;
    });
    return ys;
  },
  checkValueInTargets: function(targets, checker) {
    var ids = Object.keys(targets);
    var values;
    for (var i = 0; i < ids.length; i++) {
      values = targets[ids[i]].values;
      for (var j = 0; j < values.length; j++) {
        if (checker(values[j].value)) {
          return true;
        }
      }
    }
    return false;
  },
  hasMultiTargets: function() {
    return this.filterTargetsToShow().length > 1;
  },
  hasNegativeValueInTargets: function(targets) {
    return this.checkValueInTargets(targets, function(v) {
      return v < 0;
    });
  },
  hasPositiveValueInTargets: function(targets) {
    return this.checkValueInTargets(targets, function(v) {
      return v > 0;
    });
  },
  orderTargets: function(targetsValue) {
    var $$ = this;
    var targets = __spreadArray([], targetsValue);
    var fn = $$.getSortCompareFn();
    fn && targets.sort(fn);
    return targets;
  },
  getSortCompareFn: function(isArc) {
    if (isArc === void 0) {
      isArc = false;
    }
    var $$ = this;
    var config = $$.config;
    var order = config.data_order;
    var orderAsc = /asc/i.test(order);
    var orderDesc = /desc/i.test(order);
    var fn;
    if (orderAsc || orderDesc) {
      var reducer_1 = function(p, c) {
        return p + Math.abs(c.value);
      };
      fn = function(t12, t2) {
        var t1Sum = t12.values.reduce(reducer_1, 0);
        var t2Sum = t2.values.reduce(reducer_1, 0);
        return isArc ? orderAsc ? t1Sum - t2Sum : t2Sum - t1Sum : orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
      };
    } else if (isFunction(order)) {
      fn = order.bind($$.api);
    }
    return fn || null;
  },
  filterByX: function(targets, x2) {
    return mergeArray(targets.map(function(t) {
      return t.values;
    })).filter(function(v) {
      return v.x - x2 === 0;
    });
  },
  filterRemoveNull: function(data2) {
    var _this = this;
    return data2.filter(function(d) {
      return isValue(_this.getBaseValue(d));
    });
  },
  filterByXDomain: function(targets, xDomain) {
    return targets.map(function(t) {
      return {
        id: t.id,
        id_org: t.id_org,
        values: t.values.filter(function(v) {
          return xDomain[0] <= v.x && v.x <= xDomain[1];
        })
      };
    });
  },
  hasDataLabel: function() {
    var dataLabels = this.config.data_labels;
    return isboolean(dataLabels) && dataLabels || isObjectType(dataLabels) && notEmpty(dataLabels);
  },
  getDataIndexFromEvent: function(event) {
    var $$ = this;
    var config = $$.config, _a = $$.state, inputType = _a.inputType, _b = _a.eventReceiver, coords = _b.coords, rect = _b.rect;
    var isRotated = config.axis_rotated;
    var e = inputType === "touch" && event.changedTouches ? event.changedTouches[0] : event;
    var index = findIndex(coords, isRotated ? e.clientY - rect.top : e.clientX - rect.left, 0, coords.length - 1, isRotated);
    return index;
  },
  getDataLabelLength: function(min2, max2, key) {
    var $$ = this;
    var lengths = [0, 0];
    var paddingCoef = 1.3;
    $$.$el.chart.select("svg").selectAll(".dummy").data([min2, max2]).enter().append("text").text(function(d) {
      return $$.dataLabelFormat(d.id)(d);
    }).each(function(d, i) {
      lengths[i] = this.getBoundingClientRect()[key] * paddingCoef;
    }).remove();
    return lengths;
  },
  isNoneArc: function(d) {
    return this.hasTarget(this.data.targets, d.id);
  },
  isArc: function(d) {
    return "data" in d && this.hasTarget(this.data.targets, d.data.id);
  },
  findSameXOfValues: function(values, index) {
    var targetX = values[index].x;
    var sames = [];
    var i;
    for (i = index - 1; i >= 0; i--) {
      if (targetX !== values[i].x) {
        break;
      }
      sames.push(values[i]);
    }
    for (i = index; i < values.length; i++) {
      if (targetX !== values[i].x) {
        break;
      }
      sames.push(values[i]);
    }
    return sames;
  },
  findClosestFromTargets: function(targets, pos) {
    var $$ = this;
    var candidates = targets.map(function(target) {
      return $$.findClosest(target.values, pos);
    });
    return $$.findClosest(candidates, pos);
  },
  findClosest: function(values, pos) {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    var data2 = values.filter(function(v) {
      return v && isValue(v.value);
    });
    var minDist = config.point_sensitivity;
    var closest;
    data2.filter(function(v) {
      return $$.isBarType(v.id);
    }).forEach(function(v) {
      var shape2 = main2.select("." + CLASS.bars + $$.getTargetSelectorSuffix(v.id) + " ." + CLASS.bar + "-" + v.index).node();
      if (!closest && $$.isWithinBar(shape2)) {
        closest = v;
      }
    });
    data2.filter(function(v) {
      return !$$.isBarType(v.id);
    }).forEach(function(v) {
      var d = $$.dist(v, pos);
      if (d < minDist) {
        minDist = d;
        closest = v;
      }
    });
    return closest;
  },
  dist: function(data2, pos) {
    var $$ = this;
    var isRotated = $$.config.axis_rotated, scale2 = $$.scale;
    var xIndex = isRotated ? 1 : 0;
    var yIndex = isRotated ? 0 : 1;
    var y3 = $$.circleY(data2, data2.index);
    var x2 = (scale2.zoom || scale2.x)(data2.x);
    return Math.sqrt(Math.pow(x2 - pos[xIndex], 2) + Math.pow(y3 - pos[yIndex], 2));
  },
  convertValuesToStep: function(values) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config;
    var stepType = config.line_step_type;
    var isCategorized = axis2 ? axis2.isCategorized() : false;
    var converted = isArray(values) ? values.concat() : [values];
    if (!(isCategorized || /step\-(after|before)/.test(stepType))) {
      return values;
    }
    var head = converted[0];
    var tail = converted[converted.length - 1];
    var id2 = head.id;
    var x2 = head.x;
    converted.unshift({ x: --x2, value: head.value, id: id2 });
    isCategorized && stepType === "step-after" && converted.unshift({ x: --x2, value: head.value, id: id2 });
    x2 = tail.x;
    converted.push({ x: ++x2, value: tail.value, id: id2 });
    isCategorized && stepType === "step-before" && converted.push({ x: ++x2, value: tail.value, id: id2 });
    return converted;
  },
  convertValuesToRange: function(values) {
    var converted = isArray(values) ? values.concat() : [values];
    var ranges = [];
    converted.forEach(function(range) {
      var x2 = range.x, id2 = range.id;
      ranges.push({
        x: x2,
        id: id2,
        value: range.value[0]
      });
      ranges.push({
        x: x2,
        id: id2,
        value: range.value[2]
      });
    });
    return ranges;
  },
  updateDataAttributes: function(name, attrs) {
    var $$ = this;
    var config = $$.config;
    var current = config["data_" + name];
    if (isUndefined(attrs)) {
      return current;
    }
    Object.keys(attrs).forEach(function(id2) {
      current[id2] = attrs[id2];
    });
    $$.redraw({ withLegend: true });
    return current;
  },
  getRangedData: function(d, key, type2) {
    if (key === void 0) {
      key = "";
    }
    if (type2 === void 0) {
      type2 = "areaRange";
    }
    var value = d === null || d === void 0 ? void 0 : d.value;
    if (isArray(value)) {
      var index = {
        areaRange: ["high", "mid", "low"],
        candlestick: ["open", "high", "low", "close", "volume"]
      }[type2].indexOf(key);
      return index >= 0 && value ? value[index] : void 0;
    } else if (value) {
      return value[key];
    }
    return value;
  },
  getRatio: function(type2, d, asPercent) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var api2 = $$.api;
    var ratio = 0;
    if (d && api2.data.shown().length) {
      ratio = d.ratio || d.value;
      if (type2 === "arc") {
        if ($$.pie.padAngle()()) {
          ratio = d.value / $$.getTotalDataSum(true);
        } else {
          var gaugeArcLength = config.gauge_fullCircle ? $$.getArcLength() : $$.getStartAngle() * -2;
          var arcLength = $$.hasType("gauge") ? gaugeArcLength : Math.PI * 2;
          ratio = (d.endAngle - d.startAngle) / arcLength;
        }
      } else if (type2 === "index") {
        var dataValues = api2.data.values.bind(api2);
        var total = this.getTotalPerIndex();
        if (state.hiddenTargetIds.length) {
          var hiddenSum_1 = dataValues(state.hiddenTargetIds, false);
          if (hiddenSum_1.length) {
            hiddenSum_1 = hiddenSum_1.reduce(function(acc, curr) {
              return acc.map(function(v, i) {
                return (isNumber(v) ? v : 0) + curr[i];
              });
            });
            total = total.map(function(v, i) {
              return v - hiddenSum_1[i];
            });
          }
        }
        d.ratio = isNumber(d.value) && total && total[d.index] > 0 ? d.value / total[d.index] : 0;
        ratio = d.ratio;
      } else if (type2 === "radar") {
        ratio = parseFloat(String(Math.max(d.value, 0))) / state.current.dataMax * config.radar_size_ratio;
      } else if (type2 === "bar") {
        var yScale = $$.getYScaleById.bind($$)(d.id);
        var max2 = yScale.domain().reduce(function(a, c) {
          return c - a;
        });
        ratio = Math.abs(d.value) / max2;
      }
    }
    return asPercent && ratio ? ratio * 100 : ratio;
  },
  updateDataIndexByX: function(tickValues) {
    var $$ = this;
    var tickValueMap = tickValues.reduce(function(out, tick, index) {
      out[Number(tick.x)] = index;
      return out;
    }, {});
    $$.data.targets.forEach(function(t) {
      t.values.forEach(function(value, valueIndex) {
        var index = tickValueMap[Number(value.x)];
        if (index === void 0) {
          index = valueIndex;
        }
        value.index = index;
      });
    });
  },
  isBubbleZType: function(d) {
    var $$ = this;
    return $$.isBubbleType(d) && (isObject(d.value) && ("z" in d.value || "y" in d.value) || isArray(d.value) && d.value.length === 2);
  },
  getDataById: function(id2) {
    var d = this.cache.get(id2) || this.api.data(id2);
    return isArray(d) ? d[0] : d;
  }
};
var dataLoad = {
  load: function(rawTargets, args) {
    var $$ = this;
    var append = args.append;
    var targets = rawTargets;
    if (targets) {
      if (args.filter) {
        targets = targets.filter(args.filter);
      }
      if (args.type || args.types) {
        targets.forEach(function(t) {
          var type2 = args.types && args.types[t.id] || args.type;
          $$.setTargetType(t.id, type2);
        });
      }
      $$.data.targets.forEach(function(d) {
        for (var i = 0; i < targets.length; i++) {
          if (d.id === targets[i].id) {
            d.values = append ? d.values.concat(targets[i].values) : targets[i].values;
            targets.splice(i, 1);
            break;
          }
        }
      });
      $$.data.targets = $$.data.targets.concat(targets);
    }
    $$.updateTargets($$.data.targets);
    $$.redraw({
      withUpdateOrgXDomain: true,
      withUpdateXDomain: true,
      withLegend: true
    });
    $$.updateTypesElements();
    args.done && args.done.call($$.api);
  },
  loadFromArgs: function(args) {
    var $$ = this;
    if (!$$.config) {
      return;
    }
    $$.cache.reset();
    var data2 = args.data || $$.convertData(args, function(d) {
      return $$.load($$.convertDataToTargets(d), args);
    });
    args.append && (data2.__append__ = true);
    data2 && $$.load($$.convertDataToTargets(data2), args);
  },
  unload: function(rawTargetIds, customDoneCb) {
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var done = customDoneCb;
    var targetIds = rawTargetIds;
    $$.cache.reset();
    if (!done) {
      done = function() {
      };
    }
    targetIds = targetIds.filter(function(id2) {
      return $$.hasTarget($$.data.targets, id2);
    });
    if (!targetIds || targetIds.length === 0) {
      done();
      return;
    }
    var targets = $el.svg.selectAll(targetIds.map(function(id2) {
      return $$.selectorTarget(id2);
    }));
    (config.transition_duration ? targets.transition().style("opacity", "0") : targets).remove().call(endall, done);
    targetIds.forEach(function(id2) {
      state.withoutFadeIn[id2] = false;
      if ($el.legend) {
        $el.legend.selectAll("." + CLASS.legendItem + $$.getTargetSelectorSuffix(id2)).remove();
      }
      $$.data.targets = $$.data.targets.filter(function(t) {
        return t.id !== id2;
      });
    });
    $$.updateTypesElements();
  }
};
var interaction = {
  selectRectForSingle: function(context, eventRect, index) {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    var isSelectionEnabled = config.data_selection_enabled;
    var isSelectionGrouped = config.data_selection_grouped;
    var isSelectable = config.data_selection_isselectable;
    var isTooltipGrouped = config.tooltip_grouped;
    var selectedData = $$.getAllValuesOnIndex(index);
    if (isTooltipGrouped) {
      $$.showTooltip(selectedData, context);
      $$.showGridFocus && $$.showGridFocus(selectedData);
      if (!isSelectionEnabled || isSelectionGrouped) {
        return;
      }
    }
    main2.selectAll("." + CLASS.shape + "-" + index).each(function() {
      select(this).classed(CLASS.EXPANDED, true);
      if (isSelectionEnabled) {
        eventRect.style("cursor", isSelectionGrouped ? "pointer" : null);
      }
      if (!isTooltipGrouped) {
        $$.hideGridFocus && $$.hideGridFocus();
        $$.hideTooltip();
        !isSelectionGrouped && $$.setExpand(index);
      }
    }).filter(function(d) {
      return $$.isWithinShape(this, d);
    }).call(function(selected) {
      var d = selected.data();
      if (isSelectionEnabled && (isSelectionGrouped || isSelectable && isSelectable.bind($$.api)(d))) {
        eventRect.style("cursor", "pointer");
      }
      if (!isTooltipGrouped) {
        $$.showTooltip(d, context);
        $$.showGridFocus && $$.showGridFocus(d);
        $$.unexpandCircles && $$.unexpandCircles();
        selected.each(function(d2) {
          return $$.setExpand(index, d2.id);
        });
      }
    });
  },
  setExpand: function(index, id2, reset) {
    var $$ = this;
    var config = $$.config, circle = $$.$el.circle;
    circle && config.point_focus_expand_enabled && $$.expandCircles(index, id2, reset);
    $$.expandBarTypeShapes(true, index, id2, reset);
  },
  expandBarTypeShapes: function(expand, i, id2, reset) {
    if (expand === void 0) {
      expand = true;
    }
    var $$ = this;
    ["bar", "candlestick"].filter(function(v) {
      return $$.$el[v];
    }).forEach(function(v) {
      reset && $$.$el[v].classed(CLASS.EXPANDED, false);
      $$.getShapeByIndex(v, i, id2).classed(CLASS.EXPANDED, expand);
    });
  },
  setOverOut: function(isOver, d) {
    var $$ = this;
    var config = $$.config, hasRadar = $$.state.hasRadar, main2 = $$.$el.main;
    var isArc = isObject(d);
    if (isArc || d !== -1) {
      var callback_1 = config[isOver ? "data_onover" : "data_onout"].bind($$.api);
      config.color_onover && $$.setOverColor(isOver, d, isArc);
      if (isArc) {
        callback_1(d, main2.select("." + CLASS.arc + $$.getTargetSelectorSuffix(d.id)).node());
      } else if (!config.tooltip_grouped) {
        var last_1 = $$.cache.get(KEY.setOverOut) || [];
        var shape2 = main2.selectAll("." + CLASS.shape + "-" + d).filter(function(d2) {
          return $$.isWithinShape(this, d2);
        });
        shape2.each(function(d2) {
          var _this = this;
          if (last_1.length === 0 || last_1.every(function(v) {
            return v !== _this;
          })) {
            callback_1(d2, this);
            last_1.push(this);
          }
        });
        if (last_1.length > 0 && shape2.empty()) {
          callback_1 = config.data_onout.bind($$.api);
          last_1.forEach(function(v) {
            return callback_1(select(v).datum(), v);
          });
          last_1 = [];
        }
        $$.cache.add(KEY.setOverOut, last_1);
      } else {
        if (isOver) {
          config.point_focus_only && hasRadar ? $$.showCircleFocus($$.getAllValuesOnIndex(d, true)) : $$.setExpand(d, null, true);
        }
        !$$.isMultipleX() && main2.selectAll("." + CLASS.shape + "-" + d).each(function(d2) {
          callback_1(d2, this);
        });
      }
    }
  },
  callOverOutForTouch: function(d) {
    var $$ = this;
    var last = $$.cache.get(KEY.callOverOutForTouch);
    if (isObject(d) && last ? d.id !== last.id : d !== last) {
      (last || isNumber(last)) && $$.setOverOut(false, last);
      (d || isNumber(d)) && $$.setOverOut(true, d);
      $$.cache.add(KEY.callOverOutForTouch, d);
    }
  },
  getDraggableSelection: function() {
    var $$ = this;
    var config = $$.config, state = $$.state;
    return config.interaction_enabled && config.data_selection_draggable && $$.drag ? drag$1().on("drag", function(event) {
      state.event = event;
      $$.drag(getPointer(event, this));
    }).on("start", function(event) {
      state.event = event;
      $$.dragstart(getPointer(event, this));
    }).on("end", function(event) {
      state.event = event;
      $$.dragend();
    }) : function() {
    };
  },
  dispatchEvent: function(type2, index, mouse) {
    var $$ = this;
    var config = $$.config, _a = $$.state, eventReceiver = _a.eventReceiver, hasAxis = _a.hasAxis, hasRadar = _a.hasRadar, _b = $$.$el, eventRect = _b.eventRect, arcs = _b.arcs, radar2 = _b.radar;
    var isMultipleX = $$.isMultipleX();
    var element = (hasRadar ? radar2.axes.select("." + CLASS.axis + "-" + index + " text") : eventRect || arcs.selectAll("." + CLASS.target + " path").filter(function(d, i) {
      return i === index;
    })).node();
    var _c = element.getBoundingClientRect(), width = _c.width, left2 = _c.left, top2 = _c.top;
    if (hasAxis && !hasRadar && !isMultipleX) {
      var coords = eventReceiver.coords[index];
      width = coords.w;
      left2 += coords.x;
      top2 += coords.y;
    }
    var x2 = left2 + (mouse ? mouse[0] : 0) + (isMultipleX || config.axis_rotated ? 0 : width / 2);
    var y3 = top2 + (mouse ? mouse[1] : 0);
    var params = {
      screenX: x2,
      screenY: y3,
      clientX: x2,
      clientY: y3
    };
    emulateEvent[/^(mouse|click)/.test(type2) ? "mouse" : "touch"](element, type2, params);
  },
  setDragStatus: function(isDragging) {
    this.state.dragging = isDragging;
  },
  unbindZoomEvent: function() {
    var $$ = this;
    var _a = $$.$el, eventRect = _a.eventRect, zoomResetBtn = _a.zoomResetBtn;
    eventRect.on(".zoom", null).on(".drag", null);
    zoomResetBtn === null || zoomResetBtn === void 0 ? void 0 : zoomResetBtn.style("display", "none");
  }
};
var classModule = {
  generateClass: function(prefix, targetId) {
    return " " + prefix + " " + (prefix + this.getTargetSelectorSuffix(targetId));
  },
  getClass: function(type2, withShape) {
    var _this = this;
    var isPlural = /s$/.test(type2);
    var useIdKey = /^(area|arc|line)s?$/.test(type2);
    var key = isPlural ? "id" : "index";
    return function(d) {
      var data2 = d.data || d;
      var result = (withShape ? _this.generateClass(CLASS[isPlural ? "shapes" : "shape"], data2[key]) : "") + _this.generateClass(CLASS[type2], data2[useIdKey ? "id" : key]);
      return result.trim();
    };
  },
  getChartClass: function(type2) {
    var _this = this;
    return function(d) {
      return CLASS["chart" + type2] + _this.classTarget((d.data ? d.data : d).id);
    };
  },
  generateExtraLineClass: function() {
    var $$ = this;
    var classes2 = $$.config.line_classes || [];
    var ids = [];
    return function(d) {
      var id2 = d.id || d.data && d.data.id || d;
      if (ids.indexOf(id2) < 0) {
        ids.push(id2);
      }
      return classes2[ids.indexOf(id2) % classes2.length];
    };
  },
  classRegion: function(d, i) {
    return this.generateClass(CLASS.region, i) + " " + ("class" in d ? d["class"] : "");
  },
  classTarget: function(id2) {
    var additionalClassSuffix = this.config.data_classes[id2];
    var additionalClass = "";
    if (additionalClassSuffix) {
      additionalClass = " " + CLASS.target + "-" + additionalClassSuffix;
    }
    return this.generateClass(CLASS.target, id2) + additionalClass;
  },
  classFocus: function(d) {
    return this.classFocused(d) + this.classDefocused(d);
  },
  classFocused: function(d) {
    return " " + (this.state.focusedTargetIds.indexOf(d.id) >= 0 ? CLASS.focused : "");
  },
  classDefocused: function(d) {
    return " " + (this.state.defocusedTargetIds.indexOf(d.id) >= 0 ? CLASS.defocused : "");
  },
  getTargetSelectorSuffix: function(targetId) {
    var targetStr = targetId || targetId === 0 ? "-" + targetId : "";
    return targetStr.replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g, "-");
  },
  selectorTarget: function(id2, prefix) {
    var pfx = prefix || "";
    var target = this.getTargetSelectorSuffix(id2);
    return pfx + "." + (CLASS.target + target) + ", " + pfx + "." + (CLASS.circles + target);
  },
  selectorTargets: function(idsValue, prefix) {
    var _this = this;
    var ids = idsValue || [];
    return ids.length ? ids.map(function(id2) {
      return _this.selectorTarget(id2, prefix);
    }) : null;
  },
  selectorLegend: function(id2) {
    return "." + (CLASS.legendItem + this.getTargetSelectorSuffix(id2));
  },
  selectorLegends: function(ids) {
    var _this = this;
    return ids && ids.length ? ids.map(function(id2) {
      return _this.selectorLegend(id2);
    }) : null;
  }
};
var category = {
  categoryName: function(i) {
    var categories = this.config.axis_x_categories;
    return categories && i < categories.length ? categories[i] : i;
  }
};
var colorizePattern = function(pattern, color2, id2) {
  var node = select(pattern.cloneNode(true));
  node.attr("id", id2).insert("rect", ":first-child").attr("width", node.attr("width")).attr("height", node.attr("height")).style("fill", color2);
  return {
    id: id2,
    node: node.node()
  };
};
var schemeCategory10 = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
var color = {
  getColorFromCss: function() {
    var cacheKey2 = KEY.colorPattern;
    var body = doc.body;
    var pattern = body[cacheKey2];
    if (!pattern) {
      var delimiter = ";";
      var span = doc.createElement("span");
      span.className = CLASS.colorPattern;
      span.style.display = "none";
      body.appendChild(span);
      var content = win.getComputedStyle(span).backgroundImage;
      span.parentNode.removeChild(span);
      if (content.indexOf(delimiter) > -1) {
        pattern = content.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(delimiter).map(function(v) {
          return v.trim().replace(/[\"'\s]/g, "");
        }).filter(Boolean);
        body[cacheKey2] = pattern;
      }
    }
    return pattern;
  },
  generateColor: function() {
    var $$ = this;
    var config = $$.config;
    var colors = config.data_colors;
    var callback = config.data_color;
    var ids = [];
    var pattern = notEmpty(config.color_pattern) ? config.color_pattern : ordinal($$.getColorFromCss() || schemeCategory10).range();
    var originalColorPattern = pattern;
    if (isFunction(config.color_tiles)) {
      var tiles_1 = config.color_tiles.bind($$.api)();
      var colorizedPatterns = pattern.map(function(p, index) {
        var color2 = p.replace(/[#\(\)\s,]/g, "");
        var id2 = $$.state.datetimeId + "-pattern-" + color2 + "-" + index;
        return colorizePattern(tiles_1[index % tiles_1.length], p, id2);
      });
      pattern = colorizedPatterns.map(function(p) {
        return "url(#" + p.id + ")";
      });
      $$.patterns = colorizedPatterns;
    }
    return function(d) {
      var id2 = d.id || d.data && d.data.id || d;
      var isLine = $$.isTypeOf(id2, ["line", "spline", "step"]) || !config.data_types[id2];
      var color2;
      if (isFunction(colors[id2])) {
        color2 = colors[id2].bind($$.api)(d);
      } else if (colors[id2]) {
        color2 = colors[id2];
      } else {
        if (ids.indexOf(id2) < 0) {
          ids.push(id2);
        }
        color2 = isLine ? originalColorPattern[ids.indexOf(id2) % originalColorPattern.length] : pattern[ids.indexOf(id2) % pattern.length];
        colors[id2] = color2;
      }
      return isFunction(callback) ? callback.bind($$.api)(color2, d) : color2;
    };
  },
  generateLevelColor: function() {
    var $$ = this;
    var config = $$.config;
    var colors = config.color_pattern;
    var threshold = config.color_threshold;
    var asValue = threshold.unit === "value";
    var max2 = threshold.max || 100;
    var values = threshold.values && threshold.values.length ? threshold.values : [];
    return notEmpty(threshold) ? function(value) {
      var v = asValue ? value : value * 100 / max2;
      var color2 = colors[colors.length - 1];
      for (var i = 0, l = values.length; i < l; i++) {
        if (v <= values[i]) {
          color2 = colors[i];
          break;
        }
      }
      return color2;
    } : null;
  },
  generateDataLabelBackgroundColorFilter: function() {
    var $$ = this;
    var $el = $$.$el, config = $$.config, state = $$.state;
    var backgroundColors = config.data_labels_backgroundColors;
    if (backgroundColors) {
      var ids = [];
      if (isString(backgroundColors)) {
        ids.push("");
      } else if (isObject(backgroundColors)) {
        ids = Object.keys(backgroundColors);
      }
      ids.forEach(function(v) {
        var id2 = state.datetimeId + "-labels-bg" + $$.getTargetSelectorSuffix(v);
        $el.defs.append("filter").attr("x", "0").attr("y", "0").attr("width", "1").attr("height", "1").attr("id", id2).html('<feFlood flood-color="' + (v === "" ? backgroundColors : backgroundColors[v]) + '" /><feComposite in="SourceGraphic"/>');
      });
    }
  },
  setOverColor: function(isOver, d) {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    var onover = config.color_onover;
    var color2 = isOver ? onover : $$.color;
    if (isObject(color2)) {
      color2 = function(_a) {
        var id2 = _a.id;
        return id2 in onover ? onover[id2] : $$.color(id2);
      };
    } else if (isString(color2)) {
      color2 = function() {
        return onover;
      };
    } else if (isFunction(onover)) {
      color2 = color2.bind($$.api);
    }
    main2.selectAll(isObject(d) ? "." + CLASS.arc + $$.getTargetSelectorSuffix(d.id) : "." + CLASS.shape + "-" + d).style("fill", color2);
  }
};
var TYPE = {
  AREA: "area",
  AREA_LINE_RANGE: "area-line-range",
  AREA_SPLINE: "area-spline",
  AREA_SPLINE_RANGE: "area-spline-range",
  AREA_STEP: "area-step",
  BAR: "bar",
  BUBBLE: "bubble",
  CANDLESTICK: "candlestick",
  DONUT: "donut",
  GAUGE: "gauge",
  LINE: "line",
  PIE: "pie",
  RADAR: "radar",
  SCATTER: "scatter",
  SPLINE: "spline",
  STEP: "step"
};
var TYPE_BY_CATEGORY = {
  Area: [
    TYPE.AREA,
    TYPE.AREA_SPLINE,
    TYPE.AREA_SPLINE_RANGE,
    TYPE.AREA_LINE_RANGE,
    TYPE.AREA_STEP
  ],
  AreaRange: [
    TYPE.AREA_SPLINE_RANGE,
    TYPE.AREA_LINE_RANGE
  ],
  Arc: [
    TYPE.PIE,
    TYPE.DONUT,
    TYPE.GAUGE,
    TYPE.RADAR
  ],
  Line: [
    TYPE.LINE,
    TYPE.SPLINE,
    TYPE.AREA,
    TYPE.AREA_SPLINE,
    TYPE.AREA_SPLINE_RANGE,
    TYPE.AREA_LINE_RANGE,
    TYPE.STEP,
    TYPE.AREA_STEP
  ],
  Step: [
    TYPE.STEP,
    TYPE.AREA_STEP
  ],
  Spline: [
    TYPE.SPLINE,
    TYPE.AREA_SPLINE,
    TYPE.AREA_SPLINE_RANGE
  ]
};
var domain = {
  getYDomainMinMax: function(targets, type2) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config;
    var isMin = type2 === "min";
    var dataGroups = config.data_groups;
    var ids = $$.mapToIds(targets);
    var ys = $$.getValuesAsIdKeyed(targets);
    if (dataGroups.length > 0) {
      var hasValue_1 = $$["has" + (isMin ? "Negative" : "Positive") + "ValueInTargets"](targets);
      var _loop_1 = function(j2, idsInGroup2) {
        idsInGroup2 = idsInGroup2.filter(function(v) {
          return ids.indexOf(v) >= 0;
        });
        if (idsInGroup2.length === 0) {
          return out_idsInGroup_1 = idsInGroup2, "continue";
        }
        var baseId = idsInGroup2[0];
        var baseAxisId = axis2.getId(baseId);
        if (hasValue_1 && ys[baseId]) {
          ys[baseId] = ys[baseId].map(function(v) {
            return (isMin ? v < 0 : v > 0) ? v : 0;
          });
        }
        var _loop_2 = function(k2, id3) {
          if (!ys[id3]) {
            return "continue";
          }
          var axisId = axis2.getId(id3);
          ys[id3].forEach(function(v, i) {
            var val = +v;
            var meetCondition = isMin ? val > 0 : val < 0;
            if (axisId === baseAxisId && !(hasValue_1 && meetCondition)) {
              ys[baseId][i] += val;
            }
          });
        };
        for (var k = 1, id2 = void 0; id2 = idsInGroup2[k]; k++) {
          _loop_2(k, id2);
        }
        out_idsInGroup_1 = idsInGroup2;
      };
      var out_idsInGroup_1;
      for (var j = 0, idsInGroup = void 0; idsInGroup = dataGroups[j]; j++) {
        _loop_1(j, idsInGroup);
        idsInGroup = out_idsInGroup_1;
      }
    }
    return getMinMax$1(type2, Object.keys(ys).map(function(key) {
      return getMinMax$1(type2, ys[key]);
    }));
  },
  getYDomainMin: function(targets) {
    return this.getYDomainMinMax(targets, "min");
  },
  getYDomainMax: function(targets) {
    return this.getYDomainMinMax(targets, "max");
  },
  isHiddenTargetWithYDomain: function(id2) {
    var $$ = this;
    return $$.state.hiddenTargetIds.some(function(v) {
      return $$.axis.getId(v) === id2;
    });
  },
  getYDomain: function(targets, axisId, xDomain) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config, scale2 = $$.scale;
    var pfx = "axis_" + axisId;
    if ($$.isStackNormalized()) {
      return [0, 100];
    }
    var isLog = scale2 && scale2[axisId] && scale2[axisId].type === "log";
    var targetsByAxisId = targets.filter(function(t) {
      return axis2.getId(t.id) === axisId;
    });
    var yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId;
    if (yTargets.length === 0) {
      if ($$.isHiddenTargetWithYDomain(axisId)) {
        return scale2[axisId].domain();
      } else {
        return axisId === "y2" ? scale2.y.domain() : $$.getYDomain(targets, "y2", xDomain);
      }
    }
    var yMin = config[pfx + "_min"];
    var yMax = config[pfx + "_max"];
    var yDomainMin = $$.getYDomainMin(yTargets);
    var yDomainMax = $$.getYDomainMax(yTargets);
    var center2 = config[pfx + "_center"];
    var isZeroBased = __spreadArray([TYPE.BAR, TYPE.BUBBLE, TYPE.SCATTER], TYPE_BY_CATEGORY.Line).some(function(v) {
      var type2 = v.indexOf("area") > -1 ? "area" : v;
      return $$.hasType(v, yTargets) && config[type2 + "_zerobased"];
    });
    var isInverted = config[pfx + "_inverted"];
    var showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated;
    var showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated;
    yDomainMin = isValue(yMin) ? yMin : isValue(yMax) ? yDomainMin < yMax ? yDomainMin : yMax - 10 : yDomainMin;
    yDomainMax = isValue(yMax) ? yMax : isValue(yMin) ? yMin < yDomainMax ? yDomainMax : yMin + 10 : yDomainMax;
    if (isNaN(yDomainMin)) {
      yDomainMin = 0;
    }
    if (isNaN(yDomainMax)) {
      yDomainMax = yDomainMin;
    }
    if (yDomainMin === yDomainMax) {
      yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0;
    }
    var isAllPositive = yDomainMin >= 0 && yDomainMax >= 0;
    var isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;
    if (isValue(yMin) && isAllPositive || isValue(yMax) && isAllNegative) {
      isZeroBased = false;
    }
    if (isZeroBased) {
      isAllPositive && (yDomainMin = 0);
      isAllNegative && (yDomainMax = 0);
    }
    var domainLength = Math.abs(yDomainMax - yDomainMin);
    var padding = { top: domainLength * 0.1, bottom: domainLength * 0.1 };
    if (isDefined(center2)) {
      var yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));
      yDomainMax = center2 + yDomainAbs;
      yDomainMin = center2 - yDomainAbs;
    }
    if (showHorizontalDataLabel) {
      var diff_1 = diffDomain(scale2.y.range());
      var ratio_1 = $$.getDataLabelLength(yDomainMin, yDomainMax, "width").map(function(v) {
        return v / diff_1;
      });
      ["bottom", "top"].forEach(function(v, i) {
        padding[v] += domainLength * (ratio_1[i] / (1 - ratio_1[0] - ratio_1[1]));
      });
    } else if (showVerticalDataLabel) {
      var lengths_1 = $$.getDataLabelLength(yDomainMin, yDomainMax, "height");
      ["bottom", "top"].forEach(function(v, i) {
        padding[v] += axis2.convertPixelsToAxisPadding(lengths_1[i], domainLength);
      });
    }
    var p = config[pfx + "_padding"];
    if (notEmpty(p)) {
      ["bottom", "top"].forEach(function(v) {
        padding[v] = axis2.getPadding(p, v, padding[v], domainLength);
      });
    }
    if (isZeroBased) {
      isAllPositive && (padding.bottom = yDomainMin);
      isAllNegative && (padding.top = -yDomainMax);
    }
    var domain2 = isLog ? [yDomainMin, yDomainMax].map(function(v) {
      return v < 0 ? 0 : v;
    }) : [yDomainMin - padding.bottom, yDomainMax + padding.top];
    return isInverted ? domain2.reverse() : domain2;
  },
  getXDomainMinMax: function(targets, type2) {
    var $$ = this;
    var configValue = $$.config["axis_x_" + type2];
    var dataValue = getMinMax$1(type2, targets.map(function(t) {
      return getMinMax$1(type2, t.values.map(function(v) {
        return v.x;
      }));
    }));
    var value = isObject(configValue) ? configValue.value : configValue;
    value = isDefined(value) && $$.axis.isTimeSeries() ? parseDate.bind(this)(value) : value;
    if (isObject(configValue) && configValue.fit && (type2 === "min" && value < dataValue || type2 === "max" && value > dataValue)) {
      value = void 0;
    }
    return isDefined(value) ? value : dataValue;
  },
  getXDomainMin: function(targets) {
    return this.getXDomainMinMax(targets, "min");
  },
  getXDomainMax: function(targets) {
    return this.getXDomainMinMax(targets, "max");
  },
  getXDomainPadding: function(domain2) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config;
    var diff = domain2[1] - domain2[0];
    var xPadding = config.axis_x_padding;
    var maxDataCount;
    var padding;
    if (axis2.isCategorized()) {
      padding = 0;
    } else if ($$.hasType("bar")) {
      maxDataCount = $$.getMaxDataCount();
      padding = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : 0.5;
    } else {
      padding = diff * 0.01;
    }
    var left2 = padding;
    var right2 = padding;
    if (isObject(xPadding) && notEmpty(xPadding)) {
      left2 = isValue(xPadding.left) ? xPadding.left : padding;
      right2 = isValue(xPadding.right) ? xPadding.right : padding;
    } else if (isNumber(config.axis_x_padding)) {
      left2 = xPadding;
      right2 = xPadding;
    }
    return { left: left2, right: right2 };
  },
  getXDomain: function(targets) {
    var $$ = this;
    var isLog = $$.scale.x.type === "log";
    var xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)];
    var min2 = 0;
    var max2 = 0;
    if (isLog) {
      min2 = xDomain[0];
      max2 = xDomain[1];
    } else {
      var isCategorized = $$.axis.isCategorized();
      var isTimeSeries = $$.axis.isTimeSeries();
      var padding = $$.getXDomainPadding(xDomain);
      var firstX = xDomain[0], lastX = xDomain[1];
      if (firstX - lastX === 0 && !isCategorized) {
        if (isTimeSeries) {
          firstX = new Date(firstX.getTime() * 0.5);
          lastX = new Date(lastX.getTime() * 1.5);
        } else {
          firstX = firstX === 0 ? 1 : firstX * 0.5;
          lastX = lastX === 0 ? -1 : lastX * 1.5;
        }
      }
      if (firstX || firstX === 0) {
        min2 = isTimeSeries ? new Date(firstX.getTime() - padding.left) : firstX - padding.left;
      }
      if (lastX || lastX === 0) {
        max2 = isTimeSeries ? new Date(lastX.getTime() + padding.right) : lastX + padding.right;
      }
    }
    return [min2, max2];
  },
  updateXDomain: function(targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain2) {
    var $$ = this;
    var config = $$.config, org = $$.org, _a = $$.scale, x2 = _a.x, subX = _a.subX;
    var zoomEnabled = config.zoom_enabled;
    if (withUpdateOrgXDomain) {
      x2.domain(domain2 || sortValue($$.getXDomain(targets)));
      org.xDomain = x2.domain();
      zoomEnabled && $$.zoom.updateScaleExtent();
      subX.domain(x2.domain());
      $$.brush && $$.brush.scale(subX);
    }
    if (withUpdateXDomain) {
      var domainValue = domain2 || (!$$.brush || brushEmpty($$)) ? org.xDomain : getBrushSelection($$).map(subX.invert);
      x2.domain(domainValue);
      zoomEnabled && $$.zoom.updateScaleExtent();
    }
    withTrim && x2.domain($$.trimXDomain(x2.orgDomain()));
    return x2.domain();
  },
  trimXDomain: function(domain2) {
    var zoomDomain = this.getZoomDomain();
    var min2 = zoomDomain[0], max2 = zoomDomain[1];
    if (domain2[0] <= min2) {
      domain2[1] = +domain2[1] + (min2 - domain2[0]);
      domain2[0] = min2;
    }
    if (max2 <= domain2[1]) {
      domain2[0] = +domain2[0] - (domain2[1] - max2);
      domain2[1] = max2;
    }
    return domain2;
  },
  getZoomDomain: function() {
    var $$ = this;
    var config = $$.config, org = $$.org;
    var _a = org.xDomain, min2 = _a[0], max2 = _a[1];
    if (isDefined(config.zoom_x_min)) {
      min2 = getMinMax$1("min", [min2, config.zoom_x_min]);
    }
    if (isDefined(config.zoom_x_max)) {
      max2 = getMinMax$1("max", [max2, config.zoom_x_max]);
    }
    return [min2, max2];
  }
};
function getFormat($$, typeValue, v) {
  var config = $$.config;
  var type2 = "axis_" + typeValue + "_tick_format";
  var format2 = config[type2] ? config[type2] : $$.defaultValueFormat;
  return format2(v);
}
var format = {
  yFormat: function(v) {
    return getFormat(this, "y", v);
  },
  y2Format: function(v) {
    return getFormat(this, "y2", v);
  },
  getDefaultValueFormat: function() {
    var $$ = this;
    var hasArc = $$.hasArcType();
    return hasArc && !$$.hasType("gauge") ? $$.defaultArcValueFormat : $$.defaultValueFormat;
  },
  defaultValueFormat: function(v) {
    return isValue(v) ? +v : "";
  },
  defaultArcValueFormat: function(v, ratio) {
    return (ratio * 100).toFixed(1) + "%";
  },
  dataLabelFormat: function(targetId) {
    var $$ = this;
    var dataLabels = $$.config.data_labels;
    var defaultFormat = function(v) {
      return isValue(v) ? +v : "";
    };
    var format2 = defaultFormat;
    if (isFunction(dataLabels.format)) {
      format2 = dataLabels.format;
    } else if (isObjectType(dataLabels.format)) {
      if (dataLabels.format[targetId]) {
        format2 = dataLabels.format[targetId] === true ? defaultFormat : dataLabels.format[targetId];
      } else {
        format2 = function() {
          return "";
        };
      }
    }
    return format2.bind($$.api);
  }
};
var legend$1 = {
  initLegend: function() {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    $$.legendItemTextBox = {};
    $$.state.legendHasRendered = false;
    if (config.legend_show) {
      if (!config.legend_contents_bindto) {
        $el.legend = $$.$el.svg.append("g").classed(CLASS.legend, true).attr("transform", $$.getTranslate("legend"));
      }
      $$.updateLegend();
    } else {
      $$.state.hiddenLegendIds = $$.mapToIds($$.data.targets);
    }
  },
  updateLegend: function(targetIds, options2, transitions) {
    var $$ = this;
    var config = $$.config, state = $$.state, scale2 = $$.scale, $el = $$.$el;
    var optionz = options2 || {
      withTransform: false,
      withTransitionForTransform: false,
      withTransition: false
    };
    optionz.withTransition = getOption(optionz, "withTransition", true);
    optionz.withTransitionForTransform = getOption(optionz, "withTransitionForTransform", true);
    if (config.legend_contents_bindto && config.legend_contents_template) {
      $$.updateLegendTemplate();
    } else {
      $$.updateLegendElement(targetIds || $$.mapToIds($$.data.targets), optionz, transitions);
    }
    $el.legend.selectAll("." + CLASS.legendItem).classed(CLASS.legendItemHidden, function(id2) {
      var hide = !$$.isTargetToShow(id2);
      if (hide) {
        this.style.opacity = null;
      }
      return hide;
    });
    $$.updateScales(false, !scale2.zoom);
    $$.updateSvgSize();
    $$.transformAll(optionz.withTransitionForTransform, transitions);
    state.legendHasRendered = true;
  },
  updateLegendTemplate: function() {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    var wrapper = select(config.legend_contents_bindto);
    var template = config.legend_contents_template;
    if (!wrapper.empty()) {
      var targets = $$.mapToIds($$.data.targets);
      var ids_1 = [];
      var html_1 = "";
      targets.forEach(function(v) {
        var content = isFunction(template) ? template.bind($$.api)(v, $$.color(v), $$.api.data(v)[0].values) : tplProcess(template, {
          COLOR: $$.color(v),
          TITLE: v
        });
        if (content) {
          ids_1.push(v);
          html_1 += content;
        }
      });
      var legendItem = wrapper.html(html_1).selectAll(function() {
        return this.childNodes;
      }).data(ids_1);
      $$.setLegendItem(legendItem);
      $el.legend = wrapper;
    }
  },
  updateSizeForLegend: function(size2) {
    var $$ = this;
    var config = $$.config, _a = $$.state, isLegendTop = _a.isLegendTop, isLegendLeft = _a.isLegendLeft, isLegendRight = _a.isLegendRight, isLegendInset = _a.isLegendInset, current = _a.current;
    var width = size2.width, height = size2.height;
    var insetLegendPosition = {
      top: isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : current.height - height - $$.getCurrentPaddingBottom() - config.legend_inset_y,
      left: isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : current.width - width - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
    };
    $$.state.margin3 = {
      top: isLegendRight ? 0 : isLegendInset ? insetLegendPosition.top : current.height - height,
      right: NaN,
      bottom: 0,
      left: isLegendRight ? current.width - width : isLegendInset ? insetLegendPosition.left : 0
    };
  },
  transformLegend: function(withTransition) {
    var $$ = this;
    var legend2 = $$.$el.legend;
    (withTransition ? legend2.transition() : legend2).attr("transform", $$.getTranslate("legend"));
  },
  updateLegendStep: function(step2) {
    this.state.legendStep = step2;
  },
  updateLegendItemWidth: function(width) {
    this.state.legendItemWidth = width;
  },
  updateLegendItemHeight: function(height) {
    this.state.legendItemHeight = height;
  },
  updateLegendItemColor: function(id2, color2) {
    var legend2 = this.$el.legend;
    if (legend2) {
      legend2.select("." + CLASS.legendItem + "-" + id2 + " line").style("stroke", color2);
    }
  },
  getLegendWidth: function() {
    var $$ = this;
    var _a = $$.state, width = _a.current.width, isLegendRight = _a.isLegendRight, isLegendInset = _a.isLegendInset, legendItemWidth = _a.legendItemWidth, legendStep = _a.legendStep;
    return $$.config.legend_show ? isLegendRight || isLegendInset ? legendItemWidth * (legendStep + 1) : width : 0;
  },
  getLegendHeight: function() {
    var $$ = this;
    var _a = $$.state, current = _a.current, isLegendRight = _a.isLegendRight, legendItemHeight = _a.legendItemHeight, legendStep = _a.legendStep;
    return $$.config.legend_show ? isLegendRight ? current.height : Math.max(20, legendItemHeight) * (legendStep + 1) : 0;
  },
  opacityForUnfocusedLegend: function(legendItem) {
    return legendItem.classed(CLASS.legendItemHidden) ? null : "0.3";
  },
  toggleFocusLegend: function(targetIds, focus) {
    var $$ = this;
    var legend2 = $$.$el.legend;
    var targetIdz = $$.mapToTargetIds(targetIds);
    legend2 && legend2.selectAll("." + CLASS.legendItem).filter(function(id2) {
      return targetIdz.indexOf(id2) >= 0;
    }).classed(CLASS.legendItemFocused, focus).transition().duration(100).style("opacity", function() {
      return focus ? null : $$.opacityForUnfocusedLegend.call($$, select(this));
    });
  },
  revertLegend: function() {
    var $$ = this;
    var legend2 = $$.$el.legend;
    legend2 && legend2.selectAll("." + CLASS.legendItem).classed(CLASS.legendItemFocused, false).transition().duration(100).style("opacity", null);
  },
  showLegend: function(targetIds) {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    if (!config.legend_show) {
      config.legend_show = true;
      $el.legend ? $el.legend.style("visibility", null) : $$.initLegend();
      !$$.state.legendHasRendered && $$.updateLegend();
    }
    $$.removeHiddenLegendIds(targetIds);
    $el.legend.selectAll($$.selectorLegends(targetIds)).style("visibility", null).transition().style("opacity", null);
  },
  hideLegend: function(targetIds) {
    var $$ = this;
    var config = $$.config, legend2 = $$.$el.legend;
    if (config.legend_show && isEmpty(targetIds)) {
      config.legend_show = false;
      legend2.style("visibility", "hidden");
    }
    $$.addHiddenLegendIds(targetIds);
    legend2.selectAll($$.selectorLegends(targetIds)).style("opacity", "0").style("visibility", "hidden");
  },
  getLegendItemTextBox: function(id2, textElement) {
    var $$ = this;
    var cache = $$.cache, state = $$.state;
    var data2;
    var cacheKey2 = KEY.legendItemTextBox;
    if (id2) {
      data2 = !state.redrawing && cache.get(cacheKey2) || {};
      if (!data2[id2]) {
        data2[id2] = $$.getTextRect(textElement, CLASS.legendItem);
        cache.add(cacheKey2, data2);
      }
      data2 = data2[id2];
    }
    return data2;
  },
  setLegendItem: function(item) {
    var $$ = this;
    var api2 = $$.api, config = $$.config, state = $$.state;
    var isTouch = state.inputType === "touch";
    var hasGauge = $$.hasType("gauge");
    item.attr("class", function(id2) {
      var node = select(this);
      var itemClass = !node.empty() && node.attr("class") || "";
      return itemClass + $$.generateClass(CLASS.legendItem, id2);
    }).style("visibility", function(id2) {
      return $$.isLegendToShow(id2) ? null : "hidden";
    });
    if (config.interaction_enabled) {
      item.style("cursor", "pointer").on("click", function(event, id2) {
        if (!callFn(config.legend_item_onclick, api2, id2)) {
          if (event.altKey) {
            api2.hide();
            api2.show(id2);
          } else {
            api2.toggle(id2);
            select(this).classed(CLASS.legendItemFocused, false);
          }
        }
        isTouch && $$.hideTooltip();
      });
      !isTouch && item.on("mouseout", function(event, id2) {
        if (!callFn(config.legend_item_onout, api2, id2)) {
          select(this).classed(CLASS.legendItemFocused, false);
          if (hasGauge) {
            $$.undoMarkOverlapped($$, "." + CLASS.gaugeValue);
          }
          $$.api.revert();
        }
      }).on("mouseover", function(event, id2) {
        if (!callFn(config.legend_item_onover, api2, id2)) {
          select(this).classed(CLASS.legendItemFocused, true);
          if (hasGauge) {
            $$.markOverlapped(id2, $$, "." + CLASS.gaugeValue);
          }
          if (!state.transiting && $$.isTargetToShow(id2)) {
            api2.focus(id2);
          }
        }
      });
    }
  },
  updateLegendElement: function(targetIds, options2) {
    var $$ = this;
    var config = $$.config, state = $$.state, legend2 = $$.$el.legend;
    var paddingTop = 4;
    var paddingRight = 10;
    var posMin = 10;
    var tileWidth = config.legend_item_tile_width + 5;
    var maxWidth = 0;
    var maxHeight = 0;
    var xForLegend;
    var yForLegend;
    var totalLength = 0;
    var offsets = {};
    var widths = {};
    var heights = {};
    var margins = [0];
    var steps = {};
    var step2 = 0;
    var background;
    var isLegendRightOrInset = state.isLegendRight || state.isLegendInset;
    var targetIdz = targetIds.filter(function(id2) {
      return !isDefined(config.data_names[id2]) || config.data_names[id2] !== null;
    });
    var withTransition = options2.withTransition;
    var updatePositions = function(textElement, id2, index) {
      var reset = index === 0;
      var isLast = index === targetIdz.length - 1;
      var box = $$.getLegendItemTextBox(id2, textElement);
      var itemWidth = box.width + tileWidth + (isLast && !isLegendRightOrInset ? 0 : paddingRight) + config.legend_padding;
      var itemHeight = box.height + paddingTop;
      var itemLength = isLegendRightOrInset ? itemHeight : itemWidth;
      var areaLength = isLegendRightOrInset ? $$.getLegendHeight() : $$.getLegendWidth();
      var margin;
      var updateValues = function(id22, withoutStep) {
        if (!withoutStep) {
          margin = (areaLength - totalLength - itemLength) / 2;
          if (margin < posMin) {
            margin = (areaLength - itemLength) / 2;
            totalLength = 0;
            step2++;
          }
        }
        steps[id22] = step2;
        margins[step2] = state.isLegendInset ? 10 : margin;
        offsets[id22] = totalLength;
        totalLength += itemLength;
      };
      if (reset) {
        totalLength = 0;
        step2 = 0;
        maxWidth = 0;
        maxHeight = 0;
      }
      if (config.legend_show && !$$.isLegendToShow(id2)) {
        widths[id2] = 0;
        heights[id2] = 0;
        steps[id2] = 0;
        offsets[id2] = 0;
        return;
      }
      widths[id2] = itemWidth;
      heights[id2] = itemHeight;
      if (!maxWidth || itemWidth >= maxWidth) {
        maxWidth = itemWidth;
      }
      if (!maxHeight || itemHeight >= maxHeight) {
        maxHeight = itemHeight;
      }
      var maxLength = isLegendRightOrInset ? maxHeight : maxWidth;
      if (config.legend_equally) {
        Object.keys(widths).forEach(function(id22) {
          return widths[id22] = maxWidth;
        });
        Object.keys(heights).forEach(function(id22) {
          return heights[id22] = maxHeight;
        });
        margin = (areaLength - maxLength * targetIdz.length) / 2;
        if (margin < posMin) {
          totalLength = 0;
          step2 = 0;
          targetIdz.forEach(function(id22) {
            return updateValues(id22);
          });
        } else {
          updateValues(id2, true);
        }
      } else {
        updateValues(id2);
      }
    };
    if (state.isLegendInset) {
      step2 = config.legend_inset_step ? config.legend_inset_step : targetIdz.length;
      $$.updateLegendStep(step2);
    }
    if (state.isLegendRight) {
      xForLegend = function(id2) {
        return maxWidth * steps[id2];
      };
      yForLegend = function(id2) {
        return margins[steps[id2]] + offsets[id2];
      };
    } else if (state.isLegendInset) {
      xForLegend = function(id2) {
        return maxWidth * steps[id2] + 10;
      };
      yForLegend = function(id2) {
        return margins[steps[id2]] + offsets[id2];
      };
    } else {
      xForLegend = function(id2) {
        return margins[steps[id2]] + offsets[id2];
      };
      yForLegend = function(id2) {
        return maxHeight * steps[id2];
      };
    }
    var xForLegendText = function(id2, i) {
      return xForLegend(id2, i) + 4 + config.legend_item_tile_width;
    };
    var xForLegendRect = function(id2, i) {
      return xForLegend(id2, i);
    };
    var x1ForLegendTile = function(id2, i) {
      return xForLegend(id2, i) - 2;
    };
    var x2ForLegendTile = function(id2, i) {
      return xForLegend(id2, i) - 2 + config.legend_item_tile_width;
    };
    var yForLegendText = function(id2, i) {
      return yForLegend(id2, i) + 9;
    };
    var yForLegendRect = function(id2, i) {
      return yForLegend(id2, i) - 5;
    };
    var yForLegendTile = function(id2, i) {
      return yForLegend(id2, i) + 4;
    };
    var pos = -200;
    var l = legend2.selectAll("." + CLASS.legendItem).data(targetIdz).enter().append("g");
    $$.setLegendItem(l);
    l.append("text").text(function(id2) {
      return isDefined(config.data_names[id2]) ? config.data_names[id2] : id2;
    }).each(function(id2, i) {
      updatePositions(this, id2, i);
    }).style("pointer-events", "none").attr("x", isLegendRightOrInset ? xForLegendText : pos).attr("y", isLegendRightOrInset ? pos : yForLegendText);
    l.append("rect").attr("class", CLASS.legendItemEvent).style("fill-opacity", "0").attr("x", isLegendRightOrInset ? xForLegendRect : pos).attr("y", isLegendRightOrInset ? pos : yForLegendRect);
    var getColor = function(id2) {
      var data2 = $$.getDataById(id2);
      return $$.levelColor ? $$.levelColor(data2.values[0].value) : $$.color(data2);
    };
    var usePoint = config.legend_usePoint;
    if (usePoint) {
      var ids_2 = [];
      l.append(function(d) {
        var pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
        ids_2.indexOf(d) === -1 && ids_2.push(d);
        var point2 = pattern[ids_2.indexOf(d) % pattern.length];
        if (point2 === "rectangle") {
          point2 = "rect";
        }
        return doc.createElementNS(namespaces.svg, "hasValidPointType" in $$ && $$.hasValidPointType(point2) ? point2 : "use");
      }).attr("class", CLASS.legendItemPoint).style("fill", getColor).style("pointer-events", "none").attr("href", function(data2, idx, selection2) {
        var node = selection2[idx];
        var nodeName = node.nodeName.toLowerCase();
        return nodeName === "use" ? "#" + state.datetimeId + "-point-" + data2 : void 0;
      });
    } else {
      l.append("line").attr("class", CLASS.legendItemTile).style("stroke", getColor).style("pointer-events", "none").attr("x1", isLegendRightOrInset ? x1ForLegendTile : pos).attr("y1", isLegendRightOrInset ? pos : yForLegendTile).attr("x2", isLegendRightOrInset ? x2ForLegendTile : pos).attr("y2", isLegendRightOrInset ? pos : yForLegendTile).attr("stroke-width", config.legend_item_tile_height);
    }
    background = legend2.select("." + CLASS.legendBackground + " rect");
    if (state.isLegendInset && maxWidth > 0 && background.size() === 0) {
      background = legend2.insert("g", "." + CLASS.legendItem).attr("class", CLASS.legendBackground).append("rect");
    }
    var texts = legend2.selectAll("text").data(targetIdz).text(function(id2) {
      return isDefined(config.data_names[id2]) ? config.data_names[id2] : id2;
    }).each(function(id2, i) {
      updatePositions(this, id2, i);
    });
    (withTransition ? texts.transition() : texts).attr("x", xForLegendText).attr("y", yForLegendText);
    var rects = legend2.selectAll("rect." + CLASS.legendItemEvent).data(targetIdz);
    (withTransition ? rects.transition() : rects).attr("width", function(id2) {
      return widths[id2];
    }).attr("height", function(id2) {
      return heights[id2];
    }).attr("x", xForLegendRect).attr("y", yForLegendRect);
    if (usePoint) {
      var tiles = legend2.selectAll("." + CLASS.legendItemPoint).data(targetIdz);
      (withTransition ? tiles.transition() : tiles).each(function() {
        var nodeName = this.nodeName.toLowerCase();
        var pointR = config.point_r;
        var x2 = "x";
        var y3 = "y";
        var xOffset = 2;
        var yOffset = 2.5;
        var radius;
        var width;
        var height;
        if (nodeName === "circle") {
          var size2 = pointR * 0.2;
          x2 = "cx";
          y3 = "cy";
          radius = pointR + size2;
          xOffset = pointR * 2;
          yOffset = -size2;
        } else if (nodeName === "rect") {
          var size2 = pointR * 2.5;
          width = size2;
          height = size2;
          yOffset = 3;
        }
        select(this).attr(x2, function(d) {
          return x1ForLegendTile(d) + xOffset;
        }).attr(y3, function(d) {
          return yForLegendTile(d) - yOffset;
        }).attr("r", radius).attr("width", width).attr("height", height);
      });
    } else {
      var tiles = legend2.selectAll("line." + CLASS.legendItemTile).data(targetIdz);
      (withTransition ? tiles.transition() : tiles).style("stroke", getColor).attr("x1", x1ForLegendTile).attr("y1", yForLegendTile).attr("x2", x2ForLegendTile).attr("y2", yForLegendTile);
    }
    if (background) {
      (withTransition ? background.transition() : background).attr("height", $$.getLegendHeight() - 12).attr("width", maxWidth * (step2 + 1) + 10);
    }
    $$.updateLegendItemWidth(maxWidth);
    $$.updateLegendItemHeight(maxHeight);
    $$.updateLegendStep(step2);
  }
};
var redraw = {
  redraw: function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var main2 = $el.main;
    state.redrawing = true;
    var targetsToShow = $$.filterTargetsToShow($$.data.targets);
    var initializing = options2.initializing;
    var flow2 = options2.flow;
    var wth = $$.getWithOption(options2);
    var duration = wth.Transition ? config.transition_duration : 0;
    var durationForExit = wth.TransitionForExit ? duration : 0;
    var durationForAxis = wth.TransitionForAxis ? duration : 0;
    var transitions = $$.axis && $$.axis.generateTransitions(durationForAxis);
    $$.updateSizes(initializing);
    if (wth.Legend && config.legend_show) {
      options2.withTransition = !!duration;
      $$.updateLegend($$.mapToIds($$.data.targets), options2, transitions);
    } else if (wth.Dimension) {
      $$.updateDimension(true);
    }
    if (!$$.hasArcType() || state.hasRadar) {
      $$.updateCircleY && ($$.circleY = $$.updateCircleY());
    }
    if (state.hasAxis) {
      $$.axis.redrawAxis(targetsToShow, wth, transitions, flow2, initializing);
      config.data_empty_label_text && main2.select("text." + CLASS.text + "." + CLASS.empty).attr("x", state.width / 2).attr("y", state.height / 2).text(config.data_empty_label_text).style("display", targetsToShow.length ? "none" : null);
      $$.hasGrid() && $$.updateGrid(duration);
      config.regions.length && $$.updateRegion(duration);
      ["bar", "candlestick", "line", "area"].forEach(function(v) {
        var name = capitalize(v);
        if (/^(line|area)$/.test(v) && $$.hasTypeOf(name) || $$.hasType(v)) {
          $$["update" + name](durationForExit);
        }
      });
      $el.text && main2.selectAll("." + CLASS.selectedCircles).filter($$.isBarType.bind($$)).selectAll("circle").remove();
      if (config.interaction_enabled && !flow2 && wth.EventRect) {
        $$.redrawEventRect();
        $$.bindZoomEvent && $$.bindZoomEvent();
      }
    } else {
      $el.arcs && $$.redrawArc(duration, durationForExit, wth.Transform);
      $el.radar && $$.redrawRadar(durationForExit);
    }
    if (!state.resizing && ($$.hasPointType() || state.hasRadar)) {
      $$.updateCircle();
    }
    $$.hasDataLabel() && !$$.hasArcType(null, ["radar"]) && $$.updateText(durationForExit);
    $$.redrawTitle && $$.redrawTitle();
    initializing && $$.updateTypesElements();
    $$.generateRedrawList(targetsToShow, flow2, duration, wth.Subchart);
    $$.callPluginHook("$redraw", options2, duration);
  },
  generateRedrawList: function(targets, flow2, duration, withSubchart) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var shape2 = $$.getDrawShape();
    if (state.hasAxis) {
      config.subchart_show && $$.redrawSubchart(withSubchart, duration, shape2);
    }
    var flowFn = flow2 && $$.generateFlow({
      targets,
      flow: flow2,
      duration: flow2.duration,
      shape: shape2,
      xv: $$.xv.bind($$)
    });
    var isTransition = (duration || flowFn) && isTabVisible();
    var redrawList = $$.getRedrawList(shape2, flow2, flowFn, isTransition);
    var afterRedraw = function() {
      flowFn && flowFn();
      state.redrawing = false;
      callFn(config.onrendered, $$.api);
    };
    if (afterRedraw) {
      if (isTransition && redrawList.length) {
        var waitForDraw_1 = generateWait();
        transition().duration(duration).each(function() {
          redrawList.reduce(function(acc, t12) {
            return acc.concat(t12);
          }, []).forEach(function(t) {
            return waitForDraw_1.add(t);
          });
        }).call(waitForDraw_1, afterRedraw);
      } else if (!state.transiting) {
        afterRedraw();
      }
    }
    $$.mapToIds($$.data.targets).forEach(function(id2) {
      state.withoutFadeIn[id2] = true;
    });
  },
  getRedrawList: function(shape2, flow2, flowFn, isTransition) {
    var $$ = this;
    var config = $$.config, _a = $$.state, hasAxis = _a.hasAxis, hasRadar = _a.hasRadar, grid2 = $$.$el.grid;
    var _b = shape2.pos, cx = _b.cx, cy = _b.cy, xForText = _b.xForText, yForText = _b.yForText;
    var list = [];
    if (hasAxis) {
      if (config.grid_x_lines.length || config.grid_y_lines.length) {
        list.push($$.redrawGrid(isTransition));
      }
      if (config.regions.length) {
        list.push($$.redrawRegion(isTransition));
      }
      Object.keys(shape2.type).forEach(function(v) {
        var name = capitalize(v);
        var drawFn = shape2.type[v];
        if (/^(area|line)$/.test(v) && $$.hasTypeOf(name) || $$.hasType(v)) {
          list.push($$["redraw" + name](drawFn, isTransition));
        }
      });
      !flow2 && grid2.main && list.push($$.updateGridFocus());
    }
    if (!$$.hasArcType() || hasRadar) {
      notEmpty(config.data_labels) && config.data_labels !== false && list.push($$.redrawText(xForText, yForText, flow2, isTransition));
    }
    if (($$.hasPointType() || hasRadar) && !config.point_focus_only) {
      $$.redrawCircle && list.push($$.redrawCircle(cx, cy, isTransition, flowFn));
    }
    return list;
  },
  updateAndRedraw: function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var $$ = this;
    var config = $$.config, state = $$.state;
    var transitions;
    options2.withTransition = getOption(options2, "withTransition", true);
    options2.withTransform = getOption(options2, "withTransform", false);
    options2.withLegend = getOption(options2, "withLegend", false);
    options2.withUpdateXDomain = true;
    options2.withUpdateOrgXDomain = true;
    options2.withTransitionForExit = false;
    options2.withTransitionForTransform = getOption(options2, "withTransitionForTransform", options2.withTransition);
    if (!(options2.withLegend && config.legend_show)) {
      if (state.hasAxis) {
        transitions = $$.axis.generateTransitions(options2.withTransitionForAxis ? config.transition_duration : 0);
      }
      $$.updateScales();
      $$.updateSvgSize();
      $$.transformAll(options2.withTransitionForTransform, transitions);
    }
    $$.redraw(options2, transitions);
  },
  redrawWithoutRescale: function() {
    this.redraw({
      withY: false,
      withSubchart: false,
      withEventRect: false,
      withTransitionForAxis: false
    });
  }
};
function getScale(type2, min2, max2) {
  if (type2 === void 0) {
    type2 = "linear";
  }
  if (min2 === void 0) {
    min2 = 0;
  }
  if (max2 === void 0) {
    max2 = 1;
  }
  var scale2 = {
    linear,
    log: symlog,
    _log: log,
    time,
    utc: utcTime
  }[type2]();
  scale2.type = type2;
  /_?log/.test(type2) && scale2.clamp(true);
  return scale2.range([min2, max2]);
}
var scale = {
  getXScale: function(min2, max2, domain2, offset) {
    var $$ = this;
    var scale2 = $$.scale.zoom || getScale($$.axis.getAxisType("x"), min2, max2);
    return $$.getCustomizedScale(domain2 ? scale2.domain(domain2) : scale2, offset);
  },
  getYScale: function(id2, min2, max2, domain2) {
    var $$ = this;
    var scale2 = getScale($$.axis.getAxisType(id2), min2, max2);
    domain2 && scale2.domain(domain2);
    return scale2;
  },
  getYScaleById: function(id2, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var isY2 = this.axis.getId(id2) === "y2";
    var key = isSub ? isY2 ? "subY2" : "subY" : isY2 ? "y2" : "y";
    return this.scale[key];
  },
  getCustomizedScale: function(scaleValue, offsetValue) {
    var $$ = this;
    var offset = offsetValue || function() {
      return $$.axis.x.tickOffset();
    };
    var scale2 = function(d, raw) {
      var v = scaleValue(d) + offset();
      return raw ? v : Math.ceil(v);
    };
    for (var key in scaleValue) {
      scale2[key] = scaleValue[key];
    }
    scale2.orgDomain = function() {
      return scaleValue.domain();
    };
    scale2.orgScale = function() {
      return scaleValue;
    };
    if ($$.axis.isCategorized()) {
      scale2.domain = function(domainValue) {
        var domain2 = domainValue;
        if (!arguments.length) {
          domain2 = this.orgDomain();
          return [domain2[0], domain2[1] + 1];
        }
        scaleValue.domain(domain2);
        return scale2;
      };
    }
    return scale2;
  },
  updateScales: function(isInit, updateXDomain) {
    if (updateXDomain === void 0) {
      updateXDomain = true;
    }
    var $$ = this;
    var axis2 = $$.axis, config = $$.config, format2 = $$.format, org = $$.org, scale2 = $$.scale, _a = $$.state, width = _a.width, height = _a.height, width2 = _a.width2, height2 = _a.height2, hasAxis = _a.hasAxis;
    if (hasAxis) {
      var isRotated = config.axis_rotated;
      var min2 = {
        x: isRotated ? 1 : 0,
        y: isRotated ? 0 : height,
        subX: isRotated ? 1 : 0,
        subY: isRotated ? 0 : height2
      };
      var max2 = {
        x: isRotated ? height : width,
        y: isRotated ? width : 1,
        subX: isRotated ? height : width,
        subY: isRotated ? width2 : 1
      };
      var xDomain = updateXDomain && scale2.x && scale2.x.orgDomain();
      var xSubDomain = updateXDomain && org.xDomain;
      scale2.x = $$.getXScale(min2.x, max2.x, xDomain, function() {
        return axis2.x.tickOffset();
      });
      scale2.subX = $$.getXScale(min2.x, max2.x, xSubDomain, function(d) {
        return d % 1 ? 0 : axis2.subX.tickOffset();
      });
      format2.xAxisTick = axis2.getXAxisTickFormat();
      axis2.setAxis("x", scale2.x, config.axis_x_tick_outer, isInit);
      if (config.subchart_show) {
        axis2.setAxis("subX", scale2.subX, config.axis_x_tick_outer, isInit);
      }
      scale2.y = $$.getYScale("y", min2.y, max2.y, scale2.y ? scale2.y.domain() : config.axis_y_default);
      scale2.subY = $$.getYScale("y", min2.subY, max2.subY, scale2.subY ? scale2.subY.domain() : config.axis_y_default);
      axis2.setAxis("y", scale2.y, config.axis_y_tick_outer, isInit);
      if (config.axis_y2_show) {
        scale2.y2 = $$.getYScale("y2", min2.y, max2.y, scale2.y2 ? scale2.y2.domain() : config.axis_y2_default);
        scale2.subY2 = $$.getYScale("y2", min2.subY, max2.subY, scale2.subY2 ? scale2.subY2.domain() : config.axis_y2_default);
        axis2.setAxis("y2", scale2.y2, config.axis_y2_tick_outer, isInit);
      }
    } else {
      $$.updateArc && $$.updateArc();
    }
  },
  xx: function(d) {
    var $$ = this;
    var config = $$.config, _a = $$.scale, x2 = _a.x, zoom = _a.zoom;
    var fn = config.zoom_enabled && zoom ? zoom : x2;
    return d ? fn(isValue(d.x) ? d.x : d) : null;
  },
  xv: function(d) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config, _a = $$.scale, x2 = _a.x, zoom = _a.zoom;
    var fn = config.zoom_enabled && zoom ? zoom : x2;
    var value = $$.getBaseValue(d);
    if (axis2.isTimeSeries()) {
      value = parseDate.call($$, value);
    } else if (axis2.isCategorized() && isString(value)) {
      value = config.axis_x_categories.indexOf(value);
    }
    return Math.ceil(fn(value));
  },
  yv: function(d) {
    var $$ = this;
    var _a = $$.scale, y3 = _a.y, y22 = _a.y2;
    var yScale = d.axis && d.axis === "y2" ? y22 : y3;
    return Math.ceil(yScale($$.getBaseValue(d)));
  },
  subxx: function(d) {
    return d ? this.scale.subX(d.x) : null;
  }
};
var shape = {
  getDrawShape: function() {
    var $$ = this;
    var isRotated = $$.config.axis_rotated;
    var hasRadar = $$.state.hasRadar;
    var shape2 = { type: {}, indices: {}, pos: {} };
    ["bar", "candlestick", "line", "area"].forEach(function(v) {
      var name = capitalize(/^(bubble|scatter)$/.test(v) ? "line" : v);
      if ($$.hasType(v) || $$.hasTypeOf(name) || v === "line" && ($$.hasType("bubble") || $$.hasType("scatter"))) {
        var indices = $$.getShapeIndices($$["is" + name + "Type"]);
        var drawFn = $$["generateDraw" + name];
        shape2.indices[v] = indices;
        shape2.type[v] = drawFn ? drawFn.bind($$)(indices, false) : void 0;
      }
    });
    if (!$$.hasArcType() || hasRadar) {
      var cx = hasRadar ? $$.radarCircleX : isRotated ? $$.circleY : $$.circleX;
      var cy = hasRadar ? $$.radarCircleY : isRotated ? $$.circleX : $$.circleY;
      shape2.pos = {
        xForText: $$.generateXYForText(shape2.indices, true),
        yForText: $$.generateXYForText(shape2.indices, false),
        cx: (cx || function() {
        }).bind($$),
        cy: (cy || function() {
        }).bind($$)
      };
    }
    return shape2;
  },
  getShapeIndices: function(typeFilter) {
    var $$ = this;
    var config = $$.config;
    var xs = config.data_xs;
    var hasXs = notEmpty(xs);
    var indices = {};
    var i = hasXs ? {} : 0;
    if (hasXs) {
      getUnique(Object.keys(xs).map(function(v) {
        return xs[v];
      })).forEach(function(v) {
        i[v] = 0;
        indices[v] = {};
      });
    }
    $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function(d) {
      var xKey = d.id in xs ? xs[d.id] : "";
      var ind = xKey ? indices[xKey] : indices;
      for (var j = 0, groups = void 0; groups = config.data_groups[j]; j++) {
        if (groups.indexOf(d.id) < 0) {
          continue;
        }
        for (var k = 0, row = void 0; row = groups[k]; k++) {
          if (row in ind) {
            ind[d.id] = ind[row];
            break;
          }
        }
      }
      if (isUndefined(ind[d.id])) {
        ind[d.id] = xKey ? i[xKey]++ : i++;
        ind.__max__ = (xKey ? i[xKey] : i) - 1;
      }
    });
    return indices;
  },
  getIndices: function(indices, id2) {
    var xs = this.config.data_xs;
    return notEmpty(xs) ? indices[xs[id2]] : indices;
  },
  getIndicesMax: function(indices) {
    return notEmpty(this.config.data_xs) ? Object.keys(indices).map(function(v) {
      return indices[v].__max__ || 0;
    }).reduce(function(acc, curr) {
      return acc + curr;
    }) : indices.__max__;
  },
  getShapeX: function(offset, indices, isSub) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale;
    var currScale = isSub ? scale2.subX : scale2.zoom || scale2.x;
    var barPadding = config.bar_padding;
    var sum = function(p, c) {
      return p + c;
    };
    var halfWidth = isObjectType(offset) && (offset._$total.length ? offset._$total.reduce(sum) / 2 : 0);
    return function(d) {
      var ind = $$.getIndices(indices, d.id);
      var index = d.id in ind ? ind[d.id] : 0;
      var targetsNum = (ind.__max__ || 0) + 1;
      var x2 = 0;
      if (notEmpty(d.x)) {
        var xPos = currScale(d.x, true);
        if (halfWidth) {
          x2 = xPos - (offset[d.id] || offset._$width) + offset._$total.slice(0, index + 1).reduce(sum) - halfWidth;
        } else {
          x2 = xPos - (isNumber(offset) ? offset : offset._$width) * (targetsNum / 2 - index);
        }
      }
      if (offset && x2 && targetsNum > 1 && barPadding) {
        if (index) {
          x2 += barPadding * index;
        }
        if (targetsNum > 2) {
          x2 -= (targetsNum - 1) * barPadding / 2;
        } else if (targetsNum === 2) {
          x2 -= barPadding / 2;
        }
      }
      return x2;
    };
  },
  getShapeY: function(isSub) {
    var $$ = this;
    var isStackNormalized = $$.isStackNormalized();
    return function(d) {
      var value = d.value;
      if (isNumber(d)) {
        value = d;
      } else if (isStackNormalized) {
        value = $$.getRatio("index", d, true);
      } else if ($$.isBubbleZType(d)) {
        value = $$.getBubbleZData(d.value, "y");
      }
      return $$.getYScaleById(d.id, isSub)(value);
    };
  },
  getShapeYMin: function(id2) {
    var $$ = this;
    var scale2 = $$.scale[$$.axis.getId(id2)];
    var yMin = scale2.domain()[0];
    return !$$.isGrouped(id2) && yMin > 0 ? yMin : 0;
  },
  getShapeOffsetData: function(typeFilter) {
    var $$ = this;
    var targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)));
    var isStackNormalized = $$.isStackNormalized();
    var shapeOffsetTargets = targets.map(function(target) {
      var rowValues = target.values;
      var values = {};
      if ($$.isStepType(target)) {
        rowValues = $$.convertValuesToStep(rowValues);
      }
      var rowValueMapByXValue = rowValues.reduce(function(out, d) {
        var key = Number(d.x);
        out[key] = d;
        values[key] = isStackNormalized ? $$.getRatio("index", d, true) : d.value;
        return out;
      }, {});
      return {
        id: target.id,
        rowValues,
        rowValueMapByXValue,
        values
      };
    });
    var indexMapByTargetId = targets.reduce(function(out, _a, index) {
      var id2 = _a.id;
      out[id2] = index;
      return out;
    }, {});
    return { indexMapByTargetId, shapeOffsetTargets };
  },
  getShapeOffset: function(typeFilter, indices, isSub) {
    var $$ = this;
    var _a = $$.getShapeOffsetData(typeFilter), shapeOffsetTargets = _a.shapeOffsetTargets, indexMapByTargetId = _a.indexMapByTargetId;
    return function(d, idx) {
      var id2 = d.id, value = d.value, x2 = d.x;
      var ind = $$.getIndices(indices, id2);
      var scale2 = $$.getYScaleById(id2, isSub);
      var y0 = scale2($$.getShapeYMin(id2));
      var dataXAsNumber = Number(x2);
      var offset = y0;
      shapeOffsetTargets.filter(function(t) {
        return t.id !== id2;
      }).forEach(function(t) {
        var tid = t.id, rowValueMapByXValue = t.rowValueMapByXValue, rowValues = t.rowValues, tvalues = t.values;
        if (ind[tid] === ind[id2] && indexMapByTargetId[tid] < indexMapByTargetId[id2]) {
          var row = rowValues[idx];
          if (!row || Number(row.x) !== dataXAsNumber) {
            row = rowValueMapByXValue[dataXAsNumber];
          }
          if (row && row.value * value >= 0 && isNumber(tvalues[dataXAsNumber])) {
            offset += scale2(tvalues[dataXAsNumber]) - y0;
          }
        }
      });
      return offset;
    };
  },
  getBarW: function(type2, axis2, targetsNum) {
    var $$ = this;
    var config = $$.config, org = $$.org, scale2 = $$.scale;
    var maxDataCount = $$.getMaxDataCount();
    var isGrouped = type2 === "bar" && config.data_groups.length;
    var configName = type2 + "_width";
    var tickInterval = scale2.zoom && !$$.axis.isCategorized() ? org.xDomain.map(function(v) {
      return scale2.zoom(v);
    }).reduce(function(a, c) {
      return Math.abs(a) + c;
    }) / maxDataCount : axis2.tickInterval(maxDataCount);
    var getWidth = function(id2) {
      var width = id2 ? config[configName][id2] : config[configName];
      var ratio = id2 ? width.ratio : config[configName + "_ratio"];
      var max2 = id2 ? width.max : config[configName + "_max"];
      var w = isNumber(width) ? width : targetsNum ? tickInterval * ratio / targetsNum : 0;
      return max2 && w > max2 ? max2 : w;
    };
    var result = getWidth();
    if (!isGrouped && isObjectType(config[configName])) {
      result = { _$width: result, _$total: [] };
      $$.filterTargetsToShow($$.data.targets).forEach(function(v) {
        if (config[configName][v.id]) {
          result[v.id] = getWidth(v.id);
          result._$total.push(result[v.id] || result._$width);
        }
      });
    }
    return result;
  },
  getShapeByIndex: function(shapeName, i, id2) {
    var $$ = this;
    var main2 = $$.$el.main;
    var suffix = isValue(i) ? "-" + i : "";
    return (id2 ? main2.selectAll("." + CLASS[shapeName + "s"] + $$.getTargetSelectorSuffix(id2)) : main2).selectAll("." + CLASS[shapeName] + suffix);
  },
  isWithinShape: function(that, d) {
    var $$ = this;
    var shape2 = select(that);
    var isWithin;
    if (!$$.isTargetToShow(d.id)) {
      isWithin = false;
    } else if ("hasValidPointType" in $$ && $$.hasValidPointType(that.nodeName)) {
      isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScaleById(d.id)(d.value)) : $$.isWithinCircle(that, $$.isBubbleType(d) ? $$.pointSelectR(d) * 1.5 : 0);
    } else if (that.nodeName === "path") {
      isWithin = shape2.classed(CLASS.bar) ? $$.isWithinBar(that) : true;
    }
    return isWithin;
  },
  getInterpolate: function(d) {
    var $$ = this;
    var interpolation = $$.getInterpolateType(d);
    return {
      "basis": curveBasis,
      "basis-closed": curveBasisClosed,
      "basis-open": curveBasisOpen,
      "bundle": curveBundle,
      "cardinal": curveCardinal,
      "cardinal-closed": curveCardinalClosed,
      "cardinal-open": curveCardinalOpen,
      "catmull-rom": curveCatmullRom,
      "catmull-rom-closed": curveCatmullRomClosed,
      "catmull-rom-open": curveCatmullRomOpen,
      "monotone-x": monotoneX,
      "monotone-y": monotoneY,
      "natural": curveNatural,
      "linear-closed": curveLinearClosed,
      "linear": curveLinear,
      "step": curveStep,
      "step-after": stepAfter,
      "step-before": stepBefore
    }[interpolation];
  },
  getInterpolateType: function(d) {
    var $$ = this;
    var config = $$.config;
    var type2 = config.spline_interpolation_type;
    var interpolation = $$.isInterpolationType(type2) ? type2 : "cardinal";
    return $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? config.line_step_type : "linear";
  }
};
var size = {
  setContainerSize: function() {
    var $$ = this;
    var state = $$.state;
    state.current.width = $$.getCurrentWidth();
    state.current.height = $$.getCurrentHeight();
  },
  getCurrentWidth: function() {
    var $$ = this;
    return $$.config.size_width || $$.getParentWidth();
  },
  getCurrentHeight: function() {
    var $$ = this;
    var config = $$.config;
    var h = config.size_height || $$.getParentHeight();
    return h > 0 ? h : 320 / ($$.hasType("gauge") && !config.gauge_fullCircle ? 2 : 1);
  },
  getCurrentPaddingTop: function() {
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis, $el = $$.$el;
    var axesLen = hasAxis ? config.axis_y2_axes.length : 0;
    var padding = isValue(config.padding_top) ? config.padding_top : 0;
    if ($el.title && $el.title.node()) {
      padding += $$.getTitlePadding();
    }
    if (axesLen && config.axis_rotated) {
      padding += $$.getHorizontalAxisHeight("y2") * axesLen;
    }
    return padding;
  },
  getCurrentPaddingBottom: function() {
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis;
    var axisId = config.axis_rotated ? "y" : "x";
    var axesLen = hasAxis ? config["axis_" + axisId + "_axes"].length : 0;
    var padding = isValue(config.padding_bottom) ? config.padding_bottom : 0;
    return padding + (axesLen ? $$.getHorizontalAxisHeight(axisId) * axesLen : 0);
  },
  getCurrentPaddingLeft: function(withoutRecompute) {
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis;
    var isRotated = config.axis_rotated;
    var axisId = isRotated ? "x" : "y";
    var axesLen = hasAxis ? config["axis_" + axisId + "_axes"].length : 0;
    var axisWidth = hasAxis ? $$.getAxisWidthByAxisId(axisId, withoutRecompute) : 0;
    var padding;
    if (isValue(config.padding_left)) {
      padding = config.padding_left;
    } else if (hasAxis && isRotated) {
      padding = !config.axis_x_show ? 1 : Math.max(ceil10(axisWidth), 40);
    } else if (hasAxis && (!config.axis_y_show || config.axis_y_inner)) {
      padding = $$.axis.getAxisLabelPosition("y").isOuter ? 30 : 1;
    } else {
      padding = ceil10(axisWidth);
    }
    return padding + axisWidth * axesLen;
  },
  getCurrentPaddingRight: function(withXAxisTickTextOverflow) {
    if (withXAxisTickTextOverflow === void 0) {
      withXAxisTickTextOverflow = false;
    }
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis;
    var defaultPadding = 10;
    var legendWidthOnRight = $$.state.isLegendRight ? $$.getLegendWidth() + 20 : 0;
    var axesLen = hasAxis ? config.axis_y2_axes.length : 0;
    var axisWidth = hasAxis ? $$.getAxisWidthByAxisId("y2") : 0;
    var xAxisTickTextOverflow = withXAxisTickTextOverflow ? $$.axis.getXAxisTickTextY2Overflow(defaultPadding) : 0;
    var padding;
    if (isValue(config.padding_right)) {
      padding = config.padding_right + 1;
    } else if ($$.axis && config.axis_rotated) {
      padding = defaultPadding + legendWidthOnRight;
    } else if ($$.axis && (!config.axis_y2_show || config.axis_y2_inner)) {
      padding = Math.max(2 + legendWidthOnRight + ($$.axis.getAxisLabelPosition("y2").isOuter ? 20 : 0), xAxisTickTextOverflow);
    } else {
      padding = Math.max(ceil10(axisWidth) + legendWidthOnRight, xAxisTickTextOverflow);
    }
    return padding + axisWidth * axesLen;
  },
  getParentRectValue: function(key) {
    var offsetName = "offset" + capitalize(key);
    var parent = this.$el.chart.node();
    var v = 0;
    while (v < 30 && parent && parent.tagName !== "BODY") {
      try {
        v = parent.getBoundingClientRect()[key];
      } catch (e) {
        if (offsetName in parent) {
          v = parent[offsetName];
        }
      }
      parent = parent.parentNode;
    }
    var bodySize = doc.body[offsetName];
    v > bodySize && (v = bodySize);
    return v;
  },
  getParentWidth: function() {
    return this.getParentRectValue("width");
  },
  getParentHeight: function() {
    var h = this.$el.chart.style("height");
    var height = 0;
    if (h) {
      height = /px$/.test(h) ? parseInt(h, 10) : this.getParentRectValue("height");
    }
    return height;
  },
  getSvgLeft: function(withoutRecompute) {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    var hasLeftAxisRect = config.axis_rotated || !config.axis_rotated && !config.axis_y_inner;
    var leftAxisClass = config.axis_rotated ? CLASS.axisX : CLASS.axisY;
    var leftAxis = $el.main.select("." + leftAxisClass).node();
    var svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : { right: 0 };
    var chartRect = $el.chart.node().getBoundingClientRect();
    var hasArc = $$.hasArcType();
    var svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));
    return svgLeft > 0 ? svgLeft : 0;
  },
  updateDimension: function(withoutAxis) {
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis, $el = $$.$el;
    if (hasAxis && !withoutAxis && $$.axis.x && config.axis_rotated) {
      $$.axis.subX && $$.axis.subX.create($el.axis.subX);
    }
    $$.updateScales(withoutAxis);
    $$.updateSvgSize();
    $$.transformAll(false);
  },
  updateSvgSize: function() {
    var $$ = this;
    var _a = $$.state, clip2 = _a.clip, current = _a.current, hasAxis = _a.hasAxis, width = _a.width, height = _a.height, svg = $$.$el.svg;
    svg.attr("width", current.width).attr("height", current.height);
    if (hasAxis) {
      var brush = svg.select("." + CLASS.brush + " .overlay");
      var brushSize = { width: 0, height: 0 };
      if (brush.size()) {
        brushSize.width = +brush.attr("width");
        brushSize.height = +brush.attr("height");
      }
      svg.selectAll(["#" + clip2.id, "#" + clip2.idGrid]).select("rect").attr("width", width).attr("height", height);
      svg.select("#" + clip2.idXAxis).select("rect").call($$.setXAxisClipPath.bind($$));
      svg.select("#" + clip2.idYAxis).select("rect").call($$.setYAxisClipPath.bind($$));
      clip2.idSubchart && svg.select("#" + clip2.idSubchart).select("rect").attr("width", width).attr("height", brushSize.height);
    }
  },
  updateSizes: function(isInit) {
    var $$ = this;
    var config = $$.config, state = $$.state, legend2 = $$.$el.legend;
    var isRotated = config.axis_rotated;
    var hasArc = $$.hasArcType();
    !isInit && $$.setContainerSize();
    var currLegend = {
      width: legend2 ? $$.getLegendWidth() : 0,
      height: legend2 ? $$.getLegendHeight() : 0
    };
    if (!hasArc && config.axis_x_show && config.axis_x_tick_autorotate) {
      $$.updateXAxisTickClip();
    }
    var legendHeightForBottom = state.isLegendRight || state.isLegendInset ? 0 : currLegend.height;
    var xAxisHeight = isRotated || hasArc ? 0 : $$.getHorizontalAxisHeight("x");
    var subchartXAxisHeight = config.subchart_axis_x_show && config.subchart_axis_x_tick_text_show ? xAxisHeight : 30;
    var subchartHeight = config.subchart_show && !hasArc ? config.subchart_size_height + subchartXAxisHeight : 0;
    state.margin = !hasArc && isRotated ? {
      top: $$.getHorizontalAxisHeight("y2") + $$.getCurrentPaddingTop(),
      right: hasArc ? 0 : $$.getCurrentPaddingRight(true),
      bottom: $$.getHorizontalAxisHeight("y") + legendHeightForBottom + $$.getCurrentPaddingBottom(),
      left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
    } : {
      top: 4 + $$.getCurrentPaddingTop(),
      right: hasArc ? 0 : $$.getCurrentPaddingRight(true),
      bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
      left: hasArc ? 0 : $$.getCurrentPaddingLeft()
    };
    state.margin2 = isRotated ? {
      top: state.margin.top,
      right: NaN,
      bottom: 20 + legendHeightForBottom,
      left: $$.state.rotatedPadding.left
    } : {
      top: state.current.height - subchartHeight - legendHeightForBottom,
      right: NaN,
      bottom: subchartXAxisHeight + legendHeightForBottom,
      left: state.margin.left
    };
    state.margin3 = {
      top: 0,
      right: NaN,
      bottom: 0,
      left: 0
    };
    $$.updateSizeForLegend && $$.updateSizeForLegend(currLegend);
    state.width = state.current.width - state.margin.left - state.margin.right;
    state.height = state.current.height - state.margin.top - state.margin.bottom;
    if (state.width < 0) {
      state.width = 0;
    }
    if (state.height < 0) {
      state.height = 0;
    }
    state.width2 = isRotated ? state.margin.left - state.rotatedPadding.left - state.rotatedPadding.right : state.width;
    state.height2 = isRotated ? state.height : state.current.height - state.margin2.top - state.margin2.bottom;
    if (state.width2 < 0) {
      state.width2 = 0;
    }
    if (state.height2 < 0) {
      state.height2 = 0;
    }
    var hasGauge = $$.hasType("gauge");
    var isLegendRight = config.legend_show && state.isLegendRight;
    state.arcWidth = state.width - (isLegendRight ? currLegend.width + 10 : 0);
    state.arcHeight = state.height - (isLegendRight && !hasGauge ? 0 : 10);
    if (hasGauge && !config.gauge_fullCircle) {
      state.arcHeight += state.height - $$.getPaddingBottomForGauge();
    }
    $$.updateRadius && $$.updateRadius();
    if (state.isLegendRight && hasArc) {
      state.margin3.left = state.arcWidth / 2 + state.radiusExpanded * 1.1;
    }
  }
};
var text = {
  opacityForText: function(d) {
    var $$ = this;
    return $$.isBarType(d) && !$$.meetsLabelThreshold(Math.abs($$.getRatio("bar", d)), "bar") ? "0" : $$.hasDataLabel ? null : "0";
  },
  initText: function() {
    var $el = this.$el;
    $el.main.select("." + CLASS.chart).append("g").attr("class", CLASS.chartTexts);
  },
  updateTargetsForText: function(targets) {
    var $$ = this;
    var classChartText = $$.getChartClass("Text");
    var classTexts = $$.getClass("texts", "id");
    var classFocus = $$.classFocus.bind($$);
    var mainTextUpdate = $$.$el.main.select("." + CLASS.chartTexts).selectAll("." + CLASS.chartText).data(targets).attr("class", function(d) {
      return classChartText(d) + classFocus(d);
    });
    var mainTextEnter = mainTextUpdate.enter().append("g").style("opacity", "0").attr("class", classChartText).style("pointer-events", "none");
    mainTextEnter.append("g").attr("class", classTexts);
  },
  updateText: function(durationForExit) {
    var $$ = this;
    var $el = $$.$el, config = $$.config;
    var classText = $$.getClass("text", "index");
    var text2 = $el.main.selectAll("." + CLASS.texts).selectAll("." + CLASS.text).data($$.labelishData.bind($$));
    text2.exit().transition().duration(durationForExit).style("fill-opacity", "0").remove();
    $el.text = text2.enter().append("text").merge(text2).attr("class", classText).attr("text-anchor", function(d) {
      var isEndAnchor = d.value < 0;
      if ($$.isCandlestickType(d)) {
        var data2 = $$.getCandlestickData(d);
        isEndAnchor = data2 && !data2._isUp;
      }
      return config.axis_rotated ? isEndAnchor ? "end" : "start" : "middle";
    }).style("fill", $$.updateTextColor.bind($$)).style("fill-opacity", "0").each(function(d, i, j) {
      var node = select(this);
      var value = d.value;
      if ($$.isBubbleZType(d)) {
        value = $$.getBubbleZData(value, "z");
      } else if ($$.isCandlestickType(d)) {
        var data2 = $$.getCandlestickData(d);
        if (data2) {
          value = data2.close;
        }
      }
      value = $$.dataLabelFormat(d.id)(value, d.id, i, j);
      if (isNumber(value)) {
        this.textContent = value;
      } else {
        setTextValue(node, value);
      }
    });
  },
  updateTextColor: function(d) {
    var $$ = this;
    var config = $$.config;
    var labelColors = config.data_labels_colors;
    var defaultColor = $$.isArcType(d) && !$$.isRadarType(d) ? null : $$.color(d);
    var color2;
    if (isString(labelColors)) {
      color2 = labelColors;
    } else if (isObject(labelColors)) {
      var id2 = (d.data || d).id;
      color2 = labelColors[id2];
    } else if (isFunction(labelColors)) {
      color2 = labelColors.bind($$.api)(defaultColor, d);
    }
    if ($$.isCandlestickType(d) && !isFunction(labelColors)) {
      var value = $$.getCandlestickData(d);
      if (value && !value._isUp) {
        var downColor = config.candlestick_color_down;
        color2 = isObject(downColor) ? downColor[d.id] : downColor;
      }
    }
    return color2 || defaultColor;
  },
  updateTextBacgroundColor: function(d) {
    var $$ = this;
    var $el = $$.$el, config = $$.config;
    var backgroundColor = config.data_labels_backgroundColors;
    var color2 = "";
    if (isString(backgroundColor) || isObject(backgroundColor)) {
      var id2 = isString(backgroundColor) ? "" : $$.getTargetSelectorSuffix("id" in d ? d.id : d.data.id);
      var filter2 = $el.defs.select(["filter[id*='labels-bg", "']"].join(id2));
      if (filter2.size()) {
        color2 = "url(#" + filter2.attr("id") + ")";
      }
    }
    return color2 || null;
  },
  redrawText: function(x2, y3, forFlow, withTransition) {
    var $$ = this;
    var t = getRandom(true);
    $$.$el.text.style("fill", $$.updateTextColor.bind($$)).attr("filter", $$.updateTextBacgroundColor.bind($$)).style("fill-opacity", forFlow ? 0 : $$.opacityForText.bind($$)).each(function(d, i) {
      var node = withTransition && this.getAttribute("x") ? select(this).transition(t) : select(this);
      var posX = x2.bind(this)(d, i);
      var posY = y3.bind(this)(d, i);
      if (this.childElementCount) {
        node.attr("transform", "translate(" + posX + " " + posY + ")");
      } else {
        node.attr("x", posX).attr("y", posY);
      }
    });
    return true;
  },
  getTextRect: function(element, className) {
    var $$ = this;
    var base = element.node ? element.node() : element;
    if (!/text/i.test(base.tagName)) {
      base = base.querySelector("text");
    }
    var text2 = base.textContent;
    var cacheKey2 = KEY.textRect + "-" + text2.replace(/\W/g, "_");
    var rect = $$.cache.get(cacheKey2);
    if (!rect) {
      $$.$el.svg.append("text").style("visibility", "hidden").style("font", select(base).style("font")).classed(className, true).text(text2).call(function(v) {
        rect = getBoundingRect(v.node());
      }).remove();
      $$.cache.add(cacheKey2, rect);
    }
    return rect;
  },
  generateXYForText: function(indices, forX) {
    var $$ = this;
    var types = Object.keys(indices);
    var points = {};
    var getter = forX ? $$.getXForText : $$.getYForText;
    $$.hasType("radar") && types.push("radar");
    types.forEach(function(v) {
      points[v] = $$["generateGet" + capitalize(v) + "Points"](indices[v], false);
    });
    return function(d, i) {
      var type2 = $$.isAreaType(d) && "area" || $$.isBarType(d) && "bar" || $$.isCandlestickType(d) && "candlestick" || $$.isRadarType(d) && "radar" || "line";
      return getter.call($$, points[type2](d, i), d, this);
    };
  },
  getCenteredTextPos: function(d, points, textElement) {
    var $$ = this;
    var config = $$.config;
    var isRotated = config.axis_rotated;
    if (config.data_labels.centered && $$.isBarType(d)) {
      var rect = getBoundingRect(textElement);
      var isPositive = d.value >= 0;
      if (isRotated) {
        var w = (isPositive ? points[1][1] - points[0][1] : points[0][1] - points[1][1]) / 2 + rect.width / 2;
        return isPositive ? -w - 3 : w + 2;
      } else {
        var h = (isPositive ? points[0][1] - points[1][1] : points[1][1] - points[0][1]) / 2 + rect.height / 2;
        return isPositive ? h : -h - 2;
      }
    }
    return 0;
  },
  getTextPos: function(id2, type2) {
    var pos = this.config.data_labels_position;
    return (id2 in pos ? pos[id2] : pos)[type2] || 0;
  },
  getXForText: function(points, d, textElement) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var isRotated = config.axis_rotated;
    var xPos = points[0][0];
    if ($$.hasType("candlestick")) {
      if (isRotated) {
        xPos = $$.getCandlestickData(d)._isUp ? points[2][2] + 4 : points[2][1] - 4;
      } else {
        xPos += (points[1][0] - xPos) / 2;
      }
    } else {
      if (isRotated) {
        var padding = $$.isBarType(d) ? 4 : 6;
        xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1);
      } else {
        xPos = $$.hasType("bar") ? (points[2][0] + points[0][0]) / 2 : xPos;
      }
    }
    if (d.value === null) {
      if (xPos > state.width) {
        var width = getBoundingRect(textElement).width;
        xPos = state.width - width;
      } else if (xPos < 0) {
        xPos = 4;
      }
    }
    if (isRotated) {
      xPos += $$.getCenteredTextPos(d, points, textElement);
    }
    return xPos + $$.getTextPos(d.id, "x");
  },
  getYForText: function(points, d, textElement) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var isRotated = config.axis_rotated;
    var r = config.point_r;
    var rect = getBoundingRect(textElement);
    var value = d.value;
    var baseY = 3;
    var yPos;
    if ($$.isCandlestickType(d)) {
      value = $$.getCandlestickData(d);
      if (isRotated) {
        yPos = points[0][0];
        yPos += (points[1][0] - yPos) / 2 + baseY;
      } else {
        yPos = value && value._isUp ? points[2][2] - baseY : points[2][1] + baseY * 4;
      }
    } else {
      if (isRotated) {
        yPos = (points[0][0] + points[2][0] + rect.height * 0.6) / 2;
      } else {
        yPos = points[2][1];
        if (isNumber(r) && r > 5 && ($$.isLineType(d) || $$.isScatterType(d))) {
          baseY += config.point_r / 2.3;
        }
        if (value < 0 || value === 0 && !state.hasPositiveValue && state.hasNegativeValue) {
          yPos += rect.height + ($$.isBarType(d) ? -baseY : baseY);
        } else {
          var diff = -baseY * 2;
          if ($$.isBarType(d)) {
            diff = -baseY;
          } else if ($$.isBubbleType(d)) {
            diff = baseY;
          }
          yPos += diff;
        }
      }
    }
    if (d.value === null && !isRotated) {
      var boxHeight = rect.height;
      if (yPos < boxHeight) {
        yPos = boxHeight;
      } else if (yPos > state.height) {
        yPos = state.height - 4;
      }
    }
    if (!isRotated) {
      yPos += $$.getCenteredTextPos(d, points, textElement);
    }
    return yPos + $$.getTextPos(d.id, "y");
  },
  markOverlapped: function(id2, $$, selector2) {
    var textNodes = $$.$el.arcs.selectAll(selector2);
    var filteredTextNodes = textNodes.filter(function(node) {
      return node.data.id !== id2;
    });
    var textNode = textNodes.filter(function(node) {
      return node.data.id === id2;
    });
    var translate = getTranslation(textNode.node());
    var calcHypo = function(x2, y3) {
      return Math.sqrt(Math.pow(x2, 2) + Math.pow(y3, 2));
    };
    textNode.node() && filteredTextNodes.each(function() {
      var coordinate = getTranslation(this);
      var filteredTextNode = select(this);
      var nodeForWidth = calcHypo(translate.e, translate.f) > calcHypo(coordinate.e, coordinate.f) ? textNode : filteredTextNode;
      var overlapsX = Math.ceil(Math.abs(translate.e - coordinate.e)) < Math.ceil(nodeForWidth.node().getComputedTextLength());
      var overlapsY = Math.ceil(Math.abs(translate.f - coordinate.f)) < parseInt(textNode.style("font-size"), 10);
      filteredTextNode.classed(CLASS.TextOverlapping, overlapsX && overlapsY);
    });
  },
  undoMarkOverlapped: function($$, selector2) {
    $$.$el.arcs.selectAll(selector2).each(function() {
      selectAll([this, this.previousSibling]).classed(CLASS.TextOverlapping, false);
    });
  },
  meetsLabelThreshold: function(ratio, type2) {
    if (ratio === void 0) {
      ratio = 0;
    }
    var $$ = this;
    var config = $$.config;
    var threshold = config[type2 + "_label_threshold"] || 0;
    return ratio >= threshold;
  }
};
function getTextPos(pos, width) {
  if (pos === void 0) {
    pos = "left";
  }
  var isNum = isNumber(width);
  var position;
  if (pos.indexOf("center") > -1) {
    position = isNum ? width / 2 : "middle";
  } else if (pos.indexOf("right") > -1) {
    position = isNum ? width : "end";
  } else {
    position = isNum ? 0 : "start";
  }
  return position;
}
var title = {
  initTitle: function() {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    if (config.title_text) {
      $el.title = $el.svg.append("g");
      var text2 = $el.title.append("text").style("text-anchor", getTextPos(config.title_position)).attr("class", CLASS.title);
      setTextValue(text2, config.title_text, [0.3, 1.5]);
    }
  },
  redrawTitle: function() {
    var $$ = this;
    var config = $$.config, current = $$.state.current, title2 = $$.$el.title;
    if (title2) {
      var y3 = $$.yForTitle.call($$);
      if (/g/i.test(title2.node().tagName)) {
        title2.attr("transform", "translate(" + getTextPos(config.title_position, current.width) + ", " + y3 + ")");
      } else {
        title2.attr("x", $$.xForTitle.call($$)).attr("y", y3);
      }
    }
  },
  xForTitle: function() {
    var $$ = this;
    var config = $$.config, current = $$.state.current;
    var position = config.title_position || "left";
    var textRectWidth = $$.getTextRect($$.$el.title, CLASS.title).width;
    var x2;
    if (/(right|center)/.test(position)) {
      x2 = current.width - textRectWidth;
      if (position.indexOf("right") >= 0) {
        x2 = current.width - textRectWidth - config.title_padding.right;
      } else if (position.indexOf("center") >= 0) {
        x2 = (current.width - textRectWidth) / 2;
      }
    } else {
      x2 = config.title_padding.left || 0;
    }
    return x2;
  },
  yForTitle: function() {
    var $$ = this;
    return ($$.config.title_padding.top || 0) + $$.getTextRect($$.$el.title, CLASS.title).height;
  },
  getTitlePadding: function() {
    var $$ = this;
    return $$.yForTitle() + ($$.config.title_padding.bottom || 0);
  }
};
var tooltip$1 = {
  initTooltip: function() {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    $el.tooltip = select(config.tooltip_contents.bindto);
    if ($el.tooltip.empty()) {
      $el.tooltip = $el.chart.style("position", "relative").append("div").attr("class", CLASS.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none");
    }
    $$.bindTooltipResizePos();
  },
  initShowTooltip: function() {
    var $$ = this;
    var config = $$.config, $el = $$.$el, _a = $$.state, hasAxis = _a.hasAxis, hasRadar = _a.hasRadar;
    if (config.tooltip_init_show) {
      var isArc_1 = !(hasAxis && hasRadar);
      if ($$.axis && $$.axis.isTimeSeries() && isString(config.tooltip_init_x)) {
        var targets = $$.data.targets[0];
        var i = void 0;
        var val = void 0;
        config.tooltip_init_x = parseDate.call($$, config.tooltip_init_x);
        for (i = 0; val = targets.values[i]; i++) {
          if (val.x - config.tooltip_init_x === 0) {
            break;
          }
        }
        config.tooltip_init_x = i;
      }
      var data2 = $$.data.targets.map(function(d) {
        var x2 = isArc_1 ? 0 : config.tooltip_init_x;
        return $$.addName(d.values[x2]);
      });
      if (isArc_1) {
        data2 = [data2[config.tooltip_init_x]];
      }
      $el.tooltip.html($$.getTooltipHTML(data2, $$.axis && $$.axis.getXAxisTickFormat(), $$.getDefaultValueFormat(), $$.color));
      if (!config.tooltip_contents.bindto) {
        $el.tooltip.style("top", config.tooltip_init_position.top).style("left", config.tooltip_init_position.left).style("display", null);
      }
    }
  },
  getTooltipHTML: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var $$ = this;
    var api2 = $$.api, config = $$.config;
    return isFunction(config.tooltip_contents) ? config.tooltip_contents.bind(api2).apply(void 0, args) : $$.getTooltipContent.apply($$, args);
  },
  getTooltipContent: function(d, defaultTitleFormat, defaultValueFormat, color2) {
    var $$ = this;
    var api2 = $$.api, config = $$.config, state = $$.state;
    var _a = ["title", "name", "value"].map(function(v) {
      var fn = config["tooltip_format_" + v];
      return isFunction(fn) ? fn.bind(api2) : fn;
    }), titleFormat = _a[0], nameFormat = _a[1], valueFormat = _a[2];
    titleFormat = titleFormat || defaultTitleFormat;
    nameFormat = nameFormat || function(name) {
      return name;
    };
    valueFormat = valueFormat || ($$.isStackNormalized() ? function(v, ratio) {
      return (ratio * 100).toFixed(2) + "%";
    } : defaultValueFormat);
    var order = config.tooltip_order;
    var getRowValue = function(row2) {
      return $$.axis && $$.isBubbleZType(row2) ? $$.getBubbleZData(row2.value, "z") : $$.getBaseValue(row2);
    };
    var getBgColor = $$.levelColor ? function(row2) {
      return $$.levelColor(row2.value);
    } : function(row2) {
      return color2(row2);
    };
    var contents = config.tooltip_contents;
    var tplStr = contents.template;
    var targetIds = $$.mapToTargetIds();
    if (order === null && config.data_groups.length) {
      var ids_1 = $$.orderTargets($$.data.targets).map(function(i2) {
        return i2.id;
      }).reverse();
      d.sort(function(a, b) {
        var v1 = a ? a.value : null;
        var v2 = b ? b.value : null;
        if (v1 > 0 && v2 > 0) {
          v1 = a.id ? ids_1.indexOf(a.id) : null;
          v2 = b.id ? ids_1.indexOf(b.id) : null;
        }
        return v1 - v2;
      });
    } else if (/^(asc|desc)$/.test(order)) {
      var isAscending_1 = order === "asc";
      d.sort(function(a, b) {
        var v1 = a ? getRowValue(a) : null;
        var v2 = b ? getRowValue(b) : null;
        return isAscending_1 ? v1 - v2 : v2 - v1;
      });
    } else if (isFunction(order)) {
      d.sort(order.bind(api2));
    }
    var tpl = $$.getTooltipContentTemplate(tplStr);
    var len = d.length;
    var text2;
    var row;
    var param;
    var value;
    var i;
    var _loop_1 = function() {
      row = d[i];
      if (!row || !(getRowValue(row) || getRowValue(row) === 0)) {
        return "continue";
      }
      if (isUndefined(text2)) {
        var title2 = (state.hasAxis || state.hasRadar) && sanitise(titleFormat ? titleFormat(row.x) : row.x);
        text2 = tplProcess(tpl[0], {
          CLASS_TOOLTIP: CLASS.tooltip,
          TITLE: isValue(title2) ? tplStr ? title2 : '<tr><th colspan="2">' + title2 + "</th></tr>" : ""
        });
      }
      if (!row.ratio && $$.$el.arcs) {
        row.ratio = $$.getRatio("arc", $$.$el.arcs.select("path." + CLASS.arc + "-" + row.id).data()[0]);
      }
      param = [row.ratio, row.id, row.index, d];
      value = sanitise(valueFormat.apply(void 0, __spreadArray([getRowValue(row)], param)));
      if ($$.isAreaRangeType(row)) {
        var _b = ["high", "low"].map(function(v) {
          return sanitise(valueFormat.apply(void 0, __spreadArray([$$.getRangedData(row, v)], param)));
        }), high = _b[0], low = _b[1];
        value = "<b>Mid:</b> " + value + " <b>High:</b> " + high + " <b>Low:</b> " + low;
      } else if ($$.isCandlestickType(row)) {
        var _c = ["open", "high", "low", "close", "volume"].map(function(v) {
          return sanitise(valueFormat.apply(void 0, __spreadArray([$$.getRangedData(row, v, "candlestick")], param)));
        }), open_1 = _c[0], high = _c[1], low = _c[2], close_1 = _c[3], volume = _c[4];
        value = "<b>Open:</b> " + open_1 + " <b>High:</b> " + high + " <b>Low:</b> " + low + " <b>Close:</b> " + close_1 + (volume ? " <b>Volume:</b> " + volume : "");
      }
      if (value !== void 0) {
        if (row.name === null) {
          return "continue";
        }
        var name_1 = sanitise(nameFormat.apply(void 0, __spreadArray([row.name], param)));
        var color_1 = getBgColor(row);
        var contentValue_1 = {
          CLASS_TOOLTIP_NAME: CLASS.tooltipName + $$.getTargetSelectorSuffix(row.id),
          COLOR: tplStr || !$$.patterns ? color_1 : '<svg><rect style="fill:' + color_1 + '" width="10" height="10"></rect></svg>',
          NAME: name_1,
          VALUE: value
        };
        if (tplStr && isObject(contents.text)) {
          var index_1 = targetIds.indexOf(row.id);
          Object.keys(contents.text).forEach(function(key) {
            contentValue_1[key] = contents.text[key][index_1];
          });
        }
        text2 += tplProcess(tpl[1], contentValue_1);
      }
    };
    for (i = 0; i < len; i++) {
      _loop_1();
    }
    return text2 + "</table>";
  },
  getTooltipContentTemplate: function(tplStr) {
    return (tplStr || '<table class="{=CLASS_TOOLTIP}"><tbody>\n				{=TITLE}\n				{{<tr class="{=CLASS_TOOLTIP_NAME}">\n					<td class="name">' + (this.patterns ? "{=COLOR}" : '<span style="background-color:{=COLOR}"></span>') + '{=NAME}</td>\n					<td class="value">{=VALUE}</td>\n				</tr>}}\n			</tbody></table>').replace(/(\r?\n|\t)/g, "").split(/{{(.*)}}/);
  },
  tooltipPosition: function(dataToShow, tWidth, tHeight, element) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale, state = $$.state;
    var width = state.width, height = state.height, current = state.current, isLegendRight = state.isLegendRight, inputType = state.inputType, event = state.event;
    var hasGauge = $$.hasType("gauge") && !config.gauge_fullCircle;
    var svgLeft = $$.getSvgLeft(true);
    var chartRight = svgLeft + current.width - $$.getCurrentPaddingRight();
    var chartLeft = $$.getCurrentPaddingLeft(true);
    var size2 = 20;
    var _a = getPointer(event, element), x2 = _a[0], y3 = _a[1];
    if ($$.hasArcType()) {
      var raw = inputType === "touch" || $$.hasType("radar");
      if (!raw) {
        y3 += hasGauge ? height : height / 2;
        x2 += (width - (isLegendRight ? $$.getLegendWidth() : 0)) / 2;
      }
    } else {
      var dataScale = scale2.x(dataToShow[0].x);
      if (config.axis_rotated) {
        y3 = dataScale + size2;
        x2 += svgLeft + 100;
        chartRight -= svgLeft;
      } else {
        y3 -= 5;
        x2 = svgLeft + chartLeft + size2 + ($$.scale.zoom ? x2 : dataScale);
      }
    }
    if (x2 + tWidth + 15 > chartRight) {
      x2 -= tWidth + chartLeft;
    }
    if (y3 + tHeight > current.height) {
      y3 -= hasGauge ? tHeight * 3 : tHeight + 30;
    }
    var pos = { top: y3, left: x2 };
    Object.keys(pos).forEach(function(v) {
      if (pos[v] < 0) {
        pos[v] = 0;
      }
    });
    return pos;
  },
  showTooltip: function(selectedData, element) {
    var _a;
    var $$ = this;
    var config = $$.config, state = $$.state, tooltip2 = $$.$el.tooltip;
    var bindto = config.tooltip_contents.bindto;
    var dataToShow = selectedData.filter(function(d) {
      return d && isValue($$.getBaseValue(d));
    });
    if (!tooltip2 || dataToShow.length === 0 || !config.tooltip_show) {
      return;
    }
    var datum2 = tooltip2.datum();
    var _b = datum2 || {}, _c = _b.width, width = _c === void 0 ? 0 : _c, _d = _b.height, height = _d === void 0 ? 0 : _d;
    var dataStr = JSON.stringify(selectedData);
    if (!datum2 || datum2.current !== dataStr) {
      var index = selectedData.concat().sort()[0].index;
      callFn(config.tooltip_onshow, $$.api, selectedData);
      tooltip2.html($$.getTooltipHTML(selectedData, $$.axis ? $$.axis.getXAxisTickFormat() : $$.categoryName.bind($$), $$.getDefaultValueFormat(), $$.color)).style("display", null).style("visibility", null).datum(datum2 = {
        index,
        current: dataStr,
        width: width = tooltip2.property("offsetWidth"),
        height: height = tooltip2.property("offsetHeight")
      });
      callFn(config.tooltip_onshown, $$.api, selectedData);
      $$._handleLinkedCharts(true, index);
    }
    if (!bindto) {
      var fnPos = ((_a = config.tooltip_position) === null || _a === void 0 ? void 0 : _a.bind($$.api)) || $$.tooltipPosition.bind($$);
      var pos_1 = fnPos(dataToShow, width, height, element);
      ["top", "left"].forEach(function(v) {
        var value = pos_1[v];
        tooltip2.style(v, value + "px");
        if (v === "left" && !datum2.xPosInPercent) {
          datum2.xPosInPercent = value / state.current.width * 100;
        }
      });
    }
  },
  bindTooltipResizePos: function() {
    var $$ = this;
    var resizeFunction = $$.resizeFunction, state = $$.state, tooltip2 = $$.$el.tooltip;
    resizeFunction.add(function() {
      if (tooltip2.style("display") === "block") {
        var current = state.current;
        var _a = tooltip2.datum(), width = _a.width, xPosInPercent = _a.xPosInPercent;
        var value = current.width / 100 * xPosInPercent;
        var diff = current.width - (value + width);
        if (diff < 0) {
          value += diff;
        }
        tooltip2.style("left", value + "px");
      }
    });
  },
  hideTooltip: function(force) {
    var $$ = this;
    var api2 = $$.api, config = $$.config, tooltip2 = $$.$el.tooltip;
    if (tooltip2 && tooltip2.style("display") !== "none" && (!config.tooltip_doNotHide || force)) {
      var selectedData = JSON.parse(tooltip2.datum().current);
      callFn(config.tooltip_onhide, api2, selectedData);
      tooltip2.style("display", "none").style("visibility", "hidden").datum(null);
      callFn(config.tooltip_onhidden, api2, selectedData);
    }
  },
  _handleLinkedCharts: function(show, index) {
    var $$ = this;
    var charts = $$.charts, config = $$.config, event = $$.state.event;
    if (event && event.isTrusted && config.tooltip_linked && charts.length > 1) {
      var linkedName_1 = config.tooltip_linked_name;
      charts.filter(function(c) {
        return c !== $$.api;
      }).forEach(function(c) {
        var _a = c.internal, config2 = _a.config, $el = _a.$el;
        var isLinked = config2.tooltip_linked;
        var name = config2.tooltip_linked_name;
        var isInDom = doc.body.contains($el.chart.node());
        if (isLinked && linkedName_1 === name && isInDom) {
          var data2 = $el.tooltip.data()[0];
          var isNotSameIndex = index !== (data2 && data2.index);
          try {
            c.tooltip[show && isNotSameIndex ? "show" : "hide"]({ index });
          } catch (e) {
          }
        }
      });
    }
  }
};
var transform = {
  getTranslate: function(target, index) {
    if (index === void 0) {
      index = 0;
    }
    var $$ = this;
    var config = $$.config, state = $$.state;
    var isRotated = config.axis_rotated;
    var padding = 0;
    var x2;
    var y3;
    if (index && /^(x|y2?)$/.test(target)) {
      padding = $$.getAxisSize(target) * index;
    }
    if (target === "main") {
      x2 = asHalfPixel(state.margin.left);
      y3 = asHalfPixel(state.margin.top);
    } else if (target === "context") {
      x2 = asHalfPixel(state.margin2.left);
      y3 = asHalfPixel(state.margin2.top);
    } else if (target === "legend") {
      x2 = state.margin3.left;
      y3 = state.margin3.top;
    } else if (target === "x") {
      x2 = isRotated ? -padding : 0;
      y3 = isRotated ? 0 : state.height + padding;
    } else if (target === "y") {
      x2 = isRotated ? 0 : -padding;
      y3 = isRotated ? state.height + padding : 0;
    } else if (target === "y2") {
      x2 = isRotated ? 0 : state.width + padding;
      y3 = isRotated ? 1 - padding : 0;
    } else if (target === "subX") {
      x2 = 0;
      y3 = isRotated ? 0 : state.height2;
    } else if (target === "arc") {
      x2 = state.arcWidth / 2;
      y3 = state.arcHeight / 2;
    } else if (target === "radar") {
      var width = $$.getRadarSize()[0];
      x2 = state.width / 2 - width;
      y3 = asHalfPixel(state.margin.top);
    }
    return "translate(" + x2 + ", " + y3 + ")";
  },
  transformMain: function(withTransition, transitions) {
    var $$ = this;
    var main2 = $$.$el.main;
    var xAxis;
    var yAxis;
    var y2Axis;
    if (transitions && transitions.axisX) {
      xAxis = transitions.axisX;
    } else {
      xAxis = main2.select("." + CLASS.axisX);
      if (withTransition) {
        xAxis = xAxis.transition();
      }
    }
    if (transitions && transitions.axisY) {
      yAxis = transitions.axisY;
    } else {
      yAxis = main2.select("." + CLASS.axisY);
      if (withTransition) {
        yAxis = yAxis.transition();
      }
    }
    if (transitions && transitions.axisY2) {
      y2Axis = transitions.axisY2;
    } else {
      y2Axis = main2.select("." + CLASS.axisY2);
      if (withTransition) {
        y2Axis = y2Axis.transition();
      }
    }
    (withTransition ? main2.transition() : main2).attr("transform", $$.getTranslate("main"));
    xAxis.attr("transform", $$.getTranslate("x"));
    yAxis.attr("transform", $$.getTranslate("y"));
    y2Axis.attr("transform", $$.getTranslate("y2"));
    main2.select("." + CLASS.chartArcs).attr("transform", $$.getTranslate("arc"));
  },
  transformAll: function(withTransition, transitions) {
    var $$ = this;
    var config = $$.config, hasAxis = $$.state.hasAxis, $el = $$.$el;
    $$.transformMain(withTransition, transitions);
    hasAxis && config.subchart_show && $$.transformContext(withTransition, transitions);
    $el.legend && $$.transformLegend(withTransition);
  }
};
var type = {
  setTargetType: function(targetIds, type2) {
    var $$ = this;
    var config = $$.config, withoutFadeIn = $$.state.withoutFadeIn;
    $$.mapToTargetIds(targetIds).forEach(function(id2) {
      withoutFadeIn[id2] = type2 === config.data_types[id2];
      config.data_types[id2] = type2;
    });
    if (!targetIds) {
      config.data_type = type2;
    }
  },
  updateTypesElements: function() {
    var $$ = this;
    var current = $$.state.current;
    Object.keys(TYPE).forEach(function(v) {
      var t = TYPE[v];
      var has = $$.hasType(t, null, true);
      var idx = current.types.indexOf(t);
      if (idx === -1 && has) {
        current.types.push(t);
      } else if (idx > -1 && !has) {
        current.types.splice(idx, 1);
      }
    });
    $$.setChartElements();
  },
  hasType: function(type2, targetsValue, checkFromData) {
    if (checkFromData === void 0) {
      checkFromData = false;
    }
    var $$ = this;
    var config = $$.config, current = $$.state.current;
    var types = config.data_types;
    var targets = targetsValue || $$.data.targets;
    var has = false;
    if (!checkFromData && current.types.length && current.types.indexOf(type2) > -1) {
      has = true;
    } else if (targets && targets.length) {
      targets.forEach(function(target) {
        var t = types[target.id];
        if (t === type2 || !t && type2 === "line") {
          has = true;
        }
      });
    } else if (Object.keys(types).length) {
      Object.keys(types).forEach(function(id2) {
        if (types[id2] === type2) {
          has = true;
        }
      });
    } else {
      has = config.data_type === type2;
    }
    return has;
  },
  hasTypeOf: function(type2, targets, exclude) {
    var _this = this;
    if (exclude === void 0) {
      exclude = [];
    }
    if (type2 in TYPE_BY_CATEGORY) {
      return !TYPE_BY_CATEGORY[type2].filter(function(v) {
        return exclude.indexOf(v) === -1;
      }).every(function(v) {
        return !_this.hasType(v, targets);
      });
    }
    return false;
  },
  isTypeOf: function(d, type2) {
    var id2 = isString(d) ? d : d.id;
    var dataType = this.config.data_types[id2] || this.config.data_type;
    return isArray(type2) ? type2.indexOf(dataType) >= 0 : dataType === type2;
  },
  hasPointType: function() {
    var $$ = this;
    return $$.hasTypeOf("Line") || $$.hasType("bubble") || $$.hasType("scatter");
  },
  hasArcType: function(targets, exclude) {
    return this.hasTypeOf("Arc", targets, exclude);
  },
  hasMultiArcGauge: function() {
    return this.hasType("gauge") && this.config.gauge_type === "multi";
  },
  isLineType: function(d) {
    var id2 = isString(d) ? d : d.id;
    return !this.config.data_types[id2] || this.isTypeOf(id2, TYPE_BY_CATEGORY.Line);
  },
  isStepType: function(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Step);
  },
  isSplineType: function(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Spline);
  },
  isAreaType: function(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.Area);
  },
  isAreaRangeType: function(d) {
    return this.isTypeOf(d, TYPE_BY_CATEGORY.AreaRange);
  },
  isBarType: function(d) {
    return this.isTypeOf(d, "bar");
  },
  isBubbleType: function(d) {
    return this.isTypeOf(d, "bubble");
  },
  isCandlestickType: function(d) {
    return this.isTypeOf(d, "candlestick");
  },
  isScatterType: function(d) {
    return this.isTypeOf(d, "scatter");
  },
  isPieType: function(d) {
    return this.isTypeOf(d, "pie");
  },
  isGaugeType: function(d) {
    return this.isTypeOf(d, "gauge");
  },
  isDonutType: function(d) {
    return this.isTypeOf(d, "donut");
  },
  isRadarType: function(d) {
    return this.isTypeOf(d, "radar");
  },
  isArcType: function(d) {
    return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d) || this.isRadarType(d);
  },
  isCirclePoint: function(node) {
    var config = this.config;
    var pattern = config.point_pattern;
    var isCircle = false;
    if (node && node.tagName === "circle") {
      isCircle = true;
    } else {
      isCircle = config.point_type === "circle" && (!pattern || isArray(pattern) && pattern.length === 0);
    }
    return isCircle;
  },
  lineData: function(d) {
    return this.isLineType(d) ? [d] : [];
  },
  arcData: function(d) {
    return this.isArcType(d.data) ? [d] : [];
  },
  labelishData: function(d) {
    return this.isBarType(d) || this.isLineType(d) || this.isScatterType(d) || this.isBubbleType(d) || this.isCandlestickType(d) || this.isRadarType(d) ? d.values.filter(function(v) {
      return isNumber(v.value) || Boolean(v.value);
    }) : [];
  },
  barLineBubbleData: function(d) {
    return this.isBarType(d) || this.isLineType(d) || this.isBubbleType(d) ? d.values : [];
  },
  isInterpolationType: function(type2) {
    return [
      "basis",
      "basis-closed",
      "basis-open",
      "bundle",
      "cardinal",
      "cardinal-closed",
      "cardinal-open",
      "catmull-rom",
      "catmull-rom-closed",
      "catmull-rom-open",
      "linear",
      "linear-closed",
      "monotone-x",
      "monotone-y",
      "natural"
    ].indexOf(type2) >= 0;
  }
};
var ChartInternal = function() {
  function ChartInternal2(api2) {
    this.data = {
      xs: {},
      targets: []
    };
    this.scale = {
      x: null,
      y: null,
      y2: null,
      subX: null,
      subY: null,
      subY2: null,
      zoom: null
    };
    this.org = {
      xScale: null,
      xDomain: null
    };
    this.format = {
      extraLineClasses: null,
      xAxisTick: null,
      dataTime: null,
      defaultAxisTime: null,
      axisTime: null
    };
    var $$ = this;
    $$.api = api2;
    $$.config = new Options();
    $$.cache = new Cache();
    var store = new Store();
    $$.$el = store.getStore("element");
    $$.state = store.getStore("state");
  }
  ChartInternal2.prototype.$T = function(selection2, force, name) {
    var _a = this, config = _a.config, state = _a.state;
    var duration = config.transition_duration;
    var subchart = config.subchart_show;
    var t = selection2;
    if (t) {
      if ("tagName" in t) {
        t = select(t);
      }
      var transit = (force !== false && duration || force) && (!state.zooming || state.dragging) && !state.resizing && state.rendered && !subchart;
      t = transit ? t.transition(name).duration(duration) : t;
    }
    return t;
  };
  ChartInternal2.prototype.beforeInit = function() {
    var $$ = this;
    $$.callPluginHook("$beforeInit");
    callFn($$.config.onbeforeinit, $$.api);
  };
  ChartInternal2.prototype.afterInit = function() {
    var $$ = this;
    $$.callPluginHook("$afterInit");
    callFn($$.config.onafterinit, $$.api);
  };
  ChartInternal2.prototype.init = function() {
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    state.hasAxis = !$$.hasArcType();
    state.hasRadar = !state.hasAxis && $$.hasType("radar");
    $$.initParams();
    var bindto = {
      element: config.bindto,
      classname: "bb"
    };
    if (isObject(config.bindto)) {
      bindto.element = config.bindto.element || "#chart";
      bindto.classname = config.bindto.classname || bindto.classname;
    }
    $el.chart = isFunction(bindto.element.node) ? config.bindto.element : select(bindto.element || []);
    if ($el.chart.empty()) {
      $el.chart = select(doc.body.appendChild(doc.createElement("div")));
    }
    $el.chart.html("").classed(bindto.classname, true);
    $$.initToRender();
  };
  ChartInternal2.prototype.initToRender = function(forced) {
    var $$ = this;
    var config = $$.config, state = $$.state, chart = $$.$el.chart;
    var isHidden = function() {
      return chart.style("display") === "none" || chart.style("visibility") === "hidden";
    };
    var isLazy = config.render.lazy || isHidden();
    var MutationObserver = win.MutationObserver;
    if (isLazy && MutationObserver && config.render.observe !== false && !forced) {
      new MutationObserver(function(mutation, observer) {
        if (!isHidden()) {
          observer.disconnect();
          !state.rendered && $$.initToRender(true);
        }
      }).observe(chart.node(), {
        attributes: true,
        attributeFilter: ["class", "style"]
      });
    }
    if (!isLazy || forced) {
      var convertedData = $$.convertData(config, $$.initWithData);
      convertedData && $$.initWithData(convertedData);
      $$.afterInit();
    }
  };
  ChartInternal2.prototype.initParams = function() {
    var $$ = this;
    var _a = $$, config = _a.config, format2 = _a.format, state = _a.state;
    var isRotated = config.axis_rotated;
    state.datetimeId = "bb-" + +new Date();
    $$.color = $$.generateColor();
    $$.levelColor = $$.generateLevelColor();
    if ($$.hasPointType()) {
      $$.point = $$.generatePoint();
    }
    if (state.hasAxis) {
      $$.initClip();
      format2.extraLineClasses = $$.generateExtraLineClass();
      format2.dataTime = config.data_xLocaltime ? timeParse : utcParse;
      format2.axisTime = config.axis_x_localtime ? timeFormat : utcFormat;
      var isDragZoom_1 = $$.config.zoom_enabled && $$.config.zoom_type === "drag";
      format2.defaultAxisTime = function(d) {
        var _a2 = $$.scale, x2 = _a2.x, zoom = _a2.zoom;
        var isZoomed = isDragZoom_1 ? zoom : zoom && x2.orgDomain().toString() !== zoom.domain().toString();
        var specifier = d.getMilliseconds() && ".%L" || d.getSeconds() && ".:%S" || d.getMinutes() && "%I:%M" || d.getHours() && "%I %p" || d.getDate() !== 1 && "%b %d" || isZoomed && d.getDate() === 1 && "%b'%y" || d.getMonth() && "%-m/%-d" || "%Y";
        return format2.axisTime(specifier)(d);
      };
    }
    state.isLegendRight = config.legend_position === "right";
    state.isLegendInset = config.legend_position === "inset";
    state.isLegendTop = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "top-right";
    state.isLegendLeft = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "bottom-left";
    state.rotatedPaddingRight = isRotated && !config.axis_x_show ? 0 : 30;
    state.inputType = convertInputType(config.interaction_inputType_mouse, config.interaction_inputType_touch);
  };
  ChartInternal2.prototype.initWithData = function(data2) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale, state = $$.state, $el = $$.$el, org = $$.org;
    var hasAxis = state.hasAxis;
    var hasInteraction = config.interaction_enabled;
    if (hasAxis) {
      $$.axis = $$.getAxisInstance();
      config.zoom_enabled && $$.initZoom();
    }
    $$.data.xs = {};
    $$.data.targets = $$.convertDataToTargets(data2);
    if (config.data_filter) {
      $$.data.targets = $$.data.targets.filter(config.data_filter.bind($$.api));
    }
    if (config.data_hide) {
      $$.addHiddenTargetIds(config.data_hide === true ? $$.mapToIds($$.data.targets) : config.data_hide);
    }
    if (config.legend_hide) {
      $$.addHiddenLegendIds(config.legend_hide === true ? $$.mapToIds($$.data.targets) : config.legend_hide);
    }
    $$.updateSizes();
    $$.updateScales(true);
    var x2 = scale2.x, y3 = scale2.y, y22 = scale2.y2, subX = scale2.subX, subY = scale2.subY, subY2 = scale2.subY2;
    if (x2) {
      x2.domain(sortValue($$.getXDomain($$.data.targets)));
      subX.domain(x2.domain());
      org.xDomain = x2.domain();
    }
    if (y3) {
      y3.domain($$.getYDomain($$.data.targets, "y"));
      subY.domain(y3.domain());
    }
    if (y22) {
      y22.domain($$.getYDomain($$.data.targets, "y2"));
      subY2 && subY2.domain(y22.domain());
    }
    $el.svg = $el.chart.append("svg").style("overflow", "hidden").style("display", "block");
    if (hasInteraction && state.inputType) {
      var isTouch = state.inputType === "touch";
      $el.svg.on(isTouch ? "touchstart" : "mouseenter", function() {
        return callFn(config.onover, $$.api);
      }).on(isTouch ? "touchend" : "mouseleave", function() {
        return callFn(config.onout, $$.api);
      });
    }
    config.svg_classname && $el.svg.attr("class", config.svg_classname);
    var hasColorPatterns = isFunction(config.color_tiles) && $$.patterns;
    if (hasAxis || hasColorPatterns || config.data_labels_backgroundColors) {
      $el.defs = $el.svg.append("defs");
      if (hasAxis) {
        ["id", "idXAxis", "idYAxis", "idGrid"].forEach(function(v) {
          $$.appendClip($el.defs, state.clip[v]);
        });
      }
      $$.generateDataLabelBackgroundColorFilter();
      if (hasColorPatterns) {
        $$.patterns.forEach(function(p) {
          return $el.defs.append(function() {
            return p.node;
          });
        });
      }
    }
    $$.updateSvgSize();
    $$.bindResize();
    var main2 = $el.svg.append("g").classed(CLASS.main, true).attr("transform", $$.getTranslate("main"));
    $el.main = main2;
    config.subchart_show && $$.initSubchart();
    config.tooltip_show && $$.initTooltip();
    config.title_text && $$.initTitle();
    config.legend_show && $$.initLegend();
    if (config.data_empty_label_text) {
      main2.append("text").attr("class", CLASS.text + " " + CLASS.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
    }
    if (hasAxis) {
      config.regions.length && $$.initRegion();
      !config.clipPath && $$.axis.init();
    }
    main2.append("g").attr("class", CLASS.chart).attr("clip-path", state.clip.path);
    $$.callPluginHook("$init");
    if (hasAxis) {
      hasInteraction && $$.initEventRect && $$.initEventRect();
      $$.initGrid();
      config.clipPath && $$.axis && $$.axis.init();
    }
    $$.initChartElements();
    $$.updateTargets($$.data.targets);
    $$.updateDimension();
    callFn(config.oninit, $$.api);
    $$.setBackground();
    $$.redraw({
      withTransition: false,
      withTransform: true,
      withUpdateXDomain: true,
      withUpdateOrgXDomain: true,
      withTransitionForAxis: false,
      initializing: true
    });
    if (config.data_onmin || config.data_onmax) {
      var minMax = $$.getMinMaxData();
      callFn(config.data_onmin, $$.api, minMax.min);
      callFn(config.data_onmax, $$.api, minMax.max);
    }
    config.tooltip_show && $$.initShowTooltip();
    state.rendered = true;
  };
  ChartInternal2.prototype.initChartElements = function() {
    var $$ = this;
    var _a = $$.state, hasAxis = _a.hasAxis, hasRadar = _a.hasRadar;
    var types = [];
    if (hasAxis) {
      ["bar", "bubble", "candlestick", "line"].forEach(function(v) {
        var name = capitalize(v);
        if (v === "line" && $$.hasTypeOf(name) || $$.hasType(v)) {
          types.push(name);
        }
      });
    } else {
      if (!hasRadar) {
        types.push("Arc", "Pie");
      }
      if ($$.hasType("gauge")) {
        types.push("Gauge");
      } else if (hasRadar) {
        types.push("Radar");
      }
    }
    types.forEach(function(v) {
      $$["init" + v]();
    });
    notEmpty($$.config.data_labels) && !$$.hasArcType(null, ["radar"]) && $$.initText();
  };
  ChartInternal2.prototype.setChartElements = function() {
    var $$ = this;
    var _a = $$.$el, chart = _a.chart, svg = _a.svg, defs = _a.defs, main2 = _a.main, tooltip2 = _a.tooltip, legend2 = _a.legend, title2 = _a.title, grid2 = _a.grid, arc2 = _a.arcs, circles = _a.circle, bars = _a.bar, candlestick = _a.candlestick, lines = _a.line, areas = _a.area, texts = _a.text;
    $$.api.$ = {
      chart,
      svg,
      defs,
      main: main2,
      tooltip: tooltip2,
      legend: legend2,
      title: title2,
      grid: grid2,
      arc: arc2,
      circles,
      bar: { bars },
      candlestick,
      line: { lines, areas },
      text: { texts }
    };
  };
  ChartInternal2.prototype.setBackground = function() {
    var $$ = this;
    var bg = $$.config.background, state = $$.state, svg = $$.$el.svg;
    if (notEmpty(bg)) {
      var element = svg.select("g").insert(bg.imgUrl ? "image" : "rect", ":first-child");
      if (bg.imgUrl) {
        element.attr("href", bg.imgUrl);
      } else if (bg.color) {
        element.style("fill", bg.color).attr("clip-path", state.clip.path);
      }
      element.attr("class", bg["class"] || null).attr("width", "100%").attr("height", "100%");
    }
  };
  ChartInternal2.prototype.updateTargets = function(targets) {
    var $$ = this;
    var _a = $$.state, hasAxis = _a.hasAxis, hasRadar = _a.hasRadar;
    $$.updateTargetsForText(targets);
    if (hasAxis) {
      ["bar", "candlestick", "line"].forEach(function(v) {
        var name = capitalize(v);
        if (v === "line" && $$.hasTypeOf(name) || $$.hasType(v)) {
          $$["updateTargetsFor" + name](targets.filter($$["is" + name + "Type"].bind($$)));
        }
      });
      $$.updateTargetsForSubchart && $$.updateTargetsForSubchart(targets);
    } else {
      $$.hasArcType(targets) && (hasRadar ? $$.updateTargetsForRadar(targets.filter($$.isRadarType.bind($$))) : $$.updateTargetsForArc(targets.filter($$.isArcType.bind($$))));
    }
    if ($$.hasType("bubble") || $$.hasType("scatter")) {
      $$.updateTargetForCircle && $$.updateTargetForCircle();
    }
    $$.showTargets();
  };
  ChartInternal2.prototype.showTargets = function() {
    var $$ = this;
    var config = $$.config, svg = $$.$el.svg;
    svg.selectAll("." + CLASS.target).filter(function(d) {
      return $$.isTargetToShow(d.id);
    }).transition().duration(config.transition_duration).style("opacity", null);
  };
  ChartInternal2.prototype.getWithOption = function(options2) {
    var withOptions = {
      Dimension: true,
      EventRect: true,
      Legend: false,
      Subchart: true,
      Transform: false,
      Transition: true,
      TrimXDomain: true,
      UpdateXAxis: "UpdateXDomain",
      UpdateXDomain: false,
      UpdateOrgXDomain: false,
      TransitionForExit: "Transition",
      TransitionForAxis: "Transition",
      Y: true
    };
    Object.keys(withOptions).forEach(function(key) {
      var defVal = withOptions[key];
      if (isString(defVal)) {
        defVal = withOptions[defVal];
      }
      withOptions[key] = getOption(options2, "with" + key, defVal);
    });
    return withOptions;
  };
  ChartInternal2.prototype.initialOpacity = function(d) {
    var $$ = this;
    var withoutFadeIn = $$.state.withoutFadeIn;
    return $$.getBaseValue(d) !== null && withoutFadeIn[d.id] ? null : "0";
  };
  ChartInternal2.prototype.bindResize = function() {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var resizeFunction = generateResize();
    var list = [];
    list.push(function() {
      return callFn(config.onresize, $$, $$.api);
    });
    if (config.resize_auto) {
      list.push(function() {
        state.resizing = true;
        $$.api.flush(false);
      });
    }
    list.push(function() {
      callFn(config.onresized, $$, $$.api);
      state.resizing = false;
    });
    list.forEach(function(v) {
      return resizeFunction.add(v);
    });
    $$.resizeFunction = resizeFunction;
    win.addEventListener("resize", $$.resizeFunction = resizeFunction);
  };
  ChartInternal2.prototype.callPluginHook = function(phase) {
    var _this = this;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    this.config.plugins.forEach(function(v) {
      if (phase === "$beforeInit") {
        v.$$ = _this;
        _this.api.plugins.push(v);
      }
      v[phase].apply(v, args);
    });
  };
  return ChartInternal2;
}();
extend(ChartInternal.prototype, [
  dataConvert,
  data$1,
  dataLoad,
  category,
  classModule,
  color,
  domain,
  interaction,
  format,
  legend$1,
  redraw,
  scale,
  shape,
  size,
  text,
  title,
  tooltip$1,
  transform,
  type
]);
function loadConfig(config) {
  var thisConfig = this.config;
  var target;
  var keys;
  var read;
  var find2 = function() {
    var key = keys.shift();
    if (key && target && isObjectType(target) && key in target) {
      target = target[key];
      return find2();
    } else if (!key) {
      return target;
    }
    return void 0;
  };
  Object.keys(thisConfig).forEach(function(key) {
    target = config;
    keys = key.split("_");
    read = find2();
    if (isDefined(read)) {
      thisConfig[key] = read;
    }
  });
}
var apiChart = {
  resize: function(size2) {
    var $$ = this.internal;
    var config = $$.config, state = $$.state;
    if (state.rendered) {
      config.size_width = size2 ? size2.width : null;
      config.size_height = size2 ? size2.height : null;
      state.resizing = true;
      this.flush(false, true);
      $$.resizeFunction();
    }
  },
  flush: function(soft) {
    var $$ = this.internal;
    var state = $$.state, zoomResetBtn = $$.$el.zoomResetBtn;
    if (state.rendered) {
      if (state.resizing) {
        $$.brush && $$.brush.updateResize();
      } else {
        $$.axis && $$.axis.setOrient();
      }
      zoomResetBtn === null || zoomResetBtn === void 0 ? void 0 : zoomResetBtn.style("display", "none");
      $$.scale.zoom = null;
      soft ? $$.redraw({
        withTransform: true,
        withUpdateXDomain: true,
        withUpdateOrgXDomain: true,
        withLegend: true
      }) : $$.updateAndRedraw({
        withLegend: true,
        withTransition: false,
        withTransitionForTransform: false
      });
      if (!state.resizing && $$.brush) {
        $$.brush.getSelection().call($$.brush.move);
        $$.unselectRect();
      }
    } else {
      $$.initToRender(true);
    }
  },
  destroy: function() {
    var _this = this;
    var $$ = this.internal;
    var _a = $$.$el, chart = _a.chart, svg = _a.svg;
    if (notEmpty($$)) {
      $$.callPluginHook("$willDestroy");
      $$.charts.splice($$.charts.indexOf(this), 1);
      svg.select("*").interrupt();
      $$.resizeFunction.clear();
      win.removeEventListener("resize", $$.resizeFunction);
      chart.classed("bb", false).html("");
      Object.keys(this).forEach(function(key2) {
        key2 === "internal" && Object.keys($$).forEach(function(k) {
          $$[k] = null;
        });
        _this[key2] = null;
        delete _this[key2];
      });
      for (var key in this) {
        this[key] = function() {
        };
      }
    }
    return null;
  },
  config: function(name, value, redraw2) {
    var $$ = this.internal;
    var config = $$.config;
    var key = name && name.replace(/\./g, "_");
    var res;
    if (key in config) {
      if (isDefined(value)) {
        config[key] = value;
        res = value;
        redraw2 && this.flush();
      } else {
        res = config[key];
      }
    }
    return res;
  }
};
var apiColor = {
  color: function(id2) {
    return this.internal.color(id2);
  }
};
function data(targetIds) {
  var targets = this.internal.data.targets;
  if (!isUndefined(targetIds)) {
    var ids_1 = isArray(targetIds) ? targetIds : [targetIds];
    return targets.filter(function(t) {
      return ids_1.some(function(v) {
        return v === t.id;
      });
    });
  }
  return targets;
}
extend(data, {
  shown: function(targetIds) {
    return this.internal.filterTargetsToShow(this.data(targetIds));
  },
  values: function(targetIds, flat) {
    if (flat === void 0) {
      flat = true;
    }
    var values = null;
    if (targetIds) {
      var targets = this.data(targetIds);
      if (targets && isArray(targets)) {
        values = [];
        targets.forEach(function(v) {
          var dataValue = v.values.map(function(d) {
            return d.value;
          });
          flat ? values = values.concat(dataValue) : values.push(dataValue);
        });
      }
    }
    return values;
  },
  names: function(names) {
    var $$ = this.internal;
    return $$.updateDataAttributes("names", names);
  },
  colors: function(colors) {
    return this.internal.updateDataAttributes("colors", colors);
  },
  axes: function(axes) {
    return this.internal.updateDataAttributes("axes", axes);
  },
  min: function() {
    return this.internal.getMinMaxData().min;
  },
  max: function() {
    return this.internal.getMinMaxData().max;
  }
});
var apiData = { data };
var b64EncodeUnicode = function(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p) {
    return String.fromCharCode(Number("0x" + p));
  }));
};
function nodeToSvgDataUrl(node, option, orgSize) {
  var _a = option || orgSize, width = _a.width, height = _a.height;
  var serializer = new XMLSerializer();
  var clone = node.cloneNode(true);
  var cssText = getCssRules(toArray(doc.styleSheets)).filter(function(r) {
    return r.cssText;
  }).map(function(r) {
    return r.cssText;
  });
  clone.setAttribute("xmlns", namespaces.xhtml);
  var nodeXml = serializer.serializeToString(clone);
  var style = doc.createElement("style");
  style.appendChild(doc.createTextNode(cssText.join("\n")));
  var styleXml = serializer.serializeToString(style);
  var dataStr = ('<svg xmlns="' + namespaces.svg + '" width="' + width + '" height="' + height + '" \n		viewBox="0 0 ' + orgSize.width + " " + orgSize.height + '" \n		preserveAspectRatio="' + (option && option.preserveAspectRatio === false ? "none" : "xMinYMid meet") + '">\n			<foreignObject width="100%" height="100%">\n				' + styleXml + "\n				" + nodeXml.replace(/(url\()[^#]+/g, "$1") + "\n			</foreignObject></svg>").replace("/\n/g", "%0A");
  return "data:image/svg+xml;base64," + b64EncodeUnicode(dataStr);
}
var apiExport = {
  "export": function(option, callback) {
    var _this = this;
    var $$ = this.internal;
    var state = $$.state, chart = $$.$el.chart;
    var _a = state.current, width = _a.width, height = _a.height;
    var opt = mergeObj({
      width,
      height,
      preserveAspectRatio: true,
      mimeType: "image/png"
    }, option);
    var svgDataUrl = nodeToSvgDataUrl(chart.node(), opt, { width, height });
    if (callback && isFunction(callback)) {
      var img_1 = new Image();
      img_1.crossOrigin = "Anonymous";
      img_1.onload = function() {
        var canvas = doc.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = opt.width || width;
        canvas.height = opt.height || height;
        ctx.drawImage(img_1, 0, 0);
        callback.bind(_this)(canvas.toDataURL(opt.mimeType));
      };
      img_1.src = svgDataUrl;
    }
    return svgDataUrl;
  }
};
var apiFocus = {
  focus: function(targetIdsValue) {
    var $$ = this.internal;
    var state = $$.state;
    var targetIds = $$.mapToTargetIds(targetIdsValue);
    var candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    this.revert();
    this.defocus();
    candidates.classed(CLASS.focused, true).classed(CLASS.defocused, false);
    if ($$.hasArcType() && !state.hasRadar) {
      $$.expandArc(targetIds);
      $$.hasType("gauge") && $$.markOverlapped(targetIdsValue, $$, "." + CLASS.gaugeValue);
    }
    $$.toggleFocusLegend(targetIds, true);
    state.focusedTargetIds = targetIds;
    state.defocusedTargetIds = state.defocusedTargetIds.filter(function(id2) {
      return targetIds.indexOf(id2) < 0;
    });
  },
  defocus: function(targetIdsValue) {
    var $$ = this.internal;
    var state = $$.state;
    var targetIds = $$.mapToTargetIds(targetIdsValue);
    var candidates = $$.$el.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
    candidates.classed(CLASS.focused, false).classed(CLASS.defocused, true);
    if ($$.hasArcType()) {
      $$.unexpandArc(targetIds);
      $$.hasType("gauge") && $$.undoMarkOverlapped($$, "." + CLASS.gaugeValue);
    }
    $$.toggleFocusLegend(targetIds, false);
    state.focusedTargetIds = state.focusedTargetIds.filter(function(id2) {
      return targetIds.indexOf(id2) < 0;
    });
    state.defocusedTargetIds = targetIds;
  },
  revert: function(targetIdsValue) {
    var $$ = this.internal;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var targetIds = $$.mapToTargetIds(targetIdsValue);
    var candidates = $el.svg.selectAll($$.selectorTargets(targetIds));
    candidates.classed(CLASS.focused, false).classed(CLASS.defocused, false);
    $$.hasArcType() && $$.unexpandArc(targetIds);
    if (config.legend_show) {
      $$.showLegend(targetIds.filter($$.isLegendToShow.bind($$)));
      $el.legend.selectAll($$.selectorLegends(targetIds)).filter(function() {
        return select(this).classed(CLASS.legendItemFocused);
      }).classed(CLASS.legendItemFocused, false);
    }
    state.focusedTargetIds = [];
    state.defocusedTargetIds = [];
  }
};
var legend = {
  show: function(targetIds) {
    var $$ = this.internal;
    $$.showLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
  },
  hide: function(targetIds) {
    var $$ = this.internal;
    $$.hideLegend($$.mapToTargetIds(targetIds));
    $$.updateAndRedraw({ withLegend: true });
  }
};
var apiLegend = { legend };
var apiLoad = {
  load: function(args) {
    var $$ = this.internal;
    var config = $$.config;
    args.xs && $$.addXs(args.xs);
    "names" in args && this.data.names(args.names);
    "classes" in args && Object.keys(args.classes).forEach(function(id2) {
      config.data_classes[id2] = args.classes[id2];
    });
    if ("categories" in args && $$.axis.isCategorized()) {
      config.axis_x_categories = args.categories;
    }
    "axes" in args && Object.keys(args.axes).forEach(function(id2) {
      config.data_axes[id2] = args.axes[id2];
    });
    "colors" in args && Object.keys(args.colors).forEach(function(id2) {
      config.data_colors[id2] = args.colors[id2];
    });
    if ("unload" in args && args.unload !== false) {
      $$.unload($$.mapToTargetIds(args.unload === true ? null : args.unload), function() {
        win.requestIdleCallback(function() {
          return $$.loadFromArgs(args);
        });
      });
    } else {
      $$.loadFromArgs(args);
    }
  },
  unload: function(argsValue) {
    var _this = this;
    var $$ = this.internal;
    var args = argsValue || {};
    if (isArray(args)) {
      args = { ids: args };
    } else if (isString(args)) {
      args = { ids: [args] };
    }
    var ids = $$.mapToTargetIds(args.ids);
    $$.unload(ids, function() {
      $$.redraw({
        withUpdateOrgXDomain: true,
        withUpdateXDomain: true,
        withLegend: true
      });
      $$.cache.remove(ids);
      args.done && args.done.call(_this);
    });
  }
};
function showHide(show, targetIdsValue, options2) {
  var _this = this;
  var $$ = this.internal;
  var targetIds = $$.mapToTargetIds(targetIdsValue);
  var hiddenIds = $$.state.hiddenTargetIds.map(function(v) {
    return targetIds.indexOf(v) > -1 && v;
  }).filter(Boolean);
  $$.state.toggling = true;
  $$[(show ? "remove" : "add") + "HiddenTargetIds"](targetIds);
  var targets = $$.$el.svg.selectAll($$.selectorTargets(targetIds));
  var opacity = show ? null : "0";
  if (show && hiddenIds.length) {
    targets.style("display", null);
    callFn($$.config.data_onshown, this, hiddenIds);
  }
  targets.transition().style("opacity", opacity, "important").call(endall, function() {
    if (!show && hiddenIds.length === 0) {
      targets.style("display", "none");
      callFn($$.config.data_onhidden, _this, targetIds);
    }
    targets.style("opacity", opacity);
  });
  options2.withLegend && $$[(show ? "show" : "hide") + "Legend"](targetIds);
  $$.redraw({
    withUpdateOrgXDomain: true,
    withUpdateXDomain: true,
    withLegend: true
  });
  $$.state.toggling = false;
}
var apiShow = {
  show: function(targetIdsValue, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    showHide.call(this, true, targetIdsValue, options2);
  },
  hide: function(targetIdsValue, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    showHide.call(this, false, targetIdsValue, options2);
  },
  toggle: function(targetIds, options2) {
    var _this = this;
    if (options2 === void 0) {
      options2 = {};
    }
    var $$ = this.internal;
    var targets = { show: [], hide: [] };
    $$.mapToTargetIds(targetIds).forEach(function(id2) {
      return targets[$$.isTargetToShow(id2) ? "hide" : "show"].push(id2);
    });
    targets.show.length && this.show(targets.show, options2);
    targets.hide.length && setTimeout(function() {
      return _this.hide(targets.hide, options2);
    }, 0);
  }
};
var tooltip = {
  show: function(args) {
    var $$ = this.internal;
    var config = $$.config, inputType = $$.state.inputType;
    var index;
    var mouse;
    if (args.mouse) {
      mouse = args.mouse;
    }
    if (args.data) {
      var data2 = args.data;
      var y3 = $$.getYScaleById(data2.id)(data2.value);
      if ($$.isMultipleX()) {
        mouse = [$$.scale.x(data2.x), y3];
      } else {
        if (!config.tooltip_grouped) {
          mouse = [0, y3];
        }
        index = isValue(data2.index) ? data2.index : $$.getIndexByX(data2.x);
      }
    } else if (isDefined(args.x)) {
      index = $$.getIndexByX(args.x);
    } else if (isDefined(args.index)) {
      index = args.index;
    }
    (inputType === "mouse" ? ["mouseover", "mousemove"] : ["touchstart"]).forEach(function(eventName) {
      $$.dispatchEvent(eventName, index, mouse);
    });
  },
  hide: function() {
    var $$ = this.internal;
    var inputType = $$.state.inputType, tooltip2 = $$.$el.tooltip;
    var data2 = tooltip2 && tooltip2.datum();
    if (data2) {
      var index_1 = JSON.parse(data2.current)[0].index;
      (inputType === "mouse" ? ["mouseout"] : ["touchend"]).forEach(function(eventName) {
        $$.dispatchEvent(eventName, index_1);
      });
    }
    inputType === "touch" && $$.callOverOutForTouch();
    $$.hideTooltip(true);
    $$.hideGridFocus();
    $$.unexpandCircles && $$.unexpandCircles();
    $$.expandBarTypeShapes(false);
  }
};
var apiTooltip = { tooltip };
var Chart = function() {
  function Chart2(options2) {
    this.plugins = [];
    var $$ = new ChartInternal(this);
    this.internal = $$;
    (function bindThis(fn, target, argThis) {
      Object.keys(fn).forEach(function(key) {
        var isFunc = isFunction(fn[key]);
        var isChild = target !== argThis;
        var isNotNil = notEmpty(fn[key]);
        var hasChild = isNotNil && Object.keys(fn[key]).length > 0;
        if (isFunc && (!isChild && hasChild || isChild)) {
          target[key] = fn[key].bind(argThis);
        } else if (isNotNil && !isFunc) {
          target[key] = {};
        } else {
          target[key] = fn[key];
        }
        hasChild && bindThis(fn[key], target[key], argThis);
      });
    })(Chart2.prototype, this, this);
    loadConfig.call($$, options2);
    $$.beforeInit();
    $$.init();
  }
  return Chart2;
}();
extend(Chart.prototype, [
  apiChart,
  apiColor,
  apiData,
  apiExport,
  apiFocus,
  apiLegend,
  apiLoad,
  apiShow,
  apiTooltip
]);
function setMinMax($$, type2, value) {
  var config = $$.config;
  var axisX = "axis_x_" + type2;
  var axisY = "axis_y_" + type2;
  var axisY2 = "axis_y2_" + type2;
  if (isDefined(value)) {
    if (isObjectType(value)) {
      isValue(value.x) && (config[axisX] = value.x);
      isValue(value.y) && (config[axisY] = value.y);
      isValue(value.y2) && (config[axisY2] = value.y2);
    } else {
      config[axisY] = value;
      config[axisY2] = value;
    }
    $$.redraw({
      withUpdateOrgXDomain: true,
      withUpdateXDomain: true
    });
  }
}
function getMinMax($$, type2) {
  var config = $$.config;
  return {
    x: config["axis_x_" + type2],
    y: config["axis_y_" + type2],
    y2: config["axis_y2_" + type2]
  };
}
var axis$1 = {
  labels: function(labels) {
    var $$ = this.internal;
    var labelText;
    if (labels) {
      Object.keys(labels).forEach(function(axisId) {
        $$.axis.setLabelText(axisId, labels[axisId]);
      });
      $$.axis.updateLabels();
    }
    ["x", "y", "y2"].forEach(function(v) {
      var text2 = $$.axis.getLabelText(v);
      if (text2) {
        !labelText && (labelText = {});
        labelText[v] = text2;
      }
    });
    return labelText;
  },
  min: function(min2) {
    var $$ = this.internal;
    return isValue(min2) ? setMinMax($$, "min", min2) : getMinMax($$, "min");
  },
  max: function(max2) {
    var $$ = this.internal;
    return arguments.length ? setMinMax($$, "max", max2) : getMinMax($$, "max");
  },
  range: function(range) {
    var axis2 = this.axis;
    if (arguments.length) {
      isDefined(range.max) && axis2.max(range.max);
      isDefined(range.min) && axis2.min(range.min);
    } else {
      return {
        max: axis2.max(),
        min: axis2.min()
      };
    }
    return void 0;
  }
};
var apiAxis = { axis: axis$1 };
var apiCategory = {
  category: function(i, category2) {
    var $$ = this.internal;
    var config = $$.config;
    if (arguments.length > 1) {
      config.axis_x_categories[i] = category2;
      $$.redraw();
    }
    return config.axis_x_categories[i];
  },
  categories: function(categories) {
    var $$ = this.internal;
    var config = $$.config;
    if (!arguments.length) {
      return config.axis_x_categories;
    }
    config.axis_x_categories = categories;
    $$.redraw();
    return config.axis_x_categories;
  }
};
function xgrids(grids) {
  var $$ = this.internal;
  var config = $$.config;
  if (!grids) {
    return config.grid_x_lines;
  }
  config.grid_x_lines = grids;
  $$.redrawWithoutRescale();
  return config.grid_x_lines;
}
extend(xgrids, {
  add: function(grids) {
    return this.xgrids(this.internal.config.grid_x_lines.concat(grids || []));
  },
  remove: function(params) {
    this.internal.removeGridLines(params, true);
  }
});
var apiXGrid = { xgrids };
function ygrids(grids) {
  var $$ = this.internal;
  var config = $$.config;
  if (!grids) {
    return config.grid_y_lines;
  }
  config.grid_y_lines = grids;
  $$.redrawWithoutRescale();
  return config.grid_y_lines;
}
extend(ygrids, {
  add: function(grids) {
    return this.ygrids(this.internal.config.grid_y_lines.concat(grids || []));
  },
  remove: function(params) {
    this.internal.removeGridLines(params, false);
  }
});
var apiYGrid = { ygrids };
var apiGroup = {
  groups: function(groups) {
    var $$ = this.internal;
    var config = $$.config;
    if (isUndefined(groups)) {
      return config.data_groups;
    }
    config.data_groups = groups;
    $$.redraw();
    return config.data_groups;
  }
};
function regions(regions2) {
  var $$ = this.internal;
  var config = $$.config;
  if (!regions2) {
    return config.regions;
  }
  config.regions = regions2;
  $$.redrawWithoutRescale();
  return regions2;
}
extend(regions, {
  add: function(regions2) {
    var $$ = this.internal;
    var config = $$.config;
    if (!regions2) {
      return config.regions;
    }
    config.regions = config.regions.concat(regions2);
    $$.redrawWithoutRescale();
    return config.regions;
  },
  remove: function(optionsValue) {
    var $$ = this.internal;
    var config = $$.config;
    var options2 = optionsValue || {};
    var duration = getOption(options2, "duration", config.transition_duration);
    var classes2 = getOption(options2, "classes", [CLASS.region]);
    var regions2 = $$.$el.main.select("." + CLASS.regions).selectAll(classes2.map(function(c) {
      return "." + c;
    }));
    (duration ? regions2.transition().duration(duration) : regions2).style("opacity", "0").remove();
    regions2 = config.regions;
    if (Object.keys(options2).length) {
      regions2 = regions2.filter(function(region2) {
        var found = false;
        if (!region2["class"]) {
          return true;
        }
        region2["class"].split(" ").forEach(function(c) {
          if (classes2.indexOf(c) >= 0) {
            found = true;
          }
        });
        return !found;
      });
      config.regions = regions2;
    } else {
      config.regions = [];
    }
    return regions2;
  }
});
var apiRegion = { regions };
var apiX = {
  x: function(x2) {
    var $$ = this.internal;
    var axis2 = $$.axis, data2 = $$.data;
    var isCategorized = axis2.isCustomX() && axis2.isCategorized();
    if (isArray(x2)) {
      if (isCategorized) {
        this.categories(x2);
      } else {
        $$.updateTargetX(data2.targets, x2);
        $$.redraw({
          withUpdateOrgXDomain: true,
          withUpdateXDomain: true
        });
      }
    }
    return isCategorized ? this.categories() : data2.xs;
  },
  xs: function(xs) {
    var $$ = this.internal;
    if (isObject(xs)) {
      $$.updateTargetXs($$.data.targets, xs);
      $$.redraw({
        withUpdateOrgXDomain: true,
        withUpdateXDomain: true
      });
    }
    return $$.data.xs;
  }
};
var apiFlow = {
  flow: function(args) {
    var $$ = this.internal;
    var data2;
    var domain2;
    var length = 0;
    var tail = 0;
    var diff;
    var to;
    if (args.json || args.rows || args.columns) {
      data2 = $$.convertData(args);
    }
    if ($$.state.redrawing || !data2 || !isTabVisible()) {
      return;
    }
    var notfoundIds = [];
    var orgDataCount = $$.getMaxDataCount();
    var targets = $$.convertDataToTargets(data2, true);
    var isTimeSeries = $$.axis.isTimeSeries();
    $$.data.targets.forEach(function(t) {
      var found = false;
      for (var i = 0; i < targets.length; i++) {
        if (t.id === targets[i].id) {
          found = true;
          if (t.values[t.values.length - 1]) {
            tail = t.values[t.values.length - 1].index + 1;
          }
          length = targets[i].values.length;
          for (var j = 0; j < length; j++) {
            targets[i].values[j].index = tail + j;
            if (!isTimeSeries) {
              targets[i].values[j].x = tail + j;
            }
          }
          t.values = t.values.concat(targets[i].values);
          targets.splice(i, 1);
          break;
        }
      }
      !found && notfoundIds.push(t.id);
    });
    $$.data.targets.forEach(function(t) {
      for (var i = 0; i < notfoundIds.length; i++) {
        if (t.id === notfoundIds[i]) {
          tail = t.values[t.values.length - 1].index + 1;
          for (var j = 0; j < length; j++) {
            t.values.push({
              id: t.id,
              index: tail + j,
              x: isTimeSeries ? $$.getOtherTargetX(tail + j) : tail + j,
              value: null
            });
          }
        }
      }
    });
    if ($$.data.targets.length) {
      targets.forEach(function(t) {
        var missing = [];
        for (var i = $$.data.targets[0].values[0].index; i < tail; i++) {
          missing.push({
            id: t.id,
            index: i,
            x: isTimeSeries ? $$.getOtherTargetX(i) : i,
            value: null
          });
        }
        t.values.forEach(function(v) {
          v.index += tail;
          if (!isTimeSeries) {
            v.x += tail;
          }
        });
        t.values = missing.concat(t.values);
      });
    }
    $$.data.targets = $$.data.targets.concat(targets);
    var baseTarget = $$.data.targets[0];
    var baseValue = baseTarget.values[0];
    if (isDefined(args.to)) {
      length = 0;
      to = isTimeSeries ? parseDate.call($$, args.to) : args.to;
      baseTarget.values.forEach(function(v) {
        v.x < to && length++;
      });
    } else if (isDefined(args.length)) {
      length = args.length;
    }
    if (!orgDataCount) {
      if (isTimeSeries) {
        diff = baseTarget.values.length > 1 ? baseTarget.values[baseTarget.values.length - 1].x - baseValue.x : baseValue.x - $$.getXDomain($$.data.targets)[0];
      } else {
        diff = 1;
      }
      domain2 = [baseValue.x - diff, baseValue.x];
    } else if (orgDataCount === 1 && isTimeSeries) {
      diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2;
      domain2 = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)];
    }
    domain2 && $$.updateXDomain(null, true, true, false, domain2);
    $$.updateTargets($$.data.targets);
    $$.redraw({
      flow: {
        index: baseValue.index,
        length,
        duration: isValue(args.duration) ? args.duration : $$.config.transition_duration,
        done: args.done,
        orgDataCount
      },
      withLegend: true,
      withTransition: orgDataCount > 1,
      withTrimXDomain: false,
      withUpdateXAxis: true
    });
  }
};
var AxisRendererHelper = function() {
  function AxisRendererHelper2(owner) {
    var scale2 = getScale();
    var config = owner.config, params = owner.params;
    this.owner = owner;
    this.config = config;
    this.scale = scale2;
    if (config.noTransition || !params.config.transition_duration) {
      config.withoutTransition = true;
    }
    config.range = this.scaleExtent((params.orgXScale || scale2).range());
  }
  AxisRendererHelper2.getSizeFor1Char = function(node) {
    var size2 = {
      w: 5.5,
      h: 11.5
    };
    !node.empty() && node.select("text").text("0").call(function(el) {
      try {
        var _a = el.node().getBBox(), width = _a.width, height = _a.height;
        if (width && height) {
          size2.w = width;
          size2.h = height;
        }
      } catch (e) {
      } finally {
        el.text("");
      }
    });
    this.getSizeFor1Char = function() {
      return size2;
    };
    return size2;
  };
  AxisRendererHelper2.prototype.getTickTransformSetter = function(id2) {
    var config = this.config;
    var fn = id2 === "x" ? function(value) {
      return "translate(" + (value + config.tickOffset) + ",0)";
    } : function(value) {
      return "translate(0," + value + ")";
    };
    return function(selection2, scale2) {
      selection2.attr("transform", function(d) {
        return fn(Math.ceil(scale2(d)));
      });
    };
  };
  AxisRendererHelper2.prototype.scaleExtent = function(domain2) {
    var start2 = domain2[0];
    var stop = domain2[domain2.length - 1];
    return start2 < stop ? [start2, stop] : [stop, start2];
  };
  AxisRendererHelper2.prototype.generateTicks = function(scale2, isYAxes) {
    var tickStepSize = this.owner.params.tickStepSize;
    var _a = scale2.domain(), start2 = _a[0], end = _a[1];
    var ticks2 = [];
    if (isYAxes && tickStepSize) {
      var interval2 = start2;
      while (interval2 <= end) {
        ticks2.push(interval2);
        interval2 += tickStepSize;
      }
    } else if (scale2.ticks) {
      var tickArguments = this.config.tickArguments;
      if (scale2.type === "log" && !tickArguments) {
        var s = getScale("_log").domain([start2 > 0 ? start2 : 1, end]).range(scale2.range());
        ticks2 = s.ticks();
        for (var cnt = end.toFixed().length; ticks2.length > 15; cnt--) {
          ticks2 = s.ticks(cnt);
        }
        ticks2.splice(0, 1, start2);
        ticks2.splice(ticks2.length - 1, 1, end);
      } else {
        ticks2 = scale2.ticks.apply(scale2, this.config.tickArguments || []);
      }
      ticks2 = ticks2.map(function(v) {
        var r = isString(v) && isNumber(v) && !isNaN(v) && Math.round(v * 10) / 10 || v;
        return r;
      });
    } else {
      for (var i = Math.ceil(start2); i < end; i++) {
        ticks2.push(i);
      }
      if (ticks2.length > 0 && ticks2[0] > 0) {
        ticks2.unshift(ticks2[0] - (ticks2[1] - ticks2[0]));
      }
    }
    return ticks2;
  };
  AxisRendererHelper2.prototype.copyScale = function() {
    var newScale = this.scale.copy();
    if (!newScale.domain().length) {
      newScale.domain(this.scale.domain());
    }
    newScale.type = this.scale.type;
    return newScale;
  };
  AxisRendererHelper2.prototype.textFormatted = function(v) {
    var tickFormat2 = this.config.tickFormat;
    var value = /\d+\.\d+0{5,}\d$/.test(v) ? +String(v).replace(/0+\d$/, "") : v;
    var formatted = tickFormat2 ? tickFormat2(value) : value;
    return isDefined(formatted) ? formatted : "";
  };
  AxisRendererHelper2.prototype.transitionise = function(selection2) {
    var config = this.config;
    var transitionSelection = selection2;
    if (config.withoutTransition) {
      transitionSelection = selection2.interrupt();
    } else if (config.transition || !this.owner.params.noTransition) {
      try {
        transitionSelection = selection2.transition(config.transition);
      } catch (e) {
      }
    }
    return transitionSelection;
  };
  return AxisRendererHelper2;
}();
var AxisRenderer = function() {
  function AxisRenderer2(params) {
    if (params === void 0) {
      params = {};
    }
    var config = {
      innerTickSize: 6,
      outerTickSize: params.outerTick ? 6 : 0,
      orient: "bottom",
      range: [],
      tickArguments: null,
      tickCentered: null,
      tickCulling: true,
      tickFormat: null,
      tickLength: 9,
      tickOffset: 0,
      tickPadding: 3,
      tickValues: null,
      transition: null,
      noTransition: params.noTransition
    };
    config.tickLength = Math.max(config.innerTickSize, 0) + config.tickPadding;
    this.config = config;
    this.params = params;
    this.helper = new AxisRendererHelper(this);
  }
  AxisRenderer2.prototype.create = function(g) {
    var ctx = this;
    var _a = this, config = _a.config, helper = _a.helper, params = _a.params;
    var scale2 = helper.scale;
    var orient = config.orient;
    var splitTickText = this.splitTickText.bind(this);
    var isLeftRight = /^(left|right)$/.test(orient);
    var isTopBottom = /^(top|bottom)$/.test(orient);
    var tickTransform = helper.getTickTransformSetter(isTopBottom ? "x" : "y");
    var axisPx = tickTransform === helper.axisX ? "y" : "x";
    var sign2 = /^(top|left)$/.test(orient) ? -1 : 1;
    var rotate = params.tickTextRotate;
    this.config.range = scale2.rangeExtent ? scale2.rangeExtent() : helper.scaleExtent((params.orgXScale || scale2).range());
    var innerTickSize = config.innerTickSize, tickLength = config.tickLength, range = config.range;
    var id2 = params.id;
    var tickTextPos = id2 && /^(x|y|y2)$/.test(id2) ? params.config["axis_" + id2 + "_tick_text_position"] : { x: 0, y: 0 };
    var prefix = id2 === "subX" ? "subchart_axis_x" : "axis_" + id2;
    var axisShow = params.config[prefix + "_show"];
    var tickShow = {
      tick: axisShow ? params.config[prefix + "_tick_show"] : false,
      text: axisShow ? params.config[prefix + "_tick_text_show"] : false
    };
    var $g;
    g.each(function() {
      var g2 = select(this);
      var scale0 = this.__chart__ || scale2;
      var scale1 = helper.copyScale();
      $g = g2;
      this.__chart__ = scale1;
      config.tickOffset = params.isCategory ? Math.ceil((scale1(1) - scale1(0)) / 2) : 0;
      var path2 = g2.selectAll(".domain").data([0]);
      path2.enter().append("path").attr("class", "domain").merge(path2).attr("d", function() {
        var outerTickSized = config.outerTickSize * sign2;
        return isTopBottom ? "M" + range[0] + "," + outerTickSized + "V0H" + range[1] + "V" + outerTickSized : "M" + outerTickSized + "," + range[0] + "H0V" + range[1] + "H" + outerTickSized;
      });
      if (tickShow.tick || tickShow.text) {
        var ticks_1 = config.tickValues || helper.generateTicks(scale1, isLeftRight);
        var tick = g2.selectAll(".tick").data(ticks_1, scale1);
        var tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick");
        var tickExit = tick.exit().remove();
        tick = tickEnter.merge(tick);
        tickShow.tick && tickEnter.append("line");
        tickShow.text && tickEnter.append("text");
        var sizeFor1Char_1 = AxisRendererHelper.getSizeFor1Char(tick);
        var counts_1 = [];
        var tspan = tick.select("text").selectAll("tspan").data(function(d, index) {
          var split = params.tickMultiline ? splitTickText(d, scale1, ticks_1, isLeftRight, sizeFor1Char_1.w) : isArray(helper.textFormatted(d)) ? helper.textFormatted(d).concat() : [helper.textFormatted(d)];
          counts_1[index] = split.length;
          return split.map(function(splitted) {
            return { index, splitted };
          });
        });
        tspan.exit().remove();
        tspan = tspan.enter().append("tspan").merge(tspan).text(function(d) {
          return d.splitted;
        });
        tspan.attr("x", isTopBottom ? 0 : tickLength * sign2).attr("dx", function() {
          var dx = 0;
          if (/(top|bottom)/.test(orient) && rotate) {
            dx = 8 * Math.sin(Math.PI * (rotate / 180)) * (orient === "top" ? -1 : 1);
          }
          return dx + (tickTextPos.x || 0);
        }()).attr("dy", function(d, i) {
          var defValue = ".71em";
          var dy = 0;
          if (orient !== "top") {
            dy = sizeFor1Char_1.h;
            if (i === 0) {
              dy = isLeftRight ? -((counts_1[d.index] - 1) * (sizeFor1Char_1.h / 2) - 3) : tickTextPos.y === 0 ? defValue : 0;
            }
          }
          return isNumber(dy) && tickTextPos.y ? dy + tickTextPos.y : dy || defValue;
        });
        var lineUpdate = tick.select("line");
        var textUpdate = tick.select("text");
        tickEnter.select("line").attr(axisPx + "2", innerTickSize * sign2);
        tickEnter.select("text").attr(axisPx, tickLength * sign2);
        ctx.setTickLineTextPosition(lineUpdate, textUpdate);
        if (params.tickTitle) {
          var title2 = textUpdate.select("title");
          (title2.empty() ? textUpdate.append("title") : title2).text(function(index) {
            return params.tickTitle[index];
          });
        }
        if (scale1.bandwidth) {
          var x_1 = scale1;
          var dx_1 = x_1.bandwidth() / 2;
          scale0 = function(d) {
            return x_1(d) + dx_1;
          };
          scale1 = scale0;
        } else if (scale0.bandwidth) {
          scale0 = scale1;
        } else {
          tickTransform(tickExit, scale1);
        }
        tickTransform(tickEnter, scale0);
        tickTransform(helper.transitionise(tick).style("opacity", null), scale1);
      }
    });
    this.g = $g;
  };
  AxisRenderer2.prototype.getTickXY = function() {
    var config = this.config;
    var pos = { x: 0, y: 0 };
    if (this.params.isCategory) {
      pos.x = config.tickCentered ? 0 : config.tickOffset;
      pos.y = config.tickCentered ? config.tickOffset : 0;
    }
    return pos;
  };
  AxisRenderer2.prototype.getTickSize = function(d) {
    var scale2 = this.helper.scale;
    var config = this.config;
    var innerTickSize = config.innerTickSize, range = config.range;
    var tickPosition = scale2(d) + (config.tickCentered ? 0 : config.tickOffset);
    return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
  };
  AxisRenderer2.prototype.setTickLineTextPosition = function(lineUpdate, textUpdate) {
    var tickPos = this.getTickXY();
    var _a = this.config, innerTickSize = _a.innerTickSize, orient = _a.orient, tickLength = _a.tickLength, tickOffset = _a.tickOffset;
    var rotate = this.params.tickTextRotate;
    var textAnchorForText = function(r) {
      var value = ["start", "end"];
      orient === "top" && value.reverse();
      return !r ? "middle" : r > 0 ? value[0] : value[1];
    };
    var textTransform = function(r) {
      return r ? "rotate(" + r + ")" : null;
    };
    var yForText = function(r) {
      var r2 = r / (orient === "bottom" ? 15 : 23);
      return r ? 11.5 - 2.5 * r2 * (r > 0 ? 1 : -1) : tickLength;
    };
    switch (orient) {
      case "bottom":
        lineUpdate.attr("x1", tickPos.x).attr("x2", tickPos.x).attr("y2", this.getTickSize.bind(this));
        textUpdate.attr("x", 0).attr("y", yForText(rotate)).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate));
        break;
      case "top":
        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
        textUpdate.attr("x", 0).attr("y", -yForText(rotate) * 2).style("text-anchor", textAnchorForText(rotate)).attr("transform", textTransform(rotate));
        break;
      case "left":
        lineUpdate.attr("x2", -innerTickSize).attr("y1", tickPos.y).attr("y2", tickPos.y);
        textUpdate.attr("x", -tickLength).attr("y", tickOffset).style("text-anchor", "end");
        break;
      case "right":
        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
        textUpdate.attr("x", tickLength).attr("y", 0).style("text-anchor", "start");
    }
  };
  AxisRenderer2.prototype.splitTickText = function(d, scale2, ticks2, isLeftRight, charWidth) {
    var params = this.params;
    var tickText = this.helper.textFormatted(d);
    var splitted = isString(tickText) && tickText.indexOf("\n") > -1 ? tickText.split("\n") : [];
    if (splitted.length) {
      return splitted;
    }
    if (isArray(tickText)) {
      return tickText;
    }
    var tickWidth = params.tickWidth;
    if (!tickWidth || tickWidth <= 0) {
      tickWidth = isLeftRight ? 95 : params.isCategory ? Math.ceil(scale2(ticks2[1]) - scale2(ticks2[0])) - 12 : 110;
    }
    function split(splitted2, text2) {
      var subtext;
      var spaceIndex;
      var textWidth;
      for (var i = 1; i < text2.length; i++) {
        if (text2.charAt(i) === " ") {
          spaceIndex = i;
        }
        subtext = text2.substr(0, i + 1);
        textWidth = charWidth * subtext.length;
        if (tickWidth < textWidth) {
          return split(splitted2.concat(text2.substr(0, spaceIndex || i)), text2.slice(spaceIndex ? spaceIndex + 1 : i));
        }
      }
      return splitted2.concat(text2);
    }
    return split(splitted, String(tickText));
  };
  AxisRenderer2.prototype.scale = function(x2) {
    if (!arguments.length) {
      return this.helper.scale;
    }
    this.helper.scale = x2;
    return this;
  };
  AxisRenderer2.prototype.orient = function(x2) {
    if (!arguments.length) {
      return this.config.orient;
    }
    this.config.orient = x2 in {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1
    } ? String(x2) : "bottom";
    return this;
  };
  AxisRenderer2.prototype.tickFormat = function(format2) {
    var config = this.config;
    if (!arguments.length) {
      return config.tickFormat;
    }
    config.tickFormat = format2;
    return this;
  };
  AxisRenderer2.prototype.tickCentered = function(isCentered) {
    var config = this.config;
    if (!arguments.length) {
      return config.tickCentered;
    }
    config.tickCentered = isCentered;
    return this;
  };
  AxisRenderer2.prototype.tickOffset = function() {
    return this.config.tickOffset;
  };
  AxisRenderer2.prototype.tickInterval = function(size2) {
    var _this = this;
    var _a = this.config, outerTickSize = _a.outerTickSize, tickOffset = _a.tickOffset, tickValues = _a.tickValues;
    var interval2;
    if (this.params.isCategory) {
      interval2 = tickOffset * 2;
    } else {
      var length_1 = this.g.select("path.domain").node().getTotalLength() - outerTickSize * 2;
      interval2 = length_1 / (size2 || this.g.selectAll("line").size());
      var intervalByValue = tickValues ? tickValues.map(function(v, i, arr) {
        var next = i + 1;
        return next < arr.length ? _this.helper.scale(arr[next]) - _this.helper.scale(v) : null;
      }).filter(Boolean) : [];
      interval2 = Math.min.apply(Math, __spreadArray(__spreadArray([], intervalByValue), [interval2]));
    }
    return interval2 === Infinity ? 0 : interval2;
  };
  AxisRenderer2.prototype.ticks = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var config = this.config;
    if (!args.length) {
      return config.tickArguments;
    }
    config.tickArguments = toArray(args);
    return this;
  };
  AxisRenderer2.prototype.tickCulling = function(culling) {
    var config = this.config;
    if (!arguments.length) {
      return config.tickCulling;
    }
    config.tickCulling = culling;
    return this;
  };
  AxisRenderer2.prototype.tickValues = function(x2) {
    var _this = this;
    var config = this.config;
    if (isFunction(x2)) {
      config.tickValues = function() {
        return x2(_this.helper.scale.domain());
      };
    } else {
      if (!arguments.length) {
        return config.tickValues;
      }
      config.tickValues = x2;
    }
    return this;
  };
  AxisRenderer2.prototype.setTransition = function(t) {
    this.config.transition = t;
    return this;
  };
  return AxisRenderer2;
}();
var axis = {
  getAxisInstance: function() {
    return this.axis || new Axis(this);
  }
};
var Axis = function() {
  function Axis2(owner) {
    this.axesList = {};
    this.tick = {
      x: null,
      y: null,
      y2: null
    };
    this.xs = [];
    this.orient = {
      x: "bottom",
      y: "left",
      y2: "right",
      subX: "bottom"
    };
    this.owner = owner;
    this.setOrient();
  }
  Axis2.prototype.getAxisClassName = function(id2) {
    return CLASS.axis + " " + CLASS["axis" + capitalize(id2)];
  };
  Axis2.prototype.isHorizontal = function($$, forHorizontal) {
    var isRotated = $$.config.axis_rotated;
    return forHorizontal ? isRotated : !isRotated;
  };
  Axis2.prototype.isCategorized = function() {
    var _a = this.owner, config = _a.config, state = _a.state;
    return config.axis_x_type.indexOf("category") >= 0 || state.hasRadar;
  };
  Axis2.prototype.isCustomX = function() {
    var config = this.owner.config;
    return !this.isTimeSeries() && (config.data_x || notEmpty(config.data_xs));
  };
  Axis2.prototype.isTimeSeries = function(id2) {
    if (id2 === void 0) {
      id2 = "x";
    }
    return this.owner.config["axis_" + id2 + "_type"] === "timeseries";
  };
  Axis2.prototype.isLog = function(id2) {
    if (id2 === void 0) {
      id2 = "x";
    }
    return this.owner.config["axis_" + id2 + "_type"] === "log";
  };
  Axis2.prototype.isTimeSeriesY = function() {
    return this.isTimeSeries("y");
  };
  Axis2.prototype.getAxisType = function(id2) {
    if (id2 === void 0) {
      id2 = "x";
    }
    var type2 = "linear";
    if (this.isTimeSeries(id2)) {
      type2 = this.owner.config.axis_x_localtime ? "time" : "utc";
    } else if (this.isLog(id2)) {
      type2 = "log";
    }
    return type2;
  };
  Axis2.prototype.init = function() {
    var _this = this;
    var $$ = this.owner;
    var config = $$.config, _a = $$.$el, main2 = _a.main, axis2 = _a.axis, clip2 = $$.state.clip;
    var isRotated = config.axis_rotated;
    var target = ["x", "y"];
    config.axis_y2_show && target.push("y2");
    target.forEach(function(v) {
      var classAxis = _this.getAxisClassName(v);
      var classLabel = CLASS["axis" + v.toUpperCase() + "Label"];
      axis2[v] = main2.append("g").attr("class", classAxis).attr("clip-path", function() {
        var res = null;
        if (v === "x") {
          res = clip2.pathXAxis;
        } else if (v === "y") {
          res = clip2.pathYAxis;
        }
        return res;
      }).attr("transform", $$.getTranslate(v)).style("visibility", config["axis_" + v + "_show"] ? null : "hidden");
      axis2[v].append("text").attr("class", classLabel).attr("transform", ["rotate(-90)", null][v === "x" ? +!isRotated : +isRotated]).style("text-anchor", function() {
        return _this.textAnchorForAxisLabel(v);
      });
      _this.generateAxes(v);
    });
  };
  Axis2.prototype.setOrient = function() {
    var $$ = this.owner;
    var _a = $$.config, isRotated = _a.axis_rotated, yInner = _a.axis_y_inner, y2Inner = _a.axis_y2_inner;
    this.orient = {
      x: isRotated ? "left" : "bottom",
      y: isRotated ? yInner ? "top" : "bottom" : yInner ? "right" : "left",
      y2: isRotated ? y2Inner ? "bottom" : "top" : y2Inner ? "left" : "right",
      subX: isRotated ? "left" : "bottom"
    };
  };
  Axis2.prototype.generateAxes = function(id2) {
    var $$ = this.owner;
    var config = $$.config;
    var axes = [];
    var axesConfig = config["axis_" + id2 + "_axes"];
    var isRotated = config.axis_rotated;
    var d3Axis;
    if (id2 === "x") {
      d3Axis = isRotated ? axisLeft : axisBottom;
    } else if (id2 === "y") {
      d3Axis = isRotated ? axisBottom : axisLeft;
    } else if (id2 === "y2") {
      d3Axis = isRotated ? axisTop : axisRight;
    }
    if (axesConfig.length) {
      axesConfig.forEach(function(v) {
        var tick = v.tick || {};
        var scale2 = $$.scale[id2].copy();
        v.domain && scale2.domain(v.domain);
        axes.push(d3Axis(scale2).ticks(tick.count).tickFormat(isFunction(tick.format) ? tick.format.bind($$.api) : function(x2) {
          return x2;
        }).tickValues(tick.values).tickSizeOuter(tick.outer === false ? 0 : 6));
      });
    }
    this.axesList[id2] = axes;
  };
  Axis2.prototype.updateAxes = function() {
    var _this = this;
    var $$ = this.owner;
    var config = $$.config, main2 = $$.$el.main;
    Object.keys(this.axesList).forEach(function(id2) {
      var axesConfig = config["axis_" + id2 + "_axes"];
      var scale2 = $$.scale[id2].copy();
      var range = scale2.range();
      _this.axesList[id2].forEach(function(v, i) {
        var axisRange = v.scale().range();
        if (!range.every(function(v2, i2) {
          return v2 === axisRange[i2];
        })) {
          v.scale().range(range);
        }
        var className = _this.getAxisClassName(id2) + "-" + (i + 1);
        var g = main2.select("." + className.replace(/\s/, "."));
        if (g.empty()) {
          g = main2.append("g").attr("class", className).style("visibility", config["axis_" + id2 + "_show"] ? null : "hidden").call(v);
        } else {
          axesConfig[i].domain && scale2.domain(axesConfig[i].domain);
          _this.x.helper.transitionise(g).call(v.scale(scale2));
        }
        g.attr("transform", $$.getTranslate(id2, i + 1));
      });
    });
  };
  Axis2.prototype.setAxis = function(id2, scale2, outerTick, noTransition) {
    var $$ = this.owner;
    if (id2 !== "subX") {
      this.tick[id2] = this.getTickValues(id2);
    }
    this[id2] = this.getAxis(id2, scale2, outerTick, id2 === "x" && ($$.scale.zoom || $$.config.subchart_show || $$.state.resizing) ? true : noTransition);
  };
  Axis2.prototype.getAxis = function(id2, scale2, outerTick, noTransition, noTickTextRotate) {
    var $$ = this.owner;
    var config = $$.config;
    var isX = /^(x|subX)$/.test(id2);
    var type2 = isX ? "x" : id2;
    var isCategory = isX && this.isCategorized();
    var orient = this.orient[id2];
    var tickTextRotate = noTickTextRotate ? 0 : $$.getAxisTickRotate(type2);
    var tickFormat2;
    if (isX) {
      tickFormat2 = $$.format.xAxisTick;
    } else {
      var fn = config["axis_" + id2 + "_tick_format"];
      if (isFunction(fn)) {
        tickFormat2 = fn.bind($$.api);
      }
    }
    var tickValues = this.tick[type2];
    var axisParams = mergeObj({
      outerTick,
      noTransition,
      config,
      id: id2,
      tickTextRotate
    }, isX && {
      isCategory,
      tickMultiline: config.axis_x_tick_multiline,
      tickWidth: config.axis_x_tick_width,
      tickTitle: isCategory && config.axis_x_tick_tooltip && $$.api.categories(),
      orgXScale: $$.scale.x
    });
    if (!isX) {
      axisParams.tickStepSize = config["axis_" + type2 + "_tick_stepSize"];
    }
    var axis2 = new AxisRenderer(axisParams).scale(isX && $$.scale.zoom || scale2).orient(orient);
    if (isX && this.isTimeSeries() && tickValues && !isFunction(tickValues)) {
      var fn_1 = parseDate.bind($$);
      tickValues = tickValues.map(function(v) {
        return fn_1(v);
      });
    } else if (!isX && this.isTimeSeriesY()) {
      axis2.ticks(config.axis_y_tick_time_value);
      tickValues = null;
    }
    tickValues && axis2.tickValues(tickValues);
    axis2.tickFormat(tickFormat2 || !isX && ($$.isStackNormalized() && function(x2) {
      return x2 + "%";
    }));
    if (isCategory) {
      axis2.tickCentered(config.axis_x_tick_centered);
      if (isEmpty(config.axis_x_tick_culling)) {
        config.axis_x_tick_culling = false;
      }
    }
    var tickCount = config["axis_" + type2 + "_tick_count"];
    tickCount && axis2.ticks(tickCount);
    return axis2;
  };
  Axis2.prototype.updateXAxisTickValues = function(targets, axis2) {
    var $$ = this.owner;
    var config = $$.config;
    var fit = config.axis_x_tick_fit;
    var count = config.axis_x_tick_count;
    var values;
    if (fit || count && fit) {
      values = $$.mapTargetsToUniqueXs(targets);
      if (this.isCategorized() && count > values.length) {
        count = values.length;
      }
      values = this.generateTickValues(values, count, this.isTimeSeries());
    }
    if (axis2) {
      axis2.tickValues(values);
    } else if (this.x) {
      this.x.tickValues(values);
      this.subX && this.subX.tickValues(values);
    }
    return values;
  };
  Axis2.prototype.getId = function(id2) {
    var _a = this.owner, config = _a.config, scale2 = _a.scale;
    var axis2 = config.data_axes[id2];
    if (!axis2 || !scale2[axis2]) {
      axis2 = "y";
    }
    return axis2;
  };
  Axis2.prototype.getXAxisTickFormat = function() {
    var $$ = this.owner;
    var config = $$.config, format2 = $$.format;
    var tickFormat2 = config.axis_x_tick_format;
    var isTimeSeries = this.isTimeSeries();
    var isCategorized = this.isCategorized();
    var currFormat;
    if (tickFormat2) {
      if (isFunction(tickFormat2)) {
        currFormat = tickFormat2.bind($$.api);
      } else if (isTimeSeries) {
        currFormat = function(date2) {
          return date2 ? format2.axisTime(tickFormat2)(date2) : "";
        };
      }
    } else {
      currFormat = isTimeSeries ? format2.defaultAxisTime : isCategorized ? $$.categoryName : function(v) {
        return v < 0 ? v.toFixed(0) : v;
      };
    }
    return isFunction(currFormat) ? function(v) {
      return currFormat.apply($$, isCategorized ? [v, $$.categoryName(v)] : [v]);
    } : currFormat;
  };
  Axis2.prototype.getTickValues = function(id2) {
    var $$ = this.owner;
    var tickValues = $$.config["axis_" + id2 + "_tick_values"];
    var axis2 = $$[id2 + "Axis"];
    return (isFunction(tickValues) ? tickValues.call($$.api) : tickValues) || (axis2 ? axis2.tickValues() : void 0);
  };
  Axis2.prototype.getLabelOptionByAxisId = function(id2) {
    return this.owner.config["axis_" + id2 + "_label"];
  };
  Axis2.prototype.getLabelText = function(id2) {
    var option = this.getLabelOptionByAxisId(id2);
    return isString(option) ? option : option ? option.text : null;
  };
  Axis2.prototype.setLabelText = function(id2, text2) {
    var $$ = this.owner;
    var config = $$.config;
    var option = this.getLabelOptionByAxisId(id2);
    if (isString(option)) {
      config["axis_" + id2 + "_label"] = text2;
    } else if (option) {
      option.text = text2;
    }
  };
  Axis2.prototype.getLabelPosition = function(id2, defaultPosition) {
    var isRotated = this.owner.config.axis_rotated;
    var option = this.getLabelOptionByAxisId(id2);
    var position = isObjectType(option) && option.position ? option.position : defaultPosition[+!isRotated];
    var has = function(v) {
      return !!~position.indexOf(v);
    };
    return {
      isInner: has("inner"),
      isOuter: has("outer"),
      isLeft: has("left"),
      isCenter: has("center"),
      isRight: has("right"),
      isTop: has("top"),
      isMiddle: has("middle"),
      isBottom: has("bottom")
    };
  };
  Axis2.prototype.getAxisLabelPosition = function(id2) {
    return this.getLabelPosition(id2, id2 === "x" ? ["inner-top", "inner-right"] : ["inner-right", "inner-top"]);
  };
  Axis2.prototype.getLabelPositionById = function(id2) {
    return this.getAxisLabelPosition(id2);
  };
  Axis2.prototype.xForAxisLabel = function(id2) {
    var $$ = this.owner;
    var _a = $$.state, width = _a.width, height = _a.height;
    var position = this.getAxisLabelPosition(id2);
    var x2 = position.isMiddle ? -height / 2 : 0;
    if (this.isHorizontal($$, id2 !== "x")) {
      x2 = position.isLeft ? 0 : position.isCenter ? width / 2 : width;
    } else if (position.isBottom) {
      x2 = -height;
    }
    return x2;
  };
  Axis2.prototype.dxForAxisLabel = function(id2) {
    var $$ = this.owner;
    var position = this.getAxisLabelPosition(id2);
    var dx = position.isBottom ? "0.5em" : "0";
    if (this.isHorizontal($$, id2 !== "x")) {
      dx = position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0";
    } else if (position.isTop) {
      dx = "-0.5em";
    }
    return dx;
  };
  Axis2.prototype.textAnchorForAxisLabel = function(id2) {
    var $$ = this.owner;
    var position = this.getAxisLabelPosition(id2);
    var anchor = position.isMiddle ? "middle" : "end";
    if (this.isHorizontal($$, id2 !== "x")) {
      anchor = position.isLeft ? "start" : position.isCenter ? "middle" : "end";
    } else if (position.isBottom) {
      anchor = "start";
    }
    return anchor;
  };
  Axis2.prototype.dyForAxisLabel = function(id2) {
    var $$ = this.owner;
    var config = $$.config;
    var isRotated = config.axis_rotated;
    var isInner = this.getAxisLabelPosition(id2).isInner;
    var tickRotate = config["axis_" + id2 + "_tick_rotate"] ? $$.getHorizontalAxisHeight(id2) : 0;
    var maxTickWidth = this.getMaxTickWidth(id2);
    var dy;
    if (id2 === "x") {
      var xHeight = config.axis_x_height;
      if (isRotated) {
        dy = isInner ? "1.2em" : -25 - maxTickWidth;
      } else if (isInner) {
        dy = "-0.5em";
      } else if (xHeight) {
        dy = xHeight - 10;
      } else if (tickRotate) {
        dy = tickRotate - 10;
      } else {
        dy = "3em";
      }
    } else {
      dy = {
        y: ["-0.5em", 10, "3em", "1.2em", 10],
        y2: ["1.2em", -20, "-2.2em", "-0.5em", 15]
      }[id2];
      if (isRotated) {
        if (isInner) {
          dy = dy[0];
        } else if (tickRotate) {
          dy = tickRotate * (id2 === "y2" ? -1 : 1) - dy[1];
        } else {
          dy = dy[2];
        }
      } else {
        dy = isInner ? dy[3] : (dy[4] + (config["axis_" + id2 + "_inner"] ? 0 : maxTickWidth + dy[4])) * (id2 === "y" ? -1 : 1);
      }
    }
    return dy;
  };
  Axis2.prototype.getMaxTickWidth = function(id2, withoutRecompute) {
    var $$ = this.owner;
    var config = $$.config, current = $$.state.current, _a = $$.$el, svg = _a.svg, chart = _a.chart;
    var currentTickMax = current.maxTickWidths[id2];
    var maxWidth = 0;
    if (withoutRecompute || !config["axis_" + id2 + "_show"] || $$.filterTargetsToShow().length === 0) {
      return currentTickMax.size;
    }
    if (svg) {
      var isYAxis_1 = /^y2?$/.test(id2);
      var targetsToShow = $$.filterTargetsToShow($$.data.targets);
      var scale2 = $$.scale[id2].copy().domain($$["get" + (isYAxis_1 ? "Y" : "X") + "Domain"](targetsToShow, id2));
      var domain2 = scale2.domain();
      var isDomainSame = domain2[0] === domain2[1] && domain2.every(function(v) {
        return v > 0;
      });
      var isCurrentMaxTickDomainSame = isArray(currentTickMax.domain) && currentTickMax.domain[0] === currentTickMax.domain[1] && currentTickMax.domain.every(function(v) {
        return v > 0;
      });
      if (isDomainSame || isCurrentMaxTickDomainSame) {
        return currentTickMax.size;
      } else {
        currentTickMax.domain = domain2;
      }
      if (!isYAxis_1) {
        currentTickMax.ticks.splice(0);
      }
      var axis2 = this.getAxis(id2, scale2, false, false, true);
      var tickCount = config["axis_" + id2 + "_tick_count"];
      var tickValues = config["axis_" + id2 + "_tick_values"];
      if (!tickValues && tickCount) {
        axis2.tickValues(this.generateTickValues(domain2, tickCount, isYAxis_1 ? this.isTimeSeriesY() : this.isTimeSeries()));
      }
      !isYAxis_1 && this.updateXAxisTickValues(targetsToShow, axis2);
      var dummy = chart.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0px").style("left", "0px");
      axis2.create(dummy);
      dummy.selectAll("text").each(function(d, i) {
        var currentTextWidth = this.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, currentTextWidth);
        if (!isYAxis_1) {
          currentTickMax.ticks[i] = currentTextWidth;
        }
      });
      dummy.remove();
    }
    if (maxWidth > 0) {
      currentTickMax.size = maxWidth;
    }
    return currentTickMax.size;
  };
  Axis2.prototype.getXAxisTickTextY2Overflow = function(defaultPadding) {
    var $$ = this.owner;
    var axis2 = $$.axis, config = $$.config, state = $$.state;
    var xAxisTickRotate = $$.getAxisTickRotate("x");
    var positiveRotation = xAxisTickRotate > 0 && xAxisTickRotate < 90;
    if ((axis2.isCategorized() || axis2.isTimeSeries()) && config.axis_x_tick_fit && !config.axis_x_tick_culling && !config.axis_x_tick_multiline && positiveRotation) {
      var widthWithoutCurrentPaddingLeft = state.current.width - $$.getCurrentPaddingLeft();
      var maxOverflow = this.getXAxisTickMaxOverflow(xAxisTickRotate, widthWithoutCurrentPaddingLeft - defaultPadding);
      var xAxisTickTextY2Overflow = Math.max(0, maxOverflow) + defaultPadding;
      return Math.min(xAxisTickTextY2Overflow, widthWithoutCurrentPaddingLeft / 2);
    }
    return 0;
  };
  Axis2.prototype.getXAxisTickMaxOverflow = function(xAxisTickRotate, widthWithoutCurrentPaddingLeft) {
    var $$ = this.owner;
    var axis2 = $$.axis, config = $$.config, state = $$.state;
    var isTimeSeries = axis2.isTimeSeries();
    var tickTextWidths = state.current.maxTickWidths.x.ticks;
    var tickCount = tickTextWidths.length;
    var _a = state.axis.x.padding, left2 = _a.left, right2 = _a.right;
    var maxOverflow = 0;
    var remaining = tickCount - (isTimeSeries && config.axis_x_tick_fit ? 0.5 : 0);
    for (var i = 0; i < tickCount; i++) {
      var tickIndex = i + 1;
      var rotatedTickTextWidth = Math.cos(Math.PI * xAxisTickRotate / 180) * tickTextWidths[i];
      var ticksBeforeTickText = tickIndex - (isTimeSeries ? 1 : 0.5) + left2;
      if (ticksBeforeTickText <= 0) {
        continue;
      }
      var xAxisLengthWithoutTickTextWidth = widthWithoutCurrentPaddingLeft - rotatedTickTextWidth;
      var tickLength = xAxisLengthWithoutTickTextWidth / ticksBeforeTickText;
      var remainingTicks = remaining - tickIndex;
      var paddingRightLength = right2 * tickLength;
      var remainingTickWidth = remainingTicks * tickLength + paddingRightLength;
      var overflow = rotatedTickTextWidth - tickLength / 2 - remainingTickWidth;
      maxOverflow = Math.max(maxOverflow, overflow);
    }
    var filteredTargets = $$.filterTargetsToShow($$.data.targets);
    var tickOffset = 0;
    if (!isTimeSeries && config.axis_x_tick_count <= filteredTargets.length && filteredTargets[0].values.length) {
      var scale2 = getScale($$.axis.getAxisType("x"), 0, widthWithoutCurrentPaddingLeft - maxOverflow).domain([
        left2 * -1,
        $$.getXDomainMax($$.data.targets) + 1 + right2
      ]);
      tickOffset = Math.ceil((scale2(1) - scale2(0)) / 2);
    }
    return maxOverflow + tickOffset;
  };
  Axis2.prototype.getXAxisPadding = function(tickCount) {
    var $$ = this.owner;
    var padding = $$.config.axis_x_padding;
    var _a = isNumber(padding) ? { left: padding, right: padding } : padding, _b = _a.left, left2 = _b === void 0 ? 0 : _b, _c = _a.right, right2 = _c === void 0 ? 0 : _c;
    if ($$.axis.isTimeSeries()) {
      var firstX = +$$.getXDomainMin($$.data.targets);
      var lastX = +$$.getXDomainMax($$.data.targets);
      var timeDiff = lastX - firstX;
      var range = timeDiff + left2 + right2;
      if (tickCount && range) {
        var relativeTickWidth = timeDiff / tickCount / range;
        left2 = left2 / range / relativeTickWidth;
        right2 = right2 / range / relativeTickWidth;
      }
    }
    return { left: left2, right: right2 };
  };
  Axis2.prototype.updateLabels = function(withTransition) {
    var _this = this;
    var $$ = this.owner;
    var main2 = $$.$el.main;
    var labels = {
      x: main2.select("." + CLASS.axisX + " ." + CLASS.axisXLabel),
      y: main2.select("." + CLASS.axisY + " ." + CLASS.axisYLabel),
      y2: main2.select("." + CLASS.axisY2 + " ." + CLASS.axisY2Label)
    };
    Object.keys(labels).filter(function(id2) {
      return !labels[id2].empty();
    }).forEach(function(v) {
      var node = labels[v];
      (withTransition ? node.transition() : node).attr("x", function() {
        return _this.xForAxisLabel(v);
      }).attr("dx", function() {
        return _this.dxForAxisLabel(v);
      }).attr("dy", function() {
        return _this.dyForAxisLabel(v);
      }).text(function() {
        return _this.getLabelText(v);
      });
    });
  };
  Axis2.prototype.getPadding = function(padding, key, defaultValue, domainLength) {
    var p = isNumber(padding) ? padding : padding[key];
    if (!isValue(p)) {
      return defaultValue;
    }
    return this.convertPixelsToAxisPadding(p, domainLength);
  };
  Axis2.prototype.convertPixelsToAxisPadding = function(pixels, domainLength) {
    var $$ = this.owner;
    var config = $$.config, _a = $$.state, width = _a.width, height = _a.height;
    var length = config.axis_rotated ? width : height;
    return domainLength * (pixels / length);
  };
  Axis2.prototype.generateTickValues = function(values, tickCount, forTimeSeries) {
    var tickValues = values;
    if (tickCount) {
      var targetCount = isFunction(tickCount) ? tickCount() : tickCount;
      if (targetCount === 1) {
        tickValues = [values[0]];
      } else if (targetCount === 2) {
        tickValues = [values[0], values[values.length - 1]];
      } else if (targetCount > 2) {
        var isCategorized = this.isCategorized();
        var count = targetCount - 2;
        var start2 = values[0];
        var end = values[values.length - 1];
        var interval2 = (end - start2) / (count + 1);
        var tickValue = void 0;
        tickValues = [start2];
        for (var i = 0; i < count; i++) {
          tickValue = +start2 + interval2 * (i + 1);
          tickValues.push(forTimeSeries ? new Date(tickValue) : isCategorized ? Math.round(tickValue) : tickValue);
        }
        tickValues.push(end);
      }
    }
    if (!forTimeSeries) {
      tickValues = tickValues.sort(function(a, b) {
        return a - b;
      });
    }
    return tickValues;
  };
  Axis2.prototype.generateTransitions = function(duration) {
    var $$ = this.owner;
    var axis2 = $$.$el.axis;
    var _a = ["x", "y", "y2", "subX"].map(function(v) {
      var ax = axis2[v];
      if (ax && duration) {
        ax = ax.transition().duration(duration);
      }
      return ax;
    }), axisX = _a[0], axisY = _a[1], axisY2 = _a[2], axisSubX = _a[3];
    return { axisX, axisY, axisY2, axisSubX };
  };
  Axis2.prototype.redraw = function(transitions, isHidden, isInit) {
    var _this = this;
    var $$ = this.owner;
    var config = $$.config, $el = $$.$el;
    var opacity = isHidden ? "0" : null;
    ["x", "y", "y2", "subX"].forEach(function(id2) {
      var axis2 = _this[id2];
      var $axis = $el.axis[id2];
      if (axis2 && $axis) {
        if (!isInit && !config.transition_duration) {
          axis2.config.withoutTransition = true;
        }
        $axis.style("opacity", opacity);
        axis2.create(transitions["axis" + capitalize(id2)]);
      }
    });
    this.updateAxes();
  };
  Axis2.prototype.redrawAxis = function(targetsToShow, wth, transitions, flow2, isInit) {
    var _this = this;
    var $$ = this.owner;
    var config = $$.config, scale2 = $$.scale, $el = $$.$el;
    var hasZoom = !!scale2.zoom;
    var xDomainForZoom;
    if (!hasZoom && this.isCategorized() && targetsToShow.length === 0) {
      scale2.x.domain([0, $el.axis.x.selectAll(".tick").size()]);
    }
    if (scale2.x && targetsToShow.length) {
      !hasZoom && $$.updateXDomain(targetsToShow, wth.UpdateXDomain, wth.UpdateOrgXDomain, wth.TrimXDomain);
      if (!config.axis_x_tick_values) {
        this.updateXAxisTickValues(targetsToShow);
      }
    } else if (this.x) {
      this.x.tickValues([]);
      this.subX && this.subX.tickValues([]);
    }
    if (config.zoom_rescale && !flow2) {
      xDomainForZoom = scale2.x.orgDomain();
    }
    ["y", "y2"].forEach(function(key) {
      var axisScale = scale2[key];
      if (axisScale) {
        var tickValues = config["axis_" + key + "_tick_values"];
        var tickCount = config["axis_" + key + "_tick_count"];
        axisScale.domain($$.getYDomain(targetsToShow, key, xDomainForZoom));
        if (!tickValues && tickCount) {
          var axis2 = $$.axis[key];
          var domain2 = axisScale.domain();
          axis2.tickValues(_this.generateTickValues(domain2, domain2.every(function(v) {
            return v === 0;
          }) ? 1 : tickCount, _this.isTimeSeriesY()));
        }
      }
    });
    this.redraw(transitions, $$.hasArcType(), isInit);
    this.updateLabels(wth.Transition);
    if ((wth.UpdateXDomain || wth.UpdateXAxis || wth.Y) && targetsToShow.length) {
      this.setCulling();
    }
    if (wth.Y) {
      scale2.subY && scale2.subY.domain($$.getYDomain(targetsToShow, "y"));
      scale2.subY2 && scale2.subY2.domain($$.getYDomain(targetsToShow, "y2"));
    }
  };
  Axis2.prototype.setCulling = function() {
    var $$ = this.owner;
    var config = $$.config, _a = $$.state, clip2 = _a.clip, current = _a.current, $el = $$.$el;
    ["subX", "x", "y", "y2"].forEach(function(type2) {
      var axis2 = $el.axis[type2];
      var id2 = type2 === "subX" ? "x" : type2;
      var toCull = config["axis_" + id2 + "_tick_culling"];
      if (axis2 && toCull) {
        var tickText = axis2.selectAll(".tick text");
        var tickValues_1 = sortValue(tickText.data());
        var tickSize = tickValues_1.length;
        var cullingMax = config["axis_" + id2 + "_tick_culling_max"];
        var intervalForCulling_1;
        if (tickSize) {
          for (var i = 1; i < tickSize; i++) {
            if (tickSize / i < cullingMax) {
              intervalForCulling_1 = i;
              break;
            }
          }
          tickText.each(function(d) {
            this.style.display = tickValues_1.indexOf(d) % intervalForCulling_1 ? "none" : null;
          });
        } else {
          tickText.style("display", null);
        }
        if (type2 === "x") {
          var clipPath = current.maxTickWidths.x.clipPath ? clip2.pathXAxisTickTexts : null;
          $el.svg.selectAll("." + CLASS.axisX + " .tick text").attr("clip-path", clipPath);
        }
      }
    });
  };
  return Axis2;
}();
var eventrect = {
  initEventRect: function() {
    var $$ = this;
    $$.$el.main.select("." + CLASS.chart).append("g").attr("class", CLASS.eventRects).style("fill-opacity", "0");
  },
  redrawEventRect: function() {
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var isMultipleX = $$.isMultipleX();
    if ($el.eventRect) {
      $$.updateEventRect($el.eventRect, true);
    } else {
      var eventRects = $$.$el.main.select("." + CLASS.eventRects).style("cursor", config.zoom_enabled && config.zoom_type !== "drag" ? config.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(CLASS.eventRectsMultiple, isMultipleX).classed(CLASS.eventRectsSingle, !isMultipleX);
      var eventRectUpdate = eventRects.selectAll("." + CLASS.eventRect).data([0]).enter().append("rect");
      $$.updateEventRect(eventRectUpdate);
      isMultipleX ? $$.generateEventRectsForMultipleXs(eventRectUpdate) : $$.generateEventRectsForSingleX(eventRectUpdate);
      eventRectUpdate.call($$.getDraggableSelection());
      $el.eventRect = eventRectUpdate;
      if ($$.state.inputType === "touch" && !$el.svg.on("touchstart.eventRect") && !$$.hasArcType()) {
        $$.bindTouchOnEventRect(isMultipleX);
      }
    }
    if (!isMultipleX) {
      var xAxisTickValues = $$.getMaxDataCountTarget();
      $$.updateDataIndexByX(xAxisTickValues);
      $$.updateXs(xAxisTickValues);
      $$.updatePointClass && $$.updatePointClass(true);
      state.eventReceiver.data = xAxisTickValues;
    }
    $$.updateEventRectData();
  },
  bindTouchOnEventRect: function(isMultipleX) {
    var $$ = this;
    var config = $$.config, state = $$.state, _a = $$.$el, eventRect = _a.eventRect, svg = _a.svg;
    var selectRect = function(context) {
      if (isMultipleX) {
        $$.selectRectForMultipleXs(context);
      } else {
        var index = $$.getDataIndexFromEvent(state.event);
        $$.callOverOutForTouch(index);
        index === -1 ? $$.unselectRect() : $$.selectRectForSingle(context, eventRect, index);
      }
    };
    var unselectRect = function() {
      $$.unselectRect();
      $$.callOverOutForTouch();
    };
    var preventDefault = config.interaction_inputType_touch.preventDefault;
    var isPrevented = isboolean(preventDefault) && preventDefault || false;
    var preventThreshold = !isNaN(preventDefault) && preventDefault || null;
    var startPx;
    var preventEvent = function(event) {
      var eventType = event.type;
      var touch = event.changedTouches[0];
      var currentXY = touch["client" + (config.axis_rotated ? "Y" : "X")];
      if (eventType === "touchstart") {
        if (isPrevented) {
          event.preventDefault();
        } else if (preventThreshold !== null) {
          startPx = currentXY;
        }
      } else if (eventType === "touchmove") {
        if (isPrevented || startPx === true || preventThreshold !== null && Math.abs(startPx - currentXY) >= preventThreshold) {
          startPx = true;
          event.preventDefault();
        }
      }
    };
    eventRect.on("touchstart", function(event) {
      state.event = event;
      $$.updateEventRect();
    }).on("touchstart.eventRect touchmove.eventRect", function(event) {
      state.event = event;
      if (!eventRect.empty() && eventRect.classed(CLASS.eventRect)) {
        if (state.dragging || state.flowing || $$.hasArcType() || event.touches.length > 1) {
          return;
        }
        preventEvent(event);
        selectRect(eventRect.node());
      } else {
        unselectRect();
      }
    }, true).on("touchend.eventRect", function(event) {
      state.event = event;
      if (!eventRect.empty() && eventRect.classed(CLASS.eventRect)) {
        if ($$.hasArcType() || !$$.toggleShape || state.cancelClick) {
          state.cancelClick && (state.cancelClick = false);
        }
      }
    }, true);
    svg.on("touchstart", function(event) {
      state.event = event;
      var target = event.target;
      if (target && target !== eventRect.node()) {
        unselectRect();
      }
    });
  },
  updateEventRect: function(eventRect, force) {
    if (force === void 0) {
      force = false;
    }
    var $$ = this;
    var state = $$.state, $el = $$.$el;
    var eventReceiver = state.eventReceiver, width = state.width, height = state.height, rendered = state.rendered, resizing = state.resizing;
    var rectElement = eventRect || $el.eventRect;
    var updateClientRect = function() {
      eventReceiver && (eventReceiver.rect = rectElement.node().getBoundingClientRect());
    };
    if (!rendered || resizing || force) {
      rectElement.attr("x", 0).attr("y", 0).attr("width", width).attr("height", height);
      if (!rendered) {
        rectElement.attr("class", CLASS.eventRect);
      }
    }
    updateClientRect();
  },
  updateEventRectData: function() {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale, state = $$.state;
    var xScale = scale2.zoom || scale2.x;
    var isRotated = config.axis_rotated;
    var x2;
    var y3;
    var w;
    var h;
    if ($$.isMultipleX()) {
      x2 = 0;
      y3 = 0;
      w = state.width;
      h = state.height;
    } else {
      var rectW_1;
      var rectX = void 0;
      if ($$.axis.isCategorized()) {
        rectW_1 = $$.getEventRectWidth();
        rectX = function(d) {
          return xScale(d.x) - rectW_1 / 2;
        };
      } else {
        var getPrevNextX_1 = function(_a) {
          var index = _a.index;
          return {
            prev: $$.getPrevX(index),
            next: $$.getNextX(index)
          };
        };
        rectW_1 = function(d) {
          var x3 = getPrevNextX_1(d);
          if (x3.prev === null && x3.next === null) {
            return isRotated ? state.height : state.width;
          }
          if (x3.prev === null) {
            x3.prev = xScale.domain()[0];
          }
          if (x3.next === null) {
            x3.next = xScale.domain()[1];
          }
          return Math.max(0, (xScale(x3.next) - xScale(x3.prev)) / 2);
        };
        rectX = function(d) {
          var x3 = getPrevNextX_1(d);
          var thisX = d.x;
          if (x3.prev === null && x3.next === null) {
            return 0;
          }
          if (x3.prev === null) {
            x3.prev = xScale.domain()[0];
          }
          return (xScale(thisX) + xScale(x3.prev)) / 2;
        };
      }
      x2 = isRotated ? 0 : rectX;
      y3 = isRotated ? rectX : 0;
      w = isRotated ? state.width : rectW_1;
      h = isRotated ? rectW_1 : state.height;
    }
    var eventReceiver = state.eventReceiver;
    var call = function(fn, v) {
      return isFunction(fn) ? fn(v) : fn;
    };
    eventReceiver.coords.splice(eventReceiver.data.length);
    eventReceiver.data.forEach(function(d, i) {
      eventReceiver.coords[i] = {
        x: call(x2, d),
        y: call(y3, d),
        w: call(w, d),
        h: call(h, d)
      };
    });
  },
  selectRectForMultipleXs: function(context) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var targetsToShow = $$.filterTargetsToShow($$.data.targets);
    if (state.dragging || $$.hasArcType(targetsToShow)) {
      return;
    }
    var mouse = getPointer(state.event, context);
    var closest = $$.findClosestFromTargets(targetsToShow, mouse);
    if (state.mouseover && (!closest || closest.id !== state.mouseover.id)) {
      config.data_onout.call($$.api, state.mouseover);
      state.mouseover = void 0;
    }
    if (!closest) {
      $$.unselectRect();
      return;
    }
    var sameXData = $$.isBubbleType(closest) || $$.isScatterType(closest) || !config.tooltip_grouped ? [closest] : $$.filterByX(targetsToShow, closest.x);
    var selectedData = sameXData.map(function(d) {
      return $$.addName(d);
    });
    $$.showTooltip(selectedData, context);
    $$.setExpand(closest.index, closest.id, true);
    $$.showGridFocus(selectedData);
    if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
      $$.$el.svg.select("." + CLASS.eventRect).style("cursor", "pointer");
      if (!state.mouseover) {
        config.data_onover.call($$.api, closest);
        state.mouseover = closest;
      }
    }
  },
  unselectRect: function() {
    var $$ = this;
    var config = $$.config, _a = $$.$el, circle = _a.circle, tooltip2 = _a.tooltip;
    $$.$el.svg.select("." + CLASS.eventRect).style("cursor", null);
    $$.hideGridFocus();
    if (tooltip2) {
      $$.hideTooltip();
      $$._handleLinkedCharts(false);
    }
    circle && !config.point_focus_only && $$.unexpandCircles();
    $$.expandBarTypeShapes(false);
  },
  generateEventRectsForSingleX: function(eventRectEnter) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var eventReceiver = state.eventReceiver;
    var rect = eventRectEnter.style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on("click", function(event) {
      state.event = event;
      var currentIdx = eventReceiver.currentIdx, data2 = eventReceiver.data;
      var d = data2[currentIdx === -1 ? $$.getDataIndexFromEvent(event) : currentIdx];
      $$.clickHandlerForSingleX.bind(this)(d, $$);
    });
    if (state.inputType === "mouse") {
      var getData_1 = function(event) {
        var index = event ? $$.getDataIndexFromEvent(event) : eventReceiver.currentIdx;
        return index > -1 ? eventReceiver.data[index] : null;
      };
      rect.on("mouseover", function(event) {
        state.event = event;
        $$.updateEventRect();
      }).on("mousemove", function(event) {
        var d = getData_1(event);
        state.event = event;
        if (state.dragging || state.flowing || $$.hasArcType() || !d || config.tooltip_grouped && d && d.index === eventReceiver.currentIdx) {
          return;
        }
        var index = d.index;
        if ($$.isStepType(d) && config.line_step_type === "step-after" && getPointer(event, this)[0] < $$.scale.x($$.getXValue(d.id, index))) {
          index -= 1;
        }
        if (index !== eventReceiver.currentIdx) {
          $$.setOverOut(false, eventReceiver.currentIdx);
          eventReceiver.currentIdx = index;
        }
        index === -1 ? $$.unselectRect() : $$.selectRectForSingle(this, rect, index);
        $$.setOverOut(index !== -1, index);
      }).on("mouseout", function(event) {
        state.event = event;
        if (!config || $$.hasArcType() || eventReceiver.currentIdx === -1) {
          return;
        }
        $$.unselectRect();
        $$.setOverOut(false, eventReceiver.currentIdx);
        eventReceiver.currentIdx = -1;
      });
    }
    return rect;
  },
  clickHandlerForSingleX: function(d, ctx) {
    var $$ = ctx;
    var config = $$.config, state = $$.state, main2 = $$.$el.main;
    if (!d || $$.hasArcType() || state.cancelClick) {
      state.cancelClick && (state.cancelClick = false);
      return;
    }
    var index = d.index;
    main2.selectAll("." + CLASS.shape + "-" + index).each(function(d2) {
      if (config.data_selection_grouped || $$.isWithinShape(this, d2)) {
        $$.toggleShape && $$.toggleShape(this, d2, index);
        config.data_onclick.bind($$.api)(d2, this);
      }
    });
  },
  generateEventRectsForMultipleXs: function(eventRectEnter) {
    var $$ = this;
    var state = $$.state;
    eventRectEnter.on("click", function(event) {
      state.event = event;
      $$.clickHandlerForMultipleXS.bind(this)($$);
    });
    if (state.inputType === "mouse") {
      eventRectEnter.on("mouseover mousemove", function(event) {
        state.event = event;
        $$.selectRectForMultipleXs(this);
      }).on("mouseout", function(event) {
        state.event = event;
        if (!$$.config || $$.hasArcType()) {
          return;
        }
        $$.unselectRect();
      });
    }
  },
  clickHandlerForMultipleXS: function(ctx) {
    var $$ = ctx;
    var config = $$.config, state = $$.state;
    var targetsToShow = $$.filterTargetsToShow($$.data.targets);
    if ($$.hasArcType(targetsToShow)) {
      return;
    }
    var mouse = getPointer(state.event, this);
    var closest = $$.findClosestFromTargets(targetsToShow, mouse);
    if (!closest) {
      return;
    }
    if ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) {
      $$.$el.main.selectAll("." + CLASS.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll("." + CLASS.shape + "-" + closest.index).each(function() {
        if (config.data_selection_grouped || $$.isWithinShape(this, closest)) {
          $$.toggleShape && $$.toggleShape(this, closest, closest.index);
          config.data_onclick.bind($$.api)(closest, this);
        }
      });
    }
  }
};
var flow = {
  generateFlow: function(args) {
    var $$ = this;
    var data2 = $$.data, state = $$.state, $el = $$.$el;
    return function() {
      var flowLength = args.flow.length;
      state.flowing = true;
      data2.targets.forEach(function(d) {
        d.values.splice(0, flowLength);
      });
      if ($$.updateXGrid) {
        $$.updateXGrid(true);
      }
      var elements = {};
      ["axis.x", "grid.x", "gridLines.x", "region.list", "text", "bar", "line", "area", "circle"].forEach(function(v) {
        var name = v.split(".");
        var node = $el[name[0]];
        if (node && name.length > 1) {
          node = node[name[1]];
        }
        if (node && node.size()) {
          elements[v] = node;
        }
      });
      $$.hideGridFocus();
      $$.setFlowList(elements, args);
    };
  },
  setFlowList: function(elements, args) {
    var $$ = this;
    var flow2 = args.flow, targets = args.targets;
    var _a = flow2.duration, duration = _a === void 0 ? args.duration : _a, flowIndex = flow2.index, flowLength = flow2.length, orgDataCount = flow2.orgDataCount;
    var transform2 = $$.getFlowTransform(targets, orgDataCount, flowIndex, flowLength);
    var wait = generateWait();
    var n;
    wait.add(Object.keys(elements).map(function(v) {
      n = elements[v].transition().ease(linear$1).duration(duration);
      if (v === "axis.x") {
        n = n.call(function(g) {
          $$.axis.x.setTransition(g).create(g);
        });
      } else if (v === "region.list") {
        n = n.filter($$.isRegionOnX).attr("transform", transform2);
      } else {
        n = n.attr("transform", transform2);
      }
      return n;
    }));
    n.call(wait, function() {
      $$.cleanUpFlow(elements, args);
    });
  },
  cleanUpFlow: function(elements, args) {
    var $$ = this;
    var config = $$.config, state = $$.state, svg = $$.$el.svg;
    var isRotated = config.axis_rotated;
    var flow2 = args.flow, shape2 = args.shape, xv = args.xv;
    var _a = shape2.pos, cx = _a.cx, cy = _a.cy, xForText = _a.xForText, yForText = _a.yForText;
    var _b = flow2.done, done = _b === void 0 ? function() {
    } : _b, flowLength = flow2.length;
    if (flowLength) {
      ["circle", "text", "shape", "eventRect"].forEach(function(v) {
        var target = [];
        for (var i = 0; i < flowLength; i++) {
          target.push("." + CLASS[v] + "-" + i);
        }
        svg.selectAll("." + CLASS[v + "s"]).selectAll(target).remove();
      });
      svg.select("." + CLASS.xgrid).remove();
    }
    Object.keys(elements).forEach(function(v) {
      var n = elements[v];
      if (v !== "axis.x") {
        n.attr("transform", null);
      }
      if (v === "grid.x") {
        n.attr(state.xgridAttr);
      } else if (v === "gridLines.x") {
        n.attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? state.width : xv);
      } else if (v === "gridLines.x") {
        n.select("line").attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? state.width : xv);
        n.select("text").attr("x", isRotated ? state.width : 0).attr("y", xv);
      } else if (/^(area|bar|line)$/.test(v)) {
        n.attr("d", shape2.type[v]);
      } else if (v === "text") {
        n.attr("x", xForText).attr("y", yForText).style("fill-opacity", $$.opacityForText.bind($$));
      } else if (v === "circle") {
        if ($$.isCirclePoint()) {
          n.attr("cx", cx).attr("cy", cy);
        } else {
          var xFunc = function(d) {
            return cx(d) - config.point_r;
          };
          var yFunc = function(d) {
            return cy(d) - config.point_r;
          };
          n.attr("x", xFunc).attr("y", yFunc).attr("cx", cx).attr("cy", cy);
        }
      } else if (v === "region.list") {
        n.select("rect").filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$));
      }
    });
    config.interaction_enabled && $$.redrawEventRect();
    done.call($$.api);
    state.flowing = false;
  },
  getFlowTransform: function(targets, orgDataCount, flowIndex, flowLength) {
    var $$ = this;
    var data2 = $$.data, x2 = $$.scale.x;
    var dataValues = data2.targets[0].values;
    var flowStart = $$.getValueOnIndex(dataValues, flowIndex);
    var flowEnd = $$.getValueOnIndex(dataValues, flowIndex + flowLength);
    var translateX2;
    var orgDomain = x2.domain();
    var domain2 = $$.updateXDomain(targets, true, true);
    if (!orgDataCount) {
      if (dataValues.length !== 1) {
        translateX2 = x2(orgDomain[0]) - x2(domain2[0]);
      } else {
        if ($$.axis.isTimeSeries()) {
          flowStart = $$.getValueOnIndex(dataValues, 0);
          flowEnd = $$.getValueOnIndex(dataValues, dataValues.length - 1);
          translateX2 = x2(flowStart.x) - x2(flowEnd.x);
        } else {
          translateX2 = diffDomain(domain2) / 2;
        }
      }
    } else if (orgDataCount === 1 || (flowStart && flowStart.x) === (flowEnd && flowEnd.x)) {
      translateX2 = x2(orgDomain[0]) - x2(domain2[0]);
    } else {
      translateX2 = $$.axis.isTimeSeries() ? x2(orgDomain[0]) - x2(domain2[0]) : x2(flowStart.x) - x2(flowEnd.x);
    }
    var scaleX = diffDomain(orgDomain) / diffDomain(domain2);
    return "translate(" + translateX2 + ",0) scale(" + scaleX + ",1)";
  }
};
var clip = {
  initClip: function() {
    var $$ = this;
    var clip2 = $$.state.clip;
    clip2.id = $$.state.datetimeId + "-clip";
    clip2.idXAxis = clip2.id + "-xaxis";
    clip2.idYAxis = clip2.id + "-yaxis";
    clip2.idGrid = clip2.id + "-grid";
    clip2.path = $$.getClipPath(clip2.id);
    clip2.pathXAxis = $$.getClipPath(clip2.idXAxis);
    clip2.pathYAxis = $$.getClipPath(clip2.idYAxis);
    clip2.pathGrid = $$.getClipPath(clip2.idGrid);
  },
  getClipPath: function(id2) {
    var $$ = this;
    var config = $$.config;
    if (!config.clipPath && /-clip$/.test(id2) || !config.axis_x_clipPath && /-clip-xaxis$/.test(id2) || !config.axis_y_clipPath && /-clip-yaxis$/.test(id2)) {
      return null;
    }
    var isIE9 = win.navigator ? win.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 : false;
    return "url(" + (isIE9 ? "" : doc.URL.split("#")[0]) + "#" + id2 + ")";
  },
  appendClip: function(parent, id2) {
    id2 && parent.append("clipPath").attr("id", id2).append("rect");
  },
  setXAxisClipPath: function(node) {
    var $$ = this;
    var config = $$.config, _a = $$.state, margin = _a.margin, width = _a.width, height = _a.height;
    var isRotated = config.axis_rotated;
    var left2 = Math.max(30, margin.left) - (isRotated ? 0 : 20);
    var x2 = isRotated ? -(1 + left2) : -(left2 - 1);
    var y3 = -Math.max(15, margin.top);
    var w = isRotated ? margin.left + 20 : width + 10 + left2;
    var h = (isRotated ? margin.top + height + 10 : margin.bottom) + 20;
    node.attr("x", x2).attr("y", y3).attr("width", w).attr("height", h);
  },
  setYAxisClipPath: function(node) {
    var $$ = this;
    var config = $$.config, _a = $$.state, margin = _a.margin, width = _a.width, height = _a.height;
    var isRotated = config.axis_rotated;
    var left2 = Math.max(30, margin.left) - (isRotated ? 20 : 0);
    var isInner = config.axis_y_inner;
    var x2 = isInner ? -1 : isRotated ? -(1 + left2) : -(left2 - 1);
    var y3 = -(isRotated ? 20 : margin.top);
    var w = (isRotated ? width + 15 + left2 : margin.left + 20) + (isInner ? 20 : 0);
    var h = (isRotated ? margin.bottom : margin.top + height) + 10;
    node.attr("x", x2).attr("y", y3).attr("width", w).attr("height", h);
  },
  updateXAxisTickClip: function() {
    var $$ = this;
    var config = $$.config, _a = $$.state, clip2 = _a.clip, xAxisHeight = _a.xAxisHeight, defs = $$.$el.defs;
    var newXAxisHeight = $$.getHorizontalAxisHeight("x");
    if (defs && !clip2.idXAxisTickTexts) {
      var clipId = clip2.id + "-xaxisticktexts";
      $$.appendClip(defs, clipId);
      clip2.pathXAxisTickTexts = $$.getClipPath(clip2.idXAxisTickTexts);
      clip2.idXAxisTickTexts = clipId;
    }
    if (!config.axis_x_tick_multiline && $$.getAxisTickRotate("x") && newXAxisHeight !== xAxisHeight) {
      $$.setXAxisTickClipWidth();
      $$.setXAxisTickTextClipPathWidth();
    }
    $$.state.xAxisHeight = newXAxisHeight;
  },
  setXAxisTickClipWidth: function() {
    var $$ = this;
    var config = $$.config, maxTickWidths = $$.state.current.maxTickWidths;
    var xAxisTickRotate = $$.getAxisTickRotate("x");
    if (!config.axis_x_tick_multiline && xAxisTickRotate) {
      var sinRotation = Math.sin(Math.PI / 180 * Math.abs(xAxisTickRotate));
      maxTickWidths.x.clipPath = ($$.getHorizontalAxisHeight("x") - 20) / sinRotation;
    } else {
      maxTickWidths.x.clipPath = null;
    }
  },
  setXAxisTickTextClipPathWidth: function() {
    var $$ = this;
    var _a = $$.state, clip2 = _a.clip, current = _a.current, svg = $$.$el.svg;
    if (svg) {
      svg.select("#" + clip2.idXAxisTickTexts + " rect").attr("width", current.maxTickWidths.x.clipPath).attr("height", 30);
    }
  }
};
var getGridTextAnchor = function(d) {
  return isValue(d.position) || "end";
};
var getGridTextDx = function(d) {
  return d.position === "start" ? 4 : d.position === "middle" ? 0 : -4;
};
function getGridTextX(isX, width, height) {
  return function(d) {
    var x2 = isX ? 0 : width;
    if (d.position === "start") {
      x2 = isX ? -height : 0;
    } else if (d.position === "middle") {
      x2 = (isX ? -height : width) / 2;
    }
    return x2;
  };
}
function smoothLines(el, type2) {
  if (type2 === "grid") {
    el.each(function() {
      var g = select(this);
      ["x1", "x2", "y1", "y2"].forEach(function(v) {
        return g.attr(v, Math.ceil(+g.attr(v)));
      });
    });
  }
}
var grid = {
  hasGrid: function() {
    var config = this.config;
    return ["x", "y"].some(function(v) {
      return config["grid_" + v + "_show"] || config["grid_" + v + "_lines"].length;
    });
  },
  initGrid: function() {
    var $$ = this;
    $$.hasGrid() && $$.initGridLines();
    $$.initFocusGrid();
  },
  initGridLines: function() {
    var $$ = this;
    var config = $$.config, clip2 = $$.state.clip, $el = $$.$el;
    if (config.grid_x_lines.length || config.grid_y_lines.length) {
      $el.gridLines.main = $el.main.insert("g", "." + CLASS.chart + (config.grid_lines_front ? " + *" : "")).attr("clip-path", clip2.pathGrid).attr("class", CLASS.grid + " " + CLASS.gridLines);
      $el.gridLines.main.append("g").attr("class", CLASS.xgridLines);
      $el.gridLines.main.append("g").attr("class", CLASS.ygridLines);
      $el.gridLines.x = selectAll([]);
    }
  },
  updateXGrid: function(withoutUpdate) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale, state = $$.state, _a = $$.$el, main2 = _a.main, grid2 = _a.grid;
    var isRotated = config.axis_rotated;
    var xgridData = $$.generateGridData(config.grid_x_type, scale2.x);
    var tickOffset = $$.axis.isCategorized() ? $$.axis.x.tickOffset() : 0;
    var pos = function(d) {
      return (scale2.zoom || scale2.x)(d) + tickOffset * (isRotated ? -1 : 1);
    };
    state.xgridAttr = isRotated ? {
      "x1": 0,
      "x2": state.width,
      "y1": pos,
      "y2": pos
    } : {
      "x1": pos,
      "x2": pos,
      "y1": 0,
      "y2": state.height
    };
    grid2.x = main2.select("." + CLASS.xgrids).selectAll("." + CLASS.xgrid).data(xgridData);
    grid2.x.exit().remove();
    grid2.x = grid2.x.enter().append("line").attr("class", CLASS.xgrid).merge(grid2.x);
    if (!withoutUpdate) {
      grid2.x.each(function() {
        var grid3 = select(this);
        Object.keys(state.xgridAttr).forEach(function(id2) {
          grid3.attr(id2, state.xgridAttr[id2]).style("opacity", function() {
            return grid3.attr(isRotated ? "y1" : "x1") === (isRotated ? state.height : 0) ? "0" : null;
          });
        });
      });
    }
  },
  updateYGrid: function() {
    var $$ = this;
    var config = $$.config, state = $$.state, _a = $$.$el, grid2 = _a.grid, main2 = _a.main;
    var isRotated = config.axis_rotated;
    var gridValues = $$.axis.y.tickValues() || $$.scale.y.ticks(config.grid_y_ticks);
    var pos = function(d) {
      return Math.ceil($$.scale.y(d));
    };
    grid2.y = main2.select("." + CLASS.ygrids).selectAll("." + CLASS.ygrid).data(gridValues);
    grid2.y.exit().remove();
    grid2.y = grid2.y.enter().append("line").attr("class", CLASS.ygrid).merge(grid2.y);
    grid2.y.attr("x1", isRotated ? pos : 0).attr("x2", isRotated ? pos : state.width).attr("y1", isRotated ? 0 : pos).attr("y2", isRotated ? state.height : pos);
    smoothLines(grid2.y, "grid");
  },
  updateGrid: function(duration) {
    var $$ = this;
    var _a = $$.$el, grid2 = _a.grid, gridLines = _a.gridLines;
    !gridLines.main && $$.initGridLines();
    grid2.main.style("visibility", $$.hasArcType() ? "hidden" : null);
    $$.hideGridFocus();
    $$.updateXGridLines(duration);
    $$.updateYGridLines(duration);
  },
  updateXGridLines: function(duration) {
    var $$ = this;
    var config = $$.config, _a = $$.$el, gridLines = _a.gridLines, main2 = _a.main;
    var isRotated = config.axis_rotated;
    config.grid_x_show && $$.updateXGrid();
    var xLines = main2.select("." + CLASS.xgridLines).selectAll("." + CLASS.xgridLine).data(config.grid_x_lines);
    xLines.exit().transition().duration(duration).style("opacity", "0").remove();
    var xgridLine = xLines.enter().append("g");
    xgridLine.append("line").style("opacity", "0");
    xgridLine.append("text").attr("transform", isRotated ? "" : "rotate(-90)").attr("dy", -5).style("opacity", "0");
    xLines = xgridLine.merge(xLines);
    xLines.attr("class", function(d) {
      return (CLASS.xgridLine + " " + (d["class"] || "")).trim();
    }).select("text").attr("text-anchor", getGridTextAnchor).attr("dx", getGridTextDx).transition().duration(duration).text(function(d) {
      return d.text;
    }).transition().style("opacity", null);
    gridLines.x = xLines;
  },
  updateYGridLines: function(duration) {
    var $$ = this;
    var config = $$.config, _a = $$.state, width = _a.width, height = _a.height, $el = $$.$el;
    var isRotated = config.axis_rotated;
    config.grid_y_show && $$.updateYGrid();
    var ygridLines = $el.main.select("." + CLASS.ygridLines).selectAll("." + CLASS.ygridLine).data(config.grid_y_lines);
    ygridLines.exit().transition().duration(duration).style("opacity", "0").remove();
    var ygridLine = ygridLines.enter().append("g");
    ygridLine.append("line").style("opacity", "0");
    ygridLine.append("text").attr("transform", isRotated ? "rotate(-90)" : "").style("opacity", "0");
    ygridLines = ygridLine.merge(ygridLines);
    var yv = $$.yv.bind($$);
    ygridLines.attr("class", function(d) {
      return (CLASS.ygridLine + " " + (d["class"] || "")).trim();
    }).select("line").transition().duration(duration).attr("x1", isRotated ? yv : 0).attr("x2", isRotated ? yv : width).attr("y1", isRotated ? 0 : yv).attr("y2", isRotated ? height : yv).transition().style("opacity", null);
    ygridLines.select("text").attr("text-anchor", getGridTextAnchor).attr("dx", getGridTextDx).transition().duration(duration).attr("dy", -5).attr("x", getGridTextX(isRotated, width, height)).attr("y", yv).text(function(d) {
      return d.text;
    }).transition().style("opacity", null);
    $el.gridLines.y = ygridLines;
  },
  redrawGrid: function(withTransition) {
    var $$ = this;
    var isRotated = $$.config.axis_rotated, _a = $$.state, width = _a.width, height = _a.height, gridLines = $$.$el.gridLines;
    var xv = $$.xv.bind($$);
    var lines = gridLines.x.select("line");
    var texts = gridLines.x.select("text");
    lines = (withTransition ? lines.transition() : lines).attr("x1", isRotated ? 0 : xv).attr("x2", isRotated ? width : xv).attr("y1", isRotated ? xv : 0).attr("y2", isRotated ? xv : height);
    texts = (withTransition ? texts.transition() : texts).attr("x", getGridTextX(!isRotated, width, height)).attr("y", xv).text(function(d) {
      return d.text;
    });
    return [
      lines.style("opacity", null),
      texts.style("opacity", null)
    ];
  },
  initFocusGrid: function() {
    var $$ = this;
    var config = $$.config, clip2 = $$.state.clip, $el = $$.$el;
    var isFront = config.grid_front;
    var className = "." + CLASS[isFront && $el.gridLines.main ? "gridLines" : "chart"] + (isFront ? " + *" : "");
    var grid2 = $el.main.insert("g", className).attr("clip-path", clip2.pathGrid).attr("class", CLASS.grid);
    $el.grid.main = grid2;
    config.grid_x_show && grid2.append("g").attr("class", CLASS.xgrids);
    config.grid_y_show && grid2.append("g").attr("class", CLASS.ygrids);
    if (config.interaction_enabled && config.grid_focus_show) {
      grid2.append("g").attr("class", CLASS.xgridFocus).append("line").attr("class", CLASS.xgridFocus);
      if (config.grid_focus_y && !config.tooltip_grouped) {
        grid2.append("g").attr("class", CLASS.ygridFocus).append("line").attr("class", CLASS.ygridFocus);
      }
    }
  },
  showGridFocus: function(data2) {
    var $$ = this;
    var config = $$.config, _a = $$.state, width = _a.width, height = _a.height;
    var isRotated = config.axis_rotated;
    var focusEl = $$.$el.main.selectAll("line." + CLASS.xgridFocus + ", line." + CLASS.ygridFocus);
    var dataToShow = (data2 || [focusEl.datum()]).filter(function(d) {
      return d && isValue($$.getBaseValue(d));
    });
    if (!config.tooltip_show || dataToShow.length === 0 || $$.hasType("bubble") || $$.hasArcType()) {
      return;
    }
    var isEdge = config.grid_focus_edge && !config.tooltip_grouped;
    var xx = $$.xx.bind($$);
    focusEl.style("visibility", null).data(dataToShow.concat(dataToShow)).each(function(d) {
      var el = select(this);
      var pos = {
        x: xx(d),
        y: $$.getYScaleById(d.id)(d.value)
      };
      var xy;
      if (el.classed(CLASS.xgridFocus)) {
        xy = isRotated ? [
          null,
          pos.x,
          isEdge ? pos.y : width,
          pos.x
        ] : [
          pos.x,
          isEdge ? pos.y : null,
          pos.x,
          height
        ];
      } else {
        var isY2 = $$.axis.getId(d.id) === "y2";
        xy = isRotated ? [
          pos.y,
          isEdge && !isY2 ? pos.x : null,
          pos.y,
          isEdge && isY2 ? pos.x : height
        ] : [
          isEdge && isY2 ? pos.x : null,
          pos.y,
          isEdge && !isY2 ? pos.x : width,
          pos.y
        ];
      }
      ["x1", "y1", "x2", "y2"].forEach(function(v, i) {
        return el.attr(v, xy[i]);
      });
    });
    smoothLines(focusEl, "grid");
    $$.showCircleFocus && $$.showCircleFocus(data2);
  },
  hideGridFocus: function() {
    var $$ = this;
    var _a = $$.state, inputType = _a.inputType, resizing = _a.resizing, main2 = $$.$el.main;
    if (inputType === "mouse" || !resizing) {
      main2.selectAll("line." + CLASS.xgridFocus + ", line." + CLASS.ygridFocus).style("visibility", "hidden");
      $$.hideCircleFocus && $$.hideCircleFocus();
    }
  },
  updateGridFocus: function() {
    var $$ = this;
    var _a = $$.state, inputType = _a.inputType, width = _a.width, height = _a.height, resizing = _a.resizing, grid2 = $$.$el.grid;
    var xgridFocus = grid2.main.select("line." + CLASS.xgridFocus);
    if (inputType === "touch") {
      if (xgridFocus.empty()) {
        resizing && $$.showCircleFocus();
      } else {
        $$.showGridFocus();
      }
    } else {
      var isRotated = $$.config.axis_rotated;
      xgridFocus.attr("x1", isRotated ? 0 : -10).attr("x2", isRotated ? width : -10).attr("y1", isRotated ? -10 : 0).attr("y2", isRotated ? -10 : height);
    }
    return true;
  },
  generateGridData: function(type2, scale2) {
    var $$ = this;
    var tickNum = $$.$el.main.select("." + CLASS.axisX).selectAll(".tick").size();
    var gridData = [];
    if (type2 === "year") {
      var xDomain = $$.getXDomain();
      var firstYear = xDomain[0].getFullYear();
      var lastYear = xDomain[1].getFullYear();
      for (var i = firstYear; i <= lastYear; i++) {
        gridData.push(new Date(i + "-01-01 00:00:00"));
      }
    } else {
      gridData = scale2.ticks(10);
      if (gridData.length > tickNum) {
        gridData = gridData.filter(function(d) {
          return String(d).indexOf(".") < 0;
        });
      }
    }
    return gridData;
  },
  getGridFilterToRemove: function(params) {
    return params ? function(line2) {
      var found = false;
      (isArray(params) ? params.concat() : [params]).forEach(function(param) {
        if ("value" in param && line2.value === param.value || "class" in param && line2["class"] === param["class"]) {
          found = true;
        }
      });
      return found;
    } : function() {
      return true;
    };
  },
  removeGridLines: function(params, forX) {
    var $$ = this;
    var config = $$.config;
    var toRemove = $$.getGridFilterToRemove(params);
    var toShow = function(line2) {
      return !toRemove(line2);
    };
    var classLines = forX ? CLASS.xgridLines : CLASS.ygridLines;
    var classLine = forX ? CLASS.xgridLine : CLASS.ygridLine;
    $$.$el.main.select("." + classLines).selectAll("." + classLine).filter(toRemove).transition().duration(config.transition_duration).style("opacity", "0").remove();
    var gridLines = "grid_" + (forX ? "x" : "y") + "_lines";
    config[gridLines] = config[gridLines].filter(toShow);
  }
};
var region = {
  initRegion: function() {
    var $$ = this;
    var $el = $$.$el;
    $el.region.main = $el.main.insert("g", ":first-child").attr("clip-path", $$.state.clip.path).attr("class", CLASS.regions);
  },
  updateRegion: function(duration) {
    var $$ = this;
    var config = $$.config, region2 = $$.$el.region;
    if (!region2.main) {
      $$.initRegion();
    }
    region2.main.style("visibility", $$.hasArcType() ? "hidden" : null);
    var list = region2.main.selectAll("." + CLASS.region).data(config.regions);
    list.exit().transition().duration(duration).style("opacity", "0").remove();
    list = list.enter().append("g").merge(list).attr("class", $$.classRegion.bind($$));
    list.append("rect").style("fill-opacity", "0");
    region2.list = list;
  },
  redrawRegion: function(withTransition) {
    var $$ = this;
    var regions2 = $$.$el.region.list.select("rect");
    regions2 = (withTransition ? regions2.transition() : regions2).attr("x", $$.regionX.bind($$)).attr("y", $$.regionY.bind($$)).attr("width", $$.regionWidth.bind($$)).attr("height", $$.regionHeight.bind($$));
    return [
      (withTransition ? regions2.transition() : regions2).style("fill-opacity", function(d) {
        return isValue(d.opacity) ? d.opacity : null;
      }).on("end", function() {
        select(this.parentNode).selectAll("rect:not([x])").remove();
      })
    ];
  },
  getRegionXY: function(type2, d) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale;
    var isRotated = config.axis_rotated;
    var isX = type2 === "x";
    var key = "start";
    var currScale;
    var pos = 0;
    if (d.axis === "y" || d.axis === "y2") {
      if (!isX) {
        key = "end";
      }
      if ((isX ? isRotated : !isRotated) && key in d) {
        currScale = scale2[d.axis];
        pos = currScale(d[key]);
      }
    } else if ((isX ? !isRotated : isRotated) && key in d) {
      currScale = scale2.zoom || scale2.x;
      pos = currScale($$.axis.isTimeSeries() ? parseDate.call($$, d[key]) : d[key]);
    }
    return pos;
  },
  regionX: function(d) {
    return this.getRegionXY("x", d);
  },
  regionY: function(d) {
    return this.getRegionXY("y", d);
  },
  getRegionSize: function(type2, d) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale, state = $$.state;
    var isRotated = config.axis_rotated;
    var isWidth = type2 === "width";
    var start2 = $$[isWidth ? "regionX" : "regionY"](d);
    var currScale;
    var key = "end";
    var end = state[type2];
    if (d.axis === "y" || d.axis === "y2") {
      if (!isWidth) {
        key = "start";
      }
      if ((isWidth ? isRotated : !isRotated) && key in d) {
        currScale = scale2[d.axis];
        end = currScale(d[key]);
      }
    } else if ((isWidth ? !isRotated : isRotated) && key in d) {
      currScale = scale2.zoom || scale2.x;
      end = currScale($$.axis.isTimeSeries() ? parseDate.call($$, d[key]) : d[key]);
    }
    return end < start2 ? 0 : end - start2;
  },
  regionWidth: function(d) {
    return this.getRegionSize("width", d);
  },
  regionHeight: function(d) {
    return this.getRegionSize("height", d);
  },
  isRegionOnX: function(d) {
    return !d.axis || d.axis === "x";
  }
};
var sizeAxis = {
  getAxisSize: function(id2) {
    var $$ = this;
    var isRotated = $$.config.axis_rotated;
    return isRotated && id2 === "x" || !isRotated && /y2?/.test(id2) ? $$.getAxisWidthByAxisId(id2, true) : $$.getHorizontalAxisHeight(id2);
  },
  getAxisWidthByAxisId: function(id2, withoutRecompute) {
    var $$ = this;
    if ($$.axis) {
      var position = $$.axis && $$.axis.getLabelPositionById(id2);
      return $$.axis.getMaxTickWidth(id2, withoutRecompute) + (position.isInner ? 20 : 40);
    } else {
      return 40;
    }
  },
  getHorizontalAxisHeight: function(id2) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var current = state.current, rotatedPadding = state.rotatedPadding, isLegendRight = state.isLegendRight, isLegendInset = state.isLegendInset;
    var isRotated = config.axis_rotated;
    var h = 30;
    if (id2 === "x" && !config.axis_x_show) {
      return 8;
    }
    if (id2 === "x" && config.axis_x_height) {
      return config.axis_x_height;
    }
    if (id2 === "y" && !config.axis_y_show) {
      return config.legend_show && !isLegendRight && !isLegendInset ? 10 : 1;
    }
    if (id2 === "y2" && !config.axis_y2_show) {
      return rotatedPadding.top;
    }
    var rotate = $$.getAxisTickRotate(id2);
    if ((id2 === "x" && !isRotated || /y2?/.test(id2) && isRotated) && rotate) {
      h = 30 + $$.axis.getMaxTickWidth(id2) * Math.cos(Math.PI * (90 - Math.abs(rotate)) / 180);
      if (!config.axis_x_tick_multiline && current.height) {
        if (h > current.height / 2) {
          h = current.height / 2;
        }
      }
    }
    return h + ($$.axis.getLabelPositionById(id2).isInner ? 0 : 10) + (id2 === "y2" && !isRotated ? -10 : 0);
  },
  getEventRectWidth: function() {
    return Math.max(0, this.axis.x.tickInterval());
  },
  getAxisTickRotate: function(id2) {
    var $$ = this;
    var axis2 = $$.axis, config = $$.config, state = $$.state, $el = $$.$el;
    var rotate = config["axis_" + id2 + "_tick_rotate"];
    if (id2 === "x") {
      var allowedXAxisTypes = axis2.isCategorized() || axis2.isTimeSeries();
      if (config.axis_x_tick_fit && allowedXAxisTypes) {
        var xTickCount = config.axis_x_tick_count;
        var currentXTicksLength = state.current.maxTickWidths.x.ticks.length;
        var tickCount = 0;
        if (xTickCount) {
          tickCount = xTickCount > currentXTicksLength ? currentXTicksLength : xTickCount;
        } else if (currentXTicksLength) {
          tickCount = currentXTicksLength;
        }
        if (tickCount !== state.axis.x.tickCount) {
          state.axis.x.padding = $$.axis.getXAxisPadding(tickCount);
        }
        state.axis.x.tickCount = tickCount;
      }
      if ($el.svg && config.axis_x_tick_fit && !config.axis_x_tick_multiline && !config.axis_x_tick_culling && config.axis_x_tick_autorotate && allowedXAxisTypes) {
        rotate = $$.needToRotateXAxisTickTexts() ? config.axis_x_tick_rotate : 0;
      }
    }
    return rotate;
  },
  needToRotateXAxisTickTexts: function() {
    var $$ = this;
    var _a = $$.state, axis2 = _a.axis, current = _a.current;
    var xAxisLength = current.width - $$.getCurrentPaddingLeft(false) - $$.getCurrentPaddingRight();
    var tickCountWithPadding = axis2.x.tickCount + axis2.x.padding.left + axis2.x.padding.right;
    var maxTickWidth = $$.axis.getMaxTickWidth("x");
    var tickLength = tickCountWithPadding ? xAxisLength / tickCountWithPadding : 0;
    return maxTickWidth > tickLength;
  }
};
var optDataAxis = {
  data_xs: {},
  data_xFormat: "%Y-%m-%d",
  data_xLocaltime: true,
  data_xSort: true,
  data_axes: {},
  data_regions: {},
  data_stack_normalize: false
};
var x = {
  axis_x_clipPath: true,
  axis_x_show: true,
  axis_x_type: "indexed",
  axis_x_localtime: true,
  axis_x_categories: [],
  axis_x_tick_centered: false,
  axis_x_tick_format: void 0,
  axis_x_tick_culling: {},
  axis_x_tick_culling_max: 10,
  axis_x_tick_count: void 0,
  axis_x_tick_show: true,
  axis_x_tick_text_show: true,
  axis_x_tick_text_position: { x: 0, y: 0 },
  axis_x_tick_fit: true,
  axis_x_tick_values: null,
  axis_x_tick_autorotate: false,
  axis_x_tick_rotate: 0,
  axis_x_tick_outer: true,
  axis_x_tick_multiline: true,
  axis_x_tick_width: null,
  axis_x_tick_tooltip: false,
  axis_x_max: void 0,
  axis_x_min: void 0,
  axis_x_padding: {},
  axis_x_height: void 0,
  axis_x_extent: void 0,
  axis_x_label: {},
  axis_x_axes: []
};
var y = {
  axis_y_clipPath: true,
  axis_y_show: true,
  axis_y_type: "indexed",
  axis_y_max: void 0,
  axis_y_min: void 0,
  axis_y_inverted: false,
  axis_y_center: void 0,
  axis_y_inner: false,
  axis_y_label: {},
  axis_y_tick_format: void 0,
  axis_y_tick_culling: false,
  axis_y_tick_culling_max: 5,
  axis_y_tick_outer: true,
  axis_y_tick_values: null,
  axis_y_tick_rotate: 0,
  axis_y_tick_count: void 0,
  axis_y_tick_show: true,
  axis_y_tick_stepSize: null,
  axis_y_tick_text_show: true,
  axis_y_tick_text_position: { x: 0, y: 0 },
  axis_y_tick_time_value: void 0,
  axis_y_padding: {},
  axis_y_default: void 0,
  axis_y_axes: []
};
var y2 = {
  axis_y2_show: false,
  axis_y2_type: "indexed",
  axis_y2_max: void 0,
  axis_y2_min: void 0,
  axis_y2_inverted: false,
  axis_y2_center: void 0,
  axis_y2_inner: false,
  axis_y2_label: {},
  axis_y2_tick_format: void 0,
  axis_y2_tick_culling: false,
  axis_y2_tick_culling_max: 5,
  axis_y2_tick_outer: true,
  axis_y2_tick_values: null,
  axis_y2_tick_rotate: 0,
  axis_y2_tick_count: void 0,
  axis_y2_tick_show: true,
  axis_y2_tick_stepSize: null,
  axis_y2_tick_text_show: true,
  axis_y2_tick_text_position: { x: 0, y: 0 },
  axis_y2_padding: {},
  axis_y2_default: void 0,
  axis_y2_axes: []
};
var optAxis = _assign(_assign(_assign({
  axis_rotated: false
}, x), y), y2);
var optGrid = {
  grid_x_show: false,
  grid_x_type: "tick",
  grid_x_lines: [],
  grid_y_show: false,
  grid_y_lines: [],
  grid_y_ticks: 10,
  grid_focus_edge: false,
  grid_focus_show: true,
  grid_focus_y: false,
  grid_front: false,
  grid_lines_front: true
};
var api = [
  apiAxis,
  apiCategory,
  apiXGrid,
  apiYGrid,
  apiFlow,
  apiGroup,
  apiRegion,
  apiX
];
var internal = [
  axis,
  clip,
  eventrect,
  flow,
  grid,
  region,
  sizeAxis
];
var options = [
  optDataAxis,
  optAxis,
  optGrid
];
var shapeArc = {
  initPie: function() {
    var $$ = this;
    var config = $$.config;
    var dataType = config.data_type;
    var padding = config.pie_padding;
    var startingAngle = config[dataType + "_startingAngle"] || 0;
    var padAngle = ($$.hasType("pie") && padding ? padding * 0.01 : config[dataType + "_padAngle"]) || 0;
    $$.pie = pie$1().startAngle(startingAngle).endAngle(startingAngle + 2 * Math.PI).padAngle(padAngle).value(function(d) {
      return d.values.reduce(function(a, b) {
        return a + b.value;
      }, 0);
    }).sort($$.getSortCompareFn.bind($$)(true));
  },
  updateRadius: function() {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var padding = config.pie_padding;
    var w = config.gauge_width || config.donut_width;
    var gaugeArcWidth = $$.filterTargetsToShow($$.data.targets).length * config.gauge_arcs_minWidth;
    state.radiusExpanded = Math.min(state.arcWidth, state.arcHeight) / 2 * ($$.hasMultiArcGauge() ? 0.85 : 1);
    state.radius = state.radiusExpanded * 0.95;
    state.innerRadiusRatio = w ? (state.radius - w) / state.radius : 0.6;
    state.gaugeArcWidth = w || (gaugeArcWidth <= state.radius - state.innerRadius ? state.radius - state.innerRadius : gaugeArcWidth <= state.radius ? gaugeArcWidth : state.radius);
    var innerRadius = config.pie_innerRadius || (padding ? padding * (state.innerRadiusRatio + 0.1) : 0);
    state.outerRadius = config.pie_outerRadius;
    state.innerRadius = $$.hasType("donut") || $$.hasType("gauge") ? state.radius * state.innerRadiusRatio : innerRadius;
  },
  getRadius: function(d) {
    var $$ = this;
    var data2 = d && d.data;
    var _a = $$.state, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius;
    if (!isNumber(innerRadius) && data2) {
      innerRadius = innerRadius[data2.id] || 0;
    }
    if (isObject(outerRadius) && data2 && data2.id in outerRadius) {
      outerRadius = outerRadius[data2.id];
    } else if (!isNumber(outerRadius)) {
      outerRadius = $$.state.radius;
    }
    return { innerRadius, outerRadius };
  },
  updateArc: function() {
    var $$ = this;
    $$.updateRadius();
    $$.svgArc = $$.getSvgArc();
    $$.svgArcExpanded = $$.getSvgArcExpanded();
  },
  getArcLength: function() {
    var $$ = this;
    var config = $$.config;
    var arcLengthInPercent = config.gauge_arcLength * 3.6;
    var len = 2 * (arcLengthInPercent / 360);
    if (arcLengthInPercent < -360) {
      len = -2;
    } else if (arcLengthInPercent > 360) {
      len = 2;
    }
    return len * Math.PI;
  },
  getStartAngle: function() {
    var $$ = this;
    var config = $$.config;
    var isFullCircle = config.gauge_fullCircle;
    var defaultStartAngle = -1 * Math.PI / 2;
    var defaultEndAngle = Math.PI / 2;
    var startAngle = config.gauge_startingAngle;
    if (!isFullCircle && startAngle <= defaultStartAngle) {
      startAngle = defaultStartAngle;
    } else if (!isFullCircle && startAngle >= defaultEndAngle) {
      startAngle = defaultEndAngle;
    } else if (startAngle > Math.PI || startAngle < -1 * Math.PI) {
      startAngle = Math.PI;
    }
    return startAngle;
  },
  updateAngle: function(dValue) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var pie2 = $$.pie;
    var d = dValue;
    var found = false;
    if (!config) {
      return null;
    }
    var gStart = $$.getStartAngle();
    var radius = config.gauge_fullCircle ? $$.getArcLength() : gStart * -2;
    if (d.data && $$.isGaugeType(d.data) && !$$.hasMultiArcGauge()) {
      var min2 = config.gauge_min, max2 = config.gauge_max;
      var totalSum = $$.getTotalDataSum(state.rendered);
      var gEnd = radius * ((totalSum - min2) / (max2 - min2));
      pie2 = pie2.startAngle(gStart).endAngle(gEnd + gStart);
    }
    pie2($$.filterTargetsToShow()).forEach(function(t, i) {
      if (!found && t.data.id === d.data.id) {
        found = true;
        d = t;
        d.index = i;
      }
    });
    if (isNaN(d.startAngle)) {
      d.startAngle = 0;
    }
    if (isNaN(d.endAngle)) {
      d.endAngle = d.startAngle;
    }
    if (d.data && $$.hasMultiArcGauge()) {
      var gMin = config.gauge_min;
      var gMax = config.gauge_max;
      var gTic = radius / (gMax - gMin);
      var gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin;
      d.startAngle = gStart;
      d.endAngle = gStart + gTic * gValue;
    }
    return found ? d : null;
  },
  getSvgArc: function() {
    var $$ = this;
    var state = $$.state;
    var singleArcWidth = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length;
    var hasMultiArcGauge = $$.hasMultiArcGauge();
    var arc$1 = arc().innerRadius(function(d) {
      var innerRadius = $$.getRadius(d).innerRadius;
      return hasMultiArcGauge ? state.radius - singleArcWidth * (d.index + 1) : isNumber(innerRadius) ? innerRadius : 0;
    }).outerRadius(function(d) {
      var outerRadius = $$.getRadius(d).outerRadius;
      return hasMultiArcGauge ? state.radius - singleArcWidth * d.index : outerRadius;
    });
    var newArc = function(d, withoutUpdate) {
      var path2 = "M 0 0";
      if (d.value || d.data) {
        var updated = !withoutUpdate && $$.updateAngle(d);
        if (withoutUpdate) {
          path2 = arc$1(d);
        } else if (updated) {
          path2 = arc$1(updated);
        }
      }
      return path2;
    };
    newArc.centroid = arc$1.centroid;
    return newArc;
  },
  getSvgArcExpanded: function(rate) {
    var $$ = this;
    var state = $$.state;
    var newRate = rate || 1;
    var singleArcWidth = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length;
    var hasMultiArcGauge = $$.hasMultiArcGauge();
    var expandWidth = Math.min(state.radiusExpanded * newRate - state.radius, singleArcWidth * 0.8 - (1 - newRate) * 100);
    var arc$1 = arc().innerRadius(function(d) {
      return hasMultiArcGauge ? state.radius - singleArcWidth * (d.index + 1) : $$.getRadius(d).innerRadius;
    }).outerRadius(function(d) {
      var radius;
      if (hasMultiArcGauge) {
        radius = state.radius - singleArcWidth * d.index + expandWidth;
      } else {
        var outerRadius = $$.getRadius(d).outerRadius;
        var radiusExpanded = state.radiusExpanded;
        if (state.radius !== outerRadius) {
          radiusExpanded -= Math.abs(state.radius - outerRadius);
        }
        radius = radiusExpanded * newRate;
      }
      return radius;
    });
    return function(d) {
      var updated = $$.updateAngle(d);
      return updated ? arc$1(updated) : "M 0 0";
    };
  },
  getArc: function(d, withoutUpdate, force) {
    return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
  },
  transformForArcLabel: function(d) {
    var $$ = this;
    var config = $$.config, radiusExpanded = $$.state.radiusExpanded;
    var updated = $$.updateAngle(d);
    var translate = "";
    if (updated) {
      if ($$.hasMultiArcGauge()) {
        var y1 = Math.sin(updated.endAngle - Math.PI / 2);
        var x2 = Math.cos(updated.endAngle - Math.PI / 2) * (radiusExpanded + 25);
        var y3 = y1 * (radiusExpanded + 15 - Math.abs(y1 * 10)) + 3;
        translate = "translate(" + x2 + "," + y3 + ")";
      } else if (!$$.hasType("gauge") || $$.data.targets.length > 1) {
        var outerRadius = $$.getRadius(d).outerRadius;
        var c = this.svgArc.centroid(updated);
        var x2 = isNaN(c[0]) ? 0 : c[0];
        var y3 = isNaN(c[1]) ? 0 : c[1];
        var h = Math.sqrt(x2 * x2 + y3 * y3);
        var ratio = $$.hasType("donut") && config.donut_label_ratio || $$.hasType("pie") && config.pie_label_ratio;
        if (ratio) {
          ratio = isFunction(ratio) ? ratio.bind($$.api)(d, outerRadius, h) : ratio;
        } else {
          ratio = outerRadius && (h ? (36 / outerRadius > 0.375 ? 1.175 - 36 / outerRadius : 0.8) * outerRadius / h : 0);
        }
        translate = "translate(" + x2 * ratio + "," + y3 * ratio + ")";
      }
    }
    return translate;
  },
  convertToArcData: function(d) {
    return this.addName({
      id: d.data ? d.data.id : d.id,
      value: d.value,
      ratio: this.getRatio("arc", d),
      index: d.index
    });
  },
  textForArcLabel: function(selection2) {
    var $$ = this;
    var hasGauge = $$.hasType("gauge");
    if ($$.shouldShowArcLabel()) {
      selection2.style("fill", $$.updateTextColor.bind($$)).attr("filter", $$.updateTextBacgroundColor.bind($$)).each(function(d) {
        var node = select(this);
        var updated = $$.updateAngle(d);
        var ratio = $$.getRatio("arc", updated);
        var isUnderThreshold = $$.meetsLabelThreshold(ratio, $$.hasType("donut") && "donut" || $$.hasType("gauge") && "gauge" || $$.hasType("pie") && "pie");
        if (isUnderThreshold) {
          var value = (updated || d).value;
          var text2 = ($$.getArcLabelFormat() || $$.defaultArcValueFormat)(value, ratio, d.data.id).toString();
          setTextValue(node, text2, [-1, 1], hasGauge);
        } else {
          node.text("");
        }
      });
    }
  },
  expandArc: function(targetIds) {
    var $$ = this;
    var transiting = $$.state.transiting, $el = $$.$el;
    if (transiting) {
      var interval_1 = setInterval(function() {
        if (!transiting) {
          clearInterval(interval_1);
          $el.legend.selectAll("." + CLASS.legendItemFocused).size() > 0 && $$.expandArc(targetIds);
        }
      }, 10);
      return;
    }
    var newTargetIds = $$.mapToTargetIds(targetIds);
    $el.svg.selectAll($$.selectorTargets(newTargetIds, "." + CLASS.chartArc)).each(function(d) {
      if (!$$.shouldExpand(d.data.id)) {
        return;
      }
      var expandDuration = $$.getExpandConfig(d.data.id, "duration");
      var svgArcExpandedSub = $$.getSvgArcExpanded($$.getExpandConfig(d.data.id, "rate"));
      select(this).selectAll("path").transition().duration(expandDuration).attr("d", $$.svgArcExpanded).transition().duration(expandDuration * 2).attr("d", svgArcExpandedSub);
    });
  },
  unexpandArc: function(targetIds) {
    var $$ = this;
    var transiting = $$.state.transiting, svg = $$.$el.svg;
    if (transiting) {
      return;
    }
    var newTargetIds = $$.mapToTargetIds(targetIds);
    svg.selectAll($$.selectorTargets(newTargetIds, "." + CLASS.chartArc)).selectAll("path").transition().duration(function(d) {
      return $$.getExpandConfig(d.data.id, "duration");
    }).attr("d", $$.svgArc);
    svg.selectAll("" + CLASS.arc).style("opacity", null);
  },
  getExpandConfig: function(id2, key) {
    var $$ = this;
    var config = $$.config;
    var def = {
      duration: 50,
      rate: 0.98
    };
    var type2;
    if ($$.isDonutType(id2)) {
      type2 = "donut";
    } else if ($$.isGaugeType(id2)) {
      type2 = "gauge";
    } else if ($$.isPieType(id2)) {
      type2 = "pie";
    }
    return type2 ? config[type2 + "_expand_" + key] : def[key];
  },
  shouldExpand: function(id2) {
    var $$ = this;
    var config = $$.config;
    return $$.isDonutType(id2) && config.donut_expand || $$.isGaugeType(id2) && config.gauge_expand || $$.isPieType(id2) && config.pie_expand;
  },
  shouldShowArcLabel: function() {
    var $$ = this;
    var config = $$.config;
    return ["pie", "donut", "gauge"].some(function(v) {
      return $$.hasType(v) && config[v + "_label_show"];
    });
  },
  getArcLabelFormat: function() {
    var $$ = this;
    var config = $$.config;
    var format2 = config.pie_label_format;
    if ($$.hasType("gauge")) {
      format2 = config.gauge_label_format;
    } else if ($$.hasType("donut")) {
      format2 = config.donut_label_format;
    }
    return isFunction(format2) ? format2.bind($$.api) : format2;
  },
  getArcTitle: function() {
    var $$ = this;
    var type2 = $$.hasType("donut") && "donut" || $$.hasType("gauge") && "gauge";
    return type2 ? $$.config[type2 + "_title"] : "";
  },
  updateTargetsForArc: function(targets) {
    var $$ = this;
    var $el = $$.$el;
    var hasGauge = $$.hasType("gauge");
    var classChartArc = $$.getChartClass("Arc");
    var classArcs = $$.getClass("arcs", true);
    var classFocus = $$.classFocus.bind($$);
    var chartArcs = $el.main.select("." + CLASS.chartArcs);
    var mainPieUpdate = chartArcs.selectAll("." + CLASS.chartArc).data($$.pie(targets)).attr("class", function(d) {
      return classChartArc(d) + classFocus(d.data);
    });
    var mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc);
    mainPieEnter.append("g").attr("class", classArcs).merge(mainPieUpdate);
    mainPieEnter.append("text").attr("dy", hasGauge && !$$.hasMultiTargets() ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", "middle").style("pointer-events", "none");
    $el.text = chartArcs.selectAll("." + CLASS.target + " text");
  },
  initArc: function() {
    var $$ = this;
    var $el = $$.$el;
    $el.arcs = $el.main.select("." + CLASS.chart).append("g").attr("class", CLASS.chartArcs).attr("transform", $$.getTranslate("arc"));
    $$.setArcTitle();
  },
  setArcTitle: function() {
    var $$ = this;
    var title2 = $$.getArcTitle();
    var hasGauge = $$.hasType("gauge");
    if (title2) {
      var text2 = $$.$el.arcs.append("text").attr("class", CLASS[hasGauge ? "chartArcsGaugeTitle" : "chartArcsTitle"]).style("text-anchor", "middle");
      if (hasGauge) {
        text2.attr("dy", "-0.3em").style("font-size", "27px");
      }
      setTextValue(text2, title2, hasGauge ? void 0 : [-0.6, 1.35], true);
    }
  },
  redrawArc: function(duration, durationForExit, withTransform) {
    var $$ = this;
    var config = $$.config, state = $$.state, main2 = $$.$el.main;
    var hasInteraction = config.interaction_enabled;
    var isSelectable = hasInteraction && config.data_selection_isselectable;
    var mainArc = main2.selectAll("." + CLASS.arcs).selectAll("." + CLASS.arc).data($$.arcData.bind($$));
    mainArc.exit().transition().duration(durationForExit).style("opacity", "0").remove();
    mainArc = mainArc.enter().append("path").attr("class", $$.getClass("arc", true)).style("fill", function(d) {
      return $$.color(d.data);
    }).style("cursor", function(d) {
      return isSelectable && isSelectable.bind($$.api)(d) ? "pointer" : null;
    }).style("opacity", "0").each(function(d) {
      if ($$.isGaugeType(d.data)) {
        d.startAngle = config.gauge_startingAngle;
        d.endAngle = config.gauge_startingAngle;
      }
      this._current = d;
    }).merge(mainArc);
    if ($$.hasType("gauge")) {
      $$.updateGaugeMax();
      $$.hasMultiArcGauge() && $$.redrawMultiArcGauge();
    }
    mainArc.attr("transform", function(d) {
      return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
    }).style("opacity", function(d) {
      return d === this._current ? "0" : null;
    }).each(function() {
      state.transiting = true;
    }).transition().duration(duration).attrTween("d", function(d) {
      var updated = $$.updateAngle(d);
      if (!updated) {
        return function() {
          return "M 0 0";
        };
      }
      if (isNaN(this._current.startAngle)) {
        this._current.startAngle = 0;
      }
      if (isNaN(this._current.endAngle)) {
        this._current.endAngle = this._current.startAngle;
      }
      var interpolate$1$1 = interpolate$1(this._current, updated);
      this._current = interpolate$1$1(0);
      return function(t) {
        var interpolated = interpolate$1$1(t);
        interpolated.data = d.data;
        return $$.getArc(interpolated, true);
      };
    }).attr("transform", withTransform ? "scale(1)" : "").style("fill", function(d) {
      var color2;
      if ($$.levelColor) {
        color2 = $$.levelColor(d.data.values[0].value);
        config.data_colors[d.data.id] = color2;
      } else {
        color2 = $$.color(d.data);
      }
      return color2;
    }).style("opacity", null).call(endall, function() {
      if ($$.levelColor) {
        var path2 = select(this);
        var d = path2.datum();
        $$.updateLegendItemColor(d.data.id, path2.style("fill"));
      }
      state.transiting = false;
      callFn(config.onrendered, $$.api);
    });
    hasInteraction && $$.bindArcEvent(mainArc);
    $$.hasType("gauge") && $$.redrawBackgroundArcs();
    $$.redrawArcText(duration);
  },
  redrawBackgroundArcs: function() {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var hasMultiArcGauge = $$.hasMultiArcGauge();
    var isFullCircle = config.gauge_fullCircle;
    var startAngle = $$.getStartAngle();
    var endAngle = isFullCircle ? startAngle + $$.getArcLength() : startAngle * -1;
    var backgroundArc = $$.$el.arcs.select((hasMultiArcGauge ? "g" : "") + "." + CLASS.chartArcsBackground);
    if (hasMultiArcGauge) {
      var index_1 = 0;
      backgroundArc = backgroundArc.selectAll("path." + CLASS.chartArcsBackground).data($$.data.targets);
      backgroundArc.enter().append("path").attr("class", function(d, i) {
        return CLASS.chartArcsBackground + " " + CLASS.chartArcsBackground + "-" + i;
      }).merge(backgroundArc).style("fill", config.gauge_background || null).attr("d", function(_a) {
        var id2 = _a.id;
        if (state.hiddenTargetIds.indexOf(id2) >= 0) {
          return "M 0 0";
        }
        var d = {
          data: [{ value: config.gauge_max }],
          startAngle,
          endAngle,
          index: index_1++
        };
        return $$.getArc(d, true, true);
      });
      backgroundArc.exit().remove();
    } else {
      backgroundArc.attr("d", function() {
        var d = {
          data: [{ value: config.gauge_max }],
          startAngle,
          endAngle
        };
        return $$.getArc(d, true, true);
      });
    }
  },
  bindArcEvent: function(arc2) {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var isTouch = state.inputType === "touch";
    var isMouse = state.inputType === "mouse";
    function selectArc(_this, arcData, id2) {
      $$.expandArc(id2);
      $$.api.focus(id2);
      $$.toggleFocusLegend(id2, true);
      $$.showTooltip([arcData], _this);
    }
    function unselectArc(arcData) {
      var id2 = arcData && arcData.id || void 0;
      $$.unexpandArc(id2);
      $$.api.revert();
      $$.revertLegend();
      $$.hideTooltip();
    }
    arc2.on("click", function(event, d, i) {
      var updated = $$.updateAngle(d);
      var arcData;
      if (updated) {
        arcData = $$.convertToArcData(updated);
        $$.toggleShape && $$.toggleShape(this, arcData, i);
        config.data_onclick.bind($$.api)(arcData, this);
      }
    });
    if (isMouse) {
      arc2.on("mouseover", function(event, d) {
        if (state.transiting) {
          return;
        }
        state.event = event;
        var updated = $$.updateAngle(d);
        var arcData = updated ? $$.convertToArcData(updated) : null;
        var id2 = arcData && arcData.id || void 0;
        selectArc(this, arcData, id2);
        $$.setOverOut(true, arcData);
      }).on("mouseout", function(event, d) {
        if (state.transiting) {
          return;
        }
        state.event = event;
        var updated = $$.updateAngle(d);
        var arcData = updated ? $$.convertToArcData(updated) : null;
        unselectArc();
        $$.setOverOut(false, arcData);
      }).on("mousemove", function(event, d) {
        var updated = $$.updateAngle(d);
        var arcData = updated ? $$.convertToArcData(updated) : null;
        state.event = event;
        $$.showTooltip([arcData], this);
      });
    }
    if (isTouch && $$.hasArcType() && !$$.radars) {
      var getEventArc_1 = function(event) {
        var touch = event.changedTouches[0];
        var eventArc = select(doc.elementFromPoint(touch.clientX, touch.clientY));
        return eventArc;
      };
      $$.$el.svg.on("touchstart touchmove", function(event) {
        if (state.transiting) {
          return;
        }
        var eventArc = getEventArc_1(event);
        var datum2 = eventArc.datum();
        var updated = datum2 && datum2.data && datum2.data.id ? $$.updateAngle(datum2) : null;
        var arcData = updated ? $$.convertToArcData(updated) : null;
        var id2 = arcData && arcData.id || void 0;
        $$.callOverOutForTouch(arcData);
        isUndefined(id2) ? unselectArc() : selectArc(this, arcData, id2);
      });
    }
  },
  redrawArcText: function(duration) {
    var $$ = this;
    var config = $$.config, state = $$.state, _a = $$.$el, main2 = _a.main, arcs = _a.arcs;
    var hasGauge = $$.hasType("gauge");
    var hasMultiArcGauge = $$.hasMultiArcGauge();
    var text2;
    if (!(hasGauge && $$.data.targets.length === 1 && config.gauge_title)) {
      text2 = main2.selectAll("." + CLASS.chartArc).select("text").style("opacity", "0").attr("class", function(d) {
        return $$.isGaugeType(d.data) ? CLASS.gaugeValue : null;
      }).call($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style("font-size", function(d) {
        return $$.isGaugeType(d.data) && $$.data.targets.length === 1 && !hasMultiArcGauge ? Math.round(state.radius / 5) + "px" : null;
      }).transition().duration(duration).style("opacity", function(d) {
        return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? null : "0";
      });
      hasMultiArcGauge && text2.attr("dy", "-.1em");
    }
    main2.select("." + CLASS.chartArcsTitle).style("opacity", $$.hasType("donut") || hasGauge ? null : "0");
    if (hasGauge) {
      var isFullCircle = config.gauge_fullCircle;
      isFullCircle && text2 && text2.attr("dy", "" + (hasMultiArcGauge ? 0 : Math.round(state.radius / 14)));
      if (config.gauge_label_show) {
        arcs.select("." + CLASS.chartArcsGaugeUnit).attr("dy", (isFullCircle ? 1.5 : 0.75) + "em").text(config.gauge_units);
        arcs.select("." + CLASS.chartArcsGaugeMin).attr("dx", -1 * (state.innerRadius + (state.radius - state.innerRadius) / (isFullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_min, false));
        !isFullCircle && arcs.select("." + CLASS.chartArcsGaugeMax).attr("dx", state.innerRadius + (state.radius - state.innerRadius) / 2 + "px").attr("dy", "1.2em").text($$.textForGaugeMinMax(config.gauge_max, true));
      }
    }
  }
};
var shapeArea = {
  initArea: function(mainLine) {
    var $$ = this;
    var config = $$.config;
    mainLine.insert("g", "." + CLASS[config.area_front ? "circles" : "lines"]).attr("class", $$.getClass("areas", true));
  },
  updateAreaGradient: function() {
    var $$ = this;
    var config = $$.config, datetimeId = $$.state.datetimeId, defs = $$.$el.defs;
    $$.data.targets.forEach(function(d) {
      var id2 = datetimeId + "-areaGradient" + $$.getTargetSelectorSuffix(d.id);
      if ($$.isAreaType(d) && defs.select("#" + id2).empty()) {
        var color_1 = $$.color(d);
        var _a = config.area_linearGradient, _b = _a.x, x2 = _b === void 0 ? [0, 0] : _b, _c = _a.y, y3 = _c === void 0 ? [0, 1] : _c, _d = _a.stops, stops = _d === void 0 ? [[0, color_1, 1], [1, color_1, 0]] : _d;
        var linearGradient_1 = defs.append("linearGradient").attr("id", "" + id2).attr("x1", x2[0]).attr("x2", x2[1]).attr("y1", y3[0]).attr("y2", y3[1]);
        stops.forEach(function(v) {
          var stopColor = isFunction(v[1]) ? v[1].bind($$.api)(d.id) : v[1];
          linearGradient_1.append("stop").attr("offset", v[0]).attr("stop-color", stopColor || color_1).attr("stop-opacity", v[2]);
        });
      }
    });
  },
  updateAreaColor: function(d) {
    var $$ = this;
    return $$.config.area_linearGradient ? "url(#" + $$.state.datetimeId + "-areaGradient" + $$.getTargetSelectorSuffix(d.id) + ")" : $$.color(d);
  },
  updateArea: function(durationForExit, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var $root = isSub ? $el.subchart : $el;
    config.area_linearGradient && $$.updateAreaGradient();
    var area2 = $root.main.selectAll("." + CLASS.areas).selectAll("." + CLASS.area).data($$.lineData.bind($$));
    area2.exit().transition().duration(durationForExit).style("opacity", "0").remove();
    $root.area = area2.enter().append("path").attr("class", $$.getClass("area", true)).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function() {
      state.orgAreaOpacity = select(this).style("opacity");
      return "0";
    }).merge(area2);
    area2.style("opacity", state.orgAreaOpacity);
  },
  redrawArea: function(drawFn, withTransition, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var area2 = (isSub ? this.$el.subchart : this.$el).area;
    var orgAreaOpacity = $$.state.orgAreaOpacity;
    return [
      (withTransition ? area2.transition(getRandom()) : area2).attr("d", drawFn).style("fill", $$.updateAreaColor.bind($$)).style("opacity", function(d) {
        return String($$.isAreaRangeType(d) ? orgAreaOpacity / 1.75 : orgAreaOpacity);
      })
    ];
  },
  generateDrawArea: function(areaIndices, isSub) {
    var $$ = this;
    var config = $$.config;
    var lineConnectNull = config.line_connectNull;
    var isRotated = config.axis_rotated;
    var getPoints = $$.generateGetAreaPoints(areaIndices, isSub);
    var yScale = $$.getYScaleById.bind($$);
    var xValue = function(d) {
      return (isSub ? $$.subxx : $$.xx).call($$, d);
    };
    var value0 = function(d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScale(d.id, isSub)($$.isAreaRangeType(d) ? $$.getRangedData(d, "high") : $$.getShapeYMin(d.id));
    };
    var value1 = function(d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[1][1] : yScale(d.id, isSub)($$.isAreaRangeType(d) ? $$.getRangedData(d, "low") : d.value);
    };
    return function(d) {
      var values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values;
      var x0 = 0;
      var y0 = 0;
      var path2;
      if ($$.isAreaType(d)) {
        var area2 = area$1();
        area2 = isRotated ? area2.y(xValue).x0(value0).x1(value1) : area2.x(xValue).y0(config.area_above ? 0 : value0).y1(value1);
        if (!lineConnectNull) {
          area2 = area2.defined(function(d2) {
            return $$.getBaseValue(d2) !== null;
          });
        }
        if ($$.isStepType(d)) {
          values = $$.convertValuesToStep(values);
        }
        path2 = area2.curve($$.getCurve(d))(values);
      } else {
        if (values[0]) {
          x0 = $$.scale.x(values[0].x);
          y0 = $$.getYScaleById(d.id)(values[0].value);
        }
        path2 = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
      }
      return path2 || "M 0 0";
    };
  },
  generateGetAreaPoints: function(areaIndices, isSub) {
    var $$ = this;
    var config = $$.config;
    var x2 = $$.getShapeX(0, areaIndices, isSub);
    var y3 = $$.getShapeY(!!isSub);
    var areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, isSub);
    var yScale = $$.getYScaleById.bind($$);
    return function(d, i) {
      var y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id));
      var offset = areaOffset(d, i) || y0;
      var posX = x2(d);
      var posY = y3(d);
      if (config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY)) {
        posY = y0;
      }
      return [
        [posX, offset],
        [posX, posY - (y0 - offset)],
        [posX, posY - (y0 - offset)],
        [posX, offset]
      ];
    };
  }
};
var shapeBar = {
  initBar: function() {
    var $el = this.$el;
    $el.bar = $el.main.select("." + CLASS.chart).insert("g", ":first-child").attr("class", CLASS.chartBars);
  },
  updateTargetsForBar: function(targets) {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    var classChartBar = $$.getChartClass("Bar");
    var classBars = $$.getClass("bars", true);
    var classFocus = $$.classFocus.bind($$);
    var isSelectable = config.interaction_enabled && config.data_selection_isselectable;
    if (!$el.bar) {
      $$.initBar();
    }
    var mainBarUpdate = $$.$el.main.select("." + CLASS.chartBars).selectAll("." + CLASS.chartBar).data(targets.filter(function(v) {
      return !v.values.every(function(d) {
        return !isNumber(d.value);
      });
    })).attr("class", function(d) {
      return classChartBar(d) + classFocus(d);
    });
    var mainBarEnter = mainBarUpdate.enter().append("g").attr("class", classChartBar).style("opacity", "0").style("pointer-events", "none");
    mainBarEnter.append("g").attr("class", classBars).style("cursor", function(d) {
      return isSelectable && isSelectable.bind($$.api)(d) ? "pointer" : null;
    });
  },
  updateBar: function(durationForExit, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var $root = isSub ? $$.$el.subchart : $$.$el;
    var classBar = $$.getClass("bar", true);
    var initialOpacity = $$.initialOpacity.bind($$);
    var bar2 = $root.main.selectAll("." + CLASS.bars).selectAll("." + CLASS.bar).data($$.labelishData.bind($$));
    bar2.exit().transition().duration(durationForExit).style("opacity", "0").remove();
    $root.bar = bar2.enter().append("path").attr("class", classBar).style("fill", $$.color).merge(bar2).style("opacity", initialOpacity);
  },
  redrawBar: function(drawFn, withTransition, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var bar2 = (isSub ? this.$el.subchart : this.$el).bar;
    return [
      (withTransition ? bar2.transition(getRandom()) : bar2).attr("d", function(d) {
        return d.value && drawFn(d);
      }).style("fill", this.color).style("opacity", null)
    ];
  },
  generateDrawBar: function(barIndices, isSub) {
    var $$ = this;
    var config = $$.config;
    var getPoints = $$.generateGetBarPoints(barIndices, isSub);
    var isRotated = config.axis_rotated;
    var isGrouped = config.data_groups.length;
    var barRadius = config.bar_radius;
    var barRadiusRatio = config.bar_radius_ratio;
    var getRadius = isNumber(barRadius) && barRadius > 0 ? function() {
      return barRadius;
    } : isNumber(barRadiusRatio) ? function(w) {
      return w * barRadiusRatio;
    } : null;
    return function(d, i) {
      var points = getPoints(d, i);
      var indexX = +isRotated;
      var indexY = +!indexX;
      var isNegative = d.value < 0;
      var pathRadius = ["", ""];
      var radius = 0;
      if (getRadius && !isGrouped) {
        var index = isRotated ? indexY : indexX;
        var barW = points[2][index] - points[0][index];
        radius = getRadius(barW);
        var arc2 = "a" + radius + "," + radius + " " + (isNegative ? "1 0 0" : "0 0 1") + " ";
        pathRadius[+!isRotated] = "" + arc2 + radius + "," + radius;
        pathRadius[+isRotated] = "" + arc2 + [-radius, radius][isRotated ? "sort" : "reverse"]();
        isNegative && pathRadius.reverse();
      }
      var path2 = isRotated ? "H" + (points[1][indexX] - radius) + " " + pathRadius[0] + "V" + (points[2][indexY] - radius) + " " + pathRadius[1] + "H" + points[3][indexX] : "V" + (points[1][indexY] + (isNegative ? -radius : radius)) + " " + pathRadius[0] + "H" + (points[2][indexX] - radius) + " " + pathRadius[1] + "V" + points[3][indexY];
      return "M" + points[0][indexX] + "," + points[0][indexY] + path2 + "z";
    };
  },
  generateGetBarPoints: function(barIndices, isSub) {
    var $$ = this;
    var config = $$.config;
    var axis2 = isSub ? $$.axis.subX : $$.axis.x;
    var barTargetsNum = $$.getIndicesMax(barIndices) + 1;
    var barW = $$.getBarW("bar", axis2, barTargetsNum);
    var barX = $$.getShapeX(barW, barIndices, !!isSub);
    var barY = $$.getShapeY(!!isSub);
    var barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub);
    var yScale = $$.getYScaleById.bind($$);
    return function(d, i) {
      var y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id));
      var offset = barOffset(d, i) || y0;
      var width = isNumber(barW) ? barW : barW[d.id] || barW._$width;
      var posX = barX(d);
      var posY = barY(d);
      if (config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY)) {
        posY = y0;
      }
      posY -= y0 - offset;
      var startPosX = posX + width;
      return [
        [posX, offset],
        [posX, posY],
        [startPosX, posY],
        [startPosX, offset]
      ];
    };
  },
  isWithinBar: function(that) {
    var mouse = getPointer(this.state.event, that);
    var list = getRectSegList(that);
    var seg0 = list[0], seg1 = list[1];
    var x2 = Math.min(seg0.x, seg1.x);
    var y3 = Math.min(seg0.y, seg1.y);
    var offset = this.config.bar_sensitivity;
    var _a = that.getBBox(), width = _a.width, height = _a.height;
    var sx = x2 - offset;
    var ex = x2 + width + offset;
    var sy = y3 + height + offset;
    var ey = y3 - offset;
    var isWithin = sx < mouse[0] && mouse[0] < ex && ey < mouse[1] && mouse[1] < sy;
    return isWithin;
  }
};
var shapeGauge = {
  initGauge: function() {
    var $$ = this;
    var config = $$.config, arcs = $$.$el.arcs;
    var appendText = function(className) {
      arcs.append("text").attr("class", className).style("text-anchor", "middle").style("pointer-events", "none");
    };
    if ($$.hasType("gauge")) {
      var hasMulti = $$.hasMultiArcGauge();
      arcs.append(hasMulti ? "g" : "path").attr("class", CLASS.chartArcsBackground).style("fill", !hasMulti && config.gauge_background || null);
      config.gauge_units && appendText(CLASS.chartArcsGaugeUnit);
      if (config.gauge_label_show) {
        appendText(CLASS.chartArcsGaugeMin);
        !config.gauge_fullCircle && appendText(CLASS.chartArcsGaugeMax);
      }
    }
  },
  updateGaugeMax: function() {
    var $$ = this;
    var config = $$.config, state = $$.state;
    var hasMultiGauge = $$.hasMultiArcGauge();
    var max2 = hasMultiGauge ? $$.getMinMaxData().max[0].value : $$.getTotalDataSum(state.rendered);
    if (max2 + config.gauge_min * (config.gauge_min > 0 ? -1 : 1) > config.gauge_max) {
      config.gauge_max = max2 - config.gauge_min;
    }
  },
  redrawMultiArcGauge: function() {
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var hiddenTargetIds = $$.state.hiddenTargetIds;
    var arcLabelLines = $el.main.selectAll("." + CLASS.arcs).selectAll("." + CLASS.arcLabelLine).data($$.arcData.bind($$));
    var mainArcLabelLine = arcLabelLines.enter().append("rect").attr("class", function(d) {
      return CLASS.arcLabelLine + " " + CLASS.target + " " + CLASS.target + "-" + d.data.id;
    }).merge(arcLabelLines);
    mainArcLabelLine.style("fill", function(d) {
      return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data);
    }).style("display", config.gauge_label_show ? null : "none").each(function(d) {
      var lineLength = 0;
      var lineThickness = 2;
      var x2 = 0;
      var y3 = 0;
      var transform2 = "";
      if (hiddenTargetIds.indexOf(d.data.id) < 0) {
        var updated = $$.updateAngle(d);
        var innerLineLength = state.gaugeArcWidth / $$.filterTargetsToShow($$.data.targets).length * (updated.index + 1);
        var lineAngle = updated.endAngle - Math.PI / 2;
        var arcInnerRadius2 = state.radius - innerLineLength;
        var linePositioningAngle = lineAngle - (arcInnerRadius2 === 0 ? 0 : 1 / arcInnerRadius2);
        lineLength = state.radiusExpanded - state.radius + innerLineLength;
        x2 = Math.cos(linePositioningAngle) * arcInnerRadius2;
        y3 = Math.sin(linePositioningAngle) * arcInnerRadius2;
        transform2 = "rotate(" + lineAngle * 180 / Math.PI + ", " + x2 + ", " + y3 + ")";
      }
      select(this).attr("x", x2).attr("y", y3).attr("width", lineLength).attr("height", lineThickness).attr("transform", transform2).style("stroke-dasharray", "0, " + (lineLength + lineThickness) + ", 0");
    });
  },
  textForGaugeMinMax: function(value, isMax) {
    var $$ = this;
    var config = $$.config;
    var format2 = config.gauge_label_extents;
    return isFunction(format2) ? format2.bind($$.api)(value, isMax) : value;
  },
  getGaugeLabelHeight: function() {
    var config = this.config;
    return this.config.gauge_label_show && !config.gauge_fullCircle ? 20 : 0;
  },
  getPaddingBottomForGauge: function() {
    var $$ = this;
    return $$.getGaugeLabelHeight() * ($$.config.gauge_label_show ? 2 : 2.5);
  }
};
var shapeBubble = {
  initBubble: function() {
    var $$ = this;
    var config = $$.config;
    if ($$.hasType("bubble")) {
      config.point_show = true;
      config.point_type = "circle";
      config.point_sensitivity = 25;
    }
  },
  getBaseLength: function() {
    var $$ = this;
    var _a = $$.state, width = _a.width, height = _a.height;
    var cacheKey2 = KEY.bubbleBaseLength;
    var baseLength = $$.cache.get(cacheKey2);
    if (!baseLength) {
      $$.cache.add(cacheKey2, baseLength = getMinMax$1("min", [width, height]));
    }
    return baseLength;
  },
  getBubbleR: function(d) {
    var $$ = this;
    var maxR = $$.config.bubble_maxR;
    if (isFunction(maxR)) {
      maxR = maxR.bind($$.api)(d);
    } else if (!isNumber(maxR)) {
      maxR = $$.getBaseLength() / ($$.getMaxDataCount() * 2) + 12;
    }
    var max2 = getMinMax$1("max", $$.getMinMaxData().max.map(function(d2) {
      return $$.isBubbleZType(d2) ? $$.getBubbleZData(d2.value, "y") : isObject(d2.value) ? d2.value.mid : d2.value;
    }));
    var maxArea = maxR * maxR * Math.PI;
    var area2 = ($$.isBubbleZType(d) ? $$.getBubbleZData(d.value, "z") : d.value) * (maxArea / max2);
    return Math.sqrt(area2 / Math.PI);
  },
  getBubbleZData: function(d, type2) {
    return isObject(d) ? d[type2] : d[type2 === "y" ? 0 : 1];
  }
};
var shapeLine = {
  initLine: function() {
    var $el = this.$el;
    $el.line = $el.main.select("." + CLASS.chart).append("g").attr("class", CLASS.chartLines);
  },
  updateTargetsForLine: function(t) {
    var $$ = this;
    var _a = $$.$el, area2 = _a.area, line2 = _a.line, main2 = _a.main;
    var classChartLine = $$.getChartClass("Line");
    var classLines = $$.getClass("lines", true);
    var classFocus = $$.classFocus.bind($$);
    if (!line2) {
      $$.initLine();
    }
    var targets = t.filter(function(d) {
      return !($$.isScatterType(d) || $$.isBubbleType(d));
    });
    var mainLineUpdate = main2.select("." + CLASS.chartLines).selectAll("." + CLASS.chartLine).data(targets).attr("class", function(d) {
      return classChartLine(d) + classFocus(d);
    });
    var mainLineEnter = mainLineUpdate.enter().append("g").attr("class", classChartLine).style("opacity", "0").style("pointer-events", "none");
    mainLineEnter.append("g").attr("class", classLines);
    if ($$.hasTypeOf("Area")) {
      $$.initArea(!area2 && mainLineEnter.empty() ? mainLineUpdate : mainLineEnter);
    }
    $$.updateTargetForCircle(targets, mainLineEnter);
  },
  updateLine: function(durationForExit, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var extraLineClasses = $$.format.extraLineClasses, $el = $$.$el;
    var $root = isSub ? $el.subchart : $el;
    var line2 = $root.main.selectAll("." + CLASS.lines).selectAll("." + CLASS.line).data($$.lineData.bind($$));
    line2.exit().transition().duration(durationForExit).style("opacity", "0").remove();
    $root.line = line2.enter().append("path").attr("class", function(d) {
      return $$.getClass("line", true)(d) + " " + (extraLineClasses(d) || "");
    }).style("stroke", $$.color).merge(line2).style("opacity", $$.initialOpacity.bind($$)).style("shape-rendering", function(d) {
      return $$.isStepType(d) ? "crispEdges" : "";
    }).attr("transform", null);
  },
  redrawLine: function(drawFn, withTransition, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var line2 = (isSub ? this.$el.subchart : this.$el).line;
    return [
      (withTransition ? line2.transition(getRandom()) : line2).attr("d", drawFn).style("stroke", this.color).style("opacity", null)
    ];
  },
  getCurve: function(d) {
    var $$ = this;
    var isRotatedStepType = $$.config.axis_rotated && $$.isStepType(d);
    return isRotatedStepType ? function(context) {
      var step2 = $$.getInterpolate(d)(context);
      step2.orgPoint = step2.point;
      step2.pointRotated = function(x2, y3) {
        this._point === 1 && (this._point = 2);
        var y1 = this._y * (1 - this._t) + y3 * this._t;
        this._context.lineTo(this._x, y1);
        this._context.lineTo(x2, y1);
        this._x = x2;
        this._y = y3;
      };
      step2.point = function(x2, y3) {
        this._point === 0 ? this.orgPoint(x2, y3) : this.pointRotated(x2, y3);
      };
      return step2;
    } : $$.getInterpolate(d);
  },
  generateDrawLine: function(lineIndices, isSub) {
    var $$ = this;
    var config = $$.config, scale2 = $$.scale;
    var lineConnectNull = config.line_connectNull;
    var isRotated = config.axis_rotated;
    var getPoints = $$.generateGetLinePoints(lineIndices, isSub);
    var yScale = $$.getYScaleById.bind($$);
    var xValue = function(d) {
      return (isSub ? $$.subxx : $$.xx).call($$, d);
    };
    var yValue = function(d, i) {
      return $$.isGrouped(d.id) ? getPoints(d, i)[0][1] : yScale(d.id, isSub)($$.getBaseValue(d));
    };
    var line2 = line$1();
    line2 = isRotated ? line2.x(yValue).y(xValue) : line2.x(xValue).y(yValue);
    if (!lineConnectNull) {
      line2 = line2.defined(function(d) {
        return $$.getBaseValue(d) !== null;
      });
    }
    var x2 = isSub ? scale2.subX : scale2.x;
    return function(d) {
      var y3 = yScale(d.id, isSub);
      var values = lineConnectNull ? $$.filterRemoveNull(d.values) : d.values;
      var x0 = 0;
      var y0 = 0;
      var path2;
      if ($$.isLineType(d)) {
        var regions2 = config.data_regions[d.id];
        if (regions2) {
          path2 = $$.lineWithRegions(values, scale2.zoom || x2, y3, regions2);
        } else {
          if ($$.isStepType(d)) {
            values = $$.convertValuesToStep(values);
          }
          path2 = line2.curve($$.getCurve(d))(values);
        }
      } else {
        if (values[0]) {
          x0 = x2(values[0].x);
          y0 = y3(values[0].value);
        }
        path2 = isRotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0;
      }
      return path2 || "M 0 0";
    };
  },
  lineWithRegions: function(d, x2, y3, _regions) {
    var $$ = this;
    var config = $$.config;
    var isRotated = config.axis_rotated;
    var isTimeSeries = $$.axis.isTimeSeries();
    var xOffset = $$.axis.isCategorized() ? 0.5 : 0;
    var regions2 = [];
    var dasharray = "2 2";
    var xp;
    var yp;
    var diff;
    var diffx2;
    var isWithinRegions = function(withinX, withinRegions) {
      for (var i2 = 0, reg2 = void 0; reg2 = withinRegions[i2]; i2++) {
        if (reg2.start < withinX && withinX <= reg2.end) {
          return reg2.style;
        }
      }
      return false;
    };
    if (isDefined(_regions)) {
      var getValue = function(v, def) {
        return isUndefined(v) ? def : isTimeSeries ? parseDate.call($$, v) : v;
      };
      for (var i = 0, reg = void 0; reg = _regions[i]; i++) {
        var start2 = getValue(reg.start, d[0].x);
        var end = getValue(reg.end, d[d.length - 1].x);
        var style = reg.style || { dasharray };
        regions2[i] = { start: start2, end, style };
      }
    }
    var xValue = isRotated ? function(dt) {
      return y3(dt.value);
    } : function(dt) {
      return x2(dt.x);
    };
    var yValue = isRotated ? function(dt) {
      return x2(dt.x);
    } : function(dt) {
      return y3(dt.value);
    };
    var generateM = function(points) {
      return "M" + points[0][0] + "," + points[0][1] + "L" + points[1][0] + "," + points[1][1];
    };
    var sWithRegion = isTimeSeries ? function(d0, d1, k, timeseriesDiff) {
      var x0 = d0.x.getTime();
      var xDiff = d1.x - d0.x;
      var xv0 = new Date(x0 + xDiff * k);
      var xv1 = new Date(x0 + xDiff * (k + timeseriesDiff));
      var points = isRotated ? [[y3(yp(k)), x2(xv0)], [y3(yp(k + diff)), x2(xv1)]] : [[x2(xv0), y3(yp(k))], [x2(xv1), y3(yp(k + diff))]];
      return generateM(points);
    } : function(d0, d1, k, otherDiff) {
      var points = isRotated ? [[y3(yp(k), true), x2(xp(k))], [y3(yp(k + otherDiff), true), x2(xp(k + otherDiff))]] : [[x2(xp(k), true), y3(yp(k))], [x2(xp(k + otherDiff), true), y3(yp(k + otherDiff))]];
      return generateM(points);
    };
    var axisType = { x: $$.axis.getAxisType("x"), y: $$.axis.getAxisType("y") };
    var path2 = "";
    for (var i = 0, data2 = void 0; data2 = d[i]; i++) {
      var prevData = d[i - 1];
      var hasPrevData = prevData && isValue(prevData.value);
      var style = isWithinRegions(data2.x, regions2);
      if (!isValue(data2.value)) {
        continue;
      }
      if (isUndefined(regions2) || !style || !hasPrevData) {
        path2 += "" + (i && hasPrevData ? "L" : "M") + xValue(data2) + "," + yValue(data2);
      } else if (hasPrevData) {
        try {
          style = style.dasharray.split(" ");
        } catch (e) {
          style = dasharray.split(" ");
        }
        xp = getScale(axisType.x, prevData.x + xOffset, data2.x + xOffset);
        yp = getScale(axisType.y, prevData.value, data2.value);
        var dx = x2(data2.x) - x2(prevData.x);
        var dy = y3(data2.value) - y3(prevData.value);
        var dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        diff = style[0] / dd;
        diffx2 = diff * style[1];
        for (var j = diff; j <= 1; j += diffx2) {
          path2 += sWithRegion(prevData, data2, j, diff);
          if (j + diffx2 >= 1) {
            path2 += sWithRegion(prevData, data2, 1, 0);
          }
        }
      }
    }
    return path2;
  },
  isWithinStep: function(that, y3) {
    return Math.abs(y3 - getPointer(this.state.event, that)[1]) < 30;
  },
  shouldDrawPointsForLine: function(d) {
    var linePoint = this.config.line_point;
    return linePoint === true || isArray(linePoint) && linePoint.indexOf(d.id) !== -1;
  }
};
var getTransitionName = function() {
  return getRandom();
};
var shapePoint = {
  hasValidPointType: function(type2) {
    return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(type2 || this.config.point_type);
  },
  hasValidPointDrawMethods: function(type2) {
    var pointType = type2 || this.config.point_type;
    return isObjectType(pointType) && isFunction(pointType.create) && isFunction(pointType.update);
  },
  initialOpacityForCircle: function(d) {
    var _a = this, config = _a.config, withoutFadeIn = _a.state.withoutFadeIn;
    var opacity = config.point_opacity;
    if (isUndefined(opacity)) {
      opacity = this.getBaseValue(d) !== null && withoutFadeIn[d.id] ? this.opacityForCircle(d) : "0";
    }
    return opacity;
  },
  opacityForCircle: function(d) {
    var config = this.config;
    var opacity = config.point_opacity;
    if (isUndefined(opacity)) {
      opacity = config.point_show && !config.point_focus_only ? null : "0";
      opacity = isValue(this.getBaseValue(d)) ? this.isBubbleType(d) || this.isScatterType(d) ? "0.5" : opacity : "0";
    }
    return opacity;
  },
  initCircle: function() {
    var $$ = this;
    var main2 = $$.$el.main;
    $$.point = $$.generatePoint();
    if (($$.hasType("bubble") || $$.hasType("scatter")) && main2.select("." + CLASS.chartCircles).empty()) {
      main2.select("." + CLASS.chart).append("g").attr("class", CLASS.chartCircles);
    }
  },
  updateTargetForCircle: function(targetsValue, enterNodeValue) {
    var _this = this;
    var $$ = this;
    var config = $$.config, data2 = $$.data, $el = $$.$el;
    var selectionEnabled = config.interaction_enabled && config.data_selection_enabled;
    var isSelectable = selectionEnabled && config.data_selection_isselectable;
    var classCircles = $$.getClass("circles", true);
    if (!config.point_show) {
      return;
    }
    !$el.circle && $$.initCircle();
    var targets = targetsValue;
    var enterNode = enterNodeValue;
    if (!targets) {
      targets = data2.targets.filter(function(d) {
        return _this.isScatterType(d) || _this.isBubbleType(d);
      });
      var mainCircle = $el.main.select("." + CLASS.chartCircles).style("pointer-events", "none").selectAll("." + CLASS.circles).data(targets).attr("class", classCircles);
      mainCircle.exit().remove();
      enterNode = mainCircle.enter();
    }
    selectionEnabled && enterNode.append("g").attr("class", function(d) {
      return $$.generateClass(CLASS.selectedCircles, d.id);
    });
    enterNode.append("g").attr("class", classCircles).style("cursor", function(d) {
      return isSelectable && isSelectable(d) ? "pointer" : null;
    });
    selectionEnabled && targets.forEach(function(t) {
      $el.main.selectAll("." + CLASS.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll("" + CLASS.selectedCircle).each(function(d) {
        d.value = t.values[d.index].value;
      });
    });
  },
  updateCircle: function(isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var config = $$.config, state = $$.state, $el = $$.$el;
    var focusOnly = config.point_focus_only;
    var $root = isSub ? $el.subchart : $el;
    if (config.point_show && !state.toggling) {
      var circles = $root.main.selectAll("." + CLASS.circles).selectAll("." + CLASS.circle).data(function(d) {
        return $$.isLineType(d) && $$.shouldDrawPointsForLine(d) || $$.isBubbleType(d) || $$.isRadarType(d) || $$.isScatterType(d) ? focusOnly ? [d.values[0]] : d.values : [];
      });
      circles.exit().remove();
      circles.enter().filter(Boolean).append($$.point("create", this, $$.pointR.bind($$), $$.color));
      $root.circle = $root.main.selectAll("." + CLASS.circles + " ." + CLASS.circle).style("stroke", $$.color).style("opacity", $$.initialOpacityForCircle.bind($$));
    }
  },
  redrawCircle: function(cx, cy, withTransition, flow2, isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var rendered = $$.state.rendered, $el = $$.$el;
    var $root = isSub ? $el.subchart : $el;
    var selectedCircles = $root.main.selectAll("." + CLASS.selectedCircle);
    if (!$$.config.point_show) {
      return [];
    }
    var fn = $$.point("update", $$, cx, cy, $$.color, withTransition, flow2, selectedCircles);
    var posAttr = $$.isCirclePoint() ? "c" : "";
    var t = getRandom();
    var opacityStyleFn = $$.opacityForCircle.bind($$);
    var mainCircles = [];
    $root.circle.each(function(d) {
      var result = fn.bind(this)(d);
      result = (withTransition || !rendered ? result.transition(t) : result).style("opacity", opacityStyleFn);
      mainCircles.push(result);
    });
    return [
      mainCircles,
      (withTransition ? selectedCircles.transition() : selectedCircles).attr(posAttr + "x", cx).attr(posAttr + "y", cy)
    ];
  },
  showCircleFocus: function(d) {
    var $$ = this;
    var config = $$.config, _a = $$.state, hasRadar = _a.hasRadar, resizing = _a.resizing, toggling = _a.toggling, transiting = _a.transiting, $el = $$.$el;
    var circle = $el.circle;
    if (transiting === false && config.point_focus_only && circle) {
      var cx = (hasRadar ? $$.radarCircleX : $$.circleX).bind($$);
      var cy = (hasRadar ? $$.radarCircleY : $$.circleY).bind($$);
      var withTransition = toggling || isUndefined(d);
      var fn_1 = $$.point("update", $$, cx, cy, $$.color, resizing ? false : withTransition);
      if (d) {
        circle = circle.filter(function(t) {
          var data2 = d.filter(function(v) {
            return v.id === t.id;
          });
          return data2.length ? select(this).datum(data2[0]) : false;
        });
      }
      circle.attr("class", this.updatePointClass.bind(this)).style("opacity", null).each(function(d2) {
        var id2 = d2.id, index = d2.index, value = d2.value;
        var visibility = "hidden";
        if (isValue(value)) {
          fn_1.bind(this)(d2);
          $$.expandCircles(index, id2);
          visibility = "";
        }
        this.style.visibility = visibility;
      });
    }
  },
  hideCircleFocus: function() {
    var $$ = this;
    var config = $$.config, circle = $$.$el.circle;
    if (config.point_focus_only && circle) {
      $$.unexpandCircles();
      circle.style("visibility", "hidden");
    }
  },
  circleX: function(d) {
    return this.xx(d);
  },
  updateCircleY: function(isSub) {
    if (isSub === void 0) {
      isSub = false;
    }
    var $$ = this;
    var getPoints = $$.generateGetLinePoints($$.getShapeIndices($$.isLineType), isSub);
    return function(d, i) {
      var id2 = d.id;
      return $$.isGrouped(id2) ? getPoints(d, i)[0][1] : $$.getYScaleById(id2, isSub)($$.getBaseValue(d));
    };
  },
  getCircles: function(i, id2) {
    var $$ = this;
    var suffix = isValue(i) ? "-" + i : "";
    return (id2 ? $$.$el.main.selectAll("." + CLASS.circles + $$.getTargetSelectorSuffix(id2)) : $$.$el.main).selectAll("." + CLASS.circle + suffix);
  },
  expandCircles: function(i, id2, reset) {
    var $$ = this;
    var r = $$.pointExpandedR.bind($$);
    reset && $$.unexpandCircles();
    var circles = $$.getCircles(i, id2).classed(CLASS.EXPANDED, true);
    var scale2 = r(circles) / $$.config.point_r;
    var ratio = 1 - scale2;
    if ($$.isCirclePoint()) {
      circles.attr("r", r);
    } else {
      circles.each(function() {
        var point2 = select(this);
        if (this.tagName === "circle") {
          point2.attr("r", r);
        } else {
          var _a = this.getBBox(), width = _a.width, height = _a.height;
          var x2 = ratio * (+point2.attr("x") + width / 2);
          var y3 = ratio * (+point2.attr("y") + height / 2);
          point2.attr("transform", "translate(" + x2 + " " + y3 + ") scale(" + scale2 + ")");
        }
      });
    }
  },
  unexpandCircles: function(i) {
    var $$ = this;
    var r = $$.pointR.bind($$);
    var circles = $$.getCircles(i).filter(function() {
      return select(this).classed(CLASS.EXPANDED);
    }).classed(CLASS.EXPANDED, false);
    circles.attr("r", r);
    !$$.isCirclePoint() && circles.attr("transform", "scale(" + r(circles) / $$.config.point_r + ")");
  },
  pointR: function(d) {
    var $$ = this;
    var config = $$.config;
    var pointR = config.point_r;
    var r = pointR;
    if ($$.isBubbleType(d)) {
      r = $$.getBubbleR(d);
    } else if (isFunction(pointR)) {
      r = pointR.bind($$.api)(d);
    }
    return r;
  },
  pointExpandedR: function(d) {
    var $$ = this;
    var config = $$.config;
    var scale2 = $$.isBubbleType(d) ? 1.15 : 1.75;
    return config.point_focus_expand_enabled ? config.point_focus_expand_r || $$.pointR(d) * scale2 : $$.pointR(d);
  },
  pointSelectR: function(d) {
    var $$ = this;
    var selectR = $$.config.point_select_r;
    return isFunction(selectR) ? selectR(d) : selectR || $$.pointR(d) * 4;
  },
  isWithinCircle: function(node, r) {
    var mouse = getPointer(this.state.event, node);
    var element = select(node);
    var prefix = this.isCirclePoint(node) ? "c" : "";
    var cx = +element.attr(prefix + "x");
    var cy = +element.attr(prefix + "y");
    if (!(cx || cy) && node.nodeType === 1) {
      var _a = getBoundingRect(node), x2 = _a.x, y3 = _a.y;
      cx = x2;
      cy = y3;
    }
    return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < (r || this.config.point_sensitivity);
  },
  insertPointInfoDefs: function(point2, id2) {
    var $$ = this;
    var copyAttr = function(from, target) {
      var attribs = from.attributes;
      for (var i = 0, name_1; name_1 = attribs[i]; i++) {
        name_1 = name_1.name;
        target.setAttribute(name_1, from.getAttribute(name_1));
      }
    };
    var doc$1 = new DOMParser().parseFromString(point2, "image/svg+xml");
    var node = doc$1.documentElement;
    var clone = doc.createElementNS(namespaces.svg, node.nodeName.toLowerCase());
    clone.id = id2;
    clone.style.fill = "inherit";
    clone.style.stroke = "inherit";
    copyAttr(node, clone);
    if (node.childNodes && node.childNodes.length) {
      var parent_1 = select(clone);
      if ("innerHTML" in clone) {
        parent_1.html(node.innerHTML);
      } else {
        toArray(node.childNodes).forEach(function(v) {
          copyAttr(v, parent_1.append(v.tagName).node());
        });
      }
    }
    $$.$el.defs.node().appendChild(clone);
  },
  pointFromDefs: function(id2) {
    return this.$el.defs.select("#" + id2);
  },
  updatePointClass: function(d) {
    var $$ = this;
    var circle = $$.$el.circle;
    var pointClass = false;
    if (isObject(d) || circle) {
      pointClass = d === true ? circle.each(function(d2) {
        var className = $$.getClass("circle", true)(d2);
        if (this.getAttribute("class").indexOf(CLASS.EXPANDED) > -1) {
          className += " " + CLASS.EXPANDED;
        }
        this.setAttribute("class", className);
      }) : $$.getClass("circle", true)(d);
    }
    return pointClass;
  },
  generateGetLinePoints: function(lineIndices, isSub) {
    var $$ = this;
    var config = $$.config;
    var x2 = $$.getShapeX(0, lineIndices, isSub);
    var y3 = $$.getShapeY(isSub);
    var lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, isSub);
    var yScale = $$.getYScaleById.bind($$);
    return function(d, i) {
      var y0 = yScale.call($$, d.id, isSub)($$.getShapeYMin(d.id));
      var offset = lineOffset(d, i) || y0;
      var posX = x2(d);
      var posY = y3(d);
      if (config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY)) {
        posY = y0;
      }
      var point2 = [posX, posY - (y0 - offset)];
      return [
        point2,
        point2,
        point2,
        point2
      ];
    };
  },
  generatePoint: function() {
    var $$ = this;
    var config = $$.config, datetimeId = $$.state.datetimeId;
    var ids = [];
    var pattern = notEmpty(config.point_pattern) ? config.point_pattern : [config.point_type];
    return function(method, context) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return function(d) {
        var id2 = $$.getTargetSelectorSuffix(d.id || d.data && d.data.id || d);
        var element = select(this);
        ids.indexOf(id2) < 0 && ids.push(id2);
        var point2 = pattern[ids.indexOf(id2) % pattern.length];
        if ($$.hasValidPointType(point2)) {
          point2 = $$[point2];
        } else if (!$$.hasValidPointDrawMethods(point2)) {
          var pointId = datetimeId + "-point" + id2;
          var pointFromDefs = $$.pointFromDefs(pointId);
          if (pointFromDefs.size() < 1) {
            $$.insertPointInfoDefs(point2, pointId);
          }
          if (method === "create") {
            return $$.custom.create.bind(context).apply(void 0, __spreadArray([element, pointId], args));
          } else if (method === "update") {
            return $$.custom.update.bind(context).apply(void 0, __spreadArray([element], args));
          }
        }
        return point2[method].bind(context).apply(void 0, __spreadArray([element], args));
      };
    };
  },
  custom: {
    create: function(element, id2, sizeFn, fillStyleFn) {
      return element.append("use").attr("xlink:href", "#" + id2).attr("class", this.updatePointClass.bind(this)).style("fill", fillStyleFn).node();
    },
    update: function(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow2, selectedCircles) {
      var _a = element.node().getBBox(), width = _a.width, height = _a.height;
      var xPosFn2 = function(d) {
        return isValue(d.value) ? xPosFn(d) - width / 2 : 0;
      };
      var yPosFn2 = function(d) {
        return isValue(d.value) ? yPosFn(d) - height / 2 : 0;
      };
      var mainCircles = element;
      if (withTransition) {
        var transitionName = getTransitionName();
        flow2 && mainCircles.attr("x", xPosFn2);
        mainCircles = mainCircles.transition(transitionName);
        selectedCircles && selectedCircles.transition(getTransitionName());
      }
      return mainCircles.attr("x", xPosFn2).attr("y", yPosFn2).style("fill", fillStyleFn);
    }
  },
  circle: {
    create: function(element, sizeFn, fillStyleFn) {
      return element.append("circle").attr("class", this.updatePointClass.bind(this)).attr("r", sizeFn).style("fill", fillStyleFn).node();
    },
    update: function(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow2, selectedCircles) {
      var $$ = this;
      var mainCircles = element;
      if ($$.hasType("bubble")) {
        mainCircles.attr("r", $$.pointR.bind($$));
      }
      if (withTransition) {
        var transitionName = getTransitionName();
        flow2 && mainCircles.attr("cx", xPosFn);
        if (mainCircles.attr("cx")) {
          mainCircles = mainCircles.transition(transitionName);
        }
        selectedCircles && selectedCircles.transition(getTransitionName());
      }
      return mainCircles.attr("cx", xPosFn).attr("cy", yPosFn).style("fill", fillStyleFn);
    }
  },
  rectangle: {
    create: function(element, sizeFn, fillStyleFn) {
      var rectSizeFn = function(d) {
        return sizeFn(d) * 2;
      };
      return element.append("rect").attr("class", this.updatePointClass.bind(this)).attr("width", rectSizeFn).attr("height", rectSizeFn).style("fill", fillStyleFn).node();
    },
    update: function(element, xPosFn, yPosFn, fillStyleFn, withTransition, flow2, selectedCircles) {
      var $$ = this;
      var r = $$.config.point_r;
      var rectXPosFn = function(d) {
        return xPosFn(d) - r;
      };
      var rectYPosFn = function(d) {
        return yPosFn(d) - r;
      };
      var mainCircles = element;
      if (withTransition) {
        var transitionName = getTransitionName();
        flow2 && mainCircles.attr("x", rectXPosFn);
        mainCircles = mainCircles.transition(transitionName);
        selectedCircles && selectedCircles.transition(getTransitionName());
      }
      return mainCircles.attr("x", rectXPosFn).attr("y", rectYPosFn).style("fill", fillStyleFn);
    }
  }
};
function getPosition(isClockwise, type2, edge, pos, range, ratio) {
  var index = isClockwise && pos > 0 ? edge - pos : pos;
  var r = 2 * Math.PI;
  var func = type2 === "x" ? Math.sin : Math.cos;
  return range * (1 - ratio * func(index * r / edge));
}
var cacheKey = KEY.radarPoints;
var shapeRadar = {
  initRadar: function() {
    var $$ = this;
    var config = $$.config, current = $$.state.current, $el = $$.$el;
    if ($$.hasType("radar")) {
      $el.radar = $el.main.select("." + CLASS.chart).append("g").attr("class", CLASS.chartRadars);
      $el.radar.levels = $el.radar.append("g").attr("class", CLASS.levels);
      $el.radar.axes = $el.radar.append("g").attr("class", CLASS.axis);
      $el.radar.shapes = $el.radar.append("g").attr("class", CLASS.shapes);
      current.dataMax = config.radar_axis_max || $$.getMinMaxData().max[0].value;
    }
  },
  getRadarSize: function() {
    var $$ = this;
    var config = $$.config, _a = $$.state, arcWidth = _a.arcWidth, arcHeight = _a.arcHeight;
    var padding = config.axis_x_categories.length < 4 ? -20 : 10;
    var size2 = (Math.min(arcWidth, arcHeight) - padding) / 2;
    return [size2, size2];
  },
  updateTargetsForRadar: function(targets) {
    var $$ = this;
    var config = $$.config;
    if (isEmpty(config.axis_x_categories)) {
      config.axis_x_categories = getRange(0, getMinMax$1("max", targets.map(function(v) {
        return v.values.length;
      })));
    }
    $$.generateRadarPoints();
  },
  getRadarPosition: function(type2, index, range, ratio) {
    var $$ = this;
    var config = $$.config;
    var _a = $$.getRadarSize(), width = _a[0], height = _a[1];
    var edge = config.axis_x_categories.length;
    var isClockwise = config.radar_direction_clockwise;
    var pos = toArray(type2).map(function(v) {
      return getPosition(isClockwise, v, edge, index, isDefined(range) ? range : type2 === "x" ? width : height, isNumber(ratio) ? ratio : config.radar_size_ratio);
    });
    return pos.length === 1 ? pos[0] : pos;
  },
  generateRadarPoints: function() {
    var $$ = this;
    var targets = $$.data.targets;
    var _a = $$.getRadarSize(), width = _a[0], height = _a[1];
    var points = $$.cache.get(cacheKey) || {};
    var size2 = points._size;
    if (!size2 || size2.width !== width && size2.height !== height) {
      targets.forEach(function(d) {
        points[d.id] = d.values.map(function(v, i) {
          return $$.getRadarPosition(["x", "y"], i, void 0, $$.getRatio("radar", v));
        });
      });
      points._size = { width, height };
      $$.cache.add(cacheKey, points);
    }
  },
  redrawRadar: function(durationForExit) {
    var $$ = this;
    var _a = $$.$el, radar2 = _a.radar, main2 = _a.main;
    var translate = $$.getTranslate("radar");
    if (translate) {
      radar2.attr("transform", translate);
      main2.select("." + CLASS.chartTexts).attr("transform", translate);
      $$.generateRadarPoints();
      $$.updateRadarLevel();
      $$.updateRadarAxes();
      $$.updateRadarShape(durationForExit);
    }
  },
  generateGetRadarPoints: function() {
    var points = this.cache.get(cacheKey);
    return function(d, i) {
      var point2 = points[d.id][i];
      return [
        point2,
        point2,
        point2,
        point2
      ];
    };
  },
  updateRadarLevel: function() {
    var $$ = this;
    var config = $$.config, state = $$.state, radar2 = $$.$el.radar;
    var _a = $$.getRadarSize(), width = _a[0], height = _a[1];
    var depth = config.radar_level_depth;
    var edge = config.axis_x_categories.length;
    var showText = config.radar_level_text_show;
    var radarLevels = radar2.levels;
    var levelData = getRange(0, depth);
    var radius = config.radar_size_ratio * Math.min(width, height);
    var levelRatio = levelData.map(function(l) {
      return radius * ((l + 1) / depth);
    });
    var levelTextFormat = (config.radar_level_text_format || function() {
    }).bind($$.api);
    var points = levelData.map(function(v) {
      var range = levelRatio[v];
      var pos = getRange(0, edge).map(function(i) {
        return $$.getRadarPosition(["x", "y"], i, range, 1).join(",");
      });
      return pos.join(" ");
    });
    var level = radarLevels.selectAll("." + CLASS.level).data(levelData);
    level.exit().remove();
    var levelEnter = level.enter().append("g").attr("class", function(d, i) {
      return CLASS.level + " " + CLASS.level + "-" + i;
    });
    levelEnter.append("polygon").style("visibility", config.radar_level_show ? null : "hidden");
    if (showText) {
      if (radarLevels.select("text").empty()) {
        radarLevels.append("text").attr("dx", "-.5em").attr("dy", "-.7em").style("text-anchor", "end").text(function() {
          return levelTextFormat(0);
        });
      }
      levelEnter.append("text").attr("dx", "-.5em").style("text-anchor", "end").text(function(d) {
        return levelTextFormat(state.current.dataMax / levelData.length * (d + 1));
      });
    }
    levelEnter.merge(level).attr("transform", function(d) {
      return "translate(" + (width - levelRatio[d]) + ", " + (height - levelRatio[d]) + ")";
    }).selectAll("polygon").attr("points", function(d) {
      return points[d];
    });
    if (showText) {
      radarLevels.selectAll("text").attr("x", function(d) {
        return isUndefined(d) ? width : points[d].split(",")[0];
      }).attr("y", function(d) {
        return isUndefined(d) ? height : 0;
      });
    }
  },
  updateRadarAxes: function() {
    var $$ = this;
    var config = $$.config, radar2 = $$.$el.radar;
    var _a = $$.getRadarSize(), width = _a[0], height = _a[1];
    var categories = config.axis_x_categories;
    var axis2 = radar2.axes.selectAll("g").data(categories);
    axis2.exit().remove();
    var axisEnter = axis2.enter().append("g").attr("class", function(d, i) {
      return CLASS.axis + "-" + i;
    });
    config.radar_axis_line_show && axisEnter.append("line");
    config.radar_axis_text_show && axisEnter.append("text");
    axis2 = axisEnter.merge(axis2);
    if (config.radar_axis_line_show) {
      axis2.select("line").attr("x1", width).attr("y1", height).attr("x2", function(d, i) {
        return $$.getRadarPosition("x", i);
      }).attr("y2", function(d, i) {
        return $$.getRadarPosition("y", i);
      });
    }
    if (config.radar_axis_text_show) {
      var _b = config.radar_axis_text_position, _c = _b.x, x_1 = _c === void 0 ? 0 : _c, _d = _b.y, y_1 = _d === void 0 ? 0 : _d;
      axis2.select("text").style("text-anchor", "middle").attr("dy", ".5em").call(function(selection2) {
        selection2.each(function(d) {
          setTextValue(select(this), String(d), [-0.6, 1.2]);
        });
      }).datum(function(d, i) {
        return { index: i };
      }).attr("transform", function(d) {
        if (isUndefined(this.width)) {
          this.width = this.getBoundingClientRect().width / 2;
        }
        var posX = $$.getRadarPosition("x", d.index, void 0, 1);
        var posY = Math.round($$.getRadarPosition("y", d.index, void 0, 1));
        if (posX > width) {
          posX += this.width + x_1;
        } else if (Math.round(posX) < width) {
          posX -= this.width + x_1;
        }
        if (posY > height) {
          if (posY / 2 === height && this.firstChild.tagName === "tspan") {
            this.firstChild.setAttribute("dy", "0em");
          }
          posY += y_1;
        } else if (posY < height) {
          posY -= y_1;
        }
        return "translate(" + posX + " " + posY + ")";
      });
    }
    $$.bindEvent();
  },
  bindEvent: function() {
    var $$ = this;
    var config = $$.config, state = $$.state, _a = $$.$el, radar2 = _a.radar, svg = _a.svg;
    var focusOnly = config.point_focus_only;
    var inputType = state.inputType, transiting = state.transiting;
    if (config.interaction_enabled) {
      var isMouse_1 = inputType === "mouse";
      var getIndex_1 = function(event) {
        var target = event.target;
        if (/tspan/i.test(target.tagName)) {
          target = target.parentNode;
        }
        var d = select(target).datum();
        return d && Object.keys(d).length === 1 ? d.index : void 0;
      };
      var hide = function(event) {
        var index = getIndex_1(event);
        var noIndex = isUndefined(index);
        if (isMouse_1 || noIndex) {
          $$.hideTooltip();
          focusOnly ? $$.hideCircleFocus() : $$.unexpandCircles();
          if (isMouse_1) {
            $$.setOverOut(false, index);
          } else if (noIndex) {
            $$.callOverOutForTouch();
          }
        }
      };
      radar2.axes.selectAll("text").on(isMouse_1 ? "mouseover " : "touchstart", function(event) {
        if (transiting) {
          return;
        }
        state.event = event;
        var index = getIndex_1(event);
        $$.selectRectForSingle(svg.node(), null, index);
        isMouse_1 ? $$.setOverOut(true, index) : $$.callOverOutForTouch(index);
      }).on("mouseout", isMouse_1 ? hide : null);
      if (!isMouse_1) {
        svg.on("touchstart", hide);
      }
    }
  },
  updateRadarShape: function(durationForExit) {
    var $$ = this;
    var targets = $$.data.targets.filter(function(d) {
      return $$.isRadarType(d);
    });
    var points = $$.cache.get(cacheKey);
    var areas = $$.$el.radar.shapes.selectAll("polygon").data(targets);
    var areasEnter = areas.enter().append("g").attr("class", $$.getChartClass("Radar"));
    areas.exit().transition().duration(durationForExit).remove();
    areasEnter.append("polygon").merge(areas).style("fill", $$.color).style("stroke", $$.color).attr("points", function(d) {
      return points[d.id].join(" ");
    });
    $$.updateTargetForCircle(targets, areasEnter);
  },
  radarCircleX: function(d) {
    return this.cache.get(cacheKey)[d.id][d.index][0];
  },
  radarCircleY: function(d) {
    return this.cache.get(cacheKey)[d.id][d.index][1];
  }
};
var optPoint = {
  point_show: true,
  point_r: 2.5,
  point_sensitivity: 10,
  point_focus_expand_enabled: true,
  point_focus_expand_r: void 0,
  point_focus_only: false,
  point_opacity: void 0,
  point_pattern: [],
  point_select_r: void 0,
  point_type: "circle"
};
var optArea = {
  area_above: false,
  area_front: true,
  area_linearGradient: false,
  area_zerobased: true
};
var optBar = {
  bar_label_threshold: 0,
  bar_padding: 0,
  bar_radius: void 0,
  bar_radius_ratio: void 0,
  bar_sensitivity: 2,
  bar_width: void 0,
  bar_width_ratio: 0.6,
  bar_width_max: void 0,
  bar_zerobased: true
};
var optBubble = {
  bubble_maxR: 35,
  bubble_zerobased: false
};
var optLine = {
  line_connectNull: false,
  line_step_type: "step",
  line_zerobased: false,
  line_classes: void 0,
  line_point: true
};
var optScatter = {
  scatter_zerobased: false
};
var optSpline = {
  spline_interpolation_type: "cardinal"
};
var optDonut = {
  donut_label_show: true,
  donut_label_format: void 0,
  donut_label_threshold: 0.05,
  donut_label_ratio: void 0,
  donut_width: void 0,
  donut_title: "",
  donut_expand: {},
  donut_expand_rate: 0.98,
  donut_expand_duration: 50,
  donut_padAngle: 0,
  donut_startingAngle: 0
};
var optGauge = {
  gauge_background: "",
  gauge_fullCircle: false,
  gauge_label_show: true,
  gauge_label_format: void 0,
  gauge_label_extents: void 0,
  gauge_label_threshold: 0,
  gauge_min: 0,
  gauge_max: 100,
  gauge_type: "single",
  gauge_startingAngle: -1 * Math.PI / 2,
  gauge_arcLength: 100,
  gauge_title: "",
  gauge_units: void 0,
  gauge_width: void 0,
  gauge_arcs_minWidth: 5,
  gauge_expand: {},
  gauge_expand_rate: 0.98,
  gauge_expand_duration: 50
};
var optPie = {
  pie_label_show: true,
  pie_label_format: void 0,
  pie_label_threshold: 0.05,
  pie_label_ratio: void 0,
  pie_expand: {},
  pie_expand_rate: 0.98,
  pie_expand_duration: 50,
  pie_innerRadius: 0,
  pie_outerRadius: void 0,
  pie_padAngle: 0,
  pie_padding: 0,
  pie_startingAngle: 0
};
var optRadar = {
  radar_axis_max: void 0,
  radar_axis_line_show: true,
  radar_axis_text_show: true,
  radar_axis_text_position: {},
  radar_level_depth: 3,
  radar_level_show: true,
  radar_level_text_format: function(x2) {
    return x2 % 1 === 0 ? x2 : x2.toFixed(2);
  },
  radar_level_text_show: true,
  radar_size_ratio: 0.87,
  radar_direction_clockwise: false
};
function extendAxis(module, option) {
  extend(ChartInternal.prototype, internal.concat(module));
  extend(Chart.prototype, api);
  Options.setOptions(options.concat(option || []));
}
function extendLine(module, option) {
  extendAxis([shapePoint, shapeLine].concat(module || []));
  Options.setOptions([optPoint, optLine].concat(option || []));
}
function extendArc(module, option) {
  extend(ChartInternal.prototype, [shapeArc].concat(module || []));
  Options.setOptions(option);
}
var area = function() {
  return extendLine(shapeArea, [optArea]), (area = function() {
    return TYPE.AREA;
  })();
};
var areaLineRange = function() {
  return extendLine(shapeArea, [optArea]), (areaLineRange = function() {
    return TYPE.AREA_LINE_RANGE;
  })();
};
var areaSplineRange = function() {
  return extendLine(shapeArea, [optArea, optSpline]), (areaSplineRange = function() {
    return TYPE.AREA_SPLINE_RANGE;
  })();
};
var areaStep = function() {
  return extendLine(shapeArea, [optArea]), (areaStep = function() {
    return TYPE.AREA_STEP;
  })();
};
var line = function() {
  return extendLine(), (line = function() {
    return TYPE.LINE;
  })();
};
var spline = function() {
  return extendLine(void 0, [optSpline]), (spline = function() {
    return TYPE.SPLINE;
  })();
};
var step = function() {
  return extendLine(), (step = function() {
    return TYPE.STEP;
  })();
};
var donut = function() {
  return extendArc(void 0, [optDonut]), (donut = function() {
    return TYPE.DONUT;
  })();
};
var gauge = function() {
  return extendArc([shapeGauge], [optGauge]), (gauge = function() {
    return TYPE.GAUGE;
  })();
};
var pie = function() {
  return extendArc(void 0, [optPie]), (pie = function() {
    return TYPE.PIE;
  })();
};
var radar = function() {
  return extendArc([shapePoint, shapeRadar], [optPoint, optRadar]), (radar = function() {
    return TYPE.RADAR;
  })();
};
var bar = function() {
  return extendAxis([shapeBar], optBar), (bar = function() {
    return TYPE.BAR;
  })();
};
var bubble = function() {
  return extendAxis([shapePoint, shapeBubble], [optBubble, optPoint]), (bubble = function() {
    return TYPE.BUBBLE;
  })();
};
var scatter = function() {
  return extendAxis([shapePoint], [optPoint, optScatter]), (scatter = function() {
    return TYPE.SCATTER;
  })();
};
function withinRange(domain2, current, range) {
  var min2 = range[0], max2 = range[1];
  return domain2.every(function(v, i) {
    return i === 0 ? v >= min2 : v <= max2;
  }) && !(domain2[0] === current[0] && domain2[1] === current[1]);
}
var zoom$1 = function(domainValue) {
  var _a;
  var $$ = this.internal;
  var $el = $$.$el, config = $$.config, org = $$.org, scale2 = $$.scale;
  var isRotated = config.axis_rotated;
  var isCategorized = $$.axis.isCategorized();
  var domain2 = domainValue;
  if (config.zoom_enabled && domain2) {
    if ($$.axis.isTimeSeries()) {
      domain2 = domain2.map(function(x3) {
        return parseDate.bind($$)(x3);
      });
    }
    if (withinRange(domain2, $$.getZoomDomain(true), $$.getZoomDomain())) {
      if (isCategorized) {
        domain2 = domain2.map(function(v, i) {
          return Number(v) + (i === 0 ? 0 : 1);
        });
      }
      $$.api.tooltip.hide();
      if (config.subchart_show) {
        var x2 = scale2.zoom || scale2.x;
        $$.brush.getSelection().call($$.brush.move, [x2(domain2[0]), x2(domain2[1])]);
      } else {
        var x2 = isCategorized ? scale2.x.orgScale() : org.xScale || scale2.x;
        var translate = [-x2(domain2[0]), 0];
        var transform2 = (_a = identity.scale(x2.range()[1] / (x2(domain2[1]) - x2(domain2[0])))).translate.apply(_a, isRotated ? translate.reverse() : translate);
        $$.$T($el.eventRect).call($$.zoom.transform, transform2);
      }
      $$.setZoomResetButton();
    }
  } else {
    domain2 = scale2.zoom ? scale2.zoom.domain() : scale2.x.orgDomain();
  }
  return domain2;
};
extend(zoom$1, {
  enable: function(enabled) {
    var $$ = this.internal;
    var config = $$.config;
    if (/^(drag|wheel)$/.test(enabled)) {
      config.zoom_type = enabled;
    }
    config.zoom_enabled = !!enabled;
    if (!$$.zoom) {
      $$.initZoom();
      $$.bindZoomEvent();
    } else if (enabled === false) {
      $$.bindZoomEvent(false);
    }
    $$.updateAndRedraw();
  },
  max: function(max2) {
    var $$ = this.internal;
    var config = $$.config, xDomain = $$.org.xDomain;
    if (max2 === 0 || max2) {
      config.zoom_x_max = getMinMax$1("max", [xDomain[1], max2]);
    }
    return config.zoom_x_max;
  },
  min: function(min2) {
    var $$ = this.internal;
    var config = $$.config, xDomain = $$.org.xDomain;
    if (min2 === 0 || min2) {
      config.zoom_x_min = getMinMax$1("min", [xDomain[0], min2]);
    }
    return config.zoom_x_min;
  },
  range: function(range) {
    var zoom = this.zoom;
    if (isObject(range)) {
      var min2 = range.min, max2 = range.max;
      isDefined(min2) && zoom.min(min2);
      isDefined(max2) && zoom.max(max2);
    }
    return {
      min: zoom.min(),
      max: zoom.max()
    };
  }
});
var drag = {
  drag: function(mouse) {
    var $$ = this;
    var config = $$.config, state = $$.state, main2 = $$.$el.main;
    var isSelectionGrouped = config.data_selection_grouped;
    var isSelectable = config.interaction_enabled && config.data_selection_isselectable;
    if ($$.hasArcType() || !config.data_selection_enabled || config.zoom_enabled && !$$.zoom.altDomain || !config.data_selection_multiple) {
      return;
    }
    var _a = state.dragStart || [0, 0], sx = _a[0], sy = _a[1];
    var mx = mouse[0], my = mouse[1];
    var minX = Math.min(sx, mx);
    var maxX = Math.max(sx, mx);
    var minY = isSelectionGrouped ? state.margin.top : Math.min(sy, my);
    var maxY = isSelectionGrouped ? state.height : Math.max(sy, my);
    main2.select("." + CLASS.dragarea).attr("x", minX).attr("y", minY).attr("width", maxX - minX).attr("height", maxY - minY);
    main2.selectAll("." + CLASS.shapes).selectAll("." + CLASS.shape).filter(function(d) {
      return isSelectable && isSelectable.bind($$.api)(d);
    }).each(function(d, i) {
      var shape2 = select(this);
      var isSelected = shape2.classed(CLASS.SELECTED);
      var isIncluded = shape2.classed(CLASS.INCLUDED);
      var isWithin = false;
      var toggle;
      if (shape2.classed(CLASS.circle)) {
        var x2 = +shape2.attr("cx") * 1;
        var y3 = +shape2.attr("cy") * 1;
        toggle = $$.togglePoint;
        isWithin = minX < x2 && x2 < maxX && minY < y3 && y3 < maxY;
      } else if (shape2.classed(CLASS.bar)) {
        var _a2 = getPathBox(this), x2 = _a2.x, y3 = _a2.y, width = _a2.width, height = _a2.height;
        toggle = $$.togglePath;
        isWithin = !(maxX < x2 || x2 + width < minX) && !(maxY < y3 || y3 + height < minY);
      } else {
        return;
      }
      if (isWithin ^ isIncluded) {
        shape2.classed(CLASS.INCLUDED, !isIncluded);
        shape2.classed(CLASS.SELECTED, !isSelected);
        toggle.call($$, !isSelected, shape2, d, i);
      }
    });
  },
  dragstart: function(mouse) {
    var $$ = this;
    var config = $$.config, state = $$.state, main2 = $$.$el.main;
    if ($$.hasArcType() || !config.data_selection_enabled) {
      return;
    }
    state.dragStart = mouse;
    main2.select("." + CLASS.chart).append("rect").attr("class", CLASS.dragarea).style("opacity", "0.1");
    $$.setDragStatus(true);
  },
  dragend: function() {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    if ($$.hasArcType() || !config.data_selection_enabled) {
      return;
    }
    main2.select("." + CLASS.dragarea).transition().duration(100).style("opacity", "0").remove();
    main2.selectAll("." + CLASS.shape).classed(CLASS.INCLUDED, false);
    $$.setDragStatus(false);
  }
};
_assign(_assign({}, drag), {
  selectPoint: function(target, d, i) {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    var isRotated = config.axis_rotated;
    var cx = (isRotated ? $$.circleY : $$.circleX).bind($$);
    var cy = (isRotated ? $$.circleX : $$.circleY).bind($$);
    var r = $$.pointSelectR.bind($$);
    callFn(config.data_onselected, $$.api, d, target.node());
    main2.select("." + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + CLASS.selectedCircle + "-" + i).data([d]).enter().append("circle").attr("class", function() {
      return $$.generateClass(CLASS.selectedCircle, i);
    }).attr("cx", cx).attr("cy", cy).attr("stroke", $$.color).attr("r", function(d2) {
      return $$.pointSelectR(d2) * 1.4;
    }).transition().duration(100).attr("r", r);
  },
  unselectPoint: function(target, d, i) {
    var $$ = this;
    var config = $$.config, $el = $$.$el;
    callFn(config.data_onunselected, $$.api, d, target.node());
    $el.main.select("." + CLASS.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + CLASS.selectedCircle + "-" + i).transition().duration(100).attr("r", 0).remove();
  },
  togglePoint: function(selected, target, d, i) {
    var method = (selected ? "" : "un") + "selectPoint";
    this[method](target, d, i);
  },
  selectPath: function(target, d) {
    var $$ = this;
    var config = $$.config;
    callFn(config.data_onselected, $$.api, d, target.node());
    if (config.interaction_brighten) {
      target.transition().duration(100).style("fill", function() {
        return rgb($$.color(d)).brighter(0.75);
      });
    }
  },
  unselectPath: function(target, d) {
    var $$ = this;
    var config = $$.config;
    callFn(config.data_onunselected, $$.api, d, target.node());
    if (config.interaction_brighten) {
      target.transition().duration(100).style("fill", function() {
        return $$.color(d);
      });
    }
  },
  togglePath: function(selected, target, d, i) {
    this[(selected ? "" : "un") + "selectPath"](target, d, i);
  },
  getToggle: function(that, d) {
    var $$ = this;
    return that.nodeName === "path" ? $$.togglePath : $$.isStepType(d) ? function() {
    } : $$.togglePoint;
  },
  toggleShape: function(that, d, i) {
    var $$ = this;
    var config = $$.config, main2 = $$.$el.main;
    var shape2 = select(that);
    var isSelected = shape2.classed(CLASS.SELECTED);
    var toggle = $$.getToggle(that, d).bind($$);
    var toggledShape;
    if (config.data_selection_enabled && config.data_selection_isselectable.bind($$.api)(d)) {
      if (!config.data_selection_multiple) {
        var selector2 = "." + CLASS.shapes;
        if (config.data_selection_grouped) {
          selector2 += $$.getTargetSelectorSuffix(d.id);
        }
        main2.selectAll(selector2).selectAll("." + CLASS.shape).each(function(d2, i2) {
          var shape3 = select(this);
          if (shape3.classed(CLASS.SELECTED)) {
            toggledShape = shape3;
            toggle(false, shape3.classed(CLASS.SELECTED, false), d2, i2);
          }
        });
      }
      if (!toggledShape || toggledShape.node() !== shape2.node()) {
        shape2.classed(CLASS.SELECTED, !isSelected);
        toggle(!isSelected, shape2, d, i);
      }
    }
  }
});
var defaults = {};
var bb = {
  version: "3.1.5",
  generate: function(config) {
    var options2 = mergeObj({}, defaults, config);
    var inst = new Chart(options2);
    inst.internal.charts = this.instance;
    this.instance.push(inst);
    return inst;
  },
  defaults: function(options2) {
    if (isObject(options2)) {
      defaults = options2;
    }
    return defaults;
  },
  instance: [],
  plugin: {}
};
var VBillboardJS_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    options: { type: null, required: true }
  },
  emits: ["ready"],
  setup(__props, { emit }) {
    const props = __props;
    const element = ref();
    watchEffect(() => {
      if (element.value) {
        try {
          const billboard = bb.generate(__spreadProps(__spreadValues({}, props.options), {
            bindto: element.value
          }));
          emit("ready", billboard);
          nextTick(() => {
            billboard.resize();
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["element"] = _value;
          element.value = _value;
        }
      }, null, 512);
    };
  }
});
export { _sfc_main as _, area as a, areaLineRange as b, areaSplineRange as c, bar as d, areaStep as e, bubble as f, scatter as g, donut as h, gauge as i, spline as j, line as l, pie as p, radar as r, step as s };
