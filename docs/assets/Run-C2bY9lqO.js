import{_ as D,i as K,aF as O,aG as N,e as g,r as I,o as X,j as o,J as m,v as a,q as l,a6 as Y,F as v,y as d,z as r,al as ae,K as $,m as L,a7 as te,aH as le,k as S,L as F,M as T,aI as ne,aJ as se,aK as oe,aE as Z,I as ue,H as G,aa as re,V as R,B as ie,X as z,T as q,ab as de,$ as Q,x as ce,a0 as W,C as pe,D as j,G as ve,ar as fe,u as ge,w as A,ap as ye,a9 as H,aL as me,a1 as he,a2 as Ve,aM as M,aN as J}from"./index-CmWXx-OH.js";const _e={class:"expansion"},xe={__name:"ParamForm",setup(B){const{$gettext:u}=K(),_=O(),t=N(),k=g(()=>_.selectedStepFunction),E=g(()=>_.parameters),f=g(()=>E.value.filter(c=>Object.keys(c).includes("category")&&c.model===k.value)),w=g(()=>{var c;return(c=E.value.filter(n=>((n==null?void 0:n.info)&&(n==null?void 0:n.model))===k.value)[0])==null?void 0:c.info}),y=I([]);X(()=>{y.value=[...Array(f.value.length).keys()].map((c,n)=>n)});const h=g(()=>t.scenariosList),C=g(()=>t.scenario);function x(){_.getParameters()}function P(){y.value.length<f.value.length?y.value=[...Array(f.value.length).keys()].map((c,n)=>n):y.value=[]}const V=I(!1),b={required:c=>c!=null||u("Required"),largerThanZero:c=>c>0||u("should be larger than 0"),nonNegative:c=>c>=0||u("should be larger or equal to 0")};function U(c){const n=h.value.map(s=>s.scenario);c.value=c.value.filter(s=>n.includes(s))}return(c,n)=>(o(),m(q,{class:"card"},{default:a(()=>[l(Y,{class:"subtitle"},{default:a(()=>[v(d(r(u)("Scenario Settings")),1)]),_:1}),w.value?(o(),m(ae,{key:0,class:"info-div"},{default:a(()=>[v(d(w.value),1)]),_:1})):$("",!0),L("div",_e,[l(te,{ref:"form","lazy-validation":""},{default:a(()=>[l(le,{modelValue:y.value,"onUpdate:modelValue":n[0]||(n[0]=s=>y.value=s),multiple:""},{default:a(()=>[(o(!0),S(F,null,T(f.value,(s,i)=>(o(),m(ne,{key:i},{default:a(()=>[l(se,{class:"categorie"},{default:a(()=>[v(d(s.category),1)]),_:2},1024),l(oe,{style:{"background-color":"rgb(var(--v-theme-lightgrey))"}},{default:a(()=>[(o(!0),S(F,null,T(s.params,(e,ee)=>(o(),S("li",{key:ee},[typeof e.items>"u"&&typeof e.value=="boolean"?(o(),m(Z,{key:0,modelValue:e.value,"onUpdate:modelValue":p=>e.value=p,color:"primary",label:r(u)(e.text),hint:V.value?r(u)(e.hint):"","persistent-hint":V.value},null,8,["modelValue","onUpdate:modelValue","label","hint","persistent-hint"])):typeof e.items>"u"?(o(),m(ue,{key:1,modelValue:e.value,"onUpdate:modelValue":p=>e.value=p,variant:"underlined",type:e.type,label:r(u)(e.text),suffix:e.units,hint:V.value?r(u)(e.hint):"","persistent-hint":V.value,rules:e.rules.map(p=>b[p])},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","hint","persistent-hint","rules"])):e.items==="$scenarios"?(o(),m(G,{key:2,modelValue:e.value,"onUpdate:modelValue":[p=>e.value=p,p=>U(e)],variant:"underlined",type:e.type,items:h.value.map(p=>p.scenario).filter(p=>p!==C.value),multiple:e==null?void 0:e.multiple,label:r(u)(e.text),suffix:e.units,hint:V.value?r(u)(e.hint):"","persistent-hint":V.value,rules:e.rules.map(p=>b[p])},null,8,["modelValue","onUpdate:modelValue","type","items","multiple","label","suffix","hint","persistent-hint","rules"])):(o(),m(G,{key:3,modelValue:e.value,"onUpdate:modelValue":p=>e.value=p,variant:"underlined",type:e.type,multiple:e==null?void 0:e.multiple,items:e.items,label:r(u)(e.text),suffix:e.units,hint:V.value?r(u)(e.hint):"","persistent-hint":V.value,rules:e.rules.map(p=>b[p])},null,8,["modelValue","onUpdate:modelValue","type","multiple","items","label","suffix","hint","persistent-hint","rules"]))]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1},512)]),l(re,null,{default:a(()=>[l(R,{color:"grey",variant:"text",onClick:x},{default:a(()=>[v(d(r(u)("back to default")),1)]),_:1}),l(ie),l(R,{variant:"text",onClick:P},{default:a(()=>[v(d(y.value.length!=f.value.length?r(u)("Expand all"):r(u)("Collapse all")),1)]),_:1}),l(R,{icon:"",size:"small",onClick:n[1]||(n[1]=s=>V.value=!V.value)},{default:a(()=>[l(z,null,{default:a(()=>[v("far fa-question-circle small")]),_:1})]),_:1})]),_:1})]),_:1}))}},Se=D(xe,[["__scopeId","data-v-d837b5b3"]]),be={style:{"white-space":"pre-line"}},we={__name:"Logs",props:{disabled:{type:Boolean,default:!1}},setup(B){const u=B,{disabled:_}=de(u),t=O(),k=I(!1),E=g(()=>t.hasLogs),f=I([]);async function w(){await t.getLogs(),f.value=t.logs,f.value.sort((h,C)=>String(h.time).localeCompare(String(C.time),void 0,{sensitivity:"base"})),k.value=!0}async function y(){await t.downloadLogs()}return(h,C)=>(o(),S(F,null,[l(ve,{"close-delay":"100",transition:"slide-y-transition"},{activator:a(({props:x})=>[Q(l(R,ce({disabled:r(_),class:"log-button",color:"regular",variant:"outlined","prepend-icon":"fas fa-file-lines","append-icon":"fas fa-caret-down"},x),{default:a(()=>[v(" logs ")]),_:2},1040,["disabled"]),[[W,E.value]])]),default:a(()=>[l(pe,null,{default:a(()=>[l(j,{onClick:w},{prepend:a(()=>[l(z,{icon:"fas fa-eye"})]),default:a(()=>[v(d(h.$gettext("show"))+" ",1)]),_:1}),l(j,{onClick:y},{prepend:a(()=>[l(z,{icon:"fas fa-download"})]),default:a(()=>[v(d(h.$gettext("download"))+" ",1)]),_:1})]),_:1})]),_:1}),l(fe,{modelValue:k.value,"onUpdate:modelValue":C[0]||(C[0]=x=>k.value=x),width:"90%"},{default:a(()=>[l(q,{style:{"overflow-y":"auto"}},{default:a(()=>[(o(!0),S(F,null,T(f.value,(x,P)=>(o(),S("div",{key:P,class:"log-container"},[L("h1",null,d(x.name),1),L("h3",null,[L("b",null,d(x.time),1)]),L("span",be,d(x.text),1)]))),128))]),_:1})]),_:1},8,["modelValue"])],64))}},ke=D(we,[["__scopeId","data-v-c531ebb9"]]),Ce={class:"title-container"},Le={class:"buttons-row ma-2"},Fe={key:4},Ee={__name:"Run",setup(B){const{$gettext:u}=K(),_=ge(),t=O(),k=N(),E=g(()=>t.steps),f=g(()=>{const n=t.availableModels;return t.avalaibleStepFunctions.filter(s=>n.has(s))}),w=I(t.selectedStepFunction),y=g(()=>t.running),h=g(()=>t.currentStep),C=g(()=>t.error),x=g(()=>t.errorMessage),P=g(()=>t.synchronized),V=g(()=>k.protected),b=g(()=>k.model!==null),U=I(t.endSignal);A(U,()=>t.changeEndSignal(U.value)),X(async()=>{b.value&&(await t.getSteps(),await t.GetRunningExecution())}),A(f,n=>{b.value&&(n.includes(w.value)||(t.setSelectedStepFunction(n[0]),t.getSteps()))}),A(w,async n=>{b.value&&(f.value.includes(n)?(t.setSelectedStepFunction(n),t.getSteps()):(w.value=f.value[0],t.setSelectedStepFunction(f.value[0]),t.getSteps()))});async function c(){if(await t.GetRunningExecution()){_.changeNotification({text:u("could not start and save. This scenario was already launch by another user."),autoClose:!1,color:"warning"});return}try{const s=N();t.initExecution(),await _.exportToS3("inputs"),await _.deleteOutputsOnS3(),await _.deleteLogsOnS3(),_.deleteOutputs(),t.startExecution({scenario:s.scenario})}catch(s){t.terminateExecution(),console.log(s),_.changeAlert(s)}}return(n,s)=>(o(),m(ye,{class:"background"},{default:a(()=>[l(H,{order:"1"},{default:a(()=>[l(Se)]),_:1}),l(H,{order:"2"},{default:a(()=>[l(q,{class:"card"},{default:a(()=>[L("div",Ce,[l(Y,{class:"subtitle"},{default:a(()=>[v(d(r(u)("Scenario Simulation")),1)]),_:1}),l(ke,{disabled:y.value||!b.value},null,8,["disabled"])]),l(me,{modelValue:h.value,"onUpdate:modelValue":s[4]||(s[4]=i=>h.value=i),class:"stepper"},{default:a(()=>[f.value.length>1?(o(),m(he,{key:0,modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=i=>w.value=i),"show-arrows":"","bg-color":"lightgrey",color:"success","fixed-tabs":""},{default:a(()=>[(o(!0),S(F,null,T(f.value,i=>(o(),m(Ve,{key:i,value:i,disabled:y.value||!b.value},{default:a(()=>[v(d(i),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"])):$("",!0),P.value?$("",!0):(o(),m(M,{key:1,density:"compact",variant:"outlined",text:"",type:"warning"},{default:a(()=>[v(d(r(u)("Results are not synchronized with latest modifications.             Please relauch simulation to update results.")),1)]),_:1})),C.value?(o(),m(M,{key:2,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[v(d(r(u)("Simulation ended with an execution error or have been aborted.             Please relauch simulation. If the problem persist, contact us."))+" ",1),(o(!0),S(F,null,T(Object.keys(x.value),i=>(o(),S("p",{key:i},[L("b",null,d(i)+": ",1),v(d(x.value[i]),1)]))),128))]),_:1})):$("",!0),V.value?(o(),m(M,{key:3,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[v(d(r(u)("This scenario is protected. You can not run simulation.")),1)]),_:1})):$("",!0),L("div",Le,[l(R,{loading:y.value,disabled:y.value||V.value||!b.value,color:"success","prepend-icon":"fa-solid fa-play",onClick:s[1]||(s[1]=i=>c())},{default:a(()=>[v(d(r(u)("Run Simulation")),1)]),_:1},8,["loading","disabled"]),Q(l(R,{color:"grey",variant:"text",onClick:s[2]||(s[2]=i=>r(t).stopExecution())},{default:a(()=>[v(d(r(u)("Abort")),1)]),_:1},512),[[W,y.value&&h.value!==1]]),l(Z,{modelValue:U.value,"onUpdate:modelValue":s[3]||(s[3]=i=>U.value=i),class:"switch",density:"compact","false-icon":"fas fa-volume-xmark","true-icon":"fas fa-volume-high",inset:"",color:"success","hide-details":""},{prepend:a(()=>[L("span",null,d(r(u)("End signal")),1)]),_:1},8,["modelValue"])]),b.value?(o(),S("div",Fe,[(o(!0),S(F,null,T(E.value,(i,e)=>(o(),S("div",{key:e+1},[C.value?(o(),m(J,{key:1,complete:h.value>e+1,title:i.name,value:e+1,step:e+1},null,8,["complete","title","value","step"])):(o(),m(J,{key:0,complete:h.value>e+1,color:h.value>=e+1?"primary":"regular",title:i.name,value:e+1,compact:"",step:e+1},null,8,["complete","color","title","value","step"]))]))),128))])):$("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},$e=D(Ee,[["__scopeId","data-v-5907df68"]]);export{$e as default};