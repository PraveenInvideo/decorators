open ReasonReact;
open DashboardModule.DashboardCSSModule;

[@react.component]

let make = () => {

    <div style=fetchRightPanelParentDiv()>
    <RightPanelHeader />
    {string("Right panel")}
    </div>
}