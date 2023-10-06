// /////////////////////////////////////////////////
// JS for three dots on header graph
// /////////////////////////////////////////////////

let topDots = document.querySelectorAll(".top-dots");

// for top three dots buttons
topDots.forEach((topDot) => {
  topDot.addEventListener("click", (e) => {
    let topDotMsg = e.currentTarget.parentElement.previousElementSibling;

    // for showing the msg
    if (topDotMsg.style.display == "none" || topDotMsg.style.display == "") {
      topDotMsg.style.display = "flex";
      topDotMsg.classList.add("fade-in");
      setTimeout(() => {
        topDotMsg.classList.remove("fade-in");
      }, 800);
    }

    // for hiding the msg
    else {
      topDotMsg.classList.add("fade-out");
      topDotMsg.style.display = "none";
    }
    e.stopPropagation();
  });
});

// /////////////////////////////////////////////////
// for the msg using cross button
// /////////////////////////////////////////////////

let msgCloseBtn = document.querySelectorAll("div.close-icon");

msgCloseBtn.forEach((Btn) => {
  Btn.addEventListener("click", (e) => {
    let topDotMsg = e.currentTarget.parentElement;
    topDotMsg.classList.add("fade-out");

    // for showing animation in the end
    setTimeout(() => {
      topDotMsg.classList.remove("fade-out");
      topDotMsg.style.display = "none";
      // console.log("none");
    }, 200);

    e.stopPropagation();
  });
});

// /////////////////////////////////////////////////
// for the graph extension button
// /////////////////////////////////////////////////

let graphExtensionBtn = document.querySelectorAll(".header-grid > div");

graphExtensionBtn.forEach((extensionBtn) => {
  extensionBtn.addEventListener("click", (e) => {
    let graphExtension = extensionBtn.nextElementSibling;
    if (graphExtension.hasAttribute("hide")) {
      // extensionBtn.style.pointerEvents = "none";
      graphExtension.style.gridTemplateRows = "1fr";
      graphExtension.removeAttribute("hide");
      graphExtension.setAttribute("show", "");
      e.stopPropagation();
      // console.log("inside");
      // console.log(graphExtension);
    } else {
      graphExtension.style.gridTemplateRows = "0fr";
      graphExtension.setAttribute("hide", "");
      graphExtension.removeAttribute("show");
      e.stopPropagation();
    }
    e.stopPropagation();
  });
});

let graphCloseBtn = document.querySelectorAll(".graph-extension-closeBtn");
graphCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    let graphExt = e.currentTarget.parentElement.parentElement.parentElement;
    graphExt.style.gridTemplateRows = "0fr";
    graphExt.setAttribute("hide", "");
  });
});

// /////////////////////////////////////////////////
// for calender opening and closing animation
// /////////////////////////////////////////////////
let periodBegins = document.querySelectorAll(".period-begins");
let periodEnds = document.querySelectorAll(".period-ends");

periodBegins.forEach((periodBegin) => {
  periodBegin.addEventListener("click", (e) => {
    let periodEnd = periodBegin.nextElementSibling;
    if (periodEnd.children[1].hasAttribute("show")) {
      periodEnd.children[1].classList.remove("calendar-container-open");
      periodEnd.children[1].removeAttribute("show");
      periodEnd.children[1].setAttribute("hide", "");
    }

    let topPerformer = periodBegin.nextElementSibling.nextElementSibling;
    if (topPerformer.children[1].hasAttribute("show")) {
      topPerformer.children[1].removeAttribute("show");
      topPerformer.children[1].setAttribute("hide", "");
      topPerformer.children[1].style.maxHeight = "0px";
    }
    let chart =
      periodBegin.nextElementSibling.nextElementSibling.nextElementSibling;
    if (chart.children[1].hasAttribute("show")) {
      chart.children[1].setAttribute("hide", "");
      chart.children[1].removeAttribute("show");
      chart.children[1].style.minHeight = "0";
      chart.children[1].style.maxHeight = "0";
      chart.parentElement.parentElement.style.width = "100%";
    }

    let calStart = periodBegin.children[1];

    if (calStart.hasAttribute("hide")) {
      calStart.classList.add("calendar-container-open");
      calStart.removeAttribute("hide");
      calStart.setAttribute("show", "");
    } else {
      calStart.classList.remove("calendar-container-open");
      calStart.setAttribute("hide", "");
      calStart.removeAttribute("show");
    }
    e.stopImmediatePropagation();
  });
});

