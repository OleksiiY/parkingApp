(function(){
  'use strict';
angular.module('myApp')
.controller('allInvoicesController',allInvoicesController);

allInvoicesController.$inject=['$scope','myAppService'];
function allInvoicesController($scope,myAppService){
    $scope.displayInvoices=[];

    $scope.invoices=myAppService.displayGlobalInvoicesService();
    $scope.remove=function(index){
      myAppService.deleteGlobalInvoicesService(index);
    }
    $scope.view=function(index){
      $scope.viewItem=myAppService.displayGlobalInvoicesService();
        console.log("$scope.viewItem[index].clients",$scope.viewItem[index].clients);
        myAppService.getIndexService(index);        
    }
}
})();
