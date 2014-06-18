'use strict';

/**
 * @ngdoc service
 * @name emploiDuTempsApp.AuthenticationService
 * @description
 * # AuthenticationService
 * Service in the emploiDuTempsApp.
 */
angular.module('emploiDuTempsApp')
    .service('AuthenticationService', function AuthenticationService() {
        // AngularJS will instantiate a singleton by calling "new" on this function

        // load the library
        var SimpleCASClient = require('simple-cas-client').SimpleCASClient;

        // create the new client
        var cas = new SimpleCASClient();
        cas.configure({
            session_space: 'cas',
            client: {
                protocol: 'http',
                host: '127.0.0.1',
                port: 3000
            },
            server: {
                protocol: 'https',
                host: 'cas.utt.fr',
                port: '443',
                context: '/cas'
            }
        });

        /// if we are already authenticated
        /// cas info should already be in our session
        cas.on('success', function () {
            /// user has passed authentication at some point
            res.redirect('/validatedUser');
        });

        /// do something with the incoming identity
        cas.on('validation', function () {
            /// cas response now lives in the session
            var casData = req.session[cas.config.session_space];
            somehowFindLocalUserFor(casData.user, function (localUser) {
                localUser.somehowStoreCasInfo(casData.attributes);
            });
        });

        /// handle failed validation
        cas.on('failure', function (err) {
            logger.error('validation failure: ' + err);
            res.redirect('/unauthorized');
        });

        /// handle error
        cas.on('error', function (err) {
            logger.error('validation error: ' + err);
            res.redirect('/tryagain');
        });

        /// trigger the authentication check and redirect process
        cas.forceAuthentication(req, res);
    });
