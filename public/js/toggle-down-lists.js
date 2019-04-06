
const toggleActiveStatus = (event) => {
  let el = event;
  if (el.type === "click") {
    el = event.target;
  }
  ["active", "inactive"].forEach(className => {
    el.classList.toggle(className);
  });

  if (el.classList.contains("checked") && !el.classList.contains("clicked-check")) {
    el.classList.remove("checked");
  }

  if (el.classList.contains("clicked-check")) {
    setTimeout(() => {
      el.classList.add("checked");
      const activeTips = document.querySelectorAll("li.active");
      if (activeTips.length === 0) {
        const allTips = document.querySelectorAll("li.inactive");
        for (const tip of allTips) {
          if (!tip.classList.contains("checked")) {
            tip.classList.add("active");
            tip.classList.remove("inactive");
            return;
          }
        }
      }
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
        item.classList.toggle("clicked-check");
        if (!item.classList.contains("clicked-check")) {
          return item.classList.remove("checked");
        }
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