periodEnds.forEach((periodEnd) => {
  periodEnd.addEventListener("click", (e) => {
    let calEnd = periodEnd.children[1];

    let periodBegins = periodEnd.previousElementSibling;
    if (periodBegins.children[1].hasAttribute("show")) {
      console.log(periodBegins.children[1]);
      periodBegins.children[1].classList.remove("calendar-container-open");
      periodBegins.children[1].removeAttribute("show");
      periodBegins.children[1].setAttribute("hide", "");
    }

    let topPerformer = periodEnd.nextElementSibling;
    if (topPerformer.children[1].hasAttribute("show")) {
      topPerformer.children[1].removeAttribute("show");
      topPerformer.children[1].setAttribute("hide", "");
      topPerformer.children[1].style.maxHeight = "0px";
    }

    let chart = periodEnd.nextElementSibling.nextElementSibling;
    if (chart.children[1].hasAttribute("show")) {
      chart.children[1].setAttribute("hide", "");
      chart.children[1].removeAttribute("show");
      chart.children[1].style.minHeight = "0";
      chart.children[1].style.maxHeight = "0";
      chart.parentElement.parentElement.style.width = "100%";
    }

    if (calEnd.hasAttribute("hide")) {
      calEnd.classList.add("calendar-container-open");
      calEnd.removeAttribute("hide");
      calEnd.setAttribute("show", "");
    } else {
      calEnd.classList.remove("calendar-container-open");
      calEnd.setAttribute("hide", "");
      calEnd.removeAttribute("show");
    }
    e.stopImmediatePropagation();
  });
});
// /////////////////////////////////////////////////
// for calender
// /////////////////////////////////////////////////

// month abbreviations
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// get current date values
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const calendars = document.querySelectorAll(".calendar");

// set month and year

calendars.forEach((calendar) => {
  calendar.querySelector(".calendar-month").innerText =
    months[currentDate.getMonth()];
  calendar.querySelector(".calendar-year").innerText = currentYear;

  // create grid of days
  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let week = document.createElement("div");
  week.classList.add("calendar-day-numbers-row");

  for (i = 1; i <= daysInMonth; i++) {
    let day = document.createElement("span");
    day.classList.add("calendar-day-number");
    day.innerText = i;
    i == currentDay && day.classList.add("calendar-day-number--current");
    week.append(day);

    if (
      new Date(currentYear, currentMonth, i).getDay() == 6 ||
      i == daysInMonth
    ) {
      calendar.querySelector(".calendar-day-numbers").append(week);

      if (i != daysInMonth) {
        week = document.createElement("div");
        week.classList.add("calendar-day-numbers-row");
      }
    }
  }
});

// /////////////////////////////////////////////////
// for top performer
// /////////////////////////////////////////////////

let topPerformers = document.querySelectorAll(".top-performer-head");
// let topPerformerWrapper = document.querySelectorAll('.top-performer-wrapper')

