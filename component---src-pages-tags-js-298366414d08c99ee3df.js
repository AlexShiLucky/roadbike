(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{261:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});n(41),n(67),n(54),n(150),n(363),n(7);var u=n(0),r=n.n(u),a=n(6),o=n.n(a),i=n(365),f=n.n(i),c=n(90),l=n.n(c),d=n(12),s=n(268),x=function(t){var e=t.data,n=e.allStoryWriterMarkdown.group,u=e.site.siteMetadata,a=(u.title,u.description,u.siteUrl,t.location,n.reduce(function(t,e){var n=f()(e.fieldValue.toLowerCase());return t[n]||(t[n]=Object.assign(e,{slug:"/tags/"+n})),t},{}));return r.a.createElement(s.a,null,r.a.createElement(l.a,{title:"Tags"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Tags"),r.a.createElement("ul",null,Object.keys(a).sort(function(t,e){return t.localeCompare(e)}).map(function(t){var e=a[t];return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(d.Link,{to:e.slug},e.fieldValue," (",e.totalCount,")"))}))))};x.propTypes={data:o.a.shape({allStoryWriterMarkdown:o.a.shape({group:o.a.arrayOf(o.a.shape({fieldValue:o.a.string.isRequired,totalCount:o.a.number.isRequired}).isRequired)})})},e.default=x;var p="32254123"},268:function(t,e,n){"use strict";n(7);var u=n(3),r=n(0),a=n.n(r),o=n(1),i=n.n(o),f=n(4);e.a=function(t){var e,n=t.children,r=t.className,o=void 0===r?"":r,c=t.hasSideBar,l=void 0===c||c,d=t.overrideCSS,s=void 0===d?{}:d;return a.a.createElement("div",{className:Object(u.merge)(Object(u.css)(Object.assign((e={maxWidth:l?Object(f.c)(i.a.maxWidthWithSidebar):Object(f.c)(i.a.maxWidth),margin:"0 auto",padding:Object(f.c)(1.5)+" "+Object(f.c)(f.b.blockMarginBottom),paddingBottom:Object(f.c)(3.5),position:"relative"},e[i.a.Tablet]={paddingBottom:Object(f.c)(1.5)},e),s))+" "+o)},n)}},277:function(t,e,n){var u=n(92),r=n(95),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&u(t)==a}},283:function(t,e,n){var u=n(285);t.exports=function(t){return null==t?"":u(t)}},285:function(t,e,n){var u=n(94),r=n(286),a=n(144),o=n(277),i=1/0,f=u?u.prototype:void 0,c=f?f.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return r(e,t)+"";if(o(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-i?"-0":n}},286:function(t,e){t.exports=function(t,e){for(var n=-1,u=null==t?0:t.length,r=Array(u);++n<u;)r[n]=e(t[n],n,t);return r}},363:function(t,e,n){"use strict";var u=n(16),r=n(55),a=n(39),o=n(22),i=[].sort,f=[1,2,3];u(u.P+u.F*(o(function(){f.sort(void 0)})||!o(function(){f.sort(null)})||!n(364)(i)),"Array",{sort:function(t){return void 0===t?i.call(a(this)):i.call(a(this),r(t))}})},364:function(t,e,n){"use strict";var u=n(22);t.exports=function(t,e){return!!t&&u(function(){e?t.call(null,function(){},1):t.call(null)})}},365:function(t,e,n){var u=n(366)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=u},366:function(t,e,n){var u=n(367),r=n(368),a=n(371),o=RegExp("['’]","g");t.exports=function(t){return function(e){return u(a(r(e).replace(o,"")),t,"")}}},367:function(t,e){t.exports=function(t,e,n,u){var r=-1,a=null==t?0:t.length;for(u&&a&&(n=t[++r]);++r<a;)n=e(n,t[r],r,t);return n}},368:function(t,e,n){var u=n(369),r=n(283),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(a,u).replace(o,"")}},369:function(t,e,n){var u=n(370)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=u},370:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},371:function(t,e,n){var u=n(372),r=n(373),a=n(283),o=n(374);t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?r(t)?o(t):u(t):t.match(e)||[]}},372:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},373:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},374:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+n+"]",r="\\d+",a="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+o+"|"+i+")",s="(?:"+l+"|"+i+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,c].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),v="(?:"+[a,f,c].join("|")+")"+p,b=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,l+d,"$"].join("|")+")",l+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,v].join("|"),"g");t.exports=function(t){return t.match(b)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-298366414d08c99ee3df.js.map