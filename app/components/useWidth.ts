import * as React from "react";
export default function useWidth() {
  // here
  const [state, setState] = React.useState({
    width: 0,
    breakpoints: {
        medium: 1100, // the width of the side-by-side picture on its own
        small: 800,
      },
  })

  React.useEffect(() => {
    setState({...state, width: window.innerWidth});

    const handleResizeWindow = () => {
      setState({...state, width: window.innerWidth});
    };

    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return state;
}
