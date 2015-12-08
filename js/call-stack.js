/*jshint strict: true */
(function(document, $){
	'use strict';

	var a = 1;
	
	var totalFunctionsCalled = 0;

	function firstFunction(){
		totalFunctionsCalled++;
		secondFunction();
	}

	function secondFunction(){
		totalFunctionsCalled++;
		thirdFunction();
	}

	function thirdFunction(){
		totalFunctionsCalled++;
		fourthFunction();
	}

	function fourthFunction(){
		totalFunctionsCalled++;
		console.log('totalFunctionsCalled: ' + totalFunctionsCalled);
	}

	// call firstFunction; start the chain of events
	firstFunction();

	// Live Script Editing
	$('#header').find('.logo').on('click',function(){
		alert('old message');
	});

})(window.document, jQuery);

