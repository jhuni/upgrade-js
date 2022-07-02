/*=pod

=head2 toExponential() Returns String

=cut*/

Number.prototype.toExponential = function() {
	
	// get a number with only one digit that is not decimal
	var points = (this.toString().split('.'))[0].length - 1;
	
	var newValue = this.valueOf();
	newValue /= Math.pow(10,points);
	
	// Round to Point:
	var decimalPoints = arguments[0];
	if( typeof decimalPoints == 'undefined' ) {
		decimalPoints = (this.toString().length) - 2;
		if( 0 > decimalPoints ) {
			decimalPoints = 0;
		}
	}
	
	newValue *= Math.pow(10,decimalPoints);
	newValue = Math.round(newValue);
	newValue /= Math.pow(10,decimalPoints);
	
	// return values:
	return(newValue + "e+" + points);
};
