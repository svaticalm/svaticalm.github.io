(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0ccb":function(t,e,r){var n=r("e330"),a=r("50c4"),i=r("577e"),c=r("1148"),o=r("1d80"),s=n(c),u=n("".slice),d=Math.ceil,l=function(t){return function(e,r,n){var c,l,f=i(o(e)),p=a(r),v=f.length,b=void 0===n?" ":i(n);return p<=v||""==b?f:(c=p-v,l=s(b,d(c/b.length)),l.length>c&&(l=u(l,0,c)),t?f+l:l+f)}};t.exports={start:l(!1),end:l(!0)}},1148:function(t,e,r){"use strict";var n=r("da84"),a=r("5926"),i=r("577e"),c=r("1d80"),o=n.RangeError;t.exports=function(t){var e=i(c(this)),r="",n=a(t);if(n<0||n==1/0)throw o("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},"2fef":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a={key:0,class:"content"},i=Object(n["g"])("div",{class:"circle"},null,-1),c=Object(n["g"])("div",{class:"df df--space-between"},[Object(n["g"])("div",{class:"logo"}," Spotiswipe "),Object(n["g"])("div",{class:"setting-btn"})],-1);function o(t,e,r,o,s,u){var d=Object(n["z"])("spotify-cards");return t.playlist?(Object(n["u"])(),Object(n["f"])("div",a,[i,c,Object(n["j"])(d,{tracks:t.playlist.tracks.items},null,8,["tracks"])])):Object(n["e"])("",!0)}var s=r("5502"),u={class:"cards"},d={key:1,class:"nothing"},l=Object(n["g"])("div",{class:"sad-icon"},null,-1),f=Object(n["i"])(" Кажется, карточки закончились..."),p=Object(n["g"])("br",null,null,-1),v=Object(n["i"])(" Приходите позже "),b=[l,f,p,v];function m(t,e,r,a,i,c){var o=Object(n["z"])("spotify-card");return Object(n["u"])(),Object(n["f"])("div",u,[c.isCardsExist?(Object(n["u"])(!0),Object(n["f"])(n["a"],{key:0},Object(n["y"])(r.tracks,(function(t,e){return Object(n["u"])(),Object(n["d"])(o,{key:t.track.id,class:Object(n["p"])({active:0===e}),style:Object(n["q"])({"z-index":r.tracks.length-e}),swipedCards:i.swipedCards,index:e,card:t},null,8,["class","style","swipedCards","index","card"])})),128)):(Object(n["u"])(),Object(n["f"])("div",d,b))])}r("99af"),r("d3b7"),r("b0c0");var h={class:"cards__item",ref:"cardElem"},y=Object(n["h"])('<div class="cards__item-choice --reject"><div class="icon-wrapper reject"><div class="icon"></div></div></div><div class="cards__item-choice --like"><div class="icon-wrapper reject"><div class="icon"></div></div></div>',2),g=Object(n["h"])('<div class="audio-player"><div class="timeline"><div class="progress"></div></div><div class="time"><div class="current">0:00</div><div class="length"></div></div><div class="controls"><div class="play-container"><div class="toggle-play play"></div></div></div></div>',1),j={class:"cards__item-info"},E={class:"cards__item-name"},O={class:"cards__item-author"},k={key:0};function w(t,e,r,a,i,c){return Object(n["u"])(),Object(n["f"])("div",h,[y,Object(n["g"])("div",{class:"cards__item-image",style:Object(n["q"])({backgroundImage:"url(".concat(r.card.track.album.images[0].url,")")})},null,4),g,Object(n["g"])("div",j,[Object(n["g"])("div",E,Object(n["B"])(r.card.track.name),1),Object(n["g"])("div",O,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(r.card.track.artists,(function(t,e){return Object(n["u"])(),Object(n["f"])("span",{class:"",key:t.id},[0!==e?(Object(n["u"])(),Object(n["f"])("span",k,", ")):Object(n["e"])("",!0),Object(n["i"])(Object(n["B"])(t.name),1)])})),128))])])],512)}r("a9e3");function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,e,r){return e&&S(t.prototype,e),r&&S(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r("d9e2");function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("4d90");var L=_((function t(e,r){var n=this;x(this,t),I(this,"init",(function(){n.audio.addEventListener("loadeddata",(function(){n.audioPlayer.querySelector(".length").textContent=n.getTimeCodeFromNum(n.audio.duration),n.audio.volume=1}),!1);var t=n.audioPlayer.querySelector(".timeline");t.addEventListener("click",(function(e){var r=window.getComputedStyle(t).width,a=e.offsetX/parseInt(r,10)*n.audio.duration;n.audio.currentTime=a}),!1),setInterval((function(){var t=n.audioPlayer.querySelector(".progress");t.style.width="".concat(n.audio.currentTime/n.audio.duration*100,"%"),n.audioPlayer.querySelector(".current").textContent=n.getTimeCodeFromNum(n.audio.currentTime)}),500),n.playBtn=n.audioPlayer.querySelector(".toggle-play"),n.playBtn.addEventListener("click",(function(){n.audio.paused?n.playAudio():n.pauseAudio()}),!1)})),I(this,"getTimeCodeFromNum",(function(t){var e=parseInt(t,10),r=parseInt(e/60,10);e-=60*r;var n=parseInt(r/60,10);return r-=60*n,0===n?"".concat(r,":").concat(String(e%60).padStart(2,0)):"".concat(String(n).padStart(2,0),":").concat(r,":").concat(String(e%60).padStart(2,0))})),I(this,"playAudio",(function(){n.playBtn.classList.add("pause"),n.playBtn.classList.remove("play"),n.audio.play()})),I(this,"pauseAudio",(function(){n.playBtn.classList.remove("pause"),n.playBtn.classList.add("play"),n.audio.pause()})),this.audioPlayer=e,this.audio=new Audio(r)})),C=L,N={name:"SpotifyCard",components:{},props:{card:{},swipedCards:Number,index:Number},data:function(){return{audioPlayer:!1}},computed:function(){},methods:{},watch:{swipedCards:function(t){t-1===this.index?this.audioPlayer.pauseAudio():t===this.index&&this.audioPlayer.playAudio()}},created:function(){},beforeUnmount:function(){this.audioPlayer.pauseAudio()},mounted:function(){this.audioPlayer=new C(this.$refs.cardElem,this.card.track.preview_url),this.audioPlayer.init()}},T=r("6b0d"),A=r.n(T);const P=A()(N,[["render",w]]);var q=P,F={name:"SpotifyCards",components:{SpotifyCard:q},props:{tracks:{}},data:function(){return{swipedCards:0}},computed:{isCardsExist:function(){return this.swipedCards!==this.tracks.length}},methods:{},watch:{},mounted:function(){var t,e,r,n=this,a=!1,i=0,c=this.tracks.length,o=80,s=0,u=0,d=function(){u=s/10,a=!0,t.style.transform="translateX(".concat(s,"px) rotate(").concat(u,"deg)");var n=s/100,i=n>=0?0:Math.abs(n),c=n<=0?0:n;e.style.opacity=i,r.style.opacity=c},l=function(){s>=o?(t.classList.add("to-right"),n.$store.dispatch("api/addTrackToPlaylist",n.tracks[i].track.uri)):s<=-o&&t.classList.add("to-left"),Math.abs(s)>=o&&(t.classList.add("inactive"),setTimeout((function(){t.classList.add("below"),t.classList.remove("inactive","to-left","to-right","active"),i+=1,n.swipedCards=i,i===c?i=0:document.querySelector(".cards__item:not(.below)").classList.add("active")}),300)),Math.abs(s)<o&&t.classList.add("reset"),setTimeout((function(){var e=t.style["z-index"];t.setAttribute("style","z-index: ".concat(e)),t.classList.remove("reset"),t.querySelector(".cards__item-choice.--reject").setAttribute("style",""),t.querySelector(".cards__item-choice.--like").setAttribute("style",""),s=0,a=!1}),300)};["touchstart","mousedown"].forEach((function(n){return document.documentElement.addEventListener(n,(function(n){if(n.target.closest(".cards__item:not(.inactive)")){if(a)return;t=n.target.closest(".cards__item:not(.inactive)"),e=t.querySelector(".--reject"),r=t.querySelector(".--like");var i=n.pageX||n.touches[0].pageX,c=function(t){var e=t.pageX||t.touches[0].pageX;s=e-i,s&&d()},o=function t(){document.documentElement.removeEventListener("mousemove",c,!0),document.documentElement.removeEventListener("touchmove",c,!0),document.documentElement.removeEventListener("mouseup",t,!0),document.documentElement.removeEventListener("touchend",t,!0),s&&l()};["mousemove","touchmove"].forEach((function(t){return document.documentElement.addEventListener(t,c,!0)})),["mouseup","touchend"].forEach((function(t){return document.documentElement.addEventListener(t,o,!0)}))}}),!0)}))}};const M=A()(F,[["render",m]]);var R=M,X={name:"Home",components:{SpotifyCards:R},computed:Object(s["b"])({token:function(t){return t.api.token},playlist:function(t){return t.api.playlist}}),methods:{checkToken:function(){return"false"!==localStorage.getItem("token")&&null!==localStorage.getItem("token")&&void 0!==localStorage.getItem("token")&&""!==localStorage.getItem("token")}},mounted:function(){this.$store.dispatch("api/getToken",this.$route.fullPath)}};const B=A()(X,[["render",o]]);e["default"]=B},"408a":function(t,e,r){var n=r("e330");t.exports=n(1..valueOf)},"4d90":function(t,e,r){"use strict";var n=r("23e7"),a=r("0ccb").start,i=r("9a0c");n({target:"String",proto:!0,forced:i},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("e330"),a=r("1d80"),i=r("577e"),c=r("5899"),o=n("".replace),s="["+c+"]",u=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),l=function(t){return function(e){var r=i(a(e));return 1&t&&(r=o(r,u,"")),2&t&&(r=o(r,d,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,r){var n=r("1626"),a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var c,o;return i&&n(c=e.constructor)&&c!==r&&a(o=c.prototype)&&o!==r.prototype&&i(t,o),t}},"9a0c":function(t,e,r){var n=r("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("e330"),c=r("94ca"),o=r("6eeb"),s=r("1a2d"),u=r("7156"),d=r("3a9b"),l=r("d9b5"),f=r("c04e"),p=r("d039"),v=r("241c").f,b=r("06cf").f,m=r("9bf2").f,h=r("408a"),y=r("58a8").trim,g="Number",j=a[g],E=j.prototype,O=a.TypeError,k=i("".slice),w=i("".charCodeAt),S=function(t){var e=f(t,"number");return"bigint"==typeof e?e:_(e)},_=function(t){var e,r,n,a,i,c,o,s,u=f(t,"number");if(l(u))throw O("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),e=w(u,0),43===e||45===e){if(r=w(u,2),88===r||120===r)return NaN}else if(48===e){switch(w(u,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=k(u,2),c=i.length,o=0;o<c;o++)if(s=w(i,o),s<48||s>a)return NaN;return parseInt(i,n)}return+u};if(c(g,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:j(S(t)),r=this;return d(E,r)&&p((function(){h(r)}))?u(Object(e),r,I):e},L=n?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;L.length>C;C++)s(j,x=L[C])&&!s(I,x)&&m(I,x,b(j,x));I.prototype=E,E.constructor=I,o(a,g,I)}},ab36:function(t,e,r){var n=r("861d"),a=r("9112");t.exports=function(t,e){n(e)&&"cause"in e&&a(t,"cause",e.cause)}},b0c0:function(t,e,r){var n=r("83ab"),a=r("5e77").EXISTS,i=r("e330"),c=r("9bf2").f,o=Function.prototype,s=i(o.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=i(u.exec),l="name";n&&!a&&c(o,l,{configurable:!0,get:function(){try{return d(u,s(this))[1]}catch(t){return""}}})},b980:function(t,e,r){var n=r("d039"),a=r("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},c770:function(t,e,r){var n=r("e330"),a=n("".replace),i=function(t){return String(Error(t).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,o=c.test(i);t.exports=function(t,e){if(o&&"string"==typeof t)while(e--)t=a(t,c,"");return t}},d9e2:function(t,e,r){var n=r("23e7"),a=r("da84"),i=r("2ba4"),c=r("e5cb"),o="WebAssembly",s=a[o],u=7!==Error("e",{cause:7}).cause,d=function(t,e){var r={};r[t]=c(t,e,u),n({global:!0,forced:u},r)},l=function(t,e){if(s&&s[t]){var r={};r[t]=c(o+"."+t,e,u),n({target:o,stat:!0,forced:u},r)}};d("Error",(function(t){return function(e){return i(t,this,arguments)}})),d("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),d("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),d("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),d("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),d("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),d("URIError",(function(t){return function(e){return i(t,this,arguments)}})),l("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),l("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),l("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},e391:function(t,e,r){var n=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e5cb:function(t,e,r){"use strict";var n=r("d066"),a=r("1a2d"),i=r("9112"),c=r("3a9b"),o=r("d2bb"),s=r("e893"),u=r("7156"),d=r("e391"),l=r("ab36"),f=r("c770"),p=r("b980"),v=r("c430");t.exports=function(t,e,r,b){var m=b?2:1,h=t.split("."),y=h[h.length-1],g=n.apply(null,h);if(g){var j=g.prototype;if(!v&&a(j,"cause")&&delete j.cause,!r)return g;var E=n("Error"),O=e((function(t,e){var r=d(b?e:t,void 0),n=b?new g(t):new g;return void 0!==r&&i(n,"message",r),p&&i(n,"stack",f(n.stack,2)),this&&c(j,this)&&u(n,this,O),arguments.length>m&&l(n,arguments[m]),n}));if(O.prototype=j,"Error"!==y&&(o?o(O,E):s(O,E,{name:!0})),s(O,g),!v)try{j.name!==y&&i(j,"name",y),j.constructor=O}catch(k){}return O}}},f820:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a={class:"about"},i=Object(n["g"])("h1",null,"This is an about page",-1),c=[i];function o(t,e){return Object(n["u"])(),Object(n["f"])("div",a,c)}var s=r("6b0d"),u=r.n(s);const d={},l=u()(d,[["render",o]]);e["default"]=l}}]);
//# sourceMappingURL=about.12922401.js.map