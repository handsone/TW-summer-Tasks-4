function count_same_elements(collection) {
	var answer = [] ;
	var words = [] ;
	var numberfrequency = [] ;
	var  position ;
	for ( var A of collection  ){
		position = words.indexOf(A);
		if (position === -1 ){
			words.push(A);
			numberfrequency.push(1);
		}
		else
		{
			numberfrequency[position] ++ ;
		}
	}
	for ( var i = 0 ; i < words.length ; i ++ ){
		answer.push({key: words[i], count:numberfrequency[i]});
	}
	return answer ;
}

module.exports = count_same_elements;
