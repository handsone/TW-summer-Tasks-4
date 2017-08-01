function collect_same_elements(collection_a, collection_b) {
	var answer = [] ;
	for (var A of collection_a){
		for ( var B of collection_b ){ if (A === B){
				answer.push(A);
			}
		}
	}
	return answer ;
}

module.exports = collect_same_elements;
