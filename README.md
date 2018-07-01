This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


ran
* npx create-react-app my-apps
* - manually copied all the resources back one level (to root level)
* npm install --save reactstrap boostrap


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
