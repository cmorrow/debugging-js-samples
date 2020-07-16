/*jshint strict: true */
(function (document, $) {
  "use strict";

  const myNumber = 181;
  let totalFunctionsCalled = 0;
  const myArray = ["Hank", "Jesse", "Walter"];
  //console.log('myNumber equals 181: ' + (myNumber === 181));

  function firstFunction() {
    totalFunctionsCalled++;
    secondFunction();
  }

  function secondFunction() {
    totalFunctionsCalled++;
    thirdFunction();
  }

  function thirdFunction() {
    totalFunctionsCalled++;
    fourthFunction();
  }

  function fourthFunction() {
    totalFunctionsCalled++;
  }

  // call firstFunction; start the chain of events
  firstFunction();
})(window.document, jQuery);

/* ---- Links -------- */
/* http://learn.jquery.com/using-jquery-core/document-ready/ */
