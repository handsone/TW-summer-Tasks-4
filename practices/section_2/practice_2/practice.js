function count_same_elements(collection) {
		var answer = [] ;
		var words  = [] ;
	var numberfrequency = [] ;
	var position ;
	for ( var A of collection  ){
		position = words.indexOf(A[0]);
		if ( position === -1  ){
			words.push(A[0]);
			if ( A.length != 1 )
			{
				numberfrequency.push(Number(A.match(/\d+/)));
			}
			else {
				numberfrequency.push(1);
			}
		}
		else {
			if ( A.length != 1 ){
				numberfrequency[position] += Number(A.match(/\d+/));
			}
			else {
				numberfrequency[position] += 1 ;
			}
		}
	}
	for (  var i  = 0 ; i < words.length ; i ++ ){
		answer.push({key: words[i], count:numberfrequency[i]});
	}
	return answer ;
}

module.exports = count_same_elements;
