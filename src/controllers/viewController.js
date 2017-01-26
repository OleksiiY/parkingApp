(function(){
  'use strict';
angular.module('myApp')
.controller('viewController',viewController);

viewController.$inject=['$scope','myAppService'];
function viewController($scope,myAppService){
  var index=myAppService.displayIndexService();
    $scope.displayItem=myAppService.displayGlobalInvoicesService();
    $scope.display=$scope.displayItem[index].clients;
    $scope.displayReciepts=$scope.displayItem[index].reciepts;

}
})();
