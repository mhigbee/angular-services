/**
 * Created by matthigbee on 6/2/16.
 */
angular.module('avengersApp').controller('MainCtrl', function ($scope, mainService){

   $scope.heroes = mainService.getAvengers();


});