topPerformers.forEach((performer) => {
  performer.addEventListener("click", (e) => {
    let performerWrapper = performer.parentElement.children[1];

    let periodBegins =
      performer.parentElement.previousElementSibling.previousElementSibling;
    // console.log(periodBegins)
    if (periodBegins.children[1].hasAttribute("show")) {
      console.log(periodBegins.children[1]);
      periodBegins.children[1].classList.remove("calendar-container-open");
      periodBegins.children[1].removeAttribute("show");
      periodBegins.children[1].setAttribute("hide", "");
    }

    let periodEnd = performer.parentElement.previousElementSibling;
    if (periodEnd.children[1].hasAttribute("show")) {
      periodEnd.children[1].classList.remove("calendar-container-open");
      periodEnd.children[1].removeAttribute("show");
      periodEnd.children[1].setAttribute("hide", "");
    }

    let chart = performer.parentElement.nextElementSibling;
    if (chart.children[1].hasAttribute("show")) {
      chart.children[1].setAttribute("hide", "");
      chart.children[1].removeAttribute("show");
      chart.children[1].style.minHeight = "0";
      chart.children[1].style.maxHeight = "0";
      chart.parentElement.parentElement.style.width = "100%";
    }

    // console.log(performerWrapper)
    if (performerWrapper.hasAttribute("hide")) {
      performerWrapper.removeAttribute("hide");
      performerWrapper.setAttribute("show", "");
      performerWrapper.style.maxHeight = "800px";
    } else {
      performerWrapper.setAttribute("hide", "");
      performerWrapper.style.maxHeight = "0px";
      performerWrapper.removeAttribute("show");
    }
    e.stopPropagation();
  });
});

// /////////////////////////////////////////////////
// for top performers more button
// /////////////////////////////////////////////////

let topPerformerBtns = document.querySelectorAll(
  ".all-top-performer .all-top-performer-btn"
);

topPerformerBtns.forEach((topPerformerBtn) => {
  topPerformerBtn.addEventListener("click", (e) => {
    let topPerformerSection = topPerformerBtn.parentElement;
    if (topPerformerSection.hasAttribute("hide")) {
      topPerformerSection.firstElementChild.style.display = "block";
      setTimeout(() => {
        topPerformerSection.style.gridTemplateRows = "1fr";
        topPerformerSection.removeAttribute("hide");
      }, 10);
    } else {
      topPerformerSection.style.gridTemplateRows = "0fr";
      topPerformerSection.setAttribute("hide", "");

      console.log(topPerformerSection.firstElementChild);
      setTimeout(() => {
        topPerformerSection.firstElementChild.style.display = "none";
      }, 1000);
    }
    e.stopPropagation();
  });
});

// /////////////////////////////////////////////////
// for top performers chart button
// /////////////////////////////////////////////////

let viewChartBtns = document.querySelectorAll(".chart-view-head");

viewChartBtns.forEach((chartBtn) => {
  chartBtn.addEventListener("click", (e) => {
    let periodBegins =
      chartBtn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling;
    // console.log(periodBegins)
    if (periodBegins.children[1].hasAttribute("show")) {
      console.log(periodBegins.children[1]);
      periodBegins.children[1].classList.remove("calendar-container-open");
      periodBegins.children[1].removeAttribute("show");
      periodBegins.children[1].setAttribute("hide", "");
    }

    let periodEnd =
      chartBtn.parentElement.previousElementSibling.previousElementSibling;
    if (periodEnd.children[1].hasAttribute("show")) {
      periodEnd.children[1].classList.remove("calendar-container-open");
      periodEnd.children[1].removeAttribute("show");
      periodEnd.children[1].setAttribute("hide", "");
    }

    let topPerformer = chartBtn.parentElement.previousElementSibling;
    if (topPerformer.children[1].hasAttribute("show")) {
      topPerformer.children[1].removeAttribute("show");
      topPerformer.children[1].setAttribute("hide", "");
      topPerformer.children[1].style.maxHeight = "0px";
    }

    let viewChart = chartBtn.nextElementSibling;
    let graphExtension = chartBtn.parentElement.parentElement.parentElement;
    // console.log(graphExtension)
    if (viewChart.hasAttribute("hide")) {
      viewChart.removeAttribute("hide");
      viewChart.setAttribute("show", "");
      viewChart.style.minHeight = "180px";
      viewChart.style.maxHeight = "300px";

      if (window.screen.width > 767) {
        graphExtension.style.width = "200%";
      }
      graphExtension.style.zIndex = "99";
    } else {
      viewChart.setAttribute("hide", "");
      viewChart.removeAttribute("show");
      viewChart.style.minHeight = "0";
      viewChart.style.maxHeight = "0";
      graphExtension.style.width = "100%";
      graphExtension.style.zIndex = "50";
    }

    e.stopPropagation();
  });
});

