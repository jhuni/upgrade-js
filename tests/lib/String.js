

document.writeln("<h2>String Tests:</h2>");

var mystring = 'abcdefghijklmnopqrstuvwxyz';
var mystr = 'you are a good person';

// Slice
ok( mystring.slice(0,5) === 'abcde', 'String.prototype.slice works' );
ok( mystring.slice(5,0) === '', 'String.prototype.slice is not order conscious' );
ok( mystring.slice(5,10) === 'fghij', 'String.prototype.slice works with an offset' );
ok( mystring === mystring.slice(), 'String.prototype.slice works without any arguments' );
ok( mystring.slice(5) === 'fghijklmnopqrstuvwxyz', 'String.prototype.slice works with only one argument' );
ok( mystring.slice(null,null) === '', 'String.prototype.slice(null,null) returns a blank string' );


// Substr
ok( mystring.substr(0,5) === 'abcde', 'String.prototype.substr works effectively' );
ok( mystring.substr(5,10) === 'fghijklmno', 'String.prototype.substr works effectively' );
ok( mystring.substr() === mystring, 'String.prototype.substr no arguments returns self' );
ok( mystring.substr(5) === mystring.substr(5,mystring.length), 'String.prototype.slice Move to length if the second argument is undef' );
ok( mystring.substr(null,null) === '', 'String.prototype.slice(null,null) returns a blank string.' );


// Substring
ok( mystring.substring(0,5) === 'abcde', 'String.prototype.substring works like substr' );
ok( mystring.substring(0,10) === 'abcdefghij', 'String.prototype.substring works well');
ok( mystring.substring(5,0) === 'abcde', 'String.prototype.substring is order conscious' );
ok( mystring.substring(5) === 'fghijklmnopqrstuvwxyz', 'String.prototype.substring works with one argument' );
ok( mystring.substring(undefined,8) === 'abcdefgh', 'String.prototype.substring works with undefined.' );
ok( mystring.substring() === mystring, 'String.prototype.substring with no arguments returns self');
ok( mystring.substring(null,null) === '', 'String.prototype.substring works with null arguments' );


// index of
ok( mystr.indexOf(" ") === 3, 'String.prototype.indexOf works effectively' );
ok( mystr.indexOf(" ",5) === 7, 'String.prototype.indexOf works with offsets' );
ok( mystr.indexOf("are") === 4, 'String.prototype.indexOf works well' );
ok( mystr.indexOf("oo") === 11, 'String.prototype.indexOf works with more then one character');
ok( mystr.indexOf("persona") === -1, 'String.prototype.indexOf works with -1' );
ok( mystr.indexOf("x") === -1, 'String.prototype.indexOf returns -1 correctly' );

// last index of
ok("abcdefghijk".lastIndexOf("c") === 2, 'String.prototype.lastIndexOf works with only one occurrence');
ok("canal".lastIndexOf("a") === 3, 'String.prototype.lastIndexOf works with more then one occurrence');
ok("canal".lastIndexOf("a",2) === 1, 'String.prototype.lastIndexOf with offsets works');
ok("canal".lastIndexOf("a",0) === -1, 'String.prototype.lastIndexOf with offsets can return -1');
ok("canal".lastIndexOf("x") === -1, 'String.prototype.lastIndexOf returns -1 correctly');

// concat
ok( 'abc'.concat('d','e','f',1,2,3,[1,2,3]) === 'abcdef1231,2,3', 'String.prototype.concat works' );
ok( 'abc'.concat() === 'abc', 'String.prototype.concat works without arguments' );

// replace
ok( mystr.replace(/\s/,'') === 'youare a good person', 'String.prototype.replace works' );
ok( mystr.replace(/\s/g,'') === 'youareagoodperson', 'String.prototype.replace works' );
ok( mystr.replace('o', 'a') === 'yau are a good person', 'String.prototype.replace works without Regexp' );

// Search
ok( 'abcdefg  hijkl'.search(/\s/) === 7, 'String.prototype.search works' );
ok( 'abc'.search(/\s/) === -1, 'String.prototype.search works without matches' );
ok( ''.search(/\s/) === -1, 'String.prototype.search where this is blank works.' );

// Split
ok( 'a b c d e f g h'.split(/\s/).join('') === 'abcdefgh', 'String.prototype.split works');
ok( 'a b c d e f g h'.split(" ").length === 8, 'String.prototype.split accepts Strings' );
ok( 'a b c d e f g h'.split(/\s/).length === 8, 'String.prototype.split accepts RegExps	');




// String.prototype.quote
ok( 'asdf'.quote() === '"asdf"', 'String.prototype.quote() works' );
ok( '"hi"'.quote() === "\"\\\"hi\\\"\"", 'String.prototype.quote() escapes correctly' );

// String.prototype.toSource
ok( "asdf".toSource() === '(new String("asdf"))', 'String.prototype.toSource works' );
ok( (new String("\"abc\n")).toSource() === '(new String("\\"abc\\n"))', 'String.prototype.toSource escapes correctly' );


// String.prototype.trim
if( String.prototype.trim ) {
	ok("\n  abc  \n".trimLeft() === "abc  \n", 'trimLeft() works');
	ok("\nabc \n  ".trimRight() === "\nabc", 'trimRight() works');
	ok("\n \n\n abc \n\n\n".trim() === 'abc', 'trim() works' );
	ok("\n\n\n    \t a b c   ".trim() === 'a b c', 'trim() works' );
}

