This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


ran
* npx create-react-app my-apps
* >>>  manually copied all the resources back one level (to root level)
* npm install --save reactstrap boostrap


## stage

when the code is pushed to the gitmaster it invokes a trigger that builds
it all out the the mainstage docker volume where it can be accessed at
[stage](http://mainstage.denvercliffs.com:8000/).



## Deploy





right now, run npm build; then a s3 sync to the targets
 * s3://cliffanalysis.com/
 * s3://cliffconsulting.com/

aws s3 sync build s3://cliffanalysis.com/

Target in the future we could pull from the stage view, or make a tag on stage view and use that tag for the production build.


Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
