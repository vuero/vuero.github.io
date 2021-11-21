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
import { d as defineComponent, r as ref, a5 as reactive, ab as onMounted, au as onBeforeUnmount, ad as isReactive, a9 as watch, o as openBlock, b as createElementBlock, e as createBaseVNode, F as renderSlot } from "./vendor.9ec557a4.js";
const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const isJson = (str) => {
  let t = false;
  try {
    t = JSON.parse(str);
  } catch (e) {
    return false;
  }
  return !(t === null || !Array.isArray(t) && !isObject(t)) && t;
};
const createElement = (nodeName, attrs) => {
  const dom = document.createElement(nodeName);
  if (attrs && typeof attrs == "object") {
    for (const attr in attrs) {
      if (attr === "html") {
        dom.innerHTML = attrs[attr];
      } else {
        dom.setAttribute(attr, attrs[attr]);
      }
    }
  }
  return dom;
};
const flush = (el) => {
  if (el instanceof NodeList) {
    el.forEach((e) => flush(e));
  } else {
    el.innerHTML = "";
  }
};
const button = (className, page, text) => createElement("li", {
  class: className,
  html: `<a href="#" data-page="${page}">${text}</a>`
});
const sortItems = (a, b) => {
  let c;
  let d;
  if (b === 1) {
    c = 0;
    d = a.length;
  } else {
    if (b === -1) {
      c = a.length - 1;
      d = -1;
    }
  }
  for (let e = true; e; ) {
    e = false;
    for (let f = c; f != d; f += b) {
      if (a[f + b] && a[f].value > a[f + b].value) {
        const g = a[f];
        const h = a[f + b];
        const i = g;
        a[f] = h;
        a[f + b] = i;
        e = true;
      }
    }
  }
  return a;
};
const truncate = (a, b, c, d, ellipsis) => {
  d = d || 2;
  let j;
  const e = 2 * d;
  let f = b - d;
  let g = b + d;
  const h = [];
  const i = [];
  if (b < 4 - d + e) {
    g = 3 + e;
  } else if (b > c - (3 - d + e)) {
    f = c - (2 + e);
  }
  for (let k = 1; k <= c; k++) {
    if (k == 1 || k == c || k >= f && k <= g) {
      const l = a[k - 1];
      l.classList.remove("active");
      h.push(l);
    }
  }
  h.forEach((c2) => {
    const d2 = c2.children[0].getAttribute("data-page");
    if (j) {
      const e2 = j.children[0].getAttribute("data-page");
      if (d2 - e2 == 2)
        i.push(a[e2]);
      else if (d2 - e2 != 1) {
        const f2 = createElement("li", {
          class: "ellipsis",
          html: `<a href="#">${ellipsis}</a>`
        });
        i.push(f2);
      }
    }
    i.push(c2);
    j = c2;
  });
  return i;
};
class Rows {
  constructor(dt, rows) {
    this.dt = dt;
    this.rows = rows;
    return this;
  }
  build(row) {
    const tr = createElement("tr");
    let headings = this.dt.headings;
    if (!headings.length) {
      headings = row.map(() => "");
    }
    headings.forEach((h, i) => {
      const td = createElement("td");
      if (!row[i] || !row[i].length) {
        row[i] = "";
      }
      td.innerHTML = row[i];
      td.data = row[i];
      tr.appendChild(td);
    });
    return tr;
  }
  render(row) {
    return row;
  }
  add(data) {
    if (Array.isArray(data)) {
      const dt = this.dt;
      if (Array.isArray(data[0])) {
        data.forEach((row) => {
          dt.data.push(this.build(row));
        });
      } else {
        dt.data.push(this.build(data));
      }
      if (dt.data.length) {
        dt.hasRows = true;
      }
      this.update();
      dt.columns().rebuild();
    }
  }
  remove(select) {
    const dt = this.dt;
    if (Array.isArray(select)) {
      select.sort((a, b) => b - a);
      select.forEach((row) => {
        dt.data.splice(row, 1);
      });
    } else if (select == "all") {
      dt.data = [];
    } else {
      dt.data.splice(select, 1);
    }
    if (!dt.data.length) {
      dt.hasRows = false;
    }
    this.update();
    dt.columns().rebuild();
  }
  update() {
    this.dt.data.forEach((row, i) => {
      row.dataIndex = i;
    });
  }
}
class Columns {
  constructor(dt) {
    this.dt = dt;
    return this;
  }
  swap(columns) {
    if (columns.length && columns.length === 2) {
      const cols = [];
      this.dt.headings.forEach((h, i) => {
        cols.push(i);
      });
      const x = columns[0];
      const y = columns[1];
      const b = cols[y];
      cols[y] = cols[x];
      cols[x] = b;
      this.order(cols);
    }
  }
  order(columns) {
    let a;
    let b;
    let c;
    let d;
    let h;
    let s;
    let cell;
    const temp = [
      [],
      [],
      [],
      []
    ];
    const dt = this.dt;
    columns.forEach((column, x) => {
      h = dt.headings[column];
      s = h.getAttribute("data-sortable") !== "false";
      a = h.cloneNode(true);
      a.originalCellIndex = x;
      a.sortable = s;
      temp[0].push(a);
      if (!dt.hiddenColumns.includes(column)) {
        b = h.cloneNode(true);
        b.originalCellIndex = x;
        b.sortable = s;
        temp[1].push(b);
      }
    });
    dt.data.forEach((row, i) => {
      c = row.cloneNode(false);
      d = row.cloneNode(false);
      c.dataIndex = d.dataIndex = i;
      if (row.searchIndex !== null && row.searchIndex !== void 0) {
        c.searchIndex = d.searchIndex = row.searchIndex;
      }
      columns.forEach((column) => {
        cell = row.cells[column].cloneNode(true);
        cell.data = row.cells[column].data;
        c.appendChild(cell);
        if (!dt.hiddenColumns.includes(column)) {
          cell = row.cells[column].cloneNode(true);
          cell.data = row.cells[column].data;
          d.appendChild(cell);
        }
      });
      temp[2].push(c);
      temp[3].push(d);
    });
    dt.headings = temp[0];
    dt.activeHeadings = temp[1];
    dt.data = temp[2];
    dt.activeRows = temp[3];
    dt.update();
  }
  hide(columns) {
    if (columns.length) {
      const dt = this.dt;
      columns.forEach((column) => {
        if (!dt.hiddenColumns.includes(column)) {
          dt.hiddenColumns.push(column);
        }
      });
      this.rebuild();
    }
  }
  show(columns) {
    if (columns.length) {
      let index;
      const dt = this.dt;
      columns.forEach((column) => {
        index = dt.hiddenColumns.indexOf(column);
        if (index > -1) {
          dt.hiddenColumns.splice(index, 1);
        }
      });
      this.rebuild();
    }
  }
  visible(columns) {
    let cols;
    const dt = this.dt;
    columns = columns || dt.headings.map((th) => th.originalCellIndex);
    if (!isNaN(columns)) {
      cols = !dt.hiddenColumns.includes(columns);
    } else if (Array.isArray(columns)) {
      cols = [];
      columns.forEach((column) => {
        cols.push(!dt.hiddenColumns.includes(column));
      });
    }
    return cols;
  }
  add(data) {
    let td;
    const th = document.createElement("th");
    if (!this.dt.headings.length) {
      this.dt.insert({
        headings: [data.heading],
        data: data.data.map((i) => [i])
      });
      this.rebuild();
      return;
    }
    if (!this.dt.hiddenHeader) {
      if (data.heading.nodeName) {
        th.appendChild(data.heading);
      } else {
        th.innerHTML = data.heading;
      }
    } else {
      th.innerHTML = "";
    }
    this.dt.headings.push(th);
    this.dt.data.forEach((row, i) => {
      if (data.data[i]) {
        td = document.createElement("td");
        if (data.data[i].nodeName) {
          td.appendChild(data.data[i]);
        } else {
          td.innerHTML = data.data[i];
        }
        td.data = td.innerHTML;
        if (data.render) {
          td.innerHTML = data.render.call(this, td.data, td, row);
        }
        row.appendChild(td);
      }
    });
    if (data.type) {
      th.setAttribute("data-type", data.type);
    }
    if (data.format) {
      th.setAttribute("data-format", data.format);
    }
    if (data.hasOwnProperty("sortable")) {
      th.sortable = data.sortable;
      th.setAttribute("data-sortable", data.sortable === true ? "true" : "false");
    }
    this.rebuild();
    this.dt.renderHeader();
  }
  remove(select) {
    if (Array.isArray(select)) {
      select.sort((a, b) => b - a);
      select.forEach((column) => this.remove(column));
    } else {
      this.dt.headings.splice(select, 1);
      this.dt.data.forEach((row) => {
        row.removeChild(row.cells[select]);
      });
    }
    this.rebuild();
  }
  filter(column, dir, init, terms) {
    const dt = this.dt;
    if (!dt.filterState) {
      dt.filterState = {
        originalData: dt.data
      };
    }
    if (!dt.filterState[column]) {
      const filters = [...terms, () => true];
      dt.filterState[column] = function() {
        let i = 0;
        return () => filters[i++ % filters.length];
      }();
    }
    const rowFilter = dt.filterState[column]();
    const filteredRows = Array.from(dt.filterState.originalData).filter((tr) => {
      const cell = tr.cells[column];
      const content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.innerText;
      return typeof rowFilter === "function" ? rowFilter(content) : content === rowFilter;
    });
    dt.data = filteredRows;
    if (!dt.data.length) {
      dt.clear();
      dt.setMessage(dt.options.labels.noRows);
    } else {
      this.rebuild();
      dt.update();
    }
    if (!init) {
      dt.emit("datatable.sort", column, dir);
    }
  }
  sort(column, dir, init) {
    const dt = this.dt;
    if (dt.hasHeadings && (column < 0 || column > dt.headings.length)) {
      return false;
    }
    const filterTerms = dt.options.filters && dt.options.filters[dt.headings[column].textContent];
    if (filterTerms && filterTerms.length !== 0) {
      this.filter(column, dir, init, filterTerms);
      return;
    }
    dt.sorting = true;
    if (!init) {
      dt.emit("datatable.sorting", column, dir);
    }
    let rows = dt.data;
    const alpha = [];
    const numeric = [];
    let a = 0;
    let n = 0;
    const th = dt.headings[column];
    const waitFor = [];
    if (th.getAttribute("data-type") === "date") {
      let format = false;
      const formatted = th.hasAttribute("data-format");
      if (formatted) {
        format = th.getAttribute("data-format");
      }
      waitFor.push(import("./date.50c55cf7.js").then(({ parseDate }) => (date) => parseDate(date, format)));
    }
    Promise.all(waitFor).then((importedFunctions) => {
      const parseFunction = importedFunctions[0];
      Array.from(rows).forEach((tr) => {
        const cell = tr.cells[column];
        const content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.innerText;
        let num;
        if (parseFunction) {
          num = parseFunction(content);
        } else if (typeof content === "string") {
          num = content.replace(/(\$|,|\s|%)/g, "");
        } else {
          num = content;
        }
        if (parseFloat(num) == num) {
          numeric[n++] = {
            value: Number(num),
            row: tr
          };
        } else {
          alpha[a++] = {
            value: typeof content === "string" ? content.toLowerCase() : content,
            row: tr
          };
        }
      });
      if (!dir) {
        if (th.classList.contains("asc")) {
          dir = "desc";
        } else {
          dir = "asc";
        }
      }
      let top;
      let btm;
      if (dir == "desc") {
        top = sortItems(alpha, -1);
        btm = sortItems(numeric, -1);
        th.classList.remove("asc");
        th.classList.add("desc");
      } else {
        top = sortItems(numeric, 1);
        btm = sortItems(alpha, 1);
        th.classList.remove("desc");
        th.classList.add("asc");
      }
      if (dt.lastTh && th != dt.lastTh) {
        dt.lastTh.classList.remove("desc");
        dt.lastTh.classList.remove("asc");
      }
      dt.lastTh = th;
      rows = top.concat(btm);
      dt.data = [];
      const indexes = [];
      rows.forEach((v, i) => {
        dt.data.push(v.row);
        if (v.row.searchIndex !== null && v.row.searchIndex !== void 0) {
          indexes.push(i);
        }
      });
      dt.searchData = indexes;
      this.rebuild();
      dt.update();
      if (!init) {
        dt.emit("datatable.sort", column, dir);
      }
    });
  }
  rebuild() {
    let a;
    let b;
    let c;
    let d;
    const dt = this.dt;
    const temp = [];
    dt.activeRows = [];
    dt.activeHeadings = [];
    dt.headings.forEach((th, i) => {
      th.originalCellIndex = i;
      th.sortable = th.getAttribute("data-sortable") !== "false";
      if (!dt.hiddenColumns.includes(i)) {
        dt.activeHeadings.push(th);
      }
    });
    dt.data.forEach((row, i) => {
      a = row.cloneNode(false);
      b = row.cloneNode(false);
      a.dataIndex = b.dataIndex = i;
      if (row.searchIndex !== null && row.searchIndex !== void 0) {
        a.searchIndex = b.searchIndex = row.searchIndex;
      }
      Array.from(row.cells).forEach((cell) => {
        c = cell.cloneNode(true);
        c.data = cell.data;
        a.appendChild(c);
        if (!dt.hiddenColumns.includes(c.cellIndex)) {
          d = c.cloneNode(true);
          d.data = c.data;
          b.appendChild(d);
        }
      });
      temp.push(a);
      dt.activeRows.push(b);
    });
    dt.data = temp;
    dt.update();
  }
}
const dataToTable = function(data) {
  let thead = false;
  let tbody = false;
  data = data || this.options.data;
  if (data.headings) {
    thead = createElement("thead");
    const tr = createElement("tr");
    data.headings.forEach((col) => {
      const td = createElement("th", {
        html: col
      });
      tr.appendChild(td);
    });
    thead.appendChild(tr);
  }
  if (data.data && data.data.length) {
    tbody = createElement("tbody");
    data.data.forEach((rows) => {
      if (data.headings) {
        if (data.headings.length !== rows.length) {
          throw new Error("The number of rows do not match the number of headings.");
        }
      }
      const tr = createElement("tr");
      rows.forEach((value) => {
        const td = createElement("td", {
          html: value
        });
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
  if (thead) {
    if (this.dom.tHead !== null) {
      this.dom.removeChild(this.dom.tHead);
    }
    this.dom.appendChild(thead);
  }
  if (tbody) {
    if (this.dom.tBodies.length) {
      this.dom.removeChild(this.dom.tBodies[0]);
    }
    this.dom.appendChild(tbody);
  }
};
const defaultConfig = {
  sortable: true,
  searchable: true,
  paging: true,
  perPage: 10,
  perPageSelect: [5, 10, 15, 20, 25],
  nextPrev: true,
  firstLast: false,
  prevText: "&lsaquo;",
  nextText: "&rsaquo;",
  firstText: "&laquo;",
  lastText: "&raquo;",
  ellipsisText: "&hellip;",
  ascText: "\u25B4",
  descText: "\u25BE",
  truncatePager: true,
  pagerDelta: 2,
  scrollY: "",
  fixedColumns: true,
  fixedHeight: false,
  header: true,
  hiddenHeader: false,
  footer: false,
  labels: {
    placeholder: "Search...",
    perPage: "{select} entries per page",
    noRows: "No entries found",
    info: "Showing {start} to {end} of {rows} entries"
  },
  layout: {
    top: "{select}{search}",
    bottom: "{info}{pager}"
  }
};
class DataTable {
  constructor(table, options = {}) {
    const dom = typeof table === "string" ? document.querySelector(table) : table;
    this.options = __spreadProps(__spreadValues(__spreadValues({}, defaultConfig), options), {
      layout: __spreadValues(__spreadValues({}, defaultConfig.layout), options.layout),
      labels: __spreadValues(__spreadValues({}, defaultConfig.labels), options.labels)
    });
    this.initialized = false;
    this.initialLayout = dom.innerHTML;
    this.initialSortable = this.options.sortable;
    if (!this.options.header) {
      this.options.sortable = false;
    }
    if (dom.tHead === null) {
      if (!this.options.data || this.options.data && !this.options.data.headings) {
        this.options.sortable = false;
      }
    }
    if (dom.tBodies.length && !dom.tBodies[0].rows.length) {
      if (this.options.data) {
        if (!this.options.data.data) {
          throw new Error("You seem to be using the data option, but you've not defined any rows.");
        }
      }
    }
    this.dom = dom;
    this.table = this.dom;
    this.listeners = {
      onResize: (event) => this.onResize(event)
    };
    this.init();
  }
  static extend(prop, val) {
    if (typeof val === "function") {
      DataTable.prototype[prop] = val;
    } else {
      DataTable[prop] = val;
    }
  }
  init(options) {
    if (this.initialized || this.dom.classList.contains("dataTable-table")) {
      return false;
    }
    Object.assign(this.options, options || {});
    this.currentPage = 1;
    this.onFirstPage = true;
    this.hiddenColumns = [];
    this.columnRenderers = [];
    this.selectedColumns = [];
    this.render();
    setTimeout(() => {
      this.emit("datatable.init");
      this.initialized = true;
      if (this.options.plugins) {
        Object.entries(this.options.plugins).forEach(([plugin, options2]) => {
          if (this[plugin] && typeof this[plugin] === "function") {
            this[plugin] = this[plugin](options2, { createElement });
            if (options2.enabled && this[plugin].init && typeof this[plugin].init === "function") {
              this[plugin].init();
            }
          }
        });
      }
    }, 10);
  }
  render(type) {
    if (type) {
      switch (type) {
        case "page":
          this.renderPage();
          break;
        case "pager":
          this.renderPager();
          break;
        case "header":
          this.renderHeader();
          break;
      }
      return false;
    }
    const options = this.options;
    let template = "";
    if (options.data) {
      dataToTable.call(this);
    }
    this.body = this.dom.tBodies[0];
    this.head = this.dom.tHead;
    this.foot = this.dom.tFoot;
    if (!this.body) {
      this.body = createElement("tbody");
      this.dom.appendChild(this.body);
    }
    this.hasRows = this.body.rows.length > 0;
    if (!this.head) {
      const h = createElement("thead");
      const t = createElement("tr");
      if (this.hasRows) {
        Array.from(this.body.rows[0].cells).forEach(() => {
          t.appendChild(createElement("th"));
        });
        h.appendChild(t);
      }
      this.head = h;
      this.dom.insertBefore(this.head, this.body);
      this.hiddenHeader = options.hiddenHeader;
    }
    this.headings = [];
    this.hasHeadings = this.head.rows.length > 0;
    if (this.hasHeadings) {
      this.header = this.head.rows[0];
      this.headings = [].slice.call(this.header.cells);
    }
    if (!options.header) {
      if (this.head) {
        this.dom.removeChild(this.dom.tHead);
      }
    }
    if (options.footer) {
      if (this.head && !this.foot) {
        this.foot = createElement("tfoot", {
          html: this.head.innerHTML
        });
        this.dom.appendChild(this.foot);
      }
    } else {
      if (this.foot) {
        this.dom.removeChild(this.dom.tFoot);
      }
    }
    this.wrapper = createElement("div", {
      class: "dataTable-wrapper dataTable-loading"
    });
    template += "<div class='dataTable-top'>";
    template += options.layout.top;
    template += "</div>";
    if (options.scrollY.length) {
      template += `<div class='dataTable-container' style='height: ${options.scrollY}; overflow-Y: auto;'></div>`;
    } else {
      template += "<div class='dataTable-container'></div>";
    }
    template += "<div class='dataTable-bottom'>";
    template += options.layout.bottom;
    template += "</div>";
    template = template.replace("{info}", options.paging ? "<div class='dataTable-info'></div>" : "");
    if (options.paging && options.perPageSelect) {
      let wrap = "<div class='dataTable-dropdown'><label>";
      wrap += options.labels.perPage;
      wrap += "</label></div>";
      const select = createElement("select", {
        class: "dataTable-selector"
      });
      options.perPageSelect.forEach((val) => {
        const selected = val === options.perPage;
        const option = new Option(val, val, selected, selected);
        select.add(option);
      });
      wrap = wrap.replace("{select}", select.outerHTML);
      template = template.replace("{select}", wrap);
    } else {
      template = template.replace("{select}", "");
    }
    if (options.searchable) {
      const form = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${options.labels.placeholder}' type='text'></div>`;
      template = template.replace("{search}", form);
    } else {
      template = template.replace("{search}", "");
    }
    if (this.hasHeadings) {
      this.render("header");
    }
    this.dom.classList.add("dataTable-table");
    const paginatorWrapper = createElement("nav", {
      class: "dataTable-pagination"
    });
    const paginator = createElement("ul", {
      class: "dataTable-pagination-list"
    });
    paginatorWrapper.appendChild(paginator);
    template = template.replace(/\{pager\}/g, paginatorWrapper.outerHTML);
    this.wrapper.innerHTML = template;
    this.container = this.wrapper.querySelector(".dataTable-container");
    this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination-list");
    this.label = this.wrapper.querySelector(".dataTable-info");
    this.dom.parentNode.replaceChild(this.wrapper, this.dom);
    this.container.appendChild(this.dom);
    this.rect = this.dom.getBoundingClientRect();
    this.data = Array.from(this.body.rows);
    this.activeRows = this.data.slice();
    this.activeHeadings = this.headings.slice();
    this.update();
    this.setColumns();
    this.fixHeight();
    this.fixColumns();
    if (!options.header) {
      this.wrapper.classList.add("no-header");
    }
    if (!options.footer) {
      this.wrapper.classList.add("no-footer");
    }
    if (options.sortable) {
      this.wrapper.classList.add("sortable");
    }
    if (options.searchable) {
      this.wrapper.classList.add("searchable");
    }
    if (options.fixedHeight) {
      this.wrapper.classList.add("fixed-height");
    }
    if (options.fixedColumns) {
      this.wrapper.classList.add("fixed-columns");
    }
    this.bindEvents();
  }
  renderPage() {
    if (this.hasHeadings) {
      flush(this.header);
      this.activeHeadings.forEach((th) => this.header.appendChild(th));
    }
    if (this.hasRows && this.totalPages) {
      if (this.currentPage > this.totalPages) {
        this.currentPage = 1;
      }
      const index = this.currentPage - 1;
      const frag = document.createDocumentFragment();
      this.pages[index].forEach((row) => frag.appendChild(this.rows().render(row)));
      this.clear(frag);
      this.onFirstPage = this.currentPage === 1;
      this.onLastPage = this.currentPage === this.lastPage;
    } else {
      this.setMessage(this.options.labels.noRows);
    }
    let current = 0;
    let f = 0;
    let t = 0;
    let items;
    if (this.totalPages) {
      current = this.currentPage - 1;
      f = current * this.options.perPage;
      t = f + this.pages[current].length;
      f = f + 1;
      items = this.searching ? this.searchData.length : this.data.length;
    }
    if (this.label && this.options.labels.info.length) {
      const string = this.options.labels.info.replace("{start}", f).replace("{end}", t).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", items);
      this.label.innerHTML = items ? string : "";
    }
    if (this.currentPage == 1) {
      this.fixHeight();
    }
  }
  renderPager() {
    flush(this.pagers);
    if (this.totalPages > 1) {
      const c = "pager";
      const frag = document.createDocumentFragment();
      const prev = this.onFirstPage ? 1 : this.currentPage - 1;
      const next = this.onLastPage ? this.totalPages : this.currentPage + 1;
      if (this.options.firstLast) {
        frag.appendChild(button(c, 1, this.options.firstText));
      }
      if (this.options.nextPrev && !this.onFirstPage) {
        frag.appendChild(button(c, prev, this.options.prevText));
      }
      let pager = this.links;
      if (this.options.truncatePager) {
        pager = truncate(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText);
      }
      this.links[this.currentPage - 1].classList.add("active");
      pager.forEach((p) => {
        p.classList.remove("active");
        frag.appendChild(p);
      });
      this.links[this.currentPage - 1].classList.add("active");
      if (this.options.nextPrev && !this.onLastPage) {
        frag.appendChild(button(c, next, this.options.nextText));
      }
      if (this.options.firstLast) {
        frag.appendChild(button(c, this.totalPages, this.options.lastText));
      }
      this.pagers.forEach((pager2) => {
        pager2.appendChild(frag.cloneNode(true));
      });
    }
  }
  renderHeader() {
    this.labels = [];
    if (this.headings && this.headings.length) {
      this.headings.forEach((th, i) => {
        this.labels[i] = th.textContent;
        if (th.firstElementChild && th.firstElementChild.classList.contains("dataTable-sorter")) {
          th.innerHTML = th.firstElementChild.innerHTML;
        }
        th.sortable = th.getAttribute("data-sortable") !== "false";
        th.originalCellIndex = i;
        if (this.options.sortable && th.sortable) {
          const link = createElement("a", {
            href: "#",
            class: "dataTable-sorter",
            html: th.innerHTML
          });
          th.innerHTML = "";
          th.setAttribute("data-sortable", "");
          th.appendChild(link);
        }
      });
    }
    this.fixColumns();
  }
  bindEvents() {
    const options = this.options;
    if (options.perPageSelect) {
      const selector = this.wrapper.querySelector(".dataTable-selector");
      if (selector) {
        selector.addEventListener("change", () => {
          options.perPage = parseInt(selector.value, 10);
          this.update();
          this.fixHeight();
          this.emit("datatable.perpage", options.perPage);
        }, false);
      }
    }
    if (options.searchable) {
      this.input = this.wrapper.querySelector(".dataTable-input");
      if (this.input) {
        this.input.addEventListener("keyup", () => this.search(this.input.value), false);
      }
    }
    this.wrapper.addEventListener("click", (e) => {
      const t = e.target.closest("a");
      if (t && t.nodeName.toLowerCase() === "a") {
        if (t.hasAttribute("data-page")) {
          this.page(t.getAttribute("data-page"));
          e.preventDefault();
        } else if (options.sortable && t.classList.contains("dataTable-sorter") && t.parentNode.getAttribute("data-sortable") != "false") {
          this.columns().sort(this.headings.indexOf(t.parentNode));
          e.preventDefault();
        }
      }
    }, false);
    window.addEventListener("resize", this.listeners.onResize);
  }
  onResize() {
    this.rect = this.container.getBoundingClientRect();
    if (!this.rect.width) {
      return;
    }
    this.fixColumns();
  }
  setColumns(ajax) {
    if (!ajax) {
      this.data.forEach((row) => {
        Array.from(row.cells).forEach((cell) => {
          cell.data = cell.innerHTML;
        });
      });
    }
    if (this.options.columns && this.headings.length) {
      this.options.columns.forEach((data) => {
        if (!Array.isArray(data.select)) {
          data.select = [data.select];
        }
        if (data.hasOwnProperty("render") && typeof data.render === "function") {
          this.selectedColumns = this.selectedColumns.concat(data.select);
          this.columnRenderers.push({
            columns: data.select,
            renderer: data.render
          });
        }
        data.select.forEach((column) => {
          const th = this.headings[column];
          if (data.type) {
            th.setAttribute("data-type", data.type);
          }
          if (data.format) {
            th.setAttribute("data-format", data.format);
          }
          if (data.hasOwnProperty("sortable")) {
            th.setAttribute("data-sortable", data.sortable);
          }
          if (data.hasOwnProperty("hidden")) {
            if (data.hidden !== false) {
              this.columns().hide([column]);
            }
          }
          if (data.hasOwnProperty("sort") && data.select.length === 1) {
            this.columns().sort(data.select[0], data.sort, true);
          }
        });
      });
    }
    if (this.hasRows) {
      this.data.forEach((row, i) => {
        row.dataIndex = i;
        Array.from(row.cells).forEach((cell) => {
          cell.data = cell.innerHTML;
        });
      });
      if (this.selectedColumns.length) {
        this.data.forEach((row) => {
          Array.from(row.cells).forEach((cell, i) => {
            if (this.selectedColumns.includes(i)) {
              this.columnRenderers.forEach((options) => {
                if (options.columns.includes(i)) {
                  cell.innerHTML = options.renderer.call(this, cell.data, cell, row);
                }
              });
            }
          });
        });
      }
      this.columns().rebuild();
    }
    this.render("header");
  }
  destroy() {
    this.dom.innerHTML = this.initialLayout;
    this.dom.classList.remove("dataTable-table");
    this.wrapper.parentNode.replaceChild(this.dom, this.wrapper);
    this.initialized = false;
    window.removeEventListener("resize", this.listeners.onResize);
  }
  update() {
    this.wrapper.classList.remove("dataTable-empty");
    this.paginate(this);
    this.render("page");
    this.links = [];
    let i = this.pages.length;
    while (i--) {
      const num = i + 1;
      this.links[i] = button(i === 0 ? "active" : "", num, num);
    }
    this.sorting = false;
    this.render("pager");
    this.rows().update();
    this.emit("datatable.update");
  }
  paginate() {
    const perPage = this.options.perPage;
    let rows = this.activeRows;
    if (this.searching) {
      rows = [];
      this.searchData.forEach((index) => rows.push(this.activeRows[index]));
    }
    if (this.options.paging) {
      this.pages = rows.map((tr, i) => i % perPage === 0 ? rows.slice(i, i + perPage) : null).filter((page) => page);
    } else {
      this.pages = [rows];
    }
    this.totalPages = this.lastPage = this.pages.length;
    return this.totalPages;
  }
  fixColumns() {
    if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
      let cells;
      let hd = false;
      this.columnWidths = [];
      if (this.dom.tHead) {
        if (this.options.scrollY.length) {
          hd = createElement("thead");
          hd.appendChild(createElement("tr"));
          hd.style.height = "0px";
          if (this.headerTable) {
            this.dom.tHead = this.headerTable.tHead;
          }
        }
        this.activeHeadings.forEach((cell) => {
          cell.style.width = "";
        });
        this.activeHeadings.forEach((cell, i) => {
          const ow = cell.offsetWidth;
          const w = ow / this.rect.width * 100;
          cell.style.width = `${w}%`;
          this.columnWidths[i] = ow;
          if (this.options.scrollY.length) {
            const th = createElement("th");
            hd.firstElementChild.appendChild(th);
            th.style.width = `${w}%`;
            th.style.paddingTop = "0";
            th.style.paddingBottom = "0";
            th.style.border = "0";
          }
        });
        if (this.options.scrollY.length) {
          const container = this.dom.parentElement;
          if (!this.headerTable) {
            this.headerTable = createElement("table", {
              class: "dataTable-table"
            });
            const headercontainer = createElement("div", {
              class: "dataTable-headercontainer"
            });
            headercontainer.appendChild(this.headerTable);
            container.parentElement.insertBefore(headercontainer, container);
          }
          const thd = this.dom.tHead;
          this.dom.replaceChild(hd, thd);
          this.headerTable.tHead = thd;
          this.headerTable.parentElement.style.paddingRight = `${this.headerTable.clientWidth - this.dom.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10)}px`;
          if (container.scrollHeight > container.clientHeight) {
            container.style.overflowY = "scroll";
          }
        }
      } else {
        cells = [];
        hd = createElement("thead");
        const r = createElement("tr");
        Array.from(this.dom.tBodies[0].rows[0].cells).forEach(() => {
          const th = createElement("th");
          r.appendChild(th);
          cells.push(th);
        });
        hd.appendChild(r);
        this.dom.insertBefore(hd, this.body);
        const widths = [];
        cells.forEach((cell, i) => {
          const ow = cell.offsetWidth;
          const w = ow / this.rect.width * 100;
          widths.push(w);
          this.columnWidths[i] = ow;
        });
        this.data.forEach((row) => {
          Array.from(row.cells).forEach((cell, i) => {
            if (this.columns(cell.cellIndex).visible())
              cell.style.width = `${widths[i]}%`;
          });
        });
        this.dom.removeChild(hd);
      }
    }
  }
  fixHeight() {
    if (this.options.fixedHeight) {
      this.container.style.height = null;
      this.rect = this.container.getBoundingClientRect();
      this.container.style.height = `${this.rect.height}px`;
    }
  }
  search(query) {
    if (!this.hasRows)
      return false;
    query = query.toLowerCase();
    this.currentPage = 1;
    this.searching = true;
    this.searchData = [];
    if (!query.length) {
      this.searching = false;
      this.update();
      this.emit("datatable.search", query, this.searchData);
      this.wrapper.classList.remove("search-results");
      return false;
    }
    this.clear();
    this.data.forEach((row, idx) => {
      const inArray = this.searchData.includes(row);
      const doesQueryMatch = query.split(" ").reduce((bool, word) => {
        let includes = false;
        let cell = null;
        let content = null;
        for (let x = 0; x < row.cells.length; x++) {
          cell = row.cells[x];
          content = cell.hasAttribute("data-content") ? cell.getAttribute("data-content") : cell.textContent;
          if (content.toLowerCase().includes(word) && this.columns(cell.cellIndex).visible()) {
            includes = true;
            break;
          }
        }
        return bool && includes;
      }, true);
      if (doesQueryMatch && !inArray) {
        row.searchIndex = idx;
        this.searchData.push(idx);
      } else {
        row.searchIndex = null;
      }
    });
    this.wrapper.classList.add("search-results");
    if (!this.searchData.length) {
      this.wrapper.classList.remove("search-results");
      this.setMessage(this.options.labels.noRows);
    } else {
      this.update();
    }
    this.emit("datatable.search", query, this.searchData);
  }
  page(page) {
    if (page == this.currentPage) {
      return false;
    }
    if (!isNaN(page)) {
      this.currentPage = parseInt(page, 10);
    }
    if (page > this.pages.length || page < 0) {
      return false;
    }
    this.render("page");
    this.render("pager");
    this.emit("datatable.page", page);
  }
  sortColumn(column, direction) {
    this.columns().sort(column, direction);
  }
  insert(data) {
    let rows = [];
    if (isObject(data)) {
      if (data.headings) {
        if (!this.hasHeadings && !this.hasRows) {
          const tr = createElement("tr");
          data.headings.forEach((heading) => {
            const th = createElement("th", {
              html: heading
            });
            tr.appendChild(th);
          });
          this.head.appendChild(tr);
          this.header = tr;
          this.headings = [].slice.call(tr.cells);
          this.hasHeadings = true;
          this.options.sortable = this.initialSortable;
          this.render("header");
          this.activeHeadings = this.headings.slice();
        }
      }
      if (data.data && Array.isArray(data.data)) {
        rows = data.data;
      }
    } else if (Array.isArray(data)) {
      data.forEach((row) => {
        const r = [];
        Object.entries(row).forEach(([heading, cell]) => {
          const index = this.labels.indexOf(heading);
          if (index > -1) {
            r[index] = cell;
          }
        });
        rows.push(r);
      });
    }
    if (rows.length) {
      this.rows().add(rows);
      this.hasRows = true;
    }
    this.update();
    this.setColumns();
    this.fixColumns();
  }
  refresh() {
    if (this.options.searchable) {
      this.input.value = "";
      this.searching = false;
    }
    this.currentPage = 1;
    this.onFirstPage = true;
    this.update();
    this.emit("datatable.refresh");
  }
  clear(html) {
    if (this.body) {
      flush(this.body);
    }
    let parent = this.body;
    if (!this.body) {
      parent = this.dom;
    }
    if (html) {
      if (typeof html === "string") {
        const frag = document.createDocumentFragment();
        frag.innerHTML = html;
      }
      parent.appendChild(html);
    }
  }
  export(userOptions) {
    if (!this.hasHeadings && !this.hasRows)
      return false;
    const headers = this.activeHeadings;
    let rows = [];
    const arr = [];
    let i;
    let x;
    let str;
    let link;
    const defaults = {
      download: true,
      skipColumn: [],
      lineDelimiter: "\n",
      columnDelimiter: ",",
      tableName: "myTable",
      replacer: null,
      space: 4
    };
    if (!isObject(userOptions)) {
      return false;
    }
    const options = __spreadValues(__spreadValues({}, defaults), userOptions);
    if (options.type) {
      if (options.type === "txt" || options.type === "csv") {
        rows[0] = this.header;
      }
      if (options.selection) {
        if (!isNaN(options.selection)) {
          rows = rows.concat(this.pages[options.selection - 1]);
        } else if (Array.isArray(options.selection)) {
          for (i = 0; i < options.selection.length; i++) {
            rows = rows.concat(this.pages[options.selection[i] - 1]);
          }
        }
      } else {
        rows = rows.concat(this.activeRows);
      }
      if (rows.length) {
        if (options.type === "txt" || options.type === "csv") {
          str = "";
          for (i = 0; i < rows.length; i++) {
            for (x = 0; x < rows[i].cells.length; x++) {
              if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                let text = rows[i].cells[x].textContent;
                text = text.trim();
                text = text.replace(/\s{2,}/g, " ");
                text = text.replace(/\n/g, "  ");
                text = text.replace(/"/g, '""');
                text = text.replace(/#/g, "%23");
                if (text.includes(","))
                  text = `"${text}"`;
                str += text + options.columnDelimiter;
              }
            }
            str = str.trim().substring(0, str.length - 1);
            str += options.lineDelimiter;
          }
          str = str.trim().substring(0, str.length - 1);
          if (options.download) {
            str = `data:text/csv;charset=utf-8,${str}`;
          }
        } else if (options.type === "sql") {
          str = `INSERT INTO \`${options.tableName}\` (`;
          for (i = 0; i < headers.length; i++) {
            if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
              str += `\`${headers[i].textContent}\`,`;
            }
          }
          str = str.trim().substring(0, str.length - 1);
          str += ") VALUES ";
          for (i = 0; i < rows.length; i++) {
            str += "(";
            for (x = 0; x < rows[i].cells.length; x++) {
              if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                str += `"${rows[i].cells[x].textContent}",`;
              }
            }
            str = str.trim().substring(0, str.length - 1);
            str += "),";
          }
          str = str.trim().substring(0, str.length - 1);
          str += ";";
          if (options.download) {
            str = `data:application/sql;charset=utf-8,${str}`;
          }
        } else if (options.type === "json") {
          for (x = 0; x < rows.length; x++) {
            arr[x] = arr[x] || {};
            for (i = 0; i < headers.length; i++) {
              if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
                arr[x][headers[i].textContent] = rows[x].cells[i].textContent;
              }
            }
          }
          str = JSON.stringify(arr, options.replacer, options.space);
          if (options.download) {
            str = `data:application/json;charset=utf-8,${str}`;
          }
        }
        if (options.download) {
          options.filename = options.filename || "datatable_export";
          options.filename += `.${options.type}`;
          str = encodeURI(str);
          link = document.createElement("a");
          link.href = str;
          link.download = options.filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        return str;
      }
    }
    return false;
  }
  import(userOptions) {
    let obj = false;
    const defaults = {
      lineDelimiter: "\n",
      columnDelimiter: ","
    };
    if (!isObject(userOptions)) {
      return false;
    }
    const options = __spreadValues(__spreadValues({}, defaults), userOptions);
    if (options.data.length || isObject(options.data)) {
      if (options.type === "csv") {
        obj = {
          data: []
        };
        const rows = options.data.split(options.lineDelimiter);
        if (rows.length) {
          if (options.headings) {
            obj.headings = rows[0].split(options.columnDelimiter);
            rows.shift();
          }
          rows.forEach((row, i) => {
            obj.data[i] = [];
            const values = row.split(options.columnDelimiter);
            if (values.length) {
              values.forEach((value) => {
                obj.data[i].push(value);
              });
            }
          });
        }
      } else if (options.type === "json") {
        const json = isJson(options.data);
        if (json) {
          obj = {
            headings: [],
            data: []
          };
          json.forEach((data, i) => {
            obj.data[i] = [];
            Object.entries(data).forEach(([column, value]) => {
              if (!obj.headings.includes(column)) {
                obj.headings.push(column);
              }
              obj.data[i].push(value);
            });
          });
        }
      }
      if (isObject(options.data)) {
        obj = options.data;
      }
      if (obj) {
        this.insert(obj);
      }
    }
    return false;
  }
  print() {
    const headings = this.activeHeadings;
    const rows = this.activeRows;
    const table = createElement("table");
    const thead = createElement("thead");
    const tbody = createElement("tbody");
    const tr = createElement("tr");
    headings.forEach((th) => {
      tr.appendChild(createElement("th", {
        html: th.textContent
      }));
    });
    thead.appendChild(tr);
    rows.forEach((row) => {
      const tr2 = createElement("tr");
      Array.from(row.cells).forEach((cell) => {
        tr2.appendChild(createElement("td", {
          html: cell.textContent
        }));
      });
      tbody.appendChild(tr2);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    const w = window.open();
    w.document.body.appendChild(table);
    w.print();
  }
  setMessage(message) {
    let colspan = 1;
    if (this.hasRows) {
      colspan = this.data[0].cells.length;
    } else if (this.activeHeadings.length) {
      colspan = this.activeHeadings.length;
    }
    this.wrapper.classList.add("dataTable-empty");
    if (this.label) {
      this.label.innerHTML = "";
    }
    this.totalPages = 0;
    this.render("pager");
    this.clear(createElement("tr", {
      html: `<td class="dataTables-empty" colspan="${colspan}">${message}</td>`
    }));
  }
  columns(columns) {
    return new Columns(this, columns);
  }
  rows(rows) {
    return new Rows(this, rows);
  }
  on(event, callback) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }
  off(event, callback) {
    this.events = this.events || {};
    if (event in this.events === false)
      return;
    this.events[event].splice(this.events[event].indexOf(callback), 1);
  }
  emit(event) {
    this.events = this.events || {};
    if (event in this.events === false)
      return;
    for (let i = 0; i < this.events[event].length; i++) {
      this.events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
}
var style = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    options: { type: null, required: false, default: () => ({}) },
    autoupdate: { type: Boolean, required: false }
  },
  emits: [
    "init",
    "refresh",
    "update",
    "page",
    "sort",
    "perpage",
    "search"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const tableElement = ref();
    const wrapperElement = ref();
    const datatable = ref(null);
    const hasFocus = ref(false);
    const lastSort = reactive({
      column: 0,
      direction: ""
    });
    const onFocus = (event) => {
      if (!hasFocus.value) {
        hasFocus.value = true;
      }
    };
    const onBlur = (event) => {
      if (hasFocus.value) {
        hasFocus.value = false;
      }
    };
    const registerEvents = () => {
      if (wrapperElement.value) {
        const searchElement = wrapperElement.value.querySelector(".dataTable-input");
        const pageLimitElement = wrapperElement.value.querySelector(".dataTable-selector");
        const paginationElement = wrapperElement.value.querySelector(".dataTable-pagination");
        const sortersElement = wrapperElement.value.querySelectorAll(".dataTable-sorter");
        if (searchElement) {
          searchElement.addEventListener("focus", onFocus, false);
          searchElement.addEventListener("blur", onBlur, false);
        }
        if (pageLimitElement) {
          pageLimitElement.addEventListener("focus", onFocus, false);
          pageLimitElement.addEventListener("blur", onBlur, false);
          pageLimitElement.addEventListener("change", onBlur, false);
        }
        if (paginationElement) {
          paginationElement.addEventListener("mousedown", onFocus, false);
          paginationElement.addEventListener("mouseup", onBlur, false);
        }
        sortersElement.forEach((sorterElement) => {
          let sorter = sorterElement;
          if (sorter) {
            sorter.addEventListener("mousedown", onFocus, false);
            sorter.addEventListener("mouseup", onBlur, false);
          }
        });
      }
      if (datatable.value) {
        datatable.value.on(`datatable.init`, () => {
          emit("init");
        });
        datatable.value.on(`datatable.refresh`, () => {
          emit("refresh");
        });
        datatable.value.on(`datatable.update`, () => {
          emit("update");
        });
        datatable.value.on(`datatable.page`, (page) => {
          emit("page", page);
        });
        datatable.value.on(`datatable.sort`, (column, direction) => {
          lastSort.column = column;
          lastSort.direction = direction || "";
          emit("sort", column, direction);
        });
        datatable.value.on(`datatable.perpage`, (perpage) => {
          emit("perpage", perpage);
        });
        datatable.value.on(`datatable.search`, (query, matched) => {
          emit("search", query, matched);
        });
      }
    };
    const unregisterEvents = () => {
      if (datatable.value) {
        datatable.value.destroy();
        datatable.value = null;
      }
      if (wrapperElement.value) {
        const searchElement = wrapperElement.value.querySelector(".dataTable-input");
        const pageLimitElement = wrapperElement.value.querySelector(".dataTable-selector");
        const paginationElement = wrapperElement.value.querySelector(".dataTable-pagination");
        const sortersElement = wrapperElement.value.querySelectorAll(".dataTable-sorter");
        if (searchElement) {
          searchElement.removeEventListener("focus", onFocus);
          searchElement.removeEventListener("blur", onBlur);
        }
        if (pageLimitElement) {
          pageLimitElement.removeEventListener("focus", onFocus);
          pageLimitElement.removeEventListener("blur", onBlur);
          pageLimitElement.removeEventListener("change", onBlur);
        }
        if (paginationElement) {
          paginationElement.removeEventListener("mousedown", onFocus);
          paginationElement.removeEventListener("mouseup", onBlur);
        }
        sortersElement.forEach((sorterElement) => {
          let sorter = sorterElement;
          if (sorter) {
            sorter.removeEventListener("mousedown", onFocus);
            sorter.removeEventListener("mouseup", onBlur);
          }
        });
      }
    };
    onMounted(() => {
      if (tableElement.value) {
        datatable.value = new DataTable(tableElement.value, props.options);
      }
      registerEvents();
    });
    onBeforeUnmount(() => {
      unregisterEvents();
    });
    if (isReactive(props.options)) {
      watch([props.options, () => props.autoupdate], () => {
        var _a, _b;
        if (tableElement.value && props.autoupdate && !hasFocus.value) {
          let currentPage = 1;
          let perPage = 10;
          let search = "";
          if (datatable.value) {
            currentPage = datatable.value.currentPage;
            search = (_a = datatable.value.input) == null ? void 0 : _a.value;
            perPage = (_b = datatable.value.options) == null ? void 0 : _b.perPage;
            unregisterEvents();
          }
          datatable.value = new DataTable(tableElement.value, __spreadProps(__spreadValues({}, props.options), {
            perPage
          }));
          if (props.options.searchable !== false) {
            datatable.value.input.value = search;
            datatable.value.input.dispatchEvent(new Event("keyup"));
          }
          if (lastSort.direction !== "") {
            datatable.value.columns().sort(lastSort.column, lastSort.direction);
          }
          datatable.value.page(currentPage);
          registerEvents();
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["wrapperElement"] = _value;
          wrapperElement.value = _value;
        }
      }, [
        createBaseVNode("table", {
          ref: (_value, _refs) => {
            _refs["tableElement"] = _value;
            tableElement.value = _value;
          }
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 512)
      ], 512);
    };
  }
});
export { _sfc_main as _ };
