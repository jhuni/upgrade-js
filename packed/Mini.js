/*=pod

=head1 NAME

String - a class to construct string instances

=head1 SYNOPSIS

	var str = new String("This is a string");
	var ostr = str.slice(0,5);
	alert(ostr);

=head1 DESCRIPTION

This is a class that is used to construct String instances where as a String is a essentially an arrangement of Characters.

=head1 METHODS

=head2 Inherited

From Function.prototype:
apply, call, toSource, toString, valueOf 

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/


/*=pod

=head2 charAt(Number index) Returns String

=head2 charCodeAt(Number index) Returns Number

=cut*/



/*=pod

=head2 concat(*@strings) Returns String

=cut*/

String.prototype.concat = function(/* Str *@strings */) {
	
	var rval = this+'';
	for( var i = 0, l = arguments.length; i<l;i++ ) { 
		rval += arguments[i];
	}
	return rval;
	
};

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

/*=pod

=head2 lastIndexOf(String searchString, Number searchStart) Returns Number

=cut*/

String.prototype.lastIndexOf = function(searchString,searchStart) {
	var str = (typeof searchStart !== 'undefined') ?this.substr(0,searchStart+1) : this.toString();
	str = str.split('').reverse().join('');
	var index = str.indexOf(searchString);
	return( (index === -1) ? -1 : (str.length - 1 - index) );
	
};



/*=pod

=head2 localeCompare() Returns Number

=head2 match(Regexp regexp) Returns Array

=cut*/


/*=pod

=head2 quote() Returns String

=cut*/

String.prototype.quote = function() {
	return '"' + this.replace(/\\/g,"\\\\").replace(/"/g, "\\\"").replace(/\n/, "\\n") + '"';
};



/*=pod

=head2 replace(String|RegExp separator, String|RegExp replacement) Returns String

	String.prototype.replace = function(seperator, replacement) {

		var isRegExp = seperator.constructor.toSource().indexOf("RegExp") !== -1;

		if( isRegExp ) { 
			return this.split(seperator).join(replacement);
		} else {
			return '';
		}
	};

=cut*/




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


/*=pod

=head2 slice(Number startIndex, Number endIndex) Returns String

=cut*/

String.prototype.slice = function(startIndex, endIndex) {
	var startIndex = (typeof startIndex === 'undefined') ? 0 : startIndex;
	var endIndex = (typeof endIndex === 'undefined') ? this.length : endIndex;
	
	var rval = '';
	for( var i = startIndex; i < endIndex; i++ ) {
		rval += this.charAt(i);
	}
	return rval;
};

/*=pod

=head2 split(String|RegExp separator) Returns Array

=cut*/



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





/*=pod

=head2 toLocaleLowerCase() Returns String

=head2 toLocaleUpperCase() Returns String

=head2 toLowerCase() Returns String

=head2 toUpperCase() Returns String

=cut*/

(function(){

var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
String.prototype.toUpperCase = function() {
	var rval = '';	
	var len = this.length;
	for( var i = 0; i < len; i++ ) {
		var mychar = this.charCodeAt(i);
		if( 122 >= mychar && mychar >= 97 ) {
			rval += alphabet.charAt(mychar-97+26);
		} else {
			rval += this.charAt(i);
		}
	}
	return rval;
};

String.prototype.toLowerCase = function() {
	var rval = '';	
	var len = this.length;
	for( var i = 0; i < len; i++ ) {
		var mychar = this.charCodeAt(i);
		if( 90 >= mychar && mychar >= 65 ) {
			rval += alphabet.charAt(mychar-65);
		} else {
			rval += this.charAt(i);
		}
	}
	return rval;
};

})();


/*=pod

=head2 toSource() Returns String

=cut*/

String.prototype.toSource = function() {
	// escape slashes is necessary:
	return '(new String(' + this.quote() + '))';
};

/*=pod

=head2 toString() Returns String

=cut*/

String.prototype.toString = function() {
	return this+'';		
};


/*=pod

=head2 trim() Returns String

=cut*/

String.prototype.trim = function() {
	return( this.replace(/^\s+|\s+$/g,'') );
};

/*=pod

=head2 trimLeft() Returns String

=cut*/

String.prototype.trimLeft = function() {
	return( this.replace(/^\s+/,'') );
};

