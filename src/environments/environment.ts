// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
  productionAppUrl: 'http://localhost:4000/api',
  newsUrl: 'http://news.upr.edu.cu/wp-json/wp/v2',
  projectURL: 'http://gespro.upr.edu.cu:5000/graphql',
  syncURL: 'http://sync.upr.edu.cu/api',
  production: false,
  envName: 'Development',
  appName: 'Platform UPR'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
