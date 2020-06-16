'use strict';

var React = require("react");
var DashboardModule$ReasonReactExamples = require("../DashboardModule.bs.js");

function LeftPanel(Props) {
  return React.createElement("div", {
              style: DashboardModule$ReasonReactExamples.DashboardCSSModule.fetchLeftPanelParentDiv(undefined)
            }, "Left panel");
}

var make = LeftPanel;

exports.make = make;
/* react Not a pure module */
