import{cf as ae,cg as F,ch as ie,aI as ue,ci as ce,cj as fe,ck as _,cl as z,_ as de,ae as ve,b1 as he,a6 as ye,u as pe,r as M,e as G,o as me,p as ge,aE as be,g as x,q as T,j as h,i as m,ab as q,x as V,y as p,ah as b,L as $,aY as X,G as E,h as N,as as Pe,F as A,E as U,v as y,l as we,Z as xe,N as Ve,a$ as Le,Q as Ie,a2 as ke,a3 as Me,a4 as Z,a9 as Te}from"./index-CrfXhqQW.js";import{b as B,a as j,M as Fe}from"./Microservices-ByGVuTag.js";import{P as Ce}from"./index-Bdqm7_VE.js";function k(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var n=ae(t),l=F(e),a=l.type,s=e.bbox,i=l.coordinates;if(s&&Ge(n,s)===!1)return!1;a==="Polygon"&&(i=[i]);for(var u=!1,d=0;d<i.length&&!u;d++)if(H(n,i[d][0],r.ignoreBoundary)){for(var v=!1,L=1;L<i[d].length&&!v;)H(n,i[d][L],!r.ignoreBoundary)&&(v=!0),L++;v||(u=!0)}return u}function H(t,e,r){var n=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var l=0,a=e.length-1;l<e.length;a=l++){var s=e[l][0],i=e[l][1],u=e[a][0],d=e[a][1],v=t[1]*(s-u)+i*(u-t[0])+d*(t[0]-s)===0&&(s-t[0])*(u-t[0])<=0&&(i-t[1])*(d-t[1])<=0;if(v)return!r;var L=i>t[1]!=d>t[1]&&t[0]<(u-s)*(t[1]-i)/(d-i)+s;L&&(n=!n)}return n}function Ge(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function S(t,e,r){r===void 0&&(r={});for(var n=ae(t),l=ie(e),a=0;a<l.length-1;a++){var s=!1;if(r.ignoreEndVertices&&(a===0&&(s="start"),a===l.length-2&&(s="end"),a===0&&a+1===l.length-1&&(s="both")),Ee(l[a],l[a+1],n,s,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Ee(t,e,r,n,l){var a=r[0],s=r[1],i=t[0],u=t[1],d=e[0],v=e[1],L=r[0]-i,O=r[1]-u,g=d-i,P=v-u,C=L*P-O*g;if(l!==null){if(Math.abs(C)>l)return!1}else if(C!==0)return!1;if(n){if(n==="start")return Math.abs(g)>=Math.abs(P)?g>0?i<a&&a<=d:d<=a&&a<i:P>0?u<s&&s<=v:v<=s&&s<u;if(n==="end")return Math.abs(g)>=Math.abs(P)?g>0?i<=a&&a<d:d<a&&a<=i:P>0?u<=s&&s<v:v<s&&s<=u;if(n==="both")return Math.abs(g)>=Math.abs(P)?g>0?i<a&&a<d:d<a&&a<i:P>0?u<s&&s<v:v<s&&s<u}else return Math.abs(g)>=Math.abs(P)?g>0?i<=a&&a<=d:d<=a&&a<=i:P>0?u<=s&&s<=v:v<=s&&s<=u;return!1}function ee(t,e){var r=F(t),n=F(e),l=r.type,a=n.type,s=r.coordinates,i=n.coordinates;switch(l){case"Point":switch(a){case"Point":return K(s,i);default:throw new Error("feature2 "+a+" geometry not supported")}case"MultiPoint":switch(a){case"Point":return Se(r,n);case"MultiPoint":return _e(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"LineString":switch(a){case"Point":return S(n,r,{ignoreEndVertices:!0});case"LineString":return De(r,n);case"MultiPoint":return Be(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"Polygon":switch(a){case"Point":return k(n,r,{ignoreBoundary:!0});case"LineString":return qe(r,n);case"Polygon":return $e(r,n);case"MultiPoint":return Oe(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}default:throw new Error("feature1 "+l+" geometry not supported")}}function Se(t,e){var r,n=!1;for(r=0;r<t.coordinates.length;r++)if(K(t.coordinates[r],e.coordinates)){n=!0;break}return n}function _e(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){for(var l=n[r],a=!1,s=0,i=t.coordinates;s<i.length;s++){var u=i[s];if(K(l,u)){a=!0;break}}if(!a)return!1}return!0}function Be(t,e){for(var r=!1,n=0,l=e.coordinates;n<l.length;n++){var a=l[n];if(S(a,t,{ignoreEndVertices:!0})&&(r=!0),!S(a,t))return!1}return!!r}function Oe(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){var l=n[r];if(!k(l,t,{ignoreBoundary:!0}))return!1}return!0}function De(t,e){for(var r=!1,n=0,l=e.coordinates;n<l.length;n++){var a=l[n];if(S({type:"Point",coordinates:a},t,{ignoreEndVertices:!0})&&(r=!0),!S({type:"Point",coordinates:a},t,{ignoreEndVertices:!1}))return!1}return r}function qe(t,e){var r=!1,n=0,l=B(t),a=B(e);if(!ne(l,a))return!1;for(n;n<e.coordinates.length-1;n++){var s=Ne(e.coordinates[n],e.coordinates[n+1]);if(k({type:"Point",coordinates:s},t,{ignoreBoundary:!0})){r=!0;break}}return r}function $e(t,e){if(t.type==="Feature"&&t.geometry===null||e.type==="Feature"&&e.geometry===null)return!1;var r=B(t),n=B(e);if(!ne(r,n))return!1;for(var l=F(e).coordinates,a=0,s=l;a<s.length;a++)for(var i=s[a],u=0,d=i;u<d.length;u++){var v=d[u];if(!k(v,t))return!1}return!0}function ne(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function K(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ne(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}function W(t,e){e===void 0&&(e={});var r=F(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return Ae(r,e);case"MultiPolygon":return Ue(r,e);default:throw new Error("invalid poly")}}function Ae(t,e){e===void 0&&(e={});var r=F(t),n=r.coordinates,l=e.properties?e.properties:t.type==="Feature"?t.properties:{};return se(n,l)}function Ue(t,e){e===void 0&&(e={});var r=F(t),n=r.coordinates,l=e.properties?e.properties:t.type==="Feature"?t.properties:{},a=[];return n.forEach(function(s){a.push(se(s,l))}),ue(a)}function se(t,e){return t.length>1?ce(t,e):fe(t[0],e)}function We(t,e){var r=!0;return _(t,function(n){_(e,function(l){if(r===!1)return!1;r=ze(n.geometry,l.geometry)})}),r}function ze(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!Je(t.coordinates,e.coordinates);case"LineString":return!te(e,t);case"Polygon":return!k(t,e)}break;case"LineString":switch(e.type){case"Point":return!te(t,e);case"LineString":return!Ke(t,e);case"Polygon":return!re(e,t)}break;case"Polygon":switch(e.type){case"Point":return!k(e,t);case"LineString":return!re(t,e);case"Polygon":return!Re(e,t)}}return!1}function te(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Ye(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Ke(t,e){var r=z(t,e);return r.features.length>0}function re(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){var l=n[r];if(k(l,t))return!0}var a=z(e,W(t));return a.features.length>0}function Re(t,e){for(var r=0,n=t.coordinates[0];r<n.length;r++){var l=n[r];if(k(l,e))return!0}for(var a=0,s=e.coordinates[0];a<s.length;a++){var i=s[a];if(k(i,t))return!0}var u=z(W(t),W(e));return u.features.length>0}function Ye(t,e,r){var n=r[0]-t[0],l=r[1]-t[1],a=e[0]-t[0],s=e[1]-t[1],i=n*s-l*a;return i!==0?!1:Math.abs(a)>=Math.abs(s)?a>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:s>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Je(t,e){return t[0]===e[0]&&t[1]===e[1]}function Qe(t,e){var r=!1;return _(t,function(n){_(e,function(l){if(r===!0)return!0;r=!We(n.geometry,l.geometry)})}),r}const Xe={class:"background"},Ze={class:"params-row"},je={class:"list"},He={class:"list-row"},et={class:"list-item-small"},tt={class:"list-item-small"},rt={class:"list-item-small"},at={class:"list-item-small"},nt={class:"list-item-medium"},st={class:"list-item-medium"},ot={class:"list-item-large"},lt={__name:"GTFSWebImporter",setup(t){const{$gettext:e}=ve(),r=he(),n=ye(),l=pe(),a=M(!1),s=M(null),i=M([]),u=M([]),d=M(!1),v=M(r.selectedGTFS),L=G(()=>n.linksIsEmpty),O=G(()=>r.callID),g=G(()=>r.running),P=G(()=>r.error),C=G(()=>r.errorMessage);me(()=>{r.saveParams(D.value),r.saveSelectedGTFS(v.value)});const D=M([{name:"start_time",text:"start time",value:r.parameters.start_time,type:"time",units:"",hint:"Start Time to restrict the GTFS in a period",rules:["required"]},{name:"end_time",text:"end time",value:r.parameters.end_time,type:"time",units:"",hint:"End Time to restrict the GTFS in a period",rules:["required"]},{name:"day",text:"day",value:r.parameters.day,type:"String",items:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],units:"",hint:"restrict each GTFS to this day.",rules:["required"]}]),R={required:c=>!!c||e("Required")};ge(async()=>{i.value=await oe(),i.value.forEach((c,f)=>{try{c.bbox=j([c["location.bounding_box.minimum_longitude"],c["location.bounding_box.minimum_latitude"],c["location.bounding_box.maximum_longitude"],c["location.bounding_box.maximum_latitude"]])}catch{c.bbox=null}c.index=f}),i.value=i.value.filter(c=>c.bbox),i.value=i.value.filter(c=>c["urls.latest"].length>0),i.value.sort((c,f)=>c["location.country_code"]<f["location.country_code"]?-1:c["location.country_code"]>f["location.country_code"]?1:0)});async function oe(){try{const c=await fetch("https://storage.googleapis.com/storage/v1/b/mdb-csv/o/sources.csv?alt=media",{});c.ok||l.changeAlert({name:"Network error",message:"cannot fetch GTFS list"});const f=await c.arrayBuffer();return be(f)}catch(c){l.changeAlert(c)}}function le(c){s.value?s.value=c:(s.value=c,Y())}function Y(){let c=null;if(s.value.style==="bbox"){const o=s.value.geometry;c=j([o[1],o[0],o[3],o[2]])}else c=Ce([s.value.geometry]);u.value=i.value.filter(o=>ee(c,o.bbox)||Qe(c,o.bbox)),u.value.forEach(o=>o.allInPolygon=ee(c,o.bbox));const f=new Set(u.value.map(o=>o.index));v.value=v.value.filter(o=>f.has(o))}function J(){if(L.value){r.setCallID();const o={files:u.value.filter(w=>v.value.includes(w.index)).map(w=>w["urls.latest"]),callID:O.value};D.value.forEach(w=>{o[w.name]=w.value}),r.startExecution(o)}else a.value=!0}function Q(){l.initLinks(),a.value=!1,J()}return(c,f)=>(x(),T("div",Xe,[h($,{class:"card"},{default:m(()=>[h(q,{class:"subtitle"},{default:m(()=>[V(p(b(e)("GTFS importer")),1)]),_:1}),h(Fe,{onChange:le})]),_:1}),h($,{class:"card2"},{default:m(()=>[h(q,{class:"subtitle"},{default:m(()=>[V(p(b(e)("Available GTFS")),1)]),_:1}),h(X,null,{default:m(()=>[V(p(b(e)("Data fetch from")+" https://database.mobilitydata.org/"),1)]),_:1}),h(E,{disabled:g.value,"prepend-icon":"fa-solid fa-sync",onClick:Y},{default:m(()=>[V(p(b(e)("fetch available GTFS")),1)]),_:1},8,["disabled"]),h(E,{loading:g.value,disabled:g.value||v.value.length===0,color:g.value||v.value.length===0?"regular":"success","prepend-icon":"fa-solid fa-play",onClick:J},{default:m(()=>[V(p(b(e)("Download")),1)]),_:1},8,["loading","disabled","color"]),h(X,null,{default:m(()=>[P.value?(x(),N(Pe,{key:0,density:"compact",variant:"outlined",text:"",type:"error"},{default:m(()=>[V(p(b(e)("There as been an error while importing OSM network.             Please try again. If the problem persist, contact us."))+" ",1),(x(!0),T(A,null,U(Object.keys(C.value),o=>(x(),T("p",{key:o},[y("b",null,p(o)+": ",1),V(p(C.value[o]),1)]))),128))]),_:1})):we("",!0)]),_:1}),y("div",Ze,[(x(!0),T(A,null,U(D.value,(o,w)=>(x(),T("div",{key:w,class:"params"},[typeof o.items>"u"?(x(),N(xe,{key:0,modelValue:o.value,"onUpdate:modelValue":I=>o.value=I,step:"1",type:o.type,label:b(e)(o.text),suffix:o.units,variant:"underlined",hint:d.value?b(e)(o.hint):"","persistent-hint":d.value,rules:o.rules.map(I=>R[I]),required:"",onWheel:()=>{}},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","hint","persistent-hint","rules"])):(x(),N(Ve,{key:1,modelValue:o.value,"onUpdate:modelValue":I=>o.value=I,variant:"underlined",type:o.type,items:o.items,label:b(e)(o.text),suffix:o.units,hint:d.value?b(e)(o.hint):"","persistent-hint":d.value,rules:o.rules.map(I=>R[I]),required:"",onWheel:()=>{}},null,8,["modelValue","onUpdate:modelValue","type","items","label","suffix","hint","persistent-hint","rules"]))]))),128))]),y("div",je,[y("ul",He,[y("span",et,[h(Le,{disabled:!0})]),f[4]||(f[4]=y("span",{class:"list-item-small"},"All in polygon",-1)),f[5]||(f[5]=y("span",{class:"list-item-small"},"Code",-1)),f[6]||(f[6]=y("span",{class:"list-item-medium"},"Name",-1)),f[7]||(f[7]=y("span",{class:"list-item-medium"},"City",-1)),f[8]||(f[8]=y("span",{class:"list-item-large"},"Agency",-1)),f[9]||(f[9]=y("span",{class:"list-item-small"},".zip",-1))]),(x(!0),T(A,null,U(u.value,(o,w)=>(x(),T("ul",{key:o.index,class:"list-row"},[y("span",tt,[h(Ie,{modelValue:v.value,"onUpdate:modelValue":f[0]||(f[0]=I=>v.value=I),value:o.index,label:String(w)},null,8,["modelValue","value","label"])]),y("span",rt,p(o.allInPolygon),1),y("span",at,p(o["location.country_code"]),1),y("span",nt,p(o["location.subdivision_name"]),1),y("span",st,p(o["location.municipality"]),1),y("span",ot,p(o.provider),1),h(E,{variant:"text",icon:"fa-solid fa-download",size:"small",href:o["urls.latest"],style:{color:"white"}},null,8,["href"])]))),128))])]),_:1}),h(Te,{modelValue:a.value,"onUpdate:modelValue":f[2]||(f[2]=o=>a.value=o),persistent:"","max-width":"500",onKeydown:[Z(Q,["enter"]),f[3]||(f[3]=Z(o=>a.value=!1,["esc"]))]},{default:m(()=>[h($,null,{default:m(()=>[h(q,{class:"text-h5"},{default:m(()=>[V(p(b(e)("Overwrite current PT network ?")),1)]),_:1}),h(ke,null,{default:m(()=>[h(Me),h(E,{color:"regular",onClick:f[1]||(f[1]=o=>a.value=!a.value)},{default:m(()=>[V(p(b(e)("No")),1)]),_:1}),h(E,{color:"primary",onClick:Q},{default:m(()=>[V(p(b(e)("Yes")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},ft=de(lt,[["__scopeId","data-v-9c33a449"]]);export{ft as default};