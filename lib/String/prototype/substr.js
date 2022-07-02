/*=pod

=head2 substr(Number fromIndex, Number amount) Returns String

=cut*/

String.prototype.substr = function(fromIndex, amount) {

	var fromIndex = (typeof fromIndex === 'undefined') ? 0 : fromIndex;
	var amount = (typeof amount === 'undefined') ? this.length : amount;
	
	var rval = '';
	var endpoint = fromIndex+amount;
	for( var i = fromIndex; i < endpoint; i++ ) {
		rval += this.charAt(i);
	}
	return rval;
	
};
