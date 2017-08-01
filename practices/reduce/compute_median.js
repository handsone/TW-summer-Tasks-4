'use strict';

function compute_median(collection) {
	var s = 0 ;
	for ( var i = 0 ; i < collection.length ; i ++ ){
		for (var j = i ; j < collection.length  ; j ++){
			if (collection[i] > collection[j]){
				 s = collection[i];
				collection[i] = collection[j]
				collection[j] = s;
			}
		}
	}
	var chain_median = parseInt(collection.length / 2) -1  ;
	var answer = 0 ; 
	if (collection.length %2 === 0 )
	{
		answer += (collection[chain_median ] + collection[chain_median + 1  ]) / 2;
	}
	else
	{
		answer += collection[chain_median];
	}
	return answer;
}

module.exports = compute_median;


