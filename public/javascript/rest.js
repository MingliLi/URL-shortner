var app = angular.module('urlShortener', ['ngResource', 'ui.router']);

app.factory('API', ['$resource', function($resource) { return $resource('/link');
}]);

app.controller('GetAllController', ['$scope', 'API', function ($scope, API) {
    API.query().$promise.then(function(links) {
        $scope.links = links;
    });
}]);

app.controller('AddLinkController', function($scope, $state, $stateParams, API) {
  $scope.newLink = new API();

  $scope.addLink = function() {
  	if(!$scope.newLink || $scope.newLink.length < 4) return;
    $scope.newLink.$save(function() {
    });
    $state.reload('home');
  };
})