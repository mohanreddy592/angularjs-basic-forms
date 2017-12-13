myapp.directive('customValidator', function(){
    return {
        restrict: 'A',
        require: 'ngModel', // you can request multiple directives in array ['d1', 'd2']
        link: function(scope, element, attrs, ngModelCtrl) {
            // here ctrl is directive controller which is added in required
            //console.log(ngModelCtrl);
            ngModelCtrl.$validators.isNameValid = function(val){
                //console.log(val);
                if(val && (val.startsWith('a')||val.startsWith('A')))    {
                    return false;
                }
                return true;
            }
        }
    }
})