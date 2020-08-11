!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(){var e=document.createElement("div");e.className="homePage";var t=document.createElement("img");t.width=90,t.height=90,t.src="/assets/images/logo.png";var n=document.createElement("div");n.className="title",n.textContent="ÍSLANDSMÁL CAFÉ";var a=document.createElement("div");a.className="subtitle",a.textContent="Café and Restaurant located in the heart of Reykjavík";var r=document.createElement("div");return r.className="subtitle",r.textContent="Open 7 days a week 08:00 - 23:00",e.appendChild(n),e.appendChild(a),e.appendChild(r),e},r=document.getElementById("homeAnchor"),o=document.getElementById("menuAnchor"),l=document.getElementById("contactAnchor"),c=document.getElementById("content");c.appendChild(a()),r.style.pointerEvents="none",r.style.cursor="default",r.style.borderBottom="2px solid #8d6262",r.addEventListener("click",(function(){c.appendChild(a()),this.style.pointerEvents="none",this.style.cursor="default",this.style.borderBottom="2px solid #8d6262",o.style.pointerEvents="auto",o.style.cursor="pointer",o.style.borderBottom="none",l.style.pointerEvents="auto",l.style.cursor="pointer",l.style.borderBottom="none",document.querySelectorAll(".contactPage").forEach((function(e){e.remove()})),document.querySelectorAll(".menuPage").forEach((function(e){e.remove()}))})),o.addEventListener("click",(function(){c.appendChild(function(){var e=document.createElement("div");e.className="menuPage";var t=document.createElement("div");t.className="menuHero";var n=document.createElement("section"),a=document.createElement("h2");a.className="menuTitle",a.textContent="Breakfast",n.appendChild(a);var r=document.createElement("ul");r.className="menuUl",n.appendChild(r);var o=document.createElement("li");o.className="menuLi",o.textContent="Skyr";var l=document.createElement("li");l.className="menuLi",l.textContent="Hræringur";var c=document.createElement("li");c.className="menuLi",c.textContent="Blood Pudding";var d=document.createElement("li");d.className="menuLi",d.textContent="Haframjölskökur",r.appendChild(o),r.appendChild(l),r.appendChild(c),r.appendChild(d);var m=document.createElement("section"),i=document.createElement("h2");i.className="menuTitle",i.textContent="Lunch",m.appendChild(i);var u=document.createElement("ul");u.className="menuUl",m.appendChild(u);var s=document.createElement("li");s.className="menuLi",s.textContent="Svið";var p=document.createElement("li");p.className="menuLi",p.textContent="Slátur";var h=document.createElement("li");h.className="menuLi",h.textContent="Hangikjöt";var v=document.createElement("li");v.className="menuLi",v.textContent="Þorramatur",u.appendChild(s),u.appendChild(p),u.appendChild(h),u.appendChild(v);var C=document.createElement("section"),E=document.createElement("h2");E.className="menuTitle",E.textContent="Dinner",C.appendChild(E);var y=document.createElement("ul");y.className="menuUl",C.appendChild(y);var f=document.createElement("li");f.className="menuLi",f.textContent="Hákarl";var b=document.createElement("li");b.className="menuLi",b.textContent="Kjötsupa";var g=document.createElement("li");g.className="menuLi",g.textContent="Harðfiskur";var x=document.createElement("li");return x.className="menuLi",x.textContent="Hrútspungar",y.appendChild(f),y.appendChild(b),y.appendChild(g),y.appendChild(x),t.appendChild(n),t.appendChild(m),t.appendChild(C),e.appendChild(t),e}()),this.style.pointerEvents="none",this.style.cursor="default",this.style.borderBottom="2px solid #8d6262",r.style.pointerEvents="auto",r.style.cursor="pointer",r.style.borderBottom="none",l.style.pointerEvents="auto",l.style.cursor="pointer",l.style.borderBottom="none",document.querySelectorAll(".contactPage").forEach((function(e){e.remove()})),document.querySelectorAll(".homePage").forEach((function(e){e.remove()}))})),l.addEventListener("click",(function(){c.appendChild(function(){var e=document.createElement("div");e.className="contactPage";var t=document.createElement("img");t.width=90,t.height=90,t.src="/assets/images/logo.png";var n=document.createElement("div");n.className="contactHero";var a=document.createElement("div");a.className="contactTitle",a.textContent="Send us an email",n.appendChild(a);var r=document.createElement("form"),o=document.createElement("section"),l=document.createElement("section"),c=document.createElement("section");c.className="subjectSection";var d=document.createElement("section");d.className="messageSection";var m=document.createElement("label");m.for="name",m.textContent="Name *";var i=document.createElement("input");i.type="text",i.name="name",i.id="name",i.required=!0,o.appendChild(m),o.appendChild(i);var u=document.createElement("label");u.for="email",u.textContent="E-mail *";var s=document.createElement("input");s.type="email",s.name="email",s.id="email",s.required=!0,l.appendChild(u),l.appendChild(s);var p=document.createElement("label");p.for="subject",p.textContent="Subject *";var h=document.createElement("input");h.type="text",h.name="subject",h.id="subject",h.required=!0,c.appendChild(p),c.appendChild(h);var v=document.createElement("label");v.className="messageLabel",v.for="message",v.textContent="Message *";var C=document.createElement("textarea");C.cols="30",C.rows="10",C.name="message",C.id="message",C.required=!0,C.writable=!0,d.appendChild(v),d.appendChild(C);var E=document.createElement("input");return E.className="submitBtn",E.type="submit",E.value="Submit",r.appendChild(o),r.appendChild(l),r.appendChild(c),r.appendChild(d),r.appendChild(E),n.appendChild(r),e.appendChild(n),e}()),this.style.pointerEvents="none",this.style.cursor="default",this.style.borderBottom="2px solid #8d6262",o.style.pointerEvents="auto",o.style.cursor="pointer",o.style.borderBottom="none",r.style.pointerEvents="auto",r.style.cursor="pointer",r.style.borderBottom="none",document.querySelectorAll(".homePage").forEach((function(e){e.remove()})),document.querySelectorAll(".menuPage").forEach((function(e){e.remove()}))}))}]);