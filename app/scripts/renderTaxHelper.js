nationlBalanceApp.helpers.renderTax = function($scope){ 
	var total_tax = 0; 

	var position = $('.tax_bar_container').height()/2; 
	$('.tax_bar').css({bottom: -position});

	$.each($scope.tax_totals, function(key, val) { 
		total_tax += val.value; 
	});


	$('.tax_bar').css({height: total_tax});
	
	console.log('called');
	
};