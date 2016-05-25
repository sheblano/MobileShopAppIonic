app.controller('AddController', ['$scope','$state', function($scope, $state) {
	// intialize the default value for brand
	$scope.chosenBrand = 'Samsung';
	// intialize the default value for memory
	$scope.chosenMemory = '16GB';
	$scope.mobile = {};
	// intialize the default value for mobile options
	$scope.mobile.options = {
		dual: false,
		nfc: false,
		fg: false
	};
	/**
	 * add new item to previous mobiles data in the shop
	 */
	$scope.addNewItem = function() {
		console.log($scope.mobile);
		var mobilesData = [];
		//get the cached data of mobiles
		mobilesData = JSON.parse(localStorage.getItem('data'));
		//add the new item to the cached data and save it again after adding it
		mobilesData.push($scope.mobile);
		localStorage.setItem('data', JSON.stringify(mobilesData));
		$state.go('home');
	}

}])