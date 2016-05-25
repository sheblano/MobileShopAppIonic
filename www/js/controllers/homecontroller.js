app.controller('HomeController', ['$scope', '$state', function($scope, $state) {
	// mobile shop data
	$scope.mobilesArray = [{
		brand: 'Nokia',
		model: '6600',
		year: '2005',
		screen: '4',
		memory: '16GB',
		options: {
			dual: false,
			fg: false,
			nfc: false
		},
		color: 'white'
	}, {
		brand: 'Samsung',
		model: 'S6',
		year: '2014',
		screen: '5',
		memory: '16GB',
		options: {
			dual: true,
			fg: true,
			nfc: false
		},
		color: 'black'
	}, {
		brand: 'Apple',
		model: 'iPhone4',
		year: '2006',
		screen: '4',
		memory: '32GB',
		options: {
			dual: false,
			fg: true,
			nfc: false
		},
		color: 'white'
	}, {
		brand: 'Sony',
		model: 'Z2',
		year: '2013',
		screen: '4',
		memory: '32GB',
		options: {
			dual: true,
			fg: true,
			nfc: true
		},
		color: 'black'
	}, {
		brand: 'Apple',
		model: 'Z3',
		year: '2014',
		screen: '4',
		memory: '64GB',
		options: {
			dual: false,
			fg: true,
			nfc: false
		},
		color: 'gold'
	}];
	//check if there are previous data in the storage to load them
	var chachedData = localStorage.getItem('data');
	if (chachedData != null) {
		$scope.mobilesArray = JSON.parse(chachedData);
	}
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
			// write the mobiles data in the storage so we can modify them in another state
			localStorage.setItem('data', JSON.stringify($scope.mobilesArray));
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
				return d.brand;
			},
			y: function(d) {
				return d.count;
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
		brand: 'Nokia',
		count: 10
	}, {
		brand: 'Samsung',
		count: 15
	}, {
		brand: 'Apple',
		count: 20
	}, {
		brand: 'Sony',
		count: 30
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