import { _ as _sfc_main$1 } from "./VSimpleDatatables.bde9b4a7.js";
import { Z as useI18n, d as defineComponent, o as openBlock, N as createBlock, t as unref } from "./vendor.9ec557a4.js";
function renderPicture(data, cell, row) {
  return `
          <div class="v-avatar">
              <img class="avatar" src="${data}" alt="">
          </div>
      `;
}
function renderName(data, cell, row) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`;
}
function renderPosition(data, cell, row) {
  return `<span class="light-text">${data}</span>`;
}
function renderStatus(data, cell, row) {
  const { t } = useI18n();
  const tdata = t(`status.${data}`);
  return `
          <div class="status is-${data}">
              <i aria-hidden="true" class="fas fa-circle"></i>
              <span class="is-capitalize">${tdata}</span>
          </div>
      `;
}
function renderButton(data, cell, row) {
  return `<div class="has-text-left"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">\u0645\u062F\u06CC\u0631\u06CC\u062A</button></div>`;
}
const datatableV1 = {
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
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false }
  ],
  data: {
    headings: ["\u0634\u0646\u0627\u0633\u0647", "\u062A\u0635\u0648\u06CC\u0631", "\u0646\u0627\u0645", "\u0645\u0648\u0642\u0639\u06CC\u062A", "\u0648\u0636\u0639\u06CC\u062A", "\u0627\u0642\u062F\u0627\u0645\u0627\u062A"],
    data: [
      [
        0,
        "/images/avatars/svg/vuero-1.svg",
        "\u062C\u0645\u0627\u0644 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "busy",
        true
      ],
      [
        1,
        "/demo/avatars/7.jpg",
        "\u0622\u0644\u06CC\u0633 \u06AF\u06CC\u062A\u0633",
        "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
        "offline",
        true
      ],
      [
        2,
        "/demo/avatars/13.jpg",
        "\u062A\u0627\u0631\u0627 \u062E\u0627\u0634\u0642\u0686\u06CC",
        "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        "offline",
        true
      ],
      [3, "/demo/avatars/5.jpg", "\u0645\u0631\u06CC\u0645 \u062C\u0644\u0627\u0644\u06CC", "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647", "available", true],
      [
        4,
        "/images/avatars/placeholder-f.jpg",
        "\u06A9\u0627\u06CC\u0644 \u062C\u0646 \u06AF\u06CC\u0631",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "available",
        true
      ],
      [
        5,
        "/demo/avatars/27.jpg",
        "\u0639\u0644\u06CC \u06AF\u0648\u062F\u0631\u0632\u06CC",
        "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
        "offline",
        true
      ],
      [6, "/demo/avatars/22.jpg", "\u062F\u0627\u0648\u0648\u062F \u0647\u06CC\u0686\u06A9\u0633", "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644", "offline", true],
      [
        7,
        "/images/avatars/placeholder-m.jpg",
        "\u067E\u0627\u0648\u0647 \u0645\u0648\u0631\u06CC\u0633",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0628\u06A9\u200C\u0627\u0646\u062F",
        "available",
        true
      ],
      [
        8,
        "/demo/avatars/23.jpg",
        "\u0627\u06CC\u0631\u0627\u0646 \u0648\u0637\u0646\u062E\u0648\u0627\u0647",
        "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        "available",
        true
      ],
      [
        9,
        "/demo/avatars/28.jpg",
        "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "busy",
        true
      ],
      [
        10,
        "/images/avatars/placeholder-f.jpg",
        "\u0634\u0627\u0646\u0627 \u0648\u06CC\u0644\u06CC\u0627\u0645\u0632",
        "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        "offline",
        true
      ],
      [
        11,
        "/images/avatars/placeholder-m.jpg",
        "\u0628\u0646\u062C\u0627\u0645\u06CC\u0646 \u0647\u0627\u0641\u0645\u0646",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "offline",
        true
      ],
      [
        12,
        "/demo/avatars/39.jpg",
        "\u0639\u0644\u06CC \u0698\u0627\u0646\u062F\u0627\u0631\u0645",
        "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647\u200C\u06CC \u0648\u0628",
        "busy",
        true
      ],
      [
        13,
        "/demo/avatars/21.jpg",
        "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0645\u0627\u0647\u06CC \u0641\u0631\u0648\u0634",
        "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0627\u067E \u0645\u0648\u0628\u0627\u06CC\u0644",
        "available",
        true
      ],
      [
        14,
        "/demo/avatars/37.jpg",
        "\u062D\u0628\u06CC\u0628 \u0641\u0627\u062A\u062D",
        "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        "available",
        true
      ],
      [
        15,
        "/demo/avatars/31.jpg",
        "\u06CC\u0627\u0633\u06CC\u0646 \u0639\u0638\u06CC\u0645\u06CC",
        "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u0628\u0627\u0632\u0627\u0631",
        "offline",
        true
      ]
    ]
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VSimpleDatatables = _sfc_main$1;
      return openBlock(), createBlock(_component_VSimpleDatatables, { options: unref(datatableV1) }, null, 8, ["options"]);
    };
  }
});
export { _sfc_main as _ };
