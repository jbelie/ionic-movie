angular.module('starter').controller('GalleryCtrl', function($scope, $ionicModal, imageProvider) {

	// Init var
	$scope.images = imageProvider.getImages();
	$scope.indexImage = 0;
	$scope.imgLargeSrc = "";
	$scope.imgLargeLegend = "";
	
	// Change image modal
	$scope.changeImage = function(){
		$scope.imgLargeSrc = images[$scope.indexImage]['large'];
		$scope.imgLargeLegend = images[$scope.indexImage]['legend'];			
	}
	
	// Click thumbnail
	$scope.showImage = function(indexImage){
		$scope.indexImage = indexImage;
		$scope.changeImage();
		$scope.modal.show();
	}
	
	// Swipe Gallery
	$scope.swipeImage = function(direction){

		if(direction=="left"){
			$scope.indexImage--;
			if($scope.indexImage<0)
				$scope.indexImage = (images.length-1)
		}else{
			$scope.indexImage++;
			if($scope.indexImage>=images.length)
				$scope.indexImage = 0;
		}
		$scope.changeImage();
	}
	
	// Modal
	$ionicModal.fromTemplateUrl('templates/modal/image-large.html', {
			scope: $scope,
			animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	
});
