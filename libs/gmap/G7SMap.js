(function(){
    /*
 RequireJS 2.1.11 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ca){function G(b){return"[object Function]"===M.call(b)}function H(b){return"[object Array]"===M.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function U(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ga.call(b,c)}function j(b,c){return s(b,c)&&b[c]}function B(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function V(b,c,d,g){c&&B(c,function(c,h){if(d||!s(b,h))g&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[h]||(b[h]={}),V(b[h],c,d,g)):b[h]=c});return b}function t(b,c){return function(){return c.apply(b,arguments)}}function da(b){throw b;}function ea(b){if(!b)return b;var c=ca;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,g){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=g;d&&(c.originalError=d);return c}function ha(b){function c(a,e,b){var f,n,c,d,g,h,i,I=e&&e.split("/");n=I;var m=l.map,k=m&&m["*"];if(a&&"."===a.charAt(0))if(e){n=
I.slice(0,I.length-1);a=a.split("/");e=a.length-1;l.nodeIdCompat&&R.test(a[e])&&(a[e]=a[e].replace(R,""));n=a=n.concat(a);d=n.length;for(e=0;e<d;e++)if(c=n[e],"."===c)n.splice(e,1),e-=1;else if(".."===c)if(1===e&&(".."===n[2]||".."===n[0]))break;else 0<e&&(n.splice(e-1,2),e-=2);a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&m&&(I||k)){n=a.split("/");e=n.length;a:for(;0<e;e-=1){d=n.slice(0,e).join("/");if(I)for(c=I.length;0<c;c-=1)if(b=j(m,I.slice(0,c).join("/")))if(b=j(b,d)){f=b;
g=e;break a}!h&&(k&&j(k,d))&&(h=j(k,d),i=e)}!f&&h&&(f=h,g=i);f&&(n.splice(0,g,f),a=n.join("/"))}return(f=j(l.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(e){if(e.getAttribute("data-requiremodule")===a&&e.getAttribute("data-requirecontext")===i.contextName)return e.parentNode.removeChild(e),!0})}function g(a){var e=j(l.paths,a);if(e&&H(e)&&1<e.length)return e.shift(),i.require.undef(a),i.require([a]),!0}function u(a){var e,b=a?a.indexOf("!"):-1;-1<b&&(e=a.substring(0,
b),a=a.substring(b+1,a.length));return[e,a]}function m(a,e,b,f){var n,d,g=null,h=e?e.name:null,l=a,m=!0,k="";a||(m=!1,a="_@r"+(M+=1));a=u(a);g=a[0];a=a[1];g&&(g=c(g,h,f),d=j(p,g));a&&(g?k=d&&d.normalize?d.normalize(a,function(a){return c(a,h,f)}):c(a,h,f):(k=c(a,h,f),a=u(k),g=a[0],k=a[1],b=!0,n=i.nameToUrl(k)));b=g&&!d&&!b?"_unnormalized"+(Q+=1):"";return{prefix:g,name:k,parentMap:e,unnormalized:!!b,url:n,originalName:l,isDefine:m,id:(g?g+"!"+k:k)+b}}function q(a){var e=a.id,b=j(k,e);b||(b=k[e]=new i.Module(a));
return b}function r(a,e,b){var f=a.id,n=j(k,f);if(s(p,f)&&(!n||n.defineEmitComplete))"defined"===e&&b(p[f]);else if(n=q(a),n.error&&"error"===e)b(n.error);else n.on(e,b)}function w(a,e){var b=a.requireModules,f=!1;if(e)e(a);else if(v(b,function(e){if(e=j(k,e))e.error=a,e.events.error&&(f=!0,e.emit("error",a))}),!f)h.onError(a)}function x(){S.length&&(ia.apply(A,[A.length,0].concat(S)),S=[])}function y(a){delete k[a];delete W[a]}function F(a,e,b){var f=a.map.id;a.error?a.emit("error",a.error):(e[f]=
!0,v(a.depMaps,function(f,c){var d=f.id,g=j(k,d);g&&(!a.depMatched[c]&&!b[d])&&(j(e,d)?(a.defineDep(c,p[d]),a.check()):F(g,e,b))}),b[f]=!0)}function D(){var a,e,b=(a=1E3*l.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],c=[],h=!1,k=!0;if(!X){X=!0;B(W,function(a){var i=a.map,m=i.id;if(a.enabled&&(i.isDefine||c.push(a),!a.error))if(!a.inited&&b)g(m)?h=e=!0:(f.push(m),d(m));else if(!a.inited&&(a.fetched&&i.isDefine)&&(h=!0,!i.prefix))return k=!1});if(b&&f.length)return a=C("timeout","Load timeout for modules: "+
f,null,f),a.contextName=i.contextName,w(a);k&&v(c,function(a){F(a,{},{})});if((!b||e)&&h)if((z||fa)&&!Y)Y=setTimeout(function(){Y=0;D()},50);X=!1}}function E(a){s(p,a[0])||q(m(a[0],null,!0)).init(a[1],a[2])}function K(a){var a=a.currentTarget||a.srcElement,e=i.onScriptLoad;a.detachEvent&&!Z?a.detachEvent("onreadystatechange",e):a.removeEventListener("load",e,!1);e=i.onScriptError;(!a.detachEvent||Z)&&a.removeEventListener("error",e,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function L(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var X,$,i,N,Y,l={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},k={},W={},aa={},A=[],p={},T={},ba={},M=1,Q=1;N={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?p[a.map.id]=a.exports:a.exports=p[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return j(l.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};$=function(a){this.events=j(aa,a.id)||{};this.map=a;this.shim=j(l.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};$.prototype={init:function(a,e,b,f){f=f||{};if(!this.inited){this.factory=e;if(b)this.on("error",b);else this.events.error&&(b=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
b;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,e){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=e)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;T[a]||(T[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,e,b=this.map.id;e=this.depExports;var f=this.exports,c=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(c)){if(this.events.error&&this.map.isDefine||h.onError!==da)try{f=i.execCb(b,c,e,f)}catch(d){a=d}else f=i.execCb(b,c,e,f);this.map.isDefine&&void 0===f&&((e=this.module)?f=e.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=c;this.exports=f;if(this.map.isDefine&&!this.ignore&&(p[b]=f,h.onResourceLoad))h.onResourceLoad(i,this.map,this.depMaps);y(b);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=m(a.prefix);this.depMaps.push(d);r(d,"defined",t(this,function(f){var d,g;g=j(ba,this.map.id);var J=this.map.name,u=this.map.parentMap?this.map.parentMap.name:null,p=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(J=f.normalize(J,function(a){return c(a,u,!0)})||""),f=m(a.prefix+"!"+J,this.map.parentMap),r(f,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),g=j(k,f.id)){this.depMaps.push(f);
if(this.events.error)g.on("error",t(this,function(a){this.emit("error",a)}));g.enable()}}else g?(this.map.url=i.nameToUrl(g),this.load()):(d=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),d.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(k,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),d.fromText=t(this,function(f,c){var g=a.name,J=m(g),k=O;c&&(f=c);k&&(O=!1);q(J);s(l.config,b)&&(l.config[g]=l.config[b]);try{h.exec(f)}catch(j){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+j,j,[b]))}k&&(O=!0);this.depMaps.push(J);i.completeLoad(g);p([g],d)}),f.load(a.name,p,d,l))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){W[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,t(this,function(a,b){var c,f;if("string"===typeof a){a=m(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=j(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;r(a,"defined",t(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&r(a,"error",t(this,this.errback))}c=a.id;f=k[c];!s(N,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,t(this,function(a){var b=j(k,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:l,contextName:b,registry:k,defined:p,urlFetched:T,defQueue:A,Module:$,makeModuleMap:m,
nextTick:h.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=l.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(l[b]||(l[b]={}),V(l[b],a,!0,!0)):l[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(ba[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),l.shim=b);a.packages&&v(a.packages,function(a){var b,
a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(l.paths[b]=a.location);l.pkgs[b]=a.name+"/"+(a.main||"main").replace(ja,"").replace(R,"")});B(k,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=m(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ca,arguments));return b||a.exports&&ea(a.exports)}},makeRequire:function(a,e){function g(f,c,d){var j,l;e.enableBuildCallback&&(c&&G(c))&&(c.__requireJsBuild=
!0);if("string"===typeof f){if(G(c))return w(C("requireargs","Invalid require call"),d);if(a&&s(N,f))return N[f](k[a.id]);if(h.get)return h.get(i,f,a,g);j=m(f,a,!1,!0);j=j.id;return!s(p,j)?w(C("notloaded",'Module name "'+j+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):p[j]}L();i.nextTick(function(){L();l=q(m(null,a));l.skipMap=e.skipMap;l.init(f,c,d,{enabled:!0});D()});return g}e=e||{};V(g,{isBrowser:z,toUrl:function(b){var e,d=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==
d&&(!("."===g||".."===g)||1<d))e=b.substring(d,b.length),b=b.substring(0,d);return i.nameToUrl(c(b,a&&a.id,!0),e,!0)},defined:function(b){return s(p,m(b,a,!1,!0).id)},specified:function(b){b=m(b,a,!1,!0).id;return s(p,b)||s(k,b)}});a||(g.undef=function(b){x();var c=m(b,a,!0),e=j(k,b);d(b);delete p[b];delete T[c.url];delete aa[b];U(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&(aa[b]=e.events),y(b))});return g},enable:function(a){j(k,a.id)&&q(a).enable()},completeLoad:function(a){var b,
c,f=j(l.shim,a)||{},d=f.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=j(k,a);if(!b&&!s(p,a)&&c&&!c.inited){if(l.enforceDefine&&(!d||!ea(d)))return g(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,f.deps||[],f.exportsFn])}D()},nameToUrl:function(a,b,c){var f,d,g;(f=j(l.pkgs,a))&&(a=f);if(f=j(ba,a))return i.nameToUrl(f,b,c);if(h.jsExtRegExp.test(a))f=a+(b||"");else{f=l.paths;a=a.split("/");for(d=a.length;0<d;d-=1)if(g=a.slice(0,
d).join("/"),g=j(f,g)){H(g)&&(g=g[0]);a.splice(0,d,g);break}f=a.join("/");f+=b||(/^data\:|\?/.test(f)||c?"":".js");f=("/"===f.charAt(0)||f.match(/^[\w\+\.\-]+:/)?"":l.baseUrl)+f}return l.urlArgs?f+((-1===f.indexOf("?")?"?":"&")+l.urlArgs):f},load:function(a,b){h.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=K(a),i.completeLoad(a.id)},onScriptError:function(a){var b=K(a);if(!g(b.id))return w(C("scripterror",
"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var h,x,y,D,K,E,P,L,q,Q,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,R=/\.js$/,ja=/^\.\//;x=Object.prototype;var M=x.toString,ga=x.hasOwnProperty,ia=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),fa=!z&&"undefined"!==typeof importScripts,ka=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
Z="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},r={},S=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;r=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(r=require,require=void 0);h=requirejs=function(b,c,d,g){var u,m="_";!H(b)&&"string"!==typeof b&&(u=b,H(c)?(b=c,c=d,d=g):b=[]);u&&u.context&&(m=u.context);(g=j(F,m))||(g=F[m]=h.s.newContext(m));u&&g.configure(u);return g.require(b,c,d)};h.config=function(b){return h(b)};
h.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=h);h.version="2.1.11";h.jsExtRegExp=/^\/|:|\?|\.js$/;h.isBrowser=z;x=h.s={contexts:F,newContext:ha};h({});v(["toUrl","undef","defined","specified"],function(b){h[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;h.onError=da;h.createNode=function(b){var c=
b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};h.load=function(b,c,d){var g=b&&b.config||{};if(z)return g=h.createNode(g,c,d),g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Z?(O=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):
(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1)),g.src=d,L=g,D?y.insertBefore(g,D):y.appendChild(g),L=null,g;if(fa)try{importScripts(d),b.completeLoad(c)}catch(j){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,j,[c]))}};z&&!r.skipDataMain&&U(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(K=b.getAttribute("data-main"))return q=K,r.baseUrl||(E=q.split("/"),q=E.pop(),Q=E.length?E.join("/")+"/":"./",r.baseUrl=
Q),q=q.replace(R,""),h.jsExtRegExp.test(q)&&(q=K),r.deps=r.deps?r.deps.concat(q):[q],!0});define=function(b,c,d){var g,h;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(la,"").replace(ma,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(O){if(!(g=L))P&&"interactive"===P.readyState||U(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return P=b}),g=P;g&&(b||
(b=g.getAttribute("data-requiremodule")),h=F[g.getAttribute("data-requirecontext")])}(h?h.defQueue:S).push([b,c,d])};define.amd={jQuery:!0};h.exec=function(b){return eval(b)};h(r)}})(this);


    /*
     * G7SMapReady
     * 鎸囧畾鍦板浘鍘傚晢寮傛鍔犺浇鐨刢allback鍑芥暟
    */
    window.G7SMapReady = function(){
        var extend_script = document.createElement("script");
        extend_script.type = "text/javascript";
        extend_script.onerror = G7SMap.error;
        extend_script.src = G7SMap.host() + G7SMap.option.vendor + '.js';
        extend_script.onload = function(){
            G7SMap.ready();
        };
        document.body.appendChild(extend_script);
    };

    var tmpTag = 'https:' == document.location.protocol ? false : true;
	var host = '';
	if(tmpTag){
	    // http鍗忚
	    host = '//g7s.resources.huoyunren.com/G7SMap/dist/'
	}else{
	    // https鍗忚
	    window.HOST_TYPE = "2";
	    host = '//resources.g7s.huoyunren.com/G7SMap/dist/'
	}
	window.BMap_loadScriptTime = (new Date).getTime();

    /**
     * G7SMap鍏ㄥ眬鍗曚緥瀵硅薄
     * @namespace
     * @global
     * @type {{init: Function, changeVendor: Function, extend: Function}}
     */
    window.G7SMap = {
        _mapKey: {
            bmap: 'ebAmxZxmn8hHBm1anhEcTH8j',
            gmap: 'AIzaSyBdZt3pUFIFTWKlHqUA_m6GJo_V--k84KU',
            amap: '5f0481762e0e84faf5fe882823bbca16',
        },

        _USER_RESOURCE : {},

        _RESOURCE: function (mapkey) {
            // 如果传进来mapkey则优先使用传入的
            const mapkeyFunc =function(otherMapkey){
                return mapkey ? mapkey : otherMapkey
            }
            var bmap = "//api.map.baidu.com/api?v=3.0&ak="+ mapkeyFunc(this._mapKey.bmap) + (location.protocol == "https:" ? "&s=1" : "");
            var gmap = "//maps.googleapis.com/maps/api/js?key="+ mapkeyFunc(this._mapKey.gmap) +"&sensor=true&libraries=drawing,places,geometry";
            var amap = "//webapi.amap.com/maps?v=1.3&key="+ mapkeyFunc(this._mapKey.amap) +"&plugin=AMap.PolyEditor,AMap.CircleEditor,AMap.Geocoder,AMap.MouseTool,AMap.Autocomplete,AMap.MarkerClusterer,AMap.Driving";

            return this.extend({
                bmap: bmap,
                gmap: gmap,
                amap: amap,
            },this._USER_RESOURCE);
        },

        /**
         * 璁剧疆鍦板浘鍘傚晢涓绘枃浠跺湴鍧€
         * @param {Enum} vendor - bmap | gmap | amap
         * @param {String} source - 涓绘枃浠跺湴鍧€(鍖呭惈鍦板浘鍖呰矾寰勩€乲ey銆乸lugin鐨勫畬鏁磋矾寰�)
         */
        setResourceUrl: function(vendor, source){
            this._USER_RESOURCE[vendor] = source;
        },

        /**
         * 璁剧疆鍦板浘鍘傚晢鏂囦欢鐨刱ey
         * @param {Enum} vendor - bmap | gmap | amap
         * @param {String} key - 鍘傚晢鎻愪緵鐨刱ey
         */
        setResourceKey: function(vendor, key){
            this._mapKey[vendor] = key
        },

        

        /**
         * @constant
         * @type {String}
         * @default
         */
        ver:'v1.6',

        host : function(){
	        if(this.option.host){
	            return this.option.host
	        }else{
	            return host + this.ver +'/'
	        }
	    },

        option:{
            id : null,
            map_element : null,
            center : [116.404, 39.915],
            zoom:5,
            vendor: localStorage.getItem("tempVendor") || 'bmap',
            showVendor:['bmap','gmap','amap'],
            platform : 'pc',
            sourceDinate : 'BD09',
            vendorOptions:{
                position:'BOTTOM_RIGHT'
            },
            scrollwheel:true,
            zoomControl:{
                visible : true,
                position : 'TOP_LEFT'
            },
            scaleControl : {
                visible : true
            },
            mapStyle:'normal',
            mapType: 1,
            mapTypeControl : {
                visible : true,
                position : 'TOP_RIGHT'
            },
        },
        require: require,
        define: define,

        /**
         * 鍔犺浇鍦板浘璧勬簮骞跺垵濮嬪寲
         * @classdesc G7SMap.init
         * @param {Object} option
         * @param {String} option.id - 涓嶅甫鈥�#鈥濈殑瀹瑰櫒ID鍊硷紝濡傦細mapDiv
         * @param {Object} option.map_element - 
         * @param {Array} option.center - 缁忕含搴︽暟缁勶紝榛樿鍊�:[116.404, 39.915]
         * @param {Number} option.zoom - 鍦板浘鏄剧ず绾у埆3-19
         * @param {String} option.vendor - 鍦板浘鍘傚晢鍒嗙被锛歜map | gmap | amap
         * @param {String} option.sourceDinate - 绾﹀畾浼犲叆鐨勫湴鍥炬暟鎹簮绫诲瀷锛孊D09 | GCJ02
         * @param {Boolean} option.clickableIcons - 鍦板浘鍥句緥鏄惁鍙偣鍑�
         * @param {Array} option.showVendor - 鍦板浘鍘傚晢鍒囨崲鏄剧ず鎸夐挳 ["bmap","gmap","amap"]
         * @param {String} option.platform - 鍦板浘鏄剧ず鐨勮澶囧钩鍙�, mobile | pc
         * @param {Object} option.vendorOptions
         * @param {String} option.vendorOptions.position - vendor浣嶇疆
         * @param {Object} option.vendorOptions.vendorStyle - css閿€煎鏍峰紡
         * @param {Object} option.changeVendor
         * @param {Function} option.changeVendor.callback - 鍒囨崲鍦板浘鏃跺€欑殑鍥炶皟锛坴1.5澧炲姞锛�
         * @param {Number} option.maxZoom - 鍦板浘鍏佽灞曠ず鐨勬渶澶х骇鍒紝3-19
         * @param {Number} option.minZoom - 鍦板浘鍏佽灞曠ず鐨勬渶灏忕骇鍒紝3-19
         * @param {Boolean} option.scrollwheel - 鏄惁寮€鍚紶鏍囩缉鏀惧湴鍥�
         * @param {Object} option.zoomControl
         * @param {Boolean} option.zoomControl.visible  - 鏄惁寮€鍚鑸缉鏀炬帶浠�
         * @param {String} option.zoomControl.position - 寮€鍚綅缃細TOP_LEFT | TOP_RIGHT | BOTTOM_LEFT | BOTTOM_RIGHT
         * @param {Object} option.scaleControl
         * @param {Boolean} option.scaleControl.visible - 鏄惁寮€鍚瘮渚嬪昂鎺т欢
         * @param {Object} option.mapTypeControl
         * @param {Boolean} option.mapTypeControl.visible - 鏄惁寮€鍚湴鍥剧被鍨嬫帶浠�
         * @param {String} option.mapTypeControl.position - 寮€鍚綅缃細TOP_LEFT | TOP_RIGHT | BOTTOM_LEFT | BOTTOM_RIGHT
         * @param {Number} option.mapType - 璁剧疆搴曞浘绫诲瀷 <br>0:甯﹂亾璺殑鍗槦鍥� <br>1:鏅€氬湴鍥� <br>2:鍗槦鍥�
         * @param {String} option.mapStyle - 璁剧疆鍦板浘鏍峰紡鐨偆
         * <p>鐧惧害:</p>
         * <p style="padding-left:20px;">normal - 榛樿鍦板浘鏍峰紡 <br>
           light - 娓呮柊钃濋鏍� <br>
           dark - 榛戝椋庢牸 <br>
           redalert - 绾㈣壊璀︽垝椋庢牸 <br>
           googlelite - 绮剧畝椋庢牸 <br>
           grassgreen - 鑷劧缁块鏍� <br>
           midnight - 鍗堝钃濋鏍� <br>
           pink - 娴极绮夐鏍� <br>
           darkgreen - 闈掓槬缁块鏍� <br>
           bluish - 娓呮柊钃濈豢椋庢牸 <br>
           grayscale - 楂樼鐏伴鏍� <br>
           hardedge - 寮鸿竟鐣岄鏍�
           </p>
           <p>楂樺痉锛�</p>
           <p style="padding-left:20px;">normal - 鏍囧噯<br>
           whitesmoke - 杩滃北榛�<br>
           macaron - 椹崱榫�<br>
           graffiti - 娑傞甫<br>
           darkblue - 鏋佸钃�<br>
           blue - 闈涢潚钃�<br>
           fresh - 鑽夎壊闈�<br>
           dark - 骞诲奖榛�<br>
           light - 鏈堝厜閾�<br>
           grey - 闆呭＋鐏�</p>
         * @param {String} option.host - 鎸囧畾璧勬簮璺緞 
         * <br> http鍗忚 - //g7s.resources.huoyunren.com/G7SMap/dist/
         * <br> https鍗忚 - //resources.g7s.huoyunren.com/G7SMap/dist/
         * @param {Function} option.beforeLoadResource - 澶栭儴璧勬簮鍔犺浇涔嬪墠鎵ц
         * @param {Function} option.beforeInitMap - 澶栭儴璧勬簮鍔犺浇涔嬪悗锛屽湴鍥惧垵濮嬪寲涔嬪墠鎵ц
         * @returns {Promise}
         */
         

        
        init:function(option){
            var self = this;
            var promise = new Promise(function(resolve,reject){
                self.load(option).then(function(){
                    return self.initMap(option);
                },function(error){
                    reject('load error:'+error);
                }).then(function(map){
                    //璁剧疆鍔犺浇plugin璺緞
                    requirejs.config({
                        baseUrl: self.host(),
                        paths: {
                            plugin: 'plugin/'+self.getVendor()
                        }
                    });
                    resolve(map);
                },function(error){
                    reject('鍑洪敊浜嗭紝'+error);
                })
            })
            return promise;
        },

        /**
         * 鍔犺浇鍦板浘涓绘枃浠�
         * @param {Object} option 閰嶇疆鍙傛暟锛屽悓{@link G7SMap.init} option
         */
        load: function(option){
            var self = this;
            //鍚堝苟璁剧疆椤�
            self.option = self.extendCopy(self.option,option);

            var promise = new Promise(function(resolve,reject){

                self.ready = function(){
                    resolve();
                };

                self.error = function () {
                    reject();
                }

                if(window.BMap && self.option.vendor == 'bmap'){
                    G7SMapReady();
                    return false;
                }

                option.beforeLoadResource && option.beforeLoadResource.call(self, option);

                var vendor_script = document.createElement("script");
                vendor_script.onerror = reject;
                vendor_script.type = "text/javascript";
                vendor_script.src = self._RESOURCE(option.ak)[self.option.vendor] + '&callback=G7SMapReady';
                document.body.appendChild(vendor_script);
            })
            return promise;
        },

        /**
         * 鍒濆鍖栧湴鍥撅紝鍙敤浜巐oad涔嬪悗
         * @param {Object} option 閰嶇疆鍙傛暟锛屽悓{@link G7SMap.init} option
         */
        initMap: function(option){
            var self = this;
            //鍚堝苟璁剧疆椤�
            self.option = self.extendCopy(self.option,option);
            self.option.map_element = document.getElementById(self.option.id);

            if(localStorage.getItem("tempVendor")){
                self.option.vendor = localStorage.getItem("tempVendor");
            }
            
            var promise = new Promise(function(resolve,reject){
                option.beforeInitMap && option.beforeInitMap.call(self, option);
                var map = new G7SMap.Map(self.option);
                if(self.option.vendor === 'gmap'){
                    map.addEventOnce('tilesloaded',map,function(){
                        resolve(map);
                    })
                }else{
                    resolve(map);
                }
                if(self.option.showVendor && self.option.showVendor.length){
                    self.loadVendorCss();
                    self.showVendor(self.option.showVendor);
                }

            });
            return promise;
        },

        /**
         * 鍒囨崲鍦板浘鍘傚晢
         * @param {String} vendor bmap | gmap | amap
         */
        changeVendor:function(vendor){
            localStorage.setItem("tempVendor",vendor);
            window.location.reload();
        },

        /**
         * 鑾峰緱褰撳墠鍦板浘vendor
         * @return {String} bmap | gmap | amap
         */
        getVendor:function(){
            return this.option.vendor;
        },

        /**
         * 鍚堝苟涓や釜瀵硅薄
         * @param target {Object} 鐩爣鐨勫璞�
         * @param source {Object} 鍚堝苟鐨勬簮瀵硅薄
         * @return {Object} 鍚堝苟鍚庣殑瀵硅薄
         */
        extend:function(target,source){
            var self = this;
            if(!target)target = {};
            for (var p in source) {
                if(source.hasOwnProperty(p)){
                    if(typeof(source[p]) === 'string' || typeof(source[p]) === 'number' || typeof(source[p]) === 'boolean' || source[p] instanceof Array){
                        target[p] = source[p];
                    }else{
                        target[p] = self.extend(target[p],source[p]);
                    }
                }
            }
            return target;
        },
        /**
         * 鍚堝苟涓や釜瀵硅薄鐢熸垚涓€涓柊瀵硅薄锛屽師瀵硅薄鍜岀洰鏍囧璞″潎涓嶅彈姹℃煋
         * @param target {Object} 鐩爣鐨勫璞�
         * @param source {Object} 鍚堝苟鐨勬簮瀵硅薄
         * @returns {Object} 鍚堝苟鍚庣殑瀵硅薄
         */
        extendCopy:function(target,source){
            var self = this;
            var result = {};
            for (var p in target) {
                result[p] = target[p];
            }
            for (var p in source) {
                if(source.hasOwnProperty(p)){
                    if(typeof(source[p]) === 'string' || typeof(source[p]) === 'number' || typeof(source[p]) === 'boolean' || source[p] instanceof Array){
                        result[p] = source[p];
                    }else{
                        result[p] = self.extendCopy(result[p],source[p]);
                    }
                }
            }
            return result;
        },
        /**
         * 鍔犺浇vendor鏍峰紡
         */
        loadVendorCss: function(){

            var url = '';
            if(this.option.platform === 'mobile'){
                url = this.host()+'css/mobile_vendor.css';
            }else{
                url = this.host()+'css/vendor.css';
            }

            this.insertLinkCss(url);
            this.insertLinkCss('//at.alicdn.com/t/font_fywjygbzfh1714i.css');
        },

        /**
         * 鍔犺浇鍒囨崲鎸夐挳Dom
         * @param vendorArray {Array} vendor鏁扮粍
         */
        showVendor:function(vendorArray){

            //娣诲姞鏍峰紡
            if(this.option.vendorOptions){
                this.setVendorOptions();
            }

            var position = this.option.vendorOptions.position;
            var v_class = '';
            switch(position){
                case 'BOTTOM_RIGHT' : v_class = 'br'; break;
                case 'BOTTOM_LEFT' : v_class = 'bl'; break;
                case 'TOP_RIGHT' : v_class = 'tr'; break;
                case 'TOP_LEFT' : v_class = 'tl'; break;
            }

            //鍒涘缓Dom
            var G7SMap_vendor = document.createElement("div");
            G7SMap_vendor.id = 'G7SMap_vendor';
            G7SMap_vendor.className = v_class;
            G7SMap_vendor.innerHTML = '<div id="G7SMap_vendor_current" class="iconfont icon-'+this.option.vendor+'"></div>';
                                
            var vendorList = document.createElement("ul");
            vendorList.id = "G7SMap_vendorList";
            var str = ''
            for(var i = 0 ; i < vendorArray.length ; i ++){
               str+= '<li class="G7SMap_vendor_'+vendorArray[i]+' iconfont icon-'+vendorArray[i]+'"  onclick="G7SMap.changeVendor(\''+vendorArray[i]+'\')"></li>';
            }
            vendorList.innerHTML = str;
            vendorList.querySelector('.G7SMap_vendor_'+this.option.vendor).classList.add('active');  

            G7SMap_vendor.appendChild(vendorList);
            this.option.map_element.appendChild(G7SMap_vendor);

            //娣诲姞vendor浜嬩欢
            this.addVendorEvent(G7SMap_vendor);
        },
        setVendorOptions: function(){
            var opt = this.option.vendorOptions;

            if(opt.vendorStyle){
                this.insertStyleCss('g7smap_vendor_style','#G7SMap_vendor',opt.vendorStyle);
            }
            if(opt.currentStyle){
                this.insertStyleCss('g7smap_vendor_style','#G7SMap_vendor_current',opt.currentStyle);
            }
            if(opt.itemWrapStyle){
                this.insertStyleCss('g7smap_vendor_style','#G7SMap_vendorList',opt.itemWrapStyle);
            }
            if(opt.itemStyle){
                this.insertStyleCss('g7smap_vendor_style','#G7SMap_vendorList>li',opt.itemStyle);
            }
            if(opt.activeItemStyle){
                this.insertStyleCss('g7smap_vendor_style','#G7SMap_vendorList>li.active',opt.activeItemStyle);
            }
        },
        addVendorEvent: function(dom){
            var self = this;
            var current = dom.querySelector('#G7SMap_vendor_current');
            var vendorList = dom.querySelector('#G7SMap_vendorList');

            //鎵撳紑銆佸叧闂璿endor鍒楄〃
            current.addEventListener("click", function(e){
                dom.classList.toggle('open');  
                e.stopPropagation();
            });
            document.addEventListener("click", function(e){
                dom.classList.remove('open');  
            });
        },

        /**
         * 娣诲姞澶栭摼鏍峰紡
         * @param  {String} url 澶栭摼鏍峰紡url鍦板潃
         */
        insertLinkCss : function(url){
            var arr = [];
            if(typeof(url) === 'string'){
                arr.push(url);
            }else{
                arr = url;
            }
            for(var i = 0 ; i < arr.length ; i ++){
                var css = document.createElement("link");
                css.rel="stylesheet";
                css.href = arr[i];
                document.getElementsByTagName("head")[0].appendChild(css);
            }
        },
        
        /**
         * 鎻掑叆鍐呴摼鏍峰紡
         * @param  {String} url 澶栭摼鏍峰紡url鍦板潃
         * @param  {String} cssId    鍐呰仈style鍧楃殑id鍊�
         * @param  {String} cssKey   css閿悕
         * @param  {String} cssValue css閿€�
         */
        insertStyleCss : function(cssId, cssKey, cssValue){
            //鏋勫缓style鏍囩
            var element = document.querySelector('#'+cssId);
            if(!element){
                element = document.createElement("style");
                element.type = "text/css";
                element.id = cssId;
                document.getElementsByTagName("head")[0].appendChild(element);
            }

            //鍚憇tyle鏍囩閲屾坊鍔燾ss
            var str = cssKey + '{'
            for(var i in cssValue){
                str += i + ':' + cssValue[i] + ';';
            }
            str += '}';
            element.innerHTML += str;
        },
        
        //瀛樺偍鍒犻櫎浜嬩欢
        eventListenerList : {},

        /**
         * 鑾峰緱闅忔満瀛楃涓�
         * @return {String} 杩斿洖闅忔満瀛楃涓�
         */
        randomString : function(){
            return Math.random().toString(36).substr(2);
        },

        //鍙傝€冿細http://www.biaodianfu.com/coordinate-system.html
        //      

        /**
         * 鐏槦鍧愭爣杞负鐧惧害鍧愭爣锛孏CJ02涓虹伀鏄熷潗鏍囷紝BD09涓虹櫨搴﹀潗鏍�
         * @param {Object[]} arr 
         * @param {Number} arr.lng - 缁忓害
         * @param {Number} arr.lat - 绾害
         * @param {Number} n - 淇濈暀灏忔暟鐐瑰悗鍑犱綅
         * @returns {Object} 缁撴瀯鍚屽叆鍙俛rr
         * @see {@link http://www.biaodianfu.com/coordinate-system.html}
         * @see {@link http://blog.csdn.net/meegomeego/article/details/39927017}
         */
        GCJ02_to_BD09:function(arr,n){
            var result = [];
            var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
            if(!n){n = 7}
            m = Math.pow(10,n);
            for(var i = 0 ; i < arr.length ; i ++){
                var x = arr[i].lng, y = arr[i].lat;
                var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
                var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
                var bd_lon = z * Math.cos(theta) + 0.0065;
                var bd_lat = z * Math.sin(theta) + 0.006;
                var obj = {}
                obj.lng = Math.round(bd_lon*m)/m;
                obj.lat = Math.round(bd_lat*m)/m;
                result.push(obj); 
            }
            return result;
        },
        /**
         * 鐧惧害鍧愭爣杞负鐏槦鍧愭爣锛孊D09涓虹櫨搴﹀潗鏍囷紝GCJ02涓虹伀鏄熷潗鏍�
         * @param {Object[]} arr 
         * @param {Number} arr.lng - 缁忓害
         * @param {Number} arr.lat - 绾害
         * @param {Number} n - 淇濈暀灏忔暟鐐瑰悗鍑犱綅
         * @returns {Object} 缁撴瀯鍚屽叆鍙俛rr
         * @see {@link http://www.biaodianfu.com/coordinate-system.html}
         * @see {@link http://blog.csdn.net/meegomeego/article/details/39927017}
         */
        BD09_to_GCJ02:function(arr,n){
            var result = [],m;
            var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
            if(!n){n = 7}
            m = Math.pow(10,n);
            for(var i = 0 ; i < arr.length ; i ++){
                var x = arr[i].lng - 0.0065, y = arr[i].lat - 0.006;
                var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
                var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
                var gg_lon = z * Math.cos(theta);
                var gg_lat = z * Math.sin(theta);
                var obj = {}
                obj.lng = Math.round(gg_lon*m)/m;
                obj.lat = Math.round(gg_lat*m)/m;
                result.push(obj);
            }
            return result;
        }
    };

    window.G7SMapSetting = {
        ICON : {
            //榛樿涓鸿杩涜溅杈�
            DEFAULT : {url : G7SMap.host() + 'img/POI_location.png', size : [24,37], anchor : [12,37],rotation : 0},
            //鏅€氬湴鐞嗕綅缃�
            POI_LOCATION : {url : G7SMap.host() + 'img/POI_location.png',size : [24,37],anchor : [12,37],rotation : 0},

            //鏅€氬湴鐞嗕綅缃�
            POI_LOCATION_GREEN : {url : G7SMap.host() + 'img/POI_location_green.png',size : [24,37],anchor : [12,37],rotation : 0},

            //鍔犳补绔�
            POI_GAS : {url : G7SMap.host() + 'img/POI_gas.png',size : [24,24],anchor : [12,12],rotation : 0},

            //鍏朵粬
            POI_OTHER : {url : G7SMap.host() + 'img/POI_other.png',size : [24,24],anchor : [12,12],rotation : 0},

            //璋冩嫧鐐�
            POI_ALLOCATION : {url : G7SMap.host() + 'img/POI_allocation.png',size : [24,24],anchor : [12,12],rotation : 0},

            //鍋滆溅鍦�
            POI_PARKING : {url : G7SMap.host() + 'img/POI_parking.png',size : [24,24],anchor : [12,12],rotation : 0},

            //缁翠慨鐐�
            POI_REPAIR : {url : G7SMap.host() + 'img/POI_repair.png',size : [24,24],anchor : [12,12],rotation : 0},

            //璧风偣
            POI_START : {url : G7SMap.host() + 'img/POI_start.png',size : [32,32],anchor : [16,16],rotation : 0},

            //缁堢偣
            POI_END : {url : G7SMap.host() + 'img/POI_end.png',size : [32,32],anchor : [16,16],rotation : 0},
            
            //浜嬩欢鐐�
            POI_EVENT : {url : G7SMap.host() + 'img/POI_event.png',size : [16,16],anchor : [8,8],rotation : 0},

            //鍋滅暀鐐�
            POI_STOP : {url : G7SMap.host() + 'img/POI_stop.png',size : [16,16],anchor : [8,8],rotation : 0},

            //鏂板缓璧风偣
            POI_N_START : {url : G7SMap.host() + 'img/POI_n_start.png',size : [16,16],anchor : [8,8],rotation : 0},

            //鏂板缓缁堢偣
            POI_N_END : {url : G7SMap.host() + 'img/POI_n_end.png',size : [16,16],anchor : [8,8],rotation : 0},

            //琛岃繘杞﹁締
            TRUCK_DEFAULT : {url : G7SMap.host() + 'img/truck_default.png', size : [28,28], anchor : [14,14], rotation : 0},

            //琛岃繘杞﹁締focus
            TRUCK_DEFAULT_FOCUS : {url : G7SMap.host() + 'img/truck_default_focus.png', size : [28,28], anchor : [14,14], rotation : 0},

            //闈欐杞﹁締
            TRUCK_STOP : {url : G7SMap.host() + 'img/truck_stop.png', size : [28,28], anchor : [14,14], rotation : 0},
            
            //闈欐杞﹁締focus
            TRUCK_STOP_FOCUS : {url : G7SMap.host() + 'img/truck_stop_focus.png', size : [28,28], anchor : [14,14], rotation : 0},

            //绂荤嚎杞﹁締
            TRUCK_OFFLINE : {url : G7SMap.host() + 'img/truck_offline.png', size : [28,28], anchor : [14,14], rotation : 0},

            //绂荤嚎杞﹁締focus
            TRUCK_OFFLINE_FOCUS : {url : G7SMap.host() + 'img/truck_offline_focus.png', size : [28,28], anchor : [14,14], rotation : 0},

            //瓒呴€熻溅杈�
            TRUCK_HIGHSPEED : {}

        },
        MARKER : {
            DEFAULT : {draggable : false,clickable : true,optimized:true,offset:[-12,-37]}
        },
        POLYLINE : {
            DEFAULT :{strokeColor:'#33ff00',strokeWeight:5,strokeOpacity:0.7,strokeStyle:'solid',editable : false,clickable : true}
        },
        POLYGON : {
            DEFAULT :{strokeColor : '#ff595a',fillColor : '#ff595a',strokeWeight : 3,strokeOpacity : 1,fillOpacity : 0.5,strokeStyle : 'solid',editable : false,clickable : true}
        },
        CIRCLE : {
            DEFAULT :{strokeColor : '#ff595a',fillColor : '#ff595a',strokeWeight : 3,strokeOpacity : 1,fillOpacity : 0.5,strokeStyle : 'solid',editable : false,clickable : true}
        },
        LABEL : {
            DEFAULT :{
                offset : {x:0,y:0},
                style : {background :'none',border : 'none',fontWeight : 'bold'}
            }
        }
    };

})();
