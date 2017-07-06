var mainPageApp = angular.module('reportApp', ['ngTable'])


$(function() {

    var start = moment().subtract(1, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        alwaysShowCalendars: true,
        timePicker: true,
        timePicker24Hour: true,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);
    
});

mainPageApp.controller('IndexPageController', ['$scope', '$http', '$filter', 'ngTableParams', function($scope, $http, $filter, ngTableParams) {
    $scope.api="http://127.0.0.1:3200/api"; 
    $scope.init = function() {
       	$scope.fetchStaffList();
        $scope.generateSaleSummary();
    };

    $scope.generateSaleSummary = function() {
        tableData = [];
        $scope.tableParams = new ngTableParams({page: 1, count: 15}, {dataset: tableData});
        var filter = {
            startTime : $('#reportrange').data('daterangepicker')!= null ? moment($('#reportrange').data('daterangepicker').startDate._d).format('YYYY-MM-DD') : moment().subtract(1, 'days').format('YYYY-MM-DD'),
            endTime : $('#reportrange').data('daterangepicker')!= null ? moment($('#reportrange').data('daterangepicker').endDate._d).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'),
            staffId : $('#staff-list').val()
        }

        var headers = {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + getURLParameter('token')
        }

        var reportSummaryData = $http.post($scope.api+"/orders/report", filter);

        reportSummaryData.success(function(data, status, headers, config) {
            $scope.grandTotal = data.grandTotal != null ? $filter('currency')(data.grandTotal) : $filter('currency')(0);
            $scope.subTotal = data.subTotal != null ? $filter('currency')(data.subTotal) : $filter('currency')(0);
            $scope.taxTotal = data.taxTotal != null ? $filter('currency')(data.taxTotal) : $filter('currency')(0);
            $scope.numOfOrder = data.ofOrder != null ? data.ofOrder : 0
            $scope.tipTotal = data.tipTotal != null ? $filter('currency')(data.tipTotal) : $filter('currency')(0);
            $scope.chargeTotal = data.chargeTotal != null ? $filter('currency')(data.chargeTotal) : $filter('currency')(0);
            $scope.discountTotal = data.discountTotal != null ? $filter('currency')(data.discountTotal) : $filter('currency')(0);
            $scope.numOfVoidOrder = data.ofVoid != null ? data.ofVoid : 0;
            $scope.voidTotal = data.voidGrandTotal != null ? $filter('currency')(data.voidGrandTotal) : $filter('currency')(0);
            $scope.laundry = data.Laundry != null ? $filter('currency')(data.Laundry) : $filter('currency')(0);
            $scope.merchandise = data.Merchandise != null ? $filter('currency')(data.Merchandise) : $filter('currency')(0);
            $scope.cash = data.Cash != null ? $filter('currency')(data.Cash) : $filter('currency')(0);
            $scope.credit = data.Credit != null ? $filter('currency')(data.Credit) : $filter('currency')(0);
        });

        reportSummaryData.error(function(data, status, headers, config){
            console.log("Data:" + data + " " + "Status:" + status);
        });
    }

    $scope.generateSummaryList = function(value) {
        $scope.showNum = true;
        $scope.showType = false;
        $scope.showStatu = false;
        $scope.showDiscount = false;
        $scope.showCharge = false;
        $scope.showTip = false;
        $scope.showTax = false;
        $scope.showSubtotal = false;
        $scope.showTotal = false;
        if (value == 'GRAND_TOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'SUBTOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showSubtotal = true;
        } else if (value == 'TAXTOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTax = true;
        } else if (value == 'OF_ORDER') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'TIP_TOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTip = true;
        } else if (value == 'CHARGE_TOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showCharge = true;
        } else if (value == 'DISCOUNT_TOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showDiscount = true;
        } else if (value == 'OF_VOID') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'VOID_GRAND_TOTAL') {
            $scope.showType = true;
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'LAUNDRY') {
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'MERCHANDISE') {
            $scope.showStatu = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'CASH') {
            $scope.showType = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        } else if (value == 'CREDIT') {
            $scope.showType = true;
            $scope.showTax = true;
            $scope.showTotal = true;
        }
        var filter= {
            startTime : moment($('#reportrange').data('daterangepicker').startDate._d).format('YYYY-MM-DD'),
            endTime : moment($('#reportrange').data('daterangepicker').endDate._d).format('YYYY-MM-DD'),
            detail : value,
            staffId : $('#staff-list').val()
        }
        console.log("---------AA-----------");
         console.log(getURLParameter('token'));
console.log("----------BB----------");
        var headers = {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + getURLParameter('token')
        }
        var reportSummaryData = $http.post($scope.api+"/orders/report", filter, headers);

        reportSummaryData.success(function(data, status, headers, config) {
            $scope.tableParams = new ngTableParams({page: 1, count: 15}, {dataset: data});
            console.log($scope.tableParams)
            console.log(data)
        });

        reportSummaryData.error(function(data, status, headers, config){
            console.log("Data:" + data + " " + "Status:" + status);
        });
    }

    $scope.fetchStaffList = function() {
        var headers = {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + getURLParameter('token')
        }

        var staffListData = $http.get($scope.api+"/admin/users", {headers});


        staffListData.success(function(data, status, headers, config){
            $scope.staffList = data;
            setTimeout(function() {$('#staff-list').selectpicker('refresh');}, 50);
        })

        staffListData.error(function(data, status, headers, config){
            console.log("Data:" + data + " " + "Status:" + status);
        })
    }

    $scope.exitPage = function() {

        jsFunctions.exit('');
    }

    $scope.init();
}]);
