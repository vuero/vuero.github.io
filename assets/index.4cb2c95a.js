var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { a5 as reactive, h as computed, j as h, o as openBlock, N as createBlock, v as createVNode, q as resolveComponent, F as renderSlot, E as toDisplayString, G as Fragment, J as renderList, x as withCtx, _ as Transition, D as createCommentVNode, B as createTextVNode, a6 as mergeProps, p as pushScopeId, f as popScopeId, s as withModifiers, a7 as withScopeId } from "./vendor.9ec557a4.js";
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn2, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn2(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = _freeGlobal || freeSelf || Function("return this")();
var _root = root;
var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
  try {
    value2[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag] = tag;
    } else {
      delete value2[symToStringTag];
    }
  }
  return result;
}
var _getRawTag = getRawTag;
var objectProto$1 = Object.prototype;
var nativeObjectToString$1 = objectProto$1.toString;
function objectToString(value2) {
  return nativeObjectToString$1.call(value2);
}
var _objectToString = objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag$1 && symToStringTag$1 in Object(value2) ? _getRawTag(value2) : _objectToString(value2);
}
var _baseGetTag = baseGetTag;
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var isObjectLike_1 = isObjectLike;
var isArray = Array.isArray;
var isArray_1 = isArray;
function isObject(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_1 = isObject;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject_1(value2)) {
    return false;
  }
  var tag = _baseGetTag(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value2) {
  return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength;
function isArrayLike(value2) {
  return value2 != null && isLength_1(value2.length) && !isFunction_1(value2);
}
var isArrayLike_1 = isArrayLike;
function isArrayLikeObject(value2) {
  return isObjectLike_1(value2) && isArrayLike_1(value2);
}
var isArrayLikeObject_1 = isArrayLikeObject;
var dateTag = "[object Date]";
function baseIsDate(value2) {
  return isObjectLike_1(value2) && _baseGetTag(value2) == dateTag;
}
var _baseIsDate = baseIsDate;
function baseUnary(func) {
  return function(value2) {
    return func(value2);
  };
}
var _baseUnary = baseUnary;
var _nodeUtil = createCommonjsModule(function(module, exports) {
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && _freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil;
});
var nodeIsDate = _nodeUtil && _nodeUtil.isDate;
var isDate = nodeIsDate ? _baseUnary(nodeIsDate) : _baseIsDate;
var isDate_1 = isDate;
var symbolTag = "[object Symbol]";
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike_1(value2) && _baseGetTag(value2) == symbolTag;
}
var isSymbol_1 = isSymbol;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value2, object) {
  if (isArray_1(value2)) {
    return false;
  }
  var type = typeof value2;
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol_1(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
}
var _isKey = isKey;
var coreJsData = _root["__core-js_shared__"];
var _coreJsData = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$2 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value2) {
  if (!isObject_1(value2) || _isMasked(value2)) {
    return false;
  }
  var pattern = isFunction_1(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value2));
}
var _baseIsNative = baseIsNative;
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue;
function getNative(object, key) {
  var value2 = _getValue(object, key);
  return _baseIsNative(value2) ? value2 : void 0;
}
var _getNative = getNative;
var nativeCreate = _getNative(Object, "create");
var _nativeCreate = nativeCreate;
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
var _hashClear = hashClear;
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data9 = this.__data__;
  if (_nativeCreate) {
    var result = data9[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty$2.call(data9, key) ? data9[key] : void 0;
}
var _hashGet = hashGet;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data9 = this.__data__;
  return _nativeCreate ? data9[key] !== void 0 : hasOwnProperty$3.call(data9, key);
}
var _hashHas = hashHas;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data9 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data9[key] = _nativeCreate && value2 === void 0 ? HASH_UNDEFINED$1 : value2;
  return this;
}
var _hashSet = hashSet;
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = _hashClear;
Hash.prototype["delete"] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear;
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_1 = eq;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data9 = this.__data__, index = _assocIndexOf(data9, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data9.length - 1;
  if (index == lastIndex) {
    data9.pop();
  } else {
    splice.call(data9, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete;
function listCacheGet(key) {
  var data9 = this.__data__, index = _assocIndexOf(data9, key);
  return index < 0 ? void 0 : data9[index][1];
}
var _listCacheGet = listCacheGet;
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas;
function listCacheSet(key, value2) {
  var data9 = this.__data__, index = _assocIndexOf(data9, key);
  if (index < 0) {
    ++this.size;
    data9.push([key, value2]);
  } else {
    data9[index][1] = value2;
  }
  return this;
}
var _listCacheSet = listCacheSet;
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype["delete"] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;
var Map$1 = _getNative(_root, "Map");
var _Map = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new _Hash(),
    "map": new (_Map || _ListCache)(),
    "string": new _Hash()
  };
}
var _mapCacheClear = mapCacheClear;
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var _isKeyable = isKeyable;
function getMapData(map2, key) {
  var data9 = map2.__data__;
  return _isKeyable(key) ? data9[typeof key == "string" ? "string" : "hash"] : data9.map;
}
var _getMapData = getMapData;
function mapCacheDelete(key) {
  var result = _getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete;
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}
var _mapCacheGet = mapCacheGet;
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}
var _mapCacheHas = mapCacheHas;
function mapCacheSet(key, value2) {
  var data9 = _getMapData(this, key), size = data9.size;
  data9.set(key, value2);
  this.size += data9.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet;
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype["delete"] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
}
memoize.Cache = _MapCache;
var memoize_1 = memoize;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap;
var INFINITY = 1 / 0;
var symbolProto = _Symbol ? _Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray_1(value2)) {
    return _arrayMap(value2, baseToString) + "";
  }
  if (isSymbol_1(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
}
var _baseToString = baseToString;
function toString(value2) {
  return value2 == null ? "" : _baseToString(value2);
}
var toString_1 = toString;
function castPath(value2, object) {
  if (isArray_1(value2)) {
    return value2;
  }
  return _isKey(value2, object) ? [value2] : _stringToPath(toString_1(value2));
}
var _castPath = castPath;
var INFINITY$1 = 1 / 0;
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol_1(value2)) {
    return value2;
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey;
function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : _baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
var defineProperty = function() {
  try {
    var func = _getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$1 = defineProperty;
function baseAssignValue(object, key, value2) {
  if (key == "__proto__" && _defineProperty$1) {
    _defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value2,
      "writable": true
    });
  } else {
    object[key] = value2;
  }
}
var _baseAssignValue = baseAssignValue;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue(object, key, value2) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value2)) || value2 === void 0 && !(key in object)) {
    _baseAssignValue(object, key, value2);
  }
}
var _assignValue = assignValue;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value2, length) {
  var type = typeof value2;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
}
var _isIndex = isIndex;
function baseSet(object, path, value2, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = _toKey(path[index]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet;
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor;
var baseFor = _createBaseFor();
var _baseFor = baseFor;
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes;
var argsTag = "[object Arguments]";
function baseIsArguments(value2) {
  return isObjectLike_1(value2) && _baseGetTag(value2) == argsTag;
}
var _baseIsArguments = baseIsArguments;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
var isArguments = _baseIsArguments(function() {
  return arguments;
}()) ? _baseIsArguments : function(value2) {
  return isObjectLike_1(value2) && hasOwnProperty$5.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
};
var isArguments_1 = isArguments;
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function(module, exports) {
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? _root.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});
var argsTag$1 = "[object Arguments]", arrayTag = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag = "[object Error]", funcTag$1 = "[object Function]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value2) {
  return isObjectLike_1(value2) && isLength_1(value2.length) && !!typedArrayTags[_baseGetTag(value2)];
}
var _baseIsTypedArray = baseIsTypedArray;
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys(value2, inherited) {
  var isArr = isArray_1(value2), isArg = !isArr && isArguments_1(value2), isBuff = !isArr && !isArg && isBuffer_1(value2), isType = !isArr && !isArg && !isBuff && isTypedArray_1(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? _baseTimes(value2.length, String) : [], length = result.length;
  for (var key in value2) {
    if ((inherited || hasOwnProperty$6.call(value2, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || _isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys;
var objectProto$8 = Object.prototype;
function isPrototype(value2) {
  var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value2 === proto;
}
var _isPrototype = isPrototype;
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg;
var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys;
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}
var keys_1 = keys;
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}
var _baseForOwn = baseForOwn;
function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}
var _stackClear = stackClear;
function stackDelete(key) {
  var data9 = this.__data__, result = data9["delete"](key);
  this.size = data9.size;
  return result;
}
var _stackDelete = stackDelete;
function stackGet(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet;
function stackHas(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value2) {
  var data9 = this.__data__;
  if (data9 instanceof _ListCache) {
    var pairs = data9.__data__;
    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value2]);
      this.size = ++data9.size;
      return this;
    }
    data9 = this.__data__ = new _MapCache(pairs);
  }
  data9.set(key, value2);
  this.size = data9.size;
  return this;
}
var _stackSet = stackSet;
function Stack(entries) {
  var data9 = this.__data__ = new _ListCache(entries);
  this.size = data9.size;
}
Stack.prototype.clear = _stackClear;
Stack.prototype["delete"] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
function setCacheAdd(value2) {
  this.__data__.set(value2, HASH_UNDEFINED$2);
  return this;
}
var _setCacheAdd = setCacheAdd;
function setCacheHas(value2) {
  return this.__data__.has(value2);
}
var _setCacheHas = setCacheHas;
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
var _SetCache = SetCache;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome;
function cacheHas(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!_arraySome(other, function(othValue2, othIndex) {
        if (!_cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays;
var Uint8Array2 = _root.Uint8Array;
var _Uint8Array = Uint8Array2;
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value2, key) {
    result[++index] = [key, value2];
  });
  return result;
}
var _mapToArray = mapToArray;
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value2) {
    result[++index] = value2;
  });
  return result;
}
var _setToArray = setToArray;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
var boolTag$1$1 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", mapTag$1$1 = "[object Map]", numberTag$1$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$1$1 = "[object Set]", stringTag$1$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = _Symbol ? _Symbol.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag$1$1:
    case dateTag$2:
    case numberTag$1$1:
      return eq_1(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1$1:
      return object == other + "";
    case mapTag$1$1:
      var convert = _mapToArray;
    case setTag$1$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag;
function arrayPush(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys;
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value2 = array[index];
    if (predicate(value2, index, array)) {
      result[resIndex++] = value2;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter;
function stubArray() {
  return [];
}
var stubArray_1 = stubArray;
var objectProto$a = Object.prototype;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols;
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}
var _getAllKeys = getAllKeys;
var COMPARE_PARTIAL_FLAG$2 = 1;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2, objProps = _getAllKeys(object), objLength = objProps.length, othProps = _getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects;
var DataView = _getNative(_root, "DataView");
var _DataView = DataView;
var Promise$1 = _getNative(_root, "Promise");
var _Promise = Promise$1;
var Set$1 = _getNative(_root, "Set");
var _Set = Set$1;
var WeakMap = _getNative(_root, "WeakMap");
var _WeakMap = WeakMap;
var mapTag$2 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$2 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = _toSource(_DataView), mapCtorString = _toSource(_Map), promiseCtorString = _toSource(_Promise), setCtorString = _toSource(_Set), weakMapCtorString = _toSource(_WeakMap);
var getTag = _baseGetTag;
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
  getTag = function(value2) {
    var result = _baseGetTag(value2), Ctor = result == objectTag$1 ? value2.constructor : void 0, ctorString = Ctor ? _toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$2;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag;
var COMPARE_PARTIAL_FLAG$3 = 1;
var argsTag$2 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$2 = "[object Object]";
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object), othIsArr = isArray_1(other), objTag = objIsArr ? arrayTag$1 : _getTag(object), othTag = othIsArr ? arrayTag$1 : _getTag(other);
  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
  var objIsObj = objTag == objectTag$2, othIsObj = othTag == objectTag$2, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$9.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep;
function baseIsEqual(value2, other, bitmask, customizer, stack) {
  if (value2 === other) {
    return true;
  }
  if (value2 == null || other == null || !isObjectLike_1(value2) && !isObjectLike_1(other)) {
    return value2 !== value2 && other !== other;
  }
  return _baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
}
var _baseIsEqual = baseIsEqual;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data9 = matchData[index];
    if (noCustomizer && data9[2] ? data9[1] !== object[data9[0]] : !(data9[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data9 = matchData[index];
    var key = data9[0], objValue = object[key], srcValue = data9[1];
    if (noCustomizer && data9[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch;
function isStrictComparable(value2) {
  return value2 === value2 && !isObject_1(value2);
}
var _isStrictComparable = isStrictComparable;
function getMatchData(object) {
  var result = keys_1(object), length = result.length;
  while (length--) {
    var key = result[length], value2 = object[key];
    result[length] = [key, value2, _isStrictComparable(value2)];
  }
  return result;
}
var _getMatchData = getMatchData;
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable;
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches;
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn;
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}
var _hasPath = hasPath;
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}
var hasIn_1 = hasIn;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}
var _baseMatchesProperty = baseMatchesProperty;
function identity(value2) {
  return value2;
}
var identity_1 = identity;
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty;
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep;
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}
var property_1 = property;
function baseIteratee(value2) {
  if (typeof value2 == "function") {
    return value2;
  }
  if (value2 == null) {
    return identity_1;
  }
  if (typeof value2 == "object") {
    return isArray_1(value2) ? _baseMatchesProperty(value2[0], value2[1]) : _baseMatches(value2);
  }
  return property_1(value2);
}
var _baseIteratee = baseIteratee;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply;
var nativeMax = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return _apply(func, this, otherArgs);
  };
}
var _overRest = overRest;
function constant(value2) {
  return function() {
    return value2;
  };
}
var constant_1 = constant;
var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
  return _defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_1(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count3 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count3 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count3 = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut;
var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;
function baseRest(func, start2) {
  return _setToString(_overRest(func, start2, identity_1), func + "");
}
var _baseRest = baseRest;
function isIterateeCall(value2, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_1(object) && _isIndex(index, object.length) : type == "string" && index in object) {
    return eq_1(object[index], value2);
  }
  return false;
}
var _isIterateeCall = isIterateeCall;
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$a.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn;
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}
var keysIn_1 = keysIn;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var defaults = _baseRest(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn_1(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value2 = object[key];
      if (value2 === void 0 || eq_1(value2, objectProto$e[key]) && !hasOwnProperty$b.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
function assignMergeValue(object, key, value2) {
  if (value2 !== void 0 && !eq_1(object[key], value2) || value2 === void 0 && !(key in object)) {
    _baseAssignValue(object, key, value2);
  }
}
var _assignMergeValue = assignMergeValue;
var _cloneBuffer = createCommonjsModule(function(module, exports) {
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? _root.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer;
});
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer;
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray;
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate;
var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;
function initCloneObject(object) {
  return typeof object.constructor == "function" && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject;
var objectTag$3 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$f = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject(value2) {
  if (!isObjectLike_1(value2) || _baseGetTag(value2) != objectTag$3) {
    return false;
  }
  var proto = _getPrototype(value2);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$c.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet;
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject;
function toPlainObject(value2) {
  return _copyObject(value2, keysIn_1(value2));
}
var toPlainObject_1 = toPlainObject;
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key), srcValue = _safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_1(srcValue), isBuff = !isArr && isBuffer_1(srcValue), isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      } else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep;
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack());
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}
var _baseMerge = baseMerge;
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject_1(objValue) && isObject_1(srcValue)) {
    stack.set(srcValue, objValue);
    _baseMerge(objValue, srcValue, void 0, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var _customDefaultsMerge = customDefaultsMerge;
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner;
var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
  _baseMerge(object, source, srcIndex, customizer);
});
var mergeWith_1 = mergeWith;
var defaultsDeep = _baseRest(function(args) {
  args.push(void 0, _customDefaultsMerge);
  return _apply(mergeWith_1, void 0, args);
});
var defaultsDeep_1 = defaultsDeep;
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value2 = _baseGet(object, path);
    if (predicate(value2, path)) {
      _baseSet(result, _castPath(path, object), value2);
    }
  }
  return result;
}
var _basePickBy = basePickBy;
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value2, path) {
    return hasIn_1(object, path);
  });
}
var _basePick = basePick;
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : void 0;
function isFlattenable(value2) {
  return isArray_1(value2) || isArguments_1(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
}
var _isFlattenable = isFlattenable;
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value2 = array[index];
    if (depth > 0 && predicate(value2)) {
      if (depth > 1) {
        baseFlatten(value2, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value2);
      }
    } else if (!isStrict) {
      result[result.length] = value2;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten;
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}
var flatten_1 = flatten;
function flatRest(func) {
  return _setToString(_overRest(func, void 0, flatten_1), func + "");
}
var _flatRest = flatRest;
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});
var pick_1 = pick;
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach;
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}
var _baseAssign = baseAssign;
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}
var _baseAssignIn = baseAssignIn;
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}
var _copySymbols = copySymbols;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn;
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}
var _copySymbolsIn = copySymbolsIn;
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn;
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$d.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray;
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView;
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp;
var symbolProto$2 = _Symbol ? _Symbol.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol;
var boolTag$2 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$3:
      return _cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return _cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return _cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag;
var mapTag$4 = "[object Map]";
function baseIsMap(value2) {
  return isObjectLike_1(value2) && _getTag(value2) == mapTag$4;
}
var _baseIsMap = baseIsMap;
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
var isMap_1 = isMap;
var setTag$4 = "[object Set]";
function baseIsSet(value2) {
  return isObjectLike_1(value2) && _getTag(value2) == setTag$4;
}
var _baseIsSet = baseIsSet;
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
var isSet_1 = isSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$2 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] = cloneableTags[boolTag$3] = cloneableTags[dateTag$4] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] = cloneableTags[numberTag$3] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$3] = cloneableTags[setTag$5] = cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
function baseClone(value2, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value2, key, object, stack) : customizer(value2);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_1(value2)) {
    return value2;
  }
  var isArr = isArray_1(value2);
  if (isArr) {
    result = _initCloneArray(value2);
    if (!isDeep) {
      return _copyArray(value2, result);
    }
  } else {
    var tag = _getTag(value2), isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer_1(value2)) {
      return _cloneBuffer(value2, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject(value2);
      if (!isDeep) {
        return isFlat ? _copySymbolsIn(value2, _baseAssignIn(result, value2)) : _copySymbols(value2, _baseAssign(result, value2));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value2 : {};
      }
      result = _initCloneByTag(value2, tag, isDeep);
    }
  }
  stack || (stack = new _Stack());
  var stacked = stack.get(value2);
  if (stacked) {
    return stacked;
  }
  stack.set(value2, result);
  if (isSet_1(value2)) {
    value2.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value2, stack));
    });
  } else if (isMap_1(value2)) {
    value2.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn_1 : keys_1;
  var props = isArr ? void 0 : keysFunc(value2);
  _arrayEach(props || value2, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value2[key2];
    }
    _assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
  });
  return result;
}
var _baseClone = baseClone;
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last;
function baseSlice(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
var _baseSlice = baseSlice;
function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}
var _parent = parent;
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}
var _baseUnset = baseUnset;
function customOmitClone(value2) {
  return isPlainObject_1(value2) ? void 0 : value2;
}
var _customOmitClone = customOmitClone;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var omit = _flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = _arrayMap(paths, function(path) {
    path = _castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _copyObject(object, _getAllKeysIn(object), result);
  if (isDeep) {
    result = _baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty$e.call(object, key);
}
var _baseHas = baseHas;
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}
var has_1 = has;
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach;
var baseEach = _createBaseEach(_baseForOwn);
var _baseEach = baseEach;
function baseSome(collection, predicate) {
  var result;
  _baseEach(collection, function(value2, index, collection2) {
    result = predicate(value2, index, collection2);
    return !result;
  });
  return !!result;
}
var _baseSome = baseSome;
function some(collection, predicate, guard) {
  var func = isArray_1(collection) ? _arraySome : _baseSome;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, _baseIteratee(predicate));
}
var some_1 = some;
const getType = (value2) => Object.prototype.toString.call(value2).slice(8, -1);
const isDate$1 = (value2) => isDate_1(value2) && !isNaN(value2.getTime());
const isObject$1 = (value2) => getType(value2) === "Object";
const has$1 = has_1;
const hasAny = (obj, props) => some_1(props, (p) => has_1(obj, p));
const some$1 = some_1;
const pad = (val, len, char = "0") => {
  val = val !== null && val !== void 0 ? String(val) : "";
  len = len || 2;
  while (val.length < len) {
    val = `${char}${val}`;
  }
  return val;
};
const mergeEvents = (...args) => {
  const result = {};
  args.forEach((e) => Object.entries(e).forEach(([key, value2]) => {
    if (!result[key]) {
      result[key] = value2;
    } else if (isArrayLikeObject_1(result[key])) {
      result[key].push(value2);
    } else {
      result[key] = [result[key], value2];
    }
  }));
  return result;
};
const pageIsValid = (page) => !!(page && page.month && page.year);
const pageIsBeforePage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month < comparePage.month;
  return page.year < comparePage.year;
};
const pageIsAfterPage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month > comparePage.month;
  return page.year > comparePage.year;
};
const pageIsBetweenPages = (page, fromPage2, toPage2) => (page || false) && !pageIsBeforePage(page, fromPage2) && !pageIsAfterPage(page, toPage2);
const pageIsEqualToPage = (aPage, bPage) => {
  if (!aPage && bPage)
    return false;
  if (aPage && !bPage)
    return false;
  if (!aPage && !bPage)
    return true;
  return aPage.month === bPage.month && aPage.year === bPage.year;
};
const addPages = ({ month: month2, year: year3 }, count3) => {
  const incr = count3 > 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(count3); i++) {
    month2 += incr;
    if (month2 > 12) {
      month2 = 1;
      year3++;
    } else if (month2 < 1) {
      month2 = 12;
      year3--;
    }
  }
  return {
    month: month2,
    year: year3
  };
};
const pageRangeToArray = (from, to) => {
  if (!pageIsValid(from) || !pageIsValid(to))
    return [];
  const result = [];
  while (!pageIsAfterPage(from, to)) {
    result.push(from);
    from = addPages(from, 1);
  }
  return result;
};
function datesAreEqual(a2, b) {
  const aIsDate = isDate$1(a2);
  const bIsDate = isDate$1(b);
  if (!aIsDate && !bIsDate)
    return true;
  if (aIsDate !== bIsDate)
    return false;
  return a2.getTime() === b.getTime();
}
const arrayHasItems = (array) => isArrayLikeObject_1(array) && array.length > 0;
const mixinOptionalProps = (source, target, props) => {
  const assigned = [];
  props.forEach((p) => {
    const name2 = p.name || p.toString();
    const mixin = p.mixin;
    const validate = p.validate;
    if (Object.prototype.hasOwnProperty.call(source, name2)) {
      const value2 = validate ? validate(source[name2]) : source[name2];
      target[name2] = mixin && isObject$1(value2) ? __spreadValues(__spreadValues({}, mixin), value2) : value2;
      assigned.push(name2);
    }
  });
  return {
    target,
    assigned: assigned.length ? assigned : null
  };
};
const on = (element, event, handler, opts2) => {
  if (element && event && handler) {
    element.addEventListener(event, handler, opts2);
  }
};
const off = (element, event, handler, opts2) => {
  if (element && event) {
    element.removeEventListener(event, handler, opts2);
  }
};
const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
const onSpaceOrEnter = (event, handler) => {
  if (event.key === " " || event.key === "Enter") {
    handler(event);
    event.preventDefault();
  }
};
const createGuid = () => {
  function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
function hash$2(str) {
  let hashcode = 0;
  let i = 0;
  let chr;
  if (str.length === 0)
    return hashcode;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hashcode = (hashcode << 5) - hashcode + chr;
    hashcode |= 0;
  }
  return hashcode;
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date2 = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date2;
  }
  date2.setDate(date2.getDate() + amount);
  return date2;
}
var numberTag = "[object Number]";
function isNumber(value2) {
  return typeof value2 == "number" || isObjectLike_1(value2) && _baseGetTag(value2) == numberTag;
}
var isNumber_1 = isNumber;
var stringTag = "[object String]";
function isString(value2) {
  return typeof value2 == "string" || !isArray_1(value2) && isObjectLike_1(value2) && _baseGetTag(value2) == stringTag;
}
var isString_1 = isString;
function isUndefined(value2) {
  return value2 === void 0;
}
var isUndefined_1 = isUndefined;
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var _baseClamp = baseClamp;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value2) {
  if (typeof value2 == "number") {
    return value2;
  }
  if (isSymbol_1(value2)) {
    return NAN;
  }
  if (isObject_1(value2)) {
    var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
    value2 = isObject_1(other) ? other + "" : other;
  }
  if (typeof value2 != "string") {
    return value2 === 0 ? value2 : +value2;
  }
  value2 = value2.replace(reTrim, "");
  var isBinary = reIsBinary.test(value2);
  return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
}
var toNumber_1 = toNumber;
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber_1(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber_1(lower);
    lower = lower === lower ? lower : 0;
  }
  return _baseClamp(toNumber_1(number), lower, upper);
}
var clamp_1 = clamp;
function set(object, path, value2) {
  return object == null ? object : _baseSet(object, path, value2);
}
var set_1 = set;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee);
  _baseForOwn(object, function(value2, key, object2) {
    _baseAssignValue(result, key, iteratee(value2, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
function baseToPairs(object, props) {
  return _arrayMap(props, function(key) {
    return [key, object[key]];
  });
}
var _baseToPairs = baseToPairs;
function setToPairs(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value2) {
    result[++index] = [value2, value2];
  });
  return result;
}
var _setToPairs = setToPairs;
var mapTag = "[object Map]", setTag = "[object Set]";
function createToPairs(keysFunc) {
  return function(object) {
    var tag = _getTag(object);
    if (tag == mapTag) {
      return _mapToArray(object);
    }
    if (tag == setTag) {
      return _setToPairs(object);
    }
    return _baseToPairs(object, keysFunc(object));
  };
}
var _createToPairs = createToPairs;
var toPairs = _createToPairs(keys_1);
var toPairs_1 = toPairs;
var childMixin = {
  inject: ["sharedState"],
  computed: {
    masks: function masks() {
      return this.sharedState.masks;
    },
    theme: function theme() {
      return this.sharedState.theme;
    },
    locale: function locale() {
      return this.sharedState.locale;
    },
    dayPopoverId: function dayPopoverId() {
      return this.sharedState.dayPopoverId;
    }
  },
  methods: {
    format: function format(date2, mask) {
      return this.locale.format(date2, mask);
    },
    pageForDate: function pageForDate(date2) {
      return this.locale.getDateParts(this.locale.normalizeDate(date2));
    }
  }
};
var targetProps = ["base", "start", "end", "startEnd"];
var displayProps = ["class", "contentClass", "style", "contentStyle", "color", "fillMode"];
var defConfig = {
  color: "blue",
  isDark: false,
  highlight: {
    base: {
      fillMode: "light"
    },
    start: {
      fillMode: "solid"
    },
    end: {
      fillMode: "solid"
    }
  },
  dot: {
    base: {
      fillMode: "solid"
    },
    start: {
      fillMode: "solid"
    },
    end: {
      fillMode: "solid"
    }
  },
  bar: {
    base: {
      fillMode: "solid"
    },
    start: {
      fillMode: "solid"
    },
    end: {
      fillMode: "solid"
    }
  },
  content: {
    base: {},
    start: {},
    end: {}
  }
};
var Theme = /* @__PURE__ */ function() {
  function Theme2(config) {
    _classCallCheck(this, Theme2);
    Object.assign(this, defConfig, config);
  }
  _createClass(Theme2, [{
    key: "normalizeAttr",
    value: function normalizeAttr(_ref) {
      var config = _ref.config, type = _ref.type;
      var rootColor = this.color;
      var root2 = {};
      var normAttr = this[type];
      if (config === true || isString_1(config)) {
        rootColor = isString_1(config) ? config : rootColor;
        root2 = _objectSpread2({}, normAttr);
      } else if (isObject$1(config)) {
        if (hasAny(config, targetProps)) {
          root2 = _objectSpread2({}, config);
        } else {
          root2 = {
            base: _objectSpread2({}, config),
            start: _objectSpread2({}, config),
            end: _objectSpread2({}, config)
          };
        }
      } else {
        return null;
      }
      defaults_1(root2, {
        start: root2.startEnd,
        end: root2.startEnd
      }, normAttr);
      toPairs_1(root2).forEach(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), targetType = _ref3[0], targetConfig = _ref3[1];
        var targetColor = rootColor;
        if (targetConfig === true || isString_1(targetConfig)) {
          targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
          root2[targetType] = {
            color: targetColor
          };
        } else if (isObject$1(targetConfig)) {
          if (hasAny(targetConfig, displayProps)) {
            root2[targetType] = _objectSpread2({}, targetConfig);
          } else {
            root2[targetType] = {};
          }
        }
        if (!has$1(root2, "".concat(targetType, ".color"))) {
          set_1(root2, "".concat(targetType, ".color"), targetColor);
        }
      });
      return root2;
    }
  }, {
    key: "normalizeHighlight",
    value: function normalizeHighlight(config) {
      var _this = this;
      var highlight = this.normalizeAttr({
        config,
        type: "highlight"
      });
      toPairs_1(highlight).forEach(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2);
        _ref5[0];
        var targetConfig = _ref5[1];
        var c = defaults_1(targetConfig, {
          isDark: _this.isDark,
          color: _this.color
        });
        targetConfig.style = _objectSpread2(_objectSpread2({}, _this.getHighlightBgStyle(c)), targetConfig.style);
        targetConfig.contentStyle = _objectSpread2(_objectSpread2({}, _this.getHighlightContentStyle(c)), targetConfig.contentStyle);
      });
      return highlight;
    }
  }, {
    key: "getHighlightBgStyle",
    value: function getHighlightBgStyle(_ref6) {
      var fillMode = _ref6.fillMode, color = _ref6.color, isDark = _ref6.isDark;
      switch (fillMode) {
        case "outline":
        case "none":
          return {
            backgroundColor: isDark ? "var(--gray-900)" : "var(--white)",
            border: "2px solid",
            borderColor: isDark ? "var(--".concat(color, "-200)") : "var(--".concat(color, "-700)"),
            borderRadius: "var(--rounded-full)"
          };
        case "light":
          return {
            backgroundColor: isDark ? "var(--".concat(color, "-800)") : "var(--".concat(color, "-200)"),
            opacity: isDark ? 0.75 : 1,
            borderRadius: "var(--rounded-full)"
          };
        case "solid":
          return {
            backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)"),
            borderRadius: "var(--rounded-full)"
          };
        default:
          return {
            borderRadius: "var(--rounded-full)"
          };
      }
    }
  }, {
    key: "getHighlightContentStyle",
    value: function getHighlightContentStyle(_ref7) {
      var fillMode = _ref7.fillMode, color = _ref7.color, isDark = _ref7.isDark;
      switch (fillMode) {
        case "outline":
        case "none":
          return {
            fontWeight: "var(--font-bold)",
            color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
          };
        case "light":
          return {
            fontWeight: "var(--font-bold)",
            color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
          };
        case "solid":
          return {
            fontWeight: "var(--font-bold)",
            color: "var(--white)"
          };
        default:
          return "";
      }
    }
  }, {
    key: "bgAccentHigh",
    value: function bgAccentHigh(_ref8) {
      var color = _ref8.color, isDark = _ref8.isDark;
      return {
        backgroundColor: isDark ? "var(--".concat(color, "-500)") : "var(--".concat(color, "-600)")
      };
    }
  }, {
    key: "contentAccent",
    value: function contentAccent(_ref9) {
      var color = _ref9.color, isDark = _ref9.isDark;
      if (!color)
        return null;
      return {
        fontWeight: "var(--font-bold)",
        color: isDark ? "var(--".concat(color, "-100)") : "var(--".concat(color, "-900)")
      };
    }
  }, {
    key: "normalizeDot",
    value: function normalizeDot(config) {
      return this.normalizeNonHighlight("dot", config, this.bgAccentHigh);
    }
  }, {
    key: "normalizeBar",
    value: function normalizeBar(config) {
      return this.normalizeNonHighlight("bar", config, this.bgAccentHigh);
    }
  }, {
    key: "normalizeContent",
    value: function normalizeContent(config) {
      return this.normalizeNonHighlight("content", config, this.contentAccent);
    }
  }, {
    key: "normalizeNonHighlight",
    value: function normalizeNonHighlight(type, config, styleFn) {
      var _this2 = this;
      var attr = this.normalizeAttr({
        type,
        config
      });
      toPairs_1(attr).forEach(function(_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2);
        _ref11[0];
        var targetConfig = _ref11[1];
        defaults_1(targetConfig, {
          isDark: _this2.isDark,
          color: _this2.color
        });
        targetConfig.style = _objectSpread2(_objectSpread2({}, styleFn(targetConfig)), targetConfig.style);
      });
      return attr;
    }
  }]);
  return Theme2;
}();
var MILLISECONDS_IN_MINUTE = 6e4;
function getDateMillisecondsPart(date2) {
  return date2.getTime() % MILLISECONDS_IN_MINUTE;
}
function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date2 = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date2.getTimezoneOffset());
  date2.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date2)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date2);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}
