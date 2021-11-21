var __defProp = Object.defineProperty;
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
import { a8 as toRefs, r as ref, h as computed, a9 as watch, aa as nextTick, N as createBlock, D as createCommentVNode, s as withModifiers, G as Fragment, J as renderList, v as createVNode, E as toDisplayString, F as renderSlot, o as openBlock, B as createTextVNode } from "./vendor.9ec557a4.js";
function g(e) {
  return [null, void 0, false].indexOf(e) !== -1;
}
function b(e) {
  var u = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  return u ? String(e).toLowerCase().trim() : String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, "").toLowerCase().trim();
}
function h(e) {
  return (h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  })(e);
}
function m(e, u) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    u && (l = l.filter(function(u2) {
      return Object.getOwnPropertyDescriptor(e, u2).enumerable;
    })), t.push.apply(t, l);
  }
  return t;
}
function D(e) {
  for (var u = 1; u < arguments.length; u++) {
    var t = arguments[u] != null ? arguments[u] : {};
    u % 2 ? m(Object(t), true).forEach(function(u2) {
      y(e, u2, t[u2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(u2) {
      Object.defineProperty(e, u2, Object.getOwnPropertyDescriptor(t, u2));
    });
  }
  return e;
}
function y(e, u, t) {
  return u in e ? Object.defineProperty(e, u, { value: t, enumerable: true, configurable: true, writable: true }) : e[u] = t, e;
}
function O(a, n, r) {
  var i = toRefs(a), o = i.options, s = i.mode, c = i.trackBy, v = i.limit, p = i.hideSelected, d = i.createTag, f = i.label, m2 = i.appendNewTag, O2 = i.multipleLabel, F2 = i.object, C2 = i.loading, S2 = i.delay, A2 = i.resolveOnLoad, E2 = i.minChars, B2 = i.filterResults, P2 = i.clearOnSearch, L2 = i.clearOnSelect, k = i.valueProp, w = i.canDeselect, q = i.max, j = i.strict, x = i.closeOnSelect, I = i.groups, T = (i.groupLabel, i.groupOptions), _ = i.groupHideEmpty, V = i.groupSelect, R = r.iv, M = r.ev, $ = r.search, H = r.clearSearch, N = r.update, G = r.pointer, K = r.clearPointer, W = r.blur, U = r.deactivate, z = ref([]), J = ref([]), Q = ref(false), X = computed(function() {
    if (I.value) {
      var e = J.value || [], u = [];
      return e.forEach(function(e2) {
        Ce(e2[T.value]).forEach(function(t2) {
          u.push(Object.assign({}, t2, e2.disabled ? { disabled: true } : {}));
        });
      }), u;
    }
    var t = Ce(J.value || []);
    return z.value.length && (t = t.concat(z.value)), t;
  }), Y = computed(function() {
    return I.value ? Oe((J.value || []).map(function(e) {
      var u, t = Ce(e[T.value]);
      return D(D({}, e), {}, (y(u = { group: true }, T.value, Fe(t, false).map(function(u2) {
        return Object.assign({}, u2, e.disabled ? { disabled: true } : {});
      })), y(u, "__VISIBLE__", Fe(t).map(function(u2) {
        return Object.assign({}, u2, e.disabled ? { disabled: true } : {});
      })), u));
    })) : [];
  }), Z = computed(function() {
    var e = X.value;
    return ae.value.length && (e = ae.value.concat(e)), e = Fe(e), v.value > 0 && (e = e.slice(0, v.value)), e;
  }), ee = computed(function() {
    switch (s.value) {
      case "single":
        return !g(R.value[k.value]);
      case "multiple":
      case "tags":
        return !g(R.value) && R.value.length > 0;
    }
  }), ue = computed(function() {
    return O2 !== void 0 && O2.value !== void 0 ? O2.value(R.value) : R.value && R.value.length > 1 ? "".concat(R.value.length, " options selected") : "1 option selected";
  }), te = computed(function() {
    return !X.value.length && !Q.value && !ae.value.length;
  }), le = computed(function() {
    return X.value.length > 0 && Z.value.length == 0 && ($.value && I.value || !I.value);
  }), ae = computed(function() {
    var e;
    return d.value !== false && $.value ? me($.value) !== -1 ? [] : [(e = {}, y(e, k.value, $.value), y(e, f.value, $.value), y(e, c.value, $.value), e)] : [];
  }), ne = computed(function() {
    switch (s.value) {
      case "single":
        return null;
      case "multiple":
      case "tags":
        return [];
    }
  }), re = computed(function() {
    return C2.value || Q.value;
  }), ie = function(e) {
    switch (h(e) !== "object" && (e = he(e)), s.value) {
      case "single":
        N(e);
        break;
      case "multiple":
      case "tags":
        N(R.value.concat(e));
    }
    n.emit("select", se(e), e);
  }, oe = function(e) {
    switch (h(e) !== "object" && (e = he(e)), s.value) {
      case "single":
        ve();
        break;
      case "tags":
      case "multiple":
        N(Array.isArray(e) ? R.value.filter(function(u) {
          return e.map(function(e2) {
            return e2[k.value];
          }).indexOf(u[k.value]) === -1;
        }) : R.value.filter(function(u) {
          return u[k.value] != e[k.value];
        }));
    }
    n.emit("deselect", se(e), e);
  }, se = function(e) {
    return F2.value ? e : e[k.value];
  }, ce = function(e) {
    oe(e);
  }, ve = function() {
    n.emit("clear"), N(ne.value);
  }, pe = function(e) {
    if (e.group !== void 0)
      return s.value !== "single" && (be(e[T.value]) && e[T.value].length);
    switch (s.value) {
      case "single":
        return !g(R.value) && R.value[k.value] == e[k.value];
      case "tags":
      case "multiple":
        return !g(R.value) && R.value.map(function(e2) {
          return e2[k.value];
        }).indexOf(e[k.value]) !== -1;
    }
  }, de = function(e) {
    return e.disabled === true;
  }, fe = function() {
    return !(q === void 0 || q.value === -1 || !ee.value && q.value > 0) && R.value.length >= q.value;
  }, ge = function(e) {
    return e.find(function(e2) {
      return !pe(e2) && !e2.disabled;
    }) === void 0;
  }, be = function(e) {
    return e.find(function(e2) {
      return !pe(e2);
    }) === void 0;
  }, he = function(e) {
    return X.value[X.value.map(function(e2) {
      return String(e2[k.value]);
    }).indexOf(String(e))];
  }, me = function(e) {
    return X.value.map(function(e2) {
      return e2[c.value];
    }).indexOf(e);
  }, De = function(e) {
    return ["tags", "multiple"].indexOf(s.value) !== -1 && p.value && pe(e);
  }, ye = function(e) {
    z.value.push(e);
  }, Oe = function(e) {
    return _.value ? e.filter(function(e2) {
      return $.value ? e2.__VISIBLE__.length : e2[T.value].length;
    }) : e.filter(function(e2) {
      return !$.value || e2.__VISIBLE__.length;
    });
  }, Fe = function(e) {
    var u = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], t = e;
    return $.value && B2.value && (t = t.filter(function(e2) {
      return b(e2[c.value], j.value).indexOf(b($.value, j.value)) !== -1;
    })), p.value && u && (t = t.filter(function(e2) {
      return !De(e2);
    })), t;
  }, Ce = function(e) {
    var u, t = e;
    return u = t, Object.prototype.toString.call(u) === "[object Object]" && (t = Object.keys(t).map(function(e2) {
      var u2, l = t[e2];
      return y(u2 = {}, k.value, e2), y(u2, c.value, l), y(u2, f.value, l), u2;
    })), t = t.map(function(e2) {
      var u2;
      return h(e2) === "object" ? e2 : (y(u2 = {}, k.value, e2), y(u2, c.value, e2), y(u2, f.value, e2), u2);
    });
  }, Se = function() {
    g(M.value) || (R.value = Ee(M.value));
  }, Ae = function(e) {
    Q.value = true, o.value($.value).then(function(u) {
      J.value = u, typeof e == "function" && e(u), Q.value = false;
    });
  }, Ee = function(e) {
    return g(e) ? s.value === "single" ? {} : [] : F2.value ? e : s.value === "single" ? he(e) || {} : e.filter(function(e2) {
      return !!he(e2);
    }).map(function(e2) {
      return he(e2);
    });
  };
  if (s.value !== "single" && !g(M.value) && !Array.isArray(M.value))
    throw new Error('v-model must be an array when using "'.concat(s.value, '" mode'));
  return o && typeof o.value == "function" ? A2.value ? Ae(Se) : F2.value == 1 && Se() : (J.value = o.value, Se()), S2.value > -1 && watch($, function(e) {
    e.length < E2.value || (Q.value = true, P2.value && (J.value = []), setTimeout(function() {
      e == $.value && o.value($.value).then(function(u) {
        e == $.value && (J.value = u, G.value = Z.value.filter(function(e2) {
          return e2.disabled !== true;
        })[0] || null, Q.value = false);
      });
    }, S2.value));
  }, { flush: "sync" }), watch(M, function(e) {
    var u, t, l;
    if (g(e))
      R.value = Ee(e);
    else
      switch (s.value) {
        case "single":
          (F2.value ? e[k.value] != R.value[k.value] : e != R.value[k.value]) && (R.value = Ee(e));
          break;
        case "multiple":
        case "tags":
          u = F2.value ? e.map(function(e2) {
            return e2[k.value];
          }) : e, t = R.value.map(function(e2) {
            return e2[k.value];
          }), l = t.slice().sort(), u.length === t.length && u.slice().sort().every(function(e2, u2) {
            return e2 === l[u2];
          }) || (R.value = Ee(e));
      }
  }, { deep: true }), typeof a.options != "function" && watch(o, function(e, u) {
    J.value = a.options, Object.keys(R.value).length || Se(), function() {
      if (ee.value)
        if (s.value === "single") {
          var e2 = he(R.value[k.value])[f.value];
          R.value[f.value] = e2, F2.value && (M.value[f.value] = e2);
        } else
          R.value.forEach(function(e3, u2) {
            var t = he(R.value[u2][k.value])[f.value];
            R.value[u2][f.value] = t, F2.value && (M.value[u2][f.value] = t);
          });
    }();
  }), { fo: Z, filteredOptions: Z, hasSelected: ee, multipleLabelText: ue, eo: X, extendedOptions: X, fg: Y, filteredGroups: Y, noOptions: te, noResults: le, resolving: Q, busy: re, select: ie, deselect: oe, remove: ce, clear: ve, isSelected: pe, isDisabled: de, isMax: fe, getOption: he, handleOptionClick: function(e) {
    if (!de(e)) {
      switch (s.value) {
        case "single":
          if (pe(e))
            return void (w.value && oe(e));
          W(), ie(e);
          break;
        case "multiple":
          if (pe(e))
            return void oe(e);
          if (fe())
            return;
          ie(e), L2.value && H(), p.value && K(), x.value && W();
          break;
        case "tags":
          if (pe(e))
            return void oe(e);
          if (fe())
            return;
          he(e[k.value]) === void 0 && d.value && (n.emit("tag", e[k.value]), m2.value && ye(e), H()), L2.value && H(), ie(e), p.value && K(), x.value && W();
      }
      x.value && U();
    }
  }, handleGroupClick: function(e) {
    if (!de(e) && s.value !== "single" && V.value) {
      switch (s.value) {
        case "multiple":
        case "tags":
          ge(e[T.value]) ? oe(e[T.value]) : ie(e[T.value].filter(function(e2) {
            return R.value.map(function(e3) {
              return e3[k.value];
            }).indexOf(e2[k.value]) === -1;
          }).filter(function(e2) {
            return !e2.disabled;
          }).filter(function(e2, u) {
            return R.value.length + 1 + u <= q.value || q.value === -1;
          }));
      }
      x.value && U();
    }
  }, handleTagRemove: function(e, u) {
    u.button === 0 ? ce(e) : u.preventDefault();
  }, refreshOptions: function(e) {
    Ae(e);
  }, resolveOptions: Ae };
}
function F(e) {
  return function(e2) {
    if (Array.isArray(e2))
      return C(e2);
  }(e) || function(e2) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
      return Array.from(e2);
  }(e) || function(e2, u) {
    if (!e2)
      return;
    if (typeof e2 == "string")
      return C(e2, u);
    var t = Object.prototype.toString.call(e2).slice(8, -1);
    t === "Object" && e2.constructor && (t = e2.constructor.name);
    if (t === "Map" || t === "Set")
      return Array.from(e2);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return C(e2, u);
  }(e) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function C(e, u) {
  (u == null || u > e.length) && (u = e.length);
  for (var t = 0, l = new Array(u); t < u; t++)
    l[t] = e[t];
  return l;
}
function S(e) {
  return function(e2) {
    if (Array.isArray(e2))
      return A(e2);
  }(e) || function(e2) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
      return Array.from(e2);
  }(e) || function(e2, u) {
    if (!e2)
      return;
    if (typeof e2 == "string")
      return A(e2, u);
    var t = Object.prototype.toString.call(e2).slice(8, -1);
    t === "Object" && e2.constructor && (t = e2.constructor.name);
    if (t === "Map" || t === "Set")
      return Array.from(e2);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return A(e2, u);
  }(e) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function A(e, u) {
  (u == null || u > e.length) && (u = e.length);
  for (var t = 0, l = new Array(u); t < u; t++)
    l[t] = e[t];
  return l;
}
function E(e, u) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    u && (l = l.filter(function(u2) {
      return Object.getOwnPropertyDescriptor(e, u2).enumerable;
    })), t.push.apply(t, l);
  }
  return t;
}
function B(e, u, t) {
  return u in e ? Object.defineProperty(e, u, { value: t, enumerable: true, configurable: true, writable: true }) : e[u] = t, e;
}
function P(u, l, a) {
  var n = toRefs(u), r = n.disabled, i = n.openDirection, o = n.showOptions, s = a.isOpen, c = a.isPointed, v = a.isSelected, p = a.isDisabled, d = a.isActive, f = a.canPointGroups, g2 = a.resolving, b2 = a.fo, h2 = function(e) {
    for (var u2 = 1; u2 < arguments.length; u2++) {
      var t = arguments[u2] != null ? arguments[u2] : {};
      u2 % 2 ? E(Object(t), true).forEach(function(u3) {
        B(e, u3, t[u3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(u3) {
        Object.defineProperty(e, u3, Object.getOwnPropertyDescriptor(t, u3));
      });
    }
    return e;
  }({ container: "multiselect", containerDisabled: "is-disabled", containerOpen: "is-open", containerOpenTop: "is-open-top", containerActive: "is-active", singleLabel: "multiselect-single-label", multipleLabel: "multiselect-multiple-label", search: "multiselect-search", tags: "multiselect-tags", tag: "multiselect-tag", tagDisabled: "is-disabled", tagRemove: "multiselect-tag-remove", tagRemoveIcon: "multiselect-tag-remove-icon", tagsSearchWrapper: "multiselect-tags-search-wrapper", tagsSearch: "multiselect-tags-search", tagsSearchCopy: "multiselect-tags-search-copy", placeholder: "multiselect-placeholder", caret: "multiselect-caret", caretOpen: "is-open", clear: "multiselect-clear", clearIcon: "multiselect-clear-icon", spinner: "multiselect-spinner", dropdown: "multiselect-dropdown", dropdownTop: "is-top", dropdownHidden: "is-hidden", options: "multiselect-options", optionsTop: "is-top", group: "multiselect-group", groupLabel: "multiselect-group-label", groupLabelPointable: "is-pointable", groupLabelPointed: "is-pointed", groupLabelSelected: "is-selected", groupLabelDisabled: "is-disabled", groupLabelSelectedPointed: "is-selected is-pointed", groupLabelSelectedDisabled: "is-selected is-disabled", groupOptions: "multiselect-group-options", option: "multiselect-option", optionPointed: "is-pointed", optionSelected: "is-selected", optionDisabled: "is-disabled", optionSelectedPointed: "is-selected is-pointed", optionSelectedDisabled: "is-selected is-disabled", noOptions: "multiselect-no-options", noResults: "multiselect-no-results", fakeInput: "multiselect-fake-input", spacer: "multiselect-spacer" }, n.classes.value), m2 = computed(function() {
    return !!(s.value && o.value && (!g2.value || g2.value && b2.value.length));
  });
  return { classList: computed(function() {
    return { container: [h2.container].concat(r.value ? h2.containerDisabled : []).concat(m2.value && i.value === "top" ? h2.containerOpenTop : []).concat(m2.value && i.value !== "top" ? h2.containerOpen : []).concat(d.value ? h2.containerActive : []), spacer: h2.spacer, singleLabel: h2.singleLabel, multipleLabel: h2.multipleLabel, search: h2.search, tags: h2.tags, tag: [h2.tag].concat(r.value ? h2.tagDisabled : []), tagRemove: h2.tagRemove, tagRemoveIcon: h2.tagRemoveIcon, tagsSearchWrapper: h2.tagsSearchWrapper, tagsSearch: h2.tagsSearch, tagsSearchCopy: h2.tagsSearchCopy, placeholder: h2.placeholder, caret: [h2.caret].concat(s.value ? h2.caretOpen : []), clear: h2.clear, clearIcon: h2.clearIcon, spinner: h2.spinner, dropdown: [h2.dropdown].concat(i.value === "top" ? h2.dropdownTop : []).concat(s.value && o.value && m2.value ? [] : h2.dropdownHidden), options: [h2.options].concat(i.value === "top" ? h2.optionsTop : []), group: h2.group, groupLabel: function(e) {
      var u2 = [h2.groupLabel];
      return c(e) ? u2.push(v(e) ? h2.groupLabelSelectedPointed : h2.groupLabelPointed) : v(e) && f.value ? u2.push(p(e) ? h2.groupLabelSelectedDisabled : h2.groupLabelSelected) : p(e) && u2.push(h2.groupLabelDisabled), f.value && u2.push(h2.groupLabelPointable), u2;
    }, groupOptions: h2.groupOptions, option: function(e, u2) {
      var t = [h2.option];
      return c(e) ? t.push(v(e) ? h2.optionSelectedPointed : h2.optionPointed) : v(e) ? t.push(p(e) ? h2.optionSelectedDisabled : h2.optionSelected) : (p(e) || u2 && p(u2)) && t.push(h2.optionDisabled), t;
    }, noOptions: h2.noOptions, noResults: h2.noResults, fakeInput: h2.fakeInput };
  }), showDropdown: m2 };
}
var L = { name: "Multiselect", emits: ["open", "close", "select", "deselect", "input", "search-change", "tag", "update:modelValue", "change", "clear"], props: { value: { required: false }, modelValue: { required: false }, options: { type: [Array, Object, Function], required: false, default: () => [] }, id: { type: [String, Number], required: false }, name: { type: [String, Number], required: false, default: "multiselect" }, disabled: { type: Boolean, required: false, default: false }, label: { type: String, required: false, default: "label" }, trackBy: { type: String, required: false, default: "label" }, valueProp: { type: String, required: false, default: "value" }, placeholder: { type: String, required: false, default: null }, mode: { type: String, required: false, default: "single" }, searchable: { type: Boolean, required: false, default: false }, limit: { type: Number, required: false, default: -1 }, hideSelected: { type: Boolean, required: false, default: true }, createTag: { type: Boolean, required: false, default: false }, appendNewTag: { type: Boolean, required: false, default: true }, caret: { type: Boolean, required: false, default: true }, loading: { type: Boolean, required: false, default: false }, noOptionsText: { type: String, required: false, default: "The list is empty" }, noResultsText: { type: String, required: false, default: "No results found" }, multipleLabel: { type: Function, required: false }, object: { type: Boolean, required: false, default: false }, delay: { type: Number, required: false, default: -1 }, minChars: { type: Number, required: false, default: 0 }, resolveOnLoad: { type: Boolean, required: false, default: true }, filterResults: { type: Boolean, required: false, default: true }, clearOnSearch: { type: Boolean, required: false, default: false }, clearOnSelect: { type: Boolean, required: false, default: true }, canDeselect: { type: Boolean, required: false, default: true }, canClear: { type: Boolean, required: false, default: true }, max: { type: Number, required: false, default: -1 }, showOptions: { type: Boolean, required: false, default: true }, addTagOn: { type: Array, required: false, default: () => ["enter"] }, required: { type: Boolean, required: false, default: false }, openDirection: { type: String, required: false, default: "bottom" }, nativeSupport: { type: Boolean, required: false, default: false }, classes: { type: Object, required: false, default: () => ({}) }, strict: { type: Boolean, required: false, default: true }, closeOnSelect: { type: Boolean, required: false, default: true }, autocomplete: { type: String, required: false }, groups: { type: Boolean, required: false, default: false }, groupLabel: { type: String, required: false, default: "label" }, groupOptions: { type: String, required: false, default: "options" }, groupHideEmpty: { type: Boolean, required: false, default: false }, groupSelect: { type: Boolean, required: false, default: true }, inputType: { type: String, required: false, default: "text" } }, setup(n, r) {
  const i = function(l, a) {
    var n2 = toRefs(l), r2 = n2.value, i2 = n2.modelValue, o2 = n2.mode, s2 = n2.valueProp, c2 = ref(o2.value !== "single" ? [] : {}), v2 = a.expose !== void 0 ? i2 : r2, p2 = computed(function() {
      return o2.value === "single" ? c2.value[s2.value] : c2.value.map(function(e) {
        return e[s2.value];
      });
    }), d2 = computed(function() {
      return o2.value !== "single" ? c2.value.map(function(e) {
        return e[s2.value];
      }).join(",") : c2.value[s2.value];
    });
    return { iv: c2, internalValue: c2, ev: v2, externalValue: v2, textValue: d2, plainValue: p2 };
  }(n, r), o = function(t, l, a) {
    var n2 = toRefs(t), r2 = n2.groupSelect, i2 = n2.mode, o2 = n2.groups, s2 = ref(null), c2 = function(e) {
      e === void 0 || e !== null && e.disabled || o2.value && e && e.group && (i2.value === "single" || !r2.value) || (s2.value = e);
    };
    return { pointer: s2, setPointer: c2, clearPointer: function() {
      c2(null);
    } };
  }(n), s = function(t, l, a) {
    var n2 = toRefs(t).disabled, r2 = ref(false);
    return { isOpen: r2, open: function() {
      r2.value || n2.value || (r2.value = true, l.emit("open"));
    }, close: function() {
      r2.value && (r2.value = false, l.emit("close"));
    } };
  }(n, r), c = function(e, t, a) {
    var n2 = ref(null), r2 = ref(null);
    return watch(n2, function(e2) {
      t.emit("search-change", e2);
    }), { search: n2, input: r2, clearSearch: function() {
      n2.value = "";
    }, handleSearchInput: function(e2) {
      n2.value = e2.target.value;
    }, handlePaste: function(e2) {
      t.emit("paste", e2);
    } };
  }(0, r), v = function(u, t, l) {
    var a = toRefs(u), n2 = a.object, r2 = a.valueProp, i2 = a.mode, o2 = l.iv, s2 = function(e) {
      return n2.value || g(e) ? e : Array.isArray(e) ? e.map(function(e2) {
        return e2[r2.value];
      }) : e[r2.value];
    }, c2 = function(e) {
      return g(e) ? i2.value === "single" ? {} : [] : e;
    };
    return { update: function(e) {
      o2.value = c2(e);
      var u2 = s2(e);
      t.emit("change", u2), t.emit("input", u2), t.emit("update:modelValue", u2);
    } };
  }(n, r, { iv: i.iv }), p = function(l, a, n2) {
    var r2 = toRefs(l), i2 = r2.searchable, o2 = r2.disabled, s2 = n2.input, c2 = n2.open, v2 = n2.close, p2 = n2.clearSearch, d2 = ref(null), f2 = ref(false), g2 = computed(function() {
      return i2.value || o2.value ? -1 : 0;
    }), b3 = function() {
      i2.value && s2.value.blur(), d2.value.blur();
    }, h3 = function() {
      f2.value = false, setTimeout(function() {
        f2.value || (v2(), p2());
      }, 1);
    };
    return { multiselect: d2, tabindex: g2, isActive: f2, blur: b3, handleFocus: function() {
      i2.value && !o2.value && s2.value.focus();
    }, activate: function() {
      o2.value || (f2.value = true, c2());
    }, deactivate: h3, handleCaretClick: function() {
      h3(), b3();
    } };
  }(n, 0, { input: c.input, open: s.open, close: s.close, clearSearch: c.clearSearch }), d = O(n, r, { ev: i.ev, iv: i.iv, search: c.search, clearSearch: c.clearSearch, update: v.update, pointer: o.pointer, clearPointer: o.clearPointer, blur: p.blur, deactivate: p.deactivate }), f = function(u, n2, r2) {
    var i2 = toRefs(u), o2 = i2.valueProp, s2 = i2.showOptions, c2 = i2.searchable, v2 = i2.groupLabel, p2 = i2.groups, d2 = i2.mode, f2 = i2.groupSelect, g2 = r2.fo, b3 = r2.fg, h3 = r2.handleOptionClick, m2 = r2.handleGroupClick, D2 = r2.search, y2 = r2.pointer, O2 = r2.setPointer, C2 = r2.clearPointer, S2 = r2.multiselect, A2 = computed(function() {
      return g2.value.filter(function(e) {
        return !e.disabled;
      });
    }), E2 = computed(function() {
      return b3.value.filter(function(e) {
        return !e.disabled;
      });
    }), B2 = computed(function() {
      return d2.value !== "single" && f2.value;
    }), P2 = computed(function() {
      return y2.value && y2.value.group;
    }), L2 = computed(function() {
      return R(y2.value);
    }), k = computed(function() {
      var e = P2.value ? y2.value : R(y2.value), u2 = E2.value.map(function(e2) {
        return e2[v2.value];
      }).indexOf(e[v2.value]), t = E2.value[u2 - 1];
      return t === void 0 && (t = q.value), t;
    }), w = computed(function() {
      var e = E2.value.map(function(e2) {
        return e2.label;
      }).indexOf(P2.value ? y2.value[v2.value] : R(y2.value)[v2.value]) + 1;
      return E2.value.length <= e && (e = 0), E2.value[e];
    }), q = computed(function() {
      return F(E2.value).slice(-1)[0];
    }), j = computed(function() {
      return y2.value.__VISIBLE__.filter(function(e) {
        return !e.disabled;
      })[0];
    }), x = computed(function() {
      var e = L2.value.__VISIBLE__.filter(function(e2) {
        return !e2.disabled;
      });
      return e[e.map(function(e2) {
        return e2[o2.value];
      }).indexOf(y2.value[o2.value]) - 1];
    }), I = computed(function() {
      var e = R(y2.value).__VISIBLE__.filter(function(e2) {
        return !e2.disabled;
      });
      return e[e.map(function(e2) {
        return e2[o2.value];
      }).indexOf(y2.value[o2.value]) + 1];
    }), T = computed(function() {
      return F(k.value.__VISIBLE__.filter(function(e) {
        return !e.disabled;
      })).slice(-1)[0];
    }), _ = computed(function() {
      return F(q.value.__VISIBLE__.filter(function(e) {
        return !e.disabled;
      })).slice(-1)[0];
    }), V = function() {
      O2(A2.value[0] || null);
    }, R = function(e) {
      return E2.value.find(function(u2) {
        return u2.__VISIBLE__.map(function(e2) {
          return e2[o2.value];
        }).indexOf(e[o2.value]) !== -1;
      });
    }, M = function() {
      var e = S2.value.querySelector("[data-pointed]");
      if (e) {
        var u2 = e.parentElement.parentElement;
        p2.value && (u2 = P2.value ? e.parentElement.parentElement.parentElement : e.parentElement.parentElement.parentElement.parentElement), e.offsetTop + e.offsetHeight > u2.clientHeight + u2.scrollTop && (u2.scrollTop = e.offsetTop + e.offsetHeight - u2.clientHeight), e.offsetTop < u2.scrollTop && (u2.scrollTop = e.offsetTop);
      }
    };
    return watch(D2, function(e) {
      c2.value && (e.length && s2.value ? V() : C2());
    }), { pointer: y2, canPointGroups: B2, isPointed: function(e) {
      return !(!y2.value || !(!e.group && y2.value[o2.value] == e[o2.value] || e.group !== void 0 && y2.value[v2.value] == e[v2.value])) || void 0;
    }, setPointerFirst: V, selectPointer: function() {
      y2.value && y2.value.disabled !== true && (P2.value ? m2(y2.value) : h3(y2.value));
    }, forwardPointer: function() {
      if (y2.value === null)
        O2((p2.value && B2.value ? E2.value[0] : A2.value[0]) || null);
      else if (p2.value && B2.value) {
        var e = P2.value ? j.value : I.value;
        e === void 0 && (e = w.value), O2(e || null);
      } else {
        var u2 = A2.value.map(function(e2) {
          return e2[o2.value];
        }).indexOf(y2.value[o2.value]) + 1;
        A2.value.length <= u2 && (u2 = 0), O2(A2.value[u2] || null);
      }
      nextTick(function() {
        M();
      });
    }, backwardPointer: function() {
      if (y2.value === null) {
        var e = A2.value[A2.value.length - 1];
        p2.value && B2.value && (e = _.value) === void 0 && (e = q.value), O2(e || null);
      } else if (p2.value && B2.value) {
        var u2 = P2.value ? T.value : x.value;
        u2 === void 0 && (u2 = P2.value ? k.value : L2.value), O2(u2 || null);
      } else {
        var t = A2.value.map(function(e2) {
          return e2[o2.value];
        }).indexOf(y2.value[o2.value]) - 1;
        t < 0 && (t = A2.value.length - 1), O2(A2.value[t] || null);
      }
      nextTick(function() {
        M();
      });
    } };
  }(n, 0, { fo: d.fo, fg: d.fg, handleOptionClick: d.handleOptionClick, handleGroupClick: d.handleGroupClick, search: c.search, pointer: o.pointer, setPointer: o.setPointer, clearPointer: o.clearPointer, multiselect: p.multiselect }), b2 = function(u, t, l) {
    var a = toRefs(u), n2 = a.mode, r2 = a.addTagOn, i2 = a.createTag, o2 = a.openDirection, s2 = a.searchable, c2 = a.showOptions, v2 = a.valueProp, p2 = a.groups, d2 = l.iv, f2 = l.update, g2 = l.search, b3 = l.setPointer, h3 = l.selectPointer, m2 = l.backwardPointer, D2 = l.forwardPointer, y2 = l.blur, O2 = l.fo, F2 = function() {
      n2.value === "tags" && !c2.value && i2.value && s2.value && !p2.value && b3(O2.value[O2.value.map(function(e) {
        return e[v2.value];
      }).indexOf(g2.value)]);
    };
    return { handleKeydown: function(e) {
      switch (e.keyCode) {
        case 8:
          if (n2.value === "single")
            return;
          if (s2.value && [null, ""].indexOf(g2.value) === -1)
            return;
          if (d2.value.length === 0)
            return;
          f2(S(d2.value).slice(0, -1));
          break;
        case 13:
          if (e.preventDefault(), n2.value === "tags" && r2.value.indexOf("enter") === -1 && i2.value)
            return;
          F2(), h3();
          break;
        case 32:
          if (s2.value && n2.value !== "tags" && !i2.value)
            return;
          if (n2.value === "tags" && (r2.value.indexOf("space") === -1 && i2.value || !i2.value))
            return;
          e.preventDefault(), F2(), h3();
          break;
        case 9:
        case 186:
        case 188:
          if (n2.value !== "tags")
            return;
          if (r2.value.indexOf({ 9: "tab", 186: ";", 188: "," }[e.keyCode]) === -1 || !i2.value)
            return;
          F2(), h3(), e.preventDefault();
          break;
        case 27:
          y2();
          break;
        case 38:
          if (e.preventDefault(), !c2.value)
            return;
          o2.value === "top" ? D2() : m2();
          break;
        case 40:
          if (e.preventDefault(), !c2.value)
            return;
          o2.value === "top" ? m2() : D2();
      }
    }, preparePointer: F2 };
  }(n, 0, { iv: i.iv, update: v.update, search: c.search, setPointer: o.setPointer, selectPointer: f.selectPointer, backwardPointer: f.backwardPointer, forwardPointer: f.forwardPointer, blur: p.blur, fo: d.fo }), h2 = P(n, 0, { isOpen: s.isOpen, isPointed: f.isPointed, canPointGroups: f.canPointGroups, isSelected: d.isSelected, isDisabled: d.isDisabled, isActive: p.isActive, resolving: d.resolving, fo: d.fo });
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, i), s), p), o), v), c), d), f), b2), h2);
} };
L.render = function(e, u, t, l, a, g2) {
  return openBlock(), createBlock("div", { ref: "multiselect", tabindex: e.tabindex, class: e.classList.container, id: t.id, onFocusin: u[7] || (u[7] = (...u2) => e.activate && e.activate(...u2)), onFocusout: u[8] || (u[8] = (...u2) => e.deactivate && e.deactivate(...u2)), onKeydown: u[9] || (u[9] = (...u2) => e.handleKeydown && e.handleKeydown(...u2)), onFocus: u[10] || (u[10] = (...u2) => e.handleFocus && e.handleFocus(...u2)) }, [createCommentVNode(" Search "), t.mode !== "tags" && t.searchable && !t.disabled ? (openBlock(), createBlock("input", { key: 0, type: t.inputType, modelValue: e.search, value: e.search, class: e.classList.search, autocomplete: t.autocomplete, onInput: u[1] || (u[1] = (...u2) => e.handleSearchInput && e.handleSearchInput(...u2)), onPaste: u[2] || (u[2] = withModifiers((...u2) => e.handlePaste && e.handlePaste(...u2), ["stop"])), ref: "input" }, null, 42, ["type", "modelValue", "value", "autocomplete"])) : createCommentVNode("v-if", true), createCommentVNode(" Tags (with search) "), t.mode == "tags" ? (openBlock(), createBlock("div", { key: 1, class: e.classList.tags }, [(openBlock(true), createBlock(Fragment, null, renderList(e.iv, (u2, l2, a2) => renderSlot(e.$slots, "tag", { option: u2, handleTagRemove: e.handleTagRemove, disabled: t.disabled }, () => [(openBlock(), createBlock("span", { class: e.classList.tag, key: a2 }, [createTextVNode(toDisplayString(u2[t.label]) + " ", 1), t.disabled ? createCommentVNode("v-if", true) : (openBlock(), createBlock("span", { key: 0, class: e.classList.tagRemove, onMousedown: withModifiers((t2) => e.handleTagRemove(u2, t2), ["prevent"]) }, [createVNode("span", { class: e.classList.tagRemoveIcon }, null, 2)], 42, ["onMousedown"]))], 2))])), 256)), createVNode("div", { class: e.classList.tagsSearchWrapper }, [createCommentVNode(" Used for measuring search width "), createVNode("span", { class: e.classList.tagsSearchCopy }, toDisplayString(e.search), 3), createCommentVNode(" Actual search input "), t.searchable && !t.disabled ? (openBlock(), createBlock("input", { key: 0, type: t.inputType, modelValue: e.search, value: e.search, class: e.classList.tagsSearch, autocomplete: t.autocomplete, onInput: u[3] || (u[3] = (...u2) => e.handleSearchInput && e.handleSearchInput(...u2)), onPaste: u[4] || (u[4] = withModifiers((...u2) => e.handlePaste && e.handlePaste(...u2), ["stop"])), ref: "input" }, null, 42, ["type", "modelValue", "value", "autocomplete"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true), createCommentVNode(" Single label "), t.mode == "single" && e.hasSelected && !e.search && e.iv ? renderSlot(e.$slots, "singlelabel", { key: 2, value: e.iv }, () => [createVNode("div", { class: e.classList.singleLabel }, toDisplayString(e.iv[t.label]), 3)]) : createCommentVNode("v-if", true), createCommentVNode(" Multiple label "), t.mode == "multiple" && e.hasSelected && !e.search ? renderSlot(e.$slots, "multiplelabel", { key: 3, values: e.iv }, () => [createVNode("div", { class: e.classList.multipleLabel }, toDisplayString(e.multipleLabelText), 3)]) : createCommentVNode("v-if", true), createCommentVNode(" Placeholder "), !t.placeholder || e.hasSelected || e.search ? createCommentVNode("v-if", true) : renderSlot(e.$slots, "placeholder", { key: 4 }, () => [createVNode("div", { class: e.classList.placeholder }, toDisplayString(t.placeholder), 3)]), createCommentVNode(" Spinner "), e.busy ? renderSlot(e.$slots, "spinner", { key: 5 }, () => [createVNode("span", { class: e.classList.spinner }, null, 2)]) : createCommentVNode("v-if", true), createCommentVNode(" Clear "), e.hasSelected && !t.disabled && t.canClear && !e.busy ? renderSlot(e.$slots, "clear", { key: 6, clear: e.clear }, () => [createVNode("span", { class: e.classList.clear, onMousedown: u[5] || (u[5] = (...u2) => e.clear && e.clear(...u2)) }, [createVNode("span", { class: e.classList.clearIcon }, null, 2)], 34)]) : createCommentVNode("v-if", true), createCommentVNode(" Caret "), t.caret ? renderSlot(e.$slots, "caret", { key: 7 }, () => [createVNode("span", { class: e.classList.caret, onClick: u[6] || (u[6] = (...u2) => e.handleCaretClick && e.handleCaretClick(...u2)) }, null, 2)]) : createCommentVNode("v-if", true), createCommentVNode(" Options "), createVNode("div", { class: e.classList.dropdown, tabindex: "-1" }, [renderSlot(e.$slots, "beforelist", { options: e.fo }), createVNode("ul", { class: e.classList.options }, [t.groups ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(e.fg, (u2, l2, a2) => (openBlock(), createBlock("li", { class: e.classList.group, key: a2 }, [createVNode("div", { class: e.classList.groupLabel(u2), "data-pointed": e.isPointed(u2), onMouseenter: (t2) => e.setPointer(u2), onClick: (t2) => e.handleGroupClick(u2) }, [renderSlot(e.$slots, "grouplabel", { group: u2 }, () => [createVNode("span", null, toDisplayString(u2[t.groupLabel]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]), createVNode("ul", { class: e.classList.groupOptions }, [(openBlock(true), createBlock(Fragment, null, renderList(u2.__VISIBLE__, (l3, a3, i) => (openBlock(), createBlock("li", { class: e.classList.option(l3, u2), key: i, "data-pointed": e.isPointed(l3), onMouseenter: (u3) => e.setPointer(l3), onClick: (u3) => e.handleOptionClick(l3) }, [renderSlot(e.$slots, "option", { option: l3, search: e.search }, () => [createVNode("span", null, toDisplayString(l3[t.label]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]))), 128))], 2)], 2))), 128)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(e.fo, (u2, l2, a2) => (openBlock(), createBlock("li", { class: e.classList.option(u2), key: a2, "data-pointed": e.isPointed(u2), onMouseenter: (t2) => e.setPointer(u2), onClick: (t2) => e.handleOptionClick(u2) }, [renderSlot(e.$slots, "option", { option: u2, search: e.search }, () => [createVNode("span", null, toDisplayString(u2[t.label]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]))), 128))], 2), e.noOptions ? renderSlot(e.$slots, "nooptions", { key: 0 }, () => [createVNode("div", { class: e.classList.noOptions, innerHTML: t.noOptionsText }, null, 10, ["innerHTML"])]) : createCommentVNode("v-if", true), e.noResults ? renderSlot(e.$slots, "noresults", { key: 1 }, () => [createVNode("div", { class: e.classList.noResults, innerHTML: t.noResultsText }, null, 10, ["innerHTML"])]) : createCommentVNode("v-if", true), renderSlot(e.$slots, "afterlist", { options: e.fo })], 2), createCommentVNode(" Hacky input element to show HTML5 required warning "), t.required ? (openBlock(), createBlock("input", { key: 8, class: e.classList.fakeInput, tabindex: "-1", value: e.textValue, required: "" }, null, 10, ["value"])) : createCommentVNode("v-if", true), createCommentVNode(" Native input support "), t.nativeSupport ? (openBlock(), createBlock(Fragment, { key: 9 }, [t.mode == "single" ? (openBlock(), createBlock("input", { key: 0, type: "hidden", name: t.name, value: e.plainValue !== void 0 ? e.plainValue : "" }, null, 8, ["name", "value"])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(e.plainValue, (e2, u2) => (openBlock(), createBlock("input", { type: "hidden", name: `${t.name}[]`, value: e2, key: u2 }, null, 8, ["name", "value"]))), 128))], 64)) : createCommentVNode("v-if", true), createCommentVNode(" Create height for empty input "), createVNode("div", { class: e.classList.spacer }, null, 2)], 42, ["tabindex", "id"]);
}, L.__file = "src/Multiselect.vue";
export { L as default };