// /////////////////////////////////////////////////
// for top performers customize view button
// /////////////////////////////////////////////////

let customizeViewBtns = document.querySelectorAll(".customize-view-head");

customizeViewBtns.forEach((viewBtn) => {
  viewBtn.addEventListener("click", (e) => {
    let viewChart = viewBtn.parentElement.previousElementSibling.children[1];
    let graphExtension = viewBtn.parentElement.parentElement.parentElement;

    let periodBegins =
      viewBtn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling;
    // console.log(periodBegins)
    if (periodBegins.children[1].hasAttribute("show")) {
      console.log(periodBegins.children[1]);
      periodBegins.children[1].classList.remove("calendar-container-open");
      periodBegins.children[1].removeAttribute("show");
      periodBegins.children[1].setAttribute("hide", "");
    }

    let periodEnd =
      viewBtn.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling;
    if (periodEnd.children[1].hasAttribute("show")) {
      periodEnd.children[1].classList.remove("calendar-container-open");
      periodEnd.children[1].removeAttribute("show");
      periodEnd.children[1].setAttribute("hide", "");
    }

    let topPerformer =
      viewBtn.parentElement.previousElementSibling.previousElementSibling;
    if (topPerformer.children[1].hasAttribute("show")) {
      topPerformer.children[1].removeAttribute("show");
      topPerformer.children[1].setAttribute("hide", "");
      topPerformer.children[1].style.maxHeight = "0px";
    }

    if (viewChart.hasAttribute("show")) {
      viewChart.setAttribute("hide", "");
      viewChart.style.minHeight = "0";
      viewChart.style.maxHeight = "0";
      graphExtension.style.width = "100%";
      graphExtension.style.zIndex = "50";
      e.stopPropagation();
    }
  });
});

// /////////////////////////////////////////////////
// for three dots in chart section
// /////////////////////////////////////////////////

let moreInfoBtn = document.querySelectorAll(".more-info-dots");

moreInfoBtn.forEach((infoBtn) => {
  infoBtn.addEventListener("click", () => {
    let moreInfoMsg = infoBtn.previousElementSibling;
    // console.log(infoBtn)
    if (infoBtn.classList.contains("close")) {
      // console.log(e.currentTarget.previousElementSibling);
      moreInfoMsg.style.display = "flex";
      moreInfoMsg.classList.add("fade-in");
      setTimeout(() => {
        moreInfoMsg.classList.remove("fade-in");
      }, 800);

      infoBtn.classList.remove("close");
      infoBtn.classList.add("open");
    } else {
      moreInfoMsg.style.display = "none";
      infoBtn.classList.add("close");
      infoBtn.classList.remove("open");
    }
  });
});

let moreInfoClose = document.querySelectorAll(".progress-msg .closeBtn");

moreInfoClose.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    let moreInfo = closeBtn.parentElement;
    let infoBtn = moreInfo.nextElementSibling;

    if (infoBtn.classList.contains("open")) {
      moreInfo.classList.add("fade-out");

      // for showing animation in the end
      setTimeout(() => {
        moreInfo.classList.remove("fade-out");
        moreInfo.style.display = "none";
      }, 200);

      infoBtn.classList.add("close");
      infoBtn.classList.remove("open");
    }
  });
});

// /////////////////////////////////////////////////
// for counter in chart button
// /////////////////////////////////////////////////

function animateValue(tag, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment =
    end > start
      ? Math.floor(range / (duration / 10)) > 0
        ? Math.floor(range / (duration / 10))
        : 1
      : -1;
  // const obj = document.getElementsByClassName(tagName)[0];
  let smallText = tag.innerHTML;
  const timer = setInterval(() => {
    current += increment;
    tag.innerHTML = current + smallText;
    if (current >= end) {
      tag.innerHTML = end + smallText;
      clearInterval(timer);
    }
  }, 10);
}

