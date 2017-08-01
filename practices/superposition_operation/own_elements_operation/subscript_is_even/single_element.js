'use strict';
var single_element = function(collection){
	var answer = collection.filter((x , index , arr) => index % 2 != 0) 
	return answer.filter((x ,index ,arr) => arr.indexOf(x) === arr.lastIndexOf(x) );
};
module.exports = single_element;
