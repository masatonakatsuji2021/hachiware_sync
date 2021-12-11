var sync = require("../");

sync.sync([
	function(resolve){

		console.log("Sync Start! (sync)");
		setTimeout(resolve,1000);
	},
	function(resolve){

		console.log("Gate1 Clear.");
		setTimeout(resolve,1000);
	},
	function(resolve){

		console.log("Gate2 Clear.");
		setTimeout(resolve,1000);
	},
	function(){

		console.log("....Exit");
	},
]);