/*=pod

=head2 trimRight() Returns String

=cut*/

String.prototype.trimRight = function() {
	return( this.replace(/\s+$/g,'') );
};

/*=pod

=head2 valueOf() Returns String

=cut*/



/*=pod

=head1 HTML WRAPPERS

=cut*/

/*=pod

=head2 anchor(String href) Returns String

=cut*/

String.prototype.anchor = function(href) {
	return '<a name="' + href + '">' + this + '</a>';
};

/*=pod

=head2 bold() Returns String

=cut*/

String.prototype.bold = function() {
	return '<b>' + this + '</b>';
};

/*=pod

=head2 big() Returns String

=cut*/

String.prototype.big = function() {
	return '<big>' + this + '</big>';
};

/*=pod

=head2 blink() Returns String

=cut*/

String.prototype.blink = function() {
	return '<blink>' + this + '</blink>';
};

/*=pod

=head2 fixed() Returns String

=cut*/

String.prototype.fixed = function() {
	return '<tt>' +  this + '</tt>';
};

/*=pod

=head2 fontcolor() Returns String

=cut*/

String.prototype.fontcolor = function(color) {
	return '<font color="' + color + '">' + this + '</font>';
};

/*=pod

=head2 fontsize() Returns String

=cut*/

String.prototype.fontsize = function(size) {
	return '<font size="' + size + '">' + this + '</font>';
};

/*=pod

=head2 italics() Returns String

=cut*/

String.prototype.italics = function() {
	return '<i>' + this + '</i>';
};

/*=pod

=head2 small() Returns String

=cut*/

String.prototype.small = function() {
	return '<small>' + this + '</small>';
};

/*=pod

=head2 strike() Returns String

=cut*/

String.prototype.strike = function() {
	return '<strike>' + this + '</strike>';
};

/*=pod

=head2 sub() Returns String

=cut*/

String.prototype.sub = function() {
	return '<sub>' + this + '</sub>';
};

/*=pod

=head2 sup() Returns String

=cut*/

String.prototype.sup = function() {
	return '<sup>' + this + '</sup>';
};





/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

RegExp - deal with regular expressions

=head1 SYNOPSIS

	var regex = /\./;

=head1 DESCRIPTION

RegExp deals with regular expressions.

=head1 METHODS

=cut*/


/*=pod

=head2 exec(String str) Returns Array

=cut*/


/*=pod

=head2 test(String str) Returns Boolean

=cut*/


/*=pod

=head2 toSource() Returns String

=cut*/


/*=pod

=head2 toString() Returns String

=cut*/



/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Number - Number Object

=head1 SYNOPSIS

	var x = 512301.01317;
	alert( x.toExponential() );
	alert( x.toFixed(0) );
	
=head1 DESCRIPTION

This implements methods on all Numbers.

=head1 METHODS

=head2 Inherited

From Function.prototype:
apply, call, toSource, toString, valueOf 

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/



/*=pod

=head2 Constructor() Returns Number

*** Not Implementable In Standard JavaScript

=cut*/

/*=pod

=head2 valueOf() Returns Number

*** Not Implementable In Standard JavaScript

This gets you the primitive value - something standard JavaScript cannot obtain.

=cut*/





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



/*=pod

=head2 toLocaleString() Returns String

=cut*/

Number.prototype.toLocaleString = function() {
	return( "" + this );
};


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



/*=pod

=head2 toSource() Returns String

=cut*/


Number.prototype.toSource = function() {
	return( '(new Number("' + this.toString() + '"))' );
};




/*=pod

=head2 toString() Returns String

=cut*/

Number.prototype.toString = function() {
	return( "" + this );
}; 












/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

TypeError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

RangeError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

EvalError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Array - Class for dealing with ordered arrangements

=head1 SYNOPSIS

	var arr = new Array('element1', 'element2', 'element3');
	arr.reverse().push();

=head1 DESCRIPTION

Array is a Class for dealing with ordered arrangements of values, do not use this class for a dictionary or a hash.

This is based heavily upon the code released by Mozilla and it is based upon complete compatability with the Mozilla platform, that way existing code will continue to run with this implementation of Array.

=head1 METHODS

=head2 Inherited

From Function.prototype:
apply, call, toSource, toString, valueOf 

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/



