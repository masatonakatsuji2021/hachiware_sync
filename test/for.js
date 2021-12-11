const sync = require("../");

console.log("Sync Start (for)");

sync.for(
	0,	// <= start index
	7,	// <= end index
	function(resolve, index){

		setTimeout(function(){
			console.log("Index = " + index);
			resolve();
		},1000);
	},	// <= callback
	function(){
		console.log("....Exit");
	} // <= completed callback
);