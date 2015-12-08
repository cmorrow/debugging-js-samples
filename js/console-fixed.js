/*jshint strict: true */
// var kaApp = kaApp || {};
(function(document, $){
	'use strict';
	
	var totalFunctionsCalled = 0;

	var myArray = [ 'Hank', 'Jesse', 'Walter' ];
	//myArray = []; //break assertion
	// console.log('start of function');
	// console.log('myArray length is: ' + myArray.length);
    
	console.assert(myArray.length !== 0,'testStrict has no properties, myArray = ' + myArray.length);

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
	}

	// call firstFunction; start the chain of events
	firstFunction();

})(window.document, jQuery);


/* ---- Snippets -------- */


