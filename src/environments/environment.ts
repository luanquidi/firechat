// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC-kCUNo-QC3t1pdyot1Rr-nPBCv9YFDsM',
    authDomain: 'firechat-laq-angular.firebaseapp.com',
    databaseURL: 'https://firechat-laq-angular.firebaseio.com',
    projectId: 'firechat-laq-angular',
    storageBucket: 'firechat-laq-angular.appspot.com',
    messagingSenderId: '529193729415',
    appId: '1:529193729415:web:0154dd32f6d5bda2f4a722',
  },
  isForbbiden: [
    'ccqjvAaGwYds9sTeaNgonwKLREU2',
    'foyWibUbDyU2ekztUY1RXlfXaCf2'
  ],
  backgroundUsers: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
