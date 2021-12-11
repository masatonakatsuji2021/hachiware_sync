const sync = require("../");

console.log("Sync Start (asyncWait)");

sync.asyncWait([
		function(resolve){
			setTimeout(function(){
				console.log("...Clear 1");
				resolve();
			},2000);
		},
		function(resolve){
			setTimeout(function(){
				console.log("...Clear 2");
				resolve();
			},1200);
		},
		function(resolve){
			setTimeout(function(){
				console.log("...Clear 3");
				resolve();
			},2300);
		},
		function(resolve){
			setTimeout(function(){
				console.log("...Clear 4");
				resolve();
			},600);
		},
	],
	function(){
		console.log("....Exit");
	} // <= completed callback
);