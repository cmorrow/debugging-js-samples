// sample.js

var myList = {
    objectOne: { item1: { objname: "details9"} },
    objectTwo: { itemYes: { anothername: "details123"}, itemTwo: { test: "details444"}, itemHello: { hello: "details666"} }
};

var printList = [];

function getObjValues(obj){
	var result = [];
	Object.keys(obj).forEach(function (key) {
		if(Object.keys(obj[key]) !== 0){
			result.push(getObjValues(obj[key]));
		}
	});
	return result;
}

function listAllValues(o){     
	var objectToInspect = o;     
	var result = [];
	
	for(var key in objectToInspect) {
		var nestedObj = myList["objectTwo"][key];
		for(key in nestedObj){
			var objValue = nestedObj[key];
		}
	    result.push(objValue);
	};
	
	return result; 
}

printList = listAllValues(myList["objectTwo"]);

console.log(getObjValues(myList["objectTwo"]));

// console.log(printList);