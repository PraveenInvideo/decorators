// open ReasonReact;
open DashboardModule.DashboardCSSModule;

[@react.component]
let make = () => {

    <div style=fetchMainDivStyle()>
        <LeftPanel />
        <RightPanel />
    </div>
};