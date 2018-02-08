var itunesApp = angular.module('itunesApp', []);

itunesApp.controller('SearchController', function SearchController($scope, $http) {
	$http.get("https://itunes.apple.com/search?term=goo+goo+dolls&kind=song&wrapperType=track").then(function(response) {
			console.log(response);
			
			// function creating page variables for pagination
			var showData = function() {
				$scope.curPage = 0;
				$scope.pageSize = 5;
				$scope.itunes = response.data;
				$scope.pagesMath = Math.ceil($scope.itunes.results.length / $scope.pageSize);
				//console.log(Math.ceil($scope.itunes.results.length / $scope.pageSize));
				};
			showData();
		});
});

// module for the pagination
angular.module('itunesApp').filter('pagination', function() {
	return function(input, start) {
		start = +start;
		//console.log(start)
		return input.slice(start);
	};
});
