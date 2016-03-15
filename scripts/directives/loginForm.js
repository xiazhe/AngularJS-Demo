/**
 * directive sample
 */
app.directive('loginForm', function(){
    return {
        scope: {

        },
        templateUrl: '/tempplates/loginForm.html',
        link: function(scope, ele, attrs){

        }
    }
});

app.controller('LoginController', function($scope){
    $scope.login = function(){

    }
});