/*=pod

=head2 Constructor(*@elements) Returns Array

*** Not Implementable in Standard JavaScript.

This is used to create an Array object. The length property requires a setter so we can not implement Array in pure JavaScript code.

=cut*/





/*=pod

=head2 join(String separator) Returns String

This takes each element of the Array and it adds seperator in between each of the elements to join the Array.

=cut*/

Array.prototype.join = function(separator){

	var rval = '';
	var mylen = this.length;

	if( typeof separator == 'undefined' ) {
		separator = ',';
	}

	for( var i = 0; i < mylen; i++ ) {
		rval += this[i];
		
		if( i != mylen-1 ) {
			rval += separator;		
		}
	}

	return rval;

};



/*=pod

=head2 toString() Returns String

This function will convert an Array to a String.

=cut*/

Array.prototype.toString = function(){
	return this.join(",");
};



/*=pod

=head2 toSource() Returns String

This function will convert the Array to source code - such that you can use eval(arr.toSource()).

=cut*/

Array.prototype.toSource = function() {
	return( '[' + this.join(", ") + ']' );
};



/*=pod

=head2 reverse() Returns Array

Reverse the order of the arrangement of the Array and return.

=cut*/

Array.prototype.reverse = function() {

	var start = 0;
	var end = this.length - 1;

	while( start < end ) {
	
		var endingValue = this[end];
		this[end] = this[start];	
		this[start] = endingValue;

		start++;
		end--;

	}
	
	return this;

};





/*=pod

=head2 sort(Function compareFunction) Returns undefined

Sorts and modifies the elements of this array.

=cut*/

Array.prototype.sort = function(compareFunction) {
	
	// Setup compareFunctions default sort method
	if( typeof compareFunction == 'undefined' ) {
		compareFunction = function(a,b) {
			if( a.toString() > b.toString() )  {      
				return 1; 
        	} else {      
        		return -1;  
        	}
		}
	}
	
	// Bubble sort is a nice and simple algorithm.
	var elems = this.length-1;
	
	while(1) {
		
		var swappedYet = false;
			
		for( var i = 0; i < elems; i++ ) {
			var result = compareFunction( this[i], this[i+1] );

			if( result > 0 ) {
				// Swap:
				var temp = this[i+1];
				this[i+1] = this[i];
				this[i] = temp;	
				swappedYet = true;
			}
			
		}
		
		// If there was no swapping for a whole loop then sorting is done.
		if( !swappedYet ) {
			break;
		}
		
	}
	
	
};



/*=pod

=head2 pop() Returns Any

This function removes and returns the last element in this Array.

=cut*/

Array.prototype.pop = function() {

	if( this.length == 0 ) {
		return undefined;
	}

	var end = this.length-1;
	var temp = this[end];
	
	delete this[end];
	this.length = this.length-1;
	
	return temp;

};


/*=pod

=head2 shift() Returns Any

This removes and returns the first element of the Array.

=cut*/

Array.prototype.shift = function() {

	var mylen = this.length;
	if( mylen == 0 ) {
		return undefined;
	}

	var temp = this[0];

	for( var i = 1; i < mylen; i++ ) {
		this[i-1] = this[i];
	}
	
	delete[mylen-1];
	this.length = this.length-1;

	return temp;

};


/*=pod

=head2 push(*@elements) Returns Number

This will push to the end of the array the following *@elements.

=cut*/

Array.prototype.push = function() {

	var mylen = this.length;

	var arglen = arguments.length;

	for( var i = 0; i < arglen; i++ ) {
		this[mylen+i] = arguments[i];
	}

	return this.length;

};


/*=pod

=head2 unshift(*@elements) Returns Number

This will push to the beginning of the array the *@elements.

=cut*/

Array.prototype.unshift = function() {

	var arglen = arguments.length;
	var mylen = this.length;

	for( var i = mylen-1; i >= 0; i-- ) {
		this[i+arglen]=this[i];
	}

	for( var i = 0; i < arglen; i++ ) {
		this[i] = arguments[i];
	}

	return this.length;

};


/*=pod

=head2 slice(Number begin, Number end) Returns Array

This returns an Array starting at begin and ending at end.

=cut*/

