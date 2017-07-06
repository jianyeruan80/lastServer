  angular.module('server.controllers', [])
      .filter('special', function() {
          return function(data, scope, customerxx) {
              return data.length;
          }
      })
      .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $ionicModal, $location, $ionicPopup, services, CONFIG) {
          $scope.returnData = {}; //
          $scope.config = {};
          $scope.userData = {};
          $scope.userData.users_doc={};
          $scope.permData = {};
          $scope.loginData = {};
          $scope.userDataPwd = "";
          $scope.title = "Permissions";
          $scope.config.isChedkedAdmin = "";
          $scope.chainStore = {};
          $scope.chainStores = [];

          $scope.appData = {};
          $scope.appData.seqs = [];
          $scope.appData.seq = {};
           
           $scope.appData.settings = [];
          $scope.appData.set = {};   
            
          $ionicModal.fromTemplateUrl('templates/permModal.html', {
              scope: $scope,
              animation: 'slide-in-up'
          }).then(function(modal) {
              $scope.permModal = modal;
          });
          $scope.openPermModal = function() {
              $scope.permModal.show();
          };
          $scope.closePermModal = function() {
              $scope.permModal.hide();
          };
          $ionicModal.fromTemplateUrl('templates/settingModal.html', {
              scope: $scope,
              animation: 'slide-in-up'
          }).then(function(modal) {
              $scope.settingModal = modal;
          });
          $scope.openSetModal = function() {
              $scope.appData.set={};
              $scope.appData.set.values=[];
              $scope.appData.set.values[0]={"type":"","name":"","value":""};
              
              $scope.appData.set.merchantId="laundry";
              $scope.settingModal.show();
          };
          $scope.closeSetModal = function() {
              $scope.settingModal.hide();
          };

          $ionicModal.fromTemplateUrl('templates/userModal.html', {
              scope: $scope,
              animation: 'slide-in-up' /*backdropClickToClose: true*/
          }).then(function(modal) {
              $scope.userModal = modal;
          });
          $scope.openUserModal = function() {
              $scope.userModal.show();
              $scope.userData = {};
              $scope.userData.status ="true";
              $scope.userDataPwd = "";
          };
          $scope.closeUserModal = function() {
              $scope.userModal.hide();
          };
          $ionicModal.fromTemplateUrl('templates/chainStoreModal.html', {
              scope: $scope,
              animation: 'slide-in-up'
          }).then(function(modal) {
              $scope.chainModal = modal;
          });
          $scope.openChainModal = function() {
              $scope.chainModal.show();
          };
          $scope.closeChainModal = function() {
              $scope.chainModal.hide();
          };
          $ionicModal.fromTemplateUrl('templates/modalSeq.html', {
              scope: $scope,
              animation: 'slide-in-up'
          }).then(function(modal) {
              $scope.modalSeq = modal;
          });
          $scope.openSeq = function(index) {
              $scope.appData.seq = {};
              if (index >= 0) {
                  $scope.appData.seq = $scope.appData.seqs[index];
              }
              $scope.modalSeq.show();
          };
          $scope.closeSeq = function() {
              $scope.modalSeq.hide();
          };
          $scope.exit = function() {
              CONFIG.info = {};
              $location.path("/login");
          }

          $scope.openModal = function(index) {

              switch ($scope.title) {
                  case "Permissions":
                      $scope.permData = {};
                      $scope.permData.status = true;
                      $scope.openPermModal();
                      break;
                  case "Chain":
                      $scope.chainStore = {};
                     if (index >= 0) $scope.chainStore = angular.copy($scope.chainStores[index]);
                      $scope.openChainModal();
                      break;
                 case "Setting":
                      $scope.openSetModal();
                      break;      
                  case "Seq":
                      $scope.openSeq();
                      break;
              }
          }



          $scope.reflesh = function(data, array, sign) {
              if (!!sign) {
                  for (var i = 0; i < array.length; i++) {
                      if (sign == array[i]._id) {
                          array.splice(i, 1);
                          array.splice(i, 0, data);
                          break;
                      }
                  }
              } else {
                  $scope.returnData.adminList.unshift(data);
              }
          }
          $scope.auth = function() {
              console.log($scope.returnData.permissionsList)
              var authData = {};
              var currentUrl = "users/" + $scope.config.isChedkedAdmin + "/perms";
              authData.permissions = [];
              angular.forEach($scope.returnData.permissionsList, function(value, key) {
                  angular.forEach(value.perms, function(v, k) {
                      if (v.key == v.value) {
                          authData.permissions.push(v.value);
                      }
                  })
              })

              services.request("PUT", currentUrl, authData).then(function(data) {
                  $scope.reflesh(data, $scope.returnData.adminList, $scope.config.isChedkedAdmin);
              })




          }

          $scope.all = function(e) {

              var _id = e.target.dataset.permground;

              angular.forEach($scope.returnData.permissionsList, function(value, key) {
                  if (value._id == _id) {
                      angular.forEach(value.perms, function(v, k) {
                          if (document.getElementById("allCheckbox" + _id).checked) {
                              v.key = angular.copy(v.value);
                          } else {
                              v.key = "";
                          }


                      })
                  }

              })

          }
          $scope.goToLink = function(title) {
              $scope.title = title;
          }

          $scope.getPerms = function() {
              var currentUrl = "perms";
              services.request("GET", currentUrl).then(function(data) {
                  $scope.returnData.permissionsList = data;
                  if (!!$scope.config.isChedkedAdmin) {
                      $scope.getUserPerm();
                  }
              })
          }



          $scope.getUserPerm = function(e) {
             $scope.stop(e);
              var userPermStr = "";
              for (var i = 0; i < $scope.returnData.adminList.length; i++) {
                  if ($scope.returnData.adminList[i]._id == $scope.config.isChedkedAdmin) {
                      userPermStr = $scope.returnData.adminList[i].permissions.toString();
                      break;
                  }
              }
              angular.forEach($scope.returnData.permissionsList, function(value, key) {
                  if (!!document.getElementById("allCheckbox" + value._id)) {
                      document.getElementById("allCheckbox" + value._id).checked = false;
                  }

                  angular.forEach(value.perms, function(v, k) {
                      if (userPermStr.indexOf(v.value) >= 0) {
                          v.key = angular.copy(v.value);
                      } else {

                          v.key = "";

                      }
                  })
              })

          }
          $scope.stop = function(e) {
              stopPropagation(e);
          }
          $scope.getPerm = function(e, index) {
              var _id = e.target.dataset.perm;
              $scope.openPermModal();
              var currentUrl = "perms/" + _id;

              services.request("GET", currentUrl).then(function(data) {
                  $scope.permData = data;
              })



          }
          $scope.getSeqs = function() {


              var currentUrl = "seqs";


              services.request("GET", currentUrl).then(function(data) {
                  $scope.appData.seqs = data;
              })


          }
          $scope.getSeqs();   

          $scope.seqUpdate = function() {

              var currentUrl = "seqs";

              var method = "POST";
              if ($scope.appData.seq._id) {
                  var currentUrl = "seqs/" + $scope.appData.seq._id;
                  method = "PUT";
              }
              services.request(method, currentUrl, $scope.appData.seq).then(function(data) {
                  $scope.closeSeq();
                  $scope.getSeqs();
              })

          }
          $scope.add=function(){
             $scope.appData.set.values.push({"type":"","name":"","value":""});
          }
          $scope.settingList=function(){
               var currentUrl = "settings/merchant/id?merchantId=laundry";

              services.request("GET", currentUrl).then(function(data) {

                  $scope.appData.sets= data;

              })
          }
          $scope.openSetting=function(item){
            $scope.openSetModal();

            $scope.appData.set=JSON.parse(JSON.stringify(item));
             for(var i=0;i<$scope.appData.set.values.length;i++){
                 if($scope.appData.set.values[i].type!="input"){
                  $scope.appData.set.values[i].value=JSON.stringify($scope.appData.set.values[i].value);
                   }
                }
          }
          $scope.settingSave=function(){
              //var setting=JSON.parse(JSON.stringify($scope.appData.set))
              var currentUrl = "settings";
              var method = "POST";
              if (!!$scope.appData.set._id) {
                  var currentUrl = "settings/" + $scope.appData.set._id;
                  method = "PUT";
              }
              try{
             
                for(var i=0;i<$scope.appData.set.values.length;i++){
                   if($scope.appData.set.values[i].type!="input"){
                    $scope.appData.set.values[i].value=JSON.parse($scope.appData.set.values[i].value.replace(/([\\])/g, ''));
                    //$scope.appData.set.values[i].value= eval("(" + $scope.appData.set.values[i].value + ")");
                }
                   
                }
              //$scope.appData.set.values=JSON.parse('"' + $scope.appData.set.values.replace(/(["\\])/g, '\\$1') + '"');
              console.log("=====111========");
             // console.log($scope.appData.set.values.name)
              console.log("=====33333========");
             }catch(ex){

               console.log(ex);
             }
              services.request(method, currentUrl,  $scope.appData.set).then(function(data) {
                $scope.settingList();
                 $scope.closeSetModal();
              })
          }

          $scope.permUpdate = function() {
              var currentUrl = "perms";
              var method = "POST";
              if (!!$scope.permData._id) {
                  var currentUrl = "perms/" + $scope.permData._id;
                  method = "PUT";
              }

              services.request(method, currentUrl, $scope.permData).then(function(data) {
                  $scope.getPerms();
                  $scope.closePermModal();
              })
          };

          $scope.getUsers = function() {
              var currentUrl = "users";

              services.request("GET", currentUrl, {}, {
                  "type": "ADMIN"
              }).then(function(data) {
                 console.log("xxxxxxxxxxxxxxxxxxxx")
                 console.log(data)
                  console.log("xxxxxxxxxxxxxxxxxxxx")
                  $scope.returnData.adminList = data;

              })
          }

          $scope.getUsers();
          $scope.getPerms()
          $scope.getUser = function(index) {
              $scope.userData = angular.copy($scope.returnData.adminList[index]);
              $scope.userDataPwd = $scope.userData.password;
              $scope.userModal.show();
          }

          $scope.userUpdate = function() {

              var currentUrl = "users";
              var method = "POST";
              if (!!$scope.userData._id) {
                  var currentUrl = "users/" + $scope.userData._id;
                  method = "PUT";
              }

              $scope.userData.type = "ADMIN";

              
              services.request(method, currentUrl, $scope.userData).then(function(data) {
                  $scope.closeUserModal(); $scope.getUsers();
                  //$scope.reflesh(data, $scope.returnData.adminList, $scope.userData._id);

              })


          }



          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('templates/login.html', {
              scope: $scope
          }).then(function(modal) {
              $scope.modal = modal;
          });

          // Triggered in the login modal to close it
          $scope.closeLogin = function() {
              $scope.modal.hide();
          };

          // Open the login modal
          $scope.login = function() {
              $scope.modal.show();
          };


          $scope.getchainStore = function() {

          }
          $scope.getChainStores = function() {
              var currentUrl = "chainStores";

              services.request("GET", currentUrl, {}, $scope.chainStore).then(function(data) {
                  $scope.chainStores = data;


              })
          }
          $scope.settingList();
          $scope.chainStoreUpdate = function() {
              var currentUrl = "chainStores";
              var method = "POST";
              if (!!$scope.chainStore._id) {
                  var currentUrl = "chainStores/" + $scope.chainStore._id;
                  method = "PUT";
              }
              services.request(method, currentUrl, $scope.chainStore).then(function(data) {
                  $scope.getChainStores();
                  $scope.closeChainModal();


              })

          }
         // $scope.getChainStores();
      })
      .controller('LogsCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, CONFIG) {
          alert("OK")
      })
      .controller('ManagerCtrl', function($scope, $ionicModal, $http, CONFIG) {
          $scope.checkSetting = function() {
              $scope.openCheckModal();
          }

      })
      .controller('LoginCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, CONFIG) {
         CONFIG.url=window.location.origin+"/superadmin/";
          $scope.loginData = {};
          $scope.loginData.admin = "admin";
          $scope.loginData.password = "admin";
          var currentUrl = CONFIG.url + "login";
         $scope.doLogin = function() {
              $scope.loginData.type = "SUPER";
              $http({
                  method: "POST",
                  url: currentUrl,
                  headers: {
                      'Content-Type': 'application/json; charset=UTF-8'
                  },
                  data: $scope.loginData
              }).success(function(data) {
                 if(data.message){
                   $scope.error(data.message);
                 }else{
                   CONFIG.info = data; 
                  $location.path("app/manager");
                 }
                 
                 
              }).error(function(err) {
                  $scope.error(err.message);
              });


          }
          $scope.error = function(message, title) {
              var title = title || 'Alert Info';
              $ionicPopup.alert({
                  title: title,
                  template: '<font color="red">' + message + '</font>'
              });

          }
      })
      .controller('PlaylistCtrl', function($scope, $stateParams) {});

  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  function base64encode(str) {
      var out, i, len;
      var c1, c2, c3;
      len = str.length;
      i = 0;
      out = "";

      while (i < len) {
          c1 = str.charCodeAt(i++) & 0xff;

          if (i == len) {
              out += base64EncodeChars.charAt(c1 >> 2);
              out += base64EncodeChars.charAt((c1 & 0x3) << 4);
              out += "==";
              break
          }

          c2 = str.charCodeAt(i++);

          if (i == len) {
              out += base64EncodeChars.charAt(c1 >> 2);
              out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
              out += base64EncodeChars.charAt((c2 & 0xF) << 2);
              out += "=";
              break
          }

          c3 = str.charCodeAt(i++);
          out += base64EncodeChars.charAt(c1 >> 2);
          out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
          out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
          out += base64EncodeChars.charAt(c3 & 0x3F)
      }

      return out
  }

  function base64decode(str) {
      var c1, c2, c3, c4;
      var i, len, out;
      len = str.length;
      i = 0;
      out = "";

      while (i < len) {
          do {
              c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
          } while (i < len && c1 == -1);

          if (c1 == -1)
              break;

          do {
              c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
          } while (i < len && c2 == -1);

          if (c2 == -1)
              break;

          out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

          do {
              c3 = str.charCodeAt(i++) & 0xff;

              if (c3 == 61)
                  return out;

              c3 = base64DecodeChars[c3]
          } while (i < len && c3 == -1);

          if (c3 == -1)
              break;

          out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

          do {
              c4 = str.charCodeAt(i++) & 0xff;

              if (c4 == 61)
                  return out;

              c4 = base64DecodeChars[c4]
          } while (i < len && c4 == -1);

          if (c4 == -1)
              break;

          out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
      }

      return out
  }

  function stopDefault(e) {
      if (e && e.preventDefault)
          e.preventDefault();
      else
          window.event.returnValue = false;

      return false;
  }

  function stopPropagation(e) {
      var e = (e) ? e : window.event;
      if (window.event) {
          e.cancelBubble = true;
      } else {
          e.stopPropagation();
      }
  }