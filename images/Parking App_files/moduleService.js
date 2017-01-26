(function(){
  'use strict';
angular.module('myApp')
.service('myAppService',myAppService);
function myAppService(){
//Добавление имени клиента регуляр
var regularNameInfo=[];
var regularInvoices=[];
var allInvoices=[];
var price=0;
  this.getRegularNameService=function(invoiceNum,client,email,month,type,total){
    var len=regularNameInfo.length;
    regularNameInfo[len]={
                invoiceNum:invoiceNum,
                client:client,
                email:email,
                month:month,
                type:type,
                total:total
              }
    return regularNameInfo;
  }
  this.displayRegularNameService=function(){
    return regularNameInfo;
  }
  this.emptyRegularNameService=function(){
    regularNameInfo=[];
    return regularNameInfo;
  }
//Добавление квитанций по клиенту
this.getRegularInvoiceService=function(duration,dayTime,price){
  var len=regularInvoices.length;
      regularInvoices[len]={
                      duration:duration,
                      dayTime:dayTime,
                      price:price
                    }
        return regularInvoices;
}
this.displayRegularInvoiceService=function(){
  return regularInvoices;
}
this.emptyRegularInvoiceService=function(){
    regularInvoices=[];
  return regularInvoices;
}
// Подсчет тотал прайс
  this.getPriceService=function(priceR){
    price=price+priceR;
    return price;
  }

  this.displayPriceService=function(){
    return price;
  }
  this.emptyPriceService=function(){
    price=0;
    return price;
  }
//Занесение данных в глобальный массив
  this.getGlobalInvoicesService=function(client,reciepts){
    var len = allInvoices.length;
      allInvoices[len]={
                      clients:client,
                      reciepts:reciepts
                      }
      return allInvoices;
  }
  this.displayGlobalInvoicesService=function(){
    return allInvoices;
  }
  //Удаление с глобального массива
  this.deleteGlobalInvoicesService=function(index){
      allInvoices.splice(index,1);
    return allInvoices;
  }
  //Получение индекса
  var index;
  this.getIndexService=function(num){
      index=num;
    return index;
  }
  this.displayIndexService=function(){
    return index;
  }
  this.emptyIndexService=function(){
    index=0;
    return index;
  }
}



})();
