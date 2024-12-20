# Cliff Consulting Web Page

This repository supports the [cliffconsulting.com](https://cliffconsulting.com/) web site. This is a serverless site to support Matt Cliff's career and freelance work.


Ref: https://github.com/devcontainers/images/tree/main/src/javascript-node

(12/21/19) make a new s3-cfn-dns stack that I can separate from the base; the base will make the pipeline for a given environment.

We will have a pipeline with 1 source (this Git);
1 overall build group;
   step1 - deploy the s3-cdn-dns stack
   step2 publish the Node site

THE ONLY stacks I should ever manually deploy are Pipeline stacks;  or CodeBuild stacks (if I am too lazy for pipeline).

## Local Develop

Any docker station (using Windows as example since that's what I'm running)
`docker run -it -p 3000:3000 -m //c/Home/Users/mcliff/git/cliffconsulting:/home/node --user 1000 node:18 bash`

then `npm start`

(6/7/19) updated react-router-dom (from 4.4.0 which doesnt exit) to 5.0.1

(3/17) the remote was changed; and NPM mods updated on develop branch

## REACT/NodeJS
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).ran

* `npx create-react-app my-apps`
* - manually copied all the resources back one level (to root level)
* `npm install --save reactstrap boostrap`




### Node Security warnings

GitHub is kind enough to send notifications when a resource in a package-lock.json file is idenitfied to have a vulnerability.

In order to address these

Working to update some packages
https://docs.npmjs.com/getting-started/updating-local-packages

Ran this (from windows)  - in same dir as package.json
* `npm install` for a new work area (this installs everything localling no node_modules/ folder)
* `npm outdated`
* `npm update`
* I had a note about this, but it isnt in NodeJs5.6 `npm audit fix`


may need to run `npm i <script>@<version>` on command line for peer depdencies, from the output of the update command.

requires machine with node setup


### Search Engine Optimization

Added [Google Search](https://search.google.com/search-console/) token file -- `google0f279037173f0494.html`  along with sitemap.xml and robots.txt (12/22/18)

## Deployment

(console) run new stack one-time - this can take 20-30 m due to cloudfront
(github) create the new branch
(console) manually connect to a new branch - this starts the build right away  (did this in develop only)
cliffconsulting-prod  (url prod)

TODO -  add to codebuild a notification to the SNS when it fails (or succeeds)


*Release Notes*
- created develop branch in github;  **mcliff** AWS account has a deploy pipeline set up, that will push to cliff analysis S3 bucket.

Well it appears for each branch I want to auto-build I need a seperate pipeline set up in *CodePipeline*, I modified the current to use the new **develop** branch.

To set up a new automated build enviroment in an AWS account, the *base-cfn.json* template will set up a stack that can trigger automated builds from a branch in *GitLab*. This is how production is hosted as well as supporting test environments and feature branches as needed.

Cloud Formation Inputs:

* Domain Name (must have hosted zone in Route53)
* Hostname (must be unique in domain)
* ARN for SSL cert
* Branch (? can I template this to take the GitLab branch)
* Repo (? shoudl I also template this in case someone forks it?)

Template Creates:

* S3 Bucket
* CloudFront distribution (with custom domain)
* Route 53 record for domain
* CodeBuild project (including roles)
* CodePipeline project (to hook up to any git branch of this repo)


Current Status-
 Code Pipeline (Build) is failing on Develop; the very last step about copying the output;  I just overrode the Develop role to have full S3 access to see if that helps;  I suspect the issue is that there really is no Build artifact,  and that seemed to just work!

## References

* You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### TODO - error messaegs

(node:126) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option
.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:126) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' opti
on.
