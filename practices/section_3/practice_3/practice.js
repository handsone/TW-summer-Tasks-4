function create_updated_collection(collection_a, object_b) {
	var arrA = [] ;
	var position ;
	var words = [] ;
	var numberfrequency = [] ;
	for ( var A of collection_a  ){
		position = words.indexOf(A[0])
		if (position === -1 ){
			words.push(A[0]);
			if ( A.length != 1 ){
				numberfrequency.push(Number(A.match(/\d+/)));
			}
			else
			{
				numberfrequency.push(1);
			}
		}
		else {
			if (A.length != 1){
				numberfrequency[position] += Number(A.match(/\d+/));
			}
			else {
				numberfrequency[position] ++;
			}

		}

	}
	for (var i = 0 ; i < words.length ;i ++ ){
		arrA.push({key: words[i], count:numberfrequency[i]});
	}
	for ( var A of arrA  ){
		for (var B of A.key){
			for (var C of object_b.value){
				if (B === C ){
					A.count -= parseInt(A.count/3 );
				}
			}
		}
	}
	return arrA ;
}

module.exports = create_updated_collection;
