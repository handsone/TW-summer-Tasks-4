'use strict';
var is_exist_element = function(collection,element){
		return collection.filter((x , index) => index % 2 === 0).some((itme , index , arr) => arr.includes(element));
	
};
module.exports = is_exist_element;
