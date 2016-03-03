/**
 * Created by Administrator on 2015/3/24.
 */
GLGApp.directive('stopEvent', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr){
            element.bind(attr.stopEvent, function(e){
                e.stopPropagation();
            });
        }
    }
})