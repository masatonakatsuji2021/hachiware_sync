const sync = require("../");

sync.then(function(resolve){

	console.log("Sync Start! (then)");
	setTimeout(resolve,1000);

}).then(function(resolve){

	console.log("Gate1 Clear.");
	setTimeout(resolve,1000);

}).then(function(resolve){

	console.log("Gate2 Clear.");
	setTimeout(resolve,1000);

}).then(function(){

	console.log("....Exit");

}).start();