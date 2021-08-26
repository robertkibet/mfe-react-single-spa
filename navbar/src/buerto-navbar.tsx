import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

//navbar app lifecycle
// singleSpaReact helper exposes the lifecycles of your app
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});


// Lifecycles:
// Bootstrap: called once, right before the registered application is mounted for the first time.
// Mount: called anytime registered app is not mounted, its activity function returns a truthy value
// Unmount: called anytime registered app is mounted, its activity function returns a falsy value

export const { bootstrap, mount, unmount } = lifecycles;
