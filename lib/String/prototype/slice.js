/*=pod

=head2 slice(Number startIndex, Number endIndex) Returns String

=cut*/

String.prototype.slice = function(startIndex, endIndex) {
	var startIndex = (typeof startIndex === 'undefined') ? 0 : startIndex;
	var endIndex = (typeof endIndex === 'undefined') ? this.length : endIndex;
	
	var rval = '';
	for( var i = startIndex; i < endIndex; i++ ) {
		rval += this.charAt(i);
	}
	return rval;
};
