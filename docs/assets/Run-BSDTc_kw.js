import{_ as ee,ae as ie,af as te,ag as X,e as y,p as Q,r as k,w as B,f as fe,g as o,h as _,i as a,j as s,ab as de,x as m,y as r,ah as f,z as q,v as E,S as pe,A as H,U as me,ai as ge,q as g,F as D,E as I,aj as ye,ak as he,al as _e,l as A,a1 as ce,Z as Ve,N as Se,am as be,a4 as xe,an as we,a2 as ke,G as N,a3 as Le,V as W,L as ae,ao as Ee,t as Ce,C as $e,D as Re,J as oe,B as Ue,a9 as Fe,u as Te,Y as ze,X as ue,ap as Ae,aq as De,ar as Pe,as as J,at as re}from"./index-CrfXhqQW.js";const Ie={class:"expansion"},Ne={key:0,class:"categorie-info"},Oe={key:0,class:"custom-hint"},qe=["onDblclick"],Be=["onUpdate:modelValue"],He={__name:"ParamForm",setup(M){const{$gettext:u}=ie(),V=te(),n=X();function R(e,t){return Array.isArray(e)?e.includes(t):e===t}const P=y(()=>V.selectedStepFunction),v=y(()=>V.parameters.filter(e=>Object.keys(e).includes("category")&&R(e.model,P.value))),L=y(()=>{var t;let e=V.parameters.filter(p=>p==null?void 0:p.info);return e=e.filter(p=>R(p.model,P.value)),(t=e[0])==null?void 0:t.info}),C=y(()=>n.scenariosList),S=y(()=>n.scenario);function x(){for(const e of v.value)for(const t of e.params)if(t.items==="$scenarios"){const p=C.value.map(b=>b.scenario);Array.isArray(t.value)?t.value=t.value.filter(b=>p.includes(b)):t.value=p.includes(t.value)?t.value:""}}Q(()=>{x()});function w(e){return e.items==="$scenarios"?C.value.map(t=>t.scenario).filter(t=>t!==S.value):e.items}function O(){V.getParameters()}const U=k([...Array(v.value.length).keys()].map((e,t)=>t));function F(){U.value.length<v.value.length?U.value=[...Array(v.value.length).keys()].map((e,t)=>t):U.value=[]}const T={required:e=>e!=null||u("Required"),largerThanZero:e=>e>0||u("should be larger than 0"),nonNegative:e=>e>=0||u("should be larger or equal to 0")},z=k(!1),h=k(!1),i=k({}),d=(e,t,p)=>{if(e){const b=String(t)+String(p);i.value[b]=e}};function $(e,t){h.value=!0;const p=String(e)+String(t);Ee(()=>i.value[p].focus())}B(z,e=>{e||(h.value=!1)});const j=k(null),G=k(!1),le=k(0),Y=k();Q(()=>{const e=j.value.clientHeight,t=window.innerHeight,p=e/t;Y.value=p<.25?e:.25*t});function ve(e){e.preventDefault(),G.value=!0,le.value=e.clientY-j.value.clientHeight,document.addEventListener("mousemove",ne),document.addEventListener("mouseup",se)}function ne(e){if(G.value){const t=e.clientY-le.value;Y.value=t}}function se(){G.value=!1,document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",se)}return(e,t)=>{const p=fe("v-number-input");return o(),_(ae,{class:"card"},{default:a(()=>[s(de,{class:"subtitle"},{default:a(()=>[m(r(f(u)("Scenario Settings")),1)]),_:1}),q(E("div",{ref_key:"resizableDiv",ref:j,class:"info-div",style:pe({height:Y.value+"px"})},r(L.value),5),[[H,L.value]]),q(E("div",{class:"drag-handle",onMousedown:ve},null,544),[[H,L.value]]),E("div",Ie,[s(me,{ref:"form","lazy-validation":""},{default:a(()=>[s(ge,{modelValue:U.value,"onUpdate:modelValue":t[1]||(t[1]=b=>U.value=b),multiple:""},{default:a(()=>[(o(!0),g(D,null,I(v.value,(b,K)=>(o(),_(ye,{key:K},{default:a(()=>[s(he,{class:"categorie"},{default:a(()=>[m(r(b.category),1)]),_:2},1024),s(_e,{style:{"background-color":"rgb(var(--v-theme-lightgrey))"}},{default:a(()=>[b.info?(o(),g("div",Ne,r(b.info),1)):A("",!0),(o(!0),g(D,null,I(b.params,(l,Z)=>(o(),g("li",{key:Z,class:"param-list"},[typeof l.items>"u"&&typeof l.value=="boolean"?(o(),_(ce,{key:0,modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,color:"primary",density:"compact",class:"pl-2","hide-details":"",label:f(u)(l.text),"persistent-hint":z.value},null,8,["modelValue","onUpdate:modelValue","label","persistent-hint"])):l.type=="Number"?(o(),_(p,{key:1,modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,variant:"outlined","control-variant":"stacked",type:l.type,label:f(u)(l.text),suffix:l.units,"hide-details":"",rules:l.rules.map(c=>T[c])},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","rules"])):typeof l.items>"u"?(o(),_(Ve,{key:2,modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,variant:"outlined","hide-details":"",type:l.type,label:f(u)(l.text),suffix:l.units,rules:l.rules.map(c=>T[c])},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","rules"])):(o(),_(Se,{key:3,modelValue:l.value,"onUpdate:modelValue":[c=>l.value=c,c=>x(l)],variant:"outlined","hide-details":"",type:l.type,multiple:l==null?void 0:l.multiple,items:w(l),label:f(u)(l.text),suffix:l.units,rules:l.rules.map(c=>T[c])},null,8,["modelValue","onUpdate:modelValue","type","multiple","items","label","suffix","rules"])),s(be,null,{default:a(()=>[z.value?(o(),g("div",Oe,[h.value?q((o(),g("textarea",{key:1,ref_for:!0,ref:c=>d(c,K,Z),"onUpdate:modelValue":c=>l.hint=c,rows:"1",class:"edition",onKeydown:t[0]||(t[0]=xe(c=>h.value=!1,["enter"]))},null,40,Be)),[[we,l.hint]]):(o(),g("div",{key:0,onDblclick:c=>$(K,Z)},r(l.hint),41,qe))])):A("",!0)]),_:2},1024)]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1},512)]),s(ke,null,{default:a(()=>[s(N,{color:"grey",variant:"text",onClick:O},{default:a(()=>[m(r(f(u)("back to default")),1)]),_:1}),s(Le),s(N,{variant:"text",onClick:F},{default:a(()=>[m(r(U.value.length!=v.value.length?f(u)("Expand all"):f(u)("Collapse all")),1)]),_:1}),s(N,{icon:"",size:"small",onClick:t[2]||(t[2]=b=>z.value=!z.value)},{default:a(()=>[s(W,null,{default:a(()=>t[3]||(t[3]=[m("far fa-question-circle small")])),_:1})]),_:1})]),_:1})]),_:1})}}},Me=ee(He,[["__scopeId","data-v-2c210e50"]]),je={style:{"white-space":"pre-line"}},Ge={__name:"Logs",props:{disabled:{type:Boolean,default:!1}},setup(M){const u=M,{disabled:V}=Ce(u),n=te(),R=k(!1),P=y(()=>n.hasLogs),v=k([]);async function L(){await n.getLogs(),v.value=n.logs,v.value.sort((S,x)=>String(S.time).localeCompare(String(x.time),void 0,{sensitivity:"base"})),R.value=!0}async function C(){await n.downloadLogs()}return(S,x)=>(o(),g(D,null,[s(Ue,{"close-delay":"100",transition:"slide-y-transition"},{activator:a(({props:w})=>[q(s(N,$e({disabled:f(V),class:"log-button",color:"regular",variant:"outlined","prepend-icon":"fas fa-file-lines","append-icon":"fas fa-caret-down"},w),{default:a(()=>x[1]||(x[1]=[m(" logs ")])),_:2},1040,["disabled"]),[[H,P.value]])]),default:a(()=>[s(Re,null,{default:a(()=>[s(oe,{onClick:L},{prepend:a(()=>[s(W,{icon:"fas fa-eye"})]),default:a(()=>[m(r(S.$gettext("show"))+" ",1)]),_:1}),s(oe,{onClick:C},{prepend:a(()=>[s(W,{icon:"fas fa-download"})]),default:a(()=>[m(r(S.$gettext("download"))+" ",1)]),_:1})]),_:1})]),_:1}),s(Fe,{modelValue:R.value,"onUpdate:modelValue":x[0]||(x[0]=w=>R.value=w),width:"90%"},{default:a(()=>[s(ae,{style:{"overflow-y":"auto"}},{default:a(()=>[(o(!0),g(D,null,I(v.value,(w,O)=>(o(),g("div",{key:O,class:"log-container"},[E("h1",null,r(w.name),1),E("h3",null,[E("b",null,r(w.time),1)]),E("span",je,r(w.text),1)]))),128))]),_:1})]),_:1},8,["modelValue"])],64))}},Ye=ee(Ge,[["__scopeId","data-v-c531ebb9"]]),Ke={class:"title-container"},Ze={class:"buttons-row ma-2"},Je={key:4},Xe={__name:"Run",setup(M){const{$gettext:u}=ie(),V=Te(),n=te(),R=X(),P=y(()=>n.steps),v=y(()=>{const h=n.availableModels;return n.avalaibleStepFunctions.filter(i=>h.has(i))}),L=k(n.selectedStepFunction),C=y(()=>n.running),S=y(()=>n.currentStep),x=y(()=>n.error),w=y(()=>n.errorMessage),O=y(()=>n.synchronized),U=y(()=>R.protected),F=y(()=>R.model!==null),T=k(n.endSignal);B(T,()=>n.changeEndSignal(T.value)),Q(async()=>{F.value&&(await n.getSteps(),await n.GetRunningExecution())}),B(v,h=>{F.value&&(h.includes(L.value)||(n.setSelectedStepFunction(h[0]),n.getSteps()))},{once:!0}),B(L,async h=>{F.value&&(v.value.includes(h)?(n.setSelectedStepFunction(h),n.getSteps()):(L.value=v.value[0],n.setSelectedStepFunction(v.value[0]),n.getSteps()))});async function z(){if(await n.GetRunningExecution()){V.changeNotification({text:u("could not start and save. This scenario was already launch by another user."),autoClose:!1,color:"warning"});return}try{const i=X();n.initExecution(),await V.exportToS3("inputs"),await V.deleteOutputsOnS3(),await V.deleteLogsOnS3(),V.deleteOutputs(),n.startExecution({scenario:i.scenario})}catch(i){n.terminateExecution(),console.log(i),V.changeAlert(i)}}return(h,i)=>(o(),_(ze,{class:"background"},{default:a(()=>[s(ue,{order:"1"},{default:a(()=>[s(Me)]),_:1}),s(ue,{order:"2"},{default:a(()=>[s(ae,{class:"card"},{default:a(()=>[E("div",Ke,[s(de,{class:"subtitle"},{default:a(()=>[m(r(f(u)("Scenario Simulation")),1)]),_:1}),s(Ye,{disabled:C.value||!F.value},null,8,["disabled"])]),s(Ae,{modelValue:S.value,"onUpdate:modelValue":i[4]||(i[4]=d=>S.value=d),class:"stepper"},{default:a(()=>[v.value.length>1?(o(),_(De,{key:0,modelValue:L.value,"onUpdate:modelValue":i[0]||(i[0]=d=>L.value=d),"show-arrows":"","bg-color":"lightgrey",color:"success","fixed-tabs":""},{default:a(()=>[(o(!0),g(D,null,I(v.value,d=>(o(),_(Pe,{key:d,value:d,disabled:C.value||!F.value},{default:a(()=>[m(r(d),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"])):A("",!0),O.value?A("",!0):(o(),_(J,{key:1,density:"compact",variant:"outlined",text:"",type:"warning"},{default:a(()=>[m(r(f(u)("Results are not synchronized with latest modifications.             Please relauch simulation to update results.")),1)]),_:1})),x.value?(o(),_(J,{key:2,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[m(r(f(u)("Simulation ended with an execution error or have been aborted.             Please relauch simulation. If the problem persist, contact us."))+" ",1),(o(!0),g(D,null,I(Object.keys(w.value),d=>(o(),g("p",{key:d},[E("b",null,r(d)+": ",1),m(r(w.value[d]),1)]))),128))]),_:1})):A("",!0),U.value?(o(),_(J,{key:3,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[m(r(f(u)("This scenario is protected. You can not run simulation.")),1)]),_:1})):A("",!0),E("div",Ze,[s(N,{loading:C.value,disabled:C.value||U.value||!F.value,color:"success","prepend-icon":"fa-solid fa-play",onClick:i[1]||(i[1]=d=>z())},{default:a(()=>[m(r(f(u)("Run Simulation")),1)]),_:1},8,["loading","disabled"]),q(s(N,{color:"grey",variant:"text",onClick:i[2]||(i[2]=d=>f(n).stopExecution())},{default:a(()=>[m(r(f(u)("Abort")),1)]),_:1},512),[[H,C.value&&S.value!==1]]),s(ce,{modelValue:T.value,"onUpdate:modelValue":i[3]||(i[3]=d=>T.value=d),class:"switch",density:"compact","false-icon":"fas fa-volume-xmark","true-icon":"fas fa-volume-high",inset:"",color:"success","hide-details":""},{prepend:a(()=>[E("span",null,r(f(u)("End signal")),1)]),_:1},8,["modelValue"])]),F.value?(o(),g("div",Je,[(o(!0),g(D,null,I(P.value,(d,$)=>(o(),g("div",{key:$+1},[x.value?(o(),_(re,{key:1,complete:S.value>$+1,title:d.name,value:$+1,step:$+1},null,8,["complete","title","value","step"])):(o(),_(re,{key:0,complete:S.value>$+1,color:S.value>=$+1?"primary":"regular",title:d.name,value:$+1,compact:"",step:$+1},null,8,["complete","color","title","value","step"]))]))),128))])):A("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},We=ee(Xe,[["__scopeId","data-v-bdf210d1"]]);export{We as default};