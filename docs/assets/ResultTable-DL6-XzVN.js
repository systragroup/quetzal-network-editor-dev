import{aD as F,aE as T,r as h,_ as W,a as x,as as O,o as C,d as k,e as b,t as N,A as I,F as D,B as L,g as w,aB as V,M as U,h as y,aF as j,aG as G,s as B,k as M,aH as $,aI as P,l as A,aJ as J}from"./index-B6nWekF8.js";function H(t){return F()?(T(t),!0):!1}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X=K?window:void 0;function Y(t){return u=>{const s=u.data[0];return Promise.resolve(t.apply(void 0,s)).then(o=>{postMessage(["SUCCESS",o])}).catch(o=>{postMessage(["ERROR",o])})}}function q(t){return t.length===0?"":`importScripts(${t.map(s=>`'${s}'`).toString()})`}function z(t,u){const s=`${q(u)}; onmessage=(${Y})(${t})`,o=new Blob([s],{type:"text/javascript"});return URL.createObjectURL(o)}function Q(t,u={}){const{dependencies:s=[],timeout:o,window:f=X}=u,l=h(),r=h("PENDING"),p=h({}),g=h(),m=(e="PENDING")=>{l.value&&l.value._url&&f&&(l.value.terminate(),URL.revokeObjectURL(l.value._url),p.value={},l.value=void 0,f.clearTimeout(g.value),r.value=e)};m(),H(m);const n=()=>{const e=z(t,s),a=new Worker(e);return a._url=e,a.onmessage=c=>{const{resolve:v=()=>{},reject:S=()=>{}}=p.value,[_,R]=c.data;switch(_){case"SUCCESS":v(R),m(_);break;default:S(R),m("ERROR");break}},a.onerror=c=>{const{reject:v=()=>{}}=p.value;c.preventDefault(),v(c),m("ERROR")},o&&(g.value=setTimeout(()=>m("TIMEOUT_EXPIRED"),o)),a},d=(...e)=>new Promise((a,c)=>{p.value={resolve:a,reject:c},l.value&&l.value.postMessage([[...e]]),r.value="RUNNING"});return{workerFn:(...e)=>r.value==="RUNNING"?(console.error("[useWebWorkerFn] You can only run one instance of the worker at a time."),Promise.reject()):(l.value=n(),d(...e)),workerStatus:r,workerTerminate:m}}const E=t=>t,{workerFn:Z}=Q(J),ee={name:"ResultTable",setup(){const t=x(),u=O(),s=h([]),o=h(""),f=h(0),l=h(10),r=40;async function p(){const n=u.scenario+"/",i=t.otherFiles.filter(e=>e.extension==="csv");f.value=i.length;for(const e of i)e.content instanceof Uint8Array||(e.content=await V.readBytes(u.model,n+e.path,r));return i}C(async()=>{t.changeLoading(!0);try{const n=await p();for(const d of n){const i=d.path.slice(0,-4),e=d.content!==null?await Z(d.content.buffer):[{too_large:`cannot display, more than ${r} mb`}],a=[];Object.keys(e[0]).forEach(c=>a.push({title:c,key:c,width:"1%"})),s.value.push({headers:a,items:e.slice(0,l.value),data:e,name:i,totalItems:e.length}),f.value-=1}t.changeLoading(!1),s.value.length===0&&(o.value=E("Nothing to display"))}catch(n){console.error(n),t.changeLoading(!1),f.value=0,o.value=E("Nothing to display")}});function g(n,d,i,e){const a=(d-1)*i,c=a+i;if(e.length>0){const v=e[0].key,S=e[0].order;n=A.orderBy(n,v,S)}return n.slice(a,c)}async function m({key:n,page:d,itemsPerPage:i,sortBy:e}){const a=U(s.value[n].data),c=g(a,d,i,U(e));s.value[n].items=c}return{tables:s,message:o,numItems:l,loadItems:m,skeletons:f}}},te={class:"layout"},oe={key:0},se={key:1,class:"card elevation-3"};function ne(t,u,s,o,f,l){return k(),b("section",te,[o.tables.length===0?(k(),b("p",oe,N(t.$gettext(o.message)),1)):I("",!0),(k(!0),b(D,null,L(o.tables,(r,p)=>(k(),b("div",{key:p,class:"card elevation-3"},[w($,{"items-per-page":o.numItems,headers:r.headers,height:r.items.length>=10?"36rem":"auto","items-length":r.totalItems,"fixed-header":"","fixed-footer":"",items:r.items,"onUpdate:options":g=>o.loadItems({key:p,...g})},{top:y(()=>[w(j,{class:"custom-title"},{default:y(()=>[w(G,null,{default:y(()=>[B(N(r.name),1)]),_:2},1024),w(M)]),_:2},1024)]),_:2},1032,["items-per-page","headers","height","items-length","items","onUpdate:options"])]))),128)),o.skeletons>0?(k(),b("div",se,[w(P,{type:"heading,table-thead, table-tbody "})])):I("",!0)])}const re=W(ee,[["render",ne],["__scopeId","data-v-0c259f78"]]);export{re as default};