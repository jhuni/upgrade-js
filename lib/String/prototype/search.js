/*=pod

=head2 search(Regexp regexp) Returns Number

=cut*/

String.prototype.search = function(regexp) {
	var spaces = this.split(regexp);
	if( spaces.length === 1 ) { 
		return -1; 
	}
	return( spaces[0].length );
};
