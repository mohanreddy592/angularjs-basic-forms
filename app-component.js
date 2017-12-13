var myapp = angular.module('myapp', []);

myapp.component('app', {
    templateUrl: 'app-component.html',
    controller: 'MyAppCtrl'        
});

myapp.controller('MyAppCtrl', function(){
    this.username;
    this.password;
    this.onSubmit = function(myform) {
        if(myform.$valid) {
            console.log('form is valid.. submitting request.')
            console.log("details are: " + this.username + " "+this.password);
        } else {
            console.log("form is invalid. please ");
        }        
    }
});
