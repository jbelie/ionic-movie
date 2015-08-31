angular.module('starter').controller('SearchCtrl', function($scope, $ionicLoading, $stateParams, movieProvider) {
	
		// Init var
		$scope.query = $stateParams.query;
		
        $scope.currentPage = 1;
        $scope.totalPages = 0;

		// Search movies
        $scope.loadMovies = function(){
            movieProvider.search($scope.query, $scope.currentPage).success(function(data){
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
