const hasNestedRouterLink = {
  getSSRProps(binding, vnode) {
    return {};
  },
  mounted(el) {
    const link = el.querySelector(".parent-link");
    const content = el.querySelector("ul");
    const linkExactActive = el.querySelector(".router-link-exact-active");
    if (link && content) {
      if (linkExactActive) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
      link.onclick = (event) => {
        event.preventDefault();
        const isActive = el.classList.contains("active");
        document.querySelectorAll(".has-children").forEach((element) => element.classList.remove("active"));
        if (isActive) {
          el.classList.remove("active");
        } else {
          el.classList.add("active");
        }
      };
    }
  }
};
export { hasNestedRouterLink as default };