Array.prototype.slice = function(begin, end) {

	var len = this.length;
	
	if( typeof(begin) == 'undefined' || begin == null ) {
		begin = 0;	
	} else if( 0 > begin ) {
		begin += len;
	}
	
	if( typeof(end) == 'undefined' ) {
		end = len;
	} else if( 0 > end ) {
		end += len;
	}
	
	if( end > this.length ) { 
		end = this.length; 
	}

	// Return the sliced Array as rval
	var rval = [];
	var currentIndex = 0;

	for( var i = begin; i < end; i++ ) {
		rval[currentIndex] = this[i];
		currentIndex++;
	}	

	return rval;

};



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


/*=pod

=head2 splice(Number index, Number howMany, *@insertions) Returns Array

Adds or removes elements from the Array.

=cut*/

Array.prototype.splice = function(index, howMany /* insertions */) {

	if( arguments.length == 0 ) { return arguments.callee; }

	var len = this.length;
	var insertionCount = arguments.length-2; 

	if( typeof howMany == 'undefined' ) { 
		howMany = len; 
		insertionCount++; 
	}
	
	if( 0 > howMany ) { howMany = 0; }
	if( 0 > index ) { index += len; }

	/* Now perform the slice operation: */

	var rval = this.slice(index,index+howMany);
	
	for( var i = index; i < len-howMany; i++ ) {
		this[i] = this[i+howMany];
	}
	this.length -= howMany;
	
	// START INSERTIONS:
	this.length += insertionCount;
	for( var i = this.length-1; i > index; i-- ) {
		this[i] = this[i-insertionCount];
	}
	
	var argn = 0;
	for( var i = 0; i < insertionCount; i++ ) {
		this[index+i] = arguments[2+argn++];
	}
	
	return rval;

};




/*=pod

=head2 indexOf(Any element, Number from? ) Returns Number

This gets the index of the element.

=cut*/

Array.prototype.indexOf = function(elt /*, from*/) {
	
	var len = this.length;

	var from = Number(arguments[1]) || 0;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	
	if (from < 0) {
		from += len;
	}

	for (; from < len; from++) {
		if (from in this && this[from] === elt) {
			return from;
		}
	}
	
	return -1;
	
};



/*=pod

=head2 lastIndexOf(Any element, Number from?) Returns Number

This returns the last index of the element.

=cut*/

Array.prototype.lastIndexOf = function(elt /*, from*/)
{
	var len = this.length;

	var from = Number(arguments[1]);
	if (isNaN(from)) {
		from = len - 1;
	} else {
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		
		if (from < 0) {
			from += len;
		} else if (from >= len) {
			from = len - 1;
		}
		
	}

	for (; from > -1; from--) {
		if (from in this && this[from] === elt) {
			return from;
		}
	}
	
	return -1;
};



/*=pod

=head2 every(Function fun, Any thisp?) Returns Boolean

This returns true if every single value in the array matches fun().

=cut*/

Array.prototype.every = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this && !fun.call(thisp, this[i], i, this)) {
			return false;
		}
	}

	return true;
};


/*=pod

=head2 filter(Function fun, Any thisp?) Returns Array

This returns a new Array without values that match fun().

=cut*/

Array.prototype.filter = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var res = new Array();
	var thisp = arguments[1];
	
	for (var i = 0; i < len; i++) {
		if (i in this) {
			var val = this[i]; // in case fun mutates this
			if (fun.call(thisp, val, i, this)) {
			  res.push(val);
			}
		}
	}

	return res;
};


/*=pod

=head2 forEach(Function fun, Any thisp?) Returns undefined

This performs a call on each element of the Array.

=cut*/

Array.prototype.forEach = function(fun /*, thisp*/)
{
	var len = this.length;
	
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this) {
			fun.call(thisp, this[i], i, this);
		}
	}
	
};




/*=pod

=head2 map(Function fun, Any thisp?) Returns Array

This returns a new Array with the results of fun() to each element in the Array.

=cut*/

Array.prototype.map = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var res = new Array(len);
	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this) {
			res[i] = fun.call(thisp, this[i], i, this);
		}
	}

	return res;
};



/*=pod

=head2 some(Function fun, Any thisp?) Returns Boolean

This returns true if any element in the Array matches fun().

=cut*/

