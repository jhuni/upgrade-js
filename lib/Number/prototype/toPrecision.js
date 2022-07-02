/*=pod

=head2 toPrecision( Number precision ) Returns String

=cut*/

Number.prototype.toPrecision = function( precision ) {

	// Use toString if no precision definition is produced.
	if( typeof precision == 'undefined' ) {
		return this.toString();
	}

	if( precision.toString().indexOf(".") != -1 ) {
		precision = Math.floor(precision);
	}	
	// Check for Range Errors:
	if( 0 >= precision || precision >= 101 ) {
		throw new RangeError('precision ' + precision + ' out of range');
	}

	var rval = '';
	var spaces = this.toString().split('.');
	
	var decimalPoints = 0;
	if( typeof spaces[1] != 'undefined' ) { decimalPoints = spaces[1].length; }
	var currentPoints = spaces[0].length + decimalPoints;
	var newDecimalPoints = precision - spaces[0].length;
	
	if( newDecimalPoints > decimalPoints ) {
		var zeroCount = precision - currentPoints;
		rval += this.toString()
		if( decimalPoints == 0 ) { rval += '.'; }
		for( var i = 0; i < zeroCount; i++ ) {
			rval += '0';
		}
	} else {
		
		if( newDecimalPoints > 0 ) {
			rval = this.toString().substr(0,precision+1);
		} else {
			var value = parseInt( spaces[0] );
			if( spaces[0].length == precision ) {
				return( value.toString() );
			}
			return( value.toExponential(precision-1) );
		}
		
	}

	return rval;

};
