
angular.module('server', ['ionic', 'server.services','server.controllers'])
.constant('CONFIG', {'url':'http://127.0.0.1:3200/superadmin/','info':{},'header':{}})
//.constant('CONFIG', {'url':'http://192.155.89.91:3100/superadmin/','info':{},'header':{}})
.run(function($ionicPlatform,$rootScope,CONFIG,$location) {
    $rootScope.$on('$locationChangeStart', function() {
            //console.log("$locationChangeStart", arguments);
            if(!Object.keys(CONFIG.info).length) $location.path("/login");
  });
  
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
 .state('app.manager', {
      url: '/manager',
      views: {
        'menuContent': {
          templateUrl: 'templates/manager.html',
          controller: 'ManagerCtrl'
        }
      }
    })
/*    .state('logs', {
    url: '/logs',
        templateUrl: 'templates/logs.html',
        controller: 'LogsCtrl'
   
  })*/
  .state('login', {
    url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
   
  });
  
  $urlRouterProvider.otherwise('/login');
});
