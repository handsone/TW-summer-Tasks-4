'use strict';
var even_group_calculate_average = function(collection){
	var answer = [];
	var sortup = ( a , b ) => a - b ;
	var arr1 = collection.filter((x ,index) => x % 2 === 0 && index % 2 === 1).sort(sortup);
	if (arr1.length === 0 ){
		answer.push(0);
		return answer ;
	}
	else {
		var arrone = arr1.filter((x) => x < 10);
		var arrten = arr1.filter((x) => x > 10 && x < 100);
		var arrhundred = arr1.filter((x) => x > 100 && x < 1000)
		if (arrone.length != 0 && arrten.length != 0){
			answer.push(arrone.reduce((prev , cur ) => prev + cur) / arrone.length);
			answer.push(arrten.reduce((prev , cur ) => prev + cur) / arrten.length);
		}
		answer.push(arrhundred.reduce((prev , cur ) => prev + cur) / arrhundred.length);
		return answer;
	}
};
module.exports = even_group_calculate_average;
