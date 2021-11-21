import { f as __vitePreload } from "./index.4d6c8e1a.js";
import { ar as defineAsyncComponent, r as ref, h as computed } from "./vendor.9ec557a4.js";
const NavbarLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarLayout.9a8f4a53.js"), true ? ["assets/NavbarLayout.9a8f4a53.js","assets/NavbarLayout.ee47c1cb.css","assets/index.4d6c8e1a.js","assets/index.571f46cb.css","assets/vendor.9ec557a4.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0));
const NavbarDropdownLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarDropdownLayout.32e73aa1.js"), true ? ["assets/NavbarDropdownLayout.32e73aa1.js","assets/index.4d6c8e1a.js","assets/index.571f46cb.css","assets/vendor.9ec557a4.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/icons-dark.3c15f062.js","assets/Navbar.95418b57.js","assets/Navbar.10be8100.css","assets/userPopovers.e00e1803.js"] : void 0));
const NavbarSearchLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarSearchLayout.0f0a5e0d.js"), true ? ["assets/NavbarSearchLayout.0f0a5e0d.js","assets/NavbarSearchLayout.c92d7958.css","assets/index.4d6c8e1a.js","assets/index.571f46cb.css","assets/vendor.9ec557a4.js","assets/ActivityPanel.b40b79c2.js","assets/ActivityPanel.9967c5d4.css","assets/useDropdown.086619d7.js","assets/useViaPlaceholderError.be9c33a4.js","assets/VAvatar.879e77ac.js","assets/VDropdown.5214d40f.js","assets/VDropdown.6229ccb1.css","assets/VIcon.85cce7bc.js","assets/activePanelState.9015e2f2.js","assets/fastpizza.70124fcb.js","assets/25.ca54486f.js","assets/TaskPanel.15619fee.js","assets/TaskPanel.d6a7c96e.css","assets/VTag.ff081b8f.js","assets/VMessage.2ad1e7cc.js","assets/VTabs.2e6d271f.js","assets/VModal.d9bd4cb5.js","assets/sidebarLayoutState.883cc242.js","assets/video.6a901793.js","assets/ToolbarNotification.0ddce444.js","assets/12.16c4b7ba.js","assets/13.d1ef5906.js","assets/Toolbar.278fa677.js","assets/VAvatarStack.8507ceb8.js","assets/VIconButton.809a4ce6.js","assets/userPopovers.e00e1803.js"] : void 0));
const layoutsComponents = {
  "navbar-default": NavbarLayout,
  "navbar-fade": NavbarLayout,
  "navbar-colored": NavbarLayout,
  "navbar-dropdown": NavbarDropdownLayout,
  "navbar-dropdown-colored": NavbarDropdownLayout,
  "navbar-clean": NavbarSearchLayout,
  "navbar-clean-center": NavbarSearchLayout,
  "navbar-clean-fade": NavbarSearchLayout
};
const navbarLayoutId = ref("navbar-default");
const navbarLayoutComponent = computed(() => {
  return layoutsComponents[navbarLayoutId.value] || NavbarLayout;
});
const navbarLayoutTheme = computed(() => {
  switch (navbarLayoutId.value) {
    case "navbar-fade":
    case "navbar-clean-fade":
      return "fade";
    case "navbar-colored":
    case "navbar-dropdown-colored":
      return "colored";
    case "navbar-clean-center":
      return "center";
    default:
      return "default";
  }
});
const pageTitle = ref("\u062E\u0648\u0634 \u0622\u0645\u062F \u06AF\u0648\u06CC\u06CC");
export { navbarLayoutTheme as a, navbarLayoutComponent as b, navbarLayoutId as n, pageTitle as p };
