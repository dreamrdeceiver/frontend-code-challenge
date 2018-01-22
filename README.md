# McmaklerTask

This project was generated with Angular CLI version 1.6.5.

## Frameworks Used

1.Bootstrap 4 - CSS / SASS
..*Reason: I prefer Bootstrap over material because it has better css classes and provides better customization and easier implementation. Angular Material is tedious (just my opinion!)
2.Javascript Framework - Angular (Latest)
..*Reason: I prefer Angular because it is a very popular framework, large community for support and I am a very passionate Angular developer.
3.External Dependencies
..*ngx-progressbar - For showing a progress bar till the data loads - ngx-progressbar

## Launching Project

>The task involved consuming public api "https://api.mcmakler.de/v1/advertisements". Angular in development environtment will throw a CROS error. To over come the issue a proxy file had to be attached and the traditional ng serve will not retrieve the data from api.

Run npm install and then npm start to launch project and navigate to http://localhost:4200/

## Additional Info

;-[ running ng test for the api services shows error because of the usage of a third party module (ngx-progress) and I didn't want to waste time on figuring that out.
In advertisements.component.spec.ts it can be seen that a test is written to test http get.
Finally I thank McMakler for providing me this opportunity to prove my skills. Thank you for your consideration!
