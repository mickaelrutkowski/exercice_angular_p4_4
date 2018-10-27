var app = angular.module('topshelf', []);
app.controller('MainCtrl', function($scope , $http){
  $http.get("voiture.json").then(function(res){
    $scope.mydata = res.data;

  });
});
