import{p as q,e as L,r as G,s as le,H as fe,I as Be,aM as W,aN as re,aK as b,aH as _e,aQ as ie,aU as se,aV as ue,aW as Le,w as s,aP as Oe,aX as me,k as de,as as Ze,aY as Ae,aO as Ie,h as pe}from"./index-wHR8KpRN.js";function De(o){return{all:o=o||new Map,on:function(l,a){var e=o.get(l);e?e.push(a):o.set(l,[a])},off:function(l,a){var e=o.get(l);e&&(a?e.splice(e.indexOf(a)>>>0,1):o.set(l,[]))},emit:function(l,a){var e=o.get(l);e&&e.slice().map(function(r){r(a)}),(e=o.get("*"))&&e.slice().map(function(r){r(l,a)})}}}const Pe=De();function ye(){return Pe}const E=()=>{},$={};function g({key:o,src:l,addCalToWindow:a=!1,exportGetter:e=E}){const r=e();if(!$[o]&&!r)$[o]=new Promise((n,u)=>{const i=document.createElement("script"),d=()=>{n(e()),window.document.body.removeChild(i)};a?window[o]=d:i.onload=function(){(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")&&(i.onload=null,d())},i.src=l,i.type="text/javascript",i.defer=!0,i.onerror=u,document.body.appendChild(i)});else if(r!==void 0)return Promise.resolve(r);return $[o]}const M={TrackAnimation:"//mapopen.bj.bcebos.com/github/BMapGLLib/TrackAnimation/src/TrackAnimation.min.js",Mapvgl:"https://unpkg.com/mapvgl/dist/mapvgl.min.js",MapvglThreeLayers:"https://unpkg.com/mapvgl/dist/mapvgl.threelayers.min.js",Mapv:"https://unpkg.com/mapv/build/mapv.min.js",MapvThree:"https://unpkg.com/mapv-three/dist/mapvthree.umd.js"},xe={TrackAnimation:o=>g({src:o||M.TrackAnimation,addCalToWindow:!1,key:"trackAnimation"}),Mapvgl:o=>g({src:o||M.Mapvgl,addCalToWindow:!1,key:"Mapvgl"}),MapvglThreeLayers:o=>g({src:o||M.MapvglThreeLayers,addCalToWindow:!1,key:"MapvglThreeLayers"}),Mapv:o=>g({src:o||M.Mapv,addCalToWindow:!1,key:"Mapv"}),MapvThree:o=>g({src:o||M.MapvThree,addCalToWindow:!1,key:"MapvThree"})};function Re(o,l={}){const a=[...new Set(o)].reduce((e,r)=>{let n;return typeof r=="string"&&(n=xe[r])?e.push(n(l[r])):typeof r=="function"&&e.push(r()),e},[]);return Promise.all(a)}function ge(o,l,a){for(const e of Object.keys(o))if(/^on/.test(e)&&o[e]){const r=e.replace(/^on/,"").toLocaleLowerCase();a.addEventListener(r,n=>{var u,i;n.preventDefault=n.preventDefault||((u=n.domEvent)===null||u===void 0?void 0:u.preventDefault.bind(n.domEvent)),n.stopPropagation=n.stopPropagation||((i=n.domEvent)===null||i===void 0?void 0:i.stopPropagation.bind(n.domEvent)),l(r,n)})}}function _(o,l){console.error(`[Vue3 BaiduMap GL/${o}]: ${l}`)}const ze=typeof window<"u";function ce(o){return Object.prototype.toString.call(o)==="[object String]"}let je=0;function $e(){return`${je++}`}function N(o){return(l,a)=>{(l===a||l!==a&&JSON.stringify(l)!==JSON.stringify(a))&&o(l)}}function be(){const o=$e();return q("parentComponentId",o),o}const Ne=["id"];var he=L(Object.assign({name:"BMap"},{__name:"index",props:{ak:{type:String,required:!1},apiUrl:{type:String,required:!1},width:{type:[String,Number],required:!1,default:"100%"},height:{type:[String,Number],required:!1,default:"550px"},center:{type:null,required:!1,default:()=>({lat:39.915185,lng:116.403901})},mapType:{type:null,required:!1,default:"BMAP_NORMAL_MAP"},zoom:{type:Number,required:!1,default:14},heading:{type:Number,required:!1,default:0},tilt:{type:Number,required:!1,default:0},minZoom:{type:Number,required:!1,default:0},maxZoom:{type:Number,required:!1,default:21},noAnimation:{type:Boolean,required:!1,default:!1},mapStyleId:{type:String,required:!1},mapStyleJson:{type:Array,required:!1},showControls:{type:Boolean,required:!1,default:!1},plugins:{type:null,required:!1},pluginsSourceLink:{type:Object,required:!1},displayOptions:{type:Object,required:!1},restrictCenter:{type:Boolean,required:!1,default:!0},enableTraffic:{type:Boolean,required:!1,default:!1},enableDragging:{type:Boolean,required:!1,default:!0},enableInertialDragging:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},enableContinuousZoom:{type:Boolean,required:!1,default:!0},enableResizeOnCenter:{type:Boolean,required:!1,default:!0},enableDoubleClickZoom:{type:Boolean,required:!1,default:!1},enableKeyboard:{type:Boolean,required:!1,default:!0},enablePinchToZoom:{type:Boolean,required:!1,default:!0},enableAutoResize:{type:Boolean,required:!1,default:!0},enableIconClick:{type:Boolean,required:!1},loadingBgColor:{type:String,required:!1,default:"#f1f1f1"},loadingTextColor:{type:String,required:!1,default:"#999"},backgroundColor:{type:Array,required:!1,default:()=>[245,245,245,100]},onClick:{type:null,required:!1},onDblclick:{type:null,required:!1},onRightclick:{type:null,required:!1},onRightdblclick:{type:null,required:!1},onMaptypechange:{type:null,required:!1},onMousemove:{type:null,required:!1},onMouseover:{type:null,required:!1},onMouseout:{type:null,required:!1},onMovestart:{type:null,required:!1},onMoving:{type:null,required:!1},onMoveend:{type:null,required:!1},onZoomstart:{type:null,required:!1},onZoomend:{type:null,required:!1},onAddoverlay:{type:null,required:!1},onAddcontrol:{type:null,required:!1},onRemovecontrol:{type:null,required:!1},onRemoveoverlay:{type:null,required:!1},onClearoverlays:{type:null,required:!1},onDragstart:{type:null,required:!1},onDragging:{type:null,required:!1},onDragend:{type:null,required:!1},onAddtilelayer:{type:null,required:!1},onRemovetilelayer:{type:null,required:!1},onLoad:{type:null,required:!1},onResize:{type:null,required:!1},onHotspotclick:{type:null,required:!1},onHotspotover:{type:null,required:!1},onHotspotout:{type:null,required:!1},onTilesloaded:{type:null,required:!1},onTouchstart:{type:null,required:!1},onTouchmove:{type:null,required:!1},onTouchend:{type:null,required:!1},onLongpress:{type:null,required:!1}},emits:["initd","unload","pluginReady","click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],setup(o,{expose:l,emit:a}){const e=o,r=G();let n=null,u=G(!1);const i=me(),d=be(),{emit:f}=ye(),O=le(()=>ce(e.width)?e.width:`${e.width}px`),C=le(()=>ce(e.height)?e.height:`${e.height}px`),m=ze&&!!i;function h(){if(!m)return;const{proxy:t}=i,c=e.ak||t&&t.$baiduMapAk,y=e.apiUrl||t&&t.$baiduMapApiUrl,w=e.plugins&&t.$baiduMapPlugins?Object.assign(t.$baiduMapPlugins,e.plugins):e.plugins||t.$baiduMapPlugins,A=e.pluginsSourceLink&&t.$baiduMapPluginsSourceLink?Object.assign(t.$baiduMapPluginsSourceLink,e.pluginsSourceLink):e.pluginsSourceLink||t.$baiduMapPluginsSourceLink||{},B=y||`_initBMap_${c}`;g({src:y||`//api.map.baidu.com/api?type=webgl&v=1.0&ak=${c}&callback=${B}`,addCalToWindow:!y,key:B,exportGetter:()=>window.BMapGL}).then(()=>{const{restrictCenter:v,enableIconClick:I,backgroundColor:D,minZoom:P,maxZoom:x,mapType:R,enableAutoResize:z,showControls:j,center:Se,displayOptions:Te}=e;if(!r.value)return;n=new BMapGL.Map(r.value,{backgroundColor:D,enableIconClick:I,restrictCenter:v,minZoom:P,maxZoom:x,mapType:window[R],enableAutoResize:z,showControls:j,displayOptions:Te}),S(Se),k(),p(),Z(),ge(e,a,n),w&&Re(w,A).then(()=>{a("pluginReady",n)}).catch(we=>{_("BMap","plugins error: "+we)});const ae={map:n,instance:i,BMapGL:window.BMapGL};f(d,ae),a("initd",ae),u.value=!0}).catch(v=>_("BMap",v.message))}function p(){if(e.mapStyleId){n.setMapStyleV2({styleId:e.mapStyleId});return}else e.mapStyleJson&&n.setMapStyleV2({styleJson:e.mapStyleJson})}function Z(){s(()=>e.zoom,U),s(()=>e.tilt,K),s(()=>e.heading,J),s(()=>e.center,N(S),{deep:!0}),s(()=>e.mapStyleId,p),s(()=>e.mapStyleJson,N(p),{deep:!0}),s(()=>e.displayOptions,N(ke),{deep:!0}),s(()=>e.mapType,V),s(()=>e.enableTraffic,H),s(()=>e.enableDragging,T),s(()=>e.enableInertialDragging,F),s(()=>e.enableScrollWheelZoom,Q),s(()=>e.enableContinuousZoom,X),s(()=>e.enableResizeOnCenter,Y),s(()=>e.enableDoubleClickZoom,ee),s(()=>e.enableKeyboard,ne),s(()=>e.enablePinchToZoom,te),s(()=>e.enableAutoResize,oe)}function k(){const{enableDragging:t,enableInertialDragging:c,enableScrollWheelZoom:y,enableContinuousZoom:w,enableResizeOnCenter:A,enableDoubleClickZoom:B,enableKeyboard:v,enablePinchToZoom:I,enableAutoResize:D,enableTraffic:P,mapType:x,zoom:R,tilt:z,heading:j}=e;U(R),K(z),H(P),J(j),V(x),ne(v),T(t),oe(D),te(I),X(w),Y(A),ee(B),Q(y),F(c)}function Ce(t,c){return new BMapGL.Point(t,c)}function H(t){t?n.setTrafficOn():n.setTrafficOff()}function S(t){typeof t=="string"?n.centerAndZoom(t,e.zoom):n.centerAndZoom(Ce(t.lng,t.lat),e.zoom)}function ke(t){n.setDisplayOptions(t||{})}function U(t){n.setZoom(t,{noAnimation:e.noAnimation})}function V(t){window[t]!==void 0&&n.setMapType(window[t])}function J(t){n.setHeading(t)}function K(t){n.setTilt(t)}function T(t){t?n.enableDragging():n.disableDragging()}function F(t){t?n.enableInertialDragging():n.disableInertialDragging()}function Q(t){t?n.enableScrollWheelZoom():n.disableScrollWheelZoom()}function X(t){t?n.enableContinuousZoom():n.disableContinuousZoom()}function Y(t){t?n.enableResizeOnCenter():n.disableResizeOnCenter()}function ee(t){t?n.enableDoubleClickZoom():n.disableDoubleClickZoom()}function ne(t){t?n.enableKeyboard():n.disableKeyboard()}function te(t){t?n.enablePinchToZoom():n.disablePinchToZoom()}function oe(t){t?n.enableAutoResize():n.disableAutoResize()}return fe(h),Be(()=>{if(n)try{n.destroy()}catch(t){_("BMapGL SDK",t.message)}}),l({getMapInstance:()=>n,getBaseMapOptions:()=>e,resetCenter:()=>S(e.center),setDragging:T}),q("getMapInstance",()=>n),q("baseMapSetCenterAndZoom",t=>S(t)),q("baseMapSetDragging",t=>T(t)),q("getBaseMapOptions",()=>e),(t,c)=>(W(),re("div",{id:b(d)},[b(m)?(W(),re(_e,{key:0},[ie("div",{class:"baidu-map-container",ref_key:"mapContainer",ref:r,style:ue([{width:O.value,height:C.value,background:e.loadingBgColor},{position:"relative",overflow:"hidden"}])},[se(t.$slots,"loading",{},()=>[ie("div",{style:ue([{color:e.loadingTextColor},{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}])},Oe(b(u)?"":"map loading..."),5)])],4),se(t.$slots,"default")],64)):Le("v-if",!0)],8,Ne))}}));he.__file="packages/components/map/index.vue";function ve(o){const{on:l,off:a,emit:e}=ye(),r=me(),n=be(),{emit:u}=r||{emit:E},i=de("getMapInstance",void 0),f=de("parentComponentId",void 0)||"",O=r&&r.type.name||"";if(typeof i>"u")return{ready:E};const C=i();let m;const h=p=>{m=o(p.map)};return fe(()=>{C?h({map:C}):l(f,h)}),Ze(()=>{try{m&&m()}catch(p){_(O,p.message)}u("unload"),a(f,h)}),{ready:(p,Z)=>{const k={map:p,instance:Z,BMapGL:window.BMapGL};u("initd",k),e(n,k)}}}var Me=L(Object.assign({name:"BZoom"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:83,y:18})},visible:{type:Boolean,required:!1,default:!0}},emits:["initd","unload"],setup(o){const l=o;let a;const{ready:e}=ve(r=>{const{visible:n,offset:u,anchor:i}=l;return a=new BMapGL.ZoomControl({offset:new BMapGL.Size(u.x,u.y),anchor:window[i]}),n&&r.addControl(a),e(r,a),s(()=>l.visible,d=>{r[d?"addControl":"removeControl"](a)}),()=>r.removeControl(a)});return(r,n)=>null}}));Me.__file="packages/components/control/zoom/index.vue";var qe=L(Object.assign({name:"BLocation"},{__name:"index",props:{anchor:{type:null,required:!1,default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{type:Object,required:!1,default:()=>({x:18,y:18})},visible:{type:Boolean,required:!1,default:!0},onLocationError:{type:null,required:!1},onLocationSuccess:{type:null,required:!1}},emits:["initd","unload","locationSuccess","locationError"],setup(o,{emit:l}){const a=o;let e;const{ready:r}=ve(n=>{const{visible:u,offset:i,anchor:d}=a;return e=new BMapGL.LocationControl({offset:new BMapGL.Size(i.x,i.y),anchor:window[d]}),u&&n.addControl(e),r(n,e),ge(a,l,e),s(()=>a.visible,f=>{n[f?"addControl":"removeControl"](e)}),()=>n.removeControl(e)});return(n,u)=>null}}));qe.__file="packages/components/control/location/index.vue";const We=L({__name:"map",setup(o){const l=G("cwHsf5i2fAQAlijOyELx5COtkFhItaSm");return(a,e)=>(W(),Ae(b(he),{ak:l.value,plugins:["TrackAnimation"]},{default:Ie(()=>[pe(b(Me)),pe(b(qe))]),_:1},8,["ak"]))}});export{We as default};
