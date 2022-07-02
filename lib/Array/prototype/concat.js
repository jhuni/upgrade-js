/*=pod

=head2 concat(*@insertions) Returns Array

This will add a group of other Arrays or Values to the end of this Array, if an Array is passed as an argument its elements become a part of the current Arrays elements.

=cut*/

Array.prototype.concat = function(){

	var arglen = arguments.length;
	var mylen = this.length;
	
	var rval = new Array();

	for( var i = 0; i < mylen; i++ ) {
		rval[i] = this[i];
	}

	var arrayOffset = mylen;
	for( var i = 0; i < arglen; i++ ) {
		var currentArg = arguments[i];

		if( currentArg.constructor.toString().indexOf("Array") == -1 ) {
			rval[arrayOffset+i] = currentArg;
		} else {
			var subArrayLen = currentArg.length;
			for( var si = 0; si < subArrayLen; si++ ) {
				rval[arrayOffset+i] = currentArg[si];
				arrayOffset++;
			}
			arrayOffset--;
		}

	}

	return rval;	

};
