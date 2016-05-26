app.controller('AddController', ['$scope', '$state', '$ionicScrollDelegate', function($scope, $state, $ionicScrollDelegate) {

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

	$scope.modelRequiredErr = false;
	$scope.yearRequiredErr = false;

	/**
	 * add new item to previous mobiles data in the shop
	 */
	$scope.addNewItem = function() {
		//mobile model and manufacture year is required to submit
		if ($scope.mobile.model != null && $scope.mobile.year != null && $scope.mobile.model != '' && $scope.mobile.year != '' && $scope.modelRequiredErr == false && $scope.yearRequiredErr == false) {
			var mobilesData = [];
			//get the cached data of mobiles
			mobilesData = JSON.parse(localStorage.getItem('data'));
			//add the new item to the cached data and save it again after adding it
			mobilesData.push($scope.mobile);
			localStorage.setItem('data', JSON.stringify(mobilesData));
			$state.go('home');
		} else {
			// show an require error message for mobile model
			if ($scope.mobile.model == null || $scope.mobile.model == '' || $scope.mobile.model == undefined)
				$scope.modelRequiredErr = true;
			// show an require error message for mobile year
			if ($scope.mobile.year == null || $scope.mobile.year == '' || $scope.mobile.year == undefined)
				$scope.yearRequiredErr = true;
			// to scroll to the top of the page
			$ionicScrollDelegate.scrollTop();
		}

	}
	/**
	 * to dynamically remove the hide messages while user typing
	 */
	$scope.isTypingValue = function() {
		if ($scope.mobile.model != null || $scope.mobile.model != '' || $scope.mobile.model != undefined) {
			$scope.modelRequiredErr = false;
		}
		if ($scope.mobile.year != null && $scope.mobile.year != "" || $scope.mobile.year != undefined) {
			$scope.yearRequiredErr = false;
		}
	}

}])