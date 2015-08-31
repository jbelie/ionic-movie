angular.module('starter').controller('HomeCtrl', function($scope, $ionicLoading, $location, movieProvider){
		
		// Init var
		$scope.currentPage = 1;
        $scope.totalPages = 0;

		// Load movies
        $scope.loadMovies = function(){
            $scope.loading = true;

			movieProvider.popular($scope.currentPage).success(function(data){
				$ionicLoading.hide();
				$scope.movies = data.results;
				$scope.totalPages = data.total_pages;
			}).error(function(response){
				$ionicLoading.hide();
				alert(response.status_message);
			});
        };
        $scope.loadMovies();

		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
	
		
})	
