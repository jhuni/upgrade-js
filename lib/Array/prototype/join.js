/*=pod

=head2 join(String separator) Returns String

This takes each element of the Array and it adds seperator in between each of the elements to join the Array.

=cut*/

Array.prototype.join = function(separator) {

	var len = this.length;
	var rval = '';

	if( separator === undefined ) {
		separator = ',';
	}

	for( var i = 0; i < len; i++ ) {
		
		var elem = this[i];
		rval += (elem === null || elem === undefined) ? '' : elem;
		
		if( i != len-1 ) {
			rval += separator;		
		}
	}

	return rval;

};
