!function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(h&&h(e);f.length;)f.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={1:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;a.push([6,0]),i()}([,,function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return r}));i(8);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function e(i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=i||".js-scrollAnim",this.$anim=t(this.selector)}var i,r,a;return i=e,(r=[{key:"init",value:function(){this.createIntersectionObserver()}},{key:"createIntersectionObserver",value:function(){this.observer=new IntersectionObserver(this.intersect.bind(this),{root:null,rootMargin:"-40% 0px",threshold:0}),this.observe(this.$anim)}},{key:"observe",value:function(t){var e=this;t.each((function(t,i){e.observer.observe(i)}))}},{key:"intersect",value:function(e){var i=this;e.forEach((function(e){if(e.isIntersecting){var n=t(e.target);i.anim(n)}}))}},{key:"anim",value:function(t){t.addClass("on-anim")}}])&&n(i.prototype,r),a&&n(i,a),Object.defineProperty(i,"prototype",{writable:!1}),e}()}).call(this,i(1))},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"a",(function(){return r}));var r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=this.getRandomInt(.2*e,.9*e),this.y=i,this.targetY=this.getRandomInt(.2*i,.4*i),this.hue=n,this.alpha=1,this.tick=0,this.ttl=this.getRandomInt(120,180)}var e,i,r;return e=t,(i=[{key:"getRandomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"easeOutQuart",value:function(t){return 1-Math.pow(1-t,4)}},{key:"draw",value:function(t){this.tick<=this.ttl&&(t.beginPath(),t.arc(this.x,this.y,3,0,2*Math.PI),t.fillStyle="hsla(".concat(this.hue,", 100%, 50%, ").concat(this.alpha,")"),t.fill(),t.closePath())}},{key:"update",value:function(t){var e=1-(this.ttl-this.tick)/this.ttl;this.y=t-(t-this.targetY)*this.easeOutQuart(e),this.alpha=1-this.easeOutQuart(e),this.tick++}}])&&n(e.prototype,i),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"a",(function(){return r}));var r=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.hue=n,this.size=this.getRandomInt(2,3),this.speed=this.getRandomInt(30,40)/10,this.angle=this.getRandomInt(0,36)+36*r}var e,i,r;return e=t,(i=[{key:"getRandomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"draw",value:function(t){this.size>0&&(t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fillStyle="hsla(".concat(this.hue,", 100%, 50%, 1)"),t.fill(),t.closePath())}},{key:"update",value:function(){this.radian=Math.PI/180*this.angle,this.x+=this.speed*Math.sin(this.radian),this.y+=this.speed*Math.cos(this.radian),this.size-=.05}}])&&n(e.prototype,i),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"a",(function(){return r}));var r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.hue=n,this.size=0,this.endSize=this.getRandomInt(100,130)}var e,i,r;return e=t,(i=[{key:"getRandomInt",value:function(t,e){return Math.round(Math.random()*(e-t))+t}},{key:"draw",value:function(t){this.size<this.endSize&&(t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fillStyle="hsla(".concat(this.hue,", 100%, 60%, .2)"),t.fill(),t.closePath())}},{key:"update",value:function(){this.size+=15}}])&&n(e.prototype,i),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"default",(function(){return h}));var n=i(0),r=i(9),a=i(2),o=i(3),s=i(4),c=i(5);function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$window=t("window"),this.$body=t("body"),this.canvas,this.ctx,this.w,this.h,this.fireworks=[],this.particles=[],this.circles=[],this.fireworksMax=10,this.fireworksChance=.2,this.hue=0,this.scrollAnim=new a.a}var i,h,l;return i=e,(h=[{key:"init",value:function(){n.a.registerPlugin(r.a),this.scrollAnim.init(),this.bounceNumber()}},{key:"splitText",value:function(e){var i=e.text().split("");return e.empty(),t.each(i,(function(i,n){e.append(t("<span class='letter'>").text(n))})),e}},{key:"bounceNumber",value:function(){var e=this,i=t("h1"),r=t(".word"),a=t(".word.last"),o=t(".hide"),s=t(".question"),c=t(".greeting");this.splitText(c);var u=t(".letter"),h=n.a.timeline();r.each((function(t,e){h.to(e,{duration:.6,opacity:1,y:0,ease:"elastic.out"})})),h.to(c,{opacity:1}),h.to(s,{delay:.4,duration:.2,opacity:1,scale:1.4}).to(s,{scale:1,ease:"elastic.out"}).to(a,{duration:.4,delay:1,y:50,ease:"bounce"}).to(o,{opacity:1}).to(a,{duration:.6,y:-160,ease:"elastic.out"},"same").to(s,{opacity:0,y:-100,rotate:360,scale:.6},"same").to(i,{delay:.4,duration:1,y:-200}),u.each((function(t,e){h.to(e,{duration:.1,opacity:1,delay:8e-4*t,rotate:0,y:0,x:0,ease:"power2.Out"})})),h.call((function(){e.initFireworks(),e.$body.addClass("active"),n.a.to("#scroll-down",{duration:2,delay:1,opacity:1}),n.a.to(window,{duration:2,delay:1,scrollTo:".works",ease:"power2.inOut"})}))}},{key:"initFireworks",value:function(){this.canvas=document.querySelector("#fireworks"),this.ctx=this.canvas.getContext("2d"),this.resizeReset(),this.animationLoop()}},{key:"resizeReset",value:function(){this.w=this.canvas.width=window.innerWidth,this.h=this.canvas.height=window.innerHeight,this.ctx.fillStyle="#222",this.ctx.fillRect(0,0,this.w,this.h)}},{key:"animationLoop",value:function(){this.fireworks.length<this.fireworksMax&&Math.random()<this.fireworksChance&&(this.fireworks.push(new o.a(this.w,this.h,this.hue)),this.hue+=10),this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="rgba(0, 0, 0, .1)",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.globalCompositeOperation="lighter",this.drawScene(),this.arrayCleanUp(),requestAnimationFrame(this.animationLoop.bind(this))}},{key:"drawScene",value:function(){var t=this;this.fireworks.map((function(e){e.update(t.h),e.draw(t.ctx)})),this.particles.map((function(e){e.update(),e.draw(t.ctx)})),this.circles.map((function(e){e.update(),e.draw(t.ctx)}))}},{key:"arrayCleanUp",value:function(){var t=this,e=[],i=[],n=[];this.fireworks.map((function(i){i.alpha>0?e.push(i):t.createFireworks(i.x,i.y,i.hue)})),this.fireworks=e,this.particles.map((function(t){t.size>0&&i.push(t)})),this.particles=i,this.circles.map((function(t){t.size<t.endSize&&n.push(t)})),this.circles=n}},{key:"createFireworks",value:function(t,e,i){for(var n=0;n<10;n++)this.particles.push(new s.a(t,e,i,n));this.circles.push(new c.a(t,e,i))}}])&&u(i.prototype,h),l&&u(i,l),Object.defineProperty(i,"prototype",{writable:!1}),e}();t((function(){(new h).init()}))}.call(this,i(1))}]);