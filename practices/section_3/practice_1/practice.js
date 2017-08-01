function create_updated_collection(collection_a, object_b) {
	for ( var A of collection_a ){
		for ( var C of A.key )
		for (var B of object_b.value){
			if ( C === B  ){
				A.count -- ;
			}
			
		}
	}
	return collection_a ;
}

module.exports = create_updated_collection;
