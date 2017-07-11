/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return M={width:n,height:n}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=c(t).replace(o," ");g(t,i)}}function p(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&u(t,o)&&d(t,o)}),e.forEach(function(e){u(t,e)||p(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function C(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=n(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:p,removeClass:d,hasClass:u,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),j=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,p=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=F[e.left]),"auto"===i&&(i=H[e.top]),{left:o,top:i}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),i=o[0],n=o[1];return{top:i,left:n}},q=R,I=function(t){function e(t){var o=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(i,t);var n=this.options,s=n.element,a=n.target,f=n.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),p(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&p(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;n&&(r=15);var s=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;s<408&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return a(t.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=C(V(this.attachment),{width:n,height:r}),u=C(V(o),d),c=C(this.offset,{width:n,height:r}),g=C(this.targetOffset,d);p=w(p,c),u=w(u,g);for(var m=h.left+u.left-p.left,v=h.top+u.top-p.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-n.width+r.right,o.bottom=A.body.scrollHeight-o.top-n.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[i]&&!y(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==i&&k(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var n in l){var v=l[n],b=this.element.style[n];b!==v&&(m=!0,g[n]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,u=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},n),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);"target"!==d&&"both"!==d||(o<b[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=p,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-p)>=b[1]&&(o-=s-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=p,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-p)<=b[3]&&(o+=s-p,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),"target"!==h&&"both"!==h||(i<b[0]&&"left"===v.left&&(i+=u,v.left="right"),i+f>b[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===h&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=u,v.left="right",i+=f,y.left="left"):"left"===y.left&&(i+=u,v.left="right",i-=f,y.left="right"):i+f>b[2]&&"right"===v.left?"left"===y.left?(i-=u,v.left="left",i-=f,y.left="right"):"right"===y.left&&(i-=u,v.left="left",i+=f,y.left="left"):"center"===v.left&&(i+f>b[2]&&"left"===y.left?(i-=f,y.left="right"):i<b[0]&&"right"===y.left&&(i+=f,y.left="left"))),"element"!==d&&"both"!==d||(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),"element"!==h&&"both"!==h||(i<b[0]&&("right"===y.left?(i+=f,y.left="left"):"center"===y.left&&(i+=f/2,y.left="left")),i+f>b[2]&&("left"===y.left?(i-=f,y.left="right"):"center"===y.left&&(i-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),i<b[0]&&(l.indexOf("left")>=0?(i=b[0],w.push("left")):C.push("left")),i+f>b[2]&&(l.indexOf("right")>=0?(i=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===n.top&&v.left===n.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:i}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return a(e.element)}),r=n.height,s=n.width,f=this.getTargetBounds(),l=o+r,h=i+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],u=[],c=["left","top","right","bottom"];return p.push(this.getClass("abutted")),c.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&u.push(this.getClass("abutted")),d.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,u,p),m(e.element,u,p)}),!0}});var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=z(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),$});
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");+function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),+function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:a.end,delegateType:a.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in h)if(void 0!==t.style[e])return{end:h[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(c.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||c.triggerTransitionEnd(n)},e),this}function s(){a=o(),t.fn.emulateTransitionEnd=r,c.supportsTransitionEnd()&&(t.event.special[c.TRANSITION_END]=i())}var a=!1,l=1e6,h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do t+=~~(Math.random()*l);while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href")||"",e=/^#[a-z]/i.test(e)?e:null),e},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(a.end)},supportsTransitionEnd:function(){return Boolean(a)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+": "+('Option "'+r+'" provided type "'+l+'" ')+('but expected type "'+s+'".'))}}};return s(),c}(jQuery),s=(function(t){var e="alert",i="4.0.0-alpha.6",s="bs.alert",a="."+s,l=".data-api",h=t.fn[e],c=150,u={DISMISS:'[data-dismiss="alert"]'},d={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+l},f={ALERT:"alert",FADE:"fade",SHOW:"show"},_=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t),n=this._triggerCloseEvent(e);n.isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,s),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+f.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(d.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;return t(e).removeClass(f.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(f.FADE)?void t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(c):void this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(d.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data(s);o||(o=new e(this),i.data(s,o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(d.CLICK_DATA_API,u.DISMISS,_._handleDismiss(new _)),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=h,_._jQueryInterface},_}(jQuery),function(t){var e="button",i="4.0.0-alpha.6",r="bs.button",s="."+r,a=".data-api",l=t.fn[e],h={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},c={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},u={CLICK_DATA_API:"click"+s+a,FOCUS_BLUR_DATA_API:"focus"+s+a+" "+("blur"+s+a)},d=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=t(this._element).closest(c.DATA_TOGGLE)[0];if(n){var i=t(this._element).find(c.INPUT)[0];if(i){if("radio"===i.type)if(i.checked&&t(this._element).hasClass(h.ACTIVE))e=!1;else{var o=t(n).find(c.ACTIVE)[0];o&&t(o).removeClass(h.ACTIVE)}e&&(i.checked=!t(this._element).hasClass(h.ACTIVE),t(i).trigger("change")),i.focus()}}this._element.setAttribute("aria-pressed",!t(this._element).hasClass(h.ACTIVE)),e&&t(this._element).toggleClass(h.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,r),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(r);i||(i=new e(this),t(this).data(r,i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(u.CLICK_DATA_API,c.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(h.BUTTON)||(n=t(n).closest(c.BUTTON)),d._jQueryInterface.call(t(n),"toggle")}).on(u.FOCUS_BLUR_DATA_API,c.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(c.BUTTON)[0];t(n).toggleClass(h.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=d._jQueryInterface,t.fn[e].Constructor=d,t.fn[e].noConflict=function(){return t.fn[e]=l,d._jQueryInterface},d}(jQuery),function(t){var e="carousel",s="4.0.0-alpha.6",a="bs.carousel",l="."+a,h=".data-api",c=t.fn[e],u=600,d=37,f=39,_={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},g={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},p={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},m={SLIDE:"slide"+l,SLID:"slid"+l,KEYDOWN:"keydown"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l,LOAD_DATA_API:"load"+l+h,CLICK_DATA_API:"click"+l+h},E={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},v={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},T=function(){function h(e,i){n(this,h),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(v.INDICATORS)[0],this._addEventListeners()}return h.prototype.next=function(){if(this._isSliding)throw new Error("Carousel is sliding");this._slide(p.NEXT)},h.prototype.nextWhenVisible=function(){document.hidden||this.next()},h.prototype.prev=function(){if(this._isSliding)throw new Error("Carousel is sliding");this._slide(p.PREVIOUS)},h.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(v.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},h.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},h.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(v.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0)){if(this._isSliding)return void t(this._element).one(m.SLID,function(){return n.to(e)});if(i===e)return this.pause(),void this.cycle();var o=e>i?p.NEXT:p.PREVIOUS;this._slide(o,this._items[e])}},h.prototype.dispose=function(){t(this._element).off(l),t.removeData(this._element,a),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},h.prototype._getConfig=function(n){return n=t.extend({},_,n),r.typeCheckConfig(e,n,g),n},h.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(m.KEYDOWN,function(t){return e._keydown(t)}),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||t(this._element).on(m.MOUSEENTER,function(t){return e.pause(t)}).on(m.MOUSELEAVE,function(t){return e.cycle(t)})},h.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case d:t.preventDefault(),this.prev();break;case f:t.preventDefault(),this.next();break;default:return}},h.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(v.ITEM)),this._items.indexOf(e)},h.prototype._getItemByDirection=function(t,e){var n=t===p.NEXT,i=t===p.PREVIOUS,o=this._getItemIndex(e),r=this._items.length-1,s=i&&0===o||n&&o===r;if(s&&!this._config.wrap)return e;var a=t===p.PREVIOUS?-1:1,l=(o+a)%this._items.length;return l===-1?this._items[this._items.length-1]:this._items[l]},h.prototype._triggerSlideEvent=function(e,n){var i=t.Event(m.SLIDE,{relatedTarget:e,direction:n});return t(this._element).trigger(i),i},h.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(E.ACTIVE)}},h.prototype._slide=function(e,n){var i=this,o=t(this._element).find(v.ACTIVE_ITEM)[0],s=n||o&&this._getItemByDirection(e,o),a=Boolean(this._interval),l=void 0,h=void 0,c=void 0;if(e===p.NEXT?(l=E.LEFT,h=E.NEXT,c=p.LEFT):(l=E.RIGHT,h=E.PREV,c=p.RIGHT),s&&t(s).hasClass(E.ACTIVE))return void(this._isSliding=!1);var d=this._triggerSlideEvent(s,c);if(!d.isDefaultPrevented()&&o&&s){this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s);var f=t.Event(m.SLID,{relatedTarget:s,direction:c});r.supportsTransitionEnd()&&t(this._element).hasClass(E.SLIDE)?(t(s).addClass(h),r.reflow(s),t(o).addClass(l),t(s).addClass(l),t(o).one(r.TRANSITION_END,function(){t(s).removeClass(l+" "+h).addClass(E.ACTIVE),t(o).removeClass(E.ACTIVE+" "+h+" "+l),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(f)},0)}).emulateTransitionEnd(u)):(t(o).removeClass(E.ACTIVE),t(s).addClass(E.ACTIVE),this._isSliding=!1,t(this._element).trigger(f)),a&&this.cycle()}},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o=t.extend({},_,t(this).data());"object"===("undefined"==typeof e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new h(this,o),t(this).data(a,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},h._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(E.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),h._jQueryInterface.call(t(i),o),s&&t(i).data(a).to(s),e.preventDefault()}}},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return _}}]),h}();return t(document).on(m.CLICK_DATA_API,v.DATA_SLIDE,T._dataApiClickHandler),t(window).on(m.LOAD_DATA_API,function(){t(v.DATA_RIDE).each(function(){var e=t(this);T._jQueryInterface.call(e,e.data())})}),t.fn[e]=T._jQueryInterface,t.fn[e].Constructor=T,t.fn[e].noConflict=function(){return t.fn[e]=c,T._jQueryInterface},T}(jQuery),function(t){var e="collapse",s="4.0.0-alpha.6",a="bs.collapse",l="."+a,h=".data-api",c=t.fn[e],u=600,d={toggle:!0,parent:""},f={toggle:"boolean",parent:"string"},_={SHOW:"show"+l,SHOWN:"shown"+l,HIDE:"hide"+l,HIDDEN:"hidden"+l,CLICK_DATA_API:"click"+l+h},g={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},m={ACTIVES:".card > .show, .card > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},E=function(){function l(e,i){n(this,l),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],'+('[data-toggle="collapse"][data-target="#'+e.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return l.prototype.toggle=function(){t(this._element).hasClass(g.SHOW)?this.hide():this.show()},l.prototype.show=function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(!t(this._element).hasClass(g.SHOW)){var n=void 0,i=void 0;if(this._parent&&(n=t.makeArray(t(this._parent).find(m.ACTIVES)),n.length||(n=null)),!(n&&(i=t(n).data(a),i&&i._isTransitioning))){var o=t.Event(_.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(l._jQueryInterface.call(t(n),"hide"),i||t(n).data(a,null));var s=this._getDimension();t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING),this._element.style[s]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW),e._element.style[s]="",e.setTransitioning(!1),t(e._element).trigger(_.SHOWN)};if(!r.supportsTransitionEnd())return void h();var c=s[0].toUpperCase()+s.slice(1),d="scroll"+c;t(this._element).one(r.TRANSITION_END,h).emulateTransitionEnd(u),this._element.style[s]=this._element[d]+"px"}}}},l.prototype.hide=function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(t(this._element).hasClass(g.SHOW)){var n=t.Event(_.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension(),o=i===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[i]=this._element[o]+"px",r.reflow(this._element),t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var s=function(){e.setTransitioning(!1),t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)};return this._element.style[i]="",r.supportsTransitionEnd()?void t(this._element).one(r.TRANSITION_END,s).emulateTransitionEnd(u):void s()}}},l.prototype.setTransitioning=function(t){this._isTransitioning=t},l.prototype.dispose=function(){t.removeData(this._element,a),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},l.prototype._getConfig=function(n){return n=t.extend({},d,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,f),n},l.prototype._getDimension=function(){var e=t(this._element).hasClass(p.WIDTH);return e?p.WIDTH:p.HEIGHT},l.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(l._getTargetFromElement(n),[n])}),n},l.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(g.SHOW);e.setAttribute("aria-expanded",i),n.length&&t(n).toggleClass(g.COLLAPSED,!i).attr("aria-expanded",i)}},l._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},l._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(a),r=t.extend({},d,n.data(),"object"===("undefined"==typeof e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new l(this,r),n.data(a,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(l,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return d}}]),l}();return t(document).on(_.CLICK_DATA_API,m.DATA_TOGGLE,function(e){e.preventDefault();var n=E._getTargetFromElement(this),i=t(n).data(a),o=i?"toggle":t(this).data();E._jQueryInterface.call(t(n),o)}),t.fn[e]=E._jQueryInterface,t.fn[e].Constructor=E,t.fn[e].noConflict=function(){return t.fn[e]=c,E._jQueryInterface},E}(jQuery),function(t){var e="dropdown",i="4.0.0-alpha.6",s="bs.dropdown",a="."+s,l=".data-api",h=t.fn[e],c=27,u=38,d=40,f=3,_={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+l,FOCUSIN_DATA_API:"focusin"+a+l,KEYDOWN_DATA_API:"keydown"+a+l},g={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",SHOW:"show"},p={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},m=function(){function e(t){n(this,e),this._element=t,this._addEventListeners()}return e.prototype.toggle=function(){if(this.disabled||t(this).hasClass(g.DISABLED))return!1;var n=e._getParentFromElement(this),i=t(n).hasClass(g.SHOW);if(e._clearMenus(),i)return!1;if("ontouchstart"in document.documentElement&&!t(n).closest(p.NAVBAR_NAV).length){var o=document.createElement("div");o.className=g.BACKDROP,t(o).insertBefore(this),t(o).on("click",e._clearMenus)}var r={relatedTarget:this},s=t.Event(_.SHOW,r);return t(n).trigger(s),!s.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded",!0),t(n).toggleClass(g.SHOW),t(n).trigger(t.Event(_.SHOWN,r)),!1)},e.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null},e.prototype._addEventListeners=function(){t(this._element).on(_.CLICK,this.toggle)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(s);if(i||(i=new e(this),t(this).data(s,i)),"string"==typeof n){if(void 0===i[n])throw new Error('No method named "'+n+'"');i[n].call(this)}})},e._clearMenus=function(n){if(!n||n.which!==f){var i=t(p.BACKDROP)[0];i&&i.parentNode.removeChild(i);for(var o=t.makeArray(t(p.DATA_TOGGLE)),r=0;r<o.length;r++){var s=e._getParentFromElement(o[r]),a={relatedTarget:o[r]};if(t(s).hasClass(g.SHOW)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"focusin"===n.type)&&t.contains(s,n.target))){var l=t.Event(_.HIDE,a);t(s).trigger(l),l.isDefaultPrevented()||(o[r].setAttribute("aria-expanded","false"),t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN,a)))}}}},e._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},e._dataApiKeydownHandler=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(g.DISABLED))){var i=e._getParentFromElement(this),o=t(i).hasClass(g.SHOW);if(!o&&n.which!==c||o&&n.which===c){if(n.which===c){var r=t(i).find(p.DATA_TOGGLE)[0];t(r).trigger("focus")}return void t(this).trigger("click")}var s=t(i).find(p.VISIBLE_ITEMS).get();if(s.length){var a=s.indexOf(n.target);n.which===u&&a>0&&a--,n.which===d&&a<s.length-1&&a++,a<0&&(a=0),s[a].focus()}}},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(_.KEYDOWN_DATA_API,p.DATA_TOGGLE,m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API,p.ROLE_MENU,m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API,p.ROLE_LISTBOX,m._dataApiKeydownHandler).on(_.CLICK_DATA_API+" "+_.FOCUSIN_DATA_API,m._clearMenus).on(_.CLICK_DATA_API,p.DATA_TOGGLE,m.prototype.toggle).on(_.CLICK_DATA_API,p.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=h,m._jQueryInterface},m}(jQuery),function(t){var e="modal",s="4.0.0-alpha.6",a="bs.modal",l="."+a,h=".data-api",c=t.fn[e],u=300,d=150,f=27,_={backdrop:!0,keyboard:!0,focus:!0,show:!0},g={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,FOCUSIN:"focusin"+l,RESIZE:"resize"+l,CLICK_DISMISS:"click.dismiss"+l,KEYDOWN_DISMISS:"keydown.dismiss"+l,MOUSEUP_DISMISS:"mouseup.dismiss"+l,MOUSEDOWN_DISMISS:"mousedown.dismiss"+l,CLICK_DATA_API:"click"+l+h},m={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},E={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"},v=function(){function h(e,i){n(this,h),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(E.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return h.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},h.prototype.show=function(e){var n=this;if(this._isTransitioning)throw new Error("Modal is transitioning");r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE)&&(this._isTransitioning=!0);var i=t.Event(p.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(m.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(p.CLICK_DISMISS,E.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){t(n._element).one(p.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))},h.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isTransitioning)throw new Error("Modal is transitioning");var i=r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE);i&&(this._isTransitioning=!0);var o=t.Event(p.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(p.FOCUSIN),t(this._element).removeClass(m.SHOW),t(this._element).off(p.CLICK_DISMISS),t(this._dialog).off(p.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(u):this._hideModal())},h.prototype.dispose=function(){t.removeData(this._element,a),t(window,document,this._element,this._backdrop).off(l),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null},h.prototype._getConfig=function(n){return n=t.extend({},_,n),r.typeCheckConfig(e,n,g),n},h.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(m.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(p.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(u):s()},h.prototype._enforceFocus=function(){var e=this;t(document).off(p.FOCUSIN).on(p.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},h.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(p.KEYDOWN_DISMISS,function(t){t.which===f&&e.hide()}):this._isShown||t(this._element).off(p.KEYDOWN_DISMISS)},h.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(p.RESIZE,function(t){return e._handleUpdate(t)}):t(window).off(p.RESIZE)},h.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(m.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(p.HIDDEN)})},h.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},h.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(m.FADE)?m.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=m.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(p.CLICK_DISMISS,function(t){return n._ignoreBackdropClick?void(n._ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide()))}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(m.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(d)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(m.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(d):s()}else e&&e()},h.prototype._handleUpdate=function(){this._adjustDialog()},h.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},h.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},h.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},h.prototype._setScrollbar=function(){var e=parseInt(t(E.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=e+this._scrollbarWidth+"px")},h.prototype._resetScrollbar=function(){document.body.style.paddingRight=this._originalBodyPadding},h.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=m.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},h._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data(a),r=t.extend({},h.Default,t(this).data(),"object"===("undefined"==typeof e?"undefined":i(e))&&e);if(o||(o=new h(this,r),t(this).data(a,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return _}}]),h}();return t(document).on(p.CLICK_DATA_API,E.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data(a)?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(p.SHOW,function(e){e.isDefaultPrevented()||l.one(p.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});v._jQueryInterface.call(t(i),s,this)}),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=c,v._jQueryInterface},v}(jQuery),function(t){var e="scrollspy",s="4.0.0-alpha.6",a="bs.scrollspy",l="."+a,h=".data-api",c=t.fn[e],u={offset:10,method:"auto",target:""},d={offset:"number",method:"string",target:"(string|element)"},f={ACTIVATE:"activate"+l,SCROLL:"scroll"+l,LOAD_DATA_API:"load"+l+h},_={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},g={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},m=function(){function h(e,i){var o=this;n(this,h),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+g.NAV_LINKS+","+(this._config.target+" "+g.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(f.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return h.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var s=t.makeArray(t(this._selector));s.map(function(e){var n=void 0,s=r.getSelectorFromElement(e);return s&&(n=t(s)[0]),n&&(n.offsetWidth||n.offsetHeight)?[t(n)[i]().top+o,s]:null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},h.prototype.dispose=function(){t.removeData(this._element,a),t(this._scrollElement).off(l),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h.prototype._getConfig=function(n){if(n=t.extend({},u,n),"string"!=typeof n.target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,d),n},h.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},h.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.offsetHeight},h.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];return void(this._activeTarget!==i&&this._activate(i))}if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){var r=this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1]);r&&this._activate(this._targets[o])}},h.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+(t+'[href="'+e+'"]')});var i=t(n.join(","));i.hasClass(_.DROPDOWN_ITEM)?(i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE),i.addClass(_.ACTIVE)):i.parents(g.LI).find("> "+g.NAV_LINKS).addClass(_.ACTIVE),t(this._scrollElement).trigger(f.ACTIVATE,{relatedTarget:e})},h.prototype._clear=function(){t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o="object"===("undefined"==typeof e?"undefined":i(e))&&e;
if(n||(n=new h(this,o),t(this).data(a,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return u}}]),h}();return t(window).on(f.LOAD_DATA_API,function(){for(var e=t.makeArray(t(g.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=c,m._jQueryInterface},m}(jQuery),function(t){var e="tab",i="4.0.0-alpha.6",s="bs.tab",a="."+s,l=".data-api",h=t.fn[e],c=150,u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK_DATA_API:"click"+a+l},d={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},f={A:"a",LI:"li",DROPDOWN:".dropdown",LIST:"ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},_=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(d.ACTIVE)||t(this._element).hasClass(d.DISABLED))){var n=void 0,i=void 0,o=t(this._element).closest(f.LIST)[0],s=r.getSelectorFromElement(this._element);o&&(i=t.makeArray(t(o).find(f.ACTIVE)),i=i[i.length-1]);var a=t.Event(u.HIDE,{relatedTarget:this._element}),l=t.Event(u.SHOW,{relatedTarget:i});if(i&&t(i).trigger(a),t(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=t(s)[0]),this._activate(this._element,o);var h=function(){var n=t.Event(u.HIDDEN,{relatedTarget:e._element}),o=t.Event(u.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},e.prototype.dispose=function(){t.removeClass(this._element,s),this._element=null},e.prototype._activate=function(e,n,i){var o=this,s=t(n).find(f.ACTIVE_CHILD)[0],a=i&&r.supportsTransitionEnd()&&(s&&t(s).hasClass(d.FADE)||Boolean(t(n).find(f.FADE_CHILD)[0])),l=function(){return o._transitionComplete(e,s,a,i)};s&&a?t(s).one(r.TRANSITION_END,l).emulateTransitionEnd(c):l(),s&&t(s).removeClass(d.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(d.ACTIVE);var s=t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];s&&t(s).removeClass(d.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(d.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(d.SHOW)):t(e).removeClass(d.FADE),e.parentNode&&t(e.parentNode).hasClass(d.DROPDOWN_MENU)){var a=t(e).closest(f.DROPDOWN)[0];a&&t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data(s);if(o||(o=new e(this),i.data(s,o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(u.CLICK_DATA_API,f.DATA_TOGGLE,function(e){e.preventDefault(),_._jQueryInterface.call(t(this),"show")}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=h,_._jQueryInterface},_}(jQuery),function(t){if("undefined"==typeof Tether)throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e="tooltip",s="4.0.0-alpha.6",a="bs.tooltip",l="."+a,h=t.fn[e],c=150,u="bs-tether",d={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[],container:!1},f={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array",container:"(string|element|boolean)"},_={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},g={SHOW:"show",OUT:"out"},p={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},m={FADE:"fade",SHOW:"show"},E={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},v={element:!1,enabled:!1},T={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},I=function(){function h(t,e){n(this,h),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._isTransitioning=!1,this._tether=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return h.prototype.enable=function(){this._isEnabled=!0},h.prototype.disable=function(){this._isEnabled=!1},h.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},h.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(m.SHOW))return void this._leave(null,this);this._enter(null,this)}},h.prototype.dispose=function(){clearTimeout(this._timeout),this.cleanupTether(),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null},h.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){if(this._isTransitioning)throw new Error("Tooltip is transitioning");t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(m.FADE);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,l=this._getAttachment(a),c=this.config.container===!1?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:l,element:o,target:this.element,classes:v,classPrefix:u,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),r.reflow(o),this._tether.position(),t(o).addClass(m.SHOW);var d=function(){var n=e._hoverState;e._hoverState=null,e._isTransitioning=!1,t(e.element).trigger(e.constructor.Event.SHOWN),n===g.OUT&&e._leave(null,e)};if(r.supportsTransitionEnd()&&t(this.tip).hasClass(m.FADE))return this._isTransitioning=!0,void t(this.tip).one(r.TRANSITION_END,d).emulateTransitionEnd(h._TRANSITION_DURATION);d()}},h.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE);if(this._isTransitioning)throw new Error("Tooltip is transitioning");var s=function(){n._hoverState!==g.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),n._isTransitioning=!1,n.cleanupTether(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(m.SHOW),this._activeTrigger[T.CLICK]=!1,this._activeTrigger[T.FOCUS]=!1,this._activeTrigger[T.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(m.FADE)?(this._isTransitioning=!0,t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(c)):s(),this._hoverState="")},h.prototype.isWithContent=function(){return Boolean(this.getTitle())},h.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},h.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(E.TOOLTIP_INNER),this.getTitle()),e.removeClass(m.FADE+" "+m.SHOW),this.cleanupTether()},h.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===("undefined"==typeof n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},h.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},h.prototype.cleanupTether=function(){this._tether&&this._tether.destroy()},h.prototype._getAttachment=function(t){return _[t.toUpperCase()]},h.prototype._setListeners=function(){var e=this,n=this.config.trigger.split(" ");n.forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==T.MANUAL){var i=n===T.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===T.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},h.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},h.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;return n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T.FOCUS:T.HOVER]=!0),t(n.getTipElement()).hasClass(m.SHOW)||n._hoverState===g.SHOW?void(n._hoverState=g.SHOW):(clearTimeout(n._timeout),n._hoverState=g.SHOW,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===g.SHOW&&n.show()},n.config.delay.show)):void n.show())},h.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;if(n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T.FOCUS:T.HOVER]=!1),!n._isWithActiveTrigger())return clearTimeout(n._timeout),n._hoverState=g.OUT,n.config.delay&&n.config.delay.hide?void(n._timeout=setTimeout(function(){n._hoverState===g.OUT&&n.hide()},n.config.delay.hide)):void n.hide()},h.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},h.prototype._getConfig=function(n){return n=t.extend({},this.constructor.Default,t(this.element).data(),n),n.delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},h.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o="object"===("undefined"==typeof e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new h(this,o),t(this).data(a,n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return d}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return a}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return f}}]),h}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=h,I._jQueryInterface},I}(jQuery));(function(r){var a="popover",l="4.0.0-alpha.6",h="bs.popover",c="."+h,u=r.fn[a],d=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),f=r.extend({},s.DefaultType,{content:"(string|element|function)"}),_={FADE:"fade",SHOW:"show"},g={TITLE:".popover-title",CONTENT:".popover-content"},p={HIDE:"hide"+c,HIDDEN:"hidden"+c,SHOW:"show"+c,SHOWN:"shown"+c,INSERTED:"inserted"+c,CLICK:"click"+c,FOCUSIN:"focusin"+c,FOCUSOUT:"focusout"+c,MOUSEENTER:"mouseenter"+c,MOUSELEAVE:"mouseleave"+c},m=function(s){function u(){return n(this,u),t(this,s.apply(this,arguments))}return e(u,s),u.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},u.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},u.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(g.TITLE),this.getTitle()),this.setElementContent(t.find(g.CONTENT),this._getContent()),t.removeClass(_.FADE+" "+_.SHOW),this.cleanupTether()},u.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},u._jQueryInterface=function(t){return this.each(function(){var e=r(this).data(h),n="object"===("undefined"==typeof t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new u(this,n),r(this).data(h,e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(u,null,[{key:"VERSION",get:function(){return l}},{key:"Default",get:function(){return d}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return h}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return c}},{key:"DefaultType",get:function(){return f}}]),u}(s);return r.fn[a]=m._jQueryInterface,r.fn[a].Constructor=m,r.fn[a].noConflict=function(){return r.fn[a]=u,m._jQueryInterface},m})(jQuery)}();
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
(function($) {

  var cocoon_element_counter = 0;

  var create_new_id = function() {
    return (new Date().getTime() + cocoon_element_counter++);
  }

  var newcontent_braced = function(id) {
    return '[' + id + ']$1';
  }

  var newcontent_underscord = function(id) {
    return '_' + id + '_$1';
  }

  var getInsertionNodeElem = function(insertionNode, insertionTraversal, $this){

    if (!insertionNode){
      return $this.parent();
    }

    if (typeof insertionNode == 'function'){
      if(insertionTraversal){
        console.warn('association-insertion-traversal is ignored, because association-insertion-node is given as a function.')
      }
      return insertionNode($this);
    }

    if(typeof insertionNode == 'string'){
      if (insertionTraversal){
        return $this[insertionTraversal](insertionNode);
      }else{
        return insertionNode == "this" ? $this : $(insertionNode);
      }
    }

  }

  $(document).on('click', '.add_fields', function(e) {
    e.preventDefault();
    var $this                 = $(this),
        assoc                 = $this.data('association'),
        assocs                = $this.data('associations'),
        content               = $this.data('association-insertion-template'),
        insertionMethod       = $this.data('association-insertion-method') || $this.data('association-insertion-position') || 'before',
        insertionNode         = $this.data('association-insertion-node'),
        insertionTraversal    = $this.data('association-insertion-traversal'),
        count                 = parseInt($this.data('count'), 10),
        regexp_braced         = new RegExp('\\[new_' + assoc + '\\](.*?\\s)', 'g'),
        regexp_underscord     = new RegExp('_new_' + assoc + '_(\\w*)', 'g'),
        new_id                = create_new_id(),
        new_content           = content.replace(regexp_braced, newcontent_braced(new_id)),
        new_contents          = [];


    if (new_content == content) {
      regexp_braced     = new RegExp('\\[new_' + assocs + '\\](.*?\\s)', 'g');
      regexp_underscord = new RegExp('_new_' + assocs + '_(\\w*)', 'g');
      new_content       = content.replace(regexp_braced, newcontent_braced(new_id));
    }

    new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
    new_contents = [new_content];

    count = (isNaN(count) ? 1 : Math.max(count, 1));
    count -= 1;

    while (count) {
      new_id      = create_new_id();
      new_content = content.replace(regexp_braced, newcontent_braced(new_id));
      new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
      new_contents.push(new_content);

      count -= 1;
    }

    var insertionNodeElem = getInsertionNodeElem(insertionNode, insertionTraversal, $this)

    if( !insertionNodeElem || (insertionNodeElem.length == 0) ){
      console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct.")
    }

    $.each(new_contents, function(i, node) {
      var contentNode = $(node);

      insertionNodeElem.trigger('cocoon:before-insert', [contentNode]);

      // allow any of the jquery dom manipulation methods (after, before, append, prepend, etc)
      // to be called on the node.  allows the insertion node to be the parent of the inserted
      // code and doesn't force it to be a sibling like after/before does. default: 'before'
      var addedContent = insertionNodeElem[insertionMethod](contentNode);

      insertionNodeElem.trigger('cocoon:after-insert', [contentNode]);
    });
  });

  $(document).on('click', '.remove_fields.dynamic, .remove_fields.existing', function(e) {
    var $this = $(this),
        wrapper_class = $this.data('wrapper-class') || 'nested-fields',
        node_to_delete = $this.closest('.' + wrapper_class),
        trigger_node = node_to_delete.parent();

    e.preventDefault();

    trigger_node.trigger('cocoon:before-remove', [node_to_delete]);

    var timeout = trigger_node.data('remove-timeout') || 0;

    setTimeout(function() {
      if ($this.hasClass('dynamic')) {
          node_to_delete.remove();
      } else {
          $this.prev("input[type=hidden]").val("1");
          node_to_delete.hide();
      }
      trigger_node.trigger('cocoon:after-remove', [node_to_delete]);
    }, timeout);
  });


  $(document).on("ready page:load turbolinks:load", function() {
    $('.remove_fields.existing.destroyed').each(function(i, obj) {
      var $this = $(this),
          wrapper_class = $this.data('wrapper-class') || 'nested-fields';

      $this.closest('.' + wrapper_class).hide();
    });
  });

})(jQuery);


