/**
 * ====================================================================
 * Hachiware_Sync
 * A new object for synchronization processing that replaces Promise
 * Author : Nakatsuji Masato 
 * ====================================================================
 */

module.exports = {

	/**
	 * sync
	 * @param {*} callbackList 
	 * @param {*} context 
	 * @returns 
	 */
	sync : function(callbackList, context){

		var index = 0;

		const resolve = function(){	
			index++;

			if(!callbackList[index - 1]){
				return;
			}

			var _call = callbackList[index - 1];

			if(context){
				_call = _call.bind(context);
			}

			_call(resolve);
		};

		resolve();

		return this;
	},

	/**
	 * then
	 * @param {*} callback 
	 * @param {*} context 
	 */
	then: function(callback, context){

		var index = 0;
		var callbackList = [];

		const resolve = function(){
			index++;

			if(!callbackList[index]){
				return;	
			}

			callbackList[index](resolve);
		};

		const _this = {
			then: function(callback){
				if(context){
					callback = callback.bind(context);
				}

				callbackList.push(callback);

				return this;
			},
			start: function(){
				callbackList[0](resolve);
			},
		};

		return _this.then(callback);
	},


	
};