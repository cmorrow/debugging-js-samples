/*jshint strict: true */
(function (document, $) {
  "use strict";
  console.log("-------- CODE STARTS -----------");

  // now = 'The time is now!!!'; // breaks in strict mode
  var totalFunctionsCalled = 0;

  var myArray = ["Hank", "Jesse", "Walter"];

  function firstFunction() {
    console.log("firstFunction called!");
    totalFunctionsCalled++;
    secondFunction();
  }

  function secondFunction() {
    console.log("secondFunction called!");
    totalFunctionsCalled++;
    $.getJSON("data/data.json", function (data) {
      var items = [];
      var className = "";
      $.each(data, function (i) {
        className = i === 4 ? "highlight" : "";
        items.push(
          '<li id="obj' +
            data[i].index +
            '" class="' +
            className +
            '">' +
            data[i].name +
            "</li>"
        );
      });

      $("<ul/>", {
        class: "person-list",
        html: items.join(""),
      }).appendTo(".list-container");

      // log object properties in table format
      console.table(data, ["name", "gender", "email"]);
    });
  }

  // call firstFunction; start the chain of events
  firstFunction();
})(window.document, jQuery);
