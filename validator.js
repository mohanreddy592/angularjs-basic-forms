myapp.directive('customValidator', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            // here ctrl is directive controller which is added in required
            //console.log(ngModelCtrl);
            ngModelCtrl.$validators.customValidator = function(val){
                //console.log(val);
                if(val && val.startsWith('a')) {
                    return false;
                }
                return true;
            }
        }
    }
})