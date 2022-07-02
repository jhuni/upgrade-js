/*=pod

=head2 sort(Function compareFunction) Returns undefined

Sorts and modifies the elements of this array.

=cut*/

Array.prototype.sort = function(compareFunction) {
	
	// Setup compareFunctions default sort method
	if( typeof compareFunction == 'undefined' ) {
		compareFunction = function(a,b) {
			if( a.toString() > b.toString() )  {      
				return 1; 
        	} else {      
        		return -1;  
        	}
		}
	}
	
	// Bubble sort is a nice and simple algorithm.
	var elems = this.length-1;
	
	while(1) {
		
		var swappedYet = false;
			
		for( var i = 0; i < elems; i++ ) {
			var result = compareFunction( this[i], this[i+1] );

			if( result > 0 ) {
				// Swap:
				var temp = this[i+1];
				this[i+1] = this[i];
				this[i] = temp;	
				swappedYet = true;
			}
			
		}
		
		// If there was no swapping for a whole loop then sorting is done.
		if( !swappedYet ) {
			break;
		}
		
	}
	
	
};
