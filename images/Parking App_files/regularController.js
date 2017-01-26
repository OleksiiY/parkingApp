(function(){
  'use strict';
angular.module('myApp')
.controller('regularController',regularController);

regularController.$inject=['$scope','myAppService'];
function regularController($scope,myAppService){
    var typeCustomer='regular'
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

// Добавление чеков в таблицу
  $scope.generateRegularReciept=function(){
    //Подсчет суммы
    var hoursParkIn=$scope.hoursParkInRegular*3600000;
    var minutesParkIn=$scope.minutesParkInRegular*60000;
    var stayHours=$scope.stayHoursRegular*3600000;
    var stayMinutes=$scope.stayMinutesRegular*60000;
    var parkInTime=(stayHours+stayMinutes+hoursParkIn+minutesParkIn)-(hoursParkIn+minutesParkIn);
    var minutesParkInTime=parkInTime/60000;
      $scope.durationParkInRegular=minutesParkInTime;
    var duration=Math.floor(minutesParkInTime/30);
    var price;
  // Подсчет стоимости
        if($scope.selected_condition.type=='dayTime'){
          price=duration*1.5;
          $scope.priceRegular=price;
        }else if($scope.selected_condition.type=='nightTime'){
          price=duration*1;
          $scope.priceRegular=price;
        }
      //Занесение в массив данных по инвойсу
          myAppService.getRegularInvoiceService($scope.durationParkInRegular,$scope.selected_condition.type,$scope.priceRegular);
          $scope.displayReciepts=myAppService.displayRegularInvoiceService();
      //Подсчет Тотал Прайс
          myAppService.getPriceService($scope.priceRegular);
          $scope.totalPriceRegular=myAppService.displayPriceService();



  // $scope.hoursParkInRegular,  $scope.minutesParkInRegular,
  // $scope.stayHoursRegular,$scope.stayMinutesRegular,
  // $scope.selected_condition.type

  }
  //Занесение данных по инфо Человека
  $scope.saveInvoice=function(){
     myAppService.getRegularNameService($scope.invoiceNumberRegular,
                                        $scope.clientRegular,
                                        $scope.emailRegular,
                                        $scope.monthRegular,
                                        typeCustomer,
                                        $scope.totalPriceRegular);
      var a=myAppService.displayRegularNameService();
      console.log('a',a);
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
//Данные о чеках
  // $scope.displayReciepts=myAppService.displayRegularInvoiceService();



}
})();