/*
File generated by js-routes 1.3.3
Based on Rails routes of Hexlet::Application
 */

(function() {
  var DeprecatedBehavior, NodeTypes, ParameterMissing, ReservedOptions, SpecialOptionsKey, Utils, createGlobalJsRoutesObject, defaults, root,
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  ParameterMissing = function(message) {
    this.message = message;
  };

  ParameterMissing.prototype = new Error();

  defaults = {
    prefix: "",
    default_url_options: {}
  };

  NodeTypes = {"GROUP":1,"CAT":2,"SYMBOL":3,"OR":4,"STAR":5,"LITERAL":6,"SLASH":7,"DOT":8};

  SpecialOptionsKey = "_options";

  DeprecatedBehavior = false;

  ReservedOptions = ['anchor', 'trailing_slash', 'host', 'port', 'protocol'];

  Utils = {
    default_serializer: function(object, prefix) {
      var element, i, j, key, len, prop, s;
      if (prefix == null) {
        prefix = null;
      }
      if (object == null) {
        return "";
      }
      if (!prefix && !(this.get_object_type(object) === "object")) {
        throw new Error("Url parameters should be a javascript hash");
      }
      s = [];
      switch (this.get_object_type(object)) {
        case "array":
          for (i = j = 0, len = object.length; j < len; i = ++j) {
            element = object[i];
            s.push(this.default_serializer(element, prefix + "[]"));
          }
          break;
        case "object":
          for (key in object) {
            if (!hasProp.call(object, key)) continue;
            prop = object[key];
            if ((prop == null) && (prefix != null)) {
              prop = "";
            }
            if (prop != null) {
              if (prefix != null) {
                key = prefix + "[" + key + "]";
              }
              s.push(this.default_serializer(prop, key));
            }
          }
          break;
        default:
          if (object != null) {
            s.push((encodeURIComponent(prefix.toString())) + "=" + (encodeURIComponent(object.toString())));
          }
      }
      if (!s.length) {
        return "";
      }
      return s.join("&");
    },
    custom_serializer: null,
    serialize: function(object) {
      if ((this.custom_serializer != null) && this.get_object_type(this.custom_serializer) === "function") {
        return this.custom_serializer(object);
      } else {
        return this.default_serializer(object);
      }
    },
    clean_path: function(path) {
      var last_index;
      path = path.split("://");
      last_index = path.length - 1;
      path[last_index] = path[last_index].replace(/\/+/g, "/");
      return path.join("://");
    },
    extract_options: function(number_of_params, args) {
      var last_el, options;
      last_el = args[args.length - 1];
      if ((args.length > number_of_params && last_el === void 0) || ((last_el != null) && "object" === this.get_object_type(last_el) && !this.looks_like_serialized_model(last_el))) {
        options = args.pop() || {};
        delete options[SpecialOptionsKey];
        return options;
      } else {
        return {};
      }
    },
    looks_like_serialized_model: function(object) {
      return !object[SpecialOptionsKey] && ("id" in object || "to_param" in object);
    },
    path_identifier: function(object) {
      var property;
      if (object === 0) {
        return "0";
      }
      if (!object) {
        return "";
      }
      property = object;
      if (this.get_object_type(object) === "object") {
        if ("to_param" in object) {
          if (object.to_param == null) {
            throw new ParameterMissing("Route parameter missing: to_param");
          }
          property = object.to_param;
        } else if ("id" in object) {
          if (object.id == null) {
            throw new ParameterMissing("Route parameter missing: id");
          }
          property = object.id;
        } else {
          property = object;
        }
        if (this.get_object_type(property) === "function") {
          property = property.call(object);
        }
      }
      return property.toString();
    },
    clone: function(obj) {
      var attr, copy, key;
      if ((obj == null) || "object" !== this.get_object_type(obj)) {
        return obj;
      }
      copy = obj.constructor();
      for (key in obj) {
        if (!hasProp.call(obj, key)) continue;
        attr = obj[key];
        copy[key] = attr;
      }
      return copy;
    },
    merge: function() {
      var tap, xs;
      xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      tap = function(o, fn) {
        fn(o);
        return o;
      };
      if ((xs != null ? xs.length : void 0) > 0) {
        return tap({}, function(m) {
          var j, k, len, results, v, x;
          results = [];
          for (j = 0, len = xs.length; j < len; j++) {
            x = xs[j];
            results.push((function() {
              var results1;
              results1 = [];
              for (k in x) {
                v = x[k];
                results1.push(m[k] = v);
              }
              return results1;
            })());
          }
          return results;
        });
      }
    },
    normalize_options: function(parts, required_parts, default_options, actual_parameters) {
      var i, j, key, len, options, part, parts_options, result, route_parts, url_parameters, use_all_parts, value;
      options = this.extract_options(parts.length, actual_parameters);
      if (actual_parameters.length > parts.length) {
        throw new Error("Too many parameters provided for path");
      }
      use_all_parts = DeprecatedBehavior || actual_parameters.length > required_parts.length;
      parts_options = {};
      for (key in options) {
        if (!hasProp.call(options, key)) continue;
        use_all_parts = true;
        if (this.indexOf(parts, key) >= 0) {
          parts_options[key] = value;
        }
      }
      options = this.merge(defaults.default_url_options, default_options, options);
      result = {};
      url_parameters = {};
      result['url_parameters'] = url_parameters;
      for (key in options) {
        if (!hasProp.call(options, key)) continue;
        value = options[key];
        if (this.indexOf(ReservedOptions, key) >= 0) {
          result[key] = value;
        } else {
          url_parameters[key] = value;
        }
      }
      route_parts = use_all_parts ? parts : required_parts;
      i = 0;
      for (j = 0, len = route_parts.length; j < len; j++) {
        part = route_parts[j];
        if (i < actual_parameters.length) {
          if (!parts_options.hasOwnProperty(part)) {
            url_parameters[part] = actual_parameters[i];
            ++i;
          }
        }
      }
      return result;
    },
    build_route: function(parts, required_parts, default_options, route, full_url, args) {
      var options, parameters, result, url, url_params;
      args = Array.prototype.slice.call(args);
      options = this.normalize_options(parts, required_parts, default_options, args);
      parameters = options['url_parameters'];
      result = "" + (this.get_prefix()) + (this.visit(route, parameters));
      url = Utils.clean_path(result);
      if (options['trailing_slash'] === true) {
        url = url.replace(/(.*?)[\/]?$/, "$1/");
      }
      if ((url_params = this.serialize(parameters)).length) {
        url += "?" + url_params;
      }
      url += options.anchor ? "#" + options.anchor : "";
      if (full_url) {
        url = this.route_url(options) + url;
      }
      return url;
    },
    visit: function(route, parameters, optional) {
      var left, left_part, right, right_part, type, value;
      if (optional == null) {
        optional = false;
      }
      type = route[0], left = route[1], right = route[2];
      switch (type) {
        case NodeTypes.GROUP:
          return this.visit(left, parameters, true);
        case NodeTypes.STAR:
          return this.visit_globbing(left, parameters, true);
        case NodeTypes.LITERAL:
        case NodeTypes.SLASH:
        case NodeTypes.DOT:
          return left;
        case NodeTypes.CAT:
          left_part = this.visit(left, parameters, optional);
          right_part = this.visit(right, parameters, optional);
          if (optional && ((this.is_optional_node(left[0]) && !left_part) || ((this.is_optional_node(right[0])) && !right_part))) {
            return "";
          }
          return "" + left_part + right_part;
        case NodeTypes.SYMBOL:
          value = parameters[left];
          if (value != null) {
            delete parameters[left];
            return this.path_identifier(value);
          }
          if (optional) {
            return "";
          } else {
            throw new ParameterMissing("Route parameter missing: " + left);
          }
          break;
        default:
          throw new Error("Unknown Rails node type");
      }
    },
    is_optional_node: function(node) {
      return this.indexOf([NodeTypes.STAR, NodeTypes.SYMBOL, NodeTypes.CAT], node) >= 0;
    },
    build_path_spec: function(route, wildcard) {
      var left, right, type;
      if (wildcard == null) {
        wildcard = false;
      }
      type = route[0], left = route[1], right = route[2];
      switch (type) {
        case NodeTypes.GROUP:
          return "(" + (this.build_path_spec(left)) + ")";
        case NodeTypes.CAT:
          return "" + (this.build_path_spec(left)) + (this.build_path_spec(right));
        case NodeTypes.STAR:
          return this.build_path_spec(left, true);
        case NodeTypes.SYMBOL:
          if (wildcard === true) {
            return "" + (left[0] === '*' ? '' : '*') + left;
          } else {
            return ":" + left;
          }
          break;
        case NodeTypes.SLASH:
        case NodeTypes.DOT:
        case NodeTypes.LITERAL:
          return left;
        default:
          throw new Error("Unknown Rails node type");
      }
    },
    visit_globbing: function(route, parameters, optional) {
      var left, right, type, value;
      type = route[0], left = route[1], right = route[2];
      if (left.replace(/^\*/i, "") !== left) {
        route[1] = left = left.replace(/^\*/i, "");
      }
      value = parameters[left];
      if (value == null) {
        return this.visit(route, parameters, optional);
      }
      parameters[left] = (function() {
        switch (this.get_object_type(value)) {
          case "array":
            return value.join("/");
          default:
            return value;
        }
      }).call(this);
      return this.visit(route, parameters, optional);
    },
    get_prefix: function() {
      var prefix;
      prefix = defaults.prefix;
      if (prefix !== "") {
        prefix = (prefix.match("/$") ? prefix : prefix + "/");
      }
      return prefix;
    },
    route: function(parts_table, default_options, route_spec, full_url) {
      var j, len, part, parts, path_fn, ref, required, required_parts;
      required_parts = [];
      parts = [];
      for (j = 0, len = parts_table.length; j < len; j++) {
        ref = parts_table[j], part = ref[0], required = ref[1];
        parts.push(part);
        if (required) {
          required_parts.push(part);
        }
      }
      path_fn = function() {
        return Utils.build_route(parts, required_parts, default_options, route_spec, full_url, arguments);
      };
      path_fn.required_params = required_parts;
      path_fn.toString = function() {
        return Utils.build_path_spec(route_spec);
      };
      return path_fn;
    },
    route_url: function(route_defaults) {
      var hostname, port, protocol;
      if (typeof route_defaults === 'string') {
        return route_defaults;
      }
      protocol = route_defaults.protocol || Utils.current_protocol();
      hostname = route_defaults.host || window.location.hostname;
      port = route_defaults.port || (!route_defaults.host ? Utils.current_port() : void 0);
      port = port ? ":" + port : '';
      return protocol + "://" + hostname + port;
    },
    has_location: function() {
      return typeof window !== 'undefined' && typeof window.location !== 'undefined';
    },
    current_host: function() {
      if (this.has_location()) {
        return window.location.hostname;
      } else {
        return null;
      }
    },
    current_protocol: function() {
      if (this.has_location() && window.location.protocol !== '') {
        return window.location.protocol.replace(/:$/, '');
      } else {
        return 'http';
      }
    },
    current_port: function() {
      if (this.has_location() && window.location.port !== '') {
        return window.location.port;
      } else {
        return '';
      }
    },
    _classToTypeCache: null,
    _classToType: function() {
      var j, len, name, ref;
      if (this._classToTypeCache != null) {
        return this._classToTypeCache;
      }
      this._classToTypeCache = {};
      ref = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
      for (j = 0, len = ref.length; j < len; j++) {
        name = ref[j];
        this._classToTypeCache["[object " + name + "]"] = name.toLowerCase();
      }
      return this._classToTypeCache;
    },
    get_object_type: function(obj) {
      if (root.jQuery && (root.jQuery.type != null)) {
        return root.jQuery.type(obj);
      }
      if (obj == null) {
        return "" + obj;
      }
      if (typeof obj === "object" || typeof obj === "function") {
        return this._classToType()[Object.prototype.toString.call(obj)] || "object";
      } else {
        return typeof obj;
      }
    },
    indexOf: function(array, element) {
      if (Array.prototype.indexOf) {
        return array.indexOf(element);
      } else {
        return this.indexOfImplementation(array, element);
      }
    },
    indexOfImplementation: function(array, element) {
      var el, i, j, len, result;
      result = -1;
      for (i = j = 0, len = array.length; j < len; i = ++j) {
        el = array[i];
        if (el === element) {
          result = i;
        }
      }
      return result;
    }
  };

  createGlobalJsRoutesObject = function() {
    var namespace;
    namespace = function(mainRoot, namespaceString) {
      var current, parts;
      parts = (namespaceString ? namespaceString.split(".") : []);
      if (!parts.length) {
        return;
      }
      current = parts.shift();
      mainRoot[current] = mainRoot[current] || {};
      return namespace(mainRoot[current], parts.join("."));
    };
    namespace(root, "Routes");
    root.Routes = {
// accept_account_company_member => /account/company/members/:id/accept(.:format)
  // function(id, options)
  accept_account_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"accept",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// accept_project_session_check_point => /projects/:project_id/sessions/:session_id/check_points/:id/accept(.:format)
  // function(project_id, session_id, id, options)
  accept_project_session_check_point_path: Utils.route([["project_id",true],["session_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"check_points",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"accept",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// account_billing_history => /account/billing_history(.:format)
  // function(options)
  account_billing_history_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"billing_history",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_card => /account/card(.:format)
  // function(options)
  account_card_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"card",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_company => /account/company(.:format)
  // function(options)
  account_company_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_company_member => /account/company/members/:id(.:format)
  // function(id, options)
  account_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// account_company_members => /account/company/members(.:format)
  // function(options)
  account_company_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// account_gift => /account/gift(.:format)
  // function(options)
  account_gift_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"gift",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_notifications => /account/notifications(.:format)
  // function(options)
  account_notifications_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"notifications",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_order => /account/orders/:id(.:format)
  // function(id, options)
  account_order_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"orders",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// account_orders => /account/orders(.:format)
  // function(options)
  account_orders_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"orders",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_preferences => /account/preferences(.:format)
  // function(options)
  account_preferences_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"preferences",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_profile => /account/profile(.:format)
  // function(options)
  account_profile_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"profile",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_referral => /account/referral(.:format)
  // function(options)
  account_referral_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"referral",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// account_root => /account(.:format)
  // function(options)
  account_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// account_social_account => /account/social_accounts/:id(.:format)
  // function(id, options)
  account_social_account_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"social_accounts",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// account_subscription => /account/subscription(.:format)
  // function(options)
  account_subscription_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"subscription",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// activate_email_account_profile => /account/profile/activate_email(.:format)
  // function(options)
  activate_email_account_profile_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"profile",false],[2,[7,"/",false],[2,[6,"activate_email",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin => /admin/vanity/participant/:id(.:format)
  // function(id, options)
  admin_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"participant",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// admin_analytics => /admin/analytics(.:format)
  // function(options)
  admin_analytics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"analytics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_bill => /admin/bills/:id(.:format)
  // function(id, options)
  admin_bill_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"bills",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_bills => /admin/bills(.:format)
  // function(options)
  admin_bills_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"bills",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_blog_post => /admin/blog_posts/:id(.:format)
  // function(id, options)
  admin_blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_blog_post_categories => /admin/blog_post_categories(.:format)
  // function(options)
  admin_blog_post_categories_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_post_categories",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_blog_post_category => /admin/blog_post_categories/:id(.:format)
  // function(id, options)
  admin_blog_post_category_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_post_categories",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_blog_posts => /admin/blog_posts(.:format)
  // function(options)
  admin_blog_posts_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_capital_transaction => /admin/capital_transaction(.:format)
  // function(options)
  admin_capital_transaction_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"capital_transaction",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_categories => /admin/categories(.:format)
  // function(options)
  admin_categories_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"categories",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_category => /admin/categories/:id(.:format)
  // function(id, options)
  admin_category_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"categories",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_challenge => /admin/challenges/:id(.:format)
  // function(id, options)
  admin_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_challenges => /admin/challenges(.:format)
  // function(options)
  admin_challenges_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"challenges",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_companies => /admin/companies(.:format)
  // function(options)
  admin_companies_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"companies",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_company => /admin/companies/:id(.:format)
  // function(id, options)
  admin_company_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"companies",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_company_member => /admin/company_members/:id(.:format)
  // function(id, options)
  admin_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_company_members => /admin/company_members(.:format)
  // function(options)
  admin_company_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_company_vacancies => /admin/company_vacancies(.:format)
  // function(options)
  admin_company_vacancies_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_vacancies",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_company_vacancy => /admin/company_vacancies/:id(.:format)
  // function(id, options)
  admin_company_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_content_team => /admin/content_teams/:id(.:format)
  // function(id, options)
  admin_content_team_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_content_teams => /admin/content_teams(.:format)
  // function(options)
  admin_content_teams_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"content_teams",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_course => /admin/courses/:id(.:format)
  // function(id, options)
  admin_course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_course_challenge => /admin/course_challenges/:id(.:format)
  // function(id, options)
  admin_course_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_course_challenges => /admin/course_challenges(.:format)
  // function(options)
  admin_course_challenges_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_courses => /admin/courses(.:format)
  // function(options)
  admin_courses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"courses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_email_unsubscribe_reason => /admin/email_unsubscribe_reasons/:id(.:format)
  // function(id, options)
  admin_email_unsubscribe_reason_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"email_unsubscribe_reasons",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_email_unsubscribe_reasons => /admin/email_unsubscribe_reasons(.:format)
  // function(options)
  admin_email_unsubscribe_reasons_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"email_unsubscribe_reasons",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_event => /admin/events/:id(.:format)
  // function(id, options)
  admin_event_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"events",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_event_acceptor_email => /admin/event_acceptor_emails/:id(.:format)
  // function(id, options)
  admin_event_acceptor_email_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"event_acceptor_emails",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_event_acceptor_emails => /admin/event_acceptor_emails(.:format)
  // function(options)
  admin_event_acceptor_emails_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"event_acceptor_emails",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_event_acceptors => /admin/events/:event_id/acceptors(.:format)
  // function(event_id, options)
  admin_event_acceptors_path: Utils.route([["event_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"events",false],[2,[7,"/",false],[2,[3,"event_id",false],[2,[7,"/",false],[2,[6,"acceptors",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// admin_events => /admin/events(.:format)
  // function(options)
  admin_events_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"events",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_exercise => /admin/exercises/:id(.:format)
  // function(id, options)
  admin_exercise_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_exercise_build => /admin/exercises/:exercise_id/builds/:id(.:format)
  // function(exercise_id, id, options)
  admin_exercise_build_path: Utils.route([["exercise_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"exercise_id",false],[2,[7,"/",false],[2,[6,"builds",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// admin_exercise_builds => /admin/exercises/:exercise_id/builds(.:format)
  // function(exercise_id, options)
  admin_exercise_builds_path: Utils.route([["exercise_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"exercise_id",false],[2,[7,"/",false],[2,[6,"builds",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// admin_exercises => /admin/exercises(.:format)
  // function(options)
  admin_exercises_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_game_member => /admin/game_members/:id(.:format)
  // function(id, options)
  admin_game_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"game_members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_game_members => /admin/game_members(.:format)
  // function(options)
  admin_game_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"game_members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_instance => /admin/instances/:id(.:format)
  // function(id, options)
  admin_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_instance_result => /admin/instance_results/:id(.:format)
  // function(id, options)
  admin_instance_result_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instance_results",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_instance_results => /admin/instance_results(.:format)
  // function(options)
  admin_instance_results_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instance_results",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_instances => /admin/instances(.:format)
  // function(options)
  admin_instances_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instances",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_intro_email => /admin/intro_emails/:id(.:format)
  // function(id, options)
  admin_intro_email_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"intro_emails",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_intro_emails => /admin/intro_emails(.:format)
  // function(options)
  admin_intro_emails_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"intro_emails",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_lesson => /admin/lessons/:id(.:format)
  // function(id, options)
  admin_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_lesson_member => /admin/lesson_members/:id(.:format)
  // function(id, options)
  admin_lesson_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_lesson_members => /admin/lesson_members(.:format)
  // function(options)
  admin_lesson_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_lesson_question_result => /admin/lesson_question_results/:id(.:format)
  // function(id, options)
  admin_lesson_question_result_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_question_results",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_lesson_question_results => /admin/lesson_question_results(.:format)
  // function(options)
  admin_lesson_question_results_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_question_results",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_lessons => /admin/lessons(.:format)
  // function(options)
  admin_lessons_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lessons",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_mailing_list => /admin/mailing_lists/:id(.:format)
  // function(id, options)
  admin_mailing_list_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mailing_lists",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_mailing_lists => /admin/mailing_lists(.:format)
  // function(options)
  admin_mailing_lists_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mailing_lists",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_mentor => /admin/mentors/:id(.:format)
  // function(id, options)
  admin_mentor_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mentors",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_mentors => /admin/mentors(.:format)
  // function(options)
  admin_mentors_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mentors",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_profit => /admin/profit(.:format)
  // function(options)
  admin_profit_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"profit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_project => /admin/projects/:id(.:format)
  // function(id, options)
  admin_project_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_project_session => /admin/project_sessions/:id(.:format)
  // function(id, options)
  admin_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_project_sessions => /admin/project_sessions(.:format)
  // function(options)
  admin_project_sessions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_projects => /admin/projects(.:format)
  // function(options)
  admin_projects_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"projects",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_promo_code => /admin/promo_codes/:id(.:format)
  // function(id, options)
  admin_promo_code_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"promo_codes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_promo_codes => /admin/promo_codes(.:format)
  // function(options)
  admin_promo_codes_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"promo_codes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_rewarding_action => /admin/rewarding_actions/:id(.:format)
  // function(id, options)
  admin_rewarding_action_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"rewarding_actions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_rewarding_actions => /admin/rewarding_actions(.:format)
  // function(options)
  admin_rewarding_actions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"rewarding_actions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_root => /admin(.:format)
  // function(options)
  admin_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// admin_search_queries => /admin/search_queries(.:format)
  // function(options)
  admin_search_queries_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"search_queries",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_search_query => /admin/search_queries/:id(.:format)
  // function(id, options)
  admin_search_query_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"search_queries",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_stack => /admin/stacks/:id(.:format)
  // function(id, options)
  admin_stack_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stacks",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_stack_members => /admin/stack_members(.:format)
  // function(options)
  admin_stack_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stack_members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_stacks => /admin/stacks(.:format)
  // function(options)
  admin_stacks_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stacks",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_stripe_event => /admin/stripe_events/:id(.:format)
  // function(id, options)
  admin_stripe_event_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stripe_events",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_stripe_events => /admin/stripe_events(.:format)
  // function(options)
  admin_stripe_events_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stripe_events",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_subscription_unsubscribe_reason => /admin/subscription_unsubscribe_reasons/:id(.:format)
  // function(id, options)
  admin_subscription_unsubscribe_reason_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"subscription_unsubscribe_reasons",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_subscription_unsubscribe_reasons => /admin/subscription_unsubscribe_reasons(.:format)
  // function(options)
  admin_subscription_unsubscribe_reasons_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"subscription_unsubscribe_reasons",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_subscriptions => /admin/subscriptions(.:format)
  // function(options)
  admin_subscriptions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"subscriptions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_tag => /admin/tags/:id(.:format)
  // function(id, options)
  admin_tag_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"tags",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_tags => /admin/tags(.:format)
  // function(options)
  admin_tags_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"tags",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_teacher => /admin/teachers/:id(.:format)
  // function(id, options)
  admin_teacher_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"teachers",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_teachers => /admin/teachers(.:format)
  // function(options)
  admin_teachers_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"teachers",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_topic => /admin/topics/:id(.:format)
  // function(id, options)
  admin_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_topics => /admin/topics(.:format)
  // function(options)
  admin_topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_user => /admin/users/:id(.:format)
  // function(id, options)
  admin_user_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"users",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_user_email => /admin/user_emails/:id(.:format)
  // function(id, options)
  admin_user_email_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_emails",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_user_emails => /admin/user_emails(.:format)
  // function(options)
  admin_user_emails_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_emails",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_user_reward => /admin/user_rewards/:id(.:format)
  // function(id, options)
  admin_user_reward_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewards",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_user_rewarding_action => /admin/user_rewarding_actions/:id(.:format)
  // function(id, options)
  admin_user_rewarding_action_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewarding_actions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_user_rewarding_actions => /admin/user_rewarding_actions(.:format)
  // function(options)
  admin_user_rewarding_actions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewarding_actions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_user_rewards => /admin/user_rewards(.:format)
  // function(options)
  admin_user_rewards_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewards",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_user_scope => /admin/user_scopes/:id(.:format)
  // function(id, options)
  admin_user_scope_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_scopes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_user_scopes => /admin/user_scopes(.:format)
  // function(options)
  admin_user_scopes_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_scopes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_users => /admin/users(.:format)
  // function(options)
  admin_users_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_vanity => /admin/vanity(.:format)
  // function(options)
  admin_vanity_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// admin_vanity_add_participant => /admin/vanity/add_participant(.:format)
  // function(options)
  admin_vanity_add_participant_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"add_participant",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_chooses => /admin/vanity/chooses(.:format)
  // function(options)
  admin_vanity_chooses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"chooses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_complete => /admin/vanity/complete(.:format)
  // function(options)
  admin_vanity_complete_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"complete",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_disable => /admin/vanity/disable(.:format)
  // function(options)
  admin_vanity_disable_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"disable",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_enable => /admin/vanity/enable(.:format)
  // function(options)
  admin_vanity_enable_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"enable",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_image => /admin/vanity/image(.:format)
  // function(options)
  admin_vanity_image_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"image",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// admin_vanity_reset => /admin/vanity/reset(.:format)
  // function(options)
  admin_vanity_reset_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"vanity",false],[2,[7,"/",false],[2,[6,"reset",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// api_bitbucket_hooks => /api/bitbucket_hooks(.:format)
  // function(options)
  api_bitbucket_hooks_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"bitbucket_hooks",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_cities => /api/cities(.:format)
  // function(options)
  api_cities_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"cities",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_course_builds => /api/course_builds(.:format)
  // function(options)
  api_course_builds_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"course_builds",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_email => /api/email(.:format)
  // function(options)
  api_email_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"email",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_exercise_builds => /api/exercise_builds(.:format)
  // function(options)
  api_exercise_builds_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"exercise_builds",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_github_hooks => /api/github_hooks(.:format)
  // function(options)
  api_github_hooks_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"github_hooks",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_inbox => /api/inbox(.:format)
  // function(options)
  api_inbox_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"inbox",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_instance => /api/instances/:id(.:format)
  // function(id, options)
  api_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// api_instance_results => /api/instances/:instance_id/results(.:format)
  // function(instance_id, options)
  api_instance_results_path: Utils.route([["instance_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"instance_id",false],[2,[7,"/",false],[2,[6,"results",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// api_instance_run => /api/instances/:instance_id/runs/:id(.:format)
  // function(instance_id, id, options)
  api_instance_run_path: Utils.route([["instance_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"instance_id",false],[2,[7,"/",false],[2,[6,"runs",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// api_instance_run_code_reviews => /api/instances/:instance_id/runs/:run_id/code_reviews(.:format)
  // function(instance_id, run_id, options)
  api_instance_run_code_reviews_path: Utils.route([["instance_id",true],["run_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"instance_id",false],[2,[7,"/",false],[2,[6,"runs",false],[2,[7,"/",false],[2,[3,"run_id",false],[2,[7,"/",false],[2,[6,"code_reviews",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// api_lesson_question_results => /api/lessons/:lesson_id/questions/:question_id/results(.:format)
  // function(lesson_id, question_id, options)
  api_lesson_question_results_path: Utils.route([["lesson_id",true],["question_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"lesson_id",false],[2,[7,"/",false],[2,[6,"questions",false],[2,[7,"/",false],[2,[3,"question_id",false],[2,[7,"/",false],[2,[6,"results",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// api_post_vote => /api/posts/:post_id/votes/:id(.:format)
  // function(post_id, id, options)
  api_post_vote_path: Utils.route([["post_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"posts",false],[2,[7,"/",false],[2,[3,"post_id",false],[2,[7,"/",false],[2,[6,"votes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// api_post_votes => /api/posts/:post_id/votes(.:format)
  // function(post_id, options)
  api_post_votes_path: Utils.route([["post_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"posts",false],[2,[7,"/",false],[2,[3,"post_id",false],[2,[7,"/",false],[2,[6,"votes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// api_regions => /api/regions(.:format)
  // function(options)
  api_regions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"regions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_topic => /api/topics/:id(.:format)
  // function(id, options)
  api_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// api_topic_comment => /api/topics/:topic_id/comments/:id(.:format)
  // function(topic_id, id, options)
  api_topic_comment_path: Utils.route([["topic_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// api_topic_comment_like => /api/topics/:topic_id/comments/:comment_id/likes/:id(.:format)
  // function(topic_id, comment_id, id, options)
  api_topic_comment_like_path: Utils.route([["topic_id",true],["comment_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"comment_id",false],[2,[7,"/",false],[2,[6,"likes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// api_topic_comment_likes => /api/topics/:topic_id/comments/:comment_id/likes(.:format)
  // function(topic_id, comment_id, options)
  api_topic_comment_likes_path: Utils.route([["topic_id",true],["comment_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"comment_id",false],[2,[7,"/",false],[2,[6,"likes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// api_topic_comments => /api/topics/:topic_id/comments(.:format)
  // function(topic_id, options)
  api_topic_comments_path: Utils.route([["topic_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// api_topic_like => /api/topics/:topic_id/likes/:id(.:format)
  // function(topic_id, id, options)
  api_topic_like_path: Utils.route([["topic_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"likes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// api_topic_likes => /api/topics/:topic_id/likes(.:format)
  // function(topic_id, options)
  api_topic_likes_path: Utils.route([["topic_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"likes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// api_topic_subscriber => /api/topics/:topic_id/subscribers/:id(.:format)
  // function(topic_id, id, options)
  api_topic_subscriber_path: Utils.route([["topic_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"subscribers",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// api_topic_subscribers => /api/topics/:topic_id/subscribers(.:format)
  // function(topic_id, options)
  api_topic_subscribers_path: Utils.route([["topic_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"subscribers",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// api_topics => /api/topics(.:format)
  // function(options)
  api_topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_user => /api/user(.:format)
  // function(options)
  api_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"user",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// api_user_preferences => /api/user_preferences(.:format)
  // function(options)
  api_user_preferences_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"user_preferences",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// archive_admin_intro_email => /admin/intro_emails/:id/archive(.:format)
  // function(id, options)
  archive_admin_intro_email_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"intro_emails",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"archive",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// archive_content_team_exercise => /content_teams/:content_team_id/exercises/:id/archive(.:format)
  // function(content_team_id, id, options)
  archive_content_team_exercise_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"archive",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// auth_bitbucket_callback => /auth/bitbucket/callback(.:format)
  // function(options)
  auth_bitbucket_callback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"auth",false],[2,[7,"/",false],[2,[6,"bitbucket",false],[2,[7,"/",false],[2,[6,"callback",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// auth_facebook_callback => /auth/facebook/callback(.:format)
  // function(options)
  auth_facebook_callback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"auth",false],[2,[7,"/",false],[2,[6,"facebook",false],[2,[7,"/",false],[2,[6,"callback",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// auth_failure => /auth/failure(.:format)
  // function(options)
  auth_failure_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"auth",false],[2,[7,"/",false],[2,[6,"failure",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// auth_github_callback => /auth/github/callback(.:format)
  // function(options)
  auth_github_callback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"auth",false],[2,[7,"/",false],[2,[6,"github",false],[2,[7,"/",false],[2,[6,"callback",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// auth_linkedin_callback => /auth/linkedin/callback(.:format)
  // function(options)
  auth_linkedin_callback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"auth",false],[2,[7,"/",false],[2,[6,"linkedin",false],[2,[7,"/",false],[2,[6,"callback",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// blog_category => /blog/categories/:id(.:format)
  // function(id, options)
  blog_category_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"blog",false],[2,[7,"/",false],[2,[6,"categories",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// blog_post => /blog/posts/:id(.:format)
  // function(id, options)
  blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"blog",false],[2,[7,"/",false],[2,[6,"posts",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// blog_posts => /blog/posts(.:format)
  // function(options)
  blog_posts_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"blog",false],[2,[7,"/",false],[2,[6,"posts",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// blog_root => /blog(.:format)
  // function(options)
  blog_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"blog",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// business_analytic => /business/analytics/:id(.:format)
  // function(id, options)
  business_analytic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"analytics",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// business_analytics => /business/analytics(.:format)
  // function(options)
  business_analytics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"analytics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_billing => /business/billing(.:format)
  // function(options)
  business_billing_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"billing",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_candidates => /business/candidates(.:format)
  // function(options)
  business_candidates_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"candidates",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_company => /business/company(.:format)
  // function(options)
  business_company_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"company",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_member => /business/members/:id(.:format)
  // function(id, options)
  business_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// business_members => /business/members(.:format)
  // function(options)
  business_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_orders => /business/orders(.:format)
  // function(options)
  business_orders_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"orders",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_root => /business(.:format)
  // function(options)
  business_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// business_vacancies => /business/vacancies(.:format)
  // function(options)
  business_vacancies_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// business_vacancy => /business/vacancies/:id(.:format)
  // function(id, options)
  business_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// business_vacancy_responses => /business/vacancies/:vacancy_id/responses(.:format)
  // function(vacancy_id, options)
  business_vacancy_responses_path: Utils.route([["vacancy_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"vacancy_id",false],[2,[7,"/",false],[2,[6,"responses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// categories => /categories(.:format)
  // function(options)
  categories_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"categories",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// category_courses => /categories/:category_id/courses(.:format)
  // function(category_id, options)
  category_courses_path: Utils.route([["category_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"categories",false],[2,[7,"/",false],[2,[3,"category_id",false],[2,[7,"/",false],[2,[6,"courses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// challenge => /challenges/:id(.:format)
  // function(id, options)
  challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// challenges => /challenges(.:format)
  // function(options)
  challenges_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"challenges",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// click_api_email => /api/email/click(.:format)
  // function(options)
  click_api_email_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"email",false],[2,[7,"/",false],[2,[6,"click",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// code_review => /code_reviews/:id(.:format)
  // function(id, options)
  code_review_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// code_review_submission_comments => /code_reviews/:code_review_id/submissions/:submission_id/comments(.:format)
  // function(code_review_id, submission_id, options)
  code_review_submission_comments_path: Utils.route([["code_review_id",true],["submission_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"code_review_id",false],[2,[7,"/",false],[2,[6,"submissions",false],[2,[7,"/",false],[2,[3,"submission_id",false],[2,[7,"/",false],[2,[6,"comments",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// code_review_submission_like => /code_reviews/:code_review_id/submissions/:submission_id/likes/:id(.:format)
  // function(code_review_id, submission_id, id, options)
  code_review_submission_like_path: Utils.route([["code_review_id",true],["submission_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"code_review_id",false],[2,[7,"/",false],[2,[6,"submissions",false],[2,[7,"/",false],[2,[3,"submission_id",false],[2,[7,"/",false],[2,[6,"likes",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// code_review_submission_likes => /code_reviews/:code_review_id/submissions/:submission_id/likes(.:format)
  // function(code_review_id, submission_id, options)
  code_review_submission_likes_path: Utils.route([["code_review_id",true],["submission_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"code_review_id",false],[2,[7,"/",false],[2,[6,"submissions",false],[2,[7,"/",false],[2,[3,"submission_id",false],[2,[7,"/",false],[2,[6,"likes",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// code_reviews => /code_reviews(.:format)
  // function(options)
  code_reviews_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// code_reviews_comments => /code_reviews_comments(.:format)
  // function(options)
  code_reviews_comments_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews_comments",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// community => /community(.:format)
  // function(options)
  community_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"community",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// confirm_user => /user/confirm(.:format)
  // function(options)
  confirm_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"user",false],[2,[7,"/",false],[2,[6,"confirm",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// content_team => /content_teams/:id(.:format)
  // function(id, options)
  content_team_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// content_team_course => /content_teams/:content_team_id/courses/:id(.:format)
  // function(content_team_id, id, options)
  content_team_course_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// content_team_course_build => /content_teams/:content_team_id/courses/:course_id/builds/:id(.:format)
  // function(content_team_id, course_id, id, options)
  content_team_course_build_path: Utils.route([["content_team_id",true],["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"builds",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// content_team_course_builds => /content_teams/:content_team_id/courses/:course_id/builds(.:format)
  // function(content_team_id, course_id, options)
  content_team_course_builds_path: Utils.route([["content_team_id",true],["course_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"builds",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// content_team_course_challenge => /content_teams/:content_team_id/course_challenges/:id(.:format)
  // function(content_team_id, id, options)
  content_team_course_challenge_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// content_team_course_challenges => /content_teams/:content_team_id/course_challenges(.:format)
  // function(content_team_id, options)
  content_team_course_challenges_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// content_team_courses => /content_teams/:content_team_id/courses(.:format)
  // function(content_team_id, options)
  content_team_courses_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// content_team_exercise => /content_teams/:content_team_id/exercises/:id(.:format)
  // function(content_team_id, id, options)
  content_team_exercise_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// content_team_exercise_build => /content_teams/:content_team_id/exercises/:exercise_id/builds/:id(.:format)
  // function(content_team_id, exercise_id, id, options)
  content_team_exercise_build_path: Utils.route([["content_team_id",true],["exercise_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"exercise_id",false],[2,[7,"/",false],[2,[6,"builds",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// content_team_exercise_builds => /content_teams/:content_team_id/exercises/:exercise_id/builds(.:format)
  // function(content_team_id, exercise_id, options)
  content_team_exercise_builds_path: Utils.route([["content_team_id",true],["exercise_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"exercise_id",false],[2,[7,"/",false],[2,[6,"builds",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// content_team_exercises => /content_teams/:content_team_id/exercises(.:format)
  // function(content_team_id, options)
  content_team_exercises_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// content_team_lesson => /content_teams/:content_team_id/lessons/:id(.:format)
  // function(content_team_id, id, options)
  content_team_lesson_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// content_team_lessons => /content_teams/:content_team_id/lessons(.:format)
  // function(content_team_id, options)
  content_team_lessons_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// content_team_profit => /content_teams/:content_team_id/profit(.:format)
  // function(content_team_id, options)
  content_team_profit_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"profit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// content_team_project => /content_teams/:content_team_id/projects/:id(.:format)
  // function(content_team_id, id, options)
  content_team_project_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// content_team_project_version => /content_teams/:content_team_id/projects/:project_id/versions/:id(.:format)
  // function(content_team_id, project_id, id, options)
  content_team_project_version_path: Utils.route([["content_team_id",true],["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"versions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// content_team_project_versions => /content_teams/:content_team_id/projects/:project_id/versions(.:format)
  // function(content_team_id, project_id, options)
  content_team_project_versions_path: Utils.route([["content_team_id",true],["project_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"versions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// content_team_projects => /content_teams/:content_team_id/projects(.:format)
  // function(content_team_id, options)
  content_team_projects_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// coupon => /coupon(.:format)
  // function(options)
  coupon_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"coupon",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// course => /courses/:id(.:format)
  // function(id, options)
  course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// course_challenge => /courses/:course_id/challenges/:id(.:format)
  // function(course_id, id, options)
  course_challenge_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// course_community => /courses/:course_id/community(.:format)
  // function(course_id, options)
  course_community_path: Utils.route([["course_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"community",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// course_member_archive => /courses/:course_id/members/:member_id/archive(.:format)
  // function(course_id, member_id, options)
  course_member_archive_path: Utils.route([["course_id",true],["member_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"member_id",false],[2,[7,"/",false],[2,[6,"archive",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// course_members => /courses/:course_id/members(.:format)
  // function(course_id, options)
  course_members_path: Utils.route([["course_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// courses => /courses(.:format)
  // function(options)
  courses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// courses_php5 => /courses/php5(.:format)
  // function(options)
  courses_php5_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"php5",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// create_on_demand_api_exercise_builds => /api/exercise_builds/create_on_demand(.:format)
  // function(options)
  create_on_demand_api_exercise_builds_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"exercise_builds",false],[2,[7,"/",false],[2,[6,"create_on_demand",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// dashboard_project_session => /projects/:project_id/sessions/:id/dashboard(.:format)
  // function(project_id, id, options)
  dashboard_project_session_path: Utils.route([["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"dashboard",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// decline_account_company_member => /account/company/members/:id/decline(.:format)
  // function(id, options)
  decline_account_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"decline",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// decline_mentorship_project_member => /mentorship/project_members/:id/decline(.:format)
  // function(id, options)
  decline_mentorship_project_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"decline",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// decline_project_session_check_point => /projects/:project_id/sessions/:session_id/check_points/:id/decline(.:format)
  // function(project_id, session_id, id, options)
  decline_project_session_check_point_path: Utils.route([["project_id",true],["session_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"check_points",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"decline",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// deploy_key_content_team_exercise => /content_teams/:content_team_id/exercises/:id/deploy_key(.:format)
  // function(content_team_id, id, options)
  deploy_key_content_team_exercise_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"deploy_key",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_account_company_member => /account/company/members/:id/edit(.:format)
  // function(id, options)
  edit_account_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_account_notifications => /account/notifications/edit(.:format)
  // function(options)
  edit_account_notifications_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"notifications",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_account_preferences => /account/preferences/edit(.:format)
  // function(options)
  edit_account_preferences_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"preferences",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_account_profile => /account/profile/edit(.:format)
  // function(options)
  edit_account_profile_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"profile",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_admin_bill => /admin/bills/:id/edit(.:format)
  // function(id, options)
  edit_admin_bill_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"bills",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_blog_post => /admin/blog_posts/:id/edit(.:format)
  // function(id, options)
  edit_admin_blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_blog_post_category => /admin/blog_post_categories/:id/edit(.:format)
  // function(id, options)
  edit_admin_blog_post_category_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_post_categories",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_category => /admin/categories/:id/edit(.:format)
  // function(id, options)
  edit_admin_category_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"categories",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_challenge => /admin/challenges/:id/edit(.:format)
  // function(id, options)
  edit_admin_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_company => /admin/companies/:id/edit(.:format)
  // function(id, options)
  edit_admin_company_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"companies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_company_member => /admin/company_members/:id/edit(.:format)
  // function(id, options)
  edit_admin_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_company_vacancy => /admin/company_vacancies/:id/edit(.:format)
  // function(id, options)
  edit_admin_company_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_content_team => /admin/content_teams/:id/edit(.:format)
  // function(id, options)
  edit_admin_content_team_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_course => /admin/courses/:id/edit(.:format)
  // function(id, options)
  edit_admin_course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_course_challenge => /admin/course_challenges/:id/edit(.:format)
  // function(id, options)
  edit_admin_course_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_email_unsubscribe_reason => /admin/email_unsubscribe_reasons/:id/edit(.:format)
  // function(id, options)
  edit_admin_email_unsubscribe_reason_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"email_unsubscribe_reasons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_event => /admin/events/:id/edit(.:format)
  // function(id, options)
  edit_admin_event_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"events",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_exercise => /admin/exercises/:id/edit(.:format)
  // function(id, options)
  edit_admin_exercise_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_game_member => /admin/game_members/:id/edit(.:format)
  // function(id, options)
  edit_admin_game_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"game_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_instance => /admin/instances/:id/edit(.:format)
  // function(id, options)
  edit_admin_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_instance_result => /admin/instance_results/:id/edit(.:format)
  // function(id, options)
  edit_admin_instance_result_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instance_results",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_intro_email => /admin/intro_emails/:id/edit(.:format)
  // function(id, options)
  edit_admin_intro_email_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"intro_emails",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_lesson => /admin/lessons/:id/edit(.:format)
  // function(id, options)
  edit_admin_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_lesson_member => /admin/lesson_members/:id/edit(.:format)
  // function(id, options)
  edit_admin_lesson_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_lesson_question_result => /admin/lesson_question_results/:id/edit(.:format)
  // function(id, options)
  edit_admin_lesson_question_result_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_question_results",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_mailing_list => /admin/mailing_lists/:id/edit(.:format)
  // function(id, options)
  edit_admin_mailing_list_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mailing_lists",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_mentor => /admin/mentors/:id/edit(.:format)
  // function(id, options)
  edit_admin_mentor_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mentors",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_profit => /admin/profit/edit(.:format)
  // function(options)
  edit_admin_profit_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"profit",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_admin_project => /admin/projects/:id/edit(.:format)
  // function(id, options)
  edit_admin_project_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_project_session => /admin/project_sessions/:id/edit(.:format)
  // function(id, options)
  edit_admin_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_promo_code => /admin/promo_codes/:id/edit(.:format)
  // function(id, options)
  edit_admin_promo_code_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"promo_codes",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_rewarding_action => /admin/rewarding_actions/:id/edit(.:format)
  // function(id, options)
  edit_admin_rewarding_action_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"rewarding_actions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_search_query => /admin/search_queries/:id/edit(.:format)
  // function(id, options)
  edit_admin_search_query_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"search_queries",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_stack => /admin/stacks/:id/edit(.:format)
  // function(id, options)
  edit_admin_stack_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stacks",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_stripe_event => /admin/stripe_events/:id/edit(.:format)
  // function(id, options)
  edit_admin_stripe_event_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stripe_events",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_subscription_unsubscribe_reason => /admin/subscription_unsubscribe_reasons/:id/edit(.:format)
  // function(id, options)
  edit_admin_subscription_unsubscribe_reason_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"subscription_unsubscribe_reasons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_tag => /admin/tags/:id/edit(.:format)
  // function(id, options)
  edit_admin_tag_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"tags",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_teacher => /admin/teachers/:id/edit(.:format)
  // function(id, options)
  edit_admin_teacher_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"teachers",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_topic => /admin/topics/:id/edit(.:format)
  // function(id, options)
  edit_admin_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_user => /admin/users/:id/edit(.:format)
  // function(id, options)
  edit_admin_user_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"users",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_user_reward => /admin/user_rewards/:id/edit(.:format)
  // function(id, options)
  edit_admin_user_reward_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewards",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_user_rewarding_action => /admin/user_rewarding_actions/:id/edit(.:format)
  // function(id, options)
  edit_admin_user_rewarding_action_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewarding_actions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_admin_user_scope => /admin/user_scopes/:id/edit(.:format)
  // function(id, options)
  edit_admin_user_scope_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_scopes",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_api_email => /api/email/edit(.:format)
  // function(options)
  edit_api_email_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"email",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_api_topic => /api/topics/:id/edit(.:format)
  // function(id, options)
  edit_api_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_api_topic_comment_like => /api/topics/:topic_id/comments/:comment_id/likes/:id/edit(.:format)
  // function(topic_id, comment_id, id, options)
  edit_api_topic_comment_like_path: Utils.route([["topic_id",true],["comment_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"comment_id",false],[2,[7,"/",false],[2,[6,"likes",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]]]),
// edit_api_user => /api/user/edit(.:format)
  // function(options)
  edit_api_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"user",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_business_company => /business/company/edit(.:format)
  // function(options)
  edit_business_company_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_business_member => /business/members/:id/edit(.:format)
  // function(id, options)
  edit_business_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_business_vacancy => /business/vacancies/:id/edit(.:format)
  // function(id, options)
  edit_business_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_code_reviews_comments => /code_reviews_comments/edit(.:format)
  // function(options)
  edit_code_reviews_comments_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews_comments",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// edit_community => /community/edit(.:format)
  // function(options)
  edit_community_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"community",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// edit_content_team_course => /content_teams/:content_team_id/courses/:id/edit(.:format)
  // function(content_team_id, id, options)
  edit_content_team_course_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_content_team_course_challenge => /content_teams/:content_team_id/course_challenges/:id/edit(.:format)
  // function(content_team_id, id, options)
  edit_content_team_course_challenge_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_content_team_exercise => /content_teams/:content_team_id/exercises/:id/edit(.:format)
  // function(content_team_id, id, options)
  edit_content_team_exercise_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_content_team_lesson => /content_teams/:content_team_id/lessons/:id/edit(.:format)
  // function(content_team_id, id, options)
  edit_content_team_lesson_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_content_team_project => /content_teams/:content_team_id/projects/:id/edit(.:format)
  // function(content_team_id, id, options)
  edit_content_team_project_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_content_team_project_version => /content_teams/:content_team_id/projects/:project_id/versions/:id/edit(.:format)
  // function(content_team_id, project_id, id, options)
  edit_content_team_project_version_path: Utils.route([["content_team_id",true],["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"versions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// edit_feedback => /feedback/edit(.:format)
  // function(options)
  edit_feedback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"feedback",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// edit_hr_candidate => /hr/candidates/:id/edit(.:format)
  // function(id, options)
  edit_hr_candidate_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"candidates",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_hr_company => /hr/companies/:id/edit(.:format)
  // function(id, options)
  edit_hr_company_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"companies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_hr_recruiter => /hr/recruiters/:id/edit(.:format)
  // function(id, options)
  edit_hr_recruiter_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"recruiters",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_hr_vacancy => /hr/vacancies/:id/edit(.:format)
  // function(id, options)
  edit_hr_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_mentorship_mentor => /mentorship/mentor/edit(.:format)
  // function(options)
  edit_mentorship_mentor_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"mentor",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_mentorship_project_member => /mentorship/project_members/:id/edit(.:format)
  // function(id, options)
  edit_mentorship_project_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_mentorship_project_session => /mentorship/project_sessions/:id/edit(.:format)
  // function(id, options)
  edit_mentorship_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_my_blog_post => /my/blog_posts/:id/edit(.:format)
  // function(id, options)
  edit_my_blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_my_challenge => /my/challenges/:id/edit(.:format)
  // function(id, options)
  edit_my_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_my_code_review => /my/code_reviews/:id/edit(.:format)
  // function(id, options)
  edit_my_code_review_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_my_project_session => /my/project_sessions/:id/edit(.:format)
  // function(id, options)
  edit_my_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_my_topic => /my/topics/:id/edit(.:format)
  // function(id, options)
  edit_my_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// edit_page => /pages/:id/edit(.:format)
  // function(id, options)
  edit_page_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"pages",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_password => /password/edit(.:format)
  // function(options)
  edit_password_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"password",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// edit_project_session => /projects/:project_id/sessions/:id/edit(.:format)
  // function(project_id, id, options)
  edit_project_session_path: Utils.route([["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// edit_promo_page => /promo_pages/:id/edit(.:format)
  // function(id, options)
  edit_promo_page_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_pages",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_rating => /ratings/:id/edit(.:format)
  // function(id, options)
  edit_rating_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"ratings",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_subscriber => /subscribers/:id/edit(.:format)
  // function(id, options)
  edit_subscriber_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"subscribers",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// edit_topic => /topics/:id/edit(.:format)
  // function(id, options)
  edit_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"edit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// email_unsubscribe_reason => /email_unsubscribe_reason(.:format)
  // function(options)
  email_unsubscribe_reason_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"email_unsubscribe_reason",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// event_api_stripe_webhook => /api/stripe_webhook/event(.:format)
  // function(options)
  event_api_stripe_webhook_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"stripe_webhook",false],[2,[7,"/",false],[2,[6,"event",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// exercise_unit_course_lesson => /courses/:course_id/lessons/:id/exercise_unit(.:format)
  // function(course_id, id, options)
  exercise_unit_course_lesson_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"exercise_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// exercise_unit_lesson => /lessons/:id/exercise_unit(.:format)
  // function(id, options)
  exercise_unit_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"exercise_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// feedback => /feedback(.:format)
  // function(options)
  feedback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"feedback",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// finish_api_challenge => /api/challenges/:id/finish(.:format)
  // function(id, options)
  finish_api_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// finish_content_team_course => /content_teams/:content_team_id/courses/:id/finish(.:format)
  // function(content_team_id, id, options)
  finish_content_team_course_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// finish_course => /courses/:id/finish(.:format)
  // function(id, options)
  finish_course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// finish_mentorship_project_member => /mentorship/project_members/:id/finish(.:format)
  // function(id, options)
  finish_mentorship_project_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// finish_mentorship_project_session => /mentorship/project_sessions/:id/finish(.:format)
  // function(id, options)
  finish_mentorship_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// finish_project_session_check_point => /projects/:project_id/sessions/:session_id/check_points/:id/finish(.:format)
  // function(project_id, session_id, id, options)
  finish_project_session_check_point_path: Utils.route([["project_id",true],["session_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"check_points",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// finish_unit_api_lesson => /api/lessons/:id/finish_unit(.:format)
  // function(id, options)
  finish_unit_api_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// finish_unit_course_lesson => /courses/:course_id/lessons/:id/finish_unit(.:format)
  // function(course_id, id, options)
  finish_unit_course_lesson_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"finish_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// finished_lessons_invoices_admin_analytics => /admin/analytics/finished_lessons_invoices(.:format)
  // function(options)
  finished_lessons_invoices_admin_analytics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"analytics",false],[2,[7,"/",false],[2,[6,"finished_lessons_invoices",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// finished_lessons_invoices_api_admin_chart => /api/admin/chart/finished_lessons_invoices(.:format)
  // function(options)
  finished_lessons_invoices_api_admin_chart_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"chart",false],[2,[7,"/",false],[2,[6,"finished_lessons_invoices",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// finished_lessons_paid_users_admin_analytics => /admin/analytics/finished_lessons_paid_users(.:format)
  // function(options)
  finished_lessons_paid_users_admin_analytics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"analytics",false],[2,[7,"/",false],[2,[6,"finished_lessons_paid_users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// finished_lessons_paid_users_api_admin_chart => /api/admin/chart/finished_lessons_paid_users(.:format)
  // function(options)
  finished_lessons_paid_users_api_admin_chart_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"chart",false],[2,[7,"/",false],[2,[6,"finished_lessons_paid_users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// free_courses => /courses/free(.:format)
  // function(options)
  free_courses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"free",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// from_repository_content_team_course => /content_teams/:content_team_id/courses/:id/from_repository(.:format)
  // function(content_team_id, id, options)
  from_repository_content_team_course_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"from_repository",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// from_repository_content_team_project => /content_teams/:content_team_id/projects/:id/from_repository(.:format)
  // function(content_team_id, id, options)
  from_repository_content_team_project_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"from_repository",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// gift => /gift(.:format)
  // function(options)
  gift_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"gift",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// goto_course => /courses/:id/goto(.:format)
  // function(id, options)
  goto_course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"goto",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// goto_profession => /professions/:id/goto(.:format)
  // function(id, options)
  goto_profession_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"professions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"goto",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// heartbeat_api_instance => /api/instances/:id/heartbeat(.:format)
  // function(id, options)
  heartbeat_api_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"heartbeat",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// heartbeat_api_instance_run => /api/instances/:instance_id/runs/:id/heartbeat(.:format)
  // function(instance_id, id, options)
  heartbeat_api_instance_run_path: Utils.route([["instance_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"instance_id",false],[2,[7,"/",false],[2,[6,"runs",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"heartbeat",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// hr_candidate => /hr/candidates/:id(.:format)
  // function(id, options)
  hr_candidate_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"candidates",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// hr_candidates => /hr/candidates(.:format)
  // function(options)
  hr_candidates_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"candidates",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// hr_companies => /hr/companies(.:format)
  // function(options)
  hr_companies_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"companies",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// hr_company => /hr/companies/:id(.:format)
  // function(id, options)
  hr_company_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"companies",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// hr_index => /hr(.:format)
  // function(options)
  hr_index_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// hr_recruiter => /hr/recruiters/:id(.:format)
  // function(id, options)
  hr_recruiter_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"recruiters",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// hr_recruiters => /hr/recruiters(.:format)
  // function(options)
  hr_recruiters_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"recruiters",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// hr_root => /hr(.:format)
  // function(options)
  hr_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// hr_vacancies => /hr/vacancies(.:format)
  // function(options)
  hr_vacancies_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"vacancies",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// hr_vacancy => /hr/vacancies/:id(.:format)
  // function(id, options)
  hr_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"hr",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// instance => /instances/:id(.:format)
  // function(id, options)
  instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// internships => /internships(.:format)
  // function(options)
  internships_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"internships",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// invoices_paid_users_admin_analytics => /admin/analytics/invoices_paid_users(.:format)
  // function(options)
  invoices_paid_users_admin_analytics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"analytics",false],[2,[7,"/",false],[2,[6,"invoices_paid_users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// invoices_paid_users_api_admin_chart => /api/admin/chart/invoices_paid_users(.:format)
  // function(options)
  invoices_paid_users_api_admin_chart_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"chart",false],[2,[7,"/",false],[2,[6,"invoices_paid_users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// job => /jobs/:id(.:format)
  // function(id, options)
  job_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"jobs",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// job_response => /jobs/:job_id/response(.:format)
  // function(job_id, options)
  job_response_path: Utils.route([["job_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"jobs",false],[2,[7,"/",false],[2,[3,"job_id",false],[2,[7,"/",false],[2,[6,"response",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// jobs => /jobs(.:format)
  // function(options)
  jobs_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"jobs",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// last_viewed_notification_api_user => /api/user/last_viewed_notification(.:format)
  // function(options)
  last_viewed_notification_api_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"user",false],[2,[7,"/",false],[2,[6,"last_viewed_notification",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// leave_account_company_member => /account/company/members/:id/leave(.:format)
  // function(id, options)
  leave_account_company_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"leave",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// leave_project_session => /projects/:project_id/sessions/:id/leave(.:format)
  // function(project_id, id, options)
  leave_project_session_path: Utils.route([["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"leave",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// lesson_member => /lessons/:lesson_id/member(.:format)
  // function(lesson_id, options)
  lesson_member_path: Utils.route([["lesson_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"lesson_id",false],[2,[7,"/",false],[2,[6,"member",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// lesson_members => /lessons/:lesson_id/members(.:format)
  // function(lesson_id, options)
  lesson_members_path: Utils.route([["lesson_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"lesson_id",false],[2,[7,"/",false],[2,[6,"members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// lessons => /lessons.:format
  // function(format, options)
  lessons_path: Utils.route([["format",true]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[8,".",false],[3,"format",false]]]]),
// mark_as_solution_api_topic_comment => /api/topics/:topic_id/comments/:id/mark_as_solution(.:format)
  // function(topic_id, id, options)
  mark_as_solution_api_topic_comment_path: Utils.route([["topic_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"mark_as_solution",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// mentors => /mentors(.:format)
  // function(options)
  mentors_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentors",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// mentorship_check_points => /mentorship/check_points(.:format)
  // function(options)
  mentorship_check_points_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"check_points",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_mentor => /mentorship/mentor(.:format)
  // function(options)
  mentorship_mentor_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"mentor",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_project_comments => /mentorship/project_comments(.:format)
  // function(options)
  mentorship_project_comments_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_comments",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_project_members => /mentorship/project_members(.:format)
  // function(options)
  mentorship_project_members_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_members",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_project_session => /mentorship/project_sessions/:id(.:format)
  // function(id, options)
  mentorship_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// mentorship_project_session_topics => /mentorship/project_session_topics(.:format)
  // function(options)
  mentorship_project_session_topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_session_topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_project_sessions => /mentorship/project_sessions(.:format)
  // function(options)
  mentorship_project_sessions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_root => /mentorship(.:format)
  // function(options)
  mentorship_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// mentorship_topics => /mentorship/topics(.:format)
  // function(options)
  mentorship_topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// mentorship_user => /mentorship/users/:id(.:format)
  // function(id, options)
  mentorship_user_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"users",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// mentorship_users => /mentorship/users(.:format)
  // function(options)
  mentorship_users_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// my_blog_post => /my/blog_posts/:id(.:format)
  // function(id, options)
  my_blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// my_blog_posts => /my/blog_posts(.:format)
  // function(options)
  my_blog_posts_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// my_challenge => /my/challenges/:id(.:format)
  // function(id, options)
  my_challenge_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// my_challenges => /my/challenges(.:format)
  // function(options)
  my_challenges_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"challenges",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// my_code_review => /my/code_reviews/:id(.:format)
  // function(id, options)
  my_code_review_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// my_code_reviews => /my/code_reviews(.:format)
  // function(options)
  my_code_reviews_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"code_reviews",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// my_project_session => /my/project_sessions/:id(.:format)
  // function(id, options)
  my_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// my_project_sessions => /my/project_sessions(.:format)
  // function(options)
  my_project_sessions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// my_root => /my(.:format)
  // function(options)
  my_root_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// my_topic => /my/topics/:id(.:format)
  // function(id, options)
  my_topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// my_topics => /my/topics(.:format)
  // function(options)
  my_topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_account_card => /account/card/new(.:format)
  // function(options)
  new_account_card_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"card",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_account_company_member => /account/company/members/new(.:format)
  // function(options)
  new_account_company_member_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_account_promo_codes => /account/promo_codes/new(.:format)
  // function(options)
  new_account_promo_codes_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"promo_codes",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_bill => /admin/bills/new(.:format)
  // function(options)
  new_admin_bill_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"bills",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_blog_post_category => /admin/blog_post_categories/new(.:format)
  // function(options)
  new_admin_blog_post_category_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"blog_post_categories",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_category => /admin/categories/new(.:format)
  // function(options)
  new_admin_category_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"categories",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_challenge => /admin/challenges/new(.:format)
  // function(options)
  new_admin_challenge_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_company => /admin/companies/new(.:format)
  // function(options)
  new_admin_company_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"companies",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_company_member => /admin/company_members/new(.:format)
  // function(options)
  new_admin_company_member_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_members",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_company_vacancy => /admin/company_vacancies/new(.:format)
  // function(options)
  new_admin_company_vacancy_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"company_vacancies",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_content_team => /admin/content_teams/new(.:format)
  // function(options)
  new_admin_content_team_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_course => /admin/courses/new(.:format)
  // function(options)
  new_admin_course_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_course_challenge => /admin/course_challenges/new(.:format)
  // function(options)
  new_admin_course_challenge_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_email_unsubscribe_reason => /admin/email_unsubscribe_reasons/new(.:format)
  // function(options)
  new_admin_email_unsubscribe_reason_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"email_unsubscribe_reasons",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_event => /admin/events/new(.:format)
  // function(options)
  new_admin_event_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"events",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_exercise => /admin/exercises/new(.:format)
  // function(options)
  new_admin_exercise_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_game_member => /admin/game_members/new(.:format)
  // function(options)
  new_admin_game_member_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"game_members",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_instance => /admin/instances/new(.:format)
  // function(options)
  new_admin_instance_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_instance_result => /admin/instance_results/new(.:format)
  // function(options)
  new_admin_instance_result_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instance_results",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_intro_email => /admin/intro_emails/new(.:format)
  // function(options)
  new_admin_intro_email_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"intro_emails",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_lesson => /admin/lessons/new(.:format)
  // function(options)
  new_admin_lesson_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_lesson_member => /admin/lesson_members/new(.:format)
  // function(options)
  new_admin_lesson_member_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_members",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_lesson_question_result => /admin/lesson_question_results/new(.:format)
  // function(options)
  new_admin_lesson_question_result_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"lesson_question_results",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_mailing_list => /admin/mailing_lists/new(.:format)
  // function(options)
  new_admin_mailing_list_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mailing_lists",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_mentor => /admin/mentors/new(.:format)
  // function(options)
  new_admin_mentor_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"mentors",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_profit => /admin/profit/new(.:format)
  // function(options)
  new_admin_profit_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"profit",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_project => /admin/projects/new(.:format)
  // function(options)
  new_admin_project_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_project_session => /admin/project_sessions/new(.:format)
  // function(options)
  new_admin_project_session_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_promo_code => /admin/promo_codes/new(.:format)
  // function(options)
  new_admin_promo_code_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"promo_codes",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_rewarding_action => /admin/rewarding_actions/new(.:format)
  // function(options)
  new_admin_rewarding_action_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"rewarding_actions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_search_query => /admin/search_queries/new(.:format)
  // function(options)
  new_admin_search_query_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"search_queries",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_stack => /admin/stacks/new(.:format)
  // function(options)
  new_admin_stack_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stacks",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_stripe_event => /admin/stripe_events/new(.:format)
  // function(options)
  new_admin_stripe_event_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"stripe_events",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_subscription_unsubscribe_reason => /admin/subscription_unsubscribe_reasons/new(.:format)
  // function(options)
  new_admin_subscription_unsubscribe_reason_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"subscription_unsubscribe_reasons",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_tag => /admin/tags/new(.:format)
  // function(options)
  new_admin_tag_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"tags",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_teacher => /admin/teachers/new(.:format)
  // function(options)
  new_admin_teacher_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"teachers",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_topic => /admin/topics/new(.:format)
  // function(options)
  new_admin_topic_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_user => /admin/users/new(.:format)
  // function(options)
  new_admin_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"users",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_user_reward => /admin/user_rewards/new(.:format)
  // function(options)
  new_admin_user_reward_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewards",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_user_rewarding_action => /admin/user_rewarding_actions/new(.:format)
  // function(options)
  new_admin_user_rewarding_action_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_rewarding_actions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_admin_user_scope => /admin/user_scopes/new(.:format)
  // function(options)
  new_admin_user_scope_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"user_scopes",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_api_email => /api/email/new(.:format)
  // function(options)
  new_api_email_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"email",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_api_topic => /api/topics/new(.:format)
  // function(options)
  new_api_topic_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_api_topic_comment_like => /api/topics/:topic_id/comments/:comment_id/likes/new(.:format)
  // function(topic_id, comment_id, options)
  new_api_topic_comment_like_path: Utils.route([["topic_id",true],["comment_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"comment_id",false],[2,[7,"/",false],[2,[6,"likes",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// new_api_user => /api/user/new(.:format)
  // function(options)
  new_api_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"user",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_business_billing => /business/billing/new(.:format)
  // function(options)
  new_business_billing_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"billing",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_business_company => /business/company/new(.:format)
  // function(options)
  new_business_company_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"company",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_business_member => /business/members/new(.:format)
  // function(options)
  new_business_member_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_business_vacancy => /business/vacancies/new(.:format)
  // function(options)
  new_business_vacancy_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_code_reviews_comments => /code_reviews_comments/new(.:format)
  // function(options)
  new_code_reviews_comments_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"code_reviews_comments",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_community => /community/new(.:format)
  // function(options)
  new_community_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"community",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_content_team_course => /content_teams/:content_team_id/courses/new(.:format)
  // function(content_team_id, options)
  new_content_team_course_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_content_team_course_challenge => /content_teams/:content_team_id/course_challenges/new(.:format)
  // function(content_team_id, options)
  new_content_team_course_challenge_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_content_team_exercise => /content_teams/:content_team_id/exercises/new(.:format)
  // function(content_team_id, options)
  new_content_team_exercise_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"exercises",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_content_team_lesson => /content_teams/:content_team_id/lessons/new(.:format)
  // function(content_team_id, options)
  new_content_team_lesson_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_content_team_project => /content_teams/:content_team_id/projects/new(.:format)
  // function(content_team_id, options)
  new_content_team_project_path: Utils.route([["content_team_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_content_team_project_version => /content_teams/:content_team_id/projects/:project_id/versions/new(.:format)
  // function(content_team_id, project_id, options)
  new_content_team_project_version_path: Utils.route([["content_team_id",true],["project_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"versions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// new_email_unsubscribe_reason => /email_unsubscribe_reason/new(.:format)
  // function(options)
  new_email_unsubscribe_reason_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"email_unsubscribe_reason",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_feedback => /feedback/new(.:format)
  // function(options)
  new_feedback_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"feedback",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_mentorship_mentor => /mentorship/mentor/new(.:format)
  // function(options)
  new_mentorship_mentor_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"mentor",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_my_blog_post => /my/blog_posts/new(.:format)
  // function(options)
  new_my_blog_post_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_my_challenge => /my/challenges/new(.:format)
  // function(options)
  new_my_challenge_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"challenges",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_my_code_review => /my/code_reviews/new(.:format)
  // function(options)
  new_my_code_review_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"code_reviews",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_my_project_session => /my/project_sessions/new(.:format)
  // function(options)
  new_my_project_session_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_my_topic => /my/topics/new(.:format)
  // function(options)
  new_my_topic_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// new_page => /pages/new(.:format)
  // function(options)
  new_page_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"pages",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_project_session => /projects/:project_id/sessions/new(.:format)
  // function(project_id, options)
  new_project_session_path: Utils.route([["project_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// new_promo_page => /promo_pages/new(.:format)
  // function(options)
  new_promo_page_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_pages",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_rating => /ratings/new(.:format)
  // function(options)
  new_rating_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"ratings",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_remind_password => /remind_password/new(.:format)
  // function(options)
  new_remind_password_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"remind_password",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_session => /session/new(.:format)
  // function(options)
  new_session_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"session",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_subscriber => /subscribers/new(.:format)
  // function(options)
  new_subscriber_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"subscribers",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_subscription => /subscription/new(.:format)
  // function(options)
  new_subscription_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"subscription",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_topic => /topics/new(.:format)
  // function(options)
  new_topic_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// new_user => /u/new(.:format)
  // function(options)
  new_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"u",false],[2,[7,"/",false],[2,[6,"new",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// news => /news/:id(.:format)
  // function(id, options)
  news_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"news",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// news_index => /news(.:format)
  // function(options)
  news_index_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"news",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// next_course_lesson => /courses/:course_id/lessons/:id/next(.:format)
  // function(course_id, id, options)
  next_course_lesson_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"next",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// not_forbidden_errors => /403(.:format)
  // function(options)
  not_forbidden_errors_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"403",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// not_found_errors => /404(.:format)
  // function(options)
  not_found_errors_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"404",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// page => /pages/:id(.:format)
  // function(id, options)
  page_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"pages",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// pages => /pages(.:format)
  // function(options)
  pages_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"pages",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// password => /password(.:format)
  // function(options)
  password_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"password",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// planned_admin_courses => /admin/courses/planned(.:format)
  // function(options)
  planned_admin_courses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"planned",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// prepare_repo_project_session_member => /projects/:project_id/sessions/:session_id/members/:id/prepare_repo(.:format)
  // function(project_id, session_id, id, options)
  prepare_repo_project_session_member_path: Utils.route([["project_id",true],["session_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"prepare_repo",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// pricing => /pricing(.:format)
  // function(options)
  pricing_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"pricing",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// private_api_teachers => /private_api/teachers(.:format)
  // function(options)
  private_api_teachers_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"private_api",false],[2,[7,"/",false],[2,[6,"teachers",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// private_api_users => /private_api/users(.:format)
  // function(options)
  private_api_users_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"private_api",false],[2,[7,"/",false],[2,[6,"users",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// process_api_sparkpost_webhook => /api/sparkpost_webhook/process(.:format)
  // function(options)
  process_api_sparkpost_webhook_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"sparkpost_webhook",false],[2,[7,"/",false],[2,[6,"process",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// profession => /professions/:id(.:format)
  // function(id, options)
  profession_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"professions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// profession_member => /professions/:profession_id/member(.:format)
  // function(profession_id, options)
  profession_member_path: Utils.route([["profession_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"professions",false],[2,[7,"/",false],[2,[3,"profession_id",false],[2,[7,"/",false],[2,[6,"member",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// professions => /professions(.:format)
  // function(options)
  professions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"professions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// profit => /profit(.:format)
  // function(options)
  profit_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"profit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// project_session => /projects/:project_id/sessions/:id(.:format)
  // function(project_id, id, options)
  project_session_path: Utils.route([["project_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// project_session_check_point_comments => /projects/:project_id/sessions/:session_id/check_points/:check_point_id/comments(.:format)
  // function(project_id, session_id, check_point_id, options)
  project_session_check_point_comments_path: Utils.route([["project_id",true],["session_id",true],["check_point_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"check_points",false],[2,[7,"/",false],[2,[3,"check_point_id",false],[2,[7,"/",false],[2,[6,"comments",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]]]),
// project_session_check_points => /projects/:project_id/sessions/:session_id/check_points(.:format)
  // function(project_id, session_id, options)
  project_session_check_points_path: Utils.route([["project_id",true],["session_id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"check_points",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// project_session_group_stack_member => /stack_members/:id/project_session_group(.:format)
  // function(id, options)
  project_session_group_stack_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"stack_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"project_session_group",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// project_session_member => /projects/:project_id/sessions/:session_id/members/:id(.:format)
  // function(project_id, session_id, id, options)
  project_session_member_path: Utils.route([["project_id",true],["session_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[2,[7,"/",false],[2,[3,"project_id",false],[2,[7,"/",false],[2,[6,"sessions",false],[2,[7,"/",false],[2,[3,"session_id",false],[2,[7,"/",false],[2,[6,"members",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// project_sessions => /project_sessions(.:format)
  // function(options)
  project_sessions_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"project_sessions",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// projects => /projects(.:format)
  // function(options)
  projects_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"projects",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// promo_code => /promo_code(.:format)
  // function(options)
  promo_code_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_code",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// promo_page => /promo_pages/:id(.:format)
  // function(id, options)
  promo_page_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_pages",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// promo_pages => /promo_pages(.:format)
  // function(options)
  promo_pages_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_pages",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// promo_pages_principles => /promo_pages/principles(.:format)
  // function(options)
  promo_pages_principles_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"promo_pages",false],[2,[7,"/",false],[2,[6,"principles",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// quiz_unit_course_lesson => /courses/:course_id/lessons/:id/quiz_unit(.:format)
  // function(course_id, id, options)
  quiz_unit_course_lesson_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"quiz_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// quiz_unit_lesson => /lessons/:id/quiz_unit(.:format)
  // function(id, options)
  quiz_unit_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"quiz_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// rating => /ratings/:id(.:format)
  // function(id, options)
  rating_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"ratings",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// ratings => /ratings(.:format)
  // function(options)
  ratings_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"ratings",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// refile_app => /attachments
  // function(options)
  refile_app_path: Utils.route([], {}, [2,[7,"/",false],[6,"attachments",false]]),
// remind_password => /remind_password(.:format)
  // function(options)
  remind_password_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"remind_password",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// resend_confirmation_user => /u/:id/resend_confirmation(.:format)
  // function(id, options)
  resend_confirmation_user_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"u",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"resend_confirmation",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// reset_password_account_profile => /account/profile/reset_password(.:format)
  // function(options)
  reset_password_account_profile_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"account",false],[2,[7,"/",false],[2,[6,"profile",false],[2,[7,"/",false],[2,[6,"reset_password",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// root => /
  // function(options)
  root_path: Utils.route([], {}, [7,"/",false]),
// search_courses => /courses/search(.:format)
  // function(options)
  search_courses_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[6,"search",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// send_to_moderate_business_vacancy => /business/vacancies/:id/send_to_moderate(.:format)
  // function(id, options)
  send_to_moderate_business_vacancy_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"business",false],[2,[7,"/",false],[2,[6,"vacancies",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"send_to_moderate",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// send_to_moderate_content_team_course => /content_teams/:content_team_id/courses/:id/send_to_moderate(.:format)
  // function(content_team_id, id, options)
  send_to_moderate_content_team_course_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"send_to_moderate",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// send_to_moderate_content_team_course_challenge => /content_teams/:content_team_id/course_challenges/:id/send_to_moderate(.:format)
  // function(content_team_id, id, options)
  send_to_moderate_content_team_course_challenge_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"course_challenges",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"send_to_moderate",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// send_to_moderate_content_team_lesson => /content_teams/:content_team_id/lessons/:id/send_to_moderate(.:format)
  // function(content_team_id, id, options)
  send_to_moderate_content_team_lesson_path: Utils.route([["content_team_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"content_teams",false],[2,[7,"/",false],[2,[3,"content_team_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"send_to_moderate",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// send_to_moderate_my_blog_post => /my/blog_posts/:id/send_to_moderate(.:format)
  // function(id, options)
  send_to_moderate_my_blog_post_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"my",false],[2,[7,"/",false],[2,[6,"blog_posts",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"send_to_moderate",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// session => /session(.:format)
  // function(options)
  session_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"session",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// set_project_session_group_stack_member => /stack_members/:id/set_project_session_group(.:format)
  // function(id, options)
  set_project_session_group_stack_member_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"stack_members",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"set_project_session_group",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// social_network => /social_network(.:format)
  // function(options)
  social_network_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"social_network",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// solution_api_instance => /api/instances/:id/solution(.:format)
  // function(id, options)
  solution_api_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"solution",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// solution_api_instance_run => /api/instances/:instance_id/runs/:id/solution(.:format)
  // function(instance_id, id, options)
  solution_api_instance_run_path: Utils.route([["instance_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"instance_id",false],[2,[7,"/",false],[2,[6,"runs",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"solution",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// start_mentorship_project_session => /mentorship/project_sessions/:id/start(.:format)
  // function(id, options)
  start_mentorship_project_session_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"mentorship",false],[2,[7,"/",false],[2,[6,"project_sessions",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"start",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// subscriber => /subscribers/:id(.:format)
  // function(id, options)
  subscriber_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"subscribers",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// subscribers => /subscribers(.:format)
  // function(options)
  subscribers_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"subscribers",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// subscription => /subscription(.:format)
  // function(options)
  subscription_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"subscription",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// summary_course => /courses/:id/summary(.:format)
  // function(id, options)
  summary_course_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"summary",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// teams => /teams(.:format)
  // function(options)
  teams_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"teams",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// testimonials_pages => /pages/testimonials(.:format)
  // function(options)
  testimonials_pages_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"pages",false],[2,[7,"/",false],[2,[6,"testimonials",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// theory_unit_course_lesson => /courses/:course_id/lessons/:id/theory_unit(.:format)
  // function(course_id, id, options)
  theory_unit_course_lesson_path: Utils.route([["course_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"courses",false],[2,[7,"/",false],[2,[3,"course_id",false],[2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"theory_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]),
// theory_unit_lesson => /lessons/:id/theory_unit(.:format)
  // function(id, options)
  theory_unit_lesson_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"lessons",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"theory_unit",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]),
// topic => /topics/:id(.:format)
  // function(id, options)
  topic_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// topics => /topics(.:format)
  // function(options)
  topics_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"topics",false],[1,[2,[8,".",false],[3,"format",false]],false]]]),
// unmark_as_solution_api_topic_comment => /api/topics/:topic_id/comments/:id/unmark_as_solution(.:format)
  // function(topic_id, id, options)
  unmark_as_solution_api_topic_comment_path: Utils.route([["topic_id",true],["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"api",false],[2,[7,"/",false],[2,[6,"topics",false],[2,[7,"/",false],[2,[3,"topic_id",false],[2,[7,"/",false],[2,[6,"comments",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"unmark_as_solution",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]]]]]),
// unsubscribe_user => /user/unsubscribe(.:format)
  // function(options)
  unsubscribe_user_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"user",false],[2,[7,"/",false],[2,[6,"unsubscribe",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// upload_admin_instance => /admin/instances/:id/upload(.:format)
  // function(id, options)
  upload_admin_instance_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"admin",false],[2,[7,"/",false],[2,[6,"instances",false],[2,[7,"/",false],[2,[3,"id",false],[2,[7,"/",false],[2,[6,"upload",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]]]]]),
// user => /u/:id(.:format)
  // function(id, options)
  user_path: Utils.route([["id",true],["format",false]], {}, [2,[7,"/",false],[2,[6,"u",false],[2,[7,"/",false],[2,[3,"id",false],[1,[2,[8,".",false],[3,"format",false]],false]]]]]),
// users => /u(.:format)
  // function(options)
  users_path: Utils.route([["format",false]], {}, [2,[7,"/",false],[2,[6,"u",false],[1,[2,[8,".",false],[3,"format",false]],false]]])}
;
    root.Routes.options = defaults;
    root.Routes.default_serializer = function(object, prefix) {
      return Utils.default_serializer(object, prefix);
    };
    return root.Routes;
  };

  if (typeof define === "function" && define.amd) {
    define([], function() {
      return createGlobalJsRoutesObject();
    });
  } else {
    createGlobalJsRoutesObject();
  }

}).call(this);
function getMainHost() {
  return location.hostname.split('.').slice(-2).join('.');
}

function marked(context) {
  var markdown = new markdownit({ linkify: true });
  return markdown.render(context);
}

function initAutocomplete(element, url, collectionName) {
  element.select2({
    ajax: {
      url: url,
      dataType: 'json',
      delay: 250,
      cache: true,
      processResults: function (data, params) {
        return {
          results: data[collectionName],
        };
      },
    },
    minimumInputLength: 3,
  });
}

function initCountryCitySelects(params) {
  var locale = params.locale;
  var $countrySelect = $(params.countrySelect).select2({
    allowClear: true,
    placeholder: ""
  });

  var $citySelect = $(params.citySelect).select2({
    allowClear: true,
    placeholder: "",
    minimumInputLength: 2,

    ajax: {
      url: Routes.api_cities_path(),
      dataType: "json",
      delay: 500,
      data: function (params) {
        var filter = {};
        filter["q[title_" + locale + "_start]"] = params.term;
        filter["q[country_id_eq]"] = $countrySelect.val();
        return filter;

      },
      processResults: function (data, params) {
        return { results: data.cities  };

      }

    }

  });
}
;








