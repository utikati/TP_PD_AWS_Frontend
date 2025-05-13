export const scrollToTPContent = () => {
  if (window.innerWidth < 992) {
    /*const content = document.getElementsByClassName("tab-content");
    if (content && content.length > 0) {
      content[0].scrollIntoView({ behavior: "smooth" });
    }*/
    const content = document.getElementById("tPmenu-tab-export");
    if (content) {
      content.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    const element = document.getElementById("travelPlanner");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
