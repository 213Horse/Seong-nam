(() => {
  const tab = document.querySelectorAll(".tabJS");
  if (tab) {
    tab.forEach((t) => {
      const tBtn = t.querySelectorAll(".tabBtn");
      const tPanelList = t.querySelectorAll(".tabPanelList");
      tPanelList.forEach((ele, index) => {
        const tPanel = ele.querySelectorAll(".tabPanel");
        if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
          if (!t.classList.contains("tab-not")) {
            tBtn[0].classList.add("active");
            tPanel[0].classList.add("open");
          }

          for (let i = 0; i < tBtn.length; i++) {
            tBtn[i].addEventListener("click", showPanel);
            tBtn[i].addEventListener("mouseover", () => showPanel(null, i)); // Thêm sự kiện mouseover

            function showPanel(e, index) {
              if (e) e.preventDefault(); // Ngăn chặn hành động mặc định nếu cần
              for (let a = 0; a < tBtn.length; a++) {
                tBtn[a].classList.remove("active");
                tPanel[a].classList.remove("open");
              }
              tBtn[index].classList.add("active");
              tPanel[index].classList.add("open");
            }
          }
        }
      });
    });
  }
})();
