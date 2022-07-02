/*=pod

=head2 toFixed( Number decimalPoints ) Returns String

=cut*/

Number.prototype.toFixed = function( decimalPoints ) {

	if( typeof decimalPoints == 'undefined' ) {
		decimalPoints = 0;
	}
	
	var len = this.toString().length;
	var spaces = this.toString().split('.');
	var currentDec = len - spaces[0].length - 1;
	
	var rval = '';
	if(decimalPoints > currentDec) {
		rval = this.toString();
		for( var i = 0; i < (decimalPoints-currentDec); i++ ) {
			rval += '0';
		}
	} else {
		rval += spaces[0];
		if(decimalPoints != 0 && spaces.length != 1 ){
			rval += '.';
			for( var i = 0; i < decimalPoints; i++ ){
				rval += spaces[1].charAt(i);
			}
		}
	}
	
	return rval;
	
};
