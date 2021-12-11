const sync = require("../");

console.log("Sync Start (foreach)");

var data = {
	sec01: "text sample 01...",
	sec02: "text sample 02...",
	sec03: "text sample 03...",
	sec04: ["text sample 04..."],
	sec05: {
		name: "text sample 05...",
	},
};

sync.foreach(
	data,	// <= Target data
	function(resolve, value, key){

		setTimeout(function(){
			console.log("key = " + key);
			console.log(value);
			resolve();
		},1000);

	}, // <= looping callback
	function(){
		console.log("....Exit");
	} // <= completed callback
);
