// (C) Andrea Giammarchi - JSL 1.8+ - 2007/11/03
(function(prototype){
	var	key, value, tmp;
	if(!Object.prototype.hasOwnProperty) Object.prototype.hasOwnProperty = function(key){
		var	result = false,
			value;
		key = String(key);
		if(/constructor|toString|valueOf/.test(key))
			result = Object.prototype[key] !== this[key];
		else{
			for(value in this){
				if(value === key){
					result = this === Object.prototype ? false : Object.prototype[key] !== this[key];
					break;
				}
			}
		};
		return	result;
	};
	for(key in prototype){
		if(prototype.hasOwnProperty(key)){
			switch(typeof prototype[key]){
				case	"function":
					if(!this[key])
						this[key] = prototype[key];
				break;
				case	"object":
					for(value in prototype[key]){
						if(prototype[key].hasOwnProperty(value)){
							if(!this[key].prototype[value] || (prototype[key][value].test && prototype[key][value].test()))
								this[key].prototype[value] = prototype[key][value].callback;
						}
					};
				break;
			}
		};
	};
	try{
		prototype = key = value = undefined;
	}
	catch(e){
		this.undefined = prototype = key = value = tmp;
	};
	/*@cc_on
	(function(callback){
		this.setTimeout = callback(this.setTimeout);
		this.setInterval = callback(this.setInterval);
	})(function(value){
		return	function(callback, i){
			var	tmp = Array.prototype.slice.call(arguments, 2);
			if(typeof callback != "function")
				callback = new Function(callback);
			return	value(function(){callback.apply(this, tmp);}, i);
		};
	});
	XMLHttpRequest = (function(XMLHttpRequest){
		function init(XMLHttpRequest){
			if(!XMLHttpRequest){
				var	tmp = ["MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
				while(!XMLHttpRequest && tmp.length){
					try{XMLHttpRequest = new ActiveXObject(tmp.shift())}
					catch(e){}
				};
			}
			else
				XMLHttpRequest = new XMLHttpRequest;
			return	XMLHttpRequest;
		};
		return	function(){
			var	Object = this;
			(this["class"] = init(XMLHttpRequest)).onreadystatechange = function(){
				var	XMLHttpRequest = Object["class"];
				if(Object["synchronized"]()){
					Object.responseText = XMLHttpRequest.responseText;
					Object.responseXML = XMLHttpRequest.responseXML;
					Object.status = XMLHttpRequest.status;
					Object.statusText = XMLHttpRequest.statusText;
				};
				if(Object.onreadystatechange)
					Object.onreadystatechange.call(Object.onreadystatechange);
			};
		};
	})(this.XMLHttpRequest);
	XMLHttpRequest.prototype = {
		abort:function(){
			this["class"].abort();
		},
		getAllResponseHeaders:function(){
			return	this["synchronized"]() ? this["class"].getAllResponseHeaders() : [];
		},
		getResponseHeader:function(key){
			return	this["synchronized"]() ? this["class"].getResponseHeader(key) : null;
		},
		open:function(){
			this["class"].open(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
		},
		send:function(value){
			this["class"].send(value || null);
		},
		setRequestHeader:function(key, value){
			return	this["class"].setRequestHeader(key, value);
		},
		"synchronized":function(){
			return	(this.readyState = this["class"].readyState) == 4;
		},
		readyState:0,
		status:0,
		responseText:"",
		statusText:"",
		responseXML:null
	};
	@*/
})({
	Array:{
		every:{callback:function(callback){
			for(var
				i = 0,
				result = true,
				scope = arguments[1] || null,
				value = this instanceof Array;
				i < this.length && result;
				i++
			){
				if(value ? this.hasOwnProperty(i) : this[i] !== undefined)
					result = callback.call(scope, this[i], i, this);
			};
			return	result;
		}},
		filter:{callback:function(callback){
			for(var
				i = 0,
				result = [],
				scope = arguments[1] || null,
				value = this instanceof Array;
				i < this.length;
				i++
			){
				if((value ? this.hasOwnProperty(i) : this[i] !== undefined) && callback.call(scope, this[i], i, this))
					result[result.length] = this[i];
			};
			return	result;
		}},
		forEach:{callback:function(callback){
			for(var
				i = 0,
				scope = arguments[1] || null,
				value = this instanceof Array;
				i < this.length;
				i++
			){
				if(value ? this.hasOwnProperty(i) : this[i] !== undefined)
					callback.call(scope, this[i], i, this);
			};
		}},
		indexOf:{callback:function(value, i){
			for(var
				j = this.length,
				i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
				i < j && this[i] !== value;
				i++
			);
			return	j <= i ? -1 : i;
		}},
		lastIndexOf:{callback:function(value, i){
			return	Array.prototype.slice.call(this).reverse().indexOf(value, i);
		}},
		map:{callback:function(callback){
			for(var
				i = 0,
				result = new Array(this.length),
				scope = arguments[1] || null,
				value = this instanceof Array;
				i < this.length;
				i++
			){
				if(value ? this.hasOwnProperty(i) : this[i] !== undefined)
					result[i] = callback.call(scope, this[i], i, this);
			};
			return	result;
		}},
		pop:{callback:function(callback){
			var	length = this.length,
				result;
			if(length)
				result = this[--length];
			this.length = length;
			return	result;
		}},
		push:{callback:function(){
			for(var
				i = 0;
				i < arguments.length;
				i++
			)
				this[this.length] = arguments[i];
			return	this.length;
		}},
		shift:{callback:function(){
			var	result = Array.prototype.reverse.call(this).pop();
			Array.prototype.reverse.call(this);
			return	result;
		}},
		some:{callback:function(callback){
			for(var
				i = 0,
				result = false,
				scope = arguments[1] || null,
				value = this instanceof Array;
				i < this.length && !result;
				i++
			){
				if(value ? this.hasOwnProperty(i) : this[i] !== undefined)
					result = callback.call(scope, this[i], i, this);
			};
			return	result;
		}},
		splice:{callback:function(){
			var	result = [],
				tmp = [],
				i = 0, j = this.length, k = 0, length = arguments.length;
			switch(length) {
				case	0:break;
				case	1:arguments[1] = !length++ || this.length - arguments[0];
				default:
					k = arguments[0] + arguments[1];
					for(; i < j; i++){
						if(i < arguments[0] || i >= k){
							if(i === k && length > 2){
								for(i = 2; i < length; i++)
									tmp[tmp.length] = arguments[i];
								i = k;
							};
							tmp[tmp.length] = this[i];
						}
						else
							result[result.length] = this[i];
					};
					for(i = 0, j = tmp.length; i < j; i++)
						this[i] = tmp[i];
					this.length = i;
					break;
			};
			return	result;
		}},
		unshift:{
		test:function(){
			var	Array = [4,5];
			return	!(Array.unshift(1,2,3) === 5 && Array.join("-") === "1-2-3-4-5");
		},
		callback:function(){
			var	length = arguments.length;
			Array.prototype.reverse.call(this);
			while(length--)
				this[this.length] = arguments[length];
			return	Array.prototype.reverse.call(this).length
		}}
	},
	Date:{
		getYear:{
		test:function(){
			return	String((new Date).getYear()).length === 4;
		},
		callback:function(){
			return	this.getFullYear() - 1900;
		}},
		setYear:{
		test:function(){
			return	String((new Date).getYear()).length === 4;
		},
		callback:function(setYear){
			return	this.setFullYear(setYear + 1900);
		}}
	},
	Function:{
		apply:{callback:function(scope, arguments){
			var	i = arguments ? arguments.length : 0,
				result = new Array(i),
				call;
			switch(typeof scope){
				case	"boolean":	scope = new Boolean(scope);break;
				case	"number":	scope = new Number(scope);break;
				case	"string":	scope = new String(scope);break;
				default:		scope = scope || (function(){return this})();break;
			};
			do call = "*" + Math.random();
			while(scope[call] !== undefined);
			while(i--)
				result[i] = "arguments[" + i + "]";
			scope[call] = this;
			result = eval("scope[call](" + result.join(",") + ")");
			try{delete scope[call]}
			catch(e){scope[call] = undefined};
			return	result;
		}},
		call:{callback:function(scope){
			for(var	i = 1, result = []; i < arguments.length; i++)
				result[result.length] = arguments[i];
			return	this.apply(scope, result);
		}}
	},
	Number:{
		toFixed:{callback:function(max){
			var	result = Math.pow(10, parseInt(max)),
				tmp = new Array(2);
			result = String(Math.round(this * result) / result);
			if(max > 0){
				tmp = result.split(".");
				tmp[1] = (tmp[1] || "") + new Array(++max - (tmp[1] ? tmp[1].length : 0)).join("0");
				result = tmp.join(".");
			};
			return	result;
		}}
	},
	String:{
		lastIndexOf:{callback:function(tmp, i){
			var	value = String(this),
				result = value.split("").reverse().join("").indexOf(String(tmp).split("").reverse().join(""), i || 0);
			return	result < 0 ? result : value.length - result;
		}},
		replace:{
		test:function(){
			return	"aa".replace(/a/g,function(a,b){return b + " "}) != "0 1 ";
		},
		callback:(function(replace){return function(key, callback){
			var	value = String(this),
				result = value;
			if(typeof callback != "function")
				result = replace.apply(value, arguments);
			else {
				var	k = !/\/.*g.*$/.test(key),
					i = 0,
					tmp = [];
				while(arguments = key.exec(result)){
					tmp[tmp.length] = result.substr(0, arguments.index);
					tmp[tmp.length] = callback.apply(null, arguments.concat([value.indexOf(arguments[0], i), value]));
					result = value.substring(i += (arguments.index + arguments[0].length));
					if(k)
						break;
				};
				result = tmp.join("") + result;
			};
			return	result
		}})(String.prototype.replace)
		}
	},
	decodeURIComponent:function(value){
		return	String(value).replace(
			/(%F[0-9A-F]%E[0-9A-F]%[A-B][0-9A-F]%[8-9A-B][0-9A-F])|(%E[0-9A-F]%[A-B][0-9A-F]%[8-9A-B][0-9A-F])|(%[C-D][0-9A-F]%[8-9A-B][0-9A-F])|(%[0-9A-F]{2})/g,
			function(value, key, k, j, i){return String.fromCharCode(
				i ? parseInt(i.substr(1, 2), 16) :
				j ? ((parseInt(j.substr(1, 2), 16) - 0xC0) << 6) + (parseInt(j.substr(4, 2), 16) - 0x80) :
				k ? ((parseInt(k.substr(1, 2), 16) - 0xE0) << 12) + ((parseInt(k.substr(4, 2), 16) - 0x80) << 6) + (parseInt(k.substr(7, 2), 16) - 0x80) :
				((parseInt(key.substr(1, 2), 16) - 0xF0) << 18) + ((parseInt(key.substr(4, 2), 16) - 0x80) << 12) + ((parseInt(key.substr(7, 2), 16) - 0x80) << 6) + (parseInt(key.substr(10, 2), 16) - 0x80)
			)}
		);
	},
	encodeURIComponent:function(value){
		function charCodeAt(i, length){
			var	result = i.toString(16).toUpperCase();
			length = (length || 2) - result.length;
			return	length == 0 ? result : new Array(++length).join("0").concat(result);
		};
		return	String(value)
			.replace(/[\x00-\x20]|[\x25|\x3C|\x3E|\x5B|\x5D|\x5E|\x60|\x7F]|[\x7B-\x7D]|[\x80-\uFFFF]/g, function(value){
				var	i = value.charCodeAt(0),
					tmp = [];
				if(i < 128)
					tmp[tmp.length] = charCodeAt(i);
				else if(i < 2048){
					tmp[tmp.length] = charCodeAt(0xC0 + (i >> 6));
					tmp[tmp.length] = charCodeAt(0x80 + (i & 0x3F));
				}
				else if(i < 65536){
					tmp[tmp.length] = charCodeAt(0xE0 + (i >> 12));
					tmp[tmp.length] = charCodeAt(0x80 + (i >> 6 & 0x3F));
					tmp[tmp.length] = charCodeAt(0x80 + (i & 0x3F));
				}
				else{
					tmp[tmp.length] = charCodeAt(0xF0 + (i >> 18));
					tmp[tmp.length] = charCodeAt(0x80 + (i >> 12 & 0x3F));
					tmp[tmp.length] = charCodeAt(0x80 + (i >> 6 & 0x3F));
					tmp[tmp.length] = charCodeAt(0x80 + (i & 0x3F));
				};
				return	"%" + tmp.join("%");
			})
			.replace(/[\x23|\x24|\x26|\x2B|\x2C|\x2F|\x3A|\x3B|\x3D|\x3F|\x40]/g, function(value){
				return	"%" + charCodeAt(value.charCodeAt(0));
			})
			.replace(/"/g, "%22")
			.replace(/\\/g, "%5C");
	},
	execScript:function(value){
		var	tmp = document.createElement("script");
		tmp.type = "text/javascript";
		tmp.appendChild(document.createTextNode(value));
		with(document.documentElement)
			removeChild(appendChild(tmp));
	}
});
