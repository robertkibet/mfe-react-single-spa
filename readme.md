## Micro frontend with single-spa

- Single-spa js docs: https://single-spa.js.org/docs/getting-started-overview
- import map overrides: https://github.com/joeldenning/import-map-overrides
- React: https://reactjs.org/docs/hello-world.html
- Tutorial: https://www.youtube.com/watch?v=3EUfbnHi6Wg&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU
- Medium article: https://blog.bitsrc.io/building-microfrontends-using-single-spa-framework-94019ca2fb4d



## initialize
cd into root and execute scripts file
``` 
./scripts.sh
```
this will recursively `yarn install` in every app.
- cd into respective apps and `yarn start`, map the ports each app is runnint towards
- cd into root-config and `yarn start` and update shared map config if necessary.
- your MFE should be running :tada: 

Find me on [twitter](https://twitter.com/realRobertKibet):  