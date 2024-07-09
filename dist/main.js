(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,':root {\n    --sea-border: #011e36;\n    --background: #222222;\n    --sea-colour: #31a8ff;\n    --hit: red;\n    --miss: #454e57;\n    --player-ship: aqua;\n}\n\n* {\n    font-family:\n        system-ui,\n        -apple-system,\n        BlinkMacSystemFont,\n        "Segoe UI",\n        Roboto,\n        Oxygen,\n        Ubuntu,\n        Cantarell,\n        "Open Sans",\n        "Helvetica Neue",\n        sans-serif;\n    color: white;\n}\n\n@keyframes slide-right {\n    0% {\n        opacity: 0;\n        transform: translateX(-40px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translateX(0px);\n    }\n}\n\n@keyframes slide-left {\n    0% {\n        opacity: 0;\n        transform: translateX(40px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translateX(0px);\n    }\n}\n\n@keyframes slide-down {\n    0% {\n        opacity: 0;\n        transform: translateY(-20px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\n@keyframes slide-up {\n    0% {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background);\n}\n\nbody,\n#gameContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n    width: 100vw;\n    gap: 20px;\n}\n\n#header {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    display: flex;\n    height: 50px;\n    justify-content: end;\n    justify-items: end;\n}\n\na>img {\n    width: 50px;\n    height: 50px;\n    transition: all 0.7s;\n}\n\na>img:hover {\n    transform: rotate(360deg);\n    scale: 1.1;\n}\n\n#gameContainer>* {\n    position: relative;\n    top: -10px;\n}\n\n.boxP {\n    animation: slide-right 1.5s ease-in-out;\n}\n\n.boxO {\n    animation: slide-left 1.5s ease-in-out;\n}\n\n#legend {\n    animation: slide-up 1.5s ease-in-out;\n}\n\n#header,\n#turn {\n    animation: slide-down 1.5s ease-in-out;\n}\n\n#container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 50px 1fr 1fr 50px;\n    gap: 10px;\n}\n\n.boxP {\n    grid-column: 2;\n}\n\n.boxO {\n    grid-column: 3;\n}\n\n#player,\n#opponent,\n.boxP,\n.boxO {\n    justify-self: center;\n    align-self: center;\n}\n\n.boxP>p,\n.boxO>p {\n    position: relative;\n    top: -20px;\n}\n\n#turn {\n    display: relative;\n    top: 20px;\n}\n\n#legend {\n    height: 100px;\n    display: flex;\n    gap: 5vw;\n    margin-top: -10px;\n}\n\n.legend-info {\n    height: 60px;\n    display: grid;\n    grid-template-columns: 50px 100px;\n    column-gap: 10px;\n}\n\n.legend-info>img {\n    height: 50px;\n    width: auto;\n    background-color: red;\n    border-radius: 4.5px;\n}\n\n#player,\n#opponent {\n    max-width: 500px;\n    max-height: 500px;\n    min-width: 500px;\n    min-height: 500px;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    background-color: var(--sea-border);\n    position: relative;\n    top: -30px;\n}\n\n#player>div,\n#opponent>div {\n    background-color: var(--sea-colour);\n    transition: 0.2s all ease-in-out;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#player>div:hover,\n#opponent>div:hover {\n    background-color: rgb(220, 221, 223);\n    scale: 1.08;\n}\n\n#player>div:active,\n#opponent>div:active {\n    background-color: rgb(99, 116, 144);\n    scale: 0.98;\n}\n\n#player>.player-ship.hit,\n#opponent>.hit,\n#player>.player-ship.hit:hover,\n#opponent>.hit:hover {\n    background-color: var(--hit);\n}\n\n#player>.miss:hover,\n#opponent>.miss:hover,\n#player>.miss,\n#opponent>.miss {\n    background-color: var(--miss);\n}\n\n#player>.player-ship {\n    background-color: var(--player-ship);\n}\n\n#gameContainer.hidden {\n    display: none;\n}\n\n#start-screen {\n    width: 100vw;\n    height: 100vh;\n    display: relative;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 100px;\n}\n\n.title>h1 {\n    margin: 0px;\n    animation: slide-down 1.5s ease;\n}\n\n#main-title {\n    font-size: 50px;\n    position: relative;\n    color: var(--sea-colour);\n}\n\n#header {\n    display: relative;\n    z-index: 2;\n}\n\n#start,\n#options {\n    width: 150px;\n    height: 50px;\n    background-color: var(--hit);\n    font-weight: 500;\n    font-size: 35px;\n    letter-spacing: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n    border: none;\n    animation: slide-up 1.5s ease;\n    transition:\n        background-color 0.5s ease,\n        transform 0.5s ease,\n        color 0.5s ease;\n}\n\n.button-container>#options {\n    width: 200px;\n}\n\n#start:hover,\n#options:hover {\n    transform: scale(0.98);\n    background-color: var(--miss);\n    color: var(--hit);\n}\n\n#start:active,\n#options:active {\n    transform: scale(0.9);\n}\n\n.button-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    letter-spacing: normal;\n    align-items: center;\n}\n\n#end-modal {\n    animation: slide-down 1s ease;\n    justify-self: center;\n    align-self: center;\n}\n\n@media (max-width: 1024px) {\n    #player,\n    #opponent {\n        max-width: 430px;\n        max-height: 430px;\n        min-width: 430px;\n        min-height: 430px;\n    }\n}\n\n@media (max-width: 768px) {\n    #container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .boxO {\n        animation: slide-up 1.5s ease;\n    }\n\n    .boxP {\n        animation: slide-down 1.5s ease;\n    }\n}\n\n@media (max-width: 450px) {\n    #turn {\n        margin-top: 25px;\n        font-size: 20px;\n    }\n\n    #container {\n        margin-top: 15px;\n    }\n\n    #player,\n    #opponent {\n        max-width: 350px;\n        max-height: 350px;\n        min-width: 350px;\n        min-height: 350px;\n    }\n\n    #header>a>img {\n        height: 25px;\n        width: 25px;\n    }\n}\n\n@media (max-width: 400px) {\n    #player,\n    #opponent {\n        max-width: 300px;\n        max-height: 300px;\n        min-width: 300px;\n        min-height: 300px;\n    }\n\n    .legend-info {\n        height: 50px;\n        gap: 5px;\n    }\n\n    .legend-info>img {\n        height: 40px;\n        width: auto;\n        background-color: red;\n        border-radius: 4.5px;\n    }\n}',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"1cb05a5c59c5673d4390.svg",g=t.p+"94241ede8554705a5898.svg",x=t.p+"97ed8e7eef60d61ca469.svg";class y{constructor(n){this.coordinates=n,this.hits=new Array(n.length).fill(!1)}hit(n){const e=this.coordinates.findIndex((e=>e[0]===n[0]&&e[1]===n[1]));if(e>-1)return this.hits[e]=!0,!0}isSunk(){return this.hits.every((n=>n))}}function v(n,e){const[t,r]=[n[0],n[1]];return document.querySelector(`#${e}>.r${t}.c${r}`)||null}class b{constructor(n){this.user=n,this.main=[],this.shots=[]}placeShip(n,e){const t=function(n,e){let t=[];const[r,o]=n,[a,i]=[e[0],e[1]],s=Math.abs(a-r),c=Math.abs(i-o),l=Math.max(s,c),p=(a-r)/l,d=(i-o)/l;let[u,h]=[r,o];for(let n=0;n<=l;n++)t.push([u,h]),u+=p,h+=d;return t}(n,e),r=new y(t);this.main.push(r),"player"==this.user&&t.forEach((n=>{v(n,this.user).classList.add("player-ship")}))}receiveAttack(n){for(let e of this.main)if(e.hit(n))break;this.shots.push(n)}displayHits(){for(let n of this.main){for(let e=0;e<n.hits.length;e++)if(n.hits[e]){let t=v(n.coordinates[e],this.user);t.innerHTML="",t.classList.add("hit");let r=new Image;r.src=f,t.appendChild(r)}n.isSunk()&&n.coordinates.forEach((n=>{let e=v(n,this.user);e.innerHTML="";let t=new Image;t.src=g,t.className="killed",e.appendChild(t)}))}for(let n of this.shots){let e=v(n,this.user);e.classList.contains("hit")||e.classList.contains("miss")||e.classList.add("miss")}return this.allSunk()?{status:!0,message:()=>"player"==this.user?"You lost. All your ships have been sunk.":"You won! All enemy ships have been sunk."}:{status:!1}}allSunk(){for(let n of this.main)if(!n.hits.every((n=>1==n)))return!1;return!0}}const w=t.p+"5871bf3031cb9197c5c9.mp3",k=new Audio(w);k.addEventListener("ended",(()=>{k.currentTime=0,k.play()}),!1);const S=document.querySelector("#start"),C=document.querySelector("#start-screen");document.querySelector("#options").addEventListener("click",(()=>{alert("This doesn't work yet...")})),function(){const n=document.querySelector("#player"),e=document.querySelector("#opponent");let t=!1;[n,e].forEach((n=>{t=!t;for(let e=1;e<=10;e++)for(let r=1;r<=10;r++){let o=document.createElement("div");o.classList.add("r"+e),o.classList.add("c"+r),t?o.classList.add("player-square"):o.classList.add("opponent-square"),n.appendChild(o)}}))}(),function(){const n=document.querySelector("#hit-legend"),e=document.querySelector("#killed-legend");n.src=f,e.src=g}(),function(){const n=new Image;n.src=x;const e=document.createElement("a");e.href="https://github.com/xadvent/battleship",e.id="github",e.appendChild(n),document.querySelector("#header").appendChild(e)}(),S.addEventListener("click",(()=>{C.remove(),(()=>{const n=document.querySelector("#turn"),e=new b("player"),t=new b("opponent"),r=function(n){const e=[];return{attack:t=>{n.receiveAttack(t),e.push(t)}}}(t),o=function(n){let e=[];const t=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(n[t]!==e[t])return!1;return!0};return{attack:()=>{let r=[];for(;0==r.length||e.some((n=>t(n,r)));)r=[1+Math.floor(10*Math.random()),1+Math.floor(10*Math.random())];n.receiveAttack(r),e.push(r),r=[]}}}(e);e.placeShip([4,4],[2,4]),e.placeShip([7,6],[7,7]),t.placeShip([1,1],[1,2]),t.placeShip([5,3],[3,3]);let a="player";function i(e){if("player"!==a)return;const o=function(n){let[e,t]=[n[0].substring(1),n[1].substring(1)];return[parseInt(e,10),parseInt(t,10)]}(e.target.classList);r.attack(o),document.querySelectorAll(".opponent-square").forEach((n=>n.removeEventListener("click",i)));let c=t.displayHits();if(c.status)n.textContent=c.message();else{a="computer",n.textContent="Opponent's Turn.",setTimeout(s,1500);const e=setInterval((()=>{n.textContent+="."}),550);setTimeout((()=>{clearInterval(e)}),1500)}}function s(){o.attack();let t=e.displayHits();t.status?n.textContent=t.message():(document.querySelectorAll(".opponent-square").forEach((n=>n.addEventListener("click",i))),a="player",n.textContent="Your turn!")}n.textContent="Whenever you're ready click a square.",document.querySelectorAll(".opponent-square").forEach((n=>n.addEventListener("click",i)))})(),document.querySelector("#gameContainer").classList.remove("hidden"),S.removeEventListener("click",void 0)}))})()})();