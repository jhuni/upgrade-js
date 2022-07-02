/*=pod

=head2 indexOf(String searchString, Number searchStart) returns Number

=cut*/

String.prototype.indexOf = function(searchString, searchStart) {
	var searchStart = (typeof searchStart === 'undefined') ? 0 : searchStart;
	var searchLength = searchString.length;
	var endPoint = this.length - searchLength + 1;
	
	for( var startPoint = searchStart; startPoint < endPoint; startPoint++ ) {
		var isMatch = true;
		for( var i = 0; i < searchLength; i++ ) {
			if( this.charAt(startPoint+i) !== searchString.charAt(i) ) {
				isMatch = false;
				break;
			}
		}
		if( isMatch ) { 
			return startPoint;
		}
	}
	
	return -1;
};
