/*jshint strict: true */
// var kaApp = kaApp || {};
var jsDebugApp = (function (app, document, $) {
  	'use strict';

	var testStrict = {'p1':10, 'p2':15, 'p3':20};
	// testStrict = {}; // break: assertion fail
	var docElem = document.documentElement;

	var testStrictLength = 0;
	for (var key in testStrict) {
        if (testStrict.hasOwnProperty(key)) {
        	testStrictLength++;
        }
    }

	// cause error;
	var someVar = ''; // var required in strict mode
	var anotherVar = someVar;
	// console.trace();

	// assert sample
	console.assert(testStrictLength !== 0,'testStrict has no properties');
	if(foo === undefined){
		var foo = 'foobar';
	}
	var setUserAgentString = function userAgent() {
		docElem.setAttribute('data-useragent', navigator.userAgent);
	};

	console.log('userAgentInit: ' + navigator.userAgent);

	return {
		init: function() {
			setUserAgentString();
			var a = 1;
			var b = 2;
			var c = 3;
			console.log('%ctestStrict has %d properties', 'color:orange; background:blue; font-size: 16pt', testStrictLength);
			$(document).ready(this.domReady);
		},
		domReady: function() { 
			// Executes after DOM ready
			var $contentDiv = $('#code');
			$contentDiv.find('p').on('click',function(){
				$(this).toggleClass('selected');
			});
			$contentDiv.find('.get-total').on('click',function(){
				$contentDiv.find('.total-paragraphs').text($('#code').find('p').length);
			});
		}
	};

}(jsDebugApp, window.document, jQuery));

jsDebugApp.init();


/* ---- Links -------- */
/* http://learn.jquery.com/using-jquery-core/document-ready/ */

