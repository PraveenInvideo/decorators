'use strict';

var React = require("react");
var DashboardModule$ReasonReactExamples = require("../DashboardModule.bs.js");

function RightPanelHeader(Props) {
  return React.createElement("div", {
              style: DashboardModule$ReasonReactExamples.DashboardCSSModule.fetchRightPanelHeaderDiv(undefined)
            }, "Right panel Header!!!");
}

var make = RightPanelHeader;

exports.make = make;
/* react Not a pure module */
