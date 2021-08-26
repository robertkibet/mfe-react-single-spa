## Micro frontend with single-spa

- Single-spa js docs: https://single-spa.js.org/docs/getting-started-overview
- import map overrides: https://github.com/joeldenning/import-map-overrides
- React: https://reactjs.org/docs/hello-world.html
- Tutorial: https://www.youtube.com/watch?v=3EUfbnHi6Wg&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU
- Medium article: https://blog.bitsrc.io/building-microfrontends-using-single-spa-framework-94019ca2fb4d


#### Deploy your MFe with Terraform and GCP

- IaC using Terraform and GCP: https://registry.terraform.io/providers/hashicorp/google/latest

#### To enable deployment:
1. Retrieve credentials from google cloud and place the json file within credentials folder within the root of each app. Then terraform will pick it automatically and you can proceed and configure your secrets.
2. You'll need to setup  a secret for github token access so that deployment works smoothly with git


## initialize
cd into root and execute scripts file
``` 
./scripts.sh
```
to install needed dependencies.



--- 
Find me on [twitter](https://twitter.com/realRobertKibet) :smile:  