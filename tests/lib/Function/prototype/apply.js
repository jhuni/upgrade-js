// Test Function.apply

var x = function(myname, myvalue) {
	this.myname = myname;
	this.myvalue = myvalue;
};

var tobj = {};
x.apply(tobj, ["asdf", "FDSA"] );
ok( tobj.myname === "asdf" && tobj.myvalue === "FDSA", "Basic test works" );

x.apply(undefined, ["a", "b"]);
ok( window.myname === "a" && window.myvalue === "b", "Goes to window correctly with undefined" );

x.apply(null, ["c", "d"]);
ok( window.myname === "c" && window.myvalue === "d", "Goes to window correctly with null" );

x.apply(0, ["e", "f"]);
ok( window.myname === "c" && window.myvalue === "d", "Unchanged if it isn't null." );


var point = function() {
	this.x = 5;
	this.y = 10;
};

point.apply();
ok( window.x === 5 && window.y === 10, "Works with no arguments" );

