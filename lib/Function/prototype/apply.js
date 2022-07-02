/*=pod

=head2 apply(Object thisArg, Array argsArray = []) Returns Any

=cut*/

Function.prototype.apply = function(o, p) {
	
	if( typeof this != "function" ) {
		// JSMG_INCOMPATIBLE_PROTO
		throw new TypeError("Function.prototype.apply called on incompatible " + this);	
	}
	
	// Handle the parameters:
	p = (p === undefined || p === null) ? [] : p;
	o = (o === undefined || o === null) ? window : Object(o);
	
	if( !(p instanceof Array) && typeof p.callee != "function" ) {
		// JSMG_BAD_APPLY_ARGS
		throw new TypeError("second argument to Function.prototype.apply must be an array");
	}

	// Establish parameters:
	var parameters = '';
	for ( var i = 0, l = p.length; i < l; i++ ) {
		parameters += 'p[' + i + ']';
		if( i != l -1 ) {
			parameters += ", ";
		}
	}
	
	// Estbalish a temporaryName that is undefined
	var temporaryName = '__apply__';
	while( o[temporaryName] !== undefined ) {
		temporaryName += "_";
	}

	// Only way to acheive this is with eval!
	o[temporaryName] = this;
	var rval = eval('o.' + temporaryName + '(' + parameters + ')' );
	delete o[temporaryName];

	return rval;
};
