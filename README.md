# Hachiware_Sync

<a href="https://github.com/masatonakatsuji2021/hachiware_sync/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/masatonakatsuji2021/hachiware_sync"></a>

## # What's is this?

A function to support synchronous processing instead of promise on javascript/Node.js.

It is created for the JavaScript framework "Hachiware", but it can also be used individually.

---

## # Sample source

Place the sample source in the test directory in the package.

---

## # How do you use this?

* As of December 2021, it has not been released as an npm package.

First, install the npm package with the following command.

```
npm i hachiware_sync
```

All you have to do is add the package require code to index.js etc. and you're ready to go.

```javascript
const sync = require("hachiware_sync");
```

---

## # Synchronous support in list

If you use the sync method, you can easily synchronize by simply specifying the callback in the list variable.

```javascript
var sync = require("hachiware_sync");

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

```

---

## # Synchronous support in method chain

It is also possible to synchronize with the method chain in almost the same way as the promise then.

Unlike promises, be sure to specify the start method at the end.

```javascript
const sync = require("hachiware_sync");

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
```

---

## # Synchronous support in a finite loop

Synchronous support in a finite loop such as 0 to 8 is possible using the for method.

```javascript
const sync = require("hachiware_sync");

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
```

---

## # Synchronous support in an infinite loop

Synchronous support in an infinite loop is possible with the loop method.

As a caveat, if you do not specify true in the argument specification of the resolve method, it will loop forever.

```javascript
const sync = require("hachiware_sync");

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
```
---

## # Synchronous support in loops in arrays and object data

The foreach method can be used to synchronize loops with array or object type data.

```javascript
const sync = require("hachiware_sync");

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
```
---

## # Waiting for the target callback to complete (asyncWait)

The asyncWait method is a function to synchronize when all the target callbacks are completed.

Functionally the same as promiseAll of promise.

List the target callbacks in the list as the first argument and execute them in parallel.  
The completion callback is executed when all the target callbacks are completed.

```javascript
const sync = require("hachiware_sync");

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
	], // <= target callback list>
	function(){
		console.log("....Exit");
	} // <= completed callback
);
```
---
Author : Nakatsuji Masato.
