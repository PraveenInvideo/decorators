open ReasonReact;
open DashboardModule.DashboardCSSModule;

[@react.component]
let make = () => {
  <div style={fetchRightPanelHeaderDiv()}>
    {string("Right panel Header!!!")}
  </div>;
};