(function(){
  'use strict';
angular.module('myApp')
.controller('premiumController',premiumController);

premiumController.$inject=['$scope','myAppService'];
function premiumController($scope,myAppService){
    var typeCustomer='premium'
    $scope.regularData=false;

$scope.showForm=false;
$scope.condition=[{type:'dayTime'},{type:'nightTime'}];

$scope.saveRegularClient=function(){
  if ($scope.showForm==true){
    $scope.showForm=false;
  }else {
    $scope.showForm=true;
  }

}


  $scope.generateRegularReciept=function(){
    //price
    var hoursParkIn=$scope.hoursParkInRegular*3600000;
    var minutesParkIn=$scope.minutesParkInRegular*60000;
    var stayHours=$scope.stayHoursRegular*3600000;
    var stayMinutes=$scope.stayMinutesRegular*60000;
    var parkInTime=(stayHours+stayMinutes+hoursParkIn+minutesParkIn)-(hoursParkIn+minutesParkIn);
    var minutesParkInTime=parkInTime/60000;
      $scope.durationParkInRegular=minutesParkInTime;
    var duration=Math.floor(minutesParkInTime/30);
    var price;

        if($scope.selected_condition.type=='dayTime'){
          price=duration*1;
          $scope.priceRegular=price;
        }else if($scope.selected_condition.type=='nightTime'){
          price=duration*0.75;
          $scope.priceRegular=price;
        }
      //adding to array in glabal array
          myAppService.getRegularInvoiceService($scope.durationParkInRegular,$scope.selected_condition.type,$scope.priceRegular);
          $scope.displayReciepts=myAppService.displayRegularInvoiceService();
      //Total price
          myAppService.getPriceService($scope.priceRegular);
          $scope.totalPriceRegular=myAppService.displayPriceService()+20;

          if($scope.totalPriceRegular > 300){
            $scope.totalPriceRegular=300;
          }

  }
  //adding Data about Client
  $scope.saveInvoice=function(){
     myAppService.getRegularNameService($scope.invoiceNumberRegular,
                                        $scope.clientRegular,
                                        $scope.emailRegular,
                                        $scope.monthRegular,
                                        typeCustomer,
                                        $scope.totalPriceRegular);

      //Внесение данных о чеках
      var infoClient=myAppService.displayRegularNameService();
      var infoReciepts=myAppService.displayRegularInvoiceService();

        //Занесение в глобальный массив
        myAppService.getGlobalInvoicesService(infoClient,infoReciepts);

        //Вывод Сообщения
        $scope.regularData=true;
        //Очистка массивов
        myAppService.emptyPriceService();
        myAppService.emptyRegularNameService();
        myAppService.emptyRegularInvoiceService();
        //Очистка полей
        $scope.invoiceNumberRegular='';
        $scope.clientRegular='';
        $scope.emailRegular='';
        $scope.monthRegular='';
        $scope.selected_condition='';
        $scope.hoursParkInRegular='';
        $scope.minutesParkInRegular='';
        $scope.stayHoursRegular='';
        $scope.stayMinutesRegular='';

        //Очистка поля таблицы
        $scope.displayReciepts='';
        $scope.totalPriceRegular='';
  }


}
})();
