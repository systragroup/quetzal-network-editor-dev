import{_ as q,ae as M,af as B,e as p,r as C,p as O,g as n,h as g,i as a,j as u,ab as D,x as f,y as v,ad as X,l as _,v as P,U as J,ag as K,q as x,F,E as U,ah as Q,ai as W,aj as ee,a1 as Y,Z as te,N as L,a2 as ae,G as E,a3 as le,V as Z,L as G,u as ne,w as N,Y as se,X as $,ak as oe,al as re,am as ue,an as I,z as ie,A as de,ao as ce,ap as j}from"./index-DVm0in2n.js";const R=i=>i,pe={name:"Settings",setup(){const i=M(),m=B(),l=p(()=>i.selectedStepFunction),t=p(()=>i.parameters),V=p(()=>t.value.filter(o=>Object.keys(o).includes("category")&&o.model===l.value)),H=p(()=>{var o;return(o=t.value.filter(h=>((h==null?void 0:h.info)&&(h==null?void 0:h.model))===l.value)[0])==null?void 0:o.info}),c=C([]);O(()=>{c.value=[...Array(V.value.length).keys()].map((o,h)=>h)});const w=p(()=>m.scenariosList),e=p(()=>m.scenario);function S(){i.getParameters({model:m.model,path:m.scenario+"/inputs/params.json"})}function s(){c.value.length<V.value.length?c.value=[...Array(V.value.length).keys()].map((o,h)=>h):c.value=[]}const T=C(null),z=C(!1),A={required:o=>o!=null||R("Required"),largerThanZero:o=>o>0||R("should be larger than 0"),nonNegative:o=>o>=0||R("should be larger or equal to 0")};function k(o){const h=w.value.map(r=>r.scenario);o.value=o.value.filter(r=>h.includes(r))}return{selectedStepFunction:l,paramsBrute:t,errorMessage:T,showHint:z,panel:c,parameters:V,info:H,rules:A,scenariosList:w,activeScenario:e,reset:S,expandAll:s,removeDeletedScenarios:k}}},ve={class:"expansion"};function fe(i,m,l,t,V,H){return n(),g(G,{class:"card"},{default:a(()=>[u(D,{class:"subtitle"},{default:a(()=>[f(v(i.$gettext("Scenario Settings")),1)]),_:1}),t.info?(n(),g(X,{key:0,class:"info-div"},{default:a(()=>[f(v(t.info),1)]),_:1})):_("",!0),P("div",ve,[u(J,{ref:"form","lazy-validation":""},{default:a(()=>[u(K,{modelValue:t.panel,"onUpdate:modelValue":m[0]||(m[0]=c=>t.panel=c),multiple:""},{default:a(()=>[(n(!0),x(F,null,U(t.parameters,(c,w)=>(n(),g(Q,{key:w},{default:a(()=>[u(W,{class:"categorie"},{default:a(()=>[f(v(c.category),1)]),_:2},1024),u(ee,{style:{"background-color":"rgb(var(--v-theme-lightgrey))"}},{default:a(()=>[(n(!0),x(F,null,U(c.params,(e,S)=>(n(),x("li",{key:S},[typeof e.items>"u"&&typeof e.value=="boolean"?(n(),g(Y,{key:0,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,color:"primary",label:i.$gettext(e.text),hint:t.showHint?i.$gettext(e.hint):"","persistent-hint":t.showHint},null,8,["modelValue","onUpdate:modelValue","label","hint","persistent-hint"])):typeof e.items>"u"?(n(),g(te,{key:1,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,variant:"underlined",type:e.type,label:i.$gettext(e.text),suffix:e.units,hint:t.showHint?i.$gettext(e.hint):"","persistent-hint":t.showHint,rules:e.rules.map(s=>t.rules[s])},null,8,["modelValue","onUpdate:modelValue","type","label","suffix","hint","persistent-hint","rules"])):e.items==="$scenarios"?(n(),g(L,{key:2,modelValue:e.value,"onUpdate:modelValue":[s=>e.value=s,s=>t.removeDeletedScenarios(e)],variant:"underlined",type:e.type,items:t.scenariosList.map(s=>s.scenario).filter(s=>s!==t.activeScenario),multiple:"",label:i.$gettext(e.text),suffix:e.units,hint:t.showHint?i.$gettext(e.hint):"","persistent-hint":t.showHint,rules:e.rules.map(s=>t.rules[s])},null,8,["modelValue","onUpdate:modelValue","type","items","label","suffix","hint","persistent-hint","rules"])):(n(),g(L,{key:3,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,variant:"underlined",type:e.type,items:e.items,label:i.$gettext(e.text),suffix:e.units,hint:t.showHint?i.$gettext(e.hint):"","persistent-hint":t.showHint,rules:e.rules.map(s=>t.rules[s])},null,8,["modelValue","onUpdate:modelValue","type","items","label","suffix","hint","persistent-hint","rules"]))]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1},512)]),u(ae,null,{default:a(()=>[u(E,{color:"grey",variant:"text",onClick:t.reset},{default:a(()=>[f(v(i.$gettext("back to default")),1)]),_:1},8,["onClick"]),u(le),u(E,{variant:"text",onClick:t.expandAll},{default:a(()=>[f(v(t.panel.length!=t.parameters.length?i.$gettext("Expand all"):i.$gettext("Collapse all")),1)]),_:1},8,["onClick"]),u(E,{icon:"",size:"small",onClick:m[1]||(m[1]=c=>t.showHint=!t.showHint)},{default:a(()=>[u(Z,null,{default:a(()=>[f("far fa-question-circle small")]),_:1})]),_:1})]),_:1})]),_:1})}const ge=q(pe,[["render",fe],["__scopeId","data-v-eedd7c8b"]]),me={class:"buttons-row ma-2"},he={key:4},ye={__name:"Run",setup(i){const m=ne(),l=M(),t=B(),V=C(""),H=p(()=>l.steps),c=p(()=>{const r=l.availableModels;return l.avalaibleStepFunctions.filter(y=>r.has(y))}),w=p(()=>l.selectedStepFunction),e=p(()=>l.running),S=p(()=>l.currentStep),s=p(()=>l.error),T=p(()=>l.errorMessage),z=p(()=>l.synchronized),A=p(()=>t.protected),k=p(()=>t.model!==null),o=C(l.endSignal);N(o,()=>l.changeEndSignal(o.value)),O(async()=>{k.value&&(await l.getSteps(),V.value=w.value)}),N(V,async r=>{k.value&&(c.value.includes(r)?(l.setSelectedStepFunction(r),l.getSteps()):(V.value=c.value[0],l.setSelectedStepFunction(c.value[0]),l.getSteps()))});async function h(){try{const r=B();l.initExecution(),await m.exportToS3("inputs"),await m.deleteOutputsOnS3(),m.deleteOutputs(),l.startExecution({scenario:r.scenario})}catch(r){l.terminateExecution(),console.log(r),m.changeAlert(r)}}return(r,y)=>(n(),g(se,{class:"background"},{default:a(()=>[u($,{order:"1"},{default:a(()=>[u(ge)]),_:1}),u($,{order:"2"},{default:a(()=>[u(G,{class:"card"},{default:a(()=>[u(D,{class:"subtitle"},{default:a(()=>[f(v(r.$gettext("Scenario Simulation")),1)]),_:1}),u(oe,{modelValue:S.value,"onUpdate:modelValue":y[4]||(y[4]=d=>S.value=d),class:"stepper"},{default:a(()=>[c.value.length>1?(n(),g(re,{key:0,modelValue:V.value,"onUpdate:modelValue":y[0]||(y[0]=d=>V.value=d),"show-arrows":"","bg-color":"lightgrey",color:"success","fixed-tabs":""},{default:a(()=>[(n(!0),x(F,null,U(c.value,d=>(n(),g(ue,{key:d,value:d,disabled:e.value||!k.value},{default:a(()=>[f(v(d),1)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"])):_("",!0),z.value?_("",!0):(n(),g(I,{key:1,density:"compact",variant:"outlined",text:"",type:"warning"},{default:a(()=>[f(v(r.$gettext("Results are not synchronized with latest modifications.             Please relauch simulation to update results.")),1)]),_:1})),s.value?(n(),g(I,{key:2,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[f(v(r.$gettext("Simulation ended with an execution error or have been aborted.             Please relauch simulation. If the problem persist, contact us."))+" ",1),(n(!0),x(F,null,U(Object.keys(T.value),d=>(n(),x("p",{key:d},[P("b",null,v(d)+": ",1),f(v(T.value[d]),1)]))),128))]),_:1})):_("",!0),A.value?(n(),g(I,{key:3,density:"compact",variant:"outlined",text:"",type:"error"},{default:a(()=>[f(v(r.$gettext("This scenario is protected. You can not run simulation.")),1)]),_:1})):_("",!0),P("div",me,[u(E,{loading:e.value,disabled:e.value||A.value||!k.value,color:"success",onClick:y[1]||(y[1]=d=>h())},{default:a(()=>[u(Z,{size:"small",style:{"margin-right":"10px"}},{default:a(()=>[f(" fa-solid fa-play ")]),_:1}),f(" "+v(r.$gettext("Run Simulation")),1)]),_:1},8,["loading","disabled"]),ie(u(E,{color:"grey",variant:"text",onClick:y[2]||(y[2]=d=>ce(l).stopExecution())},{default:a(()=>[f(v(r.$gettext("Abort Simulation")),1)]),_:1},512),[[de,e.value&&S.value!==1]]),u(Y,{modelValue:o.value,"onUpdate:modelValue":y[3]||(y[3]=d=>o.value=d),class:"switch",density:"compact","false-icon":"fas fa-volume-xmark","true-icon":"fas fa-volume-high",inset:"",color:"primary","hide-details":""},{prepend:a(()=>[P("span",null,v(r.$gettext("End signal")),1)]),_:1},8,["modelValue"])]),k.value?(n(),x("div",he,[(n(!0),x(F,null,U(H.value,(d,b)=>(n(),x("div",{key:b+1},[s.value?(n(),g(j,{key:1,complete:S.value>b+1,title:d.name,value:b+1,step:b+1},null,8,["complete","title","value","step"])):(n(),g(j,{key:0,complete:S.value>b+1,color:S.value>=b+1?"primary":"regular",title:d.name,value:b+1,compact:"",step:b+1},null,8,["complete","color","title","value","step"]))]))),128))])):_("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},Se=q(ye,[["__scopeId","data-v-b33be291"]]);export{Se as default};