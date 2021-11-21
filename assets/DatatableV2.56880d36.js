import { _ as _sfc_main$1 } from "./VSimpleDatatables.bde9b4a7.js";
import { d as defineComponent, o as openBlock, N as createBlock, t as unref } from "./vendor.9ec557a4.js";
function renderPicture(data, cell, row) {
  return `
        <img class="product-photo" src="${data}" alt="">
    `;
}
function renderName(data, cell, row) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`;
}
function renderSKU(data, cell, row) {
  return `<span class="light-text">${data}</span>`;
}
function renderPrice(data, cell, row) {
  return `<span class="light-text">${data} \u062A\u0648\u0645\u0627\u0646</span>`;
}
function renderStock(data, cell, row) {
  return `<span class="light-text">${data}</span>`;
}
function renderCategory(data, cell, row) {
  return `<span class="light-text">${data}</span>`;
}
function renderButton(data, cell, row) {
  return `<div class="has-text-left">
            <button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">
                <span class="icon">
                    <i aria-hidden="true" class="lnir lnir-pencil"></i>
                </span>
                <span>\u0648\u06CC\u0631\u0627\u06CC\u0634</span>
            </button>
        </div>
    `;
}
const datatableV2 = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  labels: {
    placeholder: "\u062C\u0633\u062A\u062C\u0648...",
    perPage: "{select} \u062F\u0627\u062F\u0647 \u062F\u0631 \u0635\u0641\u062D\u0647",
    noRows: "\u0645\u0637\u0644\u0628\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
    info: "\u0646\u0645\u0627\u06CC\u0634 {start} \u0627\u0644\u06CC {end} \u0627\u0632 {rows} \u0645\u0648\u0631\u062F"
  },
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderSKU },
    { select: 4, render: renderPrice },
    { select: 5, render: renderStock },
    { select: 6, render: renderCategory },
    { select: 7, render: renderButton, sortable: false }
  ],
  data: {
    headings: [
      "\u0634\u0646\u0627\u0633\u0647",
      "\u062A\u0635\u0648\u06CC\u0631",
      "\u0646\u0627\u0645",
      "\u06A9\u062F \u0645\u062D\u0635\u0648\u0644",
      "\u0642\u06CC\u0645\u062A",
      "\u0645\u0648\u062C\u0648\u062F\u06CC",
      "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC",
      "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"
    ],
    data: [
      [
        0,
        "/demo/photos/products/1.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0632\u0631\u062F",
        "FC-58-5564",
        "19,000,000",
        51,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        1,
        "/demo/photos/products/2.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0633\u0628\u0632",
        "FC-58-1565",
        "17,000,000",
        42,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        2,
        "/demo/photos/products/3.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0641\u06CC\u0631\u0648\u0632\u0647",
        "FS-12-4854",
        "9,000,000",
        59,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        3,
        "/demo/photos/products/4.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0646\u06CC\u0644\u06CC",
        "FC-58-6723",
        "18,000,000",
        42,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        4,
        "/demo/photos/products/5.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0642\u0631\u0645\u0632",
        "FT-45-4684",
        "28,000,000",
        12,
        "\u0645\u06CC\u0632",
        true
      ],
      [
        5,
        "/demo/photos/products/6.png",
        "\u0645\u0628\u0644\u0645\u0627\u0646 \u0644\u06CC\u0645\u0648\u06CC\u06CC",
        "FC-58-7565",
        "19,000,000",
        37,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        6,
        "/demo/photos/products/7.png",
        "\u0635\u0646\u062F\u0644\u06CC \u062E\u0631\u062F\u0644",
        "FS-11-1861",
        "7,000,000",
        31,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        7,
        "/demo/photos/products/8.png",
        "\u06A9\u0627\u0646\u0627\u067E\u0647 \u0645\u062F\u0631\u0646",
        "FC-58-3971",
        "19,000,000",
        29,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        8,
        "/demo/photos/products/9.png",
        "\u0645\u06CC\u0632 \u0633\u0647 \u062A\u06CC\u06A9\u0647",
        "FT-22-2875",
        "3,400,000",
        6,
        "\u0645\u06CC\u0632",
        true
      ],
      [
        9,
        "/demo/photos/products/10.png",
        "\u0635\u0646\u062F\u0644\u06CC \u0686\u0648\u0628\u06CC",
        "FS-11-2876",
        "8,000,000",
        16,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        10,
        "/demo/photos/products/11.png",
        "\u0645\u06CC\u0632 \u0645\u062F\u0631\u0646",
        "FT-14-6543",
        "15,000,000",
        33,
        "\u0645\u06CC\u0632",
        true
      ],
      [
        11,
        "/demo/photos/products/12.png",
        "\u06A9\u0627\u0646\u0627\u067E\u0647 \u0647\u0627\u06CC\u067E",
        "FC-58-7241",
        "38,000,000",
        4,
        "\u0645\u0628\u0644\u0645\u0627\u0646",
        true
      ],
      [
        12,
        "/demo/photos/products/13.png",
        "\u06A9\u0645\u062F \u0686\u0648\u0628\u06CC",
        "FD-98-4654",
        "27,000,000",
        26,
        "\u06A9\u0645\u062F",
        true
      ],
      [
        13,
        "/demo/photos/products/14.png",
        "\u0635\u0646\u062F\u0644\u06CC \u06AF\u0631\u062F\u0648\u06CC\u06CC",
        "FS-11-5873",
        "110,000,000",
        37,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        14,
        "/demo/photos/products/15.png",
        "\u0635\u0646\u062F\u0644\u06CC \u0628\u0646\u0641\u0634",
        "FS-10-1948",
        "13,000,000",
        24,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        15,
        "/demo/photos/products/16.png",
        "\u0635\u0646\u062F\u0644\u06CC \u06AF\u0631\u062F",
        "FS-11-2857",
        "6,000,000",
        31,
        "\u0635\u0646\u062F\u0644\u06CC",
        true
      ],
      [
        16,
        "/demo/photos/products/17.png",
        "\u06A9\u0627\u0628\u06CC\u0646\u062A \u0645\u062F\u0631\u0646",
        "FB-58-25253",
        "24,000,000",
        11,
        "\u06A9\u0627\u0628\u06CC\u0646\u062A",
        true
      ],
      [
        17,
        "/demo/photos/products/18.png",
        "\u06A9\u0627\u0628\u06CC\u0646\u062A \u06A9\u0631\u0648\u0645\u06CC",
        "FB-58-5673",
        "35,000,000",
        29,
        "\u06A9\u0627\u0628\u06CC\u0646\u062A",
        true
      ],
      [
        18,
        "/demo/photos/products/19.png",
        "\u0644\u0627\u0645\u067E \u0645\u062F\u0631\u0646",
        "FL-19-7354",
        "5,000,000",
        62,
        "\u0644\u0627\u0645\u067E",
        true
      ],
      [
        19,
        "/demo/photos/products/20.png",
        "\u0644\u0627\u0645\u067E \u0633\u0647 \u062A\u06CC\u06A9\u0647",
        "FL-18-2846",
        "18,000,000",
        44,
        "\u0644\u0627\u0645\u067E",
        true
      ],
      [
        20,
        "/demo/photos/products/21.png",
        "\u0644\u0627\u0645\u067E \u062C\u0648\u0628\u06CC",
        "FL-19-1947",
        "6,000,000",
        82,
        "\u0644\u0627\u0645\u067E",
        true
      ],
      [
        21,
        "/demo/photos/products/22.png",
        "\u0644\u0627\u0645\u067E \u06A9\u0631\u0628\u0646\u06CC",
        "FL-19-3658",
        "22,000,000",
        11,
        "\u0644\u0627\u0645\u067E",
        true
      ],
      [
        22,
        "/demo/photos/products/23.png",
        "\u0644\u0627\u0645\u067E \u0686\u0646\u062F \u062A\u06CC\u06A9\u0647",
        "FL-19-1731",
        "16,000,000",
        17,
        "\u0644\u0627\u0645\u067E",
        true
      ]
    ]
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VSimpleDatatables = _sfc_main$1;
      return openBlock(), createBlock(_component_VSimpleDatatables, { options: unref(datatableV2) }, null, 8, ["options"]);
    };
  }
});
export { _sfc_main as _ };
