function collect_same_elements(collection_a, object_b) {
		var answer = [] ;
	for ( var i = 0 ; i < collection_a.length ;i ++ ){
		var A = collection_a[i].key ;
		for ( var B of object_b.value ){
			if (A === B){
				answer.push(A);
			}
		}
	}
	return answer ;
}

module.exports = collect_same_elements;
