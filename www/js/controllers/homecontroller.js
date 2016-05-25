app.controller('HomeController', ['$scope', '$state', function($scope, $state) {
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
	}, {
		'brand': 'Apple',
		'model': 'Z3',
		'year': '2014',
		'info': 'zzzzzzzzzzzz'
	}];

	// flag to check if item is clicked on the list
	$scope.itemIsChosen = false;
	// variable to hold the selected row index
	$scope.selectedRow = null;
	$scope.selectItem = function(chosenMobile, index) {
		$scope.selectedMobile = chosenMobile;
		$scope.selectedRow = index;
		$scope.itemIsChosen = true;
	}

	$scope.addNewMobile = function() {
		$state.go('add');
	}

	/**
	 * charts part
	 */
	$scope.donut = {
		options: {},
		data: {}
	};

	$scope.bar = {
		options: {},
		data: {}
	};

	$scope.donut.options = {
		chart: {
			type: 'pieChart',
			height: 200,
			donut: true,
			x: function(d) {
				return d.key;
			},
			y: function(d) {
				return d.y;
			},
			showLabels: true,
			duration: 500,
			labelThreshold: 0.01,
			labelSunbeamLayout: true,
			legend: {
				margin: {
					top: 5,
					right: 200,
					bottom: 5,
					left: 0
				}
			},
			showLegend: false
		}
	};

	$scope.donut.data = [{
		key: 'Nokia',
		y: 10
	}, {
		key: 'Samsung',
		y: 15
	}, {
		key: 'Apple',
		y: 20
	}, {
		key: 'Sony',
		y: 30
	}];

	/**
	 * bar chart
	 */
	 $scope.bar.options = {
		chart: {
			type: 'discreteBarChart',
			height: 200,
			margin: {
				top: 20,
				right: 20,
				bottom: 50,
				left: 55
			},
			x: function(d) {
				return d.year;
			},
			y: function(d) {
				return d.count;
			},
			showValues: true,
			valueFormat: function(d) {
				return d3.format(',.4f')(d);
			},
			duration: 500,
			xAxis: {
				axisLabel: 'Manufacture Year'
			},
			yAxis: {
				axisLabel: '',
				axisLabelDistance: -10
			}
		}
	};

	$scope.bar.data = [{
		key: "Cumulative Return",
		values: [{
			"year": "2012",
			"count": 200
		}, {
			"year": "2013",
			"count": 310
		}, {
			"year": "2014",
			"count": 210
		}, {
			"year": "2015",
			"count": 500
		}]
	}];

	console.log($scope.mobilesArray);
}])