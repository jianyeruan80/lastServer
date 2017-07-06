angular.module('server.services', [])
.factory('services',function($http,$q,$ionicLoading,$ionicPopup,CONFIG){
 return{
     request:function(method,url,data,params,contentType){
              var deferred = $q.defer();
              var currentUrl=CONFIG.url+url;
              $ionicLoading.show();
              data=data || {};
              params=params || {};
              
              var contentType= contentType || { 'Content-Type': 'application/json; charset=UTF-8'};
              contentType["Authorization"]= "Bearer "+CONFIG.info.accessToken;
              $http({
                      method: method,
                      url: currentUrl,
                      headers: contentType,
                      data:data,
                      params:params,
                  }).success(function(data){
                     if(data.message){
                       $ionicPopup.alert({
                                 title:'<b>Alert Info</b>',
                                 template: '<div style="color:red;font-weight:600;text-align:center;font-size:25px">'+data.message+'</div>' });
                     }else{
                      deferred.resolve(data);
                     }

                    
                  }).error(function(err){
                           deferred.reject();

                                 $ionicPopup.alert({
                                 title:'<b>Alert Info</b>',
                                 template: '<div style="color:red;font-weight:600;text-align:center;font-size:25px">'+err.message+'</div>' });
                             
                         
                    }).finally(function() {
                    $ionicLoading.hide();
        });
            return deferred.promise;     
    }
}
})

/* var currentUrl="admin/perms",method="GET";
       api.request(method,currentUrl,{}).then(function(data){
           $scope.appData.perms=data;
       })*/

/*        var currentUrl="admin/users",method="POST";
      if($scope.appData.user._id){
          currentUrl="admin/users/"+$scope.appData.user._id;
          method="PUT";
        }
       api.request(method,currentUrl,$scope.appData.user).then(function(data){
            $scope.closeUserModal();
            $scope.getUsers();
       })*/