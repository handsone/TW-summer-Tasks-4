function create_updated_collection(collection_a, object_b) {
	for ( var A of collection_a  ){
		for (var B of A.key ){
			for ( var C of object_b.value ){
				if ( B === C  ){
					A.count -= parseInt(A.count / 3 )
				}
			}
		}
	}
	return collection_a ;
}

module.exports = create_updated_collection;
