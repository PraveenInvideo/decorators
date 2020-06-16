'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Dashboard$ReasonReactExamples = require("./dashboard/Dashboard.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(Dashboard$ReasonReactExamples.make, { }), "root");

/*  Not a pure module */
