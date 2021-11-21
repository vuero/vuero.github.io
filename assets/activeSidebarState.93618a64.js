import { r as ref } from "./vendor.9ec557a4.js";
const activeSidebar = ref("none");
function toggleSidebar(sidebar) {
  if (activeSidebar.value === sidebar) {
    activeSidebar.value = "none";
  } else {
    activeSidebar.value = sidebar;
  }
}
export { activeSidebar as a, toggleSidebar as t };
