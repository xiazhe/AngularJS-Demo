app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl : '/templates/home.html',
        controller: 'MainController'
    }).when('/login',{
        templateUrl: '/templates/login.html'
    }).otherwise({ redirectTo: '/' });
}]);