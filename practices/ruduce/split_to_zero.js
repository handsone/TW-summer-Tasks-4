'use strict';

function spilt_to_zero(number, interval) {
		var answer = [] ;
	for ( var i = number ; i > 0 ; i -= interval ){
		
		answer.push(Number(i.toFixed(1)));	
	}
	if ( interval === 0.3 )
	answer.push(Number(i.toFixed(1)));
	return answer ;
}

module.exports = spilt_to_zero;
