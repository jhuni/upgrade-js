/*=pod

=head2 concat(*@strings) Returns String

=cut*/

String.prototype.concat = function(/* Str *@strings */) {
	
	var rval = this + '';
	for( var i = 0, l = arguments.length; i<l;i++ ) { 
		rval += arguments[i];
	}
	return rval;
	
};
