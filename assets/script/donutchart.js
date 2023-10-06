// /////////////////////////////////////////////////
// for donut pie chart  \\\ 22
// /////////////////////////////////////////////////

let chart2Data = (text, values, color) => {
  return {
    text: text,
    values: values,
    backgroundColor: color,
    borderColor: color,
  };
};

let chart2Config = {
  theme: "dark",
  type: "ring",
  backgroundColor: "transparent",
  "border-radius": 0,
  gui: {
    contextMenu: "none",
  },
  scale: {
    sizeFactor: 0.65,
  },
  plotarea: {
    "box-sizing": "content-box",
    "margin-right": "100px",
    // "margin-top": "15%"
  },
  plot: {
    slice: "55%",
    borderWidth: "0",
    animation: {
      effect: 2,
      sequence: 3,
      // speed: 'ANIMATION_FAST',
    },
    "value-box": {
      placement: "out",
      "offset-r": "0",
      "font-size": 12,
      "font-weight": "normal",
    },
  },
  series: [
    chart2Data("COURSES", [10497], "#FF325E"),
    chart2Data("CHAPTER", [4554], "#7FC2F9"),
    chart2Data("FOUNDATION", [0], "#58368C"),
    chart2Data("CERTIFICATION", [1306], "#079FCE"),
    chart2Data("VOLUNTEERS", [189], "#4EE2C0"),
    chart2Data("WEBSITES", [1763], "#EF32FF"),
    chart2Data("EXPO", [75], "#DCB337"),
  ],
};

let chart2MobileConfig = {
  theme: "dark",
  type: "ring",
  backgroundColor: "transparent",
  "border-radius": 0,
  gui: {
    contextMenu: "none",
  },
  plot: {
    slice: "55%",
    borderWidth: "0",
    animation: {
      effect: 2,
      sequence: 3,
      // speed: 'ANIMATION_FAST',
    },
    "value-box": {
      placement: "out",
      "offset-r": "0",
      "font-size": 10,
      "font-weight": "normal",
    },
  },
  series: [
    chart2Data("COURSES", [10497], "#FF325E"),
    chart2Data("CHAPTER", [4554], "#7FC2F9"),
    chart2Data("FOUNDATION", [0], "#58368C"),
    chart2Data("CERTIFICATION", [1306], "#079FCE"),
    chart2Data("VOLUNTEERS", [189], "#4EE2C0"),
    chart2Data("WEBSITES", [1763], "#EF32FF"),
    chart2Data("EXPO", [75], "#DCB337"),
  ],
};

function chart2Render(id, chart2Data,height, width){
  zingchart.render({
    id: id,
    data: chart2Data,
    height: height,
    width: width,
  });
}

chart2Render("chart2", chart2Config, 300, 400)
chart2Render("chart2-mobile", chart2MobileConfig, 310,310)

// /////////////////////////////////////////////////
// for first donut chart  \\\\\ 11
// /////////////////////////////////////////////////

let chart1Data = (size, values, color) => {
  return {
    size: size,
    values: values,
    backgroundColor: color,
    borderWidth: "10px",
    borderColor: color,
    borderRadius: "0px",
    'border-radius': "0px",
    tooltip: {
      text: "",
    },
  };
};

let chart1Config = {
  theme: "dark",
  type: "pie",
  backgroundColor: "transparent",
  "border-radius": 0,
  gui: {
    contextMenu: "none",
    // progress:{
    //   borderRadius: 0,
    // },
  },
  'plot': {

    valueBox: {
      visible: false,
    },
    'border-radius':'0',
    borderWidth: "0",
    angleStart: 270,
    detach: false,
    slice: "100%",
    totals: [100],
    animation: {
      effect: "ANIMATION_EXPAND_VERTICAL",
      method: "ANIMATION_STRONG_EASE_OUT",
      speed: 3,
    },
    hoverState: {
      visible: false,
    },
    refAngle: 270,
  },
  scale: {
    sizeFactor: 10,
  },
  series: [
    chart1Data("100%", [73], "#9C34FD"),
    chart1Data("75%", [27], "#2DA1EC"),
  ],
};

function chart1Render(id, chartData){
  zingchart.render({
    id: id,
    data: chartData,
    width: 180,
    height: 200,
  });
}

chart1Render("chart1", chart1Config)
chart1Render("chart1-mobile", chart1Config)
// /////////////////////////////////////////////////
// for 4 counter chart  \\\\\ 44
// /////////////////////////////////////////////////

let chart4Data = (size, values, color) => {
  return {
    size: size,
    values: values,
    backgroundColor: color,
    borderWidth: "10px",
    // borderRadius: '0px',
    borderColor: color,
    tooltip: {
      text: "",
    },
  };
};

let chart4Config = {
  theme: "dark",
  type: "pie",
  // borderRadius: 'none',
  backgroundColor: "transparent",
  gui: {
    contextMenu: "none",
  },
  plot: {
    valueBox: {
      visible: false,
    },
    angleStart: 270,
    detach: false,
    slice: "90%",
    totals: [100],
    animation: {
      effect: "ANIMATION_EXPAND_VERTICAL",
      method: "ANIMATION_STRONG_EASE_OUT",
      speed: 3,
    },
    hoverState: {
      visible: false,
    },
    refAngle: 270,
  },
  scale: {
    sizeFactor: 10,
  },
  series: [chart4Data("100%", [40], "#31D6C4")],
};


function chart4Render(id, chartData){
  zingchart.render({
    id: id,
    data: chartData,
    width: 190,
    height: 210,
  });
}

chart4Render('chart4', chart4Config)
chart4Render('chart4-mobile', chart4Config)