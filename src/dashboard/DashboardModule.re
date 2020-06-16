open ReactDOMRe.Style;

module DashboardCSSModule = {
  let fetchMainDivStyle = () =>
    make(
      ~display="flex",
      ~flexDirection="row",
      ~width="100vw",
      ~height="100vh",
      (),
    );

  let fetchLeftPanelParentDiv = () =>
    make(
      ~width="30%",
      ~height="100%",
      ~display="flex",
      ~flexDirection="column",
      ~backgroundColor="#49B15B",
      ~borderRight="1px solid gray",
      (),
    );

  let fetchRightPanelHeaderDiv = () =>
    make(
      ~width="100%",
      ~height="150px",
      ~display="flex",
      ~flexDirection="column",
      ~backgroundColor="#7852B3",
      (),
    );

  let fetchRightPanelParentDiv = () =>
    make(
      ~width="70%",
      ~height="100%",
      ~display="flex",
      ~flexDirection="column",
      ~backgroundColor="white",
      (),
    );
};