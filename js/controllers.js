'use strict';


var App = angular.module("App", ['ui.bootstrap']);

App.controller("FirstCtrl", function($scope, $uibModal) {

    $scope.openanta = function() {
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            // ariaLabelledBy: 'modal-title',
            // ariaDescribedBy: 'modal-body',
            // templateUrl: 'myModalContent.html',
            template: '<h1>HIII</h1>',
            // controller: function() {
            //     alert(123);
            // }
        });

        modalInstance.result.then(function() {
            console.log('yes');
        }, function() {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

});

