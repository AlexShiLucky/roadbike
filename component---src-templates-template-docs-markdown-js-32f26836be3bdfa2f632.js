(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(3),i=a(5),r=a.n(i),o=a(0),c=a.n(o),l=a(90),s=a.n(l),p=a(69),d=a(274),m=a(268),u=a(275),f={marginTop:0},b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=this.props.data.storyWriterMarkdown,a="<style>"+t.customCss+"</style>\n"+t.html;return c.a.createElement(p.b,null,function(i){i.data,i.set;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement("title",null,t.title),c.a.createElement("meta",{name:"description",content:t.excerpt}),c.a.createElement("meta",{property:"og:description",content:t.excerpt}),c.a.createElement("meta",{property:"og:title",content:t.title}),c.a.createElement("meta",{property:"og:type",content:"article"})),c.a.createElement(d.a,null,c.a.createElement(m.a,null,c.a.createElement("h1",{className:Object(n.css)(f)},t.title),c.a.createElement(u.a,{zipFile:e.data.zipFile,pdfFile:e.data.pdfFile}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))))})},t}(c.a.Component);t.default=b;var h="4266311814"},268:function(e,t,a){"use strict";a(7);var n=a(3),i=a(0),r=a.n(i),o=a(1),c=a.n(o),l=a(4);t.a=function(e){var t,a=e.children,i=e.className,o=void 0===i?"":i,s=e.hasSideBar,p=void 0===s||s,d=e.overrideCSS,m=void 0===d?{}:d;return r.a.createElement("div",{className:Object(n.merge)(Object(n.css)(Object.assign((t={maxWidth:p?Object(l.c)(c.a.maxWidthWithSidebar):Object(l.c)(c.a.maxWidth),margin:"0 auto",padding:Object(l.c)(1.5)+" "+Object(l.c)(l.b.blockMarginBottom),paddingBottom:Object(l.c)(3.5),position:"relative"},t[c.a.Tablet]={paddingBottom:Object(l.c)(1.5)},t),m))+" "+o)},a)}},274:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children;return i.a.createElement("main",{id:"reach-skip-nav",className:"docSearch-content"},t)}},275:function(e,t,a){"use strict";var n=a(5),i=a.n(n),r=a(0),o=a.n(r),c=a(38),l=a(12),s=a(1),p=a.n(s),d=(a(4),Object(c.b)("div",{target:"e1qbz9uc0"})("position:fixed;right:20px;display:none;text-align:right;flex-direction:column;color:",s.colors.ui.border,";",p.a.Tablet,"{display:flex;}",p.a.Desktop,"{display:flex;}& .fas{vertical-align:middle;}& .icon_tip{font-size:.7em;opacity:0;transition:transform 0.5s cubic-bezier(0.18,0.89,0.32,1.28),opacity 0.5s ease-out,color 0.1s linear;transform:translateX(-1em);visibility:hidden;background-color:inherit;white-space:nowrap;border-bottom:1px dashed;display:inline-block;margin-right:10px;}&:hover .icon_tip{opacity:1;transform:none;visibility:visible;}")),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t="",a="";return e.zipFile&&"undefined"!=typeof window&&(t="http://markdown.xiaoshujiang.com/#xsjzip="+encodeURIComponent(window.location.origin+e.zipFile.publicURL)),e.pdfFile&&(a="/pdf/#file="+encodeURIComponent(e.pdfFile.publicURL)),t||a?o.a.createElement(d,null,t&&o.a.createElement("a",{href:t},o.a.createElement("span",{className:"icon_tip"},"修改当前文件"),o.a.createElement("i",{className:"fas fa-file-archive"})),a&&o.a.createElement(l.Link,{to:a},o.a.createElement("span",{className:"icon_tip"},"查看pdf版本"),o.a.createElement("i",{className:"fas fa-file-pdf"}))):""},t}(o.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-templates-template-docs-markdown-js-32f26836be3bdfa2f632.js.map