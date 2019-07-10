/**
 * @preserve jQuery Autocomplete plugin v1.2.6
 * @homepage http://xdsoft.net/jqplugins/autocomplete/
 * @license MIT - MIT-LICENSE.txt
 * (c) 2014, Chupurnov Valeriy <chupurnov@gmail.com>
 */
(function ($) {
	'use strict';
	var	ARROWLEFT = 37,
		ARROWRIGHT = 39,
		ARROWUP = 38,
		ARROWDOWN = 40,
		TAB = 9,
		CTRLKEY = 17,
		SHIFTKEY = 16,
		DEL = 46,
		ENTER = 13,
		ESC = 27,
		BACKSPACE = 8,
		AKEY = 65,
		CKEY = 67,
		VKEY = 86,
		ZKEY = 90,
		YKEY = 89,
		defaultSetting = {},
		//currentInput = false,
		ctrlDown = false,
		shiftDown = false,
		publics = {},
		accent_map = {
			'áºš':'a','Ã':'a','Ã¡':'a','Ã€':'a','Ã ':'a','Ä‚':'a','Äƒ':'a','áº®':'a','áº¯':'a','áº°':'a','áº±':'a','áº´':'a','áºµ':'a','áº²':'a',
			'áºª':'a','áº«':'a','áº¨':'a','áº©':'a','Ç':'a','ÇŽ':'a','Ã…':'a','Ã¥':'a','Çº':'a','Ç»':'a','Ã„':'a','Ã¤':'a','Çž':'a','ÇŸ':'a',
			'Ãƒ':'a','Ã£':'a','È¦':'a','È§':'a','Ç ':'a','Ç¡':'a','Ä„':'a','Ä…':'a','Ä€':'a','Ä':'a','áº¢':'a','áº£':'a','È€':'a','È':'a',
			'È‚':'a','Èƒ':'a','áº ':'a','áº¡':'a','áº¶':'a','áº·':'a','áº¬':'a','áº­':'a','á¸€':'a','á¸':'a','Èº':'a','â±¥':'a','Ç¼':'a','Ç½':'a',
			'Ç¢':'a','Ç£':'a','á¸‚':'b','á¸ƒ':'b','á¸„':'b','á¸…':'b','á¸†':'b','á¸‡':'b','Éƒ':'b','Æ€':'b','áµ¬':'b','Æ':'b','É“':'b','Æ‚':'b',
			'Æƒ':'b','Ä†':'c','Ä‡':'c','Äˆ':'c','Ä‰':'c','ÄŒ':'c','Ä':'c','ÄŠ':'c','Ä‹':'c','Ã‡':'c','Ã§':'c','á¸ˆ':'c','á¸‰':'c','È»':'c',
			'È¼':'c','Æ‡':'c','Æˆ':'c','É•':'c','ÄŽ':'d','Ä':'d','á¸Š':'d','á¸‹':'d','á¸':'d','á¸‘':'d','á¸Œ':'d','á¸':'d','á¸’':'d','á¸“':'d',
			'á¸Ž':'d','á¸':'d','Ä':'d','Ä‘':'d','áµ­':'d','Æ‰':'d','É–':'d','ÆŠ':'d','É—':'d','Æ‹':'d','ÆŒ':'d','È¡':'d','Ã°':'d','Ã‰':'e',
			'Æ':'e','ÆŽ':'e','Ç':'e','Ã©':'e','Ãˆ':'e','Ã¨':'e','Ä”':'e','Ä•':'e','ÃŠ':'e','Ãª':'e','áº¾':'e','áº¿':'e','á»€':'e','á»':'e',
			'á»„':'e','á»…':'e','á»‚':'e','á»ƒ':'e','Äš':'e','Ä›':'e','Ã‹':'e','Ã«':'e','áº¼':'e','áº½':'e','Ä–':'e','Ä—':'e','È¨':'e','È©':'e',
			'á¸œ':'e','á¸':'e','Ä˜':'e','Ä™':'e','Ä’':'e','Ä“':'e','á¸–':'e','á¸—':'e','á¸”':'e','á¸•':'e','áºº':'e','áº»':'e','È„':'e','È…':'e',
			'È†':'e','È‡':'e','áº¸':'e','áº¹':'e','á»†':'e','á»‡':'e','á¸˜':'e','á¸™':'e','á¸š':'e','á¸›':'e','É†':'e','É‡':'e','Éš':'e','É':'e',
			'á¸ž':'f','á¸Ÿ':'f','áµ®':'f','Æ‘':'f','Æ’':'f','Ç´':'g','Çµ':'g','Äž':'g','ÄŸ':'g','Äœ':'g','Ä':'g','Ç¦':'g','Ç§':'g','Ä ':'g',
			'Ä¡':'g','Ä¢':'g','Ä£':'g','á¸ ':'g','á¸¡':'g','Ç¤':'g','Ç¥':'g','Æ“':'g','É ':'g','Ä¤':'h','Ä¥':'h','Èž':'h','ÈŸ':'h','á¸¦':'h',
			'á¸§':'h','á¸¢':'h','á¸£':'h','á¸¨':'h','á¸©':'h','á¸¤':'h','á¸¥':'h','á¸ª':'h','á¸«':'h','H':'h','Ì±':'h','áº–':'h','Ä¦':'h','Ä§':'h',
			'â±§':'h','â±¨':'h','Ã':'i','Ã­':'i','ÃŒ':'i','Ã¬':'i','Ä¬':'i','Ä­':'i','ÃŽ':'i','Ã®':'i','Ç':'i','Ç':'i','Ã':'i','Ã¯':'i',
			'á¸®':'i','á¸¯':'i','Ä¨':'i','Ä©':'i','Ä°':'i','i':'i','Ä®':'i','Ä¯':'i','Äª':'i','Ä«':'i','á»ˆ':'i','á»‰':'i','Èˆ':'i','È‰':'i',
			'ÈŠ':'i','È‹':'i','á»Š':'i','á»‹':'i','á¸¬':'i','á¸­':'i','I':'i','Ä±':'i','Æ—':'i','É¨':'i','Ä´':'j','Äµ':'j','J':'j','ÌŒ':'j',
			'Ç°':'j','È·':'j','Éˆ':'j','É‰':'j','Ê':'j','ÉŸ':'j','Ê„':'j','á¸°':'k','á¸±':'k','Ç¨':'k','Ç©':'k','Ä¶':'k','Ä·':'k','á¸²':'k',
			'á¸³':'k','á¸´':'k','á¸µ':'k','Æ˜':'k','Æ™':'k','â±©':'k','â±ª':'k','Ä¹':'a','Äº':'l','Ä½':'l','Ä¾':'l','Ä»':'l','Ä¼':'l','á¸¶':'l',
			'á¸·':'l','á¸¸':'l','á¸¹':'l','á¸¼':'l','á¸½':'l','á¸º':'l','á¸»':'l','Å':'l','Å‚':'l','Ì£':'l','Ä¿':'l',
			'Å€':'l','È½':'l','Æš':'l','â± ':'l','â±¡':'l','â±¢':'l','É«':'l','É¬':'l','É­':'l','È´':'l','á¸¾':'m','á¸¿':'m','á¹€':'m','á¹':'m',
			'á¹‚':'m','á¹ƒ':'m','É±':'m','Åƒ':'n','Å„':'n','Ç¸':'n','Ç¹':'n','Å‡':'n','Åˆ':'n','Ã‘':'n','Ã±':'n','á¹„':'n','á¹…':'n','Å…':'n',
			'Å†':'n','á¹†':'n','á¹‡':'n','á¹Š':'n','á¹‹':'n','á¹ˆ':'n','á¹‰':'n','Æ':'n','É²':'n','È ':'n','Æž':'n','É³':'n','Èµ':'n','N':'n',
			'Ìˆ':'n','n':'n','Ã“':'o','Ã³':'o','Ã’':'o','Ã²':'o','ÅŽ':'o','Å':'o','Ã”':'o','Ã´':'o','á»':'o','á»‘':'o','á»’':'o',
			'á»“':'o','á»–':'o','á»—':'o','á»”':'o','á»•':'o','Ç‘':'o','Ç’':'o','Ã–':'o','Ã¶':'o','Èª':'o','È«':'o','Å':'o','Å‘':'o','Ã•':'o',
			'Ãµ':'o','á¹Œ':'o','á¹':'o','á¹Ž':'o','á¹':'o','È¬':'o','È­':'o','È®':'o','È¯':'o','È°':'o','È±':'o','Ã˜':'o','Ã¸':'o','Ç¾':'o',
			'Ç¿':'o','Çª':'o','Ç«':'o','Ç¬':'o','Ç­':'o','ÅŒ':'o','Å':'o','á¹’':'o','á¹“':'o','á¹':'o','á¹‘':'o','á»Ž':'o','á»':'o','ÈŒ':'o',
			'È':'o','ÈŽ':'o','È':'o','Æ ':'o','Æ¡':'o','á»š':'o','á»›':'o','á»œ':'o','á»':'o','á» ':'o','á»¡':'o','á»ž':'o','á»Ÿ':'o','á»¢':'o',
			'á»£':'o','á»Œ':'o','á»':'o','á»˜':'o','á»™':'o','ÆŸ':'o','Éµ':'o','á¹”':'p','á¹•':'p','á¹–':'p','á¹—':'p','â±£':'p','Æ¤':'p','Æ¥':'p',
			'P':'p','Ìƒ':'p','p':'p','Ê ':'q','ÉŠ':'q','É‹':'q','Å”':'r','Å•':'r','Å˜':'r','Å™':'r','á¹˜':'r','á¹™':'r','Å–':'r',
			'Å—':'r','È':'r','È‘':'r','È’':'r','È“':'r','á¹š':'r','á¹›':'r','á¹œ':'r','á¹':'r','á¹ž':'r','á¹Ÿ':'r','ÉŒ':'r','É':'r','áµ²':'r',
			'É¼':'r','â±¤':'r','É½':'r','É¾':'r','áµ³':'r','ÃŸ':'s','Åš':'s','Å›':'s','á¹¤':'s','á¹¥':'s','Åœ':'s','Å':'s','Å ':'s','Å¡':'s',
			'á¹¦':'s','á¹§':'s','á¹ ':'s','á¹¡':'s','áº›':'s','Åž':'s','ÅŸ':'s','á¹¢':'s','á¹£':'s','á¹¨':'s','á¹©':'s','È˜':'s','È™':'s','Ê‚':'s',
			'S':'s','Ì©':'s','s':'s','Ãž':'t','Ã¾':'t','Å¤':'t','Å¥':'t','T':'t','áº—':'t','á¹ª':'t','á¹«':'t','Å¢':'t','Å£':'t','á¹¬':'t',
			'á¹­':'t','Èš':'t','È›':'t','á¹°':'t','á¹±':'t','á¹®':'t','á¹¯':'t','Å¦':'t','Å§':'t','È¾':'t','â±¦':'t','áµµ':'t',
			'Æ«':'t','Æ¬':'t','Æ­':'t','Æ®':'t','Êˆ':'t','È¶':'t','Ãš':'u','Ãº':'u','Ã™':'u','Ã¹':'u','Å¬':'u','Å­':'u','Ã›':'u','Ã»':'u',
			'Ç“':'u','Ç”':'u','Å®':'u','Å¯':'u','Ãœ':'u','Ã¼':'u','Ç—':'u','Ç˜':'u','Ç›':'u','Çœ':'u','Ç™':'u','Çš':'u','Ç•':'u','Ç–':'u',
			'Å°':'u','Å±':'u','Å¨':'u','Å©':'u','á¹¸':'u','á¹¹':'u','Å²':'u','Å³':'u','Åª':'u','Å«':'u','á¹º':'u','á¹»':'u','á»¦':'u','á»§':'u',
			'È”':'u','È•':'u','È–':'u','È—':'u','Æ¯':'u','Æ°':'u','á»¨':'u','á»©':'u','á»ª':'u','á»«':'u','á»®':'u','á»¯':'u','á»¬':'u','á»­':'u',
			'á»°':'u','á»±':'u','á»¤':'u','á»¥':'u','á¹²':'u','á¹³':'u','á¹¶':'u','á¹·':'u','á¹´':'u','á¹µ':'u','É„':'u','Ê‰':'u','á¹¼':'v','á¹½':'v',
			'á¹¾':'v','á¹¿':'v','Æ²':'v','Ê‹':'v','áº‚':'w','áºƒ':'w','áº€':'w','áº':'w','Å´':'w','Åµ':'w','W':'w','ÌŠ':'w','áº˜':'w','áº„':'w',
			'áº…':'w','áº†':'w','áº‡':'w','áºˆ':'w','áº‰':'w','áºŒ':'x','áº':'x','áºŠ':'x','áº‹':'x','Ã':'y','Ã½':'y','á»²':'y','á»³':'y','Å¶':'y',
			'Å·':'y','Y':'y','áº™':'y','Å¸':'y','Ã¿':'y','á»¸':'y','á»¹':'y','áºŽ':'y','áº':'y','È²':'y','È³':'y','á»¶':'y','á»·':'y',
			'á»´':'y','á»µ':'y','Ê':'y','ÉŽ':'y','É':'y','Æ³':'y','Æ´':'y','Å¹':'z','Åº':'z','áº':'z','áº‘':'z','Å½':'z','Å¾':'z','Å»':'z',
			'Å¼':'z','áº’':'z','áº“':'z','áº”':'z','áº•':'z','Æµ':'z','Æ¶':'z','È¤':'z','È¥':'z','Ê':'z','Ê‘':'z','â±«':'z','â±¬':'z','Ç®':'z',
			'Ç¯':'z','Æº':'z','ï¼’':'2','ï¼–':'6','ï¼¢':'B','ï¼¦':'F','ï¼ª':'J','ï¼®':'N','ï¼²':'R','ï¼¶':'V','ï¼º':'Z','ï½‚':'b','ï½†':'f','ï½Š':'j',
			'ï½Ž':'n','ï½’':'r','ï½–':'v','ï½š':'z','ï¼‘':'1','ï¼•':'5','ï¼™':'9','ï¼¡':'A','ï¼¥':'E','ï¼©':'I','ï¼­':'M','ï¼±':'Q','ï¼µ':'U','ï¼¹':'Y',
			'ï½':'a','ï½…':'e','ï½‰':'i','ï½':'m','ï½‘':'q','ï½•':'u','ï½™':'y','ï¼':'0','ï¼”':'4','ï¼˜':'8','ï¼¤':'D','ï¼¨':'H','ï¼¬':'L','ï¼°':'P',
			'ï¼´':'T','ï¼¸':'X','ï½„':'d','ï½ˆ':'h','ï½Œ':'l','ï½':'p','ï½”':'t','ï½˜':'x','ï¼“':'3','ï¼—':'7','ï¼£':'C','ï¼§':'G','ï¼«':'K','ï¼¯':'O',
			'ï¼³':'S','ï¼·':'W','ï½ƒ':'c','ï½‡':'g','ï½‹':'k','ï½':'o','ï½“':'s','ï½—':'w','áº³':'a','Ã‚':'a','Ã¢':'a','áº¤':'a','áº¥':'a','áº¦':'a','áº§':'a'
		};

	if (window.getComputedStyle === undefined) {
		window.getComputedStyle = (function () {
			function getPixelSize(element, style, property, fontSize) {
				var	sizeWithSuffix = style[property],
					size = parseFloat(sizeWithSuffix),
					suffix = sizeWithSuffix.split(/\d/)[0],
					rootSize;

				fontSize = fontSize !== null ? fontSize : /%|em/.test(suffix) && element.parentElement ? getPixelSize(element.parentElement, element.parentElement.currentStyle, 'fontSize', null) : 16;
				rootSize = property === 'fontSize' ? fontSize : /width/i.test(property) ? element.clientWidth : element.clientHeight;

				return (suffix === 'em') ? size * fontSize : (suffix === 'in') ? size * 96 : (suffix === 'pt') ? size * 96 / 72 : (suffix === '%') ? size / 100 * rootSize : size;
			}

			function setShortStyleProperty(style, property) {
				var	borderSuffix = property === 'border' ? 'Width' : '',
					t = property + 'Top' + borderSuffix,
					r = property + 'Right' + borderSuffix,
					b = property + 'Bottom' + borderSuffix,
					l = property + 'Left' + borderSuffix;

				style[property] = (style[t] === style[r] === style[b] === style[l] ? [style[t]]
					: style[t] === style[b] && style[l] === style[r] ? [style[t], style[r]]
						: style[l] === style[r] ? [style[t], style[r], style[b]]
							: [style[t], style[r], style[b], style[l]]).join(' ');
			}

			function CSSStyleDeclaration(element) {
				var	currentStyle = element.currentStyle,
					style = this,
					property,
					fontSize = getPixelSize(element, currentStyle, 'fontSize', null);
				
				for (property in currentStyle) {
					if (Object.prototype.hasOwnProperty.call(currentStyle, property)) {
						if (/width|height|margin.|padding.|border.+W/.test(property) && style[property] !== 'auto') {
							style[property] = getPixelSize(element, currentStyle, property, fontSize) + 'px';
						} else if (property === 'styleFloat') {
							style.float = currentStyle[property];
						} else {
							style[property] = currentStyle[property];
						}
					}
				}

				setShortStyleProperty(style, 'margin');
				setShortStyleProperty(style, 'padding');
				setShortStyleProperty(style, 'border');

				style.fontSize = fontSize + 'px';

				return style;
			}

			CSSStyleDeclaration.prototype = {
				constructor: CSSStyleDeclaration,
				getPropertyPriority: function () {},
				getPropertyValue: function (prop) {
					return this[prop] || '';
				},
				item: function () {},
				removeProperty: function () {},
				setProperty: function () {},
				getPropertyCSSValue: function () {}
			};

			function getComputedStyle(element) {
				return new CSSStyleDeclaration(element);
			}

			return getComputedStyle;
		}(this));
	}


	$(document)
		.on('keydown.xdsoftctrl', function (e) {
			if (e.keyCode === CTRLKEY) {
				ctrlDown = true;
			}
			if (e.keyCode === SHIFTKEY) {
				ctrlDown = true;
			}
		})
		.on('keyup.xdsoftctrl', function (e) {
			if (e.keyCode === CTRLKEY) {
				ctrlDown = false;
			}
			if (e.keyCode === SHIFTKEY) {
				ctrlDown = false;
			}
		});
	
	function accentReplace (s) {
		if (!s) { return ''; }
		var ret = '',i;
		for (i=0; i < s.length; i+=1) {
			ret += accent_map[s.charAt(i)] || s.charAt(i);
		}
		return ret;
	}
	
	function escapeRegExp (str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	
	function getCaretPosition(input) {
		if (!input) {
			return;
		}
		if (input.selectionStart) {
			return input.selectionStart;
		}
		if (document.selection) {
			input.focus();
			var sel = document.selection.createRange(),
				selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			return sel.text.length - selLen;
		}
	}

	function setCaretPosition(input, pos) {
		if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(pos, pos);
		} else if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	}

	function isset(value) {
		return value !== undefined;
	}

	function safe_call(callback, args, callback2, defaultValue) {
		if (isset(callback) && !$.isArray(callback)) {
			return $.isFunction(callback) ? callback.apply(this,args):defaultValue;
		}
		if(isset(callback2)) {
			return safe_call.call(this,callback2,args);
		}
		return defaultValue;
	};

	function __safe( callbackName,source,args,defaultValue ){
		var undefinedVar;
		return safe_call.call( this, (isset(this.source[source])&&
			Object.prototype.hasOwnProperty.call(this.source[source], callbackName)) ? this.source[source][callbackName] : undefinedVar, args, function(){
			return safe_call.call(this,
					isset(this[callbackName][source])?
						this[callbackName][source]:(
							isset(this[callbackName][0])?
								this[callbackName][0]:(
									Object.prototype.hasOwnProperty.call(this, callbackName)?
										this[callbackName]:
										undefinedVar
								)
						),
					args,
					defaultSetting[callbackName][source]||defaultSetting[callbackName][0]||defaultSetting[callbackName],
					defaultValue
			);
		},defaultValue);
	};

	function __get( property,source ){
		if(!isset(source))
			source = 0;
		
		if( $.isArray(this.source) && isset(this.source[source]) && isset(this.source[source][property]))
			return this.source[source][property];
			
		if( isset(this[property]) ){
			if( $.isArray(this[property]) ){
				if( isset(this[property][source]) )
					return this[property][source];
				if( isset(this[property][0]) )
					return this[property][0];
				return null;
			}
			return this[property];
		}
		
		return null;
	};

	function loadRemote( url,sourceObject,done,debug ){
		 if (sourceObject.xhr) {
			sourceObject.xhr.abort();
		 }
		 sourceObject.xhr = $.ajax($.extend(true,{
			url : url,
			type  : 'GET' ,
			async:true,
			cache :false,
			dataType : 'json'
		 },sourceObject.ajax))
		 
		 .done(function( data ){
			done&&done.apply(this,$.makeArray(arguments));
		 })
		 
		 .fail(function( jqXHR, textStatus ){
			if( debug )
				console.log("Request failed: " + textStatus);
		 });
	}


	function findRight( data,query ){
		var right = false,source;
		
		for (source = 0;source < data.length;source += 1) {
			if( right = __safe.call(this,"findRight",source,[data[source],query,source]) ){
				return {right:right,source:source};
			}
		}
		
		return false;
	}

	function processData( data,query ){
		var source;
		preparseData
			.call( this,data,query );
		
		for (source = 0;source < data.length;source += 1) {
			data[source] = __safe.call(this,
				'filter',
				source,
				[data[source], query, source],
				data[source]
			);
		}
	};


	function collectData( query,datasource,callback ){
		var options = this,source;
		
		if( $.isFunction(options.source) ){
				options.source.apply(options,[query,function(items){
					datasource = [items];
					safe_call.call(options,callback,[query]);
				},datasource,0]);
		}else{
			for (source = 0;source < options.source.length;source += 1) {
				if ($.isArray(options.source[source])) {
					datasource[source] = options.source[source];
				} else if ($.isFunction(options.source[source])) {
					(function (source) {
						options.source[source].apply(options,[query, function(items){
							if (!datasource[source]) {
								datasource[source] = [];
							}
								
							if (items && $.isArray(items)) {
								switch (options.appendMethod) {
									case 'replace':
										datasource[source] = items;
									break;
									default:
										datasource[source] = datasource[source].concat(items);
								}
							}
								
							safe_call.call(options,callback,[query]);
						}, datasource,source]);
					}(source));
				} else {
					switch (options.source[source].type) {
						case 'remote':
							if (isset(options.source[source].url)) {
								if (!isset(options.source[source].minLength) || query.length >= options.source[source].minLength){
									var url = __safe.call(options,'replace',source,[options.source[source].url,query],'');
									if (!datasource[source]) {
										datasource[source] = [];
									}
									(function (source) {
										loadRemote(url,options.source[source], function(resp){
											datasource[source] = resp;
											safe_call.call(options,callback,[query]);
										},options.debug);
									}(source));
								}
							}
						break;
						default:
							if( isset(options.source[source]['data']) ){
								datasource[source] = options.source[source]['data'];
							}else{
								datasource[source] = options.source[source];
							}
					}
				}
			}
		}
		safe_call.call(options,callback,[query]);
	};

	function preparseData( data,query ){
		for( var source=0;source<data.length;source++ ){
			data[source] = __safe.call(this,
				'preparse',
				source,
				[data[source],query],
				data[source]
			);
		}
	};

	function renderData( data,query ){
		var  source, i, $div, $divs = [];
		
		for (source = 0;source < data.length;source += 1) {
			for (i = 0;i < data[source].length;i += 1) {
				if( $divs.length>=this.limit )
					break;
					
				$div = $(__safe.call(this,
					'render',source,
					[data[source][i],source,i,query],
					''
				));
				
				$div.data('source',source);
				$div.data('pid',i);
				$div.data('item',data[source][i]);
				
				$divs.push($div);
			}
		}
		
		return $divs;
	};

	function getItem( $div,dataset ){
		if( isset($div.data('source')) && 
			isset($div.data('pid')) && 
			isset(dataset[$div.data('source')]) && 
			isset(dataset[$div.data('source')][$div.data('pid')]) 
		){
			return dataset[$div.data('source')][$div.data('pid')];
		}
		return false;
	};

	function getValue( $div,dataset ){
		var item = getItem($div,dataset);
		
		if( item ){
			return __safe.call(this,
				'getValue',$div.data('source'),
				[item,$div.data('source')]
			);
		}else{
			if( isset($div.data('value')) ){
				return decodeURIComponent($div.data('value'));
			}else{
				return $div.html();
			}
		}
	};

	defaultSetting = {
		minLength: 0,
		valueKey: 'value',
		titleKey: 'title',
		highlight: true,

		showHint: true,

		dropdownWidth: '100%',
		dropdownStyle: {},
		itemStyle: {},
		hintStyle: false,
		style: false,

		debug: true,
		openOnFocus: false,
		closeOnBlur: true,

		autoselect: false,
		
		accents: true,
		replaceAccentsForRemote: true,
		
		limit: 20,
		visibleLimit: 20,
		visibleHeight: 0,
		defaultHeightItem: 30,

		timeoutUpdate: 10,

		get: function (property, source) {
			return __get.call(this,property,source);
		},
		
		replace: [
			function (url, query) {
				if (this.replaceAccentsForRemote) {
					query = accentReplace(query);
				}
				return url.replace('%QUERY%',encodeURIComponent(query));
			}
		],
		
		equal:function( value,query ){
			return query.toLowerCase()==value.substr(0,query.length).toLowerCase();
		},
		
		findRight:[
			function(items,query,source){
				var results = [],value = '',i;
				if (items) {
					for (i = 0;i < items.length;i += 1) {
						value = __safe.call(this,'getValue',source,[items[i],source]);
						if (__safe.call(this, 'equal', source, [value,query,source], false)) {
							return items[i];
						}
					}				
				}
				return false;
			}
		],
		
		valid:[
			function (value, query) {
				if (this.accents) {
					value = accentReplace(value);
					query = accentReplace(query);
				}
				return value.toLowerCase().indexOf(query.toLowerCase())!=-1;
				
			}
		],
		
		filter:[
			function (items, query, source) {
				var results = [], value = '',i;
				if (items) {					
					for (i = 0;i < items.length;i += 1) {
						value = isset(items[i][this.get('valueKey', source)]) ? items[i][this.get('valueKey', source)] : items[i].toString();
						if (__safe.call(this, 'valid', source, [value, query])) {
							results.push(items[i]); 
						}
					}
				}
				return results;
			}
		],
		
		preparse:function(items){
			return items;
		},
		
		getValue: [
			function (item, source) {
				return isset(item[this.get('valueKey',source)])?item[this.get('valueKey',source)]:item.toString();
			}
		],
		
		getTitle: [
			function (item, source) {
				return isset(item[this.get('titleKey',source)])?item[this.get('titleKey',source)]:item.toString();
			}
		],
		
		render: [
			function (item, source, pid, query) {
				var value = __safe.call(this, "getValue", source, [item, source], defaultSetting.getValue[0].call(this, item, source)),
					title = __safe.call(this, "getTitle", source, [item, source], defaultSetting.getTitle[0].call(this, item, source)),
					_value = '',
					_query = '',
					_title = '',
					hilite_hints = '',
					highlighted = '',
					c, h, i,
					spos = 0;
					
				if (this.highlight) {
					if (!this.accents) {
						title = title.replace(new RegExp('('+escapeRegExp(query)+')','i'),'<b>$1</b>');
					}else{
						_title = accentReplace(title).toLowerCase().replace(/[<>]+/g, ''),
						_query = accentReplace(query).toLowerCase().replace(/[<>]+/g, '');
						
						hilite_hints = _title.replace(new RegExp(escapeRegExp(_query), 'g'), '<'+_query+'>');
						for (i=0;i < hilite_hints.length;i += 1) {
							c = title.charAt(spos);
							h = hilite_hints.charAt(i);
							if (h === '<') {
								highlighted += '<b>';
							} else if (h === '>') {
								highlighted += '</b>';
							} else {
								spos += 1;
								highlighted += c;
							}
						}
						title = highlighted;
					}
				}
					
				return '<div '+(value==query?'class="active"':'')+' data-value="'+encodeURIComponent(value)+'">'
							+title+
						'</div>';
			}
		],
		appendMethod: 'concat', // supported merge and replace 
		source:[],
		afterSelected: function() {
        }
	};
	function init( that,options ){
		if( $(that).hasClass('xdsoft_input') )
				return;
		
		var $box = $('<div class="xdsoft_autocomplete"></div>'),
			$dropdown = $('<div class="xdsoft_autocomplete_dropdown"></div>'),
			$hint = $('<input readonly class="xdsoft_autocomplete_hint"/>'),
			$input = $(that),
			timer1 = 0,
			intervalForVisibility,
			dataset = [],
			iOpen	= false,
			value = '',
			currentValue = '',
			currentSelect = '',
			active = null,
			pos = 0;
		
		//it can be used to access settings
		$input.data('autocomplete_options', options);
		
		$dropdown
			.on('mousedown', function(e) {
				e.preventDefault();
				e.stopPropagation();
			})
			.on('updatescroll.xdsoft', function() {
				var _act = $dropdown.find('.active');
				if (!_act.length) {
					return;
				}
				
				var top = _act.position().top,
					actHght = _act.outerHeight(true),
					scrlTop = $dropdown.scrollTop(),
					hght = $dropdown.height();
					
				if (top <0) {
					$dropdown.scrollTop(scrlTop-Math.abs(top));
				} else if (top+actHght>hght) {
					$dropdown.scrollTop(scrlTop+top+actHght-hght);
				}
			});
		
		$box
			.css({
				'display':$input.css('display'),
				'width':$input.css('width')
			});
		
		if( options.style )
			$box.css(options.style);
			
		$input
			.addClass('xdsoft_input')
			.attr('autocomplete','off');
		
		var xDown = null;
		var yDown = null;
		var isSwipe = false;
		$dropdown
			.on('mousemove','div',function(){
				if( $(this).hasClass('active') )
					return true;
				$dropdown.find('div').removeClass('active');
				$(this).addClass('active');
			})
			.on('mousedown','div',function(e){
				$dropdown.find('div').removeClass('active');
				$(this).addClass('active');
				$input.trigger('pick.xdsoft');
			})
			.on('touchstart','div',function(e){
				xDown = e.originalEvent.touches[0].clientX;
				yDown = e.originalEvent.touches[0].clientY;
			})
			.on('touchend','div',function(e){
				if(isSwipe === false) {
					$dropdown.find('div').removeClass('active');
					$(this).addClass('active');
					$input.trigger('pick.xdsoft');
				}

				isSwipe = false;
			})
			.on('touchmove','div',function(e){
				if ( ! xDown || ! yDown ) {
					return;
				}

				var xUp = e.originalEvent.touches[0].clientX;
				var yUp = e.originalEvent.touches[0].clientY;

				var xDiff = xDown - xUp;
				var yDiff = yDown - yUp;

				if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
					if ( xDiff > 0 ) {
						isSwipe = 'left';
					} else {
						isSwipe = 'right';
					}
				} else {
					if ( yDiff > 0 ) {
						isSwipe = 'top';
					} else {
						isSwipe = 'bottm';
					}
				}

				xDown = null;
				yDown = null;
			});

		function manageData(){
			if ($input.val()!=currentValue){
				currentValue = $input.val();
			} else {
				return;
			}
			if (currentValue.length < options.minLength) {
				$input.trigger('close.xdsoft');
				return;
			}
			collectData.call(options,currentValue,dataset,function( query ){
				if (query != currentValue) {
					return;
				}
				var right;	
				processData.call(options, dataset,query);

				$input.trigger('updateContent.xdsoft');

				if (options.showHint && currentValue.length && currentValue.length<=$input.prop('size') && (right = findRight.call(options,dataset,currentValue))) {
					var title 	=  __safe.call(options,'getTitle',right.source,[right.right,right.source]);
					title = query + title.substr(query.length);
					$hint.val(title);
				} else {
					$hint.val('');
				}
			});

			return;
		}

		function manageKey (event) {
			var key = event.keyCode, right;
			
			switch( key ){
				case AKEY: case CKEY: case VKEY: case ZKEY: case YKEY:
					if (event.shiftKey || event.ctrlKey) {
						return true;
					}
				break;
				case SHIFTKEY:	
				case CTRLKEY:
					return true;
				break;
				case ARROWRIGHT:	
				case ARROWLEFT:
					if (ctrlDown || shiftDown || event.shiftKey || event.ctrlKey) {
						return true;
					}
					value = $input.val();
					pos = getCaretPosition($input[0]);
					if (key === ARROWRIGHT && pos === value.length) {
						if (right = findRight.call(options, dataset, value)){
							$input.trigger('pick.xdsoft', [
								__safe.call(options,
									'getValue', right.source,
									[right.right, right.source]
								)
							]);
						} else {
							$input.trigger('pick.xdsoft');
						}
						event.preventDefault();
						return false;
					}
					return true;
				case TAB:
				return true;
				case ENTER:
					if (iOpen) {
						if (options.autoselect) {
							$input.trigger('pick.xdsoft');
						} else if (!options.autoselect && active) {
							$input.trigger('pick.xdsoft');
						} else {
							$input.trigger('close.xdsoft');
							return true;
						}
						event.preventDefault();
						return false;
					} else {
						return true;
					}
				break;
				case ESC:
					$input
						.val(currentValue)
						.trigger('close.xdsoft');
					event.preventDefault();
					return false;
				case ARROWDOWN:
				case ARROWUP:
					if (!iOpen) {
						$input.trigger('open.xdsoft');
						$input.trigger('updateContent.xdsoft');
						event.preventDefault();
						return false;
					}
					
					active = $dropdown.find('div.active');
					
					var next = key==ARROWDOWN?'next':'prev', timepick = true;
					
					if( active.length ){
						active.removeClass('active');
						if( active[next]().length ){
							active[next]().addClass('active');
						}else{
							$input.val(currentValue);
							timepick = false;
						}
					}else{
						$dropdown.children().eq(key==ARROWDOWN?0:-1).addClass('active');
					}
					
					if( timepick ){
						$input.trigger('timepick.xdsoft');
					}
					
					$dropdown
						.trigger('updatescroll.xdsoft');
					
					event.preventDefault();
					return false;	
			}
			return;
		}
		
		$input
			.data('xdsoft_autocomplete',dataset)
			.after($box)
			.on('pick.xdsoft', function( event,_value ){

				$input.trigger('timepick.xdsoft',_value);
				
				currentSelect = currentValue = $input.val();
				
				$input.trigger('close.xdsoft');
				
				//currentInput = false;
				
				active = $dropdown.find('div.active').eq(0);
							
				if( !active.length )
					active = $dropdown.children().first();
					
				$input.trigger('selected.xdsoft',[getItem(active,dataset)]);
				
				if (options.afterSelected)
					options.afterSelected();
			})
			.on('timepick.xdsoft', function( event,_value ){
				active = $dropdown.find('div.active');
							
				if( !active.length )
					active = $dropdown.children().first();
				
				if( active.length ){
					if( !isset(_value) ){
						$input.val(getValue.call(options,active,dataset));
					}else{
						$input.val(_value);
					}
					$input.trigger('autocompleted.xdsoft',[getItem(active,dataset)]);
					$hint.val('');
					setCaretPosition($input[0],$input.val().length);
				}
			})
			.on('keydown.xdsoft input.xdsoft cut.xdsoft paste.xdsoft', function( event ){
				var ret = manageKey(event);
				
				if (ret === false || ret === true) {
					return ret;
				}
				
				setTimeout(function(){
					manageData();
				},1);
				
				manageData();
			})
			.on('change.xdsoft', function( event ){
				currentValue = $input.val();
			});
		
		currentValue = $input.val();
		
		collectData.call(options, $input.val(),dataset,function( query ){
			processData.call(options,dataset,query);
		});
		
		if( options.openOnFocus ){
			$input.on('focusin.xdsoft',function(){
				$input.trigger('open.xdsoft');
				$input.trigger('updateContent.xdsoft');
			});
		}
		
		if( options.closeOnBlur )
			$input.on('focusout.xdsoft',function(){
				$input.trigger('close.xdsoft');
			});
			
		$box
			.append($input)
			.append($dropdown);


		var olderBackground = false,
			timerUpdate = 0;
		
		$input
			.on('updateHelperPosition.xdsoft',function(){
				clearTimeout(timerUpdate);
				timerUpdate = setTimeout(function(){
					$box.css({
						'display':$input.css('display'),
						'width':$input.css('width')
					});
					$dropdown.css($.extend(true,{
						left:$input.position().left,
						top:$input.position().top + parseInt($input.css('marginTop'))+parseInt($input[0].offsetHeight),
						marginLeft:$input.css('marginLeft'),
						marginRight:$input.css('marginRight'),
						width:options.dropdownWidth=='100%'?$input[0].offsetWidth:options.dropdownWidth
					},options.dropdownStyle));
					
					if (options.showHint) {
						var style = getComputedStyle($input[0], "");
						
						$hint[0].style.cssText = style.cssText;
						
						$hint.css({
							'box-sizing':style.boxSizing,
							borderStyle:'solid',
							borderCollapse:style.borderCollapse,
							borderLeftWidth:style.borderLeftWidth,
							borderRightWidth:style.borderRightWidth,
							borderTopWidth:style.borderTopWidth,
							borderBottomWidth:style.borderBottomWidth,
							paddingBottom:style.paddingBottom,
							marginBottom:style.marginBottom,
							paddingTop:style.paddingTop,
							marginTop:style.marginTop,
							paddingLeft:style.paddingLeft,
							marginLeft:style.marginLeft,
							paddingRight:style.paddingRight,
							marginRight:style.marginRight,
							maxHeight:style.maxHeight,
							minHeight:style.minHeight,
							maxWidth:style.maxWidth,
							minWidth:style.minWidth,
							width:style.width,
							letterSpacing:style.letterSpacing,
							lineHeight:style.lineHeight,
							outlineWidth:style.outlineWidth,
							fontFamily:style.fontFamily,
							fontVariant:style.fontVariant,
							fontStyle:$input.css('fontStyle'),
							fontSize:$input.css('fontSize'),
							fontWeight:$input.css('fontWeight'),
							flex:style.flex,
							justifyContent:style.justifyContent,
							borderRadius:style.borderRadius,
							'-webkit-box-shadow':'none',
							'box-shadow':'none'
						});
						
						$input.css('font-size',$input.css('fontSize'))// fix bug with em font size
						
						$hint.innerHeight($input.innerHeight());
						
						$hint.css($.extend(true,{
							position:'absolute',
							zIndex:'1',
							borderColor:'transparent',
							outlineColor:'transparent',
							left:$input.position().left,
							top:$input.position().top,
							background:$input.css('background')
						},options.hintStyle));
						
// This code is not needed because we are already setting $hint in upper line						
// 						if( olderBackground !== false ){
// 							$hint.css('background',olderBackground);
// 						} else {
// 							olderBackground = $input.css('background');
// 						}
						
						try{
							$input[0].style.setProperty('background', 'transparent', 'important');
						} catch(e) {
							$input.css('background','transparent')
						}

						$box
							.append($hint);
					}
				}, options.timeoutUpdate||1);
			});
		
		if ($input.is(':visible')) {
			$input
				.trigger('updateHelperPosition.xdsoft');
		} else {
			intervalForVisibility = setInterval(function () {
				if ($input.is(':visible')) {
					$input
						.trigger('updateHelperPosition.xdsoft');
					clearInterval(intervalForVisibility);
				}
			},100);
		}
		
		$(window).on('resize',function () {
			$box.css({
				'width':'auto'
			});
			$input
				.trigger('updateHelperPosition.xdsoft');
		})
		
		$input	
			.on('close.xdsoft',function(){
				if (!iOpen) {
					return;
				}

				$dropdown
					.hide();

				$hint
					.val('');	

				if (!options.autoselect) {
					$input.val(currentValue);
				}

				iOpen = false;

				//currentInput = false;
			})
			
			.on('updateContent.xdsoft',function(){
				var out = renderData.call(options,dataset,$input.val()),
					hght = 10;
				
				if (out.length) {
					$input.trigger('open.xdsoft');
				} else {
					$input.trigger('close.xdsoft');
					return;
				}

				$(out).each(function(){
					this.css($.extend(true,{
						paddingLeft:$input.css('paddingLeft'),
						paddingRight:$input.css('paddingRight')
					},options.itemStyle));
				});

				$dropdown
					.html(out);
					
				if (options.visibleHeight){
					hght = options.visibleHeight;
				} else {
					hght = options.visibleLimit * ((out[0] ? out[0].outerHeight(true) : 0) || options.defaultHeightItem) + 5;
				}
				
				$dropdown
					.css('maxHeight', hght+'px')
			})
			
			.on('open.xdsoft',function(){
				if( iOpen )
					return;
				
				$dropdown
					.show();

				iOpen = true;
					
				//currentInput = $input;
			})
			.on('destroy.xdsoft',function(){
				$input.removeClass('xdsoft');
				$box.after($input);
				$box.remove();
				clearTimeout(timer1);
				clearTimeout(intervalForVisibility);
				//currentInput = false;
				$input.data('xdsoft_autocomplete',null);
				$input
					.off('.xdsoft')
			});
	};
	
	publics = {
		destroy: function () {
			return this.trigger('destroy.xdsoft');
		},
		update: function () {
			return this.trigger('updateHelperPosition.xdsoft');	
		},
		options: function (_options) {
			if (this.data('autocomplete_options') && $.isPlainObject(_options)) {
				this.data('autocomplete_options', $.extend(true, this.data('autocomplete_options'), _options));
			}
			return this;
		},
		setSource: function (_newsource, id) {
			if(this.data('autocomplete_options') && ($.isPlainObject(_newsource) || $.isFunction(_newsource) || $.isArray(_newsource))) {
				var options = this.data('autocomplete_options'), 
					dataset = this.data('xdsoft_autocomplete'),
					source 	= options.source;
				if (id!==undefined && !isNaN(id)) {
					if ($.isPlainObject(_newsource) || $.isArray(_newsource)) {
						source[id] =  $.extend(true,$.isArray(_newsource) ? [] : {}, _newsource);
					} else {
						source[id] =  _newsource;
					}
				} else {
					if ($.isFunction(_newsource)) {
						this.data('autocomplete_options').source = _newsource;
					} else {
						$.extend(true, source, _newsource);
					}
				}
				
				collectData.call(options, this.val(), dataset,function( query ){
					processData.call(options,dataset,query);
				});
			}
			return this;
		},
		getSource: function (id) {
			if (this.data('autocomplete_options')) {
				var source = this.data('autocomplete_options').source;
				if (id!==undefined && !isNaN(id) &&source[id]) {
					return source[id];
				} else {
					return source;
				}
			}
			return null;
		} 
	};
	
	$.fn.autocomplete = function(_options, _second, _third){
		if ($.type(_options) === 'string' && publics[_options]) {
			return publics[_options].call(this, _second, _third);
		}
		return this.each(function () {
			var options = $.extend(true, {}, defaultSetting, _options);
			init(this, options);
		});
	};
}(jQuery));
