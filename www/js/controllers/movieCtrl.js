angular.module('starter').controller('MovieCtrl', function($scope, $ionicLoading, $stateParams, movieProvider) {
		var id = $stateParams.id;

		// API Request to show specific movie
		movieProvider.details(id).success(function(data){
			$ionicLoading.hide();
			$scope.movie = data;
		}).error(function(response){
			$ionicLoading.hide();
			alert(response.status_message);
		});
		
		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

})
