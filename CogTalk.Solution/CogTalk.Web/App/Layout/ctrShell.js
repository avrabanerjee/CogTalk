(function () {
    'use strict';

    //Define the view-controller 'shell' in module 'modMain'
    var ctrId = 'ctrShell';
    angular.module('modMain').controller(ctrId, ['$scope', '$rootScope', shell]);

    function shell($scope, $rootScope) {
        console.log("CogTalk is now loaded");
    }
})();