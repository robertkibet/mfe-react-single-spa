import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
// singleSpaReact helper exposes the lifecycles of your apps
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    if (err) {
      // if you have a logger utility, you can catch the errors here and send it somewhere, fex Sentry
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("+++++++++++++++HOME APP++++++++++")
      console.log("+++++++++++++++ERROR OCCURRED++++++++++")
      console.log("+++++++++++++++ERROR OCCURRED++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log(err)
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log("++++++++++++++++++++++++++++++++++++++")
    };
      // show the user some meaningful message :P
    return <div><h3>Something went wrong</h3></div>;
  },
});

// Lifecycles:
// Bootstrap: called once, right before the registered application is mounted for the first time.
// Mount: called anytime registered app is not mounted, its activity function returns a truthy value
// Unmount: called anytime registered app is mounted, its activity function returns a falsy value
export const { bootstrap, mount, unmount } = lifecycles;
