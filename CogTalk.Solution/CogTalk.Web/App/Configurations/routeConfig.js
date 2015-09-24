(function () {
    'use strict';

    var app = angular.module('modMain');

    //Configure routes
    app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'App/default.html'
        }).        
        otherwise({
            redirectTo: '/'
        });
    }]);
})();