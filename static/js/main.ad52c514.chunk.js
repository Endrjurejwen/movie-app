(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){e.exports=t.p+"static/media/logo-white.eafc9112.png"},48:function(e,n,t){e.exports=t.p+"static/media/clipart584687b.cde72846.png"},50:function(e,n,t){e.exports=t(80)},80:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=t(9),u=t(10),s=t(13),l=t(11),v=t(14),d=t(82),f=t(83),p=t(78),m=t(81),h=t(12),b=t(5),g=t(42),O=t(43),x=t(6),j=function(){return{type:"TOGGLE_MENU"}},E={isMenuOpen:!1},M=t(31),k=t(17),w=t.n(k),y=t(24),F=t(25),C=t.n(F),S=function(){return function(){var e=Object(y.a)(w.a.mark(function e(n){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.themoviedb.org/3/discover/movie?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 2:return t=e.sent,e.abrupt("return",n({type:"GET_MOVIES",data:t.data.results}));case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},I=function(e){return function(){var n=Object(y.a)(w.a.mark(function n(t){var r;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US"));case 2:return r=n.sent,n.abrupt("return",t({type:"GET_MOVIE",data:r.data}));case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},L=function(e){return function(){var n=Object(y.a)(w.a.mark(function n(t){var r;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.a.get("https://api.themoviedb.org/3/search/movie?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US&query=".concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",t({type:"GET_SEARCH_MOVIES",data:r.data.results}));case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},_=function(){return{type:"RESET_MOVIE"}},z=function(){return{type:"RESET_MOVIES"}},T=function(e,n){var t=e.map(function(e){return e.id}),r=n.map(function(e){return e.id}),a=t.filter(function(e){return r.includes(e)});return{type:"CHECK_IF_FAVORITES",data:e.map(function(e){return a.includes(e.id)?Object(x.a)({},e,{isFavorite:!0}):Object(x.a)({},e,{isFavorite:!1})})}},A=function(e,n){return{type:"CHECK_IF_FAVORITE",data:n.map(function(e){return e.id}).includes(e.id)?Object(x.a)({},e,{isFavorite:!0}):Object(x.a)({},e,{isFavorite:!1})}},V=function(e){return{type:"ADD_MOVIE_TO_FAVORITES",data:Object(x.a)({},e,{isFavorite:!0})}},H=function(e){return{type:"REMOVE_MOVIE_FROM_FAVORITES",data:Object(x.a)({},e,{isFavorite:!1})}},R={movies:[],isMoviesLoaded:!1,isMoviesChecked:!1,movie:{},isMovieLoaded:!1,isMovieChecked:!1,isMoviesSearchListLoaded:!1,favoritesMovies:[]},B=Object(b.combineReducers)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_MENU":return Object(x.a)({},e,{isMenuOpen:!e.isMenuOpen});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"GET_MOVIES":return Object(x.a)({},e,{movies:r,isMoviesLoaded:!0,isMoviesChecked:!1});case"GET_MOVIE":return Object(x.a)({},e,{movie:r,isMovieLoaded:!0,isMovieChecked:!1});case"RESET_MOVIE":return Object(x.a)({},e,{movie:{},isMovieLoaded:!1,isMovieChecked:!1});case"RESET_MOVIES":return Object(x.a)({},e,{movies:[],isMovieLoaded:!1,isMoviesSearchListLoaded:!1});case"GET_SEARCH_MOVIES":return Object(x.a)({},e,{movies:r,isMoviesSearchListLoaded:!0,isMoviesLoaded:!1,isMoviesChecked:!1});case"CHECK_IF_FAVORITES":return Object(x.a)({},e,{movies:r,isMoviesChecked:!0});case"CHECK_IF_FAVORITE":return Object(x.a)({},e,{movie:r,isMovieChecked:!0});case"ADD_MOVIE_TO_FAVORITES":return Object(x.a)({},e,{favoritesMovies:[].concat(Object(M.a)(e.favoritesMovies),[r]),isMoviesChecked:!1,isMovieChecked:!1});case"REMOVE_MOVIE_FROM_FAVORITES":return Object(x.a)({},e,{favoritesMovies:Object(M.a)(e.favoritesMovies).filter(function(e){return e.id!==r.id}),isMoviesChecked:!1,isMovieChecked:!1});default:return e}}}),D=t(1),N=t(2);function G(){var e=Object(D.a)(["\n    @media (min-width: ","em) {\n      ","\n    }\n  "]);return G=function(){return e},e}var U={desktop:992,tablet:700,phone:580},P=Object.keys(U).reduce(function(e,n){return e[n]=function(){return Object(N.b)(G(),U[n]/16,N.b.apply(void 0,arguments))},e},{}),K=(r.Component,["box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, .7)","box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)","box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)","box-shadow: 0 10px 20px rgba(0, 0, 0, .1), 0 6px 6px rgba(0, 0, 0, .2)","box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)","box-shadow: 0 19px 38px rgba(0, 0, 0, .30), 0 15px 12px rgba(0, 0, 0, .22)"]),W=function(e){return isNaN(e)?e.substr(e.length-2):"px"};function J(e){var n=e.minFontSize,t=e.maxFontSize,r=e.minScreenSize,a=void 0===r?420:r,o=e.maxScreenSize,i=void 0===o?1200:o,c=W(n),u=W(t),s=W(a),l=W(i);if(c===u&&c===s&&c===l){var v=c,d={fontSize:n};return a!==i&&(d["@media only screen and (min-width: ".concat(a).concat(v,")")]={fontSize:"calc(".concat(parseInt(n)).concat(v," + ").concat(parseInt(t)-parseInt(n)," * ((100vw - ").concat(a).concat(v,") / ").concat(parseInt(i)-parseInt(a),"))")}),d["@media only screen and (min-width: ".concat(i).concat(v,")")]={fontSize:t},d}throw new Error("Detected mixed units. Please use the same units for all parameters.")}var X=[".25rem",".5rem",".75rem","1rem","1.5rem","2rem","3rem","4rem"];function Y(){var e=Object(D.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n"]);return Y=function(){return e},e}function q(){var e=Object(D.a)(["\n    position: absolute;\n    top: ",";\n    ",": ",";\n  "]);return q=function(){return e},e}function $(){var e=Object(D.a)(["\n    position: fixed;\n    top: ",";\n    ",": ",";\n  "]);return $=function(){return e},e}var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.x,t=void 0===n?0:n,r=e.y,a=void 0===r?0:r,o=e.side,i=void 0===o?"left":o;return Object(N.b)($(),a,i,t)},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.x,t=void 0===n?0:n,r=e.y,a=void 0===r?0:r,o=e.side,i=void 0===o?"left":o;return Object(N.b)(q(),a,i,t)},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.justifyContent,t=void 0===n?"center":n,r=e.alignItems,a=void 0===r?"center":r;return Object(N.b)(Y(),t,a)},ne=t(84);function te(){var e=Object(D.a)(["\n  ",";\n  \n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  z-index: 20;\n"]);return te=function(){return e},e}var re=N.c.div(te(),Q(),"rgba(0, 0, 0, 0.5)"),ae=function(e){var n=e.close;return a.a.createElement(re,{onClick:n})},oe=t(85),ie=t(46),ce=t.n(ie);function ue(){var e=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return ue=function(){return e},e}function se(){var e=Object(D.a)(["\n  max-height: ",";\n"]);return se=function(){return e},e}var le=N.c.img(se(),function(e){return e.height}),ve=Object(N.c)(oe.a)(ue()),de=function(e){var n=e.height;return a.a.createElement(ve,{to:"/home"},a.a.createElement(le,{height:n,src:ce.a,alt:"Movie Lovers Logo"}))},fe=function(e){var n=e.name,t=e.color,r=e.height,o=e.width;switch(n){case"close":return a.a.createElement("svg",{height:r,width:o,viewBox:"0 0 64 64"},a.a.createElement("g",null,a.a.createElement("path",{fill:t,d:"M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"})));case"search":return a.a.createElement("svg",{height:r,width:o,x:"0px",y:"0px",viewBox:"0 0 56 56"},a.a.createElement("path",{fill:t,d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"}));case"love":return a.a.createElement("svg",{x:"0px",y:"0px",width:o,height:r,viewBox:"0 -28 512.001 512"},a.a.createElement("g",null,a.a.createElement("path",{fill:t,d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"})));case"fullLove":return a.a.createElement("svg",{x:"0px",y:"0px",width:o,height:r,viewBox:"0 0 510 510"},a.a.createElement("g",null,a.a.createElement("g",{id:"favorite"},a.a.createElement("path",{fill:t,d:"M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55\r\nC283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"}))));default:return null}};fe.defaultProps={color:"#333",height:"16px",width:"16px"};var pe=fe;function me(){var e=Object(D.a)(["\n  ",";\n\n  padding: "," ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: box-shadow .2s ease;\n\n  &:hover {\n    ",";\n  }\n"]);return me=function(){return e},e}var he=N.c.button(me(),K[1],X[1],X[3],"#5E35B1","#5E35B1","#fff",K[2]);function be(){var e=Object(D.a)(["\n  ",";\n  ",";\n\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]);return be=function(){return e},e}var ge=N.c.button(be(),Z({side:"right"}),ee());function Oe(){var e=Object(D.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);return Oe=function(){return e},e}var xe=N.c.label(Oe());function je(){var e=Object(D.a)(["\n    max-width: 30%;\n\n    &:focus-within {\n      position: relative;\n      border: 1px solid ",";\n      height: auto;\n\n      .btn--search {\n        width: 40px;\n      }\n    }\n  "]);return je=function(){return e},e}function Ee(){var e=Object(D.a)(["\n  ","\n\n  margin: 0 20px; // refactor: maybe change container to grid to manipulate grid-row-gap and width\n\n  position: relative;\n  width: 100%;\n  padding: 4px 10px;\n  border-radius: 4px;\n  border: 1px solid ",";\n  color: ",";\n  background-color: ",";\n\n  &:focus-within {\n    ",";\n\n    border: none;\n    display: flex;\n    width: 100vw;\n    height: 100%;\n    z-index: 50;\n    margin: 0;\n\n    .btn--close {\n      display: flex;\n    }\n\n    .btn--search {\n        width: 60px;\n      }\n  }\n\n  ","\n"]);return Ee=function(){return e},e}var Me=N.c.form(Ee(),ee({justifyContent:"start"}),"#fff","#fff","#5E35B1",Z(),P.tablet(je(),"#fff"));function ke(){var e=Object(D.a)(["\n    width: 84%;\n  "]);return ke=function(){return e},e}function we(){var e=Object(D.a)(["\n  width: 70%;\n  border: none;\n  font-size: inherit;\n  background-color: transparent;\n  color: inherit;\n  outline: none; // check whether it doesn't interfere web accessing (ARIA)\n\n  &::placeholder {\n    color: inherit;\n  }\n\n  ","\n"]);return we=function(){return e},e}var ye=N.c.input(we(),P.tablet(ke()));function Fe(){var e=Object(D.a)(["\n  ",";\n  ",";\n"]);return Fe=function(){return e},e}function Ce(){var e=Object(D.a)(["\n  ",";\n  ",";\n"]);return Ce=function(){return e},e}function Se(){var e=Object(D.a)(["\n  ",";\n  ",";\n"]);return Se=function(){return e},e}function Ie(){var e=Object(D.a)(["\n  ",";\n  ",";\n"]);return Ie=function(){return e},e}function Le(){var e=Object(D.a)(["\n  ",";\n  ",";\n"]);return Le=function(){return e},e}function _e(){var e=Object(D.a)(["\n  text-transform: uppercase;\n  color: ",";\n  font-family: ",";\n"]);return _e=function(){return e},e}var ze=Object(N.b)(_e(),"#333","'Archivo Black', sans-serif"),Te=N.c.h1(Le(),J({minFontSize:28.83,maxFontSize:39.81}),ze),Ae=N.c.h2(Ie(),J({minFontSize:25.63,maxFontSize:33.18}),ze),Ve=N.c.h3(Se(),J({minFontSize:22.78,maxFontSize:27.65}),ze),He=(N.c.h4(Ce(),J({minFontSize:20.25,maxFontSize:23.04}),ze),N.c.h5(Fe(),J({minFontSize:18,maxFontSize:19.2}),ze));function Re(){var e=Object(D.a)(["\n  position: relative;\n  background-color: ",';\n  width: 22px;\n  height: 2px;\n\n  &::before, &::after {\n    content: "";\n    position: absolute;\n    background-color: ',";\n    width: 22px;\n    height: 2px;\n    left: 0;\n    transition: transform .2s ease-out;\n  }\n\n  &::before {\n    top: ",";\n    transform: ",";\n  }\n\n  &::after {\n    top: ",";\n    transform: ",";\n  }\n"]);return Re=function(){return e},e}function Be(){var e=Object(D.a)(["\n    display: none;\n  "]);return Be=function(){return e},e}function De(){var e=Object(D.a)(["\n  display: block;\n  z-index: 40;\n  cursor: pointer;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  padding: 0 ",";\n\n  ","\n"]);return De=function(){return e},e}var Ne=N.c.button(De(),X[3],P.tablet(Be())),Ge=N.c.div(Re(),function(e){return e.isOpen?"transparent":"#fff"},"#fff",function(e){return e.isOpen?"0":"-6px"},function(e){return e.isOpen?"rotate(135deg)":"rotate(0deg)"},function(e){return e.isOpen?"0":"6px"},function(e){return e.isOpen?"rotate(-135deg)":"rotate(0deg)"}),Ue=function(e){var n=e.toggleMenu,t=e.isOpen;return a.a.createElement(Ne,{onClick:n},a.a.createElement(Ge,{isOpen:t}))};function Pe(){var e=Object(D.a)(["\n    ",";\n\n    font-size: 1rem;\n    background-color: transparent;\n    /* height: 100%; */\n    border-bottom: 2px solid transparent;\n\n    &.active {\n      border-bottom: 2px solid ",";\n    }\n\n    &:hover {\n      color: pink;\n      border-bottom: 2px solid ",";\n    }\n  "]);return Pe=function(){return e},e}function Ke(){var e=Object(D.a)(["\n  text-transform: uppercase;\n  padding: ",";\n  font-size: 1.4rem;\n  background-color: transparent;\n  display: block;\n  width: 100%;\n  text-decoration: none;\n  color: ",";\n  cursor: pointer;\n  height: 100%;\n  transition: color .2s;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  ","\n"]);return Ke=function(){return e},e}function We(){var e=Object(D.a)(["\n    padding: 0 ",";\n    height: 100%;\n  "]);return We=function(){return e},e}function Je(){var e=Object(D.a)(["\n  ",";\n  \n  background-color: transparent;\n  width: 75%;\n\n  ","\n"]);return Je=function(){return e},e}var Xe=function(e){var n=e.name,t=e.path,r=e.closeMenu;return a.a.createElement(Ye,null,a.a.createElement(qe,{onClick:r,to:t},n))};Xe.defaultProps={name:"Link",path:"/"};var Ye=N.c.li(Je(),ee(),P.tablet(We(),X[2])),qe=Object(N.c)(oe.a)(Ke(),X[2],"#fff","pink",P.tablet(Pe(),ee(),"#fff","#fff")),$e=Xe;function Qe(){var e=Object(D.a)(["\n    flex-flow: row;\n    justify-content: space-between;\n  "]);return Qe=function(){return e},e}function Ze(){var e=Object(D.a)(["\n  list-style: none;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n\n  ","\n"]);return Ze=function(){return e},e}function en(){var e=Object(D.a)(["\n    display: flex;\n    width: auto;\n  "]);return en=function(){return e},e}function nn(){var e=Object(D.a)(["\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n\n  ","\n"]);return nn=function(){return e},e}var tn=[{name:"Home",path:"/home"},{name:"Movies",path:"/movies"},{name:"Favorites",path:"/favorites"},{name:"Contact",path:"/contact"}],rn=function(e){var n=e.closeMenu,t=e.desktop;return a.a.createElement(an,{desktop:t},a.a.createElement(on,null,tn.map(function(e){return a.a.createElement($e,{key:e.name,name:e.name,path:e.path,closeMenu:n})})))};rn.defaultProps={closeMenu:function(){return null},desktop:!1};var an=N.c.nav(nn(),function(e){return e.desktop?"none":"flex"},P.tablet(en())),on=N.c.ul(Ze(),P.tablet(Qe())),cn=rn;function un(){var e=Object(D.a)(["\n  ",";\n\n  border-top: 1px solid ",";\n"]);return un=function(){return e},e}function sn(){var e=Object(D.a)(["\n  ",";\n\n  border-bottom: 1px solid ",";\n"]);return sn=function(){return e},e}function ln(){var e=Object(D.a)(["\n  color: ",";\n"]);return ln=function(){return e},e}function vn(){var e=Object(D.a)(["\n  ",";\n  ",";\n\n  display: grid;\n  grid-template-rows: 2fr 4fr 1fr;\n  grid-row-gap: ",";\n  padding: "," ",";\n  height: 100vh;\n  width: 80vw;\n  z-index: 30;\n  background-color: ",";\n  color: ",";\n  text-align: center;\n\n  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);\n  transform: ",";\n"]);return vn=function(){return e},e}var dn=N.c.div(vn(),Q(),K[3],X[3],X[2],X[4],"rgba(59, 33, 112, .95);","#fff",function(e){return e.isOpen?"translateX(0)":"translateX(-100vw)"}),fn=Object(N.c)(Ae)(ln(),"#fff"),pn=N.c.header(sn(),ee({justifyContent:"space-evenly"}),"#fff"),mn=N.c.footer(un(),ee(),"#fff"),hn=function(e){var n=e.isOpen,t=e.closeMenu;return a.a.createElement(dn,{isOpen:n},a.a.createElement(pn,null,a.a.createElement(fn,null,"Movie Lovers"),a.a.createElement(de,{height:"15%"})),a.a.createElement(cn,{closeMenu:t}),a.a.createElement(mn,null,a.a.createElement("p",null,"Social Media Icons")))};function bn(){var e=Object(D.a)(["\n    right: 45px;\n  "]);return bn=function(){return e},e}function gn(){var e=Object(D.a)(["\n  right: 65px;\n  width: 30px;\n  display: none;\n\n  ","\n"]);return gn=function(){return e},e}function On(){var e=Object(D.a)(["\n  width: 40px;\n  background-color: ",";\n  border-left: 1px solid ",";\n"]);return On=function(){return e},e}var xn=function(e){var n=e.click,t=e.change,r=e.text,o=e.submit;return a.a.createElement(Me,{onSubmit:o},a.a.createElement(xe,{htmlFor:"search"},"Search: "),a.a.createElement(ye,{onChange:t,type:"text",id:"search",name:"search",value:r,placeholder:"Search..."}),a.a.createElement(En,{onClick:n,type:"reset",className:"btn--close"},a.a.createElement(pe,{name:"close",width:"14px",height:"12px",color:"#fff"})),a.a.createElement(jn,{className:"btn--search",type:"submit"},a.a.createElement(pe,{width:"14px",height:"14px",color:"#5E35B1",name:"search"})))};xn.defaultProps={text:""};var jn=Object(N.c)(ge)(On(),"#fff","#fff"),En=Object(N.c)(ge)(gn(),P.tablet(bn())),Mn=Object(ne.a)(Object(h.b)(null,function(e){return Object(b.bindActionCreators)({getSearchMovies:L},e)})(xn));function kn(){var e=Object(D.a)(["\n  ",";\n  ",";\n  ",";\n\n  color: ",";\n  background-color: ",";\n  width: 100vw;\n  height: 50px;\n  padding: 0 ",";\n"]);return kn=function(){return e},e}var wn=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).state={searchText:""},t.changeHandler=function(e){t.setState({searchText:e.target.value})},t.submitHandler=function(e){var n=t.state.searchText,r=t.props,a=r.history,o=r.resetMovies;e.preventDefault();var i=n.replace(/\s+/g,"%20");o(),a.push({pathname:"/search",search:i}),t.setState({searchText:""})},t.FocusOnInputHandler=function(e){e.target.closest("button").previousSibling.focus()},t}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.searchText,n=this.props,t=n.isMenuOpen,r=n.toggleMenu;return a.a.createElement(yn,null,a.a.createElement(Ue,{toggleMenu:r,isOpen:t}),a.a.createElement(hn,{isOpen:t,closeMenu:r}),t&&a.a.createElement(ae,{close:r}),a.a.createElement(de,{height:"50%"}),a.a.createElement(Mn,{change:this.changeHandler,submit:this.submitHandler,click:this.FocusOnInputHandler,text:e}),a.a.createElement(cn,{desktop:!0}))}}]),n}(r.Component),yn=N.c.div(kn(),Q(),ee({justifyContent:"space-between"}),K[3],"#fff","#5E35B1",X[3]),Fn=Object(ne.a)(Object(h.b)(function(e){return{isMenuOpen:e.menu.isMenuOpen}},function(e){return Object(b.bindActionCreators)({toggleMenu:j,getSearchMovies:L,resetMovies:z},e)})(wn));function Cn(){var e=Object(D.a)(["\n  ",";\n\n  height: 120px;\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  font-size: .75rem;\n"]);return Cn=function(){return e},e}var Sn=N.c.div(Cn(),ee(),"#3e2280","#fff"),In=function(){return a.a.createElement(Sn,null,"Copyright by Andrzej Kruk 2019")};function Ln(){var e=Object(D.a)(["\n  background-image: ",";\n  padding-top: 40px;\n  min-height: 100vh;\n"]);return Ln=function(){return e},e}var _n=N.c.div(Ln(),"linear-gradient(to right top, #eeeeee, #e6e4ed, #ded9ec, #d7cfeb, #d1c4e9)"),zn=function(e){var n=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Fn,null),a.a.createElement(_n,null,n),a.a.createElement(In,null))},Tn=t(48),An=t.n(Tn);function Vn(){var e=Object(D.a)(["\n  margin-top: ",";\n"]);return Vn=function(){return e},e}function Hn(){var e=Object(D.a)(["\n    ",";\n\n    text-align: left;\n  "]);return Hn=function(){return e},e}function Rn(){var e=Object(D.a)(["\n  text-align: center;\n\n  ","\n"]);return Rn=function(){return e},e}function Bn(){var e=Object(D.a)(["\n  color: ",";\n  line-height: 1.2;\n"]);return Bn=function(){return e},e}function Dn(){var e=Object(D.a)(["\n    background-size: 20%;\n    background-position: 80% 40%;\n    display: block;\n    position: relative;\n  "]);return Dn=function(){return e},e}function Nn(){var e=Object(D.a)(["\n  ",";\n\n  background: url(",") no-repeat 45% 35px;\n  background-size: 40%;\n  height: 100vh;\n\n  ","\n"]);return Nn=function(){return e},e}var Gn=N.c.main(Nn(),ee(),An.a,P.tablet(Dn())),Un=Object(N.c)(Te)(Bn(),"#333"),Pn=N.c.div(Rn(),P.tablet(Hn(),Z({x:"80px",y:"380px"}))),Kn=Object(N.c)(he)(Vn(),X[4]),Wn=function(e){return a.a.createElement(Gn,null,a.a.createElement(Pn,null,a.a.createElement("div",null,a.a.createElement(Un,null,"Movie Lovers"),a.a.createElement("p",null,"Explore movies, write reviews and collect what you love.")),a.a.createElement(Kn,{type:"button",onClick:function(){return e.history.push("/movies")}},"Explore movies")))};function Jn(){var e=Object(D.a)(["\n  ",";\n\n  background-color: transparent;\n  border: none;\n  cursor: pointer; \n"]);return Jn=function(){return e},e}function Xn(){var e=Object(D.a)(["\n  grid-column: 1 / -1;\n  grid-row: 2;\n"]);return Xn=function(){return e},e}function Yn(){var e=Object(D.a)(["\n  grid-column: 1 / -1;\n"]);return Yn=function(){return e},e}function qn(){var e=Object(D.a)(["\n  text-align: left;\n  padding: ",";\n  display: grid;\n  grid-template-rows: minmax(40px, auto) 1fr 1fr;\n  grid-template-columns: 70% 30%;\n  grid-gap: ",";\n"]);return qn=function(){return e},e}function $n(){var e=Object(D.a)(["\n  height: 165px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return $n=function(){return e},e}function Qn(){var e=Object(D.a)(["\n  ",";\n\n  margin: ",";\n  max-width: 500px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: ",";\n"]);return Qn=function(){return e},e}var Zn=function(e){var n=e.title,t=e.date,r=e.bgImage,o=e.readMore,i=e.addOrRemoveFavorite,c=e.iconName;return a.a.createElement(et,null,a.a.createElement(nt,{backgroundImage:r}),a.a.createElement(tt,null,a.a.createElement(rt,null,n),a.a.createElement(at,null,t),a.a.createElement(he,{type:"button",onClick:o},"Read more"),a.a.createElement(ot,{onClick:i,type:"button"},a.a.createElement(pe,{name:c,width:"30px",height:"30px",color:"#5E35B1"}))))};Zn.defaultProps={title:"No Title",date:"0000-00-00",bgImage:"No image",iconName:"love"};var et=N.c.div(Qn(),K[2],X[1],"#eee"),nt=N.c.div($n(),function(e){return e.backgroundImage}),tt=N.c.div(qn(),X[2],X[1]),rt=Object(N.c)(He)(Yn()),at=N.c.p(Xn()),ot=N.c.button(Jn(),ee()),it=Zn;function ct(){var e=Object(D.a)(["\n  padding: ",";\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  grid-gap: ",";\n"]);return ct=function(){return e},e}var ut=function(e){var n=e.movies,t=e.history,r=e.add,o=e.remove;return a.a.createElement(st,null,n.map(function(e){return a.a.createElement(it,{key:e.id,title:e.title,date:e.release_date,bgImage:"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path),readMore:function(){return n=e.id,void t.push("/movies/".concat(n));var n},addOrRemoveFavorite:e.isFavorite?function(){return o(e.id)}:function(){return r(e.id)},iconName:e.isFavorite?"fullLove":"love"})}))};ut.defaultProps={add:function(){return(void 0).props.movies}};var st=N.c.main(ct(),X[5],X[4]),lt=Object(ne.a)(ut);function vt(){var e=Object(D.a)(["\n  text-align: center;\n  margin-top: ",";\n"]);return vt=function(){return e},e}var dt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).componentDidMount=function(){var e=t.props,n=e.getMovies,r=e.isMoviesLoaded,a=e.resetMovies;r||(a(),n())},t.componentDidUpdate=function(){var e=t.props,n=e.checkIfFavorites,r=e.movies,a=e.favorites;e.isMoviesChecked||n(r,a)},t.addToFavoritesHandler=function(e){var n=t.props,r=n.movies;(0,n.addToFavorites)(r.find(function(n){return n.id===e}))},t.removeFromFavoritesHandler=function(e){var n=t.props,r=n.movies;(0,n.removeFromFavorites)(r.find(function(n){return n.id===e}))},t}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.movies;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ft,null,"Top 20 New Movies"),a.a.createElement(lt,{movies:e,add:this.addToFavoritesHandler,remove:this.removeFromFavoritesHandler}))}}]),n}(r.Component),ft=Object(N.c)(Te)(vt(),X[6]),pt=Object(h.b)(function(e){return{movies:e.movies.movies,isMoviesLoaded:e.movies.isMoviesLoaded,favorites:e.movies.favoritesMovies,isMoviesChecked:e.movies.isMoviesChecked}},function(e){return Object(b.bindActionCreators)({getMovies:S,checkIfFavorites:T,addToFavorites:V,removeFromFavorites:H,resetMovies:z},e)})(dt);function mt(){var e=Object(D.a)(["\n  position: relative;\n  align-self: center;\n  margin: "," 0;\n"]);return mt=function(){return e},e}function ht(){var e=Object(D.a)(["\n    height: 500px;\n    grid-column: 1 / 3;\n  "]);return ht=function(){return e},e}function bt(){var e=Object(D.a)(["\n  grid-column: 1 / -1;\n  height: 200px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  ","\n"]);return bt=function(){return e},e}function gt(){var e=Object(D.a)(["\n  align-self: center;\n  margin-bottom: ",";\n"]);return gt=function(){return e},e}function Ot(){var e=Object(D.a)(["\n    font-size: 18px;  \n    grid-column: 3 / 4;\n    align-self: stretch;\n  "]);return Ot=function(){return e},e}function xt(){var e=Object(D.a)(["\n  ","\n\n  flex-direction: column;\n  grid-column: 2 / 4;\n  text-align: left;\n\n  ","\n"]);return xt=function(){return e},e}function jt(){var e=Object(D.a)(["\n  grid-column: 2 / 4;\n  text-align: center;\n  margin-top: ","\n"]);return jt=function(){return e},e}function Et(){var e=Object(D.a)(["\n    grid-template-columns: "," 3fr 2fr ",";\n    grid-gap: ",";\n  "]);return Et=function(){return e},e}function Mt(){var e=Object(D.a)(["\n  padding: "," 0;\n  display: grid;\n  grid-row-gap: ",";\n  grid-template-columns: "," 1fr 1fr ",";\n\n  ","\n"]);return Mt=function(){return e},e}var kt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).componentDidMount=function(){var e=t.props;(0,e.getMovie)(e.match.params.movie_id)},t.componentDidUpdate=function(){var e=t.props,n=e.isMovieChecked,r=e.checkIfFavorite,a=e.movie,o=e.favorites;n||r(a,o)},t.componentWillUnmount=function(){var e=t.props,n=e.resetMovie,r=e.movies,a=e.favorites,o=e.checkIfFavorites,i=e.isMoviesChecked;n(),i||o(r,a)},t}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.movie,t=e.addToFavorites,r=e.removeFromFavorites;return a.a.createElement(wt,null,a.a.createElement(yt,null,n.title),a.a.createElement(St,{backgroundImage:"https://image.tmdb.org/t/p/w500/".concat(n.backdrop_path)}),a.a.createElement(Ft,null,a.a.createElement(Ct,null,"Overview"),a.a.createElement("p",null,n.overview),a.a.createElement(It,{onClick:n.isFavorite?function(){return r(n)}:function(){return t(n)},type:"button"},a.a.createElement(pe,{name:n.isFavorite?"fullLove":"love",width:"60px",height:"60px",color:"#5E35B1"}))))}}]),n}(r.Component),wt=N.c.div(Mt(),X[4],X[4],X[3],X[3],P.phone(Et(),X[6],X[6],X[6])),yt=Object(N.c)(Te)(jt(),X[4]),Ft=N.c.div(xt(),ee({justifyContent:"space-around",alignItems:"flex-start"}),P.tablet(Ot())),Ct=Object(N.c)(Ve)(gt(),X[3]),St=N.c.div(bt(),function(e){return e.backgroundImage},P.tablet(ht())),It=Object(N.c)(ge)(mt(),X[4]),Lt=Object(h.b)(function(e){return{movie:e.movies.movie,movies:e.movies.movies,favorites:e.movies.favoritesMovies,isMoviesLoaded:e.movies.isMoviesLoaded,isMovieChecked:e.movies.isMovieChecked,isMoviesChecked:e.movies.isMoviesChecked}},function(e){return Object(b.bindActionCreators)({getMovie:I,resetMovie:_,checkIfFavorite:A,removeFromFavorites:H,addToFavorites:V,checkIfFavorites:T},e)})(kt);function _t(){var e=Object(D.a)(["\n  text-align: center;\n  margin-top: ",";\n"]);return _t=function(){return e},e}var zt=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).componentDidMount=function(){var e=t.props,n=e.location,r=e.getSearchMovies,a=e.isMoviesSearchListLoaded,o=n.search.substring(1);a||r(o)},t.componentDidUpdate=function(){var e=t.props,n=e.checkIfFavorites,r=e.movies,a=e.favorites,o=e.isMoviesChecked,i=e.location,c=e.isMoviesSearchListLoaded,u=e.getSearchMovies,s=i.search.substring(1);c||u(s),o||n(r,a)},t.addToFavoritesHandler=function(e){var n=t.props,r=n.movies;(0,n.addToFavorites)(r.find(function(n){return n.id===e}))},t.removeFromFavoritesHandler=function(e){var n=t.props,r=n.movies;(0,n.removeFromFavorites)(r.find(function(n){return n.id===e}))},t}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.movies;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Tt,null,"Your Search Movies"),a.a.createElement(lt,{movies:e,add:this.addToFavoritesHandler,remove:this.removeFromFavoritesHandler}))}}]),n}(r.Component),Tt=Object(N.c)(Te)(_t(),X[6]),At=Object(h.b)(function(e){return{movies:e.movies.movies,isMoviesLoaded:e.movies.isMoviesLoaded,favorites:e.movies.favoritesMovies,isMoviesChecked:e.movies.isMoviesChecked,moviesSearchList:e.movies.moviesSearchList,isMoviesSearchListLoaded:e.movies.isMoviesSearchListLoaded}},function(e){return Object(b.bindActionCreators)({getMovies:S,checkIfFavorites:T,addToFavorites:V,removeFromFavorites:H,getSearchMovies:L},e)})(zt);function Vt(){var e=Object(D.a)(["\n  text-align: center;\n  margin-top: ",";\n"]);return Vt=function(){return e},e}var Ht=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).componentDidUpdate=function(){var e=t.props,n=e.checkIfFavorites,r=e.movies,a=e.favoritesMovies;e.isMoviesChecked||n(r,a)},t.removeFromFavoritesHandler=function(e){var n=t.props,r=n.favoritesMovies;(0,n.removeFromFavorites)(r.find(function(n){return n.id===e}))},t}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.favoritesMovies;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Rt,null,"Your Favorites Movies"),a.a.createElement(lt,{movies:e,remove:this.removeFromFavoritesHandler}))}}]),n}(r.Component),Rt=Object(N.c)(Te)(Vt(),X[6]),Bt=Object(h.b)(function(e){return{favoritesMovies:e.movies.favoritesMovies,movies:e.movies.movies,isMoviesChecked:e.movies.isMoviesChecked}},function(e){return Object(b.bindActionCreators)({removeFromFavorites:H,checkIfFavorites:T},e)})(Ht);function Dt(){var e=Object(D.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    ",";\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: ",";\n    line-height: 1.6;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return Dt=function(){return e},e}var Nt=Object(N.a)(Dt(),J({minFontSize:16,maxFontSize:20}),"'Judson', serif"),Gt=Object(b.createStore)(B,{},Object(g.composeWithDevTools)(Object(b.applyMiddleware)(O.a))),Ut=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(h.a,{store:Gt},a.a.createElement(d.a,null,a.a.createElement("div",null,a.a.createElement(zn,null,a.a.createElement(f.a,null,a.a.createElement(p.a,{exact:!0,path:"/home",component:Wn}),a.a.createElement(p.a,{exact:!0,path:"/movies",component:pt}),a.a.createElement(p.a,{path:"/search",component:At}),a.a.createElement(p.a,{exact:!0,path:"/favorites",component:Bt}),a.a.createElement(p.a,{path:"/movies/:movie_id",component:Lt}),a.a.createElement(m.a,{exact:!0,from:"/",to:"/home"}))),a.a.createElement(Nt,null))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.ad52c514.chunk.js.map