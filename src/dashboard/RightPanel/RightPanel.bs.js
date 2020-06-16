'use strict';

var React = require("react");
var DashboardModule$ReasonReactExamples = require("../DashboardModule.bs.js");
var RightPanelHeader$ReasonReactExamples = require("../RightPanelHeader/RightPanelHeader.bs.js");

function RightPanel(Props) {
  return React.createElement("div", {
              style: DashboardModule$ReasonReactExamples.DashboardCSSModule.fetchRightPanelParentDiv(undefined)
            }, React.createElement(RightPanelHeader$ReasonReactExamples.make, { }), "Right panel");
}

var make = RightPanel;

exports.make = make;
/* react Not a pure module */
