app.config(function($stateProvider, $urlRouterProvider) {
	
  $stateProvider
    .state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	 })
    .state('gallery', {
		url: '/gallery',
		templateUrl: 'templates/gallery.html',
		controller : 'GalleryCtrl'
	 })
    .state('about', {
		url: '/about',
		templateUrl: 'templates/about.html'
	 })
    .state('settings', {
		url: '/settings',
		templateUrl: 'templates/settings.html'
	 })
	 .state('movie', {
		url: '/movie/:id',
		templateUrl: 'templates/movie.html',
		controller : 'MovieCtrl'
	 })
	 .state('search', {
		url: '/search/:query',
		templateUrl: 'templates/home.html',
		controller : 'SearchCtrl'
	 })
	 ;
  
  
	$urlRouterProvider.otherwise('/');
});