Array.prototype.some = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	var thisp = arguments[1];
	for (var i = 0; i < len; i++) {
		if (i in this && fun.call(thisp, this[i], i, this)) {
			return true;
		}
	}

	return false;
};



/*=pod

=head2 reduce( Function fun, Any initialValue? ) Returns Any

Apply fun() against two values of the array (from left-to-right) as to reduce it to a single value and return that value.

=cut*/

Array.prototype.reduce = function(fun /*, initial*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	// no value to return if no initial value and an empty array
	if (len == 0 && arguments.length == 1) {
		throw new TypeError();
	}

	var i = 0;
	if (arguments.length >= 2) {
		var rv = arguments[1];
	} else {
		do {
			if (i in this) {
				rv = this[i++];
				break;
			}

			// if array contains no values, no initial value to return
			if (++i >= len) {
				throw new TypeError();
			}
		} while (true);
	}

	for (; i < len; i++) {
		if (i in this) {
			rv = fun.call(null, rv, this[i], i, this);
		}
	}

	return rv;
};




/*=pod

=head2 reduceRight( Function fun, Any initialValue? ) Returns Any

Apply fun() against two values of the array (from right-to-left) as to reduce it to a single value and return that value.

=cut*/

Array.prototype.reduceRight = function(fun /*, initial*/)
{
	var len = this.length;
	if (typeof fun != "function") {
		throw new TypeError();
	}

	// no value to return if no initial value, empty array
	if (len == 0 && arguments.length == 1) {
		throw new TypeError();
	}

	var i = len - 1;
	if (arguments.length >= 2) {
		var rv = arguments[1];
	} else {
		do {
			if (i in this) {
				rv = this[i--];
				break;
			}

			// if array contains no values, no initial value to return
			if (--i < 0) {
				throw new TypeError();
			}
		} while (true);
	}

	for (; i >= 0; i--) {
		if (i in this) {
			rv = fun.call(null, rv, this[i], i, this);
		}
	}

	return rv;
};




/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Date - JavaScript Date library

=head1 DESCRIPTION

This part of the StandardLibrary is still very much a work in progress. The date library is quite huge.

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Function - deal with pieces of reusable code.

=head1 SYNOPSIS

	var x = function(a,b) {
		this.a = a;
		this.b = b;
	};
	
	x.apply(null, ["a", "b"]);
	
=head1 DESCRIPTION

A function is a piece of reusable code that takes a group of arguments, performs statements, and then returns some value.

=head1 METHODS

=head2 Inherited

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/



/*=pod

=head2 Constructor()

*** Not Implementable In Standard JavaScript

This creates a new function object.

=cut*/



/*=pod

=head2 toString() Returns String

*** Not Implementable In Standard JavaScript

This returns a string representation of the function.

=cut*/



/*=pod

=head2 apply(Object thisArg, Array argsArray) Returns Any

=cut*/

Function.prototype.apply = function(o, p) {
	if( p != null && !(p instanceof Array) && typeof p.callee != "function" ) {
		throw new Error("second argument to Function.prototype.apply must be an array");
	}
	
	o = (o == undefined || o == null) ? window : Object(o);

	if( p == null ) {
		p = [];
	}

	// Establish parameters:
	var parameters = [];
	for ( var i = 0, l = p.length; i < l; i++ ) {
		parameters[i] = 'p[' + i + ']';
	}
	
	// Estbalish a temporaryName that is undefined
	var temporaryName = '__apply__';
	while( o[temporaryName] != undefined ) {
		temporaryName += "_";
	}

	o[temporaryName] = this;
	var rval = eval('o.' + temporaryName + '(' + parameters.join(', ') + ')' );
	delete o[temporaryName];

	return rval;
};


/*=pod

=head2 call(Object thisArg, *@argsArray) Returns Any

=cut*/

Function.prototype.call = function() {
	
	var thisArg = typeof arguments[0] != 'undefined' ? arguments[0] : {};

	var argsArray = [];
	for( var i = 1, l = arguments.length; i < l; i++ ) {
		argsArray[argsArray.length] = arguments[i];
	}
	
	return this.apply( thisArg, argsArray );

};


/*=pod

=head2 toSource() Returns String

Returns a source representation of the function.

=cut*/

Function.prototype.toSource = function() {
	return( '(' + this.toString() + ')' );
};





/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

URIError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implemenets Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Error - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME 

Boolean - deal with true/false values

=head1 SYNOPSIS

	var x = new Boolean();
	
=head1 DESCRIPTION

Deal with true/false values.

=head1 METHODS

=head2 Inherited

From Function.prototype:
apply, call, toSource, toString, valueOf 

From Object.prototype:
hasOwnProperty, isPrototypeOf, propertyIsEnumerable, unwatch, watch

=cut*/




/*=pod

=head2 Constructor() Returns Boolean

*** Not Implementable in Standard JavaScript

This creates the Boolean Object

=cut*/





/*=pod

=head2 valueOf() Returns Boolean

*** Not Implementable in Standard JavaScript

This returns the primitive value of the boolean object.

=cut*/





/*=pod

=head2 toString() Returns String

This converts the Boolean to a String.

=cut*/

Boolean.prototype.toString = function() {
	return( (this == true) ? 'true' : 'false' );
};



/*=pod

=head2 toSource() Returns String

This converts the Boolean to a string wrapped around the constructor function.

=cut*/

Boolean.prototype.toSource = function() {
	return '(new Boolean(' + this.toString() + '))';
};





/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Object - the core of all JavaScript classes.

=head1 SYNOPSIS

	var x = new Object(); // constructed
	var y = {}; // literal
	
=head1 DESCRIPTION

In JavaScript, every single value is inherited from the Object class. It is the last thing in the __proto__ chain.

=head1 METHODS

=cut*/





/*=pod

=head2 hasOwnProperty(String prop) Returns Boolean

=cut*/


/*=pod

=head2 isPrototypeOf(Object object) Returns Boolean

=cut*/


/*=pod

=head2 propertyIsEnumerable(String prop) Returns Boolean

=cut*/


/*=pod

=head2 toSource() Returns String

=cut*/


/*=pod

=head2 toLocaleString() Returns String

=cut*/


/*=pod

=head2 toString() Returns String

=cut*/


/*=pod

=head2 valueOf() Returns Object

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

Math - basic mathematical functions

=head1 SYNOPSIS

	var x = Math.max( Math.sin(Math.PI/2), Math.cos(Math.PI/4) );
	var y = Math.min( Math.ceil(5.313), Math.round(5.5) );

=head1 DESCRIPTION

This is a module that is very basic to JavaScript. The functions implemented here cannot really be implemented within JavaScript itself so most of them such as Math.sin should be implemented by an outside library.

=head1 PROPERTIES

	Math.E = Math.exp(1);
	Math.LN10 = Math.log(10);
	Math.LN2 = Math.log(2);
	Math.LOG2E = 1.0 / Math.LN2;
	Math.LOG10E = 1.0 / Math.LN10;
	Math.PI = Math.acos(-1);
	Math.SQRT1_2 = Math.sqrt(0.5);
	Math.SQRT2 = Math.sqrt(2);

=head1 METHODS

=head2 abs(Number x) Returns Number

=head2 acos(Number x) Returns Number

=head2 asin(Number x) Returns Number

=head2 atan(Number x) Returns Number

=head2 atan2(Number y, Number x) Returns Number

=head2 ceil(Number x) Returns Number

=head2 cos(Number x) Returns Number

=head2 exp(Number x) Returns Number

=head2 floor(Number x) Returns Number

=head2 log(Number x) Returns Number

=head2 max(Number *@numbers) Returns Number

=head2 min(Number *@numbers) Returns Number

=head2 pow(Number base, Number exponent) Returns Number

=head2 random() Returns Number
	
=head2 round(Number x) Returns Number

=head2 sin(Number x) Returns Number

=head2 sqrt(Number x) Returns Number

=head2 tan(Number x) Returns Number

=cut*/



/*=pod

=head2 toSource() Returns String

This returns the String "Math" every time.

=cut*/

Math.toSource = function() {
	return "Math";
};



/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

SyntaxError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
/*=pod

=head1 NAME

ReferenceError - Implement Erorrs In JavaScript

=head1 DESCRIPTION

This class implements Errors.

=cut*/













/*=pod

=head1 AUTHOR

Jhuni, <jhuni_x@yahoo.com>

=head1 COPYRIGHT

Public Domain

=cut*/
