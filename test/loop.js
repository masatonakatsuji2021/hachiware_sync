const sync = require("../");

console.log("Sync Start (loop)");

var index = 0;

sync.loop(
	function(resolve){

		setTimeout(function(){
			console.log("index = " + index);
			index++;

			if(index == 8){
				// exit
				resolve(true);
			}
			else{
				// continue
				resolve();
			}
		},1000);

	}, // <= looping callback
	function(){
		console.log("....Exit");
	} // <= completed callback
);
