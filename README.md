# Cliff Consulting Web Page

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Build
ran
* `npx create-react-app my-apps`
* - manually copied all the resources back one level (to root level)
* `npm install --save reactstrap boostrap`

*Release Notes*
- created develop branch in github;  **mcliff** AWS account has a deploy pipeline set up, that will push to cliff analysis S3 bucket.

Well it appears for each branch I want to auto-build I need a seperate pipeline set up in *CodePipeline*, I modified the current to use the new **develop** branch.

TODO - need to address security warning with node versions; run update and republish everything.

TODO -  add to codebuild a notification to the SNS when it fails (or succeeds)

## Set up Build Environment

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


# Old Environment Notes

## stage

when the code is pushed to the gitmaster it invokes a trigger that builds
it all out the the mainstage docker volume where it can be accessed at
[stage](http://mainstage.denvercliffs.com:8000/).

Whenever the code commit happens to the public github cliffconsulting.com AWS Code Pipeline has a hook to launch a build.  This results in the code being deployed to http://cliffanalysis.com.

## Deploy

We need to sync **cliffanalysis.com** to **cliffconsulting.com** bucket to deploy to production.


aws s3 sync s3://cliffanalysis.com/ s3://cliffconsulting.com/

Target in the future we could pull from the stage view, or make a tag on stage view and use that tag for the production build.


Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
