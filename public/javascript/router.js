app.config(function($stateProvider, $urlRouterProvider) { 

	$urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      views: {
     	'getall': {
     		templateUrl: 'templates/getall.html',
     		controller: 'GetAllController'
     	},
     	'addlink': {
     		templateUrl: 'templates/addlink.html',
     		controller: 'AddLinkController'
     	}
    }
  })      
});