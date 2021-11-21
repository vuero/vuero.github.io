import { d as dayjs } from "./dayjs.min.9071635e.js";
function toString(val) {
  return `${val}`;
}
function perSession(val) {
  return `${val} per session`;
}
function asMinutes(val) {
  return `${val} (mins)`;
}
function asDollar(val) {
  return `$ ${val}`;
}
function asKDollar(val) {
  return `$ ${val}K`;
}
function asPercent(val) {
  return `${val} %`;
}
function toDate(format) {
  return (val, timestamp) => dayjs(timestamp).format(format);
}
function toFixed(fractionDigit, divider = 1) {
  return (val) => (val / divider).toFixed(fractionDigit);
}
export { toDate as a, asMinutes as b, toString as c, asPercent as d, asKDollar as e, asDollar as f, perSession as p, toFixed as t };
