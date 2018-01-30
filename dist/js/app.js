var itunesApp = angular.module('itunesApp', []);

itunesApp.controller('SearchController', function SearchController($scope, $http) {
	$http.get("https://itunes.apple.com/search?term=goo+goo+dolls&kind=song&wrapperType=track").then(function(response) {
			console.log(response);
			$scope.itunes = response.data;
		});
});