/*=pod

=head2 splice(Number index, Number howMany, *@insertions) Returns Array

Adds or removes elements from the Array.

=cut*/

Array.prototype.splice = function(index, howMany /* insertions */) {

	if( arguments.length == 0 ) { 
		return arguments.callee; 
	}

	var len = this.length;
	var insertionCount = arguments.length-2; 

	if( typeof howMany == 'undefined' ) { 
		howMany = len; 
		insertionCount++; 
	}
	
	if( 0 > howMany ) { howMany = 0; }
	if( 0 > index ) { index += len; }

	/* Now perform the slice operation: */

	var rval = this.slice(index,index+howMany);
	
	for( var i = index; i < len-howMany; i++ ) {
		this[i] = this[i+howMany];
	}
	this.length -= howMany;
	
	// START INSERTIONS:
	this.length += insertionCount;
	for( var i = this.length-1; i > index; i-- ) {
		this[i] = this[i-insertionCount];
	}
	
	var argn = 0;
	for( var i = 0; i < insertionCount; i++ ) {
		this[index+i] = arguments[2+argn++];
	}
	
	return rval;

};
