import{cp as ne,g as k,cq as ue,b3 as ce,cr as fe,cs as de,ct as E,cu as K,_ as ve,i as he,bi as ye,h as pe,u as me,r as M,e as S,ag as ge,o as be,b0 as Pe,j as _,k as T,q as v,v as m,a6 as $,F as x,y as p,z as b,T as A,bf as H,V as G,J as N,aR as we,L as U,M as W,m as y,K as _e,I as xe,H as Ve,Q as Ie,W as Le,aa as Me,B as Te,a5 as Z,ar as ke,aC as Ce,aD as Fe}from"./index-BMgGdpXO.js";import{b as O,a as j,M as Se}from"./Microservices-BfU96Uoy.js";import{P as Ge}from"./index-uvWZjMzz.js";import"./main-cF154QFo.js";function L(t,e,r){if(r===void 0&&(r={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var n=ne(t),l=k(e),a=l.type,s=e.bbox,i=l.coordinates;if(s&&Be(n,s)===!1)return!1;a==="Polygon"&&(i=[i]);for(var u=!1,f=0;f<i.length&&!u;f++)if(ee(n,i[f][0],r.ignoreBoundary)){for(var d=!1,V=1;V<i[f].length&&!d;)ee(n,i[f][V],!r.ignoreBoundary)&&(d=!0),V++;d||(u=!0)}return u}function ee(t,e,r){var n=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var l=0,a=e.length-1;l<e.length;a=l++){var s=e[l][0],i=e[l][1],u=e[a][0],f=e[a][1],d=t[1]*(s-u)+i*(u-t[0])+f*(t[0]-s)===0&&(s-t[0])*(u-t[0])<=0&&(i-t[1])*(f-t[1])<=0;if(d)return!r;var V=i>t[1]!=f>t[1]&&t[0]<(u-s)*(t[1]-i)/(f-i)+s;V&&(n=!n)}return n}function Be(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}function B(t,e,r){r===void 0&&(r={});for(var n=ne(t),l=ue(e),a=0;a<l.length-1;a++){var s=!1;if(r.ignoreEndVertices&&(a===0&&(s="start"),a===l.length-2&&(s="end"),a===0&&a+1===l.length-1&&(s="both")),Ee(l[a],l[a+1],n,s,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Ee(t,e,r,n,l){var a=r[0],s=r[1],i=t[0],u=t[1],f=e[0],d=e[1],V=r[0]-i,D=r[1]-u,g=f-i,P=d-u,F=V*P-D*g;if(l!==null){if(Math.abs(F)>l)return!1}else if(F!==0)return!1;if(n){if(n==="start")return Math.abs(g)>=Math.abs(P)?g>0?i<a&&a<=f:f<=a&&a<i:P>0?u<s&&s<=d:d<=s&&s<u;if(n==="end")return Math.abs(g)>=Math.abs(P)?g>0?i<=a&&a<f:f<a&&a<=i:P>0?u<=s&&s<d:d<s&&s<=u;if(n==="both")return Math.abs(g)>=Math.abs(P)?g>0?i<a&&a<f:f<a&&a<i:P>0?u<s&&s<d:d<s&&s<u}else return Math.abs(g)>=Math.abs(P)?g>0?i<=a&&a<=f:f<=a&&a<=i:P>0?u<=s&&s<=d:d<=s&&s<=u;return!1}function te(t,e){var r=k(t),n=k(e),l=r.type,a=n.type,s=r.coordinates,i=n.coordinates;switch(l){case"Point":switch(a){case"Point":return R(s,i);default:throw new Error("feature2 "+a+" geometry not supported")}case"MultiPoint":switch(a){case"Point":return Oe(r,n);case"MultiPoint":return De(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"LineString":switch(a){case"Point":return B(n,r,{ignoreEndVertices:!0});case"LineString":return Ae(r,n);case"MultiPoint":return qe(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}case"Polygon":switch(a){case"Point":return L(n,r,{ignoreBoundary:!0});case"LineString":return Ne(r,n);case"Polygon":return Ue(r,n);case"MultiPoint":return $e(r,n);default:throw new Error("feature2 "+a+" geometry not supported")}default:throw new Error("feature1 "+l+" geometry not supported")}}function Oe(t,e){var r,n=!1;for(r=0;r<t.coordinates.length;r++)if(R(t.coordinates[r],e.coordinates)){n=!0;break}return n}function De(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){for(var l=n[r],a=!1,s=0,i=t.coordinates;s<i.length;s++){var u=i[s];if(R(l,u)){a=!0;break}}if(!a)return!1}return!0}function qe(t,e){for(var r=!1,n=0,l=e.coordinates;n<l.length;n++){var a=l[n];if(B(a,t,{ignoreEndVertices:!0})&&(r=!0),!B(a,t))return!1}return!!r}function $e(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){var l=n[r];if(!L(l,t,{ignoreBoundary:!0}))return!1}return!0}function Ae(t,e){for(var r=!1,n=0,l=e.coordinates;n<l.length;n++){var a=l[n];if(B({type:"Point",coordinates:a},t,{ignoreEndVertices:!0})&&(r=!0),!B({type:"Point",coordinates:a},t,{ignoreEndVertices:!1}))return!1}return r}function Ne(t,e){var r=!1,n=0,l=O(t),a=O(e);if(!se(l,a))return!1;for(n;n<e.coordinates.length-1;n++){var s=We(e.coordinates[n],e.coordinates[n+1]);if(L({type:"Point",coordinates:s},t,{ignoreBoundary:!0})){r=!0;break}}return r}function Ue(t,e){if(t.type==="Feature"&&t.geometry===null||e.type==="Feature"&&e.geometry===null)return!1;var r=O(t),n=O(e);if(!se(r,n))return!1;for(var l=k(e).coordinates,a=0,s=l;a<s.length;a++)for(var i=s[a],u=0,f=i;u<f.length;u++){var d=f[u];if(!L(d,t))return!1}return!0}function se(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function R(t,e){return t[0]===e[0]&&t[1]===e[1]}function We(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}function z(t,e){e===void 0&&(e={});var r=k(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return ze(r,e);case"MultiPolygon":return Ke(r,e);default:throw new Error("invalid poly")}}function ze(t,e){e===void 0&&(e={});var r=k(t),n=r.coordinates,l=e.properties?e.properties:t.type==="Feature"?t.properties:{};return oe(n,l)}function Ke(t,e){e===void 0&&(e={});var r=k(t),n=r.coordinates,l=e.properties?e.properties:t.type==="Feature"?t.properties:{},a=[];return n.forEach(function(s){a.push(oe(s,l))}),ce(a)}function oe(t,e){return t.length>1?fe(t,e):de(t[0],e)}function Re(t,e){var r=!0;return E(t,function(n){E(e,function(l){if(r===!1)return!1;r=Je(n.geometry,l.geometry)})}),r}function Je(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return!He(t.coordinates,e.coordinates);case"LineString":return!re(e,t);case"Polygon":return!L(t,e)}break;case"LineString":switch(e.type){case"Point":return!re(t,e);case"LineString":return!Qe(t,e);case"Polygon":return!ae(e,t)}break;case"Polygon":switch(e.type){case"Point":return!L(e,t);case"LineString":return!ae(t,e);case"Polygon":return!Xe(e,t)}}return!1}function re(t,e){for(var r=0;r<t.coordinates.length-1;r++)if(Ye(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Qe(t,e){var r=K(t,e);return r.features.length>0}function ae(t,e){for(var r=0,n=e.coordinates;r<n.length;r++){var l=n[r];if(L(l,t))return!0}var a=K(e,z(t));return a.features.length>0}function Xe(t,e){for(var r=0,n=t.coordinates[0];r<n.length;r++){var l=n[r];if(L(l,e))return!0}for(var a=0,s=e.coordinates[0];a<s.length;a++){var i=s[a];if(L(i,t))return!0}var u=K(z(t),z(e));return u.features.length>0}function Ye(t,e,r){var n=r[0]-t[0],l=r[1]-t[1],a=e[0]-t[0],s=e[1]-t[1],i=n*s-l*a;return i!==0?!1:Math.abs(a)>=Math.abs(s)?a>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:s>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function He(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ze(t,e){var r=!1;return E(t,function(n){E(e,function(l){if(r===!0)return!0;r=!Re(n.geometry,l.geometry)})}),r}const C=t=>(Ce("data-v-9c33a449"),t=t(),Fe(),t),je={class:"background"},et={class:"params-row"},tt={class:"list"},rt={class:"list-row"},at={class:"list-item-small"},nt=C(()=>y("span",{class:"list-item-small"},"All in polygon",-1)),st=C(()=>y("span",{class:"list-item-small"},"Code",-1)),ot=C(()=>y("span",{class:"list-item-medium"},"Name",-1)),lt=C(()=>y("span",{class:"list-item-medium"},"City",-1)),it=C(()=>y("span",{class:"list-item-large"},"Agency",-1)),ut=C(()=>y("span",{class:"list-item-small"},".zip",-1)),ct={class:"list-item-small"},ft={class:"list-item-small"},dt={class:"list-item-small"},vt={class:"list-item-medium"},ht={class:"list-item-medium"},yt={class:"list-item-large"},pt={__name:"GTFSWebImporter",setup(t){const{$gettext:e}=he(),r=ye(),n=pe(),l=me(),a=M(!1),s=M(null),i=M([]),u=M([]),f=M(!1),d=M(r.selectedGTFS),V=S(()=>n.linksIsEmpty),D=S(()=>r.callID),g=S(()=>r.running),P=S(()=>r.error),F=S(()=>r.errorMessage);ge(()=>{r.saveParams(q.value),r.saveSelectedGTFS(d.value)});const q=M([{name:"start_time",text:"start time",value:r.parameters.start_time,type:"time",units:"",hint:"Start Time to restrict the GTFS in a period",rules:["required"]},{name:"end_time",text:"end time",value:r.parameters.end_time,type:"time",units:"",hint:"End Time to restrict the GTFS in a period",rules:["required"]},{name:"day",text:"day",value:r.parameters.day,type:"String",items:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],units:"",hint:"restrict each GTFS to this day.",rules:["required"]}]),J={required:c=>!!c||e("Required")};be(async()=>{i.value=await le(),i.value.forEach((c,h)=>{try{c.bbox=j([c["location.bounding_box.minimum_longitude"],c["location.bounding_box.minimum_latitude"],c["location.bounding_box.maximum_longitude"],c["location.bounding_box.maximum_latitude"]])}catch{c.bbox=null}c.index=h}),i.value=i.value.filter(c=>c.bbox),i.value=i.value.filter(c=>c["urls.latest"].length>0),i.value.sort((c,h)=>c["location.country_code"]<h["location.country_code"]?-1:c["location.country_code"]>h["location.country_code"]?1:0)});async function le(){try{const c=await fetch("https://storage.googleapis.com/storage/v1/b/mdb-csv/o/sources.csv?alt=media",{});c.ok||l.changeAlert({name:"Network error",message:"cannot fetch GTFS list"});const h=await c.arrayBuffer();return Pe(h)}catch(c){l.changeAlert(c)}}function ie(c){s.value?s.value=c:(s.value=c,Q())}function Q(){let c=null;if(s.value.style==="bbox"){const o=s.value.geometry;c=j([o[1],o[0],o[3],o[2]])}else c=Ge([s.value.geometry]);u.value=i.value.filter(o=>te(c,o.bbox)||Ze(c,o.bbox)),u.value.forEach(o=>o.allInPolygon=te(c,o.bbox));const h=new Set(u.value.map(o=>o.index));d.value=d.value.filter(o=>h.has(o))}function X(){if(V.value){r.setCallID();const o={files:u.value.filter(w=>d.value.includes(w.index)).map(w=>w["urls.latest"]),callID:D.value};q.value.forEach(w=>{o[w.name]=w.value}),r.startExecution(o)}else a.value=!0}function Y(){l.initLinks(),a.value=!1,X()}return(c,h)=>(_(),T("div",je,[v(A,{class:"card"},{default:m(()=>[v($,{class:"subtitle"},{default:m(()=>[x(p(b(e)("GTFS importer")),1)]),_:1}),v(Se,{onChange:ie})]),_:1}),v(A,{class:"card2"},{default:m(()=>[v($,{class:"subtitle"},{default:m(()=>[x(p(b(e)("Available GTFS")),1)]),_:1}),v(H,null,{default:m(()=>[x(p(b(e)("Data fetch from")+" https://database.mobilitydata.org/"),1)]),_:1}),v(G,{disabled:g.value,"prepend-icon":"fa-solid fa-sync",onClick:Q},{default:m(()=>[x(p(b(e)("fetch available GTFS")),1)]),_:1},8,["disabled"]),v(G,{loading:g.value,disabled:g.value||d.value.length===0,color:g.value||d.value.length===0?"regular":"success","prepend-icon":"fa-solid fa-play",onClick:X},{default:m(()=>[x(p(b(e)("Download")),1)]),_:1},8,["loading","disabled","color"]),v(H,null,{default:m(()=>[P.value?(_(),N(we,{key:0,density:"compact",variant:"outlined",text:"",type:"error"},{default:m(()=>[x(p(b(e)("There as been an error while importing OSM network.             Please try again. If the problem persist, contact us."))+" ",1),(_(!0),T(U,null,W(Object.keys(F.value),o=>(_(),T("p",{key:o},[y("b",null,p(o)+": ",1),x(p(F.value[o]),1)]))),128))]),_:1})):_e("",!0)]),_:1}),y("div",et,[(_(!0),T(U,null,W(q.value,(o,w)=>(_(),T("div",{key:w,class:"params"},[typeof o.items>"u"?(_(),N(xe,{key:0,modelValue:o.value,"onUpdate:modelValue":I=>o.value=I,step:"1",type:o.type,label:b(e)(o.text),suffix:o.units,variant:"underlined",hint:f.value?b(e)(o.hint):"","persistent-hint":f.value,rules:o.rules.map(I=>J[I]),required:"",onWheel:()=>{}},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","hint","persistent-hint","rules"])):(_(),N(Ve,{key:1,modelValue:o.value,"onUpdate:modelValue":I=>o.value=I,variant:"underlined",type:o.type,items:o.items,label:b(e)(o.text),suffix:o.units,hint:f.value?b(e)(o.hint):"","persistent-hint":f.value,rules:o.rules.map(I=>J[I]),required:"",onWheel:()=>{}},null,8,["modelValue","onUpdate:modelValue","type","items","label","suffix","hint","persistent-hint","rules"]))]))),128))]),y("div",tt,[y("ul",rt,[y("span",at,[v(Ie,{disabled:!0})]),nt,st,ot,lt,it,ut]),(_(!0),T(U,null,W(u.value,(o,w)=>(_(),T("ul",{key:o.index,class:"list-row"},[y("span",ct,[v(Le,{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=I=>d.value=I),value:o.index,label:String(w)},null,8,["modelValue","value","label"])]),y("span",ft,p(o.allInPolygon),1),y("span",dt,p(o["location.country_code"]),1),y("span",vt,p(o["location.subdivision_name"]),1),y("span",ht,p(o["location.municipality"]),1),y("span",yt,p(o.provider),1),v(G,{variant:"text",icon:"fa-solid fa-download",size:"small",href:o["urls.latest"],style:{color:"white"}},null,8,["href"])]))),128))])]),_:1}),v(ke,{modelValue:a.value,"onUpdate:modelValue":h[2]||(h[2]=o=>a.value=o),persistent:"","max-width":"500",onKeydown:[Z(Y,["enter"]),h[3]||(h[3]=Z(o=>a.value=!1,["esc"]))]},{default:m(()=>[v(A,null,{default:m(()=>[v($,{class:"text-h5"},{default:m(()=>[x(p(b(e)("Overwrite current PT network ?")),1)]),_:1}),v(Me,null,{default:m(()=>[v(Te),v(G,{color:"regular",onClick:h[1]||(h[1]=o=>a.value=!a.value)},{default:m(()=>[x(p(b(e)("No")),1)]),_:1}),v(G,{color:"primary",onClick:Y},{default:m(()=>[x(p(b(e)("Yes")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},wt=ve(pt,[["__scopeId","data-v-9c33a449"]]);export{wt as default};