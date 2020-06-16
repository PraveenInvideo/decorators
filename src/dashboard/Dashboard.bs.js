'use strict';

var React = require("react");
var LeftPanel$ReasonReactExamples = require("./LeftPanel/LeftPanel.bs.js");
var RightPanel$ReasonReactExamples = require("./RightPanel/RightPanel.bs.js");
var DashboardModule$ReasonReactExamples = require("./DashboardModule.bs.js");

function Dashboard(Props) {
  return React.createElement("div", {
              style: DashboardModule$ReasonReactExamples.DashboardCSSModule.fetchMainDivStyle(undefined)
            }, React.createElement(LeftPanel$ReasonReactExamples.make, { }), React.createElement(RightPanel$ReasonReactExamples.make, { }));
}

var make = Dashboard;

exports.make = make;
/* react Not a pure module */
