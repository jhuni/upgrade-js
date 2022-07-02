
	
document.writeln("<h1>Array </h1>");
var myarray = new Array(1,2,3,4,5);

// join method:
ok(myarray.join("&*") == '1&*2&*3&*4&*5', 'join() method');
ok([1,2,3,4].join() === '1,2,3,4', 'join() with no arguments works');
ok([].join(",") === '', 'join() method works with blank Array' );
ok([1,2,undefined,4].join(':') === '1:2::4', 'join works with undefined values' );
ok([1,2,null,4].join() === '1,2,,4', 'join works with null values' );
ok([1,2,3,4].join(['a','b']) === '1a,b2a,b3a,b4', 'join works with non-string separators');
ok([undefined,'a',undefined,'b'].join(null)==='nullanullnullb', 'works with null and undefined');


ok(myarray.toString() == '1,2,3,4,5', 'toString() method');

var otherArray = new Array(5,4,3,2,1);
ok( otherArray.reverse().toString() == '1,2,3,4,5', 'reverse() method');

// Array.prototype.toSource
ok( [1,2,3,   4,5].toSource() === '[1, 2, 3, 4, 5]', 'Array.prototype.toSource works' );


/* Slice Tests */
document.writeln("<h3>Slice Tests</h3>");

var myarray = new Array(1,2,3,4,5);
var val2 = myarray.slice();
myarray[3] = 10;

ok( val2.toString() == '1,2,3,4,5', 'Slice with no arguments passes by value.' );
ok( val2.slice().toString() == val2.slice(0).toString(), 'Slice with no arguments is equal to start at zero' );
ok( val2.slice(3).toString() == '4,5', 'Slice works with a first argument' );
ok( val2.slice(5).toString() == '', 'Slice that is at the end of the array works' );
ok( val2.slice(8).toString() == '', 'Slice can pass over the length of the array' );
ok( val2.slice(2,8).toString() == val2.slice(2,val2.length).toString(), 'Passes over the maximum correctly');
ok( val2.slice(-2).toString() == val2.slice(3).toString(), 'You can pass a negative value' );
ok( val2.slice(1,3).toString() == '2,3', 'You can pass a start and an end' );
ok( val2.slice(null,3).toString() == val2.slice(0,3).toString(), 'You can pass a null first argument' );
ok( val2.slice(3,null).toString() == '', 'Null second argument has a blank result' );
ok( val2.slice(-4,-1).toString() == val2.slice(1,4).toString(), 'Negative arguments work well.' );


/* Splice Tests */
document.writeln("<h3>Splice Tests</h3>");

var myarr = ['a','b','c','d','e','f'];
myarr.splice(0,3);
ok( myarr.toString() == 'd,e,f', 'Successfully removed the first three elements of array.' );
myarr.splice(1,1);
ok( myarr.toString() == 'd,f', 'Successfully removed a single element from array' );

ok( [1,2,3,4,5].splice().toString() == Array.prototype.splice.toString(), 'No arguments returns arguments.callee()' );

ok( [1,2,3,4,5].splice(2,3).toString() == [1,2,3,4,5].splice(2).toString(), 'An undefined second argument works' );

myarr = [1,2,3,4,5,6,7,8];
ok( myarr.splice(2,4).toString() == '3,4,5,6', 'The return value works well' );
ok( [1,2,3,4,5].splice(-2).toString() == [1,2,3,4,5].splice(3).toString(), 'Negative arguments are possible' );
ok( [1,2,3,4,5].splice(-4,-1).toString() == '', 'A negative second argument means you are going to remove nothing' );

myarr = [];
myarr.splice(0,0, 1,2,3,4,5);
ok( myarr.toString() == '1,2,3,4,5',  'Insertion works.');

myarr = [1,2,3,4,5];
myarr.splice(2,2, 'a', 'b', 'c', 'd');
ok( myarr.toString() == '1,2,a,b,c,d,5', 'Insertion and removal works.' );

myarr = [2,4,6,8,10,12,14,16];
myarr.splice(0,4,1,2,3,4);
myarr.splice(5,1);
ok( myarr.toString() == '1,2,3,4,10,14,16', 'General Insertion Test' );


/* Sort Tests */
document.writeln("<h3>Sort Tests</h3>");

var sortArray = new Array(1,3,4,2,5);
sortArray.sort( function(a,b) {
	return a-b;
} );
ok(sortArray.toString() == '1,2,3,4,5',   'sort() works with positive return' );

var sortArray = new Array(1,3,4,2,5);
sortArray.sort( function(a,b) {
	return b-a;
} );
ok(sortArray.toString() == '5,4,3,2,1',   'sort() works with negative return' );

var sortArray = new Array('a','d','b','c','Z','e','0','&');
sortArray.sort( function(a,b) {
	if( a > b )  {      return 1; 
        } else       {      return -1;  }
});
ok( sortArray.toString() == '&,0,Z,a,b,c,d,e',   'Standard sort works well');




document.writeln("<h3>Array 1.2</h3>");
ok(myarray.pop() == 5, 'pop() method');
ok(myarray.shift() == 1, 'shift() method');

var myarray = new Array(4,5,6);
myarray.unshift(1,2,3);
ok(myarray.toString() == '1,2,3,4,5,6',   'unshift() method');
ok(myarray.unshift() == myarray.length, 'unshift() returns properly');

myarray.push(7,8,9);
ok(myarray.toString() == '1,2,3,4,5,6,7,8,9',   'push() method');
ok(myarray.push() == myarray.length, 'push() returns properly');

var myarray = new Array(1,2);
myarray = myarray.concat(3,4,5,6, new Array(7,8,9), 10);
ok( myarray.toString() == '1,2,3,4,5,6,7,8,9,10',     'concat() method');






