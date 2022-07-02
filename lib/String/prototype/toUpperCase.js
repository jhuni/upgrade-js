
String.prototype.toUpperCase = function() {
	
	var LC_CHARS = 'abcdefghijklmnopqrstuvwxyz';
	var UC_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var ALPHABET_SIZE = LC_CHARS.length;
	
	var rval = '';	
	var len = this.length;
	
	for (var i = 0; i < len; i++) {
		
		var currentChar = this.charAt(i);
		
		// Search for a lowercase char:
		for (var n = 0; n < ALPHABET_SIZE; n++) {
			if (currentChar === LC_CHARS[n]) {
				currentChar = UC_CHARS[n];
				break;
			}	
		}
		
		rval += currentChar;
		
	}
	
	return rval;
};
