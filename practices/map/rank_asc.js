'use strict';
var rank_asc = function(collection){
	function numsort(a , b){
		return b - a ;
	}
	return collection.sort(numsort);
};

module.exports = rank_asc;
