"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{9055:function(n,e,t){t.d(e,{x:function(){return a}});var r=t(6444),i=t(407),a=(0,r.ZP)("section")(i.$_,i.Dh,i.bK,i.GQ,i.eC,i.Oq,i.Cg,i.FK,i.AF,i.cp)},9645:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(8748),i="Loader_Loader__wqo9C",a=t(184),o=function(){return(0,a.jsx)("div",{className:i,children:(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"orangered",ariaLabel:"three-dots-loading"})})}},4532:function(n,e,t){t.d(e,{Dx:function(){return p},Ei:function(){return m},HC:function(){return l},W2:function(){return h},aV:function(){return f},gY:function(){return x}});var r,i,a,o,c,s,u=t(168),d=t(6444),h=d.ZP.div(r||(r=(0,u.Z)(["\n  max-width: 100%;\n  padding: 0 ","px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 320px) {\n    width: 320px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 ","px;\n    width: 768px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),f=d.ZP.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  row-gap: ","px;\n\n  @media screen and (min-width: 320px) {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: ","px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    column-gap: ","px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),p=d.ZP.h2(a||(a=(0,u.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  padding: ","px 0;\n  text-align: center;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.space[5]})),l=d.ZP.li(o||(o=(0,u.Z)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  border-radius: ",";\n  transition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    box-shadow: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - ","px) / 2);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - ","px * 2) / 3);\n  }\n"])),(function(n){return n.theme.radii.md}),(function(n){return n.theme.transition.transform}),(function(n){return n.theme.transition.boxShadow}),(function(n){return n.theme.shadows.cardHover}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),m=d.ZP.img(c||(c=(0,u.Z)(["\n  margin-bottom: ","px;\n\n  @media screen and (min-width: 320px) {\n    height: 398px;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 455px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 574px;\n  }\n"])),(function(n){return n.theme.space[3]})),x=d.ZP.p(s||(s=(0,u.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  color: ",";\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n\n  @include mq(desktop) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.orangered}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.m}))},1138:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(5861),i=t(8152),a=t(7757),o=t.n(a),c=t(6871),s=t(2791),u=t(5317),d=t(9645),h=t(4046),f=t(9055),p=t(184),l="https://image.tmdb.org/t/p/w500/";e.C=function(){var n,e,t=(0,c.UO)().movieId,a=null!==(n=null===(e=(0,c.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",m="IDLE",x="PENDING",g="RESOLVED",v="REJECTED",b=(0,s.useState)({}),w=(0,i.Z)(b,2),j=w[0],Z=w[1],y=(0,s.useState)([]),k=(0,i.Z)(y,2),S=k[0],_=k[1],E=(0,s.useState)(m),P=(0,i.Z)(E,2),z=P[0],D=P[1];(0,s.useEffect)((function(){!function(){var n=(0,r.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,D(x),n.next=4,(0,u.Pg)(t);case 4:if(e=n.sent,r=e.genres,0!==Object.keys(e).length){n.next=10;break}return D(v),n.abrupt("return");case 10:_(r),Z(e),D(g),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0),D(v);case 19:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(){return n.apply(this,arguments)}}()()}),[j.genre_ids,t,x,v,g]);var C=j.backdrop_path,N=j.title,O=j.release_date,R=j.vote_average,A=j.overview;return(0,p.jsxs)(p.Fragment,{children:["RESOLVED"===z&&(0,p.jsx)(f.x,{children:(0,p.jsxs)(f.x,{as:"div",p:"5",children:[(0,p.jsx)(h.hb,{to:a,children:"Back to movies"}),(0,p.jsx)(h.Ei,{src:l+C,alt:N}),(0,p.jsxs)(f.x,{as:"h2",textAlign:"center",fontSize:"l",color:"orangered",mb:"4",children:[N," (",O.slice(0,4),")"]}),(0,p.jsxs)(f.x,{as:"p",mb:"4",children:["Vote - ",Math.round(10*R)/10]}),(0,p.jsx)(f.x,{as:"h3",mb:"3",children:"Overview"}),(0,p.jsx)(f.x,{as:"p",mb:"4",children:A}),(0,p.jsx)(f.x,{as:"h3",mb:"3",children:"Genres"}),(0,p.jsx)(f.x,{as:"ul",mb:"4",color:"orangered",children:0===S.length?(0,p.jsx)("li",{children:"No genres for this movie"}):S.map((function(n,e){var t=n.name;return(0,p.jsx)(f.x,{as:"li",mb:"3",children:t},e)}))}),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.x,{as:"h2",textAlign:"center",fontSize:"l",color:"orangered",mb:"4",children:"Additional information"}),(0,p.jsxs)(f.x,{as:"ul",display:"flex",mb:"4",children:[(0,p.jsx)("li",{children:(0,p.jsx)(h.Ot,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(h.Ot,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(c.j3,{})]})]})}),"PENDING"===z&&(0,p.jsx)(d.Z,{}),"REJECTED"===z&&(0,p.jsxs)(f.x,{as:"div",p:"4",display:"flex",children:[(0,p.jsx)(h.hb,{to:"/",children:"Go home"}),(0,p.jsx)(f.x,{as:"b",textAlign:"center",mx:"auto",mt:"5",fontSize:"l",color:"orangered",children:"Sorry, there are no details for the movie."})]})]})}},4046:function(n,e,t){t.d(e,{Ei:function(){return u},Ot:function(){return d},hb:function(){return h}});var r,i,a,o=t(168),c=t(3504),s=t(6444),u=s.ZP.img(r||(r=(0,o.Z)(["\n  width: 500px;\n  margin: ","px auto;\n"])),(function(n){return n.theme.space[4]})),d=(0,s.ZP)(c.rU)(i||(i=(0,o.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n\n  :first-child {\n    margin-right: ","px;\n  }\n"])),(function(n){return n.theme.colors.orangered}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[4]})),h=(0,s.ZP)(c.rU)(a||(a=(0,o.Z)(["\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.accent}))},3329:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,a,o=t(5861),c=t(8152),s=t(7757),u=t.n(s),d=t(2791),h=t(3504),f=t(6871),p=t(5317),l=t(168),m=t(6444),x=m.ZP.input(r||(r=(0,l.Z)(["\n  width: 50%;\n  /* height: 30px; */\n  padding: ","px ","px;\n  border: ",";\n  outline: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.bold}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.md})),g=m.ZP.form(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ","px 0;\n  gap: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),v=m.ZP.button(a||(a=(0,l.Z)(["\n  padding: ","px ","px;\n  color: ",";\n  background-color: ",";\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n  transition: ",";\n\n  :hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orangered}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.transition.transform})),b=t(4532),w=t(1138),j=t(9055),Z=t(184),y=function(){var n,e=(0,d.useState)(""),t=(0,c.Z)(e,2),r=t[0],i=t[1],a=(0,d.useState)(null!==(n=JSON.parse(localStorage.getItem("movies")))&&void 0!==n?n:[]),s=(0,c.Z)(a,2),l=s[0],m=s[1],y=(0,f.TH)();(0,d.useEffect)((function(){r&&function(){var n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.UN)(r);case 2:e=n.sent,localStorage.setItem("movies",JSON.stringify(e)),m(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[r]);return(0,Z.jsx)(j.x,{children:(0,Z.jsxs)(b.W2,{children:[(0,Z.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.target.query.value;i(e),n.target.reset()},children:[(0,Z.jsx)(x,{type:"text",name:"query",placeholder:"Movie search"}),(0,Z.jsx)(v,{type:"submit",children:"Search"})]}),0!==l.length&&(0,Z.jsx)(b.aV,{children:l.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,Z.jsx)(b.HC,{children:(0,Z.jsxs)(h.rU,{to:"".concat(e),state:{from:y},children:[(0,Z.jsx)(b.Ei,{src:r?w.Z+r:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",alt:t,loading:"lazy"}),(0,Z.jsx)(b.gY,{children:t.toUpperCase()})]})},e)}))})]})})}},5317:function(n,e,t){t.d(e,{$L:function(){return u},IQ:function(){return h},Jh:function(){return f},Pg:function(){return d},UN:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),c=t.n(o),s="6d25a4756e0ff1ccca3eba13a74efa5c";c().defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("trending/".concat("movie","/").concat("day"),{params:{api_key:s}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=Number(e),n.next=4,c().get("movie/".concat(t),{params:{api_key:s}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("movie/".concat(e,"/credits"),{params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("movie/".concat(e,"/reviews"),{params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("search/movie",{params:{api_key:s,query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=329.6b54322f.chunk.js.map