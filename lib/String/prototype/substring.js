/*=pod

=head2 substring(Number index1, Number index2) Returns String

=cut*/

String.prototype.substring = function(index1, index2) {
	var index1 = (typeof index1 === 'undefined') ? 0 : index1;
	var index2 = (typeof index2 === 'undefined') ? this.length : index2;
	
	var startIndex = (index1 > index2) ? index2 : index1;
	var endIndex = (index1 > index2) ? index1 : index2;
	
	var rval = '';
	for( ; startIndex < endIndex; startIndex++ ) {
		rval += this.charAt(startIndex);
	}
	return rval;
	
};