function tzTokenizeDate(date2, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date2) : hackyOffset(dtf, date2);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date2) {
  var formatted = dtf.formatToParts(date2);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type];
    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10);
    }
  }
  return filled;
}
function hackyOffset(dtf, date2) {
  var formatted = dtf.format(date2).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function tzParseTimezone(timezoneString, date2) {
  var token2;
  var absoluteOffset;
  token2 = patterns.timezoneZ.exec(timezoneString);
  if (token2) {
    return 0;
  }
  var hours2;
  token2 = patterns.timezoneHH.exec(timezoneString);
  if (token2) {
    hours2 = parseInt(token2[2], 10);
    if (!validateTimezone()) {
      return NaN;
    }
    absoluteOffset = hours2 * MILLISECONDS_IN_HOUR;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns.timezoneHHMM.exec(timezoneString);
  if (token2) {
    hours2 = parseInt(token2[2], 10);
    var minutes2 = parseInt(token2[3], 10);
    if (!validateTimezone(hours2, minutes2)) {
      return NaN;
    }
    absoluteOffset = hours2 * MILLISECONDS_IN_HOUR + minutes2 * MILLISECONDS_IN_MINUTE$1;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns.timezoneIANA.exec(timezoneString);
  if (token2) {
    var tokens = tzTokenizeDate(date2, timezoneString);
    var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3], tokens[4], tokens[5]);
    var timestampWithMsZeroed = date2.getTime() - date2.getTime() % 1e3;
    return -(asUTC - timestampWithMsZeroed);
  }
  return 0;
}
function validateTimezone(hours2, minutes2) {
  if (minutes2 != null && (minutes2 < 0 || minutes2 > 59)) {
    return false;
  }
  return true;
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$2 = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns$1 = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function toDate$1(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year3 = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date2 = parseDate(restDateString, year3);
  if (isNaN(date2)) {
    return new Date(NaN);
  }
  if (date2) {
    var timestamp = date2.getTime();
    var time = 0;
    var offset2;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return new Date(NaN);
      }
    }
    if (dateStrings.timezone || options.timeZone) {
      offset2 = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset2)) {
        return new Date(NaN);
      }
      offset2 = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time + offset2));
      if (isNaN(offset2)) {
        return new Date(NaN);
      }
    } else {
      offset2 = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset2 = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset2));
    }
    return new Date(timestamp + time + offset2);
  } else {
    return new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns$1.dateTimeDelimeter);
  var timeString;
  if (patterns$1.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    dateStrings.timezone = array[2];
    if (patterns$1.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns$1.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token2 = patterns$1.timezone.exec(timeString);
    if (token2) {
      dateStrings.time = timeString.replace(token2[1], "");
      dateStrings.timezone = token2[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns$1.YYY[additionalDigits];
  var patternYYYYY = patterns$1.YYYYY[additionalDigits];
  var token2;
  token2 = patterns$1.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token2) {
    var yearString = token2[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token2 = patterns$1.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token2) {
    var centuryString = token2[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year3) {
  if (year3 === null) {
    return null;
  }
  var token2;
  var date2;
  var month2;
  var week;
  if (dateString.length === 0) {
    date2 = new Date(0);
    date2.setUTCFullYear(year3);
    return date2;
  }
  token2 = patterns$1.MM.exec(dateString);
  if (token2) {
    date2 = new Date(0);
    month2 = parseInt(token2[1], 10) - 1;
    if (!validateDate(year3, month2)) {
      return new Date(NaN);
    }
    date2.setUTCFullYear(year3, month2);
    return date2;
  }
  token2 = patterns$1.DDD.exec(dateString);
  if (token2) {
    date2 = new Date(0);
    var dayOfYear = parseInt(token2[1], 10);
    if (!validateDayOfYearDate(year3, dayOfYear)) {
      return new Date(NaN);
    }
    date2.setUTCFullYear(year3, 0, dayOfYear);
    return date2;
  }
  token2 = patterns$1.MMDD.exec(dateString);
  if (token2) {
    date2 = new Date(0);
    month2 = parseInt(token2[1], 10) - 1;
    var day = parseInt(token2[2], 10);
    if (!validateDate(year3, month2, day)) {
      return new Date(NaN);
    }
    date2.setUTCFullYear(year3, month2, day);
    return date2;
  }
  token2 = patterns$1.Www.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    if (!validateWeekDate(year3, week)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year3, week);
  }
  token2 = patterns$1.WwwD.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    var dayOfWeek = parseInt(token2[2], 10) - 1;
    if (!validateWeekDate(year3, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year3, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token2;
  var hours2;
  var minutes2;
  token2 = patterns$1.HH.exec(timeString);
  if (token2) {
    hours2 = parseFloat(token2[1].replace(",", "."));
    if (!validateTime(hours2)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR$1;
  }
  token2 = patterns$1.HHMM.exec(timeString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    minutes2 = parseFloat(token2[2].replace(",", "."));
    if (!validateTime(hours2, minutes2)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR$1 + minutes2 * MILLISECONDS_IN_MINUTE$2;
  }
  token2 = patterns$1.HHMMSS.exec(timeString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    minutes2 = parseInt(token2[2], 10);
    var seconds = parseFloat(token2[3].replace(",", "."));
    if (!validateTime(hours2, minutes2, seconds)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR$1 + minutes2 * MILLISECONDS_IN_MINUTE$2 + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date2 = new Date(0);
  date2.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date2.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date2.setUTCDate(date2.getUTCDate() + diff);
  return date2;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year3) {
  return year3 % 400 === 0 || year3 % 4 === 0 && year3 % 100 !== 0;
}
function validateDate(year3, month2, date2) {
  if (month2 < 0 || month2 > 11) {
    return false;
  }
  if (date2 != null) {
    if (date2 < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year3);
    if (isLeapYear && date2 > DAYS_IN_MONTH_LEAP_YEAR[month2]) {
      return false;
    }
    if (!isLeapYear && date2 > DAYS_IN_MONTH[month2]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year3, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year3);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year3, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours2, minutes2, seconds) {
  if (hours2 != null && (hours2 < 0 || hours2 >= 25)) {
    return false;
  }
  if (minutes2 != null && (minutes2 < 0 || minutes2 >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date2 = toDate(dirtyDate);
  var day = date2.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date2.setDate(date2.getDate() - diff);
  date2.setHours(0, 0, 0, 0);
  return date2;
}
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var year3 = date2.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year3 + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year3, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date2.getTime() >= startOfNextYear.getTime()) {
    return year3 + 1;
  } else if (date2.getTime() >= startOfThisYear.getTime()) {
    return year3;
  } else {
    return year3 - 1;
  }
}
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year3 = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year3, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date2 = startOfISOWeek(fourthOfJanuary);
  return date2;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var diff = startOfISOWeek(date2).getTime() - startOfISOWeekYear(date2).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function getWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var year3 = date2.getFullYear();
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year3 + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year3, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);
  if (date2.getTime() >= startOfNextYear.getTime()) {
    return year3 + 1;
  } else if (date2.getTime() >= startOfThisYear.getTime()) {
    return year3;
  } else {
    return year3 - 1;
  }
}
function startOfWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year3 = getWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year3, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date2 = startOfWeek(firstWeek, dirtyOptions);
  return date2;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var diff = startOfWeek(date2, options).getTime() - startOfWeekYear(date2, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var MILLISECONDS_IN_WEEK$2 = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  requiredArgs(2, arguments);
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2);
}
function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var month2 = date2.getMonth();
  date2.setFullYear(date2.getFullYear(), month2 + 1, 0);
  date2.setHours(0, 0, 0, 0);
  return date2;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
  return date2;
}
function getWeeksInMonth(date2, options) {
  requiredArgs(1, arguments);
  return differenceInCalendarWeeks(lastDayOfMonth(date2), startOfMonth(date2), options) + 1;
}
var millisecondsPerDay = 24 * 60 * 60 * 1e3;
var DateInfo = /* @__PURE__ */ function() {
  function DateInfo2(config) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$order = _ref.order, order2 = _ref$order === void 0 ? 0 : _ref$order, locale2 = _ref.locale, isFullDay = _ref.isFullDay;
    _classCallCheck(this, DateInfo2);
    this.isDateInfo = true;
    this.order = order2;
    this.locale = locale2 instanceof Locale ? locale2 : new Locale(locale2);
    this.firstDayOfWeek = this.locale.firstDayOfWeek;
    if (!isObject$1(config)) {
      var date2 = this.locale.normalizeDate(config);
      if (isFullDay) {
        config = {
          start: date2,
          end: date2
        };
      } else {
        config = {
          startOn: date2,
          endOn: date2
        };
      }
    }
    var start2 = null;
    var end2 = null;
    if (config.start) {
      start2 = this.locale.normalizeDate(config.start, _objectSpread2(_objectSpread2({}, this.opts), {}, {
        time: "00:00:00"
      }));
    } else if (config.startOn) {
      start2 = this.locale.normalizeDate(config.startOn, this.opts);
    }
    if (config.end) {
      end2 = this.locale.normalizeDate(config.end, _objectSpread2(_objectSpread2({}, this.opts), {}, {
        time: "23:59:59"
      }));
    } else if (config.endOn) {
      end2 = this.locale.normalizeDate(config.endOn, this.opts);
    }
    if (start2 && end2 && start2 > end2) {
      var temp = start2;
      start2 = end2;
      end2 = temp;
    } else if (start2 && config.span >= 1) {
      end2 = addDays(start2, config.span - 1);
    }
    this.start = start2;
    this.startTime = start2 ? start2.getTime() : NaN;
    this.end = end2;
    this.endTime = end2 ? end2.getTime() : NaN;
    this.isDate = this.startTime && this.startTime === this.endTime;
    this.isRange = !this.isDate;
    var andOpt = mixinOptionalProps(config, {}, DateInfo2.patternProps);
    if (andOpt.assigned) {
      this.on = {
        and: andOpt.target
      };
    }
    if (config.on) {
      var or = (isArrayLikeObject_1(config.on) ? config.on : [config.on]).map(function(o) {
        if (isFunction_1(o))
          return o;
        var opt = mixinOptionalProps(o, {}, DateInfo2.patternProps);
        return opt.assigned ? opt.target : null;
      }).filter(function(o) {
        return o;
      });
      if (or.length)
        this.on = _objectSpread2(_objectSpread2({}, this.on), {}, {
          or
        });
    }
    this.isComplex = !!this.on;
  }
  _createClass(DateInfo2, [{
    key: "toDateInfo",
    value: function toDateInfo(date2) {
      return date2.isDateInfo ? date2 : new DateInfo2(date2, this.opts);
    }
  }, {
    key: "startOfWeek",
    value: function startOfWeek2(date2) {
      var day = date2.getDay() + 1;
      var daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
      return addDays(date2, daysToAdd);
    }
  }, {
    key: "diffInDays",
    value: function diffInDays(d1, d2) {
      return Math.round((d2 - d1) / millisecondsPerDay);
    }
  }, {
    key: "diffInWeeks",
    value: function diffInWeeks(d1, d2) {
      return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
    }
  }, {
    key: "diffInYears",
    value: function diffInYears(d1, d2) {
      return d2.getUTCFullYear() - d1.getUTCFullYear();
    }
  }, {
    key: "diffInMonths",
    value: function diffInMonths(d1, d2) {
      return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
    }
  }, {
    key: "iterateDatesInRange",
    value: function iterateDatesInRange(_ref2, fn2) {
      var start2 = _ref2.start, end2 = _ref2.end;
      if (!start2 || !end2 || !isFunction_1(fn2))
        return null;
      start2 = this.locale.normalizeDate(start2, _objectSpread2(_objectSpread2({}, this.opts), {}, {
        time: "00:00:00"
      }));
      var state2 = {
        i: 0,
        date: start2,
        day: this.locale.getDateParts(start2),
        finished: false
      };
      var result = null;
      for (; !state2.finished && state2.date <= end2; state2.i++) {
        result = fn2(state2);
        state2.date = addDays(state2.date, 1);
        state2.day = this.locale.getDateParts(state2.date);
      }
      return result;
    }
  }, {
    key: "shallowIntersectingRange",
    value: function shallowIntersectingRange(other) {
      return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
    }
  }, {
    key: "rangeShallowIntersectingRange",
    value: function rangeShallowIntersectingRange(date1, date2) {
      if (!this.dateShallowIntersectsDate(date1, date2)) {
        return null;
      }
      var thisRange = date1.toRange();
      var otherRange = date2.toRange();
      var start2 = null;
      var end2 = null;
      if (thisRange.start) {
        if (!otherRange.start) {
          start2 = thisRange.start;
        } else {
          start2 = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
        }
      } else if (otherRange.start) {
        start2 = otherRange.start;
      }
      if (thisRange.end) {
        if (!otherRange.end) {
          end2 = thisRange.end;
        } else {
          end2 = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
        }
      } else if (otherRange.end) {
        end2 = otherRange.end;
      }
      return {
        start: start2,
        end: end2
      };
    }
  }, {
    key: "intersectsDate",
    value: function intersectsDate(other) {
      var _this = this;
      var date2 = this.toDateInfo(other);
      if (!this.shallowIntersectsDate(date2))
        return null;
      if (!this.on)
        return this;
      var range = this.rangeShallowIntersectingRange(this, date2);
      var result = false;
      this.iterateDatesInRange(range, function(state2) {
        if (_this.matchesDay(state2.day)) {
          result = result || date2.matchesDay(state2.day);
          state2.finished = result;
        }
      });
      return result;
    }
  }, {
    key: "shallowIntersectsDate",
    value: function shallowIntersectsDate(other) {
      return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
    }
  }, {
    key: "dateShallowIntersectsDate",
    value: function dateShallowIntersectsDate(date1, date2) {
      if (date1.isDate) {
        return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
      }
      if (date2.isDate) {
        return this.dateShallowIncludesDate(date1, date2);
      }
      if (date1.start && date2.end && date1.start > date2.end) {
        return false;
      }
      if (date1.end && date2.start && date1.end < date2.start) {
        return false;
      }
      return true;
    }
  }, {
    key: "includesDate",
    value: function includesDate(other) {
      var _this2 = this;
      var date2 = this.toDateInfo(other);
      if (!this.shallowIncludesDate(date2)) {
        return false;
      }
      if (!this.on) {
        return true;
      }
      var range = this.rangeShallowIntersectingRange(this, date2);
      var result = true;
      this.iterateDatesInRange(range, function(state2) {
        if (_this2.matchesDay(state2.day)) {
          result = result && date2.matchesDay(state2.day);
          state2.finished = !result;
        }
      });
      return result;
    }
  }, {
    key: "shallowIncludesDate",
    value: function shallowIncludesDate(other) {
      return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo2(other, this.opts));
    }
  }, {
    key: "dateShallowIncludesDate",
    value: function dateShallowIncludesDate(date1, date2) {
      if (date1.isDate) {
        if (date2.isDate) {
          return date1.startTime === date2.startTime;
        }
        if (!date2.startTime || !date2.endTime) {
          return false;
        }
        return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
      }
      if (date2.isDate) {
        if (date1.start && date2.start < date1.start) {
          return false;
        }
        if (date1.end && date2.start > date1.end) {
          return false;
        }
        return true;
      }
      if (date1.start && (!date2.start || date2.start < date1.start)) {
        return false;
      }
      if (date1.end && (!date2.end || date2.end > date1.end)) {
        return false;
      }
      return true;
    }
  }, {
    key: "intersectsDay",
    value: function intersectsDay(day) {
      if (!this.shallowIntersectsDate(day.range))
        return null;
      return this.matchesDay(day) ? this : null;
    }
  }, {
    key: "matchesDay",
    value: function matchesDay(day) {
      var _this3 = this;
      if (!this.on)
        return true;
      if (this.on.and && !DateInfo2.testConfig(this.on.and, day, this)) {
        return false;
      }
      if (this.on.or && !this.on.or.some(function(or) {
        return DateInfo2.testConfig(or, day, _this3);
      })) {
        return false;
      }
      return true;
    }
  }, {
    key: "toRange",
    value: function toRange() {
      return new DateInfo2({
        start: this.start,
        end: this.end
      }, this.opts);
    }
  }, {
    key: "compare",
    value: function compare(other) {
      if (this.order !== other.order)
        return this.order - other.order;
      if (this.isDate !== other.isDate)
        return this.isDate ? 1 : -1;
      if (this.isDate)
        return 0;
      var diff = this.start - other.start;
      return diff !== 0 ? diff : this.end - other.end;
    }
  }, {
    key: "opts",
    get: function get2() {
      return {
        order: this.order,
        locale: this.locale
      };
    }
  }], [{
    key: "testConfig",
    value: function testConfig(config, day, dateInfo) {
      if (isFunction_1(config))
        return config(day);
      if (isObject$1(config)) {
        return Object.keys(config).every(function(k) {
          return DateInfo2.patterns[k].test(day, config[k], dateInfo);
        });
      }
      return null;
    }
  }, {
    key: "patterns",
    get: function get2() {
      return {
        dailyInterval: {
          test: function test(day, interval, di) {
            return di.diffInDays(di.start || new Date(), day.date) % interval === 0;
          }
        },
        weeklyInterval: {
          test: function test(day, interval, di) {
            return di.diffInWeeks(di.start || new Date(), day.date) % interval === 0;
          }
        },
        monthlyInterval: {
          test: function test(day, interval, di) {
            return di.diffInMonths(di.start || new Date(), day.date) % interval === 0;
          }
        },
        yearlyInterval: {
          test: function test() {
            return function(day, interval, di) {
              return di.diffInYears(di.start || new Date(), day.date) % interval === 0;
            };
          }
        },
        days: {
          validate: function validate(days) {
            return isArrayLikeObject_1(days) ? days : [parseInt(days, 10)];
          },
          test: function test(day, days) {
            return days.includes(day.day) || days.includes(-day.dayFromEnd);
          }
        },
        weekdays: {
          validate: function validate(weekdays2) {
            return isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)];
          },
          test: function test(day, weekdays2) {
            return weekdays2.includes(day.weekday);
          }
        },
        ordinalWeekdays: {
          validate: function validate(ordinalWeekdays) {
            return Object.keys(ordinalWeekdays).reduce(function(obj, ck) {
              var weekdays2 = ordinalWeekdays[ck];
              if (!weekdays2)
                return obj;
              obj[ck] = isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)];
              return obj;
            }, {});
          },
          test: function test(day, ordinalWeekdays) {
            return Object.keys(ordinalWeekdays).map(function(k) {
              return parseInt(k, 10);
            }).find(function(k) {
              return ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd);
            });
          }
        },
        weekends: {
          validate: function validate(config) {
            return config;
          },
          test: function test(day) {
            return day.weekday === 1 || day.weekday === 7;
          }
        },
        workweek: {
          validate: function validate(config) {
            return config;
          },
          test: function test(day) {
            return day.weekday >= 2 && day.weekday <= 6;
          }
        },
        weeks: {
          validate: function validate(weeks) {
            return isArrayLikeObject_1(weeks) ? weeks : [parseInt(weeks, 10)];
          },
          test: function test(day, weeks) {
            return weeks.includes(day.week) || weeks.includes(-day.weekFromEnd);
          }
        },
        months: {
          validate: function validate(months) {
            return isArrayLikeObject_1(months) ? months : [parseInt(months, 10)];
          },
          test: function test(day, months) {
            return months.includes(day.month);
          }
        },
        years: {
          validate: function validate(years) {
            return isArrayLikeObject_1(years) ? years : [parseInt(years, 10)];
          },
          test: function test(day, years) {
            return years.includes(day.year);
          }
        }
      };
    }
  }, {
    key: "patternProps",
    get: function get2() {
      return Object.keys(DateInfo2.patterns).map(function(k) {
        return {
          name: k,
          validate: DateInfo2.patterns[k].validate
        };
      });
    }
  }]);
  return DateInfo2;
}();
const locales = {
  ar: { dow: 7, L: "D/\u200FM/\u200FYYYY" },
  bg: { dow: 2, L: "D.MM.YYYY" },
  ca: { dow: 2, L: "DD/MM/YYYY" },
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  hr: { dow: 2, L: "DD.MM.YYYY" },
  cs: { dow: 2, L: "DD.MM.YYYY" },
  da: { dow: 2, L: "DD.MM.YYYY" },
  nl: { dow: 2, L: "DD-MM-YYYY" },
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  eo: { dow: 2, L: "YYYY-MM-DD" },
  et: { dow: 2, L: "DD.MM.YYYY" },
  fi: { dow: 2, L: "DD.MM.YYYY" },
  fr: { dow: 2, L: "DD/MM/YYYY" },
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  de: { dow: 2, L: "DD.MM.YYYY" },
  he: { dow: 1, L: "DD.MM.YYYY" },
  id: { dow: 2, L: "DD/MM/YYYY" },
  it: { dow: 2, L: "DD/MM/YYYY" },
  ja: { dow: 1, L: "YYYY\u5E74M\u6708D\u65E5" },
  ko: { dow: 1, L: "YYYY.MM.DD" },
  lv: { dow: 2, L: "DD.MM.YYYY" },
  lt: { dow: 2, L: "DD.MM.YYYY" },
  mk: { dow: 2, L: "D.MM.YYYY" },
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  pl: { dow: 2, L: "DD.MM.YYYY" },
  pt: { dow: 2, L: "DD/MM/YYYY" },
  ro: { dow: 2, L: "DD.MM.YYYY" },
  ru: { dow: 2, L: "DD.MM.YYYY" },
  sk: { dow: 2, L: "DD.MM.YYYY" },
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  sv: { dow: 2, L: "YYYY-MM-DD" },
  th: { dow: 1, L: "DD/MM/YYYY" },
  tr: { dow: 2, L: "DD.MM.YYYY" },
  uk: { dow: 2, L: "DD.MM.YYYY" },
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
locales.en = locales["en-US"];
locales.es = locales["es-ES"];
locales.no = locales.nb;
locales.zh = locales["zh-CN"];
toPairs_1(locales).forEach(([id, { dow, L }]) => {
  locales[id] = {
    id,
    firstDayOfWeek: dow,
    masks: { L }
  };
});
var PATCH = {
  DATE_TIME: 1,
  DATE: 2,
  TIME: 3
};
var PATCH_KEYS = {
  1: ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds"],
  2: ["year", "month", "day"],
  3: ["hours", "minutes", "seconds", "milliseconds"]
};
var token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = /\d\d?/;
var threeDigits = /\d{3}/;
var fourDigits = /\d{4}/;
var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var literal = /\[([^]*?)\]/gm;
var noop = function noop2() {
};
var monthUpdate = function monthUpdate2(arrName) {
  return function(d2, v, l) {
    var index = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
    if (~index) {
      d2.month = index;
    }
  };
};
var maskMacros = ["L", "iso"];
var daysInWeek = 7;
var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var formatFlags = {
  D: function D(d2) {
    return d2.day;
  },
  DD: function DD(d2) {
    return pad(d2.day);
  },
  Do: function Do(d2, l) {
    return l.DoFn(d2.day);
  },
  d: function d(_d) {
    return _d.weekday - 1;
  },
  dd: function dd(d2) {
    return pad(d2.weekday - 1);
  },
  W: function W(d2, l) {
    return l.dayNamesNarrow[d2.weekday - 1];
  },
  WW: function WW(d2, l) {
    return l.dayNamesShorter[d2.weekday - 1];
  },
  WWW: function WWW(d2, l) {
    return l.dayNamesShort[d2.weekday - 1];
  },
  WWWW: function WWWW(d2, l) {
    return l.dayNames[d2.weekday - 1];
  },
  M: function M(d2) {
    return d2.month;
  },
  MM: function MM(d2) {
    return pad(d2.month);
  },
  MMM: function MMM(d2, l) {
    return l.monthNamesShort[d2.month - 1];
  },
  MMMM: function MMMM(d2, l) {
    return l.monthNames[d2.month - 1];
  },
  YY: function YY(d2) {
    return String(d2.year).substr(2);
  },
  YYYY: function YYYY(d2) {
    return pad(d2.year, 4);
  },
  h: function h2(d2) {
    return d2.hours % 12 || 12;
  },
  hh: function hh(d2) {
    return pad(d2.hours % 12 || 12);
  },
  H: function H(d2) {
    return d2.hours;
  },
  HH: function HH(d2) {
    return pad(d2.hours);
  },
  m: function m(d2) {
    return d2.minutes;
  },
  mm: function mm(d2) {
    return pad(d2.minutes);
  },
  s: function s(d2) {
    return d2.seconds;
  },
  ss: function ss(d2) {
    return pad(d2.seconds);
  },
  S: function S(d2) {
    return Math.round(d2.milliseconds / 100);
  },
  SS: function SS(d2) {
    return pad(Math.round(d2.milliseconds / 10), 2);
  },
  SSS: function SSS(d2) {
    return pad(d2.milliseconds, 3);
  },
  a: function a(d2, l) {
    return d2.hours < 12 ? l.amPm[0] : l.amPm[1];
  },
  A: function A(d2, l) {
    return d2.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
  },
  Z: function Z() {
    return "Z";
  },
  ZZ: function ZZ(d2) {
    var o = d2.timezoneOffset;
    return "".concat(o > 0 ? "-" : "+").concat(pad(Math.floor(Math.abs(o) / 60), 2));
  },
  ZZZ: function ZZZ(d2) {
    var o = d2.timezoneOffset;
    return "".concat(o > 0 ? "-" : "+").concat(pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4));
  },
  ZZZZ: function ZZZZ(d2) {
    var o = d2.timezoneOffset;
    return "".concat(o > 0 ? "-" : "+").concat(pad(Math.floor(Math.abs(o) / 60), 2), ":").concat(pad(Math.abs(o) % 60, 2));
  }
};
var parseFlags = {
  D: [twoDigits, function(d2, v) {
    d2.day = v;
  }],
  Do: [new RegExp(twoDigits.source + word.source), function(d2, v) {
    d2.day = parseInt(v, 10);
  }],
  d: [twoDigits, noop],
  W: [word, noop],
  M: [twoDigits, function(d2, v) {
    d2.month = v - 1;
  }],
  MMM: [word, monthUpdate("monthNamesShort")],
  MMMM: [word, monthUpdate("monthNames")],
  YY: [twoDigits, function(d2, v) {
    var da = new Date();
    var cent = +da.getFullYear().toString().substr(0, 2);
    d2.year = "".concat(v > 68 ? cent - 1 : cent).concat(v);
  }],
  YYYY: [fourDigits, function(d2, v) {
    d2.year = v;
  }],
  S: [/\d/, function(d2, v) {
    d2.millisecond = v * 100;
  }],
  SS: [/\d{2}/, function(d2, v) {
    d2.millisecond = v * 10;
  }],
  SSS: [threeDigits, function(d2, v) {
    d2.millisecond = v;
  }],
  h: [twoDigits, function(d2, v) {
    d2.hour = v;
  }],
  m: [twoDigits, function(d2, v) {
    d2.minute = v;
  }],
  s: [twoDigits, function(d2, v) {
    d2.second = v;
  }],
  a: [word, function(d2, v, l) {
    var val = v.toLowerCase();
    if (val === l.amPm[0]) {
      d2.isPm = false;
    } else if (val === l.amPm[1]) {
      d2.isPm = true;
    }
  }],
  Z: [/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/, function(d2, v) {
    if (v === "Z")
      v = "+00:00";
    var parts = "".concat(v).match(/([+-]|\d\d)/gi);
    if (parts) {
      var minutes2 = +(parts[1] * 60) + parseInt(parts[2], 10);
      d2.timezoneOffset = parts[0] === "+" ? minutes2 : -minutes2;
    }
  }]
};
parseFlags.DD = parseFlags.D;
parseFlags.dd = parseFlags.d;
parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
parseFlags.MM = parseFlags.M;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;
parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
function resolveConfig(config, locales2) {
  var detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
  var id;
  if (isString_1(config)) {
    id = config;
  } else if (has$1(config, "id")) {
    id = config.id;
  }
  id = (id || detLocale).toLowerCase();
  var localeKeys = Object.keys(locales2);
  var validKey = function validKey2(k) {
    return localeKeys.find(function(lk) {
      return lk.toLowerCase() === k;
    });
  };
  id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
  var defLocale = _objectSpread2(_objectSpread2(_objectSpread2({}, locales2["en-IE"]), locales2[id]), {}, {
    id
  });
  config = isObject$1(config) ? defaultsDeep_1(config, defLocale) : defLocale;
  return config;
}
var Locale = /* @__PURE__ */ function() {
  function Locale2(config) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$locales = _ref.locales, locales$1 = _ref$locales === void 0 ? locales : _ref$locales, timezone2 = _ref.timezone;
    _classCallCheck(this, Locale2);
    var _resolveConfig = resolveConfig(config, locales$1), id = _resolveConfig.id, firstDayOfWeek = _resolveConfig.firstDayOfWeek, masks3 = _resolveConfig.masks;
    this.id = id;
    this.daysInWeek = daysInWeek;
    this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
    this.masks = masks3;
    this.timezone = timezone2 || void 0;
    this.dayNames = this.getDayNames("long");
    this.dayNamesShort = this.getDayNames("short");
    this.dayNamesShorter = this.dayNamesShort.map(function(s2) {
      return s2.substring(0, 2);
    });
    this.dayNamesNarrow = this.getDayNames("narrow");
    this.monthNames = this.getMonthNames("long");
    this.monthNamesShort = this.getMonthNames("short");
    this.amPm = ["am", "pm"];
    this.monthData = {};
    this.getMonthComps = this.getMonthComps.bind(this);
    this.parse = this.parse.bind(this);
    this.format = this.format.bind(this);
    this.toPage = this.toPage.bind(this);
  }
  _createClass(Locale2, [{
    key: "format",
    value: function format2(date2, mask) {
      var _this = this;
      date2 = this.normalizeDate(date2);
      if (!date2)
        return "";
      mask = this.normalizeMasks(mask)[0];
      var literals = [];
      mask = mask.replace(literal, function($0, $1) {
        literals.push($1);
        return "??";
      });
      var timezone2 = /Z$/.test(mask) ? "utc" : this.timezone;
      var dateParts = this.getDateParts(date2, timezone2);
      mask = mask.replace(token, function($0) {
        return $0 in formatFlags ? formatFlags[$0](dateParts, _this) : $0.slice(1, $0.length - 1);
      });
      return mask.replace(/\?\?/g, function() {
        return literals.shift();
      });
    }
  }, {
    key: "parse",
    value: function parse(dateString, mask) {
      var _this2 = this;
      var masks3 = this.normalizeMasks(mask);
      return masks3.map(function(m2) {
        if (typeof m2 !== "string") {
          throw new Error("Invalid mask in fecha.parse");
        }
        var str = dateString;
        if (str.length > 1e3) {
          return false;
        }
        var isValid = true;
        var dateInfo = {};
        m2.replace(token, function($0) {
          if (parseFlags[$0]) {
            var info = parseFlags[$0];
            var index = str.search(info[0]);
            if (!~index) {
              isValid = false;
            } else {
              str.replace(info[0], function(result) {
                info[1](dateInfo, result, _this2);
                str = str.substr(index + result.length);
                return result;
              });
            }
          }
          return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
        });
        if (!isValid) {
          return false;
        }
        var today = new Date();
        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
          dateInfo.hour = +dateInfo.hour + 12;
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
          dateInfo.hour = 0;
        }
        var date2;
        if (dateInfo.timezoneOffset != null) {
          dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
          date2 = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
        } else {
          date2 = _this2.getDateFromParts({
            year: dateInfo.year || today.getFullYear(),
            month: (dateInfo.month || 0) + 1,
            day: dateInfo.day || 1,
            hours: dateInfo.hour || 0,
            minutes: dateInfo.minute || 0,
            seconds: dateInfo.second || 0,
            milliseconds: dateInfo.millisecond || 0
          });
        }
        return date2;
      }).find(function(d2) {
        return d2;
      }) || new Date(dateString);
    }
  }, {
    key: "normalizeMasks",
    value: function normalizeMasks(masks3) {
      var _this3 = this;
      return (arrayHasItems(masks3) && masks3 || [isString_1(masks3) && masks3 || "YYYY-MM-DD"]).map(function(m2) {
        return maskMacros.reduce(function(prev, curr) {
          return prev.replace(curr, _this3.masks[curr] || "");
        }, m2);
      });
    }
  }, {
    key: "normalizeDate",
    value: function normalizeDate2(d2) {
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var result = null;
      var type = config.type, fillDate = config.fillDate;
      var mask = config.mask, patch = config.patch, time = config.time;
      var auto2 = type === "auto" || !type;
      if (isNumber_1(d2)) {
        type = "number";
        result = new Date(+d2);
      } else if (isString_1(d2)) {
        type = "string";
        result = d2 ? this.parse(d2, mask || "iso") : null;
      } else if (isObject$1(d2)) {
        type = "object";
        result = this.getDateFromParts(d2);
      } else {
        type = "date";
        result = isDate$1(d2) ? new Date(d2.getTime()) : null;
      }
      if (result && patch) {
        fillDate = fillDate == null ? new Date() : this.normalizeDate(fillDate);
        var parts = _objectSpread2(_objectSpread2({}, this.getDateParts(fillDate)), pick_1(this.getDateParts(result), PATCH_KEYS[patch]));
        result = this.getDateFromParts(parts);
      }
      if (auto2)
        config.type = type;
      if (result && !isNaN(result.getTime())) {
        if (time) {
          result = this.adjustTimeForDate(result, {
            timeAdjust: time
          });
        }
        return result;
      }
      return null;
    }
  }, {
    key: "denormalizeDate",
    value: function denormalizeDate(date2) {
      var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, type = _ref2.type, mask = _ref2.mask;
      switch (type) {
        case "number":
          return date2 ? date2.getTime() : NaN;
        case "string":
          return date2 ? this.format(date2, mask || "iso") : "";
        default:
          return date2 ? new Date(date2) : null;
      }
    }
  }, {
    key: "adjustTimeForDate",
    value: function adjustTimeForDate(date2, _ref3) {
      var timeAdjust = _ref3.timeAdjust;
      if (timeAdjust) {
        var dateParts = this.getDateParts(date2);
        if (timeAdjust === "now") {
          var timeParts = this.getDateParts(new Date());
          dateParts.hours = timeParts.hours;
          dateParts.minutes = timeParts.minutes;
          dateParts.seconds = timeParts.seconds;
          dateParts.milliseconds = timeParts.milliseconds;
        } else {
          var d2 = new Date("2000-01-01T".concat(timeAdjust, "Z"));
          dateParts.hours = d2.getUTCHours();
          dateParts.minutes = d2.getUTCMinutes();
          dateParts.seconds = d2.getUTCSeconds();
          dateParts.milliseconds = d2.getUTCMilliseconds();
        }
        date2 = this.getDateFromParts(dateParts);
      }
      return date2;
    }
  }, {
    key: "normalizeDates",
    value: function normalizeDates2(dates, opts2) {
      opts2 = opts2 || {};
      opts2.locale = this;
      return (isArrayLikeObject_1(dates) ? dates : [dates]).map(function(d2) {
        return d2 && (d2 instanceof DateInfo ? d2 : new DateInfo(d2, opts2));
      }).filter(function(d2) {
        return d2;
      });
    }
  }, {
    key: "getDateParts",
    value: function getDateParts2(date2) {
      var timezone2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.timezone;
      if (!date2)
        return null;
      var tzDate = date2;
      if (timezone2) {
        var normDate = new Date(date2.toLocaleString("en-US", {
          timeZone: timezone2
        }));
        normDate.setMilliseconds(date2.getMilliseconds());
        var diff = normDate.getTime() - date2.getTime();
        tzDate = new Date(date2.getTime() + diff);
      }
      var milliseconds = tzDate.getMilliseconds();
      var seconds = tzDate.getSeconds();
      var minutes2 = tzDate.getMinutes();
      var hours2 = tzDate.getHours();
      var month2 = tzDate.getMonth() + 1;
      var year3 = tzDate.getFullYear();
      var comps = this.getMonthComps(month2, year3);
      var day = tzDate.getDate();
      var dayFromEnd = comps.days - day + 1;
      var weekday = tzDate.getDay() + 1;
      var weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
      var weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
      var week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
      var weekFromEnd = comps.weeks - week + 1;
      var parts = {
        milliseconds,
        seconds,
        minutes: minutes2,
        hours: hours2,
        day,
        dayFromEnd,
        weekday,
        weekdayOrdinal,
        weekdayOrdinalFromEnd,
        week,
        weekFromEnd,
        month: month2,
        year: year3,
        date: date2,
        isValid: true
      };
      parts.timezoneOffset = this.getTimezoneOffset(parts);
      return parts;
    }
  }, {
    key: "getDateFromParts",
    value: function getDateFromParts2(parts) {
      if (!parts)
        return null;
      var d2 = new Date();
      var _parts$year = parts.year, year3 = _parts$year === void 0 ? d2.getFullYear() : _parts$year, _parts$month = parts.month, month2 = _parts$month === void 0 ? d2.getMonth() + 1 : _parts$month, _parts$day = parts.day, day = _parts$day === void 0 ? d2.getDate() : _parts$day, _parts$hours = parts.hours, hrs = _parts$hours === void 0 ? 0 : _parts$hours, _parts$minutes = parts.minutes, min2 = _parts$minutes === void 0 ? 0 : _parts$minutes, _parts$seconds = parts.seconds, sec = _parts$seconds === void 0 ? 0 : _parts$seconds, _parts$milliseconds = parts.milliseconds, ms = _parts$milliseconds === void 0 ? 0 : _parts$milliseconds;
      if (this.timezone) {
        var dateString = "".concat(pad(year3, 4), "-").concat(pad(month2, 2), "-").concat(pad(day, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min2, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
        return toDate$1(dateString, {
          timeZone: this.timezone
        });
      }
      return new Date(year3, month2 - 1, day, hrs, min2, sec, ms);
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset(parts) {
      var y = parts.year, m2 = parts.month, d2 = parts.day, _parts$hours2 = parts.hours, hrs = _parts$hours2 === void 0 ? 0 : _parts$hours2, _parts$minutes2 = parts.minutes, min2 = _parts$minutes2 === void 0 ? 0 : _parts$minutes2, _parts$seconds2 = parts.seconds, sec = _parts$seconds2 === void 0 ? 0 : _parts$seconds2, _parts$milliseconds2 = parts.milliseconds, ms = _parts$milliseconds2 === void 0 ? 0 : _parts$milliseconds2;
      var date2;
      var utcDate = new Date(Date.UTC(y, m2 - 1, d2, hrs, min2, sec, ms));
      if (this.timezone) {
        var dateString = "".concat(pad(y, 4), "-").concat(pad(m2, 2), "-").concat(pad(d2, 2), "T").concat(pad(hrs, 2), ":").concat(pad(min2, 2), ":").concat(pad(sec, 2), ".").concat(pad(ms, 3));
        date2 = toDate$1(dateString, {
          timeZone: this.timezone
        });
      } else {
        date2 = new Date(y, m2 - 1, d2, hrs, min2, sec, ms);
      }
      return (date2 - utcDate) / 6e4;
    }
  }, {
    key: "toPage",
    value: function toPage2(arg, fromPage2) {
      if (isNumber_1(arg)) {
        return addPages(fromPage2, arg);
      }
      if (isString_1(arg)) {
        return this.getDateParts(this.normalizeDate(arg));
      }
      if (isDate$1(arg)) {
        return this.getDateParts(arg);
      }
      if (isObject$1(arg)) {
        return arg;
      }
      return null;
    }
  }, {
    key: "getMonthDates",
    value: function getMonthDates() {
      var year3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2e3;
      var dates = [];
      for (var i = 0; i < 12; i++) {
        dates.push(new Date(year3, i, 15));
      }
      return dates;
    }
  }, {
    key: "getMonthNames",
    value: function getMonthNames(length) {
      var dtf = new Intl.DateTimeFormat(this.id, {
        month: length,
        timezome: "UTC"
      });
      return this.getMonthDates().map(function(d2) {
        return dtf.format(d2);
      });
    }
  }, {
    key: "getWeekdayDates",
    value: function getWeekdayDates() {
      var firstDayOfWeek = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.firstDayOfWeek;
      var dates = [];
      var year3 = 2020;
      var month2 = 1;
      var day = 5 + firstDayOfWeek - 1;
      for (var i = 0; i < daysInWeek; i++) {
        dates.push(this.getDateFromParts({
          year: year3,
          month: month2,
          day: day + i,
          hours: 12
        }));
      }
      return dates;
    }
  }, {
    key: "getDayNames",
    value: function getDayNames(length) {
      var dtf = new Intl.DateTimeFormat(this.id, {
        weekday: length,
        timeZone: this.timezone
      });
      return this.getWeekdayDates(1).map(function(d2) {
        return dtf.format(d2);
      });
    }
  }, {
    key: "getMonthComps",
    value: function getMonthComps(month2, year3) {
      var key = "".concat(month2, "-").concat(year3);
      var comps = this.monthData[key];
      if (!comps) {
        var inLeapYear = year3 % 4 === 0 && year3 % 100 !== 0 || year3 % 400 === 0;
        var firstDayOfMonth = new Date(year3, month2 - 1, 1);
        var firstWeekday = firstDayOfMonth.getDay() + 1;
        var days = month2 === 2 && inLeapYear ? 29 : daysInMonths[month2 - 1];
        var weekStartsOn = this.firstDayOfWeek - 1;
        var weeks = getWeeksInMonth(firstDayOfMonth, {
          weekStartsOn
        });
        var weeknumbers = [];
        var isoWeeknumbers = [];
        for (var i = 0; i < weeks; i++) {
          var date2 = addDays(firstDayOfMonth, i * 7);
          weeknumbers.push(getWeek(date2, {
            weekStartsOn
          }));
          isoWeeknumbers.push(getISOWeek(date2));
        }
        comps = {
          firstDayOfWeek: this.firstDayOfWeek,
          inLeapYear,
          firstWeekday,
          days,
          weeks,
          month: month2,
          year: year3,
          weeknumbers,
          isoWeeknumbers
        };
        this.monthData[key] = comps;
      }
      return comps;
    }
  }, {
    key: "getThisMonthComps",
    value: function getThisMonthComps() {
      var _this$getDateParts = this.getDateParts(new Date()), month2 = _this$getDateParts.month, year3 = _this$getDateParts.year;
      return this.getMonthComps(month2, year3);
    }
  }, {
    key: "getPrevMonthComps",
    value: function getPrevMonthComps(month2, year3) {
      if (month2 === 1)
        return this.getMonthComps(12, year3 - 1);
      return this.getMonthComps(month2 - 1, year3);
    }
  }, {
    key: "getNextMonthComps",
    value: function getNextMonthComps(month2, year3) {
      if (month2 === 12)
        return this.getMonthComps(1, year3 + 1);
      return this.getMonthComps(month2 + 1, year3);
    }
  }, {
    key: "getDayId",
    value: function getDayId(date2) {
      return this.format(date2, "YYYY-MM-DD");
    }
  }, {
    key: "getCalendarDays",
    value: function getCalendarDays(_ref4) {
      var _this4 = this;
      var weeks = _ref4.weeks, monthComps = _ref4.monthComps, prevMonthComps = _ref4.prevMonthComps, nextMonthComps = _ref4.nextMonthComps;
      var days = [];
      var firstDayOfWeek = monthComps.firstDayOfWeek, firstWeekday = monthComps.firstWeekday, isoWeeknumbers = monthComps.isoWeeknumbers, weeknumbers = monthComps.weeknumbers;
      var prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
      var prevMonth = true;
      var thisMonth = false;
      var nextMonth = false;
      var formatter = new Intl.DateTimeFormat(this.id, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      var day = prevMonthComps.days - prevMonthDaysToShow + 1;
      var dayFromEnd = prevMonthComps.days - day + 1;
      var weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
      var weekdayOrdinalFromEnd = 1;
      var week = prevMonthComps.weeks;
      var weekFromEnd = 1;
      var month2 = prevMonthComps.month;
      var year3 = prevMonthComps.year;
      var today = new Date();
      var todayDay = today.getDate();
      var todayMonth = today.getMonth() + 1;
      var todayYear = today.getFullYear();
      var dft = function dft2(y, m2, d2) {
        return function(hours2, minutes2, seconds, milliseconds) {
          return _this4.normalizeDate({
            year: y,
            month: m2,
            day: d2,
            hours: hours2,
            minutes: minutes2,
            seconds,
            milliseconds
          });
        };
      };
      for (var w = 1; w <= weeks; w++) {
        for (var i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
          if (prevMonth && weekday === firstWeekday) {
            day = 1;
            dayFromEnd = monthComps.days;
            weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
            weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
            week = 1;
            weekFromEnd = monthComps.weeks;
            month2 = monthComps.month;
            year3 = monthComps.year;
            prevMonth = false;
            thisMonth = true;
          }
          var dateFromTime = dft(year3, month2, day);
          var range = {
            start: dateFromTime(0, 0, 0),
            end: dateFromTime(23, 59, 59, 999)
          };
          var date2 = range.start;
          var id = "".concat(pad(year3, 4), "-").concat(pad(month2, 2), "-").concat(pad(day, 2));
          var weekdayPosition = i;
          var weekdayPositionFromEnd = daysInWeek - i;
          var weeknumber = weeknumbers[w - 1];
          var isoWeeknumber = isoWeeknumbers[w - 1];
          var isToday = day === todayDay && month2 === todayMonth && year3 === todayYear;
          var isFirstDay = thisMonth && day === 1;
          var isLastDay = thisMonth && day === monthComps.days;
          var onTop = w === 1;
          var onBottom = w === weeks;
          var onLeft = i === 1;
          var onRight = i === daysInWeek;
          days.push({
            id,
            label: day.toString(),
            ariaLabel: formatter.format(new Date(year3, month2 - 1, day)),
            day,
            dayFromEnd,
            weekday,
            weekdayPosition,
            weekdayPositionFromEnd,
            weekdayOrdinal,
            weekdayOrdinalFromEnd,
            week,
            weekFromEnd,
            weeknumber,
            isoWeeknumber,
            month: month2,
            year: year3,
            dateFromTime,
            date: date2,
            range,
            isToday,
            isFirstDay,
            isLastDay,
            inMonth: thisMonth,
            inPrevMonth: prevMonth,
            inNextMonth: nextMonth,
            onTop,
            onBottom,
            onLeft,
            onRight,
            classes: ["id-".concat(id), "day-".concat(day), "day-from-end-".concat(dayFromEnd), "weekday-".concat(weekday), "weekday-position-".concat(weekdayPosition), "weekday-ordinal-".concat(weekdayOrdinal), "weekday-ordinal-from-end-".concat(weekdayOrdinalFromEnd), "week-".concat(week), "week-from-end-".concat(weekFromEnd), {
              "is-today": isToday,
              "is-first-day": isFirstDay,
              "is-last-day": isLastDay,
              "in-month": thisMonth,
              "in-prev-month": prevMonth,
              "in-next-month": nextMonth,
              "on-top": onTop,
              "on-bottom": onBottom,
              "on-left": onLeft,
              "on-right": onRight
            }]
          });
          if (thisMonth && isLastDay) {
            thisMonth = false;
            nextMonth = true;
            day = 1;
            dayFromEnd = nextMonthComps.days;
            weekdayOrdinal = 1;
            weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
            week = 1;
            weekFromEnd = nextMonthComps.weeks;
            month2 = nextMonthComps.month;
            year3 = nextMonthComps.year;
          } else {
            day++;
            dayFromEnd--;
            weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
            weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
          }
        }
        week++;
        weekFromEnd--;
      }
      return days;
    }
  }]);
  return Locale2;
}();
var Attribute = /* @__PURE__ */ function() {
  function Attribute2(_ref, theme3, locale2) {
    var key = _ref.key, hashcode = _ref.hashcode, highlight = _ref.highlight, content3 = _ref.content, dot = _ref.dot, bar = _ref.bar, popover = _ref.popover, dates = _ref.dates, excludeDates = _ref.excludeDates, excludeMode = _ref.excludeMode, customData = _ref.customData, order2 = _ref.order, pinPage = _ref.pinPage;
    _classCallCheck(this, Attribute2);
    this.key = isUndefined_1(key) ? createGuid() : key;
    this.hashcode = hashcode;
    this.customData = customData;
    this.order = order2 || 0;
    this.dateOpts = {
      order: order2,
      locale: locale2
    };
    this.pinPage = pinPage;
    if (highlight) {
      this.highlight = theme3.normalizeHighlight(highlight);
    }
    if (content3) {
      this.content = theme3.normalizeContent(content3);
    }
    if (dot) {
      this.dot = theme3.normalizeDot(dot);
    }
    if (bar) {
      this.bar = theme3.normalizeBar(bar);
    }
    if (popover) {
      this.popover = popover;
    }
    this.dates = locale2.normalizeDates(dates, this.dateOpts);
    this.hasDates = !!arrayHasItems(this.dates);
    this.excludeDates = locale2.normalizeDates(excludeDates, this.dateOpts);
    this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
    this.excludeMode = excludeMode || "intersects";
    if (this.hasExcludeDates && !this.hasDates) {
      this.dates.push(new DateInfo({}, this.dateOpts));
      this.hasDates = true;
    }
    this.isComplex = some$1(this.dates, function(d2) {
      return d2.isComplex;
    });
  }
  _createClass(Attribute2, [{
    key: "intersectsDate",
    value: function intersectsDate(date2) {
      date2 = date2 instanceof DateInfo ? date2 : new DateInfo(date2, this.dateOpts);
      return !this.excludesDate(date2) && (this.dates.find(function(d2) {
        return d2.intersectsDate(date2);
      }) || false);
    }
  }, {
    key: "includesDate",
    value: function includesDate(date2) {
      date2 = date2 instanceof DateInfo ? date2 : new DateInfo(date2, this.dateOpts);
      return !this.excludesDate(date2) && (this.dates.find(function(d2) {
        return d2.includesDate(date2);
      }) || false);
    }
  }, {
    key: "excludesDate",
    value: function excludesDate(date2) {
      var _this = this;
      date2 = date2 instanceof DateInfo ? date2 : new DateInfo(date2, this.dateOpts);
      return this.hasExcludeDates && this.excludeDates.find(function(ed) {
        return _this.excludeMode === "intersects" && ed.intersectsDate(date2) || _this.excludeMode === "includes" && ed.includesDate(date2);
      });
    }
  }, {
    key: "intersectsDay",
    value: function intersectsDay(day) {
      return !this.excludesDay(day) && (this.dates.find(function(d2) {
        return d2.intersectsDay(day);
      }) || false);
    }
  }, {
    key: "excludesDay",
    value: function excludesDay(day) {
      return this.hasExcludeDates && this.excludeDates.find(function(ed) {
        return ed.intersectsDay(day);
      });
    }
  }]);
  return Attribute2;
}();
var maxSwipeTime = 300;
var minHorizontalSwipeDistance = 60;
var maxVerticalSwipeDistance = 80;
var touch = {
  maxSwipeTime,
  minHorizontalSwipeDistance,
  maxVerticalSwipeDistance
};
var title = "MMMM YYYY";
var weekdays = "W";
var navMonths = "MMM";
var input = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
var inputDateTime = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
];
var inputDateTime24hr = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
];
var inputTime = [
  "h:mm A"
];
var inputTime24hr = [
  "HH:mm"
];
var dayPopover = "WWW, MMM D, YYYY";
var data = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
var model = "iso";
var iso = "YYYY-MM-DDTHH:mm:ssXXX";
var masks2 = {
  title,
  weekdays,
  navMonths,
  input,
  inputDateTime,
  inputDateTime24hr,
  inputTime,
  inputTime24hr,
  dayPopover,
  data,
  model,
  iso
};
var sm = "640px";
var md = "768px";
var lg = "1024px";
var xl = "1280px";
var defaultScreens = {
  sm,
  md,
  lg,
  xl
};
const defaultConfig = {
  componentPrefix: "v",
  color: "blue",
  isDark: false,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch,
  masks: masks2,
  screens: defaultScreens,
  locales,
  datePicker: {
    updateOnInput: true,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      keepVisibleOnInput: false,
      isInteractive: true
    }
  }
};
const state = reactive(defaultConfig);
const computedLocales = computed(() => {
  return mapValues_1(state.locales, (v) => {
    v.masks = defaultsDeep_1(v.masks, state.masks);
    return v;
  });
});
const getDefault = (path) => {
  if (window && has$1(window.__vcalendar__, path)) {
    return get_1(window.__vcalendar__, path);
  }
  return get_1(state, path);
};
const setup$1 = (userDefaults) => {
  return defaultsDeep_1(state, userDefaults);
};
var rootMixin = {
  props: {
    color: {
      type: String,
      default: getDefault("color")
    },
    isDark: {
      type: Boolean,
      default: getDefault("isDark")
    },
    firstDayOfWeek: Number,
    masks: Object,
    locale: [String, Object],
    timezone: String,
    minDate: null,
    maxDate: null,
    minDateExact: null,
    maxDateExact: null,
    disabledDates: null,
    availableDates: null,
    theme: null
  },
  computed: {
    $theme: function $theme() {
      if (this.theme instanceof Theme)
        return this.theme;
      return new Theme({
        color: this.color,
        isDark: this.isDark
      });
    },
    $locale: function $locale() {
      if (this.locale instanceof Locale)
        return this.locale;
      var config = isObject$1(this.locale) ? this.locale : {
        id: this.locale,
        firstDayOfWeek: this.firstDayOfWeek,
        masks: this.masks
      };
      return new Locale(config, {
        locales: computedLocales.value,
        timezone: this.timezone
      });
    },
    disabledDates_: function disabledDates_() {
      var dates = this.normalizeDates(this.disabledDates);
      var minDate = this.minDate, minDateExact = this.minDateExact, maxDate = this.maxDate, maxDateExact = this.maxDateExact;
      if (minDateExact || minDate) {
        var end2 = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, {
          time: "00:00:00"
        });
        dates.push({
          start: null,
          end: new Date(end2.getTime() - 1e3)
        });
      }
      if (maxDateExact || maxDate) {
        var start2 = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, {
          time: "23:59:59"
        });
        dates.push({
          start: new Date(start2.getTime() + 1e3),
          end: null
        });
      }
      return dates;
    },
    availableDates_: function availableDates_() {
      return this.normalizeDates(this.availableDates);
    },
    disabledAttribute: function disabledAttribute() {
      return new Attribute({
        key: "disabled",
        dates: this.disabledDates_,
        excludeDates: this.availableDates_,
        excludeMode: "includes",
        order: 100
      }, this.$theme, this.$locale);
    }
  },
  methods: {
    formatDate: function formatDate(date2, mask) {
      return this.$locale ? this.$locale.format(date2, mask) : "";
    },
    parseDate: function parseDate2(text, mask) {
      if (!this.$locale)
        return null;
      var value2 = this.$locale.parse(text, mask);
      return isDate$1(value2) ? value2 : null;
    },
    normalizeDate: function normalizeDate(date2, config) {
      return this.$locale ? this.$locale.normalizeDate(date2, config) : date2;
    },
    normalizeDates: function normalizeDates(dates) {
      return this.$locale.normalizeDates(dates, {
        isFullDay: true
      });
    },
    pageForDate: function pageForDate2(date2) {
      return this.$locale.getDateParts(this.normalizeDate(date2));
    },
    pageForThisMonth: function pageForThisMonth() {
      return this.pageForDate(new Date());
    }
  }
};
var slotMixin = {
  methods: {
    safeSlot: function safeSlot(name2, args) {
      var def = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return isFunction_1(this.$slots[name2]) ? this.$slots[name2](args) : def;
    }
  }
};
var childMixin$1 = childMixin;
var rootMixin$1 = rootMixin;
var slotMixin$1 = slotMixin;
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head2 = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head2.firstChild) {
      head2.insertBefore(style, head2.firstChild);
    } else {
      head2.appendChild(style);
    }
  } else {
    head2.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
function showPopover(opts2) {
  if (document) {
    document.dispatchEvent(new CustomEvent("show-popover", {
      detail: opts2
    }));
  }
}
function hidePopover(opts2) {
  if (document) {
    document.dispatchEvent(new CustomEvent("hide-popover", {
      detail: opts2
    }));
  }
}
function togglePopover(opts2) {
  if (document) {
    document.dispatchEvent(new CustomEvent("toggle-popover", {
      detail: opts2
    }));
  }
}
function updatePopover(opts2) {
  if (document) {
    document.dispatchEvent(new CustomEvent("update-popover", {
      detail: opts2
    }));
  }
}
function getPopoverTriggerEvents(opts2) {
  var _ref;
  var visibility = opts2.visibility;
  var click2 = visibility === "click";
  var hover = visibility === "hover";
  var hoverFocus = visibility === "hover-focus";
  var focus = visibility === "focus";
  opts2.autoHide = !click2;
  var hovered = false;
  var focused = false;
  var isRenderFn = opts2.isRenderFn;
  var events = {
    click: isRenderFn ? "onClick" : "click",
    mousemove: isRenderFn ? "onMousemove" : "mousemove",
    mouseleave: isRenderFn ? "onMouseleave" : "mouseleave",
    focusin: isRenderFn ? "onFocusin" : "focusin",
    focusout: isRenderFn ? "onFocusout" : "focusout"
  };
  return _ref = {}, _defineProperty(_ref, events.click, function(e) {
    if (click2) {
      opts2.ref = e.target;
      togglePopover(opts2);
      e.stopPropagation();
    }
  }), _defineProperty(_ref, events.mousemove, function(e) {
    opts2.ref = e.currentTarget;
    if (!hovered) {
      hovered = true;
      if (hover || hoverFocus) {
        showPopover(opts2);
      }
    }
  }), _defineProperty(_ref, events.mouseleave, function(e) {
    opts2.ref = e.target;
    if (hovered) {
      hovered = false;
      if (hover || hoverFocus && !focused) {
        hidePopover(opts2);
      }
    }
  }), _defineProperty(_ref, events.focusin, function(e) {
    opts2.ref = e.currentTarget;
    if (!focused) {
      focused = true;
      if (focus || hoverFocus) {
        showPopover(opts2);
      }
    }
  }), _defineProperty(_ref, events.focusout, function(e) {
    opts2.ref = e.currentTarget;
    if (focused && !elementContains(opts2.ref, e.relatedTarget)) {
      focused = false;
      if (focus || hoverFocus && !hovered) {
        hidePopover(opts2);
      }
    }
  }), _ref;
}
var script$a = {
  name: "CalendarDay",
  emits: ["dayclick", "daymouseenter", "daymouseleave", "dayfocusin", "dayfocusout", "daykeydown"],
  mixins: [childMixin$1, slotMixin$1],
  inheritAttrs: false,
  render: function render() {
    var _this = this;
    var backgroundsLayer = function backgroundsLayer2() {
      return _this.hasBackgrounds && h("div", {
        class: "vc-highlights vc-day-layer"
      }, _this.backgrounds.map(function(_ref) {
        var key = _ref.key, wrapperClass = _ref.wrapperClass, bgClass = _ref.class, style = _ref.style;
        return h("div", {
          key,
          class: wrapperClass
        }, [h("div", {
          class: bgClass,
          style
        })]);
      }));
    };
    var contentLayer = function contentLayer2() {
      return _this.safeSlot("day-content", {
        day: _this.day,
        attributes: _this.day.attributes,
        attributesMap: _this.day.attributesMap,
        dayProps: _this.dayContentProps,
        dayEvents: _this.dayContentEvents
      }) || h("span", _objectSpread2(_objectSpread2(_objectSpread2({}, _this.dayContentProps), {}, {
        class: _this.dayContentClass,
        style: _this.dayContentStyle
      }, _this.dayContentEvents), {}, {
        ref: "content"
      }), [_this.day.label]);
    };
    var dotsLayer = function dotsLayer2() {
      return _this.hasDots && h("div", {
        class: "vc-day-layer vc-day-box-center-bottom"
      }, [h("div", {
        class: "vc-dots"
      }, _this.dots.map(function(_ref2) {
        var key = _ref2.key, bgClass = _ref2.class, style = _ref2.style;
        return h("span", {
          key,
          class: bgClass,
          style
        });
      }))]);
    };
    var barsLayer = function barsLayer2() {
      return _this.hasBars && h("div", {
        class: "vc-day-layer vc-day-box-center-bottom"
      }, [h("div", {
        class: "vc-bars"
      }, _this.bars.map(function(_ref3) {
        var key = _ref3.key, bgClass = _ref3.class, style = _ref3.style;
        return h("span", {
          key,
          class: bgClass,
          style
        });
      }))]);
    };
    return h("div", {
      class: ["vc-day"].concat(_toConsumableArray(this.day.classes), [{
        "vc-day-box-center-center": !this.$slots["day-content"]
      }, {
        "is-not-in-month": !this.inMonth
      }])
    }, [backgroundsLayer(), contentLayer(), dotsLayer(), barsLayer()]);
  },
  inject: ["sharedState"],
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  data: function data2() {
    return {
      glyphs: {},
      dayContentEvents: {}
    };
  },
  computed: {
    label: function label() {
      return this.day.label;
    },
    startTime: function startTime() {
      return this.day.range.start.getTime();
    },
    endTime: function endTime() {
      return this.day.range.end.getTime();
    },
    inMonth: function inMonth() {
      return this.day.inMonth;
    },
    isDisabled: function isDisabled() {
      return this.day.isDisabled;
    },
    backgrounds: function backgrounds() {
      return this.glyphs.backgrounds;
    },
    hasBackgrounds: function hasBackgrounds() {
      return !!arrayHasItems(this.backgrounds);
    },
    content: function content() {
      return this.glyphs.content;
    },
    dots: function dots() {
      return this.glyphs.dots;
    },
    hasDots: function hasDots() {
      return !!arrayHasItems(this.dots);
    },
    bars: function bars() {
      return this.glyphs.bars;
    },
    hasBars: function hasBars() {
      return !!arrayHasItems(this.bars);
    },
    popovers: function popovers() {
      return this.glyphs.popovers;
    },
    hasPopovers: function hasPopovers() {
      return !!arrayHasItems(this.popovers);
    },
    dayContentClass: function dayContentClass() {
      return ["vc-day-content vc-focusable", {
        "is-disabled": this.isDisabled
      }, get_1(last_1(this.content), "class") || ""];
    },
    dayContentStyle: function dayContentStyle() {
      return get_1(last_1(this.content), "style");
    },
    dayContentProps: function dayContentProps() {
      var tabindex;
      if (this.day.isFocusable) {
        tabindex = "0";
      } else if (this.day.inMonth) {
        tabindex = "-1";
      }
      return {
        tabindex,
        "aria-label": this.day.ariaLabel,
        "aria-disabled": this.day.isDisabled ? "true" : "false",
        role: "button"
      };
    },
    dayEvent: function dayEvent() {
      return _objectSpread2(_objectSpread2({}, this.day), {}, {
        el: this.$refs.content,
        popovers: this.popovers
      });
    }
  },
  watch: {
    theme: function theme2() {
      this.refresh();
    },
    popovers: function popovers2() {
      this.refreshPopovers();
    },
    "day.shouldRefresh": function dayShouldRefresh() {
      this.refresh();
    }
  },
  mounted: function mounted() {
    this.refreshPopovers();
    this.refresh();
  },
  methods: {
    getDayEvent: function getDayEvent(origEvent) {
      return _objectSpread2(_objectSpread2({}, this.dayEvent), {}, {
        event: origEvent
      });
    },
    click: function click(e) {
      this.$emit("dayclick", this.getDayEvent(e));
    },
    mouseenter: function mouseenter(e) {
      this.$emit("daymouseenter", this.getDayEvent(e));
    },
    mouseleave: function mouseleave(e) {
      this.$emit("daymouseleave", this.getDayEvent(e));
    },
    focusin: function focusin(e) {
      this.$emit("dayfocusin", this.getDayEvent(e));
    },
    focusout: function focusout(e) {
      this.$emit("dayfocusout", this.getDayEvent(e));
    },
    keydown: function keydown(e) {
      this.$emit("daykeydown", this.getDayEvent(e));
    },
    refresh: function refresh() {
      var _this2 = this;
      if (!this.day.shouldRefresh)
        return;
      this.day.shouldRefresh = false;
      var glyphs = {
        backgrounds: [],
        dots: [],
        bars: [],
        popovers: [],
        content: []
      };
      this.day.attributes = Object.values(this.day.attributesMap || {}).sort(function(a2, b) {
        return a2.order - b.order;
      });
      this.day.attributes.forEach(function(attr) {
        var targetDate = attr.targetDate;
        var isDate3 = targetDate.isDate, isComplex = targetDate.isComplex, startTime2 = targetDate.startTime, endTime2 = targetDate.endTime;
        var onStart = _this2.startTime <= startTime2;
        var onEnd = _this2.endTime >= endTime2;
        var onStartAndEnd = onStart && onEnd;
        var onStartOrEnd = onStart || onEnd;
        var dateInfo = {
          isDate: isDate3,
          isComplex,
          onStart,
          onEnd,
          onStartAndEnd,
          onStartOrEnd
        };
        _this2.processHighlight(attr, dateInfo, glyphs);
        _this2.processNonHighlight(attr, "content", dateInfo, glyphs.content);
        _this2.processNonHighlight(attr, "dot", dateInfo, glyphs.dots);
        _this2.processNonHighlight(attr, "bar", dateInfo, glyphs.bars);
        _this2.processPopover(attr, glyphs);
      });
      this.glyphs = glyphs;
    },
    processHighlight: function processHighlight(_ref4, _ref5, _ref6) {
      var key = _ref4.key, highlight = _ref4.highlight;
      var isDate3 = _ref5.isDate, isComplex = _ref5.isComplex, onStart = _ref5.onStart, onEnd = _ref5.onEnd, onStartAndEnd = _ref5.onStartAndEnd;
      var backgrounds2 = _ref6.backgrounds, content3 = _ref6.content;
      if (!highlight)
        return;
      var base = highlight.base, start2 = highlight.start, end2 = highlight.end;
      if (isDate3 || isComplex) {
        backgrounds2.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start2.class],
          style: start2.style
        });
        content3.push({
          key: "".concat(key, "-content"),
          class: start2.contentClass,
          style: start2.contentStyle
        });
      } else if (onStartAndEnd) {
        backgrounds2.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start2.class],
          style: start2.style
        });
        content3.push({
          key: "".concat(key, "-content"),
          class: start2.contentClass,
          style: start2.contentStyle
        });
      } else if (onStart) {
        backgrounds2.push({
          key: "".concat(key, "-base"),
          wrapperClass: "vc-day-layer vc-day-box-right-center",
          class: ["vc-highlight vc-highlight-base-start", base.class],
          style: base.style
        });
        backgrounds2.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start2.class],
          style: start2.style
        });
        content3.push({
          key: "".concat(key, "-content"),
          class: start2.contentClass,
          style: start2.contentStyle
        });
      } else if (onEnd) {
        backgrounds2.push({
          key: "".concat(key, "-base"),
          wrapperClass: "vc-day-layer vc-day-box-left-center",
          class: ["vc-highlight vc-highlight-base-end", base.class],
          style: base.style
        });
        backgrounds2.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", end2.class],
          style: end2.style
        });
        content3.push({
          key: "".concat(key, "-content"),
          class: end2.contentClass,
          style: end2.contentStyle
        });
      } else {
        backgrounds2.push({
          key: "".concat(key, "-middle"),
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight vc-highlight-base-middle", base.class],
          style: base.style
        });
        content3.push({
          key: "".concat(key, "-content"),
          class: base.contentClass,
          style: base.contentStyle
        });
      }
    },
    processNonHighlight: function processNonHighlight(attr, itemKey, _ref7, list) {
      var isDate3 = _ref7.isDate, onStart = _ref7.onStart, onEnd = _ref7.onEnd;
      if (!attr[itemKey])
        return;
      var key = attr.key;
      var className = "vc-".concat(itemKey);
      var _attr$itemKey = attr[itemKey], base = _attr$itemKey.base, start2 = _attr$itemKey.start, end2 = _attr$itemKey.end;
      if (isDate3 || onStart) {
        list.push({
          key,
          class: [className, start2.class],
          style: start2.style
        });
      } else if (onEnd) {
        list.push({
          key,
          class: [className, end2.class],
          style: end2.style
        });
      } else {
        list.push({
          key,
          class: [className, base.class],
          style: base.style
        });
      }
    },
    processPopover: function processPopover(attribute, _ref8) {
      var popovers3 = _ref8.popovers;
      var key = attribute.key, customData = attribute.customData, popover = attribute.popover;
      if (!popover)
        return;
      var resolvedPopover = defaults_1({
        key,
        customData,
        attribute
      }, _objectSpread2({}, popover), {
        visibility: popover.label ? "hover" : "click",
        placement: "bottom",
        isInteractive: !popover.label
      });
      popovers3.splice(0, 0, resolvedPopover);
    },
    refreshPopovers: function refreshPopovers() {
      var popoverEvents = {};
      if (arrayHasItems(this.popovers)) {
        popoverEvents = getPopoverTriggerEvents(defaults_1.apply(void 0, [{
          id: this.dayPopoverId,
          data: this.day,
          isRenderFn: true
        }].concat(_toConsumableArray(this.popovers))));
      }
      this.dayContentEvents = mergeEvents({
        onClick: this.click,
        onMouseenter: this.mouseenter,
        onMouseleave: this.mouseleave,
        onFocusin: this.focusin,
        onFocusout: this.focusout,
        onKeydown: this.keydown
      }, popoverEvents);
      updatePopover({
        id: this.dayPopoverId,
        data: this.day
      });
    }
  }
};
var css_248z$9 = ".vc-day {\n  position: relative;\n  min-height: 32px;\n  z-index: 1;\n}\n.vc-day.is-not-in-month * {\n    opacity: 0;\n    pointer-events: none;\n}\n.vc-day-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.vc-day-box-center-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.vc-day-box-left-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n.vc-day-box-right-center {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n.vc-day-box-center-bottom {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.vc-day-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: var(--rounded-full);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.vc-day-content:hover {\n    background-color: hsla(211, 25%, 84%, 0.3);\n}\n.vc-day-content:focus {\n    font-weight: var(--font-bold);\n    background-color: hsla(211, 25%, 84%, 0.4);\n}\n.vc-day-content.is-disabled {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-day-content:hover {\n      background-color: hsla(216, 15%, 52%, 0.3);\n}\n.vc-is-dark .vc-day-content:focus {\n      background-color: hsla(216, 15%, 52%, 0.4);\n}\n.vc-is-dark .vc-day-content.is-disabled {\n      color: var(--gray-600);\n}\n.vc-highlights {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n.vc-highlight {\n  width: 28px;\n  height: 28px;\n}\n.vc-highlight.vc-highlight-base-start {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-right-width: 0 !important;\n}\n.vc-highlight.vc-highlight-base-end {\n    width: 50% !important;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n}\n.vc-highlight.vc-highlight-base-middle {\n    width: 100%;\n    border-radius: 0 !important;\n    border-left-width: 0 !important;\n    border-right-width: 0 !important;\n    margin: 0 -1px;\n}\n.vc-dots {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vc-dot {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  transition: all var(--day-content-transition-time);\n}\n.vc-dot:not(:last-child) {\n    margin-right: 3px;\n}\n.vc-bars {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 75%;\n}\n.vc-bar {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 3px;\n  transition: all var(--day-content-transition-time);\n}\n";
styleInject(css_248z$9);
var boolTag = "[object Boolean]";
function isBoolean(value2) {
  return value2 === true || value2 === false || isObjectLike_1(value2) && _baseGetTag(value2) == boolTag;
}
var isBoolean_1 = isBoolean;
var script$9 = {
  name: "CalendarPane",
  emits: ["update:page", "weeknumberclick"],
  mixins: [childMixin$1, slotMixin$1],
  inheritAttrs: false,
  render: function render2() {
    var _this = this;
    var header = this.safeSlot("header", this.page) || h("div", {
      class: "vc-header align-".concat(this.titlePosition)
    }, [
      h("div", _objectSpread2({
        class: "vc-title"
      }, this.navPopoverEvents), [this.safeSlot("header-title", this.page, this.page.title)])
    ]);
    var weekdayCells = this.weekdayLabels.map(function(wl, i) {
      return h("div", {
        key: i + 1,
        class: "vc-weekday"
      }, [wl]);
    });
    var showWeeknumbersLeft = this.showWeeknumbers_.startsWith("left");
    var showWeeknumbersRight = this.showWeeknumbers_.startsWith("right");
    if (showWeeknumbersLeft) {
      weekdayCells.unshift(h("div", {
        class: "vc-weekday"
      }));
    } else if (showWeeknumbersRight) {
      weekdayCells.push(h("div", {
        class: "vc-weekday"
      }));
    }
    var getWeeknumberCell = function getWeeknumberCell2(weeknumber) {
      return h("div", {
        class: ["vc-weeknumber"]
      }, [h("span", {
        class: ["vc-weeknumber-content", "is-".concat(_this.showWeeknumbers_)],
        onClick: function onClick2(event) {
          _this.$emit("weeknumberclick", {
            weeknumber,
            days: _this.page.days.filter(function(d2) {
              return d2[_this.weeknumberKey] === weeknumber;
            }),
            event
          });
        }
      }, [weeknumber])]);
    };
    var dayCells = [];
    var daysInWeek2 = this.locale.daysInWeek;
    this.page.days.forEach(function(day, i) {
      var mod = i % daysInWeek2;
      if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek2) {
        dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
      }
      dayCells.push(h(script$a, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        day
      }), _this.$slots));
      if (showWeeknumbersRight && mod === daysInWeek2 - 1) {
        dayCells.push(getWeeknumberCell(day[_this.weeknumberKey]));
      }
    });
    var weeks = h("div", {
      class: {
        "vc-weeks": true,
        "vc-show-weeknumbers": this.showWeeknumbers_,
        "is-left": showWeeknumbersLeft,
        "is-right": showWeeknumbersRight
      }
    }, [weekdayCells, dayCells]);
    return h("div", {
      class: ["vc-pane", "row-from-end-".concat(this.rowFromEnd), "column-from-end-".concat(this.columnFromEnd)],
      ref: "pane"
    }, [header, weeks]);
  },
  props: {
    page: Object,
    position: Number,
    row: Number,
    rowFromEnd: Number,
    column: Number,
    columnFromEnd: Number,
    titlePosition: String,
    navVisibility: {
      type: String,
      default: getDefault("navVisibility")
    },
    showWeeknumbers: [Boolean, String],
    showIsoWeeknumbers: [Boolean, String]
  },
  computed: {
    weeknumberKey: function weeknumberKey() {
      return this.showWeeknumbers ? "weeknumber" : "isoWeeknumber";
    },
    showWeeknumbers_: function showWeeknumbers_() {
      var showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
      if (showWeeknumbers == null)
        return "";
      if (isBoolean_1(showWeeknumbers)) {
        return showWeeknumbers ? "left" : "";
      }
      if (showWeeknumbers.startsWith("right")) {
        return this.columnFromEnd > 1 ? "right" : showWeeknumbers;
      }
      return this.column > 1 ? "left" : showWeeknumbers;
    },
    navPlacement: function navPlacement() {
      switch (this.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    },
    navPopoverEvents: function navPopoverEvents() {
      var sharedState = this.sharedState, navVisibility = this.navVisibility, navPlacement2 = this.navPlacement, page = this.page, position = this.position;
      return getPopoverTriggerEvents({
        id: sharedState.navPopoverId,
        visibility: navVisibility,
        placement: navPlacement2,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: ["bottom"]
          }
        }],
        data: {
          page,
          position
        },
        isInteractive: true,
        isRenderFn: true
      });
    },
    weekdayLabels: function weekdayLabels() {
      var _this2 = this;
      return this.locale.getWeekdayDates().map(function(d2) {
        return _this2.format(d2, _this2.masks.weekdays);
      });
    }
  }
};
var css_248z$8 = ".vc-pane {\n  min-width: 250px;\n}\n.vc-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px 16px 0px 16px;\n}\n.vc-header.align-left {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-header.align-right {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-title {\n  font-size: var(--text-lg);\n  color: var(--gray-800);\n  font-weight: var(--font-semibold);\n  line-height: 28px;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.vc-title:hover {\n    opacity: 0.75;\n}\n.vc-weeknumber {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n.vc-weeknumber-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  font-style: italic;\n  width: 28px;\n  height: 28px;\n  margin-top: 2px;\n  color: var(--gray-500);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weeknumber-content.is-left-outside {\n    position: absolute;\n    left: var(--weeknumber-offset);\n}\n.vc-weeknumber-content.is-right-outside {\n    position: absolute;\n    right: var(--weeknumber-offset);\n}\n.vc-weeks {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  position: relative;\n  /* overflow: auto; */\n  -webkit-overflow-scrolling: touch;\n  padding: 6px;\n  min-width: 250px;\n}\n.vc-weeks.vc-show-weeknumbers {\n    grid-template-columns: auto repeat(7, 1fr);\n}\n.vc-weeks.vc-show-weeknumbers.is-right {\n      grid-template-columns: repeat(7, 1fr) auto;\n}\n.vc-weekday {\n  text-align: center;\n  color: var(--gray-500);\n  font-size: var(--text-sm);\n  font-weight: var(--font-bold);\n  line-height: 14px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n  cursor: default;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-weekdays {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vc-nav-popover-container {\n  color: var(--white);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded-lg);\n  padding: 4px;\n  box-shadow: var(--shadow);\n}\n.vc-is-dark .vc-header {\n    color: var(--gray-200);\n}\n.vc-is-dark .vc-title {\n    color: var(--gray-100);\n}\n.vc-is-dark .vc-weekday {\n    color: var(--accent-200);\n}\n.vc-is-dark .vc-nav-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n";
styleInject(css_248z$8);
var _defSize = "26px";
var _defViewBox = "0 0 32 32";
var icons = {
  "left-arrow": {
    viewBox: "0 -1 16 34",
    path: "M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
  },
  "right-arrow": {
    viewBox: "-5 -1 16 34",
    path: "M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
  }
};
var script$8 = {
  props: ["name"],
  data: function data3() {
    return {
      width: _defSize,
      height: _defSize,
      viewBox: _defViewBox,
      path: "",
      isBaseline: false
    };
  },
  mounted: function mounted2() {
    this.updateIcon();
  },
  watch: {
    name: function name() {
      this.updateIcon();
    }
  },
  methods: {
    updateIcon: function updateIcon() {
      var icon = icons[this.name];
      if (icon) {
        this.width = icon.width || _defSize;
        this.height = icon.height || _defSize;
        this.viewBox = icon.viewBox;
        this.path = icon.path;
      }
    }
  }
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", {
    class: "vc-svg-icon",
    width: $data.width,
    height: $data.height,
    viewBox: $data.viewBox
  }, [createVNode("path", {
    d: $data.path
  }, null, 8, ["d"])], 8, ["width", "height", "viewBox"]);
}
var css_248z$7 = ".vc-svg-icon {\n  display: inline-block;\n  stroke: currentColor;\n  stroke-width: 0;\n}\n.vc-svg-icon path {\n    fill: currentColor;\n}\n";
styleInject(css_248z$7);
script$8.render = render$5;
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var _yearGroupCount = 12;
var script$7 = {
  name: "CalendarNav",
  emits: ["input"],
  components: {
    SvgIcon: script$8
  },
  mixins: [childMixin$1],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          month: 0,
          year: 0
        };
      }
    },
    validator: {
      type: Function,
      default: function _default2() {
        return function() {
          return true;
        };
      }
    }
  },
  data: function data4() {
    return {
      monthMode: true,
      yearIndex: 0,
      yearGroupIndex: 0,
      onSpaceOrEnter
    };
  },
  computed: {
    month: function month() {
      return this.value ? this.value.month || 0 : 0;
    },
    year: function year() {
      return this.value ? this.value.year || 0 : 0;
    },
    title: function title2() {
      return this.monthMode ? this.yearIndex : "".concat(this.firstYear, " - ").concat(this.lastYear);
    },
    monthItems: function monthItems() {
      return this.getMonthItems(this.yearIndex);
    },
    yearItems: function yearItems() {
      return this.getYearItems(this.yearGroupIndex);
    },
    prevItemsEnabled: function prevItemsEnabled() {
      return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled;
    },
    nextItemsEnabled: function nextItemsEnabled() {
      return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled;
    },
    prevMonthItemsEnabled: function prevMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex - 1).some(function(i) {
        return !i.isDisabled;
      });
    },
    nextMonthItemsEnabled: function nextMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex + 1).some(function(i) {
        return !i.isDisabled;
      });
    },
    prevYearItemsEnabled: function prevYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex - 1).some(function(i) {
        return !i.isDisabled;
      });
    },
    nextYearItemsEnabled: function nextYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex + 1).some(function(i) {
        return !i.isDisabled;
      });
    },
    activeItems: function activeItems() {
      return this.monthMode ? this.monthItems : this.yearItems;
    },
    firstYear: function firstYear() {
      return head_1(this.yearItems.map(function(i) {
        return i.year;
      }));
    },
    lastYear: function lastYear() {
      return last_1(this.yearItems.map(function(i) {
        return i.year;
      }));
    }
  },
  watch: {
    year: function year2() {
      this.yearIndex = this.year;
    },
    yearIndex: function yearIndex(val) {
      this.yearGroupIndex = this.getYearGroupIndex(val);
    },
    value: function value() {
      this.focusFirstItem();
    }
  },
  created: function created() {
    this.yearIndex = this.year;
  },
  mounted: function mounted3() {
    this.focusFirstItem();
  },
  methods: {
    focusFirstItem: function focusFirstItem() {
      var _this = this;
      this.$nextTick(function() {
        var focusableEl = _this.$refs.navContainer.querySelector(".vc-nav-item:not(.is-disabled)");
        if (focusableEl) {
          focusableEl.focus();
        }
      });
    },
    getItemClasses: function getItemClasses(_ref) {
      var isActive = _ref.isActive, isCurrent = _ref.isCurrent, isDisabled2 = _ref.isDisabled;
      var classes = ["vc-nav-item"];
      if (isActive) {
        classes.push("is-active");
      } else if (isCurrent) {
        classes.push("is-current");
      }
      if (isDisabled2) {
        classes.push("is-disabled");
      }
      return classes;
    },
    getYearGroupIndex: function getYearGroupIndex(year3) {
      return Math.floor(year3 / _yearGroupCount);
    },
    getMonthItems: function getMonthItems(year3) {
      var _this2 = this;
      var _this$pageForDate = this.pageForDate(new Date()), thisMonth = _this$pageForDate.month, thisYear = _this$pageForDate.year;
      return this.locale.getMonthDates().map(function(d2, i) {
        var month2 = i + 1;
        return {
          month: month2,
          year: year3,
          id: "".concat(year3, ".").concat(pad(month2, 2)),
          label: _this2.locale.format(d2, _this2.masks.navMonths),
          ariaLabel: _this2.locale.format(d2, "MMMM YYYY"),
          isActive: month2 === _this2.month && year3 === _this2.year,
          isCurrent: month2 === thisMonth && year3 === thisYear,
          isDisabled: !_this2.validator({
            month: month2,
            year: year3
          }),
          click: function click2() {
            return _this2.monthClick(month2, year3);
          }
        };
      });
    },
    getYearItems: function getYearItems(yearGroupIndex) {
      var _this3 = this;
      var _this$pageForDate2 = this.pageForDate(new Date());
      _this$pageForDate2._;
      var thisYear = _this$pageForDate2.year;
      var startYear = yearGroupIndex * _yearGroupCount;
      var endYear = startYear + _yearGroupCount;
      var items = [];
      var _loop = function _loop2(year4) {
        var enabled = false;
        for (var month2 = 1; month2 < 12; month2++) {
          enabled = _this3.validator({
            month: month2,
            year: year4
          });
          if (enabled)
            break;
        }
        items.push({
          year: year4,
          id: year4,
          label: year4,
          ariaLabel: year4,
          isActive: year4 === _this3.year,
          isCurrent: year4 === thisYear,
          isDisabled: !enabled,
          click: function click2() {
            return _this3.yearClick(year4);
          }
        });
      };
      for (var year3 = startYear; year3 < endYear; year3 += 1) {
        _loop(year3);
      }
      return items;
    },
    monthClick: function monthClick(month2, year3) {
      if (this.validator({
        month: month2,
        year: year3
      })) {
        this.$emit("input", {
          month: month2,
          year: year3
        });
      }
    },
    yearClick: function yearClick(year3) {
      this.yearIndex = year3;
      this.monthMode = true;
      this.focusFirstItem();
    },
    toggleMode: function toggleMode() {
      this.monthMode = !this.monthMode;
    },
    movePrev: function movePrev() {
      if (!this.prevItemsEnabled)
        return;
      if (this.monthMode) {
        this.movePrevYear();
      }
      this.movePrevYearGroup();
    },
    moveNext: function moveNext() {
      if (!this.nextItemsEnabled)
        return;
      if (this.monthMode) {
        this.moveNextYear();
      }
      this.moveNextYearGroup();
    },
    movePrevYear: function movePrevYear() {
      this.yearIndex--;
    },
    moveNextYear: function moveNextYear() {
      this.yearIndex++;
    },
    movePrevYearGroup: function movePrevYearGroup() {
      this.yearGroupIndex--;
    },
    moveNextYearGroup: function moveNextYearGroup() {
      this.yearGroupIndex++;
    }
  }
};
var _hoisted_1$3 = {
  class: "vc-nav-container",
  ref: "navContainer"
};
var _hoisted_2$3 = {
  class: "vc-nav-header"
};
var _hoisted_3$2 = {
  class: "vc-nav-items"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_icon = resolveComponent("svg-icon");
  return openBlock(), createBlock("div", _hoisted_1$3, [createVNode("div", _hoisted_2$3, [createVNode("span", {
    role: "button",
    class: ["vc-nav-arrow is-left", {
      "is-disabled": !$options.prevItemsEnabled
    }],
    tabindex: $options.prevItemsEnabled ? 0 : void 0,
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.movePrev.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function(e) {
      return $data.onSpaceOrEnter(e, $options.movePrev);
    })
  }, [renderSlot(_ctx.$slots, "nav-left-button", {}, function() {
    return [createVNode(_component_svg_icon, {
      name: "left-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 42, ["tabindex"]), createVNode("span", {
    role: "button",
    class: ["vc-nav-title vc-grid-focus", {
      "is-disabled": !$options.nextItemsEnabled
    }],
    style: {
      whiteSpace: "nowrap"
    },
    tabindex: $options.nextItemsEnabled ? 0 : void 0,
    onClick: _cache[3] || (_cache[3] = function() {
      return $options.toggleMode.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function(e) {
      return $data.onSpaceOrEnter(e, $options.toggleMode);
    })
  }, toDisplayString($options.title), 43, ["tabindex"]), createVNode("span", {
    role: "button",
    class: "vc-nav-arrow is-right",
    tabindex: "0",
    onClick: _cache[5] || (_cache[5] = function() {
      return $options.moveNext.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function(e) {
      return $data.onSpaceOrEnter(e, $options.moveNext);
    })
  }, [renderSlot(_ctx.$slots, "nav-right-button", {}, function() {
    return [createVNode(_component_svg_icon, {
      name: "right-arrow",
      width: "20px",
      height: "24px"
    })];
  })], 32)]), createVNode("div", _hoisted_3$2, [(openBlock(true), createBlock(Fragment, null, renderList($options.activeItems, function(item) {
    return openBlock(), createBlock("span", {
      key: item.label,
      role: "button",
      "data-id": item.id,
      "aria-label": item.ariaLabel,
      class: $options.getItemClasses(item),
      tabindex: item.isDisabled ? void 0 : 0,
      onClick: item.click,
      onKeydown: function onKeydown(e) {
        return $data.onSpaceOrEnter(e, item.click);
      }
    }, toDisplayString(item.label), 43, ["data-id", "aria-label", "tabindex", "onClick", "onKeydown"]);
  }), 128))])], 512);
}
var css_248z$6 = ".vc-nav-header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.vc-nav-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: var(--leading-snug);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n}\n.vc-nav-arrow.is-left {\n    margin-right: auto;\n}\n.vc-nav-arrow.is-right {\n    margin-left: auto;\n}\n.vc-nav-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.vc-nav-arrow:hover {\n    background-color: var(--gray-900);\n}\n.vc-nav-arrow:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-title {\n  color: var(--accent-100);\n  font-weight: var(--font-bold);\n  line-height: var(--leading-snug);\n  padding: 4px 8px;\n  border-radius: var(--rounded);\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-nav-title:hover {\n    background-color: var(--gray-900);\n}\n.vc-nav-title:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-items {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 2px;\n  grid-column-gap: 5px;\n}\n.vc-nav-item {\n  width: 48px;\n  text-align: center;\n  line-height: var(--leading-snug);\n  font-weight: var(--font-semibold);\n  padding: 4px 0;\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: var(--rounded);\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vc-nav-item:hover {\n    color: var(--white);\n    background-color: var(--gray-900);\n    box-shadow: var(--shadow-inner);\n}\n.vc-nav-item.is-active {\n    color: var(--accent-900);\n    background: var(--accent-100);\n    font-weight: var(--font-bold);\n    box-shadow: var(--shadow);\n}\n.vc-nav-item.is-current {\n    color: var(--accent-100);\n    font-weight: var(--bold);\n    border-color: var(--accent-100);\n}\n.vc-nav-item:focus {\n    border-color: var(--accent-600);\n}\n.vc-nav-item.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n}\n.vc-is-dark .vc-nav-title {\n    color: var(--gray-900);\n}\n.vc-is-dark .vc-nav-title:hover {\n      background-color: var(--gray-200);\n}\n.vc-is-dark .vc-nav-title:focus {\n      border-color: var(--accent-400);\n}\n.vc-is-dark .vc-nav-arrow:hover {\n      background-color: var(--gray-200);\n}\n.vc-is-dark .vc-nav-arrow:focus {\n      border-color: var(--accent-400);\n}\n.vc-is-dark .vc-nav-item:hover {\n      color: var(--gray-900);\n      background-color: var(--gray-200);\n      box-shadow: none;\n}\n.vc-is-dark .vc-nav-item.is-active {\n      color: var(--white);\n      background: var(--accent-500);\n}\n.vc-is-dark .vc-nav-item.is-current {\n      color: var(--accent-600);\n      border-color: var(--accent-500);\n}\n.vc-is-dark .vc-nav-item:focus {\n      border-color: var(--accent-400);\n}\n";
styleInject(css_248z$6);
script$7.render = render$4;
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state2 = _ref.state;
  Object.keys(state2.elements).forEach(function(name2) {
    var style = state2.styles[name2] || {};
    var attributes2 = state2.attributes[name2] || {};
    var element = state2.elements[name2];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes2).forEach(function(name3) {
      var value2 = attributes2[name3];
      if (value2 === false) {
        element.removeAttribute(name3);
      } else {
        element.setAttribute(name3, value2 === true ? "" : value2);
      }
    });
  });
}
function effect$2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name2) {
      var element = state2.elements[name2];
      var attributes2 = state2.attributes[name2] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name2) ? state2.styles[name2] : initialStyles[name2]);
      var style = styleProperties.reduce(function(style2, property2) {
        style2[property2] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes2).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getBoundingClientRect(element, includeScale) {
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function within(min$1, value2, max$1) {
  return max(min$1, min(value2, max$1));
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value2, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value2;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state2 = _ref.state, name2 = _ref.name, options = _ref.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name2] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state2.elements.popper, arrowElement)) {
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state2 = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b) {
    return overflows[a2] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state2 = _ref.state, options = _ref.options, name2 = _ref.name;
  if (state2.modifiersData[name2]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name2]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state2 = _ref.state, name2 = _ref.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name2] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name2 = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data9 = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data9[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name2] = data9;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state2 = _ref.state, name2 = _ref.name;
  state2.modifiersData[name2] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state2 = _ref.state, options = _ref.options, name2 = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var data9 = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = popperOffsets2[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets2[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement][mainAxis] : 0;
    var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data9[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data9[altAxis] = _preventedOffset - _offset;
    }
  }
  state2.modifiersData[name2] = data9;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map2 = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions, state2.options, options2);
        state2.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state2.orderedModifiers.length; index++) {
          if (state2.reset === true) {
            state2.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name2 = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state2 = fn2({
              state: state2,
              options: _options,
              name: name2,
              instance
            }) || state2;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref3) {
        var name2 = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state: state2,
            name: name2,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var script$6 = {
  name: "CustomTransition",
  emits: ["before-enter", "before-transition", "after-enter", "after-transition"],
  props: {
    name: String,
    appear: Boolean
  },
  computed: {
    name_: function name_() {
      return "vc-".concat(this.name || "none");
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      this.$emit("before-enter", el);
      this.$emit("before-transition", el);
    },
    afterEnter: function afterEnter(el) {
      this.$emit("after-enter", el);
      this.$emit("after-transition", el);
    }
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: $options.name_,
    appear: $props.appear,
    onBeforeEnter: $options.beforeEnter,
    onAfterEnter: $options.afterEnter
  }, {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
}
var css_248z$5 = ".vc-none-enter-active,\n.vc-none-leave-active {\n  transition-duration: 0s;\n}\n.vc-fade-enter-active,\n.vc-fade-leave-active,\n.vc-slide-left-enter-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-enter-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-enter-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-enter-active,\n.vc-slide-down-leave-active,\n.vc-slide-fade-enter-active,\n.vc-slide-fade-leave-active {\n  transition: opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing);\n  transition: transform var(--slide-duration) var(--slide-timing),\n    opacity var(--slide-duration) var(--slide-timing),\n    -webkit-transform var(--slide-duration) var(--slide-timing);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  pointer-events: none;\n}\n.vc-none-leave-active,\n.vc-fade-leave-active,\n.vc-slide-left-leave-active,\n.vc-slide-right-leave-active,\n.vc-slide-up-leave-active,\n.vc-slide-down-leave-active {\n  position: absolute !important;\n  width: 100%;\n}\n.vc-none-enter-from,\n.vc-none-leave-to,\n.vc-fade-enter-from,\n.vc-fade-leave-to,\n.vc-slide-left-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-right-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-up-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-down-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from,\n.vc-slide-fade-leave-to {\n  opacity: 0;\n}\n.vc-slide-left-enter-from,\n.vc-slide-right-leave-to,\n.vc-slide-fade-enter-from.direction-left,\n.vc-slide-fade-leave-to.direction-left {\n  -webkit-transform: translateX(var(--slide-translate));\n          transform: translateX(var(--slide-translate));\n}\n.vc-slide-right-enter-from,\n.vc-slide-left-leave-to,\n.vc-slide-fade-enter-from.direction-right,\n.vc-slide-fade-leave-to.direction-right {\n  -webkit-transform: translateX(calc(-1 * var(--slide-translate)));\n          transform: translateX(calc(-1 * var(--slide-translate)));\n}\n.vc-slide-up-enter-from,\n.vc-slide-down-leave-to,\n.vc-slide-fade-enter-from.direction-top,\n.vc-slide-fade-leave-to.direction-top {\n  -webkit-transform: translateY(var(--slide-translate));\n          transform: translateY(var(--slide-translate));\n}\n.vc-slide-down-enter-from,\n.vc-slide-up-leave-to,\n.vc-slide-fade-enter-from.direction-bottom,\n.vc-slide-fade-leave-to.direction-bottom {\n  -webkit-transform: translateY(calc(-1 * var(--slide-translate)));\n          transform: translateY(calc(-1 * var(--slide-translate)));\n}\n";
styleInject(css_248z$5);
script$6.render = render$3;
var addTapOrClickHandler = function addTapOrClickHandler2(element, handler) {
  if (!element || !element.addEventListener || !isFunction_1(handler)) {
    return null;
  }
  var tap = false;
  var disableClick = false;
  var touchstart = function touchstart2() {
    return tap = true;
  };
  var touchmove = function touchmove2() {
    return tap = false;
  };
  var touchend = function touchend2(event) {
    if (tap) {
      tap = false;
      disableClick = true;
      handler(event);
      return;
    }
    if (event.type === "click" && !disableClick) {
      handler(event);
    }
    disableClick = false;
  };
  on(element, "touchstart", touchstart, {
    passive: true
  });
  on(element, "touchmove", touchmove, {
    passive: true
  });
  on(element, "click", touchend, {
    passive: true
  });
  on(element, "touchend", touchend, {
    passive: true
  });
  return function() {
    off(element, "touchstart", touchstart);
    off(element, "touchmove", touchmove);
    off(element, "click", touchend);
    off(element, "touchend", touchend);
  };
};
var addHorizontalSwipeHandler = function addHorizontalSwipeHandler2(element, handler, _ref) {
  var maxSwipeTime2 = _ref.maxSwipeTime, minHorizontalSwipeDistance2 = _ref.minHorizontalSwipeDistance, maxVerticalSwipeDistance2 = _ref.maxVerticalSwipeDistance;
  if (!element || !element.addEventListener || !isFunction_1(handler)) {
    return null;
  }
  var startX = 0;
  var startY = 0;
  var startTime2 = null;
  var isSwiping = false;
  function touchStart(e) {
    var t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
    startTime2 = new Date().getTime();
    isSwiping = true;
  }
  function touchEnd(e) {
    if (!isSwiping)
      return;
    isSwiping = false;
    var t = e.changedTouches[0];
    var deltaX = t.screenX - startX;
    var deltaY = t.screenY - startY;
    var deltaTime = new Date().getTime() - startTime2;
    if (deltaTime < maxSwipeTime2) {
      if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
        var arg = {
          toLeft: false,
          toRight: false
        };
        if (deltaX < 0) {
          arg.toLeft = true;
        } else {
          arg.toRight = true;
        }
        handler(arg);
      }
    }
  }
  on(element, "touchstart", touchStart, {
    passive: true
  });
  on(element, "touchend", touchEnd, {
    passive: true
  });
  return function() {
    off(element, "touchstart", touchStart);
    off(element, "touchend", touchEnd);
  };
};
var script$5 = {
  name: "Popover",
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  render: function render3() {
    var _this = this;
    return h("div", {
      class: ["vc-popover-content-wrapper", {
        "is-interactive": this.isInteractive
      }],
      ref: "popover"
    }, [h(script$6, {
      name: this.transition,
      appear: true,
      "on-before-enter": this.beforeEnter,
      "on-after-enter": this.afterEnter,
      "on-before-leave": this.beforeLeave,
      "on-after-leave": this.afterLeave
    }, {
      default: function _default5() {
        return _this.isVisible ? h("div", {
          tabindex: -1,
          class: ["vc-popover-content", "direction-".concat(_this.direction), _this.contentClass],
          style: _this.contentStyle
        }, [_this.content, h("span", {
          class: ["vc-popover-caret", "direction-".concat(_this.direction), "align-".concat(_this.alignment)]
        })]) : null;
      }
    })]);
  },
  props: {
    id: {
      type: String,
      required: true
    },
    contentClass: String
  },
  data: function data5() {
    return {
      ref: null,
      opts: null,
      data: null,
      transition: "slide-fade",
      transitionTranslate: "15px",
      transitionDuration: "0.15s",
      placement: "bottom",
      positionFixed: false,
      modifiers: [],
      isInteractive: false,
      isHovered: false,
      isFocused: false,
      showDelay: 0,
      hideDelay: 110,
      autoHide: false,
      popperEl: null
    };
  },
  computed: {
    content: function content2() {
      var _this2 = this;
      return isFunction_1(this.$slots.default) && this.$slots.default({
        direction: this.direction,
        alignment: this.alignment,
        data: this.data,
        updateLayout: this.setupPopper,
        hide: function hide3(opts2) {
          return _this2.hide(opts2);
        }
      }) || this.$slots.default;
    },
    contentStyle: function contentStyle() {
      return {
        "--slide-translate": this.transitionTranslate,
        "--slide-duration": this.transitionDuration
      };
    },
    popperOptions: function popperOptions() {
      return {
        placement: this.placement,
        strategy: this.positionFixed ? "fixed" : "absolute",
        modifiers: [{
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: this.onPopperUpdate
        }].concat(_toConsumableArray(this.modifiers || [])),
        onFirstUpdate: this.onPopperUpdate
      };
    },
    isVisible: function isVisible() {
      return !!(this.ref && this.content);
    },
    direction: function direction() {
      return this.placement && this.placement.split("-")[0] || "bottom";
    },
    alignment: function alignment() {
      var isLeftRight = this.direction === "left" || this.direction === "right";
      var alignment2 = this.placement.split("-");
      alignment2 = alignment2.length > 1 ? alignment2[1] : "";
      if (["start", "top", "left"].includes(alignment2)) {
        return isLeftRight ? "top" : "left";
      }
      if (["end", "bottom", "right"].includes(alignment2)) {
        return isLeftRight ? "bottom" : "right";
      }
      return isLeftRight ? "middle" : "center";
    }
  },
  watch: {
    opts: function opts(val, oldVal) {
      if (oldVal && oldVal.callback) {
        oldVal.callback(_objectSpread2(_objectSpread2({}, oldVal), {}, {
          completed: !val,
          reason: val ? "Overridden by action" : null
        }));
      }
    }
  },
  mounted: function mounted4() {
    this.popoverEl = this.$refs.popover;
    this.addEvents();
  },
  beforeUnmount: function beforeUnmount() {
    this.removeEvents();
  },
  methods: {
    addEvents: function addEvents() {
      on(this.popoverEl, "click", this.onClick);
      on(this.popoverEl, "mouseover", this.onMouseOver);
      on(this.popoverEl, "mouseleave", this.onMouseLeave);
      on(this.popoverEl, "focusin", this.onFocusIn);
      on(this.popoverEl, "focusout", this.onFocusOut);
      on(document, "keydown", this.onDocumentKeydown);
      this.removeDocHandler = addTapOrClickHandler(document, this.onDocumentClick);
      on(document, "show-popover", this.onDocumentShowPopover);
      on(document, "hide-popover", this.onDocumentHidePopover);
      on(document, "toggle-popover", this.onDocumentTogglePopover);
      on(document, "update-popover", this.onDocumentUpdatePopover);
    },
    removeEvents: function removeEvents() {
      off(this.popoverEl, "click", this.onClick);
      off(this.popoverEl, "mouseover", this.onMouseOver);
      off(this.popoverEl, "mouseleave", this.onMouseLeave);
      off(this.popoverEl, "focusin", this.onFocusIn);
      off(this.popoverEl, "focusout", this.onFocusOut);
      off(document, "keydown", this.onDocumentKeydown);
      if (this.removeDocHandler)
        this.removeDocHandler();
      off(document, "show-popover", this.onDocumentShowPopover);
      off(document, "hide-popover", this.onDocumentHidePopover);
      off(document, "toggle-popover", this.onDocumentTogglePopover);
      off(document, "update-popover", this.onDocumentUpdatePopover);
    },
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onMouseOver: function onMouseOver() {
      this.isHovered = true;
      if (this.isInteractive)
        this.show();
    },
    onMouseLeave: function onMouseLeave() {
      this.isHovered = false;
      if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) {
        this.hide();
      }
    },
    onFocusIn: function onFocusIn() {
      this.isFocused = true;
      if (this.isInteractive)
        this.show();
    },
    onFocusOut: function onFocusOut(e) {
      if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
        this.isFocused = false;
        if (!this.isHovered && this.autoHide)
          this.hide();
      }
    },
    onDocumentClick: function onDocumentClick(e) {
      if (!this.$refs.popover || !this.ref) {
        return;
      }
      if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) {
        return;
      }
      this.hide();
    },
    onDocumentKeydown: function onDocumentKeydown(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.hide();
      }
    },
    onDocumentShowPopover: function onDocumentShowPopover(_ref) {
      var detail = _ref.detail;
      if (!detail.id || detail.id !== this.id)
        return;
      this.show(detail);
    },
    onDocumentHidePopover: function onDocumentHidePopover(_ref2) {
      var detail = _ref2.detail;
      if (!detail.id || detail.id !== this.id)
        return;
      this.hide(detail);
    },
    onDocumentTogglePopover: function onDocumentTogglePopover(_ref3) {
      var detail = _ref3.detail;
      if (!detail.id || detail.id !== this.id)
        return;
      this.toggle(detail);
    },
    onDocumentUpdatePopover: function onDocumentUpdatePopover(_ref4) {
      var detail = _ref4.detail;
      if (!detail.id || detail.id !== this.id)
        return;
      this.update(detail);
    },
    show: function show() {
      var _this3 = this;
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts2.action = "show";
      var ref = opts2.ref || this.ref;
      var delay = opts2.showDelay >= 0 ? opts2.showDelay : this.showDelay;
      if (!ref) {
        if (opts2.callback) {
          opts2.callback({
            completed: false,
            reason: "Invalid reference element provided"
          });
        }
        return;
      }
      clearTimeout(this.timeout);
      this.opts = opts2;
      var fn2 = function fn3() {
        Object.assign(_this3, omit_1(opts2, ["id"]));
        _this3.setupPopper();
        _this3.opts = null;
      };
      if (delay > 0) {
        this.timeout = setTimeout(function() {
          return fn2();
        }, delay);
      } else {
        fn2();
      }
    },
    hide: function hide2() {
      var _this4 = this;
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts2.action = "hide";
      var ref = opts2.ref || this.ref;
      var delay = opts2.hideDelay >= 0 ? opts2.hideDelay : this.hideDelay;
      if (!this.ref || ref !== this.ref) {
        if (opts2.callback) {
          opts2.callback(_objectSpread2(_objectSpread2({}, opts2), {}, {
            completed: false,
            reason: this.ref ? "Invalid reference element provided" : "Popover already hidden"
          }));
        }
        return;
      }
      var fn2 = function fn3() {
        _this4.ref = null;
        _this4.opts = null;
      };
      clearTimeout(this.timeout);
      this.opts = opts2;
      if (delay > 0) {
        this.timeout = setTimeout(fn2, delay);
      } else {
        fn2();
      }
    },
    toggle: function toggle() {
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (this.isVisible && opts2.ref === this.ref) {
        this.hide(opts2);
      } else {
        this.show(opts2);
      }
    },
    update: function update() {
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Object.assign(this, omit_1(opts2, ["id"]));
      this.setupPopper();
    },
    setupPopper: function setupPopper() {
      var _this5 = this;
      this.$nextTick(function() {
        if (!_this5.ref || !_this5.$refs.popover)
          return;
        if (_this5.popper && _this5.popper.reference !== _this5.ref) {
          _this5.destroyPopper();
        }
        if (!_this5.popper) {
          _this5.popper = createPopper(_this5.ref, _this5.popoverEl, _this5.popperOptions);
        } else {
          _this5.popper.update();
        }
      });
    },
    onPopperUpdate: function onPopperUpdate(args) {
      if (args.placement) {
        this.placement = args.placement;
      } else if (args.state) {
        this.placement = args.state.placement;
      }
    },
    beforeEnter: function beforeEnter2(e) {
      this.$emit("before-show", e);
    },
    afterEnter: function afterEnter2(e) {
      this.$emit("after-show", e);
    },
    beforeLeave: function beforeLeave(e) {
      this.$emit("before-hide", e);
    },
    afterLeave: function afterLeave(e) {
      this.destroyPopper();
      this.$emit("after-hide", e);
    },
    destroyPopper: function destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    }
  }
};
var css_248z$4 = ".vc-popover-content-wrapper {\n  --popover-horizontal-content-offset: 8px;\n  --popover-vertical-content-offset: 10px;\n  --popover-caret-horizontal-offset: 18px;\n  --popover-caret-vertical-offset: 8px;\n\n  position: absolute;\n  display: block;\n  outline: none;\n  z-index: 10;\n}\n.vc-popover-content-wrapper:not(.is-interactive) {\n    pointer-events: none;\n}\n.vc-popover-content {\n  position: relative;\n  outline: none;\n  z-index: 10;\n  box-shadow: var(--shadow-lg);\n}\n.vc-popover-content.direction-bottom {\n    margin-top: var(--popover-vertical-content-offset);\n}\n.vc-popover-content.direction-top {\n    margin-bottom: var(--popover-vertical-content-offset);\n}\n.vc-popover-content.direction-left {\n    margin-right: var(--popover-horizontal-content-offset);\n}\n.vc-popover-content.direction-right {\n    margin-left: var(--popover-horizontal-content-offset);\n}\n.vc-popover-caret {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-top: inherit;\n  border-left: inherit;\n  background-color: inherit;\n  z-index: -1;\n}\n.vc-popover-caret.direction-bottom {\n    top: 0;\n}\n.vc-popover-caret.direction-bottom.align-left {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-bottom.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n              transform: translateX(-50%) translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-bottom.align-right {\n      -webkit-transform: translateY(-50%) rotate(45deg);\n              transform: translateY(-50%) rotate(45deg);\n}\n.vc-popover-caret.direction-top {\n    top: 100%;\n}\n.vc-popover-caret.direction-top.align-left {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-top.align-center {\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n              transform: translateX(-50%) translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-top.align-right {\n      -webkit-transform: translateY(-50%) rotate(-135deg);\n              transform: translateY(-50%) rotate(-135deg);\n}\n.vc-popover-caret.direction-left {\n    left: 100%;\n}\n.vc-popover-caret.direction-left.align-top {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-left.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);\n              transform: translateY(-50%) translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-left.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(135deg);\n              transform: translateX(-50%) rotate(135deg);\n}\n.vc-popover-caret.direction-right {\n    left: 0;\n}\n.vc-popover-caret.direction-right.align-top {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.direction-right.align-middle {\n      -webkit-transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n              transform: translateY(-50%) translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.direction-right.align-bottom {\n      -webkit-transform: translateX(-50%) rotate(-45deg);\n              transform: translateX(-50%) rotate(-45deg);\n}\n.vc-popover-caret.align-left {\n    left: var(--popover-caret-horizontal-offset);\n}\n.vc-popover-caret.align-center {\n    left: 50%;\n}\n.vc-popover-caret.align-right {\n    right: var(--popover-caret-horizontal-offset);\n}\n.vc-popover-caret.align-top {\n    top: var(--popover-caret-vertical-offset);\n}\n.vc-popover-caret.align-middle {\n    top: 50%;\n}\n.vc-popover-caret.align-bottom {\n    bottom: var(--popover-caret-vertical-offset);\n}\n";
styleInject(css_248z$4);
var script$4 = {
  name: "PopoverRow",
  mixins: [childMixin$1],
  props: {
    attribute: Object
  },
  computed: {
    indicator: function indicator() {
      var _this$attribute = this.attribute, highlight = _this$attribute.highlight, dot = _this$attribute.dot, bar = _this$attribute.bar, popover = _this$attribute.popover;
      if (popover && popover.hideIndicator)
        return null;
      if (highlight) {
        var _highlight$start = highlight.start, color = _highlight$start.color, isDark = _highlight$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {}, {
            width: "10px",
            height: "5px",
            borderRadius: "3px"
          })
        };
      }
      if (dot) {
        var _dot$start = dot.start, _color = _dot$start.color, _isDark = _dot$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color: _color,
            isDark: !_isDark
          })), {}, {
            width: "5px",
            height: "5px",
            borderRadius: "50%"
          })
        };
      }
      if (bar) {
        var _bar$start = bar.start, _color2 = _bar$start.color, _isDark2 = _bar$start.isDark;
        return {
          style: _objectSpread2(_objectSpread2({}, this.theme.bgAccentHigh({
            color: _color2,
            isDark: !_isDark2
          })), {}, {
            width: "10px",
            height: "3px"
          })
        };
      }
      return null;
    }
  }
};
var _hoisted_1$2 = {
  class: "vc-day-popover-row"
};
var _hoisted_2$2 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
var _hoisted_3$1 = {
  class: "vc-day-popover-row-content"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [$options.indicator ? (openBlock(), createBlock("div", _hoisted_2$2, [createVNode("span", {
    style: $options.indicator.style,
    class: $options.indicator.class
  }, null, 6)])) : createCommentVNode("", true), createVNode("div", _hoisted_3$1, [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString($props.attribute.popover ? $props.attribute.popover.label : "No content provided"), 1)];
  })])]);
}
var css_248z$3 = ".vc-day-popover-row {\n  --day-content-transition-time: 0.13s ease-in;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row:not(:first-child) {\n    margin-top: 3px;\n}\n.vc-day-popover-row-indicator {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  width: 15px;\n  margin-right: 3px;\n}\n.vc-day-popover-row-indicator span {\n    transition: all var(--day-content-transition-time);\n}\n.vc-day-popover-row-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: none;\n      -ms-flex-wrap: none;\n          flex-wrap: none;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: -webkit-max-content;\n  width: max-content;\n}\n";
styleInject(css_248z$3);
script$4.render = render$2;
var script$3$1 = script$4;
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date2 = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date2;
  }
  var dayOfMonth = date2.getDate();
  var endOfDesiredMonth = new Date(date2.getTime());
  endOfDesiredMonth.setMonth(date2.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date2.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date2;
  }
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
var AttributeStore = /* @__PURE__ */ function() {
  function AttributeStore2(theme3, locale2, attrs) {
    _classCallCheck(this, AttributeStore2);
    this.theme = theme3;
    this.locale = locale2;
    this.map = {};
    this.refresh(attrs, true);
  }
  _createClass(AttributeStore2, [{
    key: "refresh",
    value: function refresh2(attrs, reset) {
      var _this = this;
      var map2 = {};
      var list = [];
      var pinAttr = null;
      var adds = [];
      var deletes = reset ? new Set() : new Set(Object.keys(this.map));
      if (arrayHasItems(attrs)) {
        attrs.forEach(function(attr, i) {
          if (!attr || !attr.dates)
            return;
          var key = attr.key ? attr.key.toString() : i.toString();
          var order2 = attr.order || 0;
          var hashcode = hash$2(JSON.stringify(attr));
          var exAttr = _this.map[key];
          if (!reset && exAttr && exAttr.hashcode === hashcode) {
            deletes.delete(key);
          } else {
            exAttr = new Attribute(_objectSpread2({
              key,
              order: order2,
              hashcode
            }, attr), _this.theme, _this.locale);
            adds.push(exAttr);
          }
          if (exAttr && exAttr.pinPage) {
            pinAttr = exAttr;
          }
          map2[key] = exAttr;
          list.push(exAttr);
        });
      }
      this.map = map2;
      this.list = list;
      this.pinAttr = pinAttr;
      return {
        adds,
        deletes: Array.from(deletes)
      };
    }
  }]);
  return AttributeStore2;
}();
var script$3 = {
  name: "Calendar",
  emits: ["dayfocusin", "dayfocusout", "transition-start", "transition-end", "update:from-page", "update:to-page"],
  render: function render4() {
    var _this = this;
    var panes = this.pages.map(function(page, i) {
      var position = i + 1;
      var row = Math.ceil((i + 1) / _this.columns);
      var rowFromEnd = _this.rows - row + 1;
      var column = position % _this.columns || _this.columns;
      var columnFromEnd = _this.columns - column + 1;
      return h(script$9, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        key: page.key,
        attributes: _this.store,
        page,
        position,
        row,
        rowFromEnd,
        column,
        columnFromEnd,
        titlePosition: _this.titlePosition,
        canMove: _this.canMove,
        "onUpdate:page": function onUpdatePage(e) {
          return _this.move(e, {
            position: i + 1
          });
        },
        onDayfocusin: function onDayfocusin(e) {
          _this.lastFocusedDay = e;
          _this.$emit("dayfocusin", e);
        },
        onDayfocusout: function onDayfocusout(e) {
          _this.lastFocusedDay = null;
          _this.$emit("dayfocusout", e);
        }
      }), _this.$slots);
    });
    var getArrowButton = function getArrowButton2(isPrev) {
      var click2 = function click3() {
        return _this.move(isPrev ? -_this.step_ : _this.step_);
      };
      var keydown2 = function keydown3(e) {
        return onSpaceOrEnter(e, click2);
      };
      var isDisabled2 = isPrev ? !_this.canMovePrev : !_this.canMoveNext;
      return h("div", {
        class: ["vc-arrow", "is-".concat(isPrev ? "left" : "right"), {
          "is-disabled": isDisabled2
        }],
        role: "button",
        onClick: click2,
        onKeydown: keydown2
      }, [(isPrev ? _this.safeSlot("header-left-button", {
        click: click2
      }) : _this.safeSlot("header-right-button", {
        click: click2
      })) || h(script$8, {
        name: isPrev ? "left-arrow" : "right-arrow"
      })]);
    };
    var getNavPopover = function getNavPopover2() {
      return h(script$5, {
        id: _this.sharedState.navPopoverId,
        contentClass: "vc-nav-popover-container",
        ref: "navPopover"
      }, {
        default: function _default5(_ref) {
          var data9 = _ref.data;
          var position = data9.position, page = data9.page;
          return h(script$7, {
            value: page,
            position,
            validator: function validator(e) {
              return _this.canMove(e, {
                position
              });
            },
            onInput: function onInput(e) {
              return _this.move(e);
            }
          }, _objectSpread2({}, _this.$slots));
        }
      });
    };
    var getDayPopover = function getDayPopover2() {
      return h(script$5, {
        id: _this.sharedState.dayPopoverId,
        contentClass: "vc-day-popover-container"
      }, {
        default: function _default5(_ref2) {
          var day = _ref2.data, updateLayout = _ref2.updateLayout, hide3 = _ref2.hide;
          var attributes2 = Object.values(day.attributes).filter(function(a2) {
            return a2.popover;
          });
          var masks3 = _this.$locale.masks;
          var format2 = _this.formatDate;
          var dayTitle = format2(day.date, masks3.dayPopover);
          return _this.safeSlot("day-popover", {
            day,
            attributes: attributes2,
            masks: masks3,
            format: format2,
            dayTitle,
            updateLayout,
            hide: hide3
          }, h("div", [
            masks3.dayPopover && h("div", {
              class: ["vc-day-popover-header"]
            }, [dayTitle]),
            attributes2.map(function(attribute) {
              return h(script$3$1, {
                key: attribute.key,
                attribute
              });
            })
          ]));
        }
      });
    };
    return h("div", {
      "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year",
      class: ["vc-container", "vc-".concat(this.$theme.color), {
        "vc-is-expanded": this.isExpanded,
        "vc-is-dark": this.$theme.isDark
      }],
      onKeydown: this.handleKeydown,
      onMouseup: function onMouseup(e) {
        return e.preventDefault();
      },
      ref: "container"
    }, [getNavPopover(), h("div", {
      class: ["vc-pane-container", {
        "in-transition": this.inTransition
      }]
    }, [h(script$6, {
      name: this.transitionName,
      "on-before-enter": function onBeforeEnter() {
        _this.inTransition = true;
      },
      "on-after-enter": function onAfterEnter() {
        _this.inTransition = false;
      }
    }, {
      default: function _default5() {
        return h("div", _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
          class: "vc-pane-layout",
          style: {
            gridTemplateColumns: "repeat(".concat(_this.columns, ", 1fr)")
          },
          key: _this.firstPage ? _this.firstPage.key : ""
        }), panes);
      }
    }), h("div", {
      class: ["vc-arrows-container title-".concat(this.titlePosition)]
    }, [getArrowButton(true), getArrowButton(false)]), this.$slots.footer && this.$slots.footer()]), getDayPopover()]);
  },
  mixins: [rootMixin$1, slotMixin$1],
  provide: function provide() {
    return {
      sharedState: this.sharedState
    };
  },
  props: {
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    },
    step: Number,
    titlePosition: {
      type: String,
      default: getDefault("titlePosition")
    },
    isExpanded: Boolean,
    fromDate: Date,
    toDate: Date,
    fromPage: Object,
    toPage: Object,
    minPage: Object,
    maxPage: Object,
    transition: String,
    attributes: [Object, Array],
    trimWeeks: Boolean,
    disablePageSwipe: Boolean
  },
  data: function data6() {
    return {
      pages: [],
      store: null,
      lastFocusedDay: null,
      focusableDay: new Date().getDate(),
      transitionName: "",
      inTransition: false,
      sharedState: {
        navPopoverId: createGuid(),
        dayPopoverId: createGuid(),
        theme: {},
        masks: {},
        locale: {}
      }
    };
  },
  computed: {
    firstPage: function firstPage() {
      return head_1(this.pages);
    },
    lastPage: function lastPage() {
      return last_1(this.pages);
    },
    minPage_: function minPage_() {
      return this.minPage || this.pageForDate(this.minDate);
    },
    maxPage_: function maxPage_() {
      return this.maxPage || this.pageForDate(this.maxDate);
    },
    count: function count() {
      return this.rows * this.columns;
    },
    step_: function step_() {
      return this.step || this.count;
    },
    canMovePrev: function canMovePrev() {
      return this.canMove(-this.step_);
    },
    canMoveNext: function canMoveNext() {
      return this.canMove(this.step_);
    }
  },
  watch: {
    $locale: function $locale2() {
      this.refreshLocale();
      this.refreshPages({
        page: this.firstPage,
        ignoreCache: true
      });
      this.initStore();
    },
    $theme: function $theme2() {
      this.refreshTheme();
      this.initStore();
    },
    fromDate: function fromDate() {
      this.refreshPages();
    },
    fromPage: function fromPage(val) {
      var firstPage2 = this.pages && this.pages[0];
      if (pageIsEqualToPage(val, firstPage2))
        return;
      this.refreshPages();
    },
    toPage: function toPage(val) {
      var lastPage2 = this.pages && this.pages[this.pages.length - 1];
      if (pageIsEqualToPage(val, lastPage2))
        return;
      this.refreshPages();
    },
    count: function count2() {
      this.refreshPages();
    },
    attributes: function attributes(val) {
      var _this$store$refresh = this.store.refresh(val), adds = _this$store$refresh.adds, deletes = _this$store$refresh.deletes;
      this.refreshAttrs(this.pages, adds, deletes);
    },
    pages: function pages(val) {
      this.refreshAttrs(val, this.store.list, null, true);
    },
    disabledAttribute: function disabledAttribute2() {
      this.refreshDisabledDays();
    },
    lastFocusedDay: function lastFocusedDay(val) {
      if (val) {
        this.focusableDay = val.day;
        this.refreshFocusableDays();
      }
    },
    inTransition: function inTransition(val) {
      if (val) {
        this.$emit("transition-start");
      } else {
        this.$emit("transition-end");
        if (this.transitionPromise) {
          this.transitionPromise.resolve(true);
          this.transitionPromise = null;
        }
      }
    }
  },
  created: function created2() {
    this.refreshLocale();
    this.refreshTheme();
    this.initStore();
    this.refreshPages();
  },
  mounted: function mounted5() {
    var _this2 = this;
    if (!this.disablePageSwipe) {
      this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, function(_ref3) {
        var toLeft = _ref3.toLeft, toRight = _ref3.toRight;
        if (toLeft) {
          _this2.moveNext();
        } else if (toRight) {
          _this2.movePrev();
        }
      }, getDefault("touch"));
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this.removeHandlers && this.removeHandlers();
  },
  methods: {
    refreshLocale: function refreshLocale() {
      this.sharedState.locale = this.$locale;
      this.sharedState.masks = this.$locale.masks;
    },
    refreshTheme: function refreshTheme() {
      this.sharedState.theme = this.$theme;
    },
    canMove: function canMove(arg) {
      var _this3 = this;
      var opts2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var page = this.firstPage && this.$locale.toPage(arg, this.firstPage);
      if (!page)
        return false;
      var position = opts2.position;
      if (isNumber_1(arg))
        position = 1;
      if (!position) {
        if (pageIsBeforePage(page, this.firstPage)) {
          position = -1;
        } else if (pageIsAfterPage(page, this.lastPage)) {
          position = 1;
        } else {
          return true;
        }
      }
      Object.assign(opts2, this.getTargetPageRange(page, {
        position,
        force: true
      }));
      return pageRangeToArray(opts2.fromPage, opts2.toPage).some(function(p) {
        return pageIsBetweenPages(p, _this3.minPage_, _this3.maxPage_);
      });
    },
    movePrev: function movePrev2(opts2) {
      return this.move(-this.step_, opts2);
    },
    moveNext: function moveNext2(opts2) {
      return this.move(this.step_, opts2);
    },
    move: function move(arg) {
      var opts2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var canMove2 = this.canMove(arg, opts2);
      if (!opts2.force && !canMove2) {
        return Promise.reject(new Error("Move target is disabled: ".concat(JSON.stringify(opts2))));
      }
      this.$refs.navPopover.hide({
        hideDelay: 0
      });
      if (opts2.fromPage && !pageIsEqualToPage(opts2.fromPage, this.firstPage)) {
        return this.refreshPages(_objectSpread2(_objectSpread2({}, opts2), {}, {
          page: opts2.fromPage,
          position: 1,
          force: true
        }));
      }
      return Promise.resolve(true);
    },
    focusDate: function focusDate(date2) {
      var _this4 = this;
      var opts2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.move(date2, opts2).then(function() {
        var focusableEl = _this4.$el.querySelector(".id-".concat(_this4.$locale.getDayId(date2), ".in-month .vc-focusable"));
        if (focusableEl) {
          focusableEl.focus();
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      });
    },
    showPageRange: function showPageRange(range, opts2) {
      var fromPage2;
      var toPage2;
      if (isDate$1(range)) {
        fromPage2 = this.pageForDate(range);
      } else if (isObject$1(range)) {
        var month2 = range.month, year3 = range.year;
        var from = range.from, to = range.to;
        if (isNumber_1(month2) && isNumber_1(year3)) {
          fromPage2 = range;
        } else if (from || to) {
          fromPage2 = isDate$1(from) ? this.pageForDate(from) : from;
          toPage2 = isDate$1(to) ? this.pageForDate(to) : to;
        }
      } else {
        return Promise.reject(new Error("Invalid page range provided."));
      }
      var lastPage2 = this.lastPage;
      var page = fromPage2;
      if (pageIsAfterPage(toPage2, lastPage2)) {
        page = addPages(toPage2, -(this.pages.length - 1));
      }
      if (pageIsBeforePage(page, fromPage2)) {
        page = fromPage2;
      }
      return this.refreshPages(_objectSpread2(_objectSpread2({}, opts2), {}, {
        page
      }));
    },
    getTargetPageRange: function getTargetPageRange(page) {
      var _ref4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, position = _ref4.position, force = _ref4.force;
      var fromPage2 = null;
      var toPage2 = null;
      if (pageIsValid(page)) {
        var pagesToAdd = 0;
        position = +position;
        if (!isNaN(position)) {
          pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
        }
        fromPage2 = addPages(page, pagesToAdd);
      } else {
        fromPage2 = this.getDefaultInitialPage();
      }
      toPage2 = addPages(fromPage2, this.count - 1);
      if (!force) {
        if (pageIsBeforePage(fromPage2, this.minPage_)) {
          fromPage2 = this.minPage_;
        } else if (pageIsAfterPage(toPage2, this.maxPage_)) {
          fromPage2 = addPages(this.maxPage_, 1 - this.count);
        }
        toPage2 = addPages(fromPage2, this.count - 1);
      }
      return {
        fromPage: fromPage2,
        toPage: toPage2
      };
    },
    getDefaultInitialPage: function getDefaultInitialPage() {
      var page = this.fromPage || this.pageForDate(this.fromDate);
      if (!pageIsValid(page)) {
        var toPage2 = this.toPage || this.pageForDate(this.toPage);
        if (pageIsValid(toPage2)) {
          page = addPages(toPage2, 1 - this.count);
        }
      }
      if (!pageIsValid(page)) {
        page = this.getPageForAttributes();
      }
      if (!pageIsValid(page)) {
        page = this.pageForThisMonth();
      }
      return page;
    },
    refreshPages: function refreshPages() {
      var _this5 = this;
      var _ref5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, page = _ref5.page, _ref5$position = _ref5.position, position = _ref5$position === void 0 ? 1 : _ref5$position, force = _ref5.force, transition = _ref5.transition, ignoreCache = _ref5.ignoreCache;
      return new Promise(function(resolve, reject) {
        var _this5$getTargetPageR = _this5.getTargetPageRange(page, {
          position,
          force
        }), fromPage2 = _this5$getTargetPageR.fromPage, toPage2 = _this5$getTargetPageR.toPage;
        var pages2 = [];
        for (var i = 0; i < _this5.count; i++) {
          pages2.push(_this5.buildPage(addPages(fromPage2, i), ignoreCache));
        }
        _this5.refreshDisabledDays(pages2);
        _this5.refreshFocusableDays(pages2);
        _this5.transitionName = _this5.getPageTransition(_this5.pages[0], pages2[0], transition);
        _this5.pages = pages2;
        _this5.$emit("update:from-page", fromPage2);
        _this5.$emit("update:to-page", toPage2);
        if (_this5.transitionName && _this5.transitionName !== "none") {
          _this5.transitionPromise = {
            resolve,
            reject
          };
        } else {
          resolve(true);
        }
      });
    },
    refreshDisabledDays: function refreshDisabledDays(pages2) {
      var _this6 = this;
      this.getPageDays(pages2).forEach(function(d2) {
        d2.isDisabled = !!_this6.disabledAttribute && _this6.disabledAttribute.intersectsDay(d2);
      });
    },
    refreshFocusableDays: function refreshFocusableDays(pages2) {
      var _this7 = this;
      this.getPageDays(pages2).forEach(function(d2) {
        d2.isFocusable = d2.inMonth && d2.day === _this7.focusableDay;
      });
    },
    getPageDays: function getPageDays() {
      var pages2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.pages;
      return pages2.reduce(function(prev, curr) {
        return prev.concat(curr.days);
      }, []);
    },
    getPageTransition: function getPageTransition(oldPage, newPage) {
      var transition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.transition;
      if (transition === "none")
        return transition;
      if (transition === "fade" || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) {
        return "fade";
      }
      var movePrev3 = pageIsBeforePage(newPage, oldPage);
      if (transition === "slide-v") {
        return movePrev3 ? "slide-down" : "slide-up";
      }
      return movePrev3 ? "slide-right" : "slide-left";
    },
    getPageForAttributes: function getPageForAttributes() {
      var page = null;
      var attr = this.store.pinAttr;
      if (attr && attr.hasDates) {
        var _attr$dates = _slicedToArray(attr.dates, 1), date2 = _attr$dates[0];
        date2 = date2.start || date2.date;
        page = this.pageForDate(date2);
      }
      return page;
    },
    buildPage: function buildPage(_ref6, ignoreCache) {
      var _this8 = this;
      var month2 = _ref6.month, year3 = _ref6.year;
      var key = "".concat(year3.toString(), "-").concat(month2.toString());
      var page = this.pages.find(function(p) {
        return p.key === key;
      });
      if (!page || ignoreCache) {
        var date2 = new Date(year3, month2 - 1, 15);
        var monthComps = this.$locale.getMonthComps(month2, year3);
        var prevMonthComps = this.$locale.getPrevMonthComps(month2, year3);
        var nextMonthComps = this.$locale.getNextMonthComps(month2, year3);
        page = {
          key,
          month: month2,
          year: year3,
          weeks: this.trimWeeks ? monthComps.weeks : 6,
          title: this.$locale.format(date2, this.$locale.masks.title),
          shortMonthLabel: this.$locale.format(date2, "MMM"),
          monthLabel: this.$locale.format(date2, "MMMM"),
          shortYearLabel: year3.toString().substring(2),
          yearLabel: year3.toString(),
          monthComps,
          prevMonthComps,
          nextMonthComps,
          canMove: function canMove2(pg) {
            return _this8.canMove(pg);
          },
          move: function move3(pg) {
            return _this8.move(pg);
          },
          moveThisMonth: function moveThisMonth() {
            return _this8.moveThisMonth();
          },
          movePrevMonth: function movePrevMonth() {
            return _this8.move(prevMonthComps);
          },
          moveNextMonth: function moveNextMonth() {
            return _this8.move(nextMonthComps);
          },
          refresh: true
        };
        page.days = this.$locale.getCalendarDays(page);
      }
      return page;
    },
    initStore: function initStore() {
      this.store = new AttributeStore(this.$theme, this.$locale, this.attributes);
      this.refreshAttrs(this.pages, this.store.list, [], true);
    },
    refreshAttrs: function refreshAttrs() {
      var pages2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var adds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var deletes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      var reset = arguments.length > 3 ? arguments[3] : void 0;
      if (!arrayHasItems(pages2))
        return;
      pages2.forEach(function(p) {
        p.days.forEach(function(d2) {
          var shouldRefresh = false;
          var map2 = {};
          if (reset) {
            shouldRefresh = true;
          } else if (hasAny(d2.attributesMap, deletes)) {
            map2 = omit_1(d2.attributesMap, deletes);
            shouldRefresh = true;
          } else {
            map2 = d2.attributesMap || {};
          }
          adds.forEach(function(attr) {
            var targetDate = attr.intersectsDay(d2);
            if (targetDate) {
              var newAttr = _objectSpread2(_objectSpread2({}, attr), {}, {
                targetDate
              });
              map2[attr.key] = newAttr;
              shouldRefresh = true;
            }
          });
          if (shouldRefresh) {
            d2.attributesMap = map2;
            d2.shouldRefresh = true;
          }
        });
      });
    },
    handleKeydown: function handleKeydown(e) {
      var day = this.lastFocusedDay;
      if (day != null) {
        day.event = e;
        this.handleDayKeydown(day);
      }
    },
    handleDayKeydown: function handleDayKeydown(day) {
      var dateFromTime = day.dateFromTime, event = day.event;
      var date2 = dateFromTime(12);
      var newDate = null;
      switch (event.key) {
        case "ArrowLeft": {
          newDate = addDays(date2, -1);
          break;
        }
        case "ArrowRight": {
          newDate = addDays(date2, 1);
          break;
        }
        case "ArrowUp": {
          newDate = addDays(date2, -7);
          break;
        }
        case "ArrowDown": {
          newDate = addDays(date2, 7);
          break;
        }
        case "Home": {
          newDate = addDays(date2, -day.weekdayPosition + 1);
          break;
        }
        case "End": {
          newDate = addDays(date2, day.weekdayPositionFromEnd);
          break;
        }
        case "PageUp": {
          if (event.altKey) {
            newDate = addYears(date2, -1);
          } else {
            newDate = addMonths(date2, -1);
          }
          break;
        }
        case "PageDown": {
          if (event.altKey) {
            newDate = addYears(date2, 1);
          } else {
            newDate = addMonths(date2, 1);
          }
          break;
        }
      }
      if (newDate) {
        event.preventDefault();
        this.focusDate(newDate).catch();
      }
    }
  }
};
var css_248z$2 = ".vc-container {\n  --white: #ffffff;\n  --black: #000000;\n\n  --gray-100: #f7fafc;\n  --gray-200: #edf2f7;\n  --gray-300: #e2e8f0;\n  --gray-400: #cbd5e0;\n  --gray-500: #a0aec0;\n  --gray-600: #718096;\n  --gray-700: #4a5568;\n  --gray-800: #2d3748;\n  --gray-900: #1a202c;\n\n  --red-100: #fff5f5;\n  --red-200: #fed7d7;\n  --red-300: #feb2b2;\n  --red-400: #fc8181;\n  --red-500: #f56565;\n  --red-600: #e53e3e;\n  --red-700: #c53030;\n  --red-800: #9b2c2c;\n  --red-900: #742a2a;\n\n  --orange-100: #fffaf0;\n  --orange-200: #feebc8;\n  --orange-300: #fbd38d;\n  --orange-400: #f6ad55;\n  --orange-500: #ed8936;\n  --orange-600: #dd6b20;\n  --orange-700: #c05621;\n  --orange-800: #9c4221;\n  --orange-900: #7b341e;\n\n  --yellow-100: #fffff0;\n  --yellow-200: #fefcbf;\n  --yellow-300: #faf089;\n  --yellow-400: #f6e05e;\n  --yellow-500: #ecc94b;\n  --yellow-600: #d69e2e;\n  --yellow-700: #b7791f;\n  --yellow-800: #975a16;\n  --yellow-900: #744210;\n\n  --green-100: #f0fff4;\n  --green-200: #c6f6d5;\n  --green-300: #9ae6b4;\n  --green-400: #68d391;\n  --green-500: #48bb78;\n  --green-600: #38a169;\n  --green-700: #2f855a;\n  --green-800: #276749;\n  --green-900: #22543d;\n\n  --teal-100: #e6fffa;\n  --teal-200: #b2f5ea;\n  --teal-300: #81e6d9;\n  --teal-400: #4fd1c5;\n  --teal-500: #38b2ac;\n  --teal-600: #319795;\n  --teal-700: #2c7a7b;\n  --teal-800: #285e61;\n  --teal-900: #234e52;\n\n  --blue-100: #ebf8ff;\n  --blue-200: #bee3f8;\n  --blue-300: #90cdf4;\n  --blue-400: #63b3ed;\n  --blue-500: #4299e1;\n  --blue-600: #3182ce;\n  --blue-700: #2b6cb0;\n  --blue-800: #2c5282;\n  --blue-900: #2a4365;\n\n  --indigo-100: #ebf4ff;\n  --indigo-200: #c3dafe;\n  --indigo-300: #a3bffa;\n  --indigo-400: #7f9cf5;\n  --indigo-500: #667eea;\n  --indigo-600: #5a67d8;\n  --indigo-700: #4c51bf;\n  --indigo-800: #434190;\n  --indigo-900: #3c366b;\n\n  --purple-100: #faf5ff;\n  --purple-200: #e9d8fd;\n  --purple-300: #d6bcfa;\n  --purple-400: #b794f4;\n  --purple-500: #9f7aea;\n  --purple-600: #805ad5;\n  --purple-700: #6b46c1;\n  --purple-800: #553c9a;\n  --purple-900: #44337a;\n\n  --pink-100: #fff5f7;\n  --pink-200: #fed7e2;\n  --pink-300: #fbb6ce;\n  --pink-400: #f687b3;\n  --pink-500: #ed64a6;\n  --pink-600: #d53f8c;\n  --pink-700: #b83280;\n  --pink-800: #97266d;\n  --pink-900: #702459;\n}\n.vc-container.vc-red {\n    --accent-100: var(--red-100);\n    --accent-200: var(--red-200);\n    --accent-300: var(--red-300);\n    --accent-400: var(--red-400);\n    --accent-500: var(--red-500);\n    --accent-600: var(--red-600);\n    --accent-700: var(--red-700);\n    --accent-800: var(--red-800);\n    --accent-900: var(--red-900);\n}\n.vc-container.vc-orange {\n    --accent-100: var(--orange-100);\n    --accent-200: var(--orange-200);\n    --accent-300: var(--orange-300);\n    --accent-400: var(--orange-400);\n    --accent-500: var(--orange-500);\n    --accent-600: var(--orange-600);\n    --accent-700: var(--orange-700);\n    --accent-800: var(--orange-800);\n    --accent-900: var(--orange-900);\n}\n.vc-container.vc-yellow {\n    --accent-100: var(--yellow-100);\n    --accent-200: var(--yellow-200);\n    --accent-300: var(--yellow-300);\n    --accent-400: var(--yellow-400);\n    --accent-500: var(--yellow-500);\n    --accent-600: var(--yellow-600);\n    --accent-700: var(--yellow-700);\n    --accent-800: var(--yellow-800);\n    --accent-900: var(--yellow-900);\n}\n.vc-container.vc-green {\n    --accent-100: var(--green-100);\n    --accent-200: var(--green-200);\n    --accent-300: var(--green-300);\n    --accent-400: var(--green-400);\n    --accent-500: var(--green-500);\n    --accent-600: var(--green-600);\n    --accent-700: var(--green-700);\n    --accent-800: var(--green-800);\n    --accent-900: var(--green-900);\n}\n.vc-container.vc-teal {\n    --accent-100: var(--teal-100);\n    --accent-200: var(--teal-200);\n    --accent-300: var(--teal-300);\n    --accent-400: var(--teal-400);\n    --accent-500: var(--teal-500);\n    --accent-600: var(--teal-600);\n    --accent-700: var(--teal-700);\n    --accent-800: var(--teal-800);\n    --accent-900: var(--teal-900);\n}\n.vc-container.vc-blue {\n    --accent-100: var(--blue-100);\n    --accent-200: var(--blue-200);\n    --accent-300: var(--blue-300);\n    --accent-400: var(--blue-400);\n    --accent-500: var(--blue-500);\n    --accent-600: var(--blue-600);\n    --accent-700: var(--blue-700);\n    --accent-800: var(--blue-800);\n    --accent-900: var(--blue-900);\n}\n.vc-container.vc-indigo {\n    --accent-100: var(--indigo-100);\n    --accent-200: var(--indigo-200);\n    --accent-300: var(--indigo-300);\n    --accent-400: var(--indigo-400);\n    --accent-500: var(--indigo-500);\n    --accent-600: var(--indigo-600);\n    --accent-700: var(--indigo-700);\n    --accent-800: var(--indigo-800);\n    --accent-900: var(--indigo-900);\n}\n.vc-container.vc-purple {\n    --accent-100: var(--purple-100);\n    --accent-200: var(--purple-200);\n    --accent-300: var(--purple-300);\n    --accent-400: var(--purple-400);\n    --accent-500: var(--purple-500);\n    --accent-600: var(--purple-600);\n    --accent-700: var(--purple-700);\n    --accent-800: var(--purple-800);\n    --accent-900: var(--purple-900);\n}\n.vc-container.vc-pink {\n    --accent-100: var(--pink-100);\n    --accent-200: var(--pink-200);\n    --accent-300: var(--pink-300);\n    --accent-400: var(--pink-400);\n    --accent-500: var(--pink-500);\n    --accent-600: var(--pink-600);\n    --accent-700: var(--pink-700);\n    --accent-800: var(--pink-800);\n    --accent-900: var(--pink-900);\n}\n.vc-container {\n\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n\n  --text-xs: 12px;\n  --text-sm: 14px;\n  --text-base: 16px;\n  --text-lg: 18px;\n\n  --leading-snug: 1.375;\n\n  --rounded: 0.25rem;\n  --rounded-lg: 0.5rem;\n  --rounded-full: 9999px;\n\n  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n\n  --slide-translate: 22px;\n  --slide-duration: 0.15s;\n  --slide-timing: ease;\n\n  --day-content-transition-time: 0.13s ease-in;\n  --weeknumber-offset: -34px;\n\n  position: relative;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: -webkit-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: max-content;\n  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    'Helvetica', 'Arial', sans-serif;\n  color: var(--gray-900);\n  background-color: var(--white);\n  border: 1px solid;\n  border-color: var(--gray-400);\n  border-radius: var(--rounded-lg);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent;\n}\n.vc-container,\n  .vc-container * {\n    box-sizing: border-box;\n}\n.vc-container:focus, .vc-container *:focus {\n      outline: none;\n}\n.vc-container button,\n  .vc-container [role='button'] {\n    cursor: pointer;\n}\n.vc-container.vc-is-expanded {\n    min-width: 100%;\n}\n/* Hides double border within popovers */\n.vc-container .vc-container {\n    border: none;\n}\n.vc-container.vc-is-dark {\n    color: var(--gray-100);\n    background-color: var(--gray-900);\n    border-color: var(--gray-700);\n}\n.vc-pane-container {\n  width: 100%;\n  position: relative;\n}\n.vc-pane-container.in-transition {\n    overflow: hidden;\n}\n.vc-pane-layout {\n  display: grid;\n}\n.vc-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: auto;\n  color: var(--gray-600);\n  border-width: 2px;\n  border-style: solid;\n  border-radius: var(--rounded);\n  border-color: transparent;\n}\n.vc-arrow:hover {\n    background: var(--gray-200);\n}\n.vc-arrow:focus {\n    border-color: var(--gray-300);\n}\n.vc-arrow.is-disabled {\n    opacity: 0.25;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.vc-day-popover-container {\n  color: var(--white);\n  background-color: var(--gray-800);\n  border: 1px solid;\n  border-color: var(--gray-700);\n  border-radius: var(--rounded);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n  padding: 4px 8px;\n  box-shadow: var(--shadow);\n}\n.vc-day-popover-header {\n  font-size: var(--text-xs);\n  color: var(--gray-300);\n  font-weight: var(--font-semibold);\n  text-align: center;\n}\n.vc-arrows-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 10px;\n  pointer-events: none;\n}\n.vc-arrows-container.title-left {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.vc-arrows-container.title-right {\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.vc-is-dark .vc-arrow {\n    color: var(--white);\n}\n.vc-is-dark .vc-arrow:hover {\n      background: var(--gray-800);\n}\n.vc-is-dark .vc-arrow:focus {\n      border-color: var(--gray-700);\n}\n.vc-is-dark .vc-day-popover-container {\n    color: var(--gray-800);\n    background-color: var(--white);\n    border-color: var(--gray-100);\n}\n.vc-is-dark .vc-day-popover-header {\n    color: var(--gray-700);\n}\n";
styleInject(css_248z$2);
var script$2 = {
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    options: Array,
    modelValue: null
  }
};
var _hoisted_1$1 = {
  class: "vc-select"
};
var _hoisted_2$1 = /* @__PURE__ */ createVNode("div", {
  class: "vc-select-arrow"
}, [/* @__PURE__ */ createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/* @__PURE__ */ createVNode("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("select", mergeProps(_ctx.$attrs, {
    value: $props.modelValue,
    onChange: _cache[1] || (_cache[1] = function($event) {
      return _ctx.$emit("update:modelValue", $event.target.value);
    })
  }), [(openBlock(true), createBlock(Fragment, null, renderList($props.options, function(option) {
    return openBlock(), createBlock("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, toDisplayString(option.label), 9, ["value", "disabled"]);
  }), 128))], 16, ["value"]), _hoisted_2$1]);
}
var css_248z$1 = ".vc-select {\n  position: relative;\n}\n.vc-select select {\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: block;\n    -webkit-appearance: none;\n            appearance: none;\n    width: 52px;\n    height: 30px;\n    font-size: var(--text-base);\n    font-weight: var(--font-medium);\n    text-align: left;\n    background-color: var(--gray-200);\n    border: 2px solid;\n    border-color: var(--gray-200);\n    color: var(--gray-900);\n    padding: 0 20px 0 8px;\n    border-radius: var(--rounded);\n    line-height: var(--leading-tight);\n    text-indent: 0px;\n    cursor: pointer;\n    -moz-padding-start: 3px;\n}\n.vc-select select:hover {\n      color: var(--gray-600);\n}\n.vc-select select:focus {\n      outline: 0;\n      border-color: var(--accent-400);\n      background-color: var(--white);\n}\n.vc-select-arrow {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px 0 0;\n  color: var(--gray-500);\n}\n.vc-select-arrow svg {\n    width: 16px;\n    height: 16px;\n    fill: currentColor;\n}\n.vc-is-dark select {\n    background: var(--gray-700);\n    color: var(--gray-100);\n    border-color: var(--gray-700);\n}\n.vc-is-dark select:hover {\n      color: var(--gray-400);\n}\n.vc-is-dark select:focus {\n      border-color: var(--accent-500);\n      background-color: var(--gray-800);\n}\n";
styleInject(css_248z$1);
script$2.render = render$1;
var script$1 = {
  name: "TimePicker",
  components: {
    TimeSelect: script$2
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    locale: {
      type: Object,
      required: true
    },
    theme: {
      type: Object,
      required: true
    },
    is24hr: {
      type: Boolean,
      default: true
    },
    minuteIncrement: {
      type: Number,
      default: 1
    },
    showBorder: Boolean
  },
  data: function data7() {
    return {
      hours: 0,
      minutes: 0,
      isAM: true
    };
  },
  computed: {
    date: function date() {
      var date2 = this.locale.normalizeDate(this.modelValue);
      if (this.modelValue.hours === 24) {
        date2 = new Date(date2.getTime() - 1);
      }
      return date2;
    },
    hourOptions: function hourOptions() {
      var options12 = [{
        value: 0,
        label: "12"
      }, {
        value: 1,
        label: "1"
      }, {
        value: 2,
        label: "2"
      }, {
        value: 3,
        label: "3"
      }, {
        value: 4,
        label: "4"
      }, {
        value: 5,
        label: "5"
      }, {
        value: 6,
        label: "6"
      }, {
        value: 7,
        label: "7"
      }, {
        value: 8,
        label: "8"
      }, {
        value: 9,
        label: "9"
      }, {
        value: 10,
        label: "10"
      }, {
        value: 11,
        label: "11"
      }];
      var options24 = [{
        value: 0,
        label: "00"
      }, {
        value: 1,
        label: "01"
      }, {
        value: 2,
        label: "02"
      }, {
        value: 3,
        label: "03"
      }, {
        value: 4,
        label: "04"
      }, {
        value: 5,
        label: "05"
      }, {
        value: 6,
        label: "06"
      }, {
        value: 7,
        label: "07"
      }, {
        value: 8,
        label: "08"
      }, {
        value: 9,
        label: "09"
      }, {
        value: 10,
        label: "10"
      }, {
        value: 11,
        label: "11"
      }, {
        value: 12,
        label: "12"
      }, {
        value: 13,
        label: "13"
      }, {
        value: 14,
        label: "14"
      }, {
        value: 15,
        label: "15"
      }, {
        value: 16,
        label: "16"
      }, {
        value: 17,
        label: "17"
      }, {
        value: 18,
        label: "18"
      }, {
        value: 19,
        label: "19"
      }, {
        value: 20,
        label: "20"
      }, {
        value: 21,
        label: "21"
      }, {
        value: 22,
        label: "22"
      }, {
        value: 23,
        label: "23"
      }];
      if (this.is24hr)
        return options24;
      return options12;
    },
    minuteOptions: function minuteOptions() {
      var options = [];
      var m2 = 0;
      var added = false;
      while (m2 <= 59) {
        options.push({
          value: m2,
          label: pad(m2, 2)
        });
        added = added || m2 === this.minutes;
        m2 += this.minuteIncrement;
        if (!added && m2 > this.minutes) {
          added = true;
          options.push({
            value: this.minutes,
            label: pad(this.minutes, 2),
            disabled: true
          });
        }
      }
      return options;
    }
  },
  watch: {
    modelValue: function modelValue() {
      this.setup();
    },
    hours: function hours() {
      this.updateValue();
    },
    minutes: function minutes() {
      this.updateValue();
    },
    isAM: function isAM() {
      this.updateValue();
    }
  },
  created: function created3() {
    this.setup();
  },
  methods: {
    protected: function _protected(fn2) {
      var _this = this;
      if (this.busy)
        return;
      this.busy = true;
      fn2();
      this.$nextTick(function() {
        return _this.busy = false;
      });
    },
    setup: function setup() {
      var _this2 = this;
      this.protected(function() {
        var hours2 = _this2.modelValue.hours;
        if (hours2 === 24)
          hours2 = 0;
        var isAM2 = true;
        if (!_this2.is24hr && hours2 >= 12) {
          hours2 -= 12;
          isAM2 = false;
        }
        _this2.hours = hours2;
        _this2.minutes = _this2.modelValue.minutes;
        _this2.isAM = isAM2;
      });
    },
    updateValue: function updateValue() {
      var _this3 = this;
      this.protected(function() {
        var hours2 = _this3.hours;
        if (!_this3.is24hr && !_this3.isAM) {
          hours2 += 12;
        }
        _this3.$emit("update:modelValue", _objectSpread2(_objectSpread2({}, _this3.modelValue), {}, {
          hours: hours2,
          minutes: _this3.minutes,
          seconds: 0,
          milliseconds: 0
        }));
      });
    }
  }
};
var _withId = /* @__PURE__ */ withScopeId();
pushScopeId("data-v-63f66eaa");
var _hoisted_1 = /* @__PURE__ */ createVNode("div", null, [/* @__PURE__ */ createVNode("svg", {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  class: "vc-time-icon",
  stroke: "currentColor"
}, [/* @__PURE__ */ createVNode("path", {
  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1);
var _hoisted_2 = {
  class: "vc-time-content"
};
var _hoisted_3 = {
  key: 0,
  class: "vc-time-date"
};
var _hoisted_4 = {
  class: "vc-time-weekday"
};
var _hoisted_5 = {
  class: "vc-time-month"
};
var _hoisted_6 = {
  class: "vc-time-day"
};
var _hoisted_7 = {
  class: "vc-time-year"
};
var _hoisted_8 = {
  class: "vc-time-select"
};
var _hoisted_9 = /* @__PURE__ */ createVNode("span", {
  style: {
    "margin": "0 4px"
  }
}, ":", -1);
var _hoisted_10 = {
  key: 0,
  class: "vc-am-pm"
};
popScopeId();
var render5 = /* @__PURE__ */ _withId(function render6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_time_select = resolveComponent("time-select");
  return openBlock(), createBlock("div", {
    class: ["vc-time-picker", [{
      "vc-invalid": !$props.modelValue.isValid,
      "vc-bordered": $props.showBorder
    }]]
  }, [_hoisted_1, createVNode("div", _hoisted_2, [$options.date ? (openBlock(), createBlock("div", _hoisted_3, [createVNode("span", _hoisted_4, toDisplayString($props.locale.format($options.date, "WWW")), 1), createVNode("span", _hoisted_5, toDisplayString($props.locale.format($options.date, "MMM")), 1), createVNode("span", _hoisted_6, toDisplayString($props.locale.format($options.date, "D")), 1), createVNode("span", _hoisted_7, toDisplayString($props.locale.format($options.date, "YYYY")), 1)])) : createCommentVNode("", true), createVNode("div", _hoisted_8, [createVNode(_component_time_select, {
    modelValue: $data.hours,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function($event) {
      return $data.hours = $event;
    }),
    modelModifiers: {
      number: true
    },
    options: $options.hourOptions
  }, null, 8, ["modelValue", "options"]), _hoisted_9, createVNode(_component_time_select, {
    modelValue: $data.minutes,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
      return $data.minutes = $event;
    }),
    modelModifiers: {
      number: true
    },
    options: $options.minuteOptions
  }, null, 8, ["modelValue", "options"]), !$props.is24hr ? (openBlock(), createBlock("div", _hoisted_10, [createVNode("button", {
    class: {
      active: $data.isAM
    },
    onClick: _cache[3] || (_cache[3] = withModifiers(function($event) {
      return $data.isAM = true;
    }, ["prevent"])),
    type: "button"
  }, " AM ", 2), createVNode("button", {
    class: {
      active: !$data.isAM
    },
    onClick: _cache[4] || (_cache[4] = withModifiers(function($event) {
      return $data.isAM = false;
    }, ["prevent"])),
    type: "button"
  }, " PM ", 2)])) : createCommentVNode("", true)])])], 2);
});
var css_248z = ".vc-time-picker[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px;\n}\n.vc-time-picker.vc-invalid[data-v-63f66eaa] {\n    pointer-events: none;\n    opacity: 0.5;\n}\n.vc-time-picker.vc-bordered[data-v-63f66eaa] {\n    border-top: 1px solid var(--gray-400);\n}\n.vc-time-icon[data-v-63f66eaa] {\n  width: 16px;\n  height: 16px;\n  color: var(--gray-600);\n}\n.vc-time-content[data-v-63f66eaa] {\n  margin-left: 8px;\n}\n.vc-time-date[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  text-transform: uppercase;\n  padding: 0 0 4px 4px;\n  margin-top: -4px;\n  line-height: 21px;\n}\n.vc-time-weekday[data-v-63f66eaa] {\n  color: var(--gray-700);\n  letter-spacing: var(--tracking-wide);\n}\n.vc-time-month[data-v-63f66eaa] {\n  color: var(--accent-600);\n  margin-left: 8px;\n}\n.vc-time-day[data-v-63f66eaa] {\n  color: var(--accent-600);\n  margin-left: 4px;\n}\n.vc-time-year[data-v-63f66eaa] {\n  color: var(--gray-500);\n  margin-left: 8px;\n}\n.vc-time-select[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vc-am-pm[data-v-63f66eaa] {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: var(--gray-200);\n  color: var(--gray-800);\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: var(--rounded);\n  height: 30px;\n}\n.vc-am-pm button[data-v-63f66eaa] {\n    font-size: var(--text-sm);\n    font-weight: var(--font-medium);\n    padding: 0 4px;\n    background: transparent;\n    border: 2px solid transparent;\n    border-radius: var(--rounded);\n    line-height: var(--leading-snug);\n}\n.vc-am-pm button[data-v-63f66eaa]:hover {\n      color: var(--gray-600);\n}\n.vc-am-pm button[data-v-63f66eaa]:focus {\n      border-color: var(--accent-400);\n}\n.vc-am-pm button.active[data-v-63f66eaa] {\n      background: var(--accent-600);\n      color: var(--white);\n}\n.vc-am-pm button.active[data-v-63f66eaa]:hover {\n        background: var(--accent-500);\n}\n.vc-am-pm button.active[data-v-63f66eaa]:focus {\n        border-color: var(--accent-400);\n}\n.vc-is-dark .vc-time-picker[data-v-63f66eaa] {\n    border-color: var(--gray-700);\n}\n.vc-is-dark .vc-time-icon[data-v-63f66eaa] {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-time-weekday[data-v-63f66eaa] {\n    color: var(--gray-400);\n}\n.vc-is-dark .vc-time-month[data-v-63f66eaa] {\n    color: var(--accent-400);\n}\n.vc-is-dark .vc-time-day[data-v-63f66eaa] {\n    color: var(--accent-400);\n}\n.vc-is-dark .vc-time-year[data-v-63f66eaa] {\n    color: var(--gray-500);\n}\n.vc-is-dark .vc-am-pm[data-v-63f66eaa] {\n    background: var(--gray-700);\n}\n.vc-is-dark .vc-am-pm[data-v-63f66eaa]:focus {\n      border-color: var(--accent-500);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa] {\n      color: var(--gray-100);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:hover {\n        color: var(--gray-400);\n}\n.vc-is-dark .vc-am-pm button[data-v-63f66eaa]:focus {\n        border-color: var(--accent-500);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa] {\n        background: var(--accent-500);\n        color: var(--white);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:hover {\n          background: var(--accent-600);\n}\n.vc-is-dark .vc-am-pm button.active[data-v-63f66eaa]:focus {\n          border-color: var(--accent-500);\n}\n";
styleInject(css_248z);
script$1.render = render5;
script$1.__scopeId = "data-v-63f66eaa";
var _dateConfig = {
  type: "auto",
  mask: "iso",
  timeAdjust: ""
};
var _rangeConfig = {
  start: _objectSpread2({}, _dateConfig),
  end: _objectSpread2({}, _dateConfig)
};
var MODE = {
  DATE: "date",
  DATE_TIME: "datetime",
  TIME: "time"
};
var RANGE_PRIORITY = {
  NONE: 0,
  START: 1,
  END: 2,
  BOTH: 3
};
var script = {
  name: "DatePicker",
  emits: ["update:modelValue", "drag", "dayclick", "daykeydown", "popover-will-show", "popover-did-show", "popover-will-hide", "popover-did-hide"],
  render: function render7() {
    var _this = this;
    var _footer = function footer(wrap, wrapperEl) {
      if (!_this.$slots.footer)
        return wrap;
      var children = [wrap, _this.$slots.footer()];
      return wrapperEl ? h(wrapperEl, children) : children;
    };
    var timePicker = function timePicker2() {
      if (!_this.dateParts)
        return null;
      var parts = _this.isRange ? _this.dateParts : [_this.dateParts[0]];
      return h("div", {}, _objectSpread2(_objectSpread2({}, _this.$slots), {}, {
        default: function _default5() {
          return parts.map(function(dp, idx) {
            return h(script$1, {
              modelValue: dp,
              locale: _this.$locale,
              theme: _this.$theme,
              is24hr: _this.is24hr,
              minuteIncrement: _this.minuteIncrement,
              showBorder: !_this.isTime,
              isDisabled: _this.isDateTime && !dp.isValid || _this.isDragging,
              "onUpdate:modelValue": function onUpdateModelValue(p) {
                return _this.onTimeInput(p, idx === 0);
              }
            });
          });
        }
      }));
    };
    var calendar = function calendar2() {
      return h(script$3, _objectSpread2(_objectSpread2({}, _this.$attrs), {}, {
        attributes: _this.attributes_,
        theme: _this.$theme,
        locale: _this.$locale,
        minDate: _this.minDateExact || _this.minDate,
        maxDate: _this.maxDateExact || _this.maxDate,
        disabledDates: _this.disabledDates,
        availableDates: _this.availableDates,
        onDayclick: _this.onDayClick,
        onDaykeydown: _this.onDayKeydown,
        onDaymouseenter: _this.onDayMouseEnter,
        ref: "calendar"
      }), _objectSpread2(_objectSpread2({}, _this.$slots), {}, {
        footer: function footer() {
          return _this.isDateTime ? _footer(timePicker()) : _footer();
        }
      }));
    };
    var content3 = function content4() {
      if (_this.isTime) {
        return h("div", {
          class: ["vc-container", "vc-".concat(_this.$theme.color), {
            "vc-is-dark": _this.$theme.isDark
          }]
        }, _footer(timePicker(), "div"));
      }
      return calendar();
    };
    return this.$slots.default ? h("div", [
      this.$slots.default(this.slotArgs),
      h(script$5, {
        id: this.datePickerPopoverId,
        placement: "bottom-start",
        contentClass: "vc-container".concat(this.isDark ? " vc-is-dark" : ""),
        "on-before-show": function onBeforeShow(e) {
          return _this.$emit("popover-will-show", e);
        },
        "on-after-show": function onAfterShow(e) {
          return _this.$emit("popover-did-show", e);
        },
        "on-before-hide": function onBeforeHide(e) {
          return _this.$emit("popover-will-hide", e);
        },
        "on-after-hide": function onAfterHide(e) {
          return _this.$emit("popover-did-hide", e);
        },
        ref: "popover"
      }, {
        default: content3
      })
    ]) : content3();
  },
  mixins: [rootMixin$1],
  props: {
    mode: {
      type: String,
      default: MODE.DATE
    },
    modelValue: {
      type: null,
      required: true
    },
    modelConfig: {
      type: Object,
      default: function _default3() {
        return _objectSpread2({}, _dateConfig);
      }
    },
    is24hr: Boolean,
    minuteIncrement: Number,
    isRequired: Boolean,
    isRange: Boolean,
    updateOnInput: {
      type: Boolean,
      default: getDefault("datePicker.updateOnInput")
    },
    inputDebounce: {
      type: Number,
      default: getDefault("datePicker.inputDebounce")
    },
    popover: {
      type: Object,
      default: function _default4() {
        return {};
      }
    },
    dragAttribute: Object,
    selectAttribute: Object,
    attributes: Array
  },
  data: function data8() {
    return {
      value_: null,
      dateParts: null,
      activeDate: "",
      dragValue: null,
      inputValues: ["", ""],
      updateTimeout: null,
      watchValue: true,
      datePickerPopoverId: createGuid()
    };
  },
  computed: {
    isDate: function isDate2() {
      return this.mode.toLowerCase() === MODE.DATE;
    },
    isDateTime: function isDateTime() {
      return this.mode.toLowerCase() === MODE.DATE_TIME;
    },
    isTime: function isTime() {
      return this.mode.toLowerCase() === MODE.TIME;
    },
    isDragging: function isDragging() {
      return !!this.dragValue;
    },
    modelConfig_: function modelConfig_() {
      if (this.isRange) {
        return {
          start: _objectSpread2(_objectSpread2({}, _rangeConfig.start), this.modelConfig.start || this.modelConfig),
          end: _objectSpread2(_objectSpread2({}, _rangeConfig.end), this.modelConfig.end || this.modelConfig)
        };
      }
      return _objectSpread2(_objectSpread2({}, _dateConfig), this.modelConfig);
    },
    inputMask: function inputMask() {
      var masks3 = this.$locale.masks;
      if (this.isTime) {
        return this.is24hr ? masks3.inputTime24hr : masks3.inputTime;
      }
      if (this.isDateTime) {
        return this.is24hr ? masks3.inputDateTime24hr : masks3.inputDateTime;
      }
      return this.$locale.masks.input;
    },
    inputMaskHasTime: function inputMaskHasTime() {
      return /[Hh]/g.test(this.inputMask);
    },
    inputMaskHasDate: function inputMaskHasDate() {
      return /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask);
    },
    inputMaskPatch: function inputMaskPatch() {
      if (this.inputMaskHasTime && this.inputMaskHasDate) {
        return PATCH.DATE_TIME;
      }
      if (this.inputMaskHasDate)
        return PATCH.DATE;
      if (this.inputMaskHasTime)
        return PATCH.TIME;
      return void 0;
    },
    slotArgs: function slotArgs() {
      var _this2 = this;
      var isRange = this.isRange, isDragging2 = this.isDragging, updateValue3 = this.updateValue, showPopover2 = this.showPopover, hidePopover2 = this.hidePopover, togglePopover2 = this.togglePopover;
      var inputValue = isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1]
      } : this.inputValues[0];
      var events = [true, false].map(function(isStart) {
        return _objectSpread2({
          input: _this2.onInputInput(isStart),
          change: _this2.onInputChange(isStart),
          keyup: _this2.onInputKeyup
        }, getPopoverTriggerEvents(_objectSpread2(_objectSpread2({}, _this2.popover_), {}, {
          id: _this2.datePickerPopoverId,
          callback: function callback(e) {
            if (e.action === "show" && e.completed) {
              _this2.onInputShow(isStart);
            }
          }
        })));
      });
      var inputEvents = isRange ? {
        start: events[0],
        end: events[1]
      } : events[0];
      return {
        inputValue,
        inputEvents,
        isDragging: isDragging2,
        updateValue: updateValue3,
        showPopover: showPopover2,
        hidePopover: hidePopover2,
        togglePopover: togglePopover2,
        getPopoverTriggerEvents
      };
    },
    popover_: function popover_() {
      return defaultsDeep_1(this.popover, getDefault("datePicker.popover"));
    },
    selectAttribute_: function selectAttribute_() {
      if (!this.hasValue(this.value_))
        return null;
      var attribute = _objectSpread2(_objectSpread2({
        key: "select-drag"
      }, this.selectAttribute), {}, {
        dates: this.value_,
        pinPage: true
      });
      var dot = attribute.dot, bar = attribute.bar, highlight = attribute.highlight, content3 = attribute.content;
      if (!dot && !bar && !highlight && !content3) {
        attribute.highlight = true;
      }
      return attribute;
    },
    dragAttribute_: function dragAttribute_() {
      if (!this.isRange || !this.hasValue(this.dragValue)) {
        return null;
      }
      var attribute = _objectSpread2(_objectSpread2({
        key: "select-drag"
      }, this.dragAttribute), {}, {
        dates: this.dragValue
      });
      var dot = attribute.dot, bar = attribute.bar, highlight = attribute.highlight, content3 = attribute.content;
      if (!dot && !bar && !highlight && !content3) {
        attribute.highlight = {
          startEnd: {
            fillMode: "outline"
          }
        };
      }
      return attribute;
    },
    attributes_: function attributes_() {
      var attrs = isArrayLikeObject_1(this.attributes) ? _toConsumableArray(this.attributes) : [];
      if (this.dragAttribute_) {
        attrs.push(this.dragAttribute_);
      } else if (this.selectAttribute_) {
        attrs.push(this.selectAttribute_);
      }
      return attrs;
    }
  },
  watch: {
    inputMask: function inputMask2() {
      this.formatInput();
    },
    modelValue: function modelValue2(val) {
      if (!this.watchValue)
        return;
      this.forceUpdateValue(val, {
        config: this.modelConfig,
        notify: false,
        formatInput: true,
        hidePopover: false
      });
    },
    value_: function value_() {
      this.refreshDateParts();
    },
    dragValue: function dragValue() {
      this.refreshDateParts();
    },
    timezone: function timezone() {
      this.refreshDateParts();
      this.forceUpdateValue(this.value_, {
        notify: true,
        formatInput: true
      });
    }
  },
  created: function created4() {
    this.forceUpdateValue(this.modelValue, {
      config: this.modelConfig_,
      notify: false,
      formatInput: true,
      hidePopover: false
    });
    this.refreshDateParts();
  },
  mounted: function mounted6() {
    var _this3 = this;
    on(document, "keydown", this.onDocumentKeyDown);
    this.offTapOrClickHandler = addTapOrClickHandler(document, function(e) {
      if (document.body.contains(e.target) && !elementContains(_this3.$el, e.target)) {
        _this3.dragValue = null;
        _this3.formatInput();
      }
    });
  },
  beforeUnmount: function beforeUnmount3() {
    off(document, "keydown", this.onDocumentKeyDown);
    this.offTapOrClickHandler();
  },
  methods: {
    getDateParts: function getDateParts(date2) {
      return this.$locale.getDateParts(date2);
    },
    getDateFromParts: function getDateFromParts(parts) {
      return this.$locale.getDateFromParts(parts);
    },
    refreshDateParts: function refreshDateParts() {
      var _this4 = this;
      var value2 = this.dragValue || this.value_;
      var dateParts = [];
      if (this.isRange) {
        if (value2 && value2.start) {
          dateParts.push(this.getDateParts(value2.start));
        } else {
          dateParts.push({});
        }
        if (value2 && value2.end) {
          dateParts.push(this.getDateParts(value2.end));
        } else {
          dateParts.push({});
        }
      } else if (value2) {
        dateParts.push(this.getDateParts(value2));
      } else {
        dateParts.push({});
      }
      this.$nextTick(function() {
        return _this4.dateParts = dateParts;
      });
    },
    onDocumentKeyDown: function onDocumentKeyDown(e) {
      if (this.dragValue && e.key === "Escape") {
        this.dragValue = null;
      }
    },
    onDayClick: function onDayClick(day) {
      this.handleDayClick(day);
      this.$emit("dayclick", day);
    },
    onDayKeydown: function onDayKeydown(day) {
      switch (day.event.key) {
        case " ":
        case "Enter": {
          this.handleDayClick(day);
          day.event.preventDefault();
          break;
        }
        case "Escape": {
          this.hidePopover();
        }
      }
      this.$emit("daykeydown", day);
    },
    handleDayClick: function handleDayClick(day) {
      var _this$popover_ = this.popover_, keepVisibleOnInput = _this$popover_.keepVisibleOnInput, visibility = _this$popover_.visibility;
      var opts2 = {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePopover: this.isDate && !keepVisibleOnInput && visibility !== "visible"
      };
      if (this.isRange) {
        if (!this.isDragging) {
          this.dragTrackingValue = _objectSpread2({}, day.range);
        } else {
          this.dragTrackingValue.end = day.date;
        }
        opts2.isDragging = !this.isDragging;
        opts2.rangePriority = opts2.isDragging ? RANGE_PRIORITY.NONE : RANGE_PRIORITY.BOTH;
        opts2.hidePopover = opts2.hidePopover && !opts2.isDragging;
        this.updateValue(this.dragTrackingValue, opts2);
      } else {
        opts2.clearIfEqual = !this.isRequired;
        this.updateValue(day.date, opts2);
      }
    },
    onDayMouseEnter: function onDayMouseEnter(day) {
      if (!this.isDragging)
        return;
      this.dragTrackingValue.end = day.date;
      this.updateValue(this.dragTrackingValue, {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePriority: false,
        rangePriority: RANGE_PRIORITY.NONE
      });
    },
    onTimeInput: function onTimeInput(parts, isStart) {
      var _this5 = this;
      var value2 = null;
      if (this.isRange) {
        var start2 = isStart ? parts : this.dateParts[0];
        var end2 = isStart ? this.dateParts[1] : parts;
        value2 = {
          start: start2,
          end: end2
        };
      } else {
        value2 = parts;
      }
      this.updateValue(value2, {
        patch: PATCH.TIME,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      }).then(function() {
        return _this5.adjustPageRange(isStart);
      });
    },
    onInputInput: function onInputInput(isStart) {
      var _this6 = this;
      return function(e) {
        if (!_this6.updateOnInput)
          return;
        _this6.onInputUpdate(e.target.value, isStart, {
          formatInput: false,
          hidePopover: false,
          debounce: _this6.inputDebounce
        });
      };
    },
    onInputChange: function onInputChange(isStart) {
      var _this7 = this;
      return function(e) {
        _this7.onInputUpdate(e.target.value, isStart, {
          formatInput: true,
          hidePopover: false
        });
      };
    },
    onInputUpdate: function onInputUpdate(inputValue, isStart, opts2) {
      var _this8 = this;
      this.inputValues.splice(isStart ? 0 : 1, 1, inputValue);
      var value2 = this.isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1] || this.inputValues[0]
      } : inputValue;
      var config = {
        type: "string",
        mask: this.inputMask
      };
      this.updateValue(value2, _objectSpread2(_objectSpread2({}, opts2), {}, {
        config,
        patch: this.inputMaskPatch,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      })).then(function() {
        return _this8.adjustPageRange(isStart);
      });
    },
    onInputShow: function onInputShow(isStart) {
      this.adjustPageRange(isStart);
    },
    onInputKeyup: function onInputKeyup(e) {
      if (e.key !== "Escape")
        return;
      this.updateValue(this.value_, {
        formatInput: true,
        hidePopover: true
      });
    },
    updateValue: function updateValue2(value2) {
      var _this9 = this;
      var opts2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      clearTimeout(this.updateTimeout);
      return new Promise(function(resolve) {
        var debounce2 = opts2.debounce, args = _objectWithoutProperties(opts2, ["debounce"]);
        if (debounce2 > 0) {
          _this9.updateTimeout = setTimeout(function() {
            _this9.forceUpdateValue(value2, args);
            resolve(_this9.value_);
          }, debounce2);
        } else {
          _this9.forceUpdateValue(value2, args);
          resolve(_this9.value_);
        }
      });
    },
    forceUpdateValue: function forceUpdateValue(value2) {
      var _this10 = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$config = _ref.config, config = _ref$config === void 0 ? this.modelConfig_ : _ref$config, _ref$patch = _ref.patch, patch = _ref$patch === void 0 ? PATCH.DATE_TIME : _ref$patch, _ref$notify = _ref.notify, notify = _ref$notify === void 0 ? true : _ref$notify, _ref$clearIfEqual = _ref.clearIfEqual, clearIfEqual = _ref$clearIfEqual === void 0 ? false : _ref$clearIfEqual, _ref$formatInput = _ref.formatInput, formatInput2 = _ref$formatInput === void 0 ? true : _ref$formatInput, _ref$hidePopover = _ref.hidePopover, hidePopover2 = _ref$hidePopover === void 0 ? false : _ref$hidePopover, _ref$adjustTime = _ref.adjustTime, adjustTime = _ref$adjustTime === void 0 ? false : _ref$adjustTime, _ref$isDragging = _ref.isDragging, isDragging2 = _ref$isDragging === void 0 ? this.isDragging : _ref$isDragging, _ref$rangePriority = _ref.rangePriority, rangePriority = _ref$rangePriority === void 0 ? RANGE_PRIORITY.BOTH : _ref$rangePriority;
      var normalizedValue = this.normalizeValue(value2, config, patch, rangePriority);
      if (!normalizedValue && this.isRequired) {
        normalizedValue = this.value_;
      }
      if (adjustTime) {
        normalizedValue = this.adjustTimeForValue(normalizedValue, config);
      }
      var isDisabled2 = this.valueIsDisabled(normalizedValue);
      if (isDisabled2) {
        if (isDragging2)
          return;
        normalizedValue = this.value_;
        hidePopover2 = false;
      }
      var valueKey = isDragging2 ? "dragValue" : "value_";
      var valueChanged = !this.valuesAreEqual(this[valueKey], normalizedValue);
      if (!isDisabled2 && !valueChanged && clearIfEqual) {
        normalizedValue = null;
        valueChanged = true;
      }
      if (valueChanged) {
        this[valueKey] = normalizedValue;
        if (!isDragging2)
          this.dragValue = null;
      }
      if (notify && valueChanged) {
        var denormalizedValue = this.denormalizeValue(normalizedValue, this.dateConfig);
        var event = this.isDragging ? "drag" : "update:modelValue";
        this.watchValue = false;
        this.$emit(event, denormalizedValue);
        this.$nextTick(function() {
          return _this10.watchValue = true;
        });
      }
      if (hidePopover2)
        this.hidePopover();
      if (formatInput2)
        this.formatInput();
    },
    hasValue: function hasValue(value2) {
      if (this.isRange) {
        return isObject$1(value2) && value2.start && value2.end;
      }
      return !!value2;
    },
    normalizeValue: function normalizeValue(value2, config, patch, rangePriority) {
      if (!this.hasValue(value2))
        return null;
      if (this.isRange) {
        var result = {};
        var start2 = value2.start > value2.end ? value2.end : value2.start;
        var startFillDate = this.value_ && this.value_.start || this.modelConfig_.start.fillDate;
        var startConfig = config.start || config;
        result.start = this.normalizeDate(start2, _objectSpread2(_objectSpread2({}, startConfig), {}, {
          fillDate: startFillDate,
          patch
        }));
        var end2 = value2.start > value2.end ? value2.start : value2.end;
        var endFillDate = this.value_ && this.value_.end || this.modelConfig_.end.fillDate;
        var endConfig = config.end || config;
        result.end = this.normalizeDate(end2, _objectSpread2(_objectSpread2({}, endConfig), {}, {
          fillDate: endFillDate,
          patch
        }));
        return this.sortRange(result, rangePriority);
      }
      return this.normalizeDate(value2, _objectSpread2(_objectSpread2({}, config), {}, {
        fillDate: this.value_ || this.modelConfig_.fillDate,
        patch
      }));
    },
    adjustTimeForValue: function adjustTimeForValue(value2, config) {
      if (!this.hasValue(value2))
        return null;
      if (this.isRange) {
        return {
          start: this.$locale.adjustTimeForDate(value2.start, config.start || config),
          end: this.$locale.adjustTimeForDate(value2.end, config.end || config)
        };
      }
      return this.$locale.adjustTimeForDate(value2, config);
    },
    sortRange: function sortRange(range) {
      var priority = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : RANGE_PRIORITY.NONE;
      var start2 = range.start, end2 = range.end;
      if (start2 > end2) {
        switch (priority) {
          case RANGE_PRIORITY.START:
            return {
              start: start2,
              end: start2
            };
          case RANGE_PRIORITY.END:
            return {
              start: end2,
              end: end2
            };
          case RANGE_PRIORITY.BOTH:
            return {
              start: end2,
              end: start2
            };
        }
      }
      return {
        start: start2,
        end: end2
      };
    },
    denormalizeValue: function denormalizeValue(value2) {
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.modelConfig_;
      if (this.isRange) {
        if (!this.hasValue(value2))
          return null;
        return {
          start: this.$locale.denormalizeDate(value2.start, config.start || config),
          end: this.$locale.denormalizeDate(value2.end, config.end || config)
        };
      }
      return this.$locale.denormalizeDate(value2, config);
    },
    valuesAreEqual: function valuesAreEqual(a2, b) {
      if (this.isRange) {
        var aHasValue = this.hasValue(a2);
        var bHasValue = this.hasValue(b);
        if (!aHasValue && !bHasValue)
          return true;
        if (aHasValue !== bHasValue)
          return false;
        return datesAreEqual(a2.start, b.start) && datesAreEqual(a2.end, b.end);
      }
      return datesAreEqual(a2, b);
    },
    valueIsDisabled: function valueIsDisabled(value2) {
      return this.hasValue(value2) && this.disabledAttribute && this.disabledAttribute.intersectsDate(value2);
    },
    formatInput: function formatInput() {
      var _this11 = this;
      this.$nextTick(function() {
        var opts2 = {
          type: "string",
          mask: _this11.inputMask
        };
        var value2 = _this11.denormalizeValue(_this11.dragValue || _this11.value_, opts2);
        if (_this11.isRange) {
          _this11.inputValues = [value2 && value2.start, value2 && value2.end];
        } else {
          _this11.inputValues = [value2, ""];
        }
      });
    },
    showPopover: function showPopover$1() {
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      showPopover(_objectSpread2(_objectSpread2(_objectSpread2({
        ref: this.$el
      }, this.popover_), opts2), {}, {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    hidePopover: function hidePopover$1() {
      var opts2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      hidePopover(_objectSpread2(_objectSpread2(_objectSpread2({
        hideDelay: 10
      }, this.showPopover_), opts2), {}, {
        id: this.datePickerPopoverId
      }));
    },
    togglePopover: function togglePopover$1(opts2) {
      togglePopover(_objectSpread2(_objectSpread2(_objectSpread2({
        ref: this.$el
      }, this.popover_), opts2), {}, {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    adjustPageRange: function adjustPageRange(isStart) {
      var _this12 = this;
      this.$nextTick(function() {
        var calendar = _this12.$refs.calendar;
        var page = _this12.getPageForValue(isStart);
        var position = isStart ? 1 : -1;
        if (page && calendar && !pageIsBetweenPages(page, calendar.firstPage, calendar.lastPage)) {
          calendar.move(page, {
            position,
            transition: "fade"
          });
        }
      });
    },
    getPageForValue: function getPageForValue(isStart) {
      if (this.hasValue(this.value_)) {
        return this.pageForDate(this.isRange ? this.value_[isStart ? "start" : "end"] : this.value_);
      }
      return null;
    },
    move: function move2(args, opts2) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.move(args, opts2);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    },
    focusDate: function focusDate2(date2, opts2) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.focusDate(date2, opts2);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    }
  }
};
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike_1(collection) ? Array(collection.length) : [];
  _baseEach(collection, function(value2, key, collection2) {
    result[++index] = iteratee(value2, key, collection2);
  });
  return result;
}
var _baseMap = baseMap;
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}
var map_1 = map;
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Calendar: script$3,
  DatePicker: script,
  Popover: script$5,
  PopoverRow: script$3$1
});
function buildMediaQuery(screens) {
  if (isString_1(screens)) {
    screens = { min: screens };
  }
  if (!isArrayLikeObject_1(screens)) {
    screens = [screens];
  }
  return screens.map((screen) => {
    if (has$1(screen, "raw")) {
      return screen.raw;
    }
    return map_1(screen, (value2, feature) => {
      feature = get_1({
        min: "min-width",
        max: "max-width"
      }, feature, feature);
      return `(${feature}: ${value2})`;
    }).join(" and ");
  }).join(", ");
}
var screensPlugin = {
  install: (app, screens) => {
    screens = defaultsDeep_1(screens, window && window.__screens__, defaultScreens);
    let shouldRefreshQueries = true;
    const state2 = reactive({
      matches: [],
      queries: []
    });
    const refreshMatches = () => {
      state2.matches = toPairs_1(state2.queries).filter((p) => p[1].matches).map((p) => p[0]);
    };
    const refreshQueries = () => {
      if (!shouldRefreshQueries || !window || !window.matchMedia)
        return;
      state2.queries = mapValues_1(screens, (v) => {
        const query = window.matchMedia(buildMediaQuery(v));
        if (isFunction_1(query.addEventListener)) {
          query.addEventListener("change", refreshMatches);
        } else {
          query.addListener(refreshMatches);
        }
        return query;
      });
      shouldRefreshQueries = false;
      refreshMatches();
    };
    app.mixin({
      mounted() {
        refreshQueries();
      },
      computed: {
        $screens() {
          return (config, def) => state2.matches.reduce((prev, curr) => has$1(config, curr) ? config[curr] : prev, isUndefined_1(def) ? config.default : def);
        }
      }
    });
  }
};
var setup2 = (app, defaults2) => {
  defaults2 = setup$1(defaults2);
  app.use(screensPlugin, defaults2.screens);
  return defaults2;
};
const install = (app, defaults2) => {
  defaults2 = setup2(app, defaults2);
  for (const componentKey in components) {
    const component = components[componentKey];
    app.component(`${defaults2.componentPrefix}${component.name}`, component);
  }
};
export { script$3 as Calendar, script as DatePicker, script$5 as Popover, script$3$1 as PopoverRow, screensPlugin as Screens, setup2 as SetupCalendar, install as default };