let centerCounter = document.querySelector(".center-counter");
animateValue(centerCounter, 0, 12322, 1000);

let centerCounterMobile = document.querySelector(".center-counter.mobile");
animateValue(centerCounterMobile, 0, 12322, 1000);

let counter3 = document.querySelector(".counter3");
animateValue(counter3, 0, 51, 1000);

let counter3Mobile = document.querySelector(".counter3Mobile");
animateValue(counter3Mobile, 0, 51, 1000);

let counter4 = document.querySelector(".counter4");
animateValue(counter4, 0, 35, 1000);

let counter4mobile = document.querySelector("#chart4-mobile .counter4");
animateValue(counter4mobile, 0, 35, 1000);

// /////////////////////////////////////////////////
// for company competencies button
// /////////////////////////////////////////////////

let competenceBtn = document.querySelectorAll(".company-stats .competenceBtn");

competenceBtn.forEach((competence) => {
  competence.addEventListener("click", () => {
    let competenceGrid = competence.nextElementSibling;
    let competenceHeadingIcon = competence.children[0].children[0];

    let competenceHeading = competence.children[0].children[1];
    let bars = competence.nextElementSibling.children[0].children;

    // console.log(bars)
    if (competenceGrid.classList.contains("close")) {
      [...bars].forEach((bar) => {
        let innerBars =
          bar.firstElementChild.nextElementSibling.querySelectorAll(".bar");
        innerBars.forEach((innerBar) => {
          // console.log(innerBar)
          // if(innerBar.classList.contains('close')){
          setTimeout(() => {
            innerBar.firstElementChild.style.width = "100%";
            bar.parentElement.classList.add("open");
            bar.parentElement.classList.remove("close");
          }, 500);
          // }
        });
      });

      competenceGrid.children[0].style.display = "block";
      competenceGrid.children[0].style.overflow = "hidden";

      setTimeout(() => {
        competenceGrid.style.gridTemplateRows = "1fr";
        competenceGrid.classList.add("open");
        competenceGrid.classList.remove("close");
        competenceHeading.style.color = "#fff";
        competenceHeadingIcon.style.color = "#fff";
        competenceHeadingIcon.children[0].classList.add("fa-angle-down");
        competenceHeadingIcon.children[0].classList.remove("fa-angle-up");

        competenceHeadingIcon.children[1].classList.add("fa-angle-up");
        competenceHeadingIcon.children[1].classList.remove("fa-angle-down");
      }, 10);
      setTimeout(() => {
        competenceGrid.children[0].style.overflow = "visible";
      }, 1000);
      // competenceHeadingIcon.classList.remove("fa-angles-down");
      // competenceHeadingIcon.classList.add("fa-angles-up");
    } else {
      [...bars].forEach((bar) => {
        let innerBars =
          bar.firstElementChild.nextElementSibling.querySelectorAll(".bar");
        innerBars.forEach((innerBar) => {
          // if(innerBar.classList.contains('open')){

          innerBar.firstElementChild.style.width = "0%";
          bar.parentElement.classList.remove("open");
          bar.parentElement.classList.add("close");
          // }
        });
      });

      competenceGrid.children[0].style.overflow = "hidden";

      competenceGrid.style.gridTemplateRows = "0fr";
      competenceGrid.classList.remove("open");
      competenceGrid.classList.add("close");

      competenceHeading.style.color = "#ADB0B9";
      competenceHeadingIcon.style.color = "#0190ec";

      competenceHeadingIcon.children[0].classList.remove("fa-angle-down");
      competenceHeadingIcon.children[0].classList.add("fa-angle-up");

      competenceHeadingIcon.children[1].classList.remove("fa-angle-up");
      competenceHeadingIcon.children[1].classList.add("fa-angle-down");

      setTimeout(() => {
        competenceGrid.children[0].style.display = "none";
        competenceGrid.children[0].style.overflow = "visible";
      }, 1000);
    }
  });
});

