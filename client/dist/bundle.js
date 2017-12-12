(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(a,b){'use strict';function c(a,b){for(var c,d=[],e=[],f=arguments.length;2<f--;)d.push(arguments[f]);for(;d.length;)if(Array.isArray(c=d.pop()))for(f=c.length;f--;)d.push(c[f]);else if(null==c||!0===c||!1===c);else e.push('number'==typeof c?c+='':c);return'string'==typeof a?{type:a,props:b||{},children:e}:a(b||{},e)}Object.defineProperty(b,'__esModule',{value:!0}),b.app=function(a,b){function d(a,b){return a&&c(a.tagName.toLowerCase(),{},b.call(a.childNodes,function(a){return 3===a.nodeType?a.nodeValue:d(a,b)}))}function e(a,b){for(var c in b)a[c]=b[c];return a}function f(a,b){return e(e({},a),b)}function g(a,b,c){var d={};return 0===a.length?b:(d[a[0]]=1<a.length?g(a.slice(1),b,c[a[0]]):b,f(c,d))}function h(a,b){for(var c=0;c<a.length;c++)b=b[a[c]];return b}function i(a){return'function'==typeof a}function j(a,b,c,d){for(var e in c)i(c[e])?function(c,e){b[c]=function(c){return a=h(d,w),i(c=e(c))&&i(c=c(a))&&(c=c(b)),c&&c!==a&&!c.then&&r(w=g(d,f(a,c),w)),c}}(e,c[e]):j(a[e]||(a[e]={}),b[e]={},c[e],d.concat(e))}function k(a){if(a&&a.props)return a.props.key}function l(a,b,c,d){if('key'===b);else if('style'===b)for(var e in f(d,c=c||{}))a.style[e]=null==c[e]?'':c[e];else{try{a[b]=null==c?'':c}catch(a){}i(c)||(null==c||!1===c?a.removeAttribute(b):a.setAttribute(b,c))}}function m(a,b){if('string'==typeof a)var c=document.createTextNode(a);else{var c=(b=b||'svg'===a.type)?document.createElementNS('http://www.w3.org/2000/svg',a.type):document.createElement(a.type);a.props.oncreate&&v.push(function(){a.props.oncreate(c)});for(var d=0;d<a.children.length;d++)c.appendChild(m(a.children[d],b));for(var d in a.props)l(c,d,a.props[d])}return c}function n(a,b,c){for(var d in f(b,c)){var e=c[d],g='value'==d||'checked'==d?a[d]:b[d];e!==g&&l(a,d,e,g)}c.onupdate&&v.push(function(){c.onupdate(a,b)})}function o(a,b,c){function d(){a.removeChild(b)}c&&c.onremove?c.onremove(b,d):d()}function p(a,b,c,d,e,f){if(c===d);else if(null==c)b=a.insertBefore(m(d,e),b);else if(null!=d.type&&d.type===c.type){n(b,c.props,d.props),e=e||'svg'===d.type;for(var g=d.children.length,h=c.children.length,l={},q=[],r={},s=0;s<h;s++){var i=q[s]=b.childNodes[s],t=c.children[s],u=k(t);null!=u&&(l[u]=[i,t])}for(var s=0,v=0;v<g;){var i=q[s],t=c.children[s],j=d.children[v],u=k(t);if(r[u]){s++;continue}var w=k(j),x=l[w]||[];null==w?(null==u&&(p(b,i,t,j,e),v++),s++):(u===w?(p(b,x[0],x[1],j,e),s++):x[0]?(b.insertBefore(x[0],i),p(b,x[0],x[1],j,e)):p(b,i,null,j,e),v++,r[w]=j)}for(;s<h;){var t=c.children[s],u=k(t);null==u&&o(b,q[s],t.props),s++}for(var s in l){var x=l[s],y=x[1];r[y.props.key]||o(b,x[0],y.props)}}else b&&d!==b.nodeValue&&('string'==typeof d&&'string'==typeof c?b.nodeValue=d:(b=a.insertBefore(m(d,e),f=b),o(a,f,c.props)));return b}function q(c){for(s=!s,i(c=a.view(w))&&(c=c(x)),s||(t=p(b,t,u,u=c));c=v.pop();)c()}function r(){a.view&&!s&&setTimeout(q,s=!s)}var s,t=(b=b||document.body).children[0],u=d(t,[].map),v=[],w=a.state||{},x={};return r(j(w,x,a.actions,[])),x},b.h=c},function(a){a.exports={CREATE:'CREATE',UPDATE:'UPDATE',VOTE:'VOTE',COMMENT:'COMMENT',TRENDING:'TRENDING',TOP:'TOP',NEW:'NEW',PLANNED:'PLANNED',IN_PROGRESS:'IN_PROGRESS',OPEN:'OPEN',CLOSED:'CLOSED',COMPLETE:'COMPLETE'}},function(a,b,c){c(3),a.exports=c(7)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d);const f=(a,b,c)=>{const d=a.map((a)=>a(b)),e=d.reverse();return e.reduce((a,b)=>b(a),c)},g=()=>{let a=[];return{subscribe:(b)=>(a.push(b),()=>{a=a.filter((a)=>a!==b)}),publish:(...b)=>{a.forEach((a)=>a(...b))}}},h=(a,b=void 0,c=[])=>{let d,e=a(b,{});const h=g(),i=(b)=>{e=a(e,b),h.publish(e,b)},j={dispatch:(a)=>{d(a)},getState:()=>e,subscribe:h.subscribe};return((a)=>{d=f(a,j,i)})(c),j},i=(a,b)=>{Object.keys(a).forEach((c)=>b(a[c],c))},j=(a,b,c)=>(i(a,(a,d)=>c=b(c,a,d)),c),k=(a)=>(b={},c)=>j(a,(a,b,d)=>Object.assign({},a,{[d]:b(a[d],c)}),b),l=(a,b='')=>b?(Array.isArray(b)||(b=b.split('.')),b.reduce((a,b)=>a?a[b]:void 0,a)):a,m=(a,b)=>(c={},d)=>{const e=l(d,b);if(!e)return c;const f=a(c[e],d),g=Object.assign({},c);return void 0===f?delete g[e]:g[e]=f,g},n='patcher/SET',o='jiber/JOIN_ROOM',p='jiber/LEAVE_ROOM',q='jiber/CONFIRMED_STATE',r='jiber/LOGIN_RESULT',s='jiber/WEBRTC_OFFER',t='jiber/WEBRTC_ANSWER',u='jiber/WEBRTC_CANDIDATE',v='SERVER',w='SELF',x=m((a,b)=>{switch(b.type){case o:return Object.assign({},b.$user);case p:return;default:if(!a)return a;if(!b.$confirmed)return a;const c=b.$actionId||0,d=a.actionId||0;return c<=d?a:Object.assign({},a,{actionId:c});}},'$userId'),y=(a={},b)=>b.type===q&&b.$source===v?b.members:x(a,b),z=(a=0,b)=>b.$timeMs||a,A=(a)=>(b=void 0,c)=>{switch(c.type){case q:return c.confirmed;default:return c.$confirmed?a(b,c):b;}},B=(a)=>{const b=k({members:y,lastUpdatedAt:z,confirmed:A(a)});return(a,c)=>{switch(c.type){case'jiber/CLOSE_ROOM':return;default:return b(a,c);}}},C=(a,b,c)=>{if(!b)return c;if(Array.isArray(b)||(b=b.split('.')),0===b.length)return c;const[d,...e]=b,f=a[d]||{},g=C(f,e,c);if(Array.isArray(a)){const b=[...a];return b[+d]=g,b}return Object.assign({},a,{[d]:g})},D=(a,b)=>{const c={};return i(a,(a,d)=>c[d]=b(a,d)),c},E=(a)=>()=>(b)=>(c)=>{c.$confirmed||c.$userId||a(c),b(c)};let F=1;const G=()=>(a)=>(b)=>(b.$actionId||(b.$actionId=F++),a(b));let H=1;const I=(a)=>(b)=>(c)=>{const d=c.$roomId,e=a.getState();if(!d||!e.rooms[d])return b(c);if(c.$actionId||(c.$actionId=H++),c.$timeMs||(c.$timeMs=new Date().getTime()),c.$source||(c.$source=w),c.$userId){const a=e.rooms[d];c.$user=a.members[c.$userId]||c.$user}else e.me&&(c.$userId=e.me.userId,c.$user=e.me);return b(c)},J=(a)=>{const{url:b,credential:c,backoffMs:d}=a;return b?new Promise((a)=>{const e=(b)=>{delete b.onclose,delete b.onopen,a(b)},f=(a=0)=>{setTimeout(()=>{const d=new WebSocket(b,c);d.onclose=()=>f(a+1),d.onopen=()=>e(d)},a*d)};f()}):Promise.reject('NO_URL')};var K=this,L=this&&this.__awaiter||function(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(a){f(a)}}function h(a){try{i(d['throw'](a))}catch(a){f(a)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})};const M=(a)=>{let b;const c={send:(a)=>{b&&b.readyState===b.OPEN&&b.send(a)}},d=()=>L(K,void 0,void 0,function*(){b=yield J(a),c.onmessage&&(b.onmessage=c.onmessage),b.onclose=()=>setTimeout(d,3e3)});return d(),c},N=(a,b)=>D(b,(b)=>(...c)=>a(b(...c))),O=(a,b={})=>(c)=>{const d=()=>{const b=a.getState();return b.rooms[c]},e=(b)=>{a.dispatch(Object.assign({},b,{$roomId:c}))},f=N(e,b);e({type:o});const h=g();return a.subscribe((a,b)=>{b&&b.$roomId===c&&h.publish(a.rooms[c].optimistic,b)}),Object.assign({},f,{dispatch:e,getState:()=>l(d(),'optimistic'),getConfirmedState:()=>l(d(),'confirmed'),subscribe:h.subscribe})},P={reducer:(a={},b)=>{switch(b.type){case n:return'object'==typeof b.set?Object.assign({},a,b.set):a;default:return a;}},middleware:[],url:void 0,stunServers:['stun:stun.jiber.io'],credential:void 0,initialState:void 0,backoffMs:5e3,actionCreators:{set:(a)=>({type:n,set:a})},maxPeers:10},Q=(a,b)=>a.filter((a)=>!!a.$userId&&(a.$userId!==b.$userId||(a.$actionId||0)>(b.$actionId||0))),R=(a,b)=>b.type===o||b.type===p?a:b.$user?(b.$actionId||0)>(b.$user.actionId||0)?[...a,b]:a:[...a,b],S=(a=[],b)=>{switch(b.type){case q:return[];case p:return a.filter((a)=>a.$userId!==b.$userId);default:return b.$confirmed?Q(a,b):R(a,b);}},T=(a)=>(b,c)=>{const d=b.optimistic;if(c.type===q){const{pendingActions:c}=b;return c.reduce(a,b.confirmed)}const e=l(c,'$user.actionId')||0,f=c.$actionId||0;if(c.$confirmed){const{pendingActions:c,confirmed:d}=b;return c.reduce(a,d)}return f>e?a(d,c):d},U={lastUpdatedAt:0,members:{},confirmed:void 0,optimistic:void 0,pendingActions:[]},V=(a)=>{const b=B(a),c=T(a);return(a=U,d)=>{const e=b(a,d);return e.pendingActions=S(e.pendingActions,d),e.optimistic=c(e,d),e}},W=(a={userId:'$timeMsemp'},b)=>{switch(b.type){case r:return b.user;default:return a;}},X=(a)=>{const b=V(a),c=m(b,'$roomId'),d=k({rooms:c,me:W});return d},Y=(a,b)=>{let c;const d={send:(a)=>{if(c&&'open'===c.readyState){const b=Object.assign({},a,{$user:void 0,$userId:void 0,$timeMs:void 0});c.send(JSON.stringify(b))}}},e=(a)=>{a.onmessage=(a)=>{d.onmessage&&d.onmessage(a)}};if(b){c=a.createDataChannel('data',{ordered:!1,maxRetransmits:0}),e(c)}else a.ondatachannel=(a)=>{c=a.channel,e(c)};return d},Z=(a,b,c)=>{if(!c.$roomId)return!1;if(c.$source!==w)return!1;const d=a.rooms[c.$roomId];return!!d.members[b]},$=(a)=>console.log(a);var _=this,aa=this&&this.__awaiter||function(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(a){f(a)}}function h(a){try{i(d['throw'](a))}catch(a){f(a)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})};const ba=(a,b,c,d)=>{const e=(b)=>aa(_,void 0,void 0,function*(){const d=yield b.createAnswer();yield b.setLocalDescription(d),a({type:t,answer:d,peerUserId:c})}),f=(b)=>{a({type:u,candidate:b,peerUserId:c})};return b.onicecandidate=(a)=>{a.candidate&&f(a.candidate)},d?((a)=>aa(_,void 0,void 0,function*(){return yield b.setRemoteDescription(a),e(b)}))(d).catch($):(()=>aa(_,void 0,void 0,function*(){const d=yield b.createOffer();yield b.setLocalDescription(d),a({type:s,offer:d,peerUserId:c})}))().catch($),{onAction:(a)=>aa(_,void 0,void 0,function*(){if(a.$confirmed&&a.$userId===c)switch(a.type){case t:return b.setRemoteDescription(a.answer);case u:return b.addIceCandidate(a.candidate);}})}},ca=(a,b,c)=>{const d=JSON.parse(c.data),e=d.$roomId;if(e){const c=a.getState().rooms[e],f=c.members,g=f[b];g&&(d.$timeMs=new Date().getTime(),d.$userId=b,d.$source='PEER',d.$user=g,a.dispatch(d))}},da=(a)=>{const b={iceServers:a.map((a)=>({urls:a}))};return new RTCPeerConnection(b)},ea=(a,b,c,d)=>{const e=da(c.stunServers),f=Y(e,!d),g=ba(b.dispatch,e,a,d);f.onmessage=(c)=>{ca(b,a,c)};const h=b.subscribe((c)=>{g.onAction(c).catch($);const d=b.getState();Z(d,a,c)&&f.send(c)});return{peerUserId:a,close:()=>{h(),e.close()}}},fa=()=>{const a=window;['RTCPeerConnection','RTCIceCandidate','RTCSessionDescription'].forEach((b)=>{a[b]=a[b]||a[`moz${b}`]||a[`webkit${b}`]})},ga=(a,b)=>{fa();const c={},d=(a)=>j(a.rooms,(a,b)=>Object.assign(a,b.members),{}),e=(a)=>{const b=c[a];b&&(b.close(),delete c[a])},f=()=>{const b=d(a.getState());i(c,(a)=>{b[a.peerUserId]||e(a.peerUserId)})},g=(d,e)=>{c[d]||Object.keys(c).length>=b.maxPeers||(c[d]=ea(d,a,b,e))};a.subscribe((b)=>{if(b.$confirmed)switch(b.type){case p:return f();case o:return b.$userId?b.$userId===a.getState().me.userId?void 0:g(b.$userId):void 0;case s:return b.$userId?g(b.$userId,b.offer):void 0;}})},ha=(a,b,c)=>{switch(c.type){case r:{const c=b();return void i(c.rooms,(b,c)=>{a({type:o,$roomId:c})})}case q:{if(!c.$roomId)return;const d=b(),e=d.rooms[c.$roomId];return void(e&&e.pendingActions.forEach(a))}}};var ia=c(4),ja=c.n(ia);const ka=((a={})=>{const b=Object.assign({},P,a),c=X(b.reducer),d=M(b),e=(a)=>d.send(JSON.stringify(a)),f=E(e),g=[...b.middleware,G,f,I],i=h(c,b.initialState,g),j=O(i,b.actionCreators),k=Object.assign({},i,{createRoom:j});return d.onmessage=(a)=>{const b=JSON.parse(a.data);b.$confirmed=!0,b.$source=v,ha(e,i.getState,b),i.dispatch(b)},ga(i,b),k})({url:'ws:\\localhost:3000',reducer:ja.a}),la=ka.createRoom('test');var ma=c(1),na=c.n(ma);const oa=(a)=>a&&a.provider,pa=(a)=>(b)=>Object.assign({},b,{path:a});var qa=({createPost:a,goto:b})=>Object(d.h)('div',{class:'post-create'},Object(d.h)('div',{class:'top'},Object(d.h)('h2',null,'Create a Post'),Object(d.h)('button',{class:'btn btn-text',onclick:()=>b('/')},'See All Posts')),Object(d.h)('div',{class:'fake-field'},Object(d.h)('div',{class:'title'},'Title'),Object(d.h)('input',{class:'input',id:'title-field',type:'text',placeholder:'Short, descriptive title'})),Object(d.h)('div',{class:'fake-field'},Object(d.h)('div',{class:'title'},'Details'),Object(d.h)('textarea',{class:'input',id:'description-field',placeholder:'Any additional details...',rows:'3'})),Object(d.h)('button',{class:'btn btn-text btn-primary create-post',onclick:()=>a({title:document.getElementById('title-field').value,description:document.getElementById('description-field').value})},'Create Post')),ra=(a)=>Object(d.h)('div',{class:'post'},Object(d.h)('div',{class:'vote',onclick:()=>a.vote(a.postId)},Object(d.h)('div',{class:'arrow-up'}),a.total),Object(d.h)('div',{class:'content',onclick:()=>a.goto(`/posts/${a.postId}`)},Object(d.h)('div',{class:'title'},a.title),Object(d.h)('div',{class:'description'},a.description)),Object(d.h)('div',{class:'comments',onclick:()=>a.goto(`/posts/${a.postId}`)},Object(d.h)('svg',{fill:'#ccc',height:'24',width:'24'},Object(d.h)('path',{d:'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'}),Object(d.h)('path',{d:'M0 0h24v24H0z',fill:'none'})),'\xA0',a.comments.length)),sa=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},ta=({posts:a,vote:b,goto:c})=>{const e=Object.values(a);return 0<e.length?Object(d.h)('ul',{class:'post-list'},e.map((a)=>Object(d.h)('li',null,Object(d.h)(ra,sa({},a,{vote:b,goto:c}))))):Object(d.h)('span',null,'No posts yet...')},ua=({user:a,text:b})=>Object(d.h)('div',{class:'comment'},Object(d.h)('div',{class:'name'},a.name||a.userId),Object(d.h)('div',{class:'text'},b)),va=({post:a,goto:b,vote:c,addComment:e,editPost:f})=>{const g=Object(d.h)('div',{class:'post-inspect'},Object(d.h)('button',{class:'btn btn-text',onclick:()=>b('/')},'Back to All Posts'),Object(d.h)('div',{class:'top'},Object(d.h)('div',{class:'vote',onclick:()=>c(a.postId)},Object(d.h)('div',{class:'arrow-up'}),a.total),Object(d.h)('div',{class:'title'},a.title)),Object(d.h)(ua,{user:a.owner,text:a.description}),a.comments.map((a)=>Object(d.h)(ua,a)),Object(d.h)('input',{id:'comment-box',type:'text',placeholder:'Add a comment...',onkeydown:(b)=>{if(13===b.keyCode){const b=document.getElementById('comment-box'),c=b.value;b.value='',e({postId:a.postId,text:c})}}}));return g},wa=({goto:a,sort:b,me:c})=>Object(d.h)('div',{class:'controls'},Object(d.h)('div',{class:'showing'},'Showing \xA0',Object(d.h)('select',{onchange:b},Object(d.h)('option',{value:na.a.TRENDING},'Trending'),Object(d.h)('option',{value:na.a.TOP},'Top'),Object(d.h)('option',{value:na.a.NEW},'New'),Object(d.h)('option',{value:na.a.PLANNED},'Planned'),Object(d.h)('option',{value:na.a.IN_PROGRESS},'In Progress'),Object(d.h)('option',{value:na.a.COMPLETE},'Complete'),Object(d.h)('option',{value:na.a.CLOSED},'Closed'))),Object(d.h)('div',{class:'group'},Object(d.h)('button',{class:'btn btn-primary',onclick:()=>oa(c)?a('/create'):a('/login')},Object(d.h)('svg',{height:'24',width:'24',xmlns:'http://www.w3.org/2000/svg'},Object(d.h)('path',{d:'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'}),Object(d.h)('path',{d:'M0 0h24v24H0z',fill:'none'}))))),xa=()=>Object(d.h)('div',{class:'login'},Object(d.h)('a',{href:'/auth/twitter'},Object(d.h)('svg',{id:'Logo_FIXED',"data-name":'Logo \u2014 FIXED',xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 400 400'},Object(d.h)('defs',null,Object(d.h)('style',null,'.cls-1{fill:none;}.cls-2{fill:#1da1f2;}')),Object(d.h)('title',null,'Twitter_Logo_Blue'),Object(d.h)('rect',{class:'cls-1',width:'400',height:'400'}),Object(d.h)('path',{class:'cls-2',d:'M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23'}))));const ya={me:void 0,posts:la.getState(),sort:ma.TRENDING,path:'/'},za=Object(d.app)({state:ya,actions:{createPost:({title:a,description:b})=>(c)=>{if(!oa(c.me))return pa('/login')(c);const d=a.replace(/\W/g,'-').toLowerCase();return la.dispatch({type:ma.CREATE,title:a,postId:d,description:b}),Object.assign({},c,{posts:la.getState(),path:'/'})},vote:(a)=>(b)=>oa(b.me)?(la.dispatch({type:ma.VOTE,postId:a}),Object.assign({},b,{posts:la.getState()})):pa('/login')(b),addComment:({postId:a,text:b})=>(c)=>oa(c.me)?(la.dispatch({type:ma.COMMENT,postId:a,text:b}),Object.assign({},c,{posts:la.getState()})):pa('/login')(c),updateData:(a)=>(b)=>{const c=a.rooms.test.confirmed;return Object.assign({},b,{me:a.me},{posts:c})},sort:(a)=>(b)=>Object.assign({},b,{sort:a.target.value}),goto:pa},view:(a)=>(b)=>{if('/'===a.path)return Object(d.h)('div',{class:'container'},Object(d.h)('h1',null,'UpSense'),Object(d.h)(wa,{goto:b.goto,me:a.me,sort:b.sort}),Object(d.h)(ta,{goto:b.goto,posts:a.posts,vote:b.vote}));if('/create'===a.path)return Object(d.h)('div',{class:'container'},Object(d.h)('h1',null,'UpSense'),Object(d.h)(qa,{goto:b.goto,createPost:b.createPost}));if('/login'===a.path)return Object(d.h)('div',{class:'container'},Object(d.h)('h1',null,'UpSense'),Object(d.h)(xa,null));if(0===a.path.indexOf('/posts/')){const c=a.path.substr(7);return Object(d.h)('div',{class:'container'},Object(d.h)('h1',null,'UpSense'),Object(d.h)(va,{post:a.posts[c],goto:b.goto,vote:b.vote,addComment:b.addComment,editPost:b.editPost}))}}});ka.subscribe(za.updateData)},function(a,b,c){const d=c(5);a.exports=(a={},b)=>{const c=b.postId;return c?b.$user.provider?Object.assign({},a,{[c]:d(a[c],b)}):a:a}},function(a,b,c){const d=c(6),{CREATE:e,UPDATE:f,VOTE:g,COMMENT:h}=c(1);a.exports=(a={votes:{}},b)=>{switch(b.type){case e:return a.owner?a:{postId:b.postId,title:b.title,description:b.description,owner:{userId:b.$userId,name:b.$user.name},createdAt:b.$timeMs,updatedAt:b.$timeMs,status:b.status,total:0,comments:[]};case f:return b.$userId===a.owner.userId||b.$user.admin?Object.assign({},a,{title:b.title,description:b.description,updatedAt:b.$timeMs,status:b.status}):a;case g:{const c=d(a.votes,b),e=Object.values(c);return Object.assign({},a,{votes:c,total:e.reduce((a,b)=>a+b,0)})}case h:{if(!b.text||4>=b.text.length)return a;const c=a.comments.slice();return c.push({user:{userId:b.$userId,name:b.$user.name},text:b.text}),Object.assign({},a,{comments:c})}default:return a;}}},function(a,b,c){const{VOTE:d}=c(1);a.exports=(a={},b)=>{switch(b.type){case d:return a[b.$userId]?Object.assign({},a,{[b.$userId]:0}):Object.assign({},a,{[b.$userId]:1});default:return a;}}},function(){}]);