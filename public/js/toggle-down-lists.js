
const toggleActiveStatus = (event) => {
  let el = event;
  if (el.type === "click") {
    el = event.target;
  }
  ["active", "inactive"].forEach(className => {
    el.classList.toggle(className);
  });

  if (el.classList.contains("clicked-check")) {
    setTimeout(() => {
      el.classList.add("checked");
    }, 600);
  }
};


document.addEventListener("DOMContentLoaded", () => {

  const listsWithToggledItems = document.querySelectorAll(".toggle-down-list");
  listsWithToggledItems.forEach(list => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item, idx) => {
      item.classList.add("inactive");
      item.addEventListener("click", toggleActiveStatus);
      item.querySelector("button").addEventListener("click", () => {
        item.classList.add("clicked-check");
        setTimeout(() => {
          toggleActiveStatus(item);
        }, 500);
      });
    });
  });

  if (document.getElementById("wtd-tips")) {
    const tipList = document.getElementById("wtd-tips");
    const firstItem = tipList.querySelector("li");

    toggleActiveStatus(firstItem);

    tipList.addEventListener("mouseleave", () => {
      const checkedItems = tipList.querySelectorAll(".clicked-check");
      const openItems = tipList.querySelectorAll(".active");
      if (checkedItems.length === 0 && openItems.length === 0) {
        setTimeout(() => {
          firstItem.classList.add("highlight");
        }, 500);
      }
    });
    tipList.addEventListener("mouseenter", () => {
      if (firstItem.classList.contains("highlight")) {
        firstItem.classList.remove("highlight");
      }
    });
  }
});