// /////////////////////////////////////////////////
// for add more btn in company competence
// /////////////////////////////////////////////////

let addMoreBtn = document.querySelector(".add-more");

addMoreBtn.addEventListener("click", () => {
  let addMoreMenu = addMoreBtn.parentElement.previousElementSibling;
  // console.log(addMoreMenu)

  if (addMoreMenu.classList.contains("close")) {
    addMoreMenu.classList.remove("close");
    addMoreMenu.classList.add("open");
    addMoreMenu.style.display = "block";
    addMoreMenu.style.animation = "fade-in 0.5s forwards";
  } else {
    addMoreMenu.classList.add("close");
    addMoreMenu.classList.remove("open");
    addMoreMenu.style.animation = "fade-out 0.5s forwards";
    setTimeout(() => {
      addMoreMenu.style.display = "none";
    }, 550);
  }
});

let addMoreCloseBtn = document.querySelector(".add-more-menu .closeBtn");

addMoreCloseBtn.addEventListener("click", () => {
  let addMoreMenu = addMoreCloseBtn.parentElement;
  addMoreMenu.classList.add("close");
  addMoreMenu.classList.remove("open");
  addMoreMenu.style.animation = "fade-out 0.5s forwards";
  setTimeout(() => {
    addMoreMenu.style.display = "none";
  }, 550);
});

// /////////////////////////////////////////////////
// for yellow suggestion in company competence
// /////////////////////////////////////////////////

let orangeSuggestions = document.querySelectorAll(
  ".suggestion-div .suggestions.orange-text"
);

orangeSuggestions.forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    let suggestionMsg =
      suggestion.parentElement.nextElementSibling.nextElementSibling;
    // console.log(suggestionMsg)

    if (suggestionMsg.classList.contains("close")) {
      suggestionMsg.classList.add("open");
      suggestionMsg.classList.remove("close");
      suggestionMsg.style.display = "block";
      suggestionMsg.style.animation = "fade-in 0.5s forwards";
    }
  });
});

let suggestionCloseBtn = document.querySelectorAll(
  ".suggestion-msg-head i.fa-xmark"
);
suggestionCloseBtn.forEach((btn) => {
  let suggestionMsg = btn.parentElement.parentElement;
  // console.log(suggestionMsg)
  suggestionMsg.addEventListener("click", () => {
    if (suggestionMsg.classList.contains("open")) {
      suggestionMsg.classList.remove("open");
      suggestionMsg.classList.add("close");
      suggestionMsg.style.animation = "fade-out 0.5s forwards";
      setTimeout(() => {
        suggestionMsg.style.display = "none";
      }, 550);
    }
  });
});

// /////////////////////////////////////////////////
// for mobile hamburger navigation
// /////////////////////////////////////////////////

let hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", () => {
  let hamBurgerMenu = hamBurger.nextElementSibling;

  if (hamBurgerMenu.firstElementChild.classList.contains("close")) {
    hamBurgerMenu.style.display = "block";
    setTimeout(() => {
      hamBurgerMenu.firstElementChild.style.gridTemplateRows = "1fr";
      hamBurgerMenu.firstElementChild.classList.add("open");
      hamBurgerMenu.firstElementChild.classList.remove("close");
    }, 5);
  } else {
    hamBurgerMenu.firstElementChild.style.gridTemplateRows = "0fr";
    hamBurgerMenu.firstElementChild.classList.add("close");
    hamBurgerMenu.firstElementChild.classList.remove("open");

    setTimeout(() => {
      hamBurgerMenu.style.display = "none";
    }, 300);
  }
});

// /////////////////////////////////////////////////
// for mobile SCTE navigation
// /////////////////////////////////////////////////

let scteNav = document.querySelector(".scte-nav .drop-down");

