angular.module('starter.controllers', []).controller('AppCtrl', function($scope, $ionicPopup, $location) {

	// Init var
	$scope.showSearchBar = false;
	$scope.query = "A";
	
	// Confirm Javascript
	$scope.showConfirm = function() {
	   var confirmPopup = $ionicPopup.confirm({
			title: 'Logout',
			template: 'Are you sure you want to logout?'
	   });
	   confirmPopup.then(function(res) {
			if(res) {
				 $location.path("/");
			}
	   });
	 };
	 
	 
	 // Search
	$scope.search = function(query){
		$scope.showSearchBar = false;
		$location.path("/search/" + query);
	}
	$scope.showSearchAction = function(){
		$scope.showSearchBar = !$scope.showSearchBar;
	}
	


})
