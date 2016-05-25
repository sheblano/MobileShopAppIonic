app.controller('AddController', ['$scope', function($scope) {
	// intialize the default value for brand
	$scope.chosenBrand = 'Samsung';
	// intialize the default value for memory
	$scope.chosenMemory = '16GB';
	$scope.mobile = {};

	$scope.addNewItem = function() {
		console.log($scope.mobile);
		localStorage.setItem('addedItem', JSON.stringify($scope.mobile));
	}

}])