scteNav.addEventListener("click", () => {
  let scteMenu = scteNav.nextElementSibling;

  if (scteMenu.firstElementChild.classList.contains("close")) {
    scteMenu.style.display = "block";

    setTimeout(() => {
      scteMenu.firstElementChild.style.gridTemplateRows = "1fr";
      scteMenu.firstElementChild.classList.add("open");
      scteMenu.firstElementChild.classList.remove("close");
    }, 5);
  } else {
    scteMenu.firstElementChild.style.gridTemplateRows = "0fr";
    scteMenu.firstElementChild.classList.add("close");
    scteMenu.firstElementChild.classList.remove("open");

    setTimeout(() => {
      scteMenu.style.display = "none";
    }, 300);
  }
});

// /////////////////////////////////////////////////
// for header graph cards section in media queries
// /////////////////////////////////////////////////

let headerCardsHead = document.querySelectorAll(".header-cards-head");

// console.log(headerCardsHead)

headerCardsHead.forEach((cardHead) => {
  cardHead.addEventListener("click", () => {
    if (cardHead.nextElementSibling.classList.contains("close")) {
      // cardHead.children[1]
      cardHead.nextElementSibling.style.gridTemplateRows = "1fr";
      cardHead.nextElementSibling.classList.add("open");
      cardHead.nextElementSibling.classList.remove("close");
      cardHead.children[0].children[1].classList.add("fa-angle-up");
      cardHead.children[0].children[1].classList.remove("fa-angle-down");
      cardHead.children[0].style.display = "none";
      cardHead.style.padding = "5px";

      // console.log(cardHead.previousElementSibling.nextElementSibling)
    }

    // else{
    //   if(cardHead.nextElementSibling.children[1].hasAttribute('show')){
    //     cardHead.nextElementSibling.children[1].style.gridTemplateRows = '0fr';
    //     cardHead.nextElementSibling.children[1].removeAttribute('show')
    //     cardHead.nextElementSibling.children[1].setAttribute('hide', " ")

    //   }

    //   cardHead.nextElementSibling.style.gridTemplateRows = '0fr'

    //   cardHead.nextElementSibling.classList.remove('open')
    //   cardHead.nextElementSibling.classList.add('close')
    //   cardHead.children[0].children[1].classList.remove('fa-angle-up')
    //   cardHead.children[0].children[1].classList.add('fa-angle-down')
    //   cardHead.children[0].children[0].style.display = "block"

    // }
  });
});

// /////////////////////////////////////////////////
// for arrow body graph section arrow button in media queries section
// /////////////////////////////////////////////////

let graphBtn = document.querySelector(".progress-graph-head div.mobile-arrow");

graphBtn.addEventListener("click", () => {
  let graphContent = graphBtn.parentElement.parentElement;
  if (graphContent.classList.contains("open")) {
    graphContent.children[1].style.display = "none";
    graphContent.children[3].style.display = "none";
    graphContent.children[4].style.display = "none";
    graphContent.children[5].style.display = "none";
    graphContent.children[2].style.padding = "19px 10px";
    graphContent.style.height = "65px";
    graphContent.style.background = "none";
    graphContent.children[2].children[0].style.color = "#727a8e";
    graphContent.children[2].children[1].style.color = "#727a8e";
    graphContent.children[2].children[1].children[0].classList.add(
      "fa-angle-down"
    );
    graphContent.children[2].children[1].children[0].classList.remove(
      "fa-angle-up"
    );
    graphContent.classList.add("close");
    graphContent.classList.remove("open");
  } else {
    graphContent.children[1].style.display = "block";
    graphContent.children[3].style.display = "block";
    graphContent.children[4].style.display = "block";
    graphContent.children[5].style.display = "block";
    graphContent.children[2].style.padding = "0 10px";
    graphContent.style.height = "305px";
    graphContent.style.background = "block";
    graphContent.children[2].children[0].style.color = "#fff";
    graphContent.children[2].children[1].style.color = "#fff";
    graphContent.children[2].children[1].children[0].classList.add(
      "fa-angle-up"
    );
    graphContent.children[2].children[1].children[0].classList.remove(
      "fa-angle-down"
    );
    graphContent.classList.add("open");
    graphContent.classList.remove("close");
  }
});

