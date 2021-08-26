import { registerApplication, start } from "single-spa";
// helper libraries that help bootstraping, mounting and unmounting
// comes out of the box when setting up
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  loaders: {
    defaultLoader: `
   <div class="page-loader">
    <div class="lds-ripple"><div></div><div></div></div>
   </div>
    `,
  },
  props: {},
};

const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes, // resolves routes object from constructRoutes function
  loadApp({ name }) { // A function that is given an application object and must return a loading function.
    return System.import(name);
  },
});

// layoutEngine is responsible for creating, destroying and rearranging dom elements when routing
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start(); //initialize your single spa
