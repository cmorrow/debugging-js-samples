/*jshint strict: true */
(function(document, $){
	'use strict';
	console.log('-------- CODE STARTS -----------');

	// now = 'The time is now!!!'; // breaks in strict mode
	var totalFunctionsCalled = 0;
	var myNewVar = 5; // bad code

	var myArray = [ 'Hank', 'Jesse', 'Walter' ];

	function firstFunction(){
		console.log('firstFunction called !!!');
		totalFunctionsCalled++;
		thirdFunction();
	}

	function thirdFunction(){
		//console.clear();
		console.log('thirdFunction called');
		totalFunctionsCalled++;
		fourthFunction();
	}

	function fourthFunction(){
		//console.clear();
		//console.log('fourthFunction called --- woohooo my code is still working !!!');
		totalFunctionsCalled++;
		$.getJSON( 'data/data.json', function( data ) {
		  var items = [];
		  var className = '';
		  $.each( data, function(i) {
		  	className = (i === 4) ? 'highlight' : '';
		    items.push( '<li id="obj' + data[i].index + '" class="' + className + '">' + data[i].name + '</li>' );
		  });
		 
		  $( '<ul/>', {
		    'class': 'person-list',
		    html: items.join( '' )
		  }).appendTo( '.list-container' );
		  //console.clear();
		  //console.log('----------------- CODE ENDS --------------------');
		  // console.clear();
		  //console.table(data, ['name','gender','email']);

		});
	}

	// call firstFunction; start the chain of events
	firstFunction();

})(window.document, jQuery);
