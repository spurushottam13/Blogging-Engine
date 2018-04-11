console.log("hello");
var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope,$http){
    $http.get("data.html")
    .success(function(response) {
        $scope.names = response.Name;
        console.log(response);
    });
})

