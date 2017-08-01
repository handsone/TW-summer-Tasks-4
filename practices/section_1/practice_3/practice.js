function collect_same_elements(collection_a, object_b) {
		var answer = [] ;
	for ( var A of collection_a ){
		for ( var B of object_b.value ){
			if (A === B ){
				answer.push(A);
			}
		}
	}
	return answer ;
}

module.exports = collect_same_elements;
