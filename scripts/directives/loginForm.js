/**
 * directive sample
 */
GLGApp.directive('loginForm', function(){
    return {
        scope: {

        },
        templateUrl: '/tempplates/loginForm.html',
        link: function(scope, ele, attrs){

        }
    }
});

GLGApp.controller('LoginController', function($scope){
    $scope.login = function(){

    }
});