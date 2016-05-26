app.controller('AddController', ['$scope', '$state', function($scope, $state) {

	$scope.mobile = {};
	// intialize the default value for mobile brand
	$scope.mobile.brand = 'Samsung';
	// intialize the default value for mobile memory
	$scope.mobile.memory = '16GB';
	// intialize the default value for mobile color
	$scope.mobile.color = "white";
	// intialize the default value for mobile screen
	$scope.mobile.screen = "4";
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
		//mobile model and manufacture year is required to submit
		if ($scope.mobile.model != null && $scope.mobile.year != null) {
			var mobilesData = [];
			//get the cached data of mobiles
			mobilesData = JSON.parse(localStorage.getItem('data'));
			//add the new item to the cached data and save it again after adding it
			mobilesData.push($scope.mobile);
			localStorage.setItem('data', JSON.stringify(mobilesData));
			$state.go('home');
		}

	}

}])