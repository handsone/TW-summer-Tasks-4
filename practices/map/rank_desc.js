'use strict';
var rank_desc = function(collection){
	function numsort(a , b){
		return a - b  ;
	}
	return collection.sort(numsort);
};

module.exports = rank_desc;
