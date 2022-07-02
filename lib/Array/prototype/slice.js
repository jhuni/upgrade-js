/*=pod

=head2 slice(Number begin, Number end) Returns Array

This returns an Array starting at begin and ending at end.

=cut*/

Array.prototype.slice = function(begin, end) {

	var len = this.length;
	
	if( typeof(begin) == 'undefined' || begin == null ) {
		begin = 0;	
	} else if( 0 > begin ) {
		begin += len;
	}
	
	if( typeof(end) == 'undefined' ) {
		end = len;
	} else if( 0 > end ) {
		end += len;
	}
	
	if( end > this.length ) { 
		end = this.length; 
	}

	// Return the sliced Array as rval
	var rval = [];
	var currentIndex = 0;

	for( var i = begin; i < end; i++ ) {
		rval[currentIndex] = this[i];
		currentIndex++;
	}	

	return rval;

};
