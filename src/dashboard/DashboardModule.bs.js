'use strict';


function fetchMainDivStyle(param) {
  return {
          display: "flex",
          height: "100vh",
          width: "100vw",
          flexDirection: "row"
        };
}

function fetchLeftPanelParentDiv(param) {
  return {
          backgroundColor: "#49B15B",
          borderRight: "1px solid gray",
          display: "flex",
          height: "100%",
          width: "30%",
          flexDirection: "column"
        };
}

function fetchRightPanelHeaderDiv(param) {
  return {
          backgroundColor: "#7852B3",
          display: "flex",
          height: "150px",
          width: "100%",
          flexDirection: "column"
        };
}

function fetchRightPanelParentDiv(param) {
  return {
          backgroundColor: "white",
          display: "flex",
          height: "100%",
          width: "70%",
          flexDirection: "column"
        };
}

var DashboardCSSModule = {
  fetchMainDivStyle: fetchMainDivStyle,
  fetchLeftPanelParentDiv: fetchLeftPanelParentDiv,
  fetchRightPanelHeaderDiv: fetchRightPanelHeaderDiv,
  fetchRightPanelParentDiv: fetchRightPanelParentDiv
};

exports.DashboardCSSModule = DashboardCSSModule;
/* No side effect */
