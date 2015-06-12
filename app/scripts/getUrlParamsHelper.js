nationlBalanceApp.helpers.getUrlParams = function($scope, $location) {

 	var params = $location.search();  
		
		$.each(params, function(val, key){ 
		
			if(val.includes('.')){ //probably should clean this more for XSS
				var path = val.split('.');
				var fragment_one = path[0];
				var fragment_two = path[1];

				if(typeof $scope[fragment_one] === 'undefined'){ 
					$scope[fragment_one] = {};
				}

				$scope[fragment_one][fragment_two] = key;
			}
			
		});

   
};
