(function(){
  'use strict';
angular.module('myApp')
.controller('viewController',viewController);

viewController.$inject=['$scope','myAppService'];
function viewController($scope,myAppService){
  var index=myAppService.displayIndexService();
    $scope.displayItem=myAppService.displayGlobalInvoicesService();
    $scope.display=$scope.displayItem[index].clients;
    console.log('$scope.displayItem[index].clients',$scope.displayItem[index].clients);
    console.log('$scope.displayItem[index].reciepts',$scope.displayItem[index].reciepts);
    console.log('$scope.displayItem[index]',$scope.displayItem[index]);
    console.log('$scope.displayItem',$scope.displayItem);
      // console.log('$scope.display',$scope.display);
    $scope.displayReciepts=$scope.displayItem[index].reciepts;

    console.log('index',index);
// $scope.viewItem[index].clients
}
})();