// /////////////////////////////////////////////////
// for company competence in media queries section
// /////////////////////////////////////////////////

let companyCompetenceBtn = document.querySelector(
  ".company-stats .company-stats-head"
);

companyCompetenceBtn.addEventListener("click", () => {
  let competence = companyCompetenceBtn.nextElementSibling.nextElementSibling;
  if (competence.classList.contains("open")) {
    competence.classList.remove("open");
    competence.classList.add("close");
    competence.style.height = "0";
    companyCompetenceBtn.children[1].firstElementChild.classList.remove(
      "fa-angle-up"
    );
    companyCompetenceBtn.children[1].firstElementChild.classList.add(
      "fa-angle-down"
    );
    companyCompetenceBtn.children[1].firstElementChild.style.color = "#727a8e";

    setTimeout(() => {
      competence.style.display = "none";
    }, 50);
  } else {
    competence.classList.add("open");
    competence.style.display = "block";
    competence.classList.remove("close");
    competence.style.height = "fit-content";
    companyCompetenceBtn.children[1].firstElementChild.classList.remove(
      "fa-angle-down"
    );
    companyCompetenceBtn.children[1].firstElementChild.classList.add(
      "fa-angle-up"
    );
    companyCompetenceBtn.children[1].firstElementChild.style.color = "white";
  }
  AOS.refresh();
});

// /////////////////////////////////////////////////
// for company competence in media queries section
// /////////////////////////////////////////////////

let companyInsightBtn = document.querySelector(
  ".company-insights .company-insight-head"
);

companyInsightBtn.addEventListener("click", () => {
  let insight = companyInsightBtn.nextElementSibling;

  if (insight.classList.contains("open")) {
    insight.classList.remove("open");
    insight.classList.add("close");
    insight.style.height = "0";
    insight.style.display = "none";
    companyInsightBtn.children[1].firstElementChild.classList.remove(
      "fa-angle-up"
    );
    companyInsightBtn.children[1].firstElementChild.classList.add(
      "fa-angle-down"
    );
    companyInsightBtn.children[1].firstElementChild.style.color = "#727a8e";
  } else {
    insight.classList.add("open");
    insight.classList.remove("close");
    insight.style.height = "fit-content";
    insight.style.display = "block";
    companyInsightBtn.children[1].firstElementChild.classList.remove(
      "fa-angle-down"
    );
    companyInsightBtn.children[1].firstElementChild.classList.add(
      "fa-angle-up"
    );
    companyInsightBtn.children[1].firstElementChild.style.color = "white";
  }
  AOS.refresh();
});

// /////////////////////////////////////////////////
// for arrow icons in the header graph section in media queries section
// /////////////////////////////////////////////////

let dangerToArrow = document.querySelectorAll(".top-dots .danger-mobile");

dangerToArrow.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (window.screen.width < 768 || window.innerWidth < 768) {
      let headerGrid =
        icon.parentElement.parentElement.parentElement.parentElement;
      e.stopPropagation();

      let graphExtension = headerGrid.children[0].nextElementSibling;
      // console.log(graphExtension)
      graphExtension.style.gridTemplateRows = "0fr";
      graphExtension.setAttribute("hide", "");
      graphExtension.removeAttribute("show");

      headerGrid.style.gridTemplateRows = "0fr";

      headerGrid.classList.remove("open");
      headerGrid.classList.add("close");

      setTimeout(() => {
        headerGrid.previousElementSibling.children[0].style.display = "flex";
        headerGrid.previousElementSibling.style.padding = "20px 10px";
        headerGrid.previousElementSibling.children[0].children[1].classList.remove(
          "fa-angle-up"
        );
        headerGrid.previousElementSibling.children[0].children[1].classList.add(
          "fa-angle-down"
        );
      }, 300);
    }
  });
});
