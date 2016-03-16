app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise("/login");

    var mainPath = 'templates/main/';

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'wrapper': {
                    templateUrl: 'templates/auth/login.html',
                    controller: 'loginController'
                }
            }
        })
        .state('main', {
            url: '/main',
            views: {
                'wrapper': {
                    templateUrl: mainPath + 'main.html'
                }
            }
        })
        .state('main.dashboard', {
            parent: 'main',
            url: '/dashboard',
            views: {
                'main':{
                    templateUrl: mainPath + 'dashboard.html'
                }
            }
        });
}]);