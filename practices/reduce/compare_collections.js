'use strict';

function compare_collections(collection_a, collection_b) {
	for ( var i = 0 ; i < collection_a.length ; i++ ){
		if (collection_a[i] != collection_b[i])
			break;
	}
	if (collection_a[i] === collection_b[i])
		return true ;
	else
		return false ;
}

module.exports = compare_collections;


