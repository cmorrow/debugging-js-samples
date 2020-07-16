/*jshint strict: true */
// var kaApp = kaApp || {};
(function (document, $) {
  "use strict";
  const myArray = ["Hank", "Jesse", "Walter"];

  function firstFunction() {
    var currentPerson = "Walter White Jr.";
    myArray.push(currentPerson);
    secondFunction();
  }

  function secondFunction() {
    myArray.push("Skyler");
    thirdFunction();
  }

  function thirdFunction() {
    myArray.push("Gustavo");
  }

  // call firstFunction; start the chain of events
  firstFunction();
})(window.document, jQuery);

/* ---- Links -------- */
/* http://learn.jquery.com/using-jquery-core/document-ready/ */
