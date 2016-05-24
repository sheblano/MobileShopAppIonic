app.controller('HomeController', ['$scope', function($scope) {
	// mobile shop data
	$scope.mobilesArray = [{
		'brand': 'Nokia',
		'model': '6600',
		'year': '2005',
		'info': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
	}, {
		'brand': 'Samsung',
		'model': 'S6',
		'year': '2014',
		'info': 'bbbbbbbbbb'
	}, {
		'brand': 'Apple',
		'model': 'iPhone4',
		'year': '2006',
		'info': 'cccccccccc'
	}, {
		'brand': 'Sony',
		'model': 'Z2',
		'year': '2013',
		'info': 'ddddddddddd'
	}];

	$scope.itemIsChosen = false;
	$scope.selectedRow = null;
	$scope.selectItem = function(chosenMobile, index) {
		$scope.selectedMobile = chosenMobile;
		$scope.selectedRow = index;
		$scope.itemIsChosen = true;
	}
	console.log($scope.mobilesArray);
}])