import{cm as ne,i as Q,r as w,cn as oe,w as le,u as O,h as Y,aU as h,f as Z,co as re,_ as ie,e as v,o as ue,ag as ce,j as f,k as T,q as a,v as r,a6 as de,F as i,y as m,z as l,J as C,bf as U,K as F,B as P,aR as pe,L as z,M as H,m as k,R as fe,H as me,bg as ve,aJ as he,I as be,aa as ge,V as R,$ as K,a0 as X,al as ye,X as _e,T as ke,aC as xe,aD as we}from"./index-BMgGdpXO.js";const Me=ne("runMapMatching",()=>{const{$gettext:M}=Q(),o=w("arn:aws:states:ca-central-1:142023388927:stateMachine:quetzal-mapmatching-api"),e=w("quetzal-api-bucket"),d=w("");function x(){d.value=re()}const j=w([]),{error:B,running:p,errorMessage:J,startExecution:L,status:S,stopExecution:D}=oe(o.value),b=w({SIGMA:4.02,BETA:3,POWER:2,DIFF:!0,ptMetrics:!0});function V(c){c.forEach(u=>b.value[u.name]=u.value)}le(S,async c=>{c==="SUCCEEDED"&&(p.value=!0,await g(),await I(),p.value=!1,S.value="",O().changeNotification({text:M("PT network successfully Mapmatched. See results pages for more details."),autoClose:!1,color:"success"}))});async function g(){const c=O();c.initLinks();const u=Y();u.unloadFiles();const y=await h.readJson(e.value,d.value.concat("/links_final.geojson"));u.appendNewLinks(y);const _=await h.readJson(e.value,d.value.concat("/nodes_final.geojson"));if(u.appendNewNodes(_),b.value.ptMetrics){c.initrLinks();const E=Z(),s=await h.readJson(e.value,d.value.concat("/road_links.geojson")),n=await h.readJson(e.value,d.value.concat("/road_nodes.geojson"));E.loadrLinks(s),E.loadrNodes(n)}}async function I(){let c=await h.listFiles(e.value,d.value);c=c.filter(y=>y.endsWith(".csv"));const u=[];for(const y of c){let _=y.split("/").slice(-1);_="outputs/"+_;const E=await h.readBytes(e.value,y);u.push({path:_,content:E})}u.length>0&&O().loadOtherFiles(u)}return{stateMachineArn:o,bucket:e,callID:d,exclusions:j,status:S,running:p,error:B,errorMessage:J,parameters:b,saveParams:V,setCallID:x,startExecution:L,stopExecution:D,getCSVs:I}}),ee=M=>(xe("data-v-363751b2"),M=M(),we(),M),Se={class:"background"},Ve=ee(()=>k("p",{class:"pl-4"},[i(" Emission = 0.5 x ( dist_to_road / SIGMA ) ^ POWER "),k("br"),i(" Transition = 1 / BETA x | dijkstra_dist - acf_dist* | "),k("br"),i(" Probablity = Emission + Transition "),k("br"),i(" * If use difference is true. Else acf_dist = 0 "),k("br")],-1)),Ie=ee(()=>k("br",null,null,-1)),Ee={key:1,class:"text-grey text-caption align-self-center"},Ne={__name:"MapMatching",setup(M){const{$gettext:o}=Q(),e=Me(),d=Z(),x=Y(),j=v(()=>d.rlinksIsEmpty),B=v(()=>x.linksIsEmpty),p=v(()=>e.running),J=v(()=>e.status),L=v(()=>e.error),S=v(()=>e.errorMessage),D=v(()=>e.timer),b=v(()=>e.callID),V=v(()=>e.bucket),g=w(!1),I=w([{name:"SIGMA",text:"Sigma",value:e.parameters.SIGMA,type:"Number",units:"meters",hint:"emission probablity constant. the bigger it     is the further away a stops can be from roads."},{name:"BETA",text:"beta",value:e.parameters.BETA,type:"Number",units:"meters",hint:"transition probablity constant. The smaller the smaller      the difference between the as-the-crow and routing distance can be (if use difference is true)"},{name:"POWER",text:"power",value:e.parameters.POWER,type:"Number",units:"meters",hint:"Power used in the Emission Probability"},{name:"DIFF",text:"Use difference",value:e.parameters.DIFF,type:"Boolean",units:"bool",hint:"If False, act_dist is ignore in the transition probability. This change the emission to only     consider the shortest path between nodes. "},{name:"ptMetrics",text:"Add indicators on links",value:e.parameters.ptMetrics,type:"Boolean",units:"bool",hint:"Add PT metrics to road links (ex: number of trips & number of lines)"}]);ue(()=>{e.exclusions=e.exclusions.filter(s=>_.value.includes(s))}),ce(()=>{e.saveParams(I.value)});async function c(){e.running=!0,e.setCallID(),u(),await y();const s={callID:b.value,exclusions:e.exclusions};I.value.forEach(n=>{s[n.name]=n.value}),e.startExecution(s)}function u(){let n=x.tripId.length/6;function t(A,te=20,ae=[12,8,4,2,1]){let se=Math.floor(A/te),G=100,W=12;for(let q of ae){let $=Math.abs(se-q);$<G&&(G=$,W=q)}return W}const N=t(n,20,[12,8,4,2,1]);e.timer=n/N+20+20+10}async function y(){const s=[];s.push(h.putObject(V.value,b.value.concat("/road_links.geojson"),JSON.stringify(d.rlinks))),s.push(h.putObject(V.value,b.value.concat("/road_nodes.geojson"),JSON.stringify(d.rnodes))),s.push(h.putObject(V.value,b.value.concat("/links.geojson"),JSON.stringify(x.links))),s.push(h.putObject(V.value,b.value.concat("/nodes.geojson"),JSON.stringify(x.nodes)));try{await Promise.all(s)}catch(n){O().changeAlert(n)}}const _=v(()=>Array.from(new Set(x.links.features.map(s=>s.properties.route_type))));function E(){e.stopExecution()}return(s,n)=>(f(),T("section",Se,[a(ke,{class:"card"},{default:r(()=>[a(de,null,{default:r(()=>[i(m(l(o)("Match PT network on road network")),1)]),_:1}),j.value||B.value?(f(),C(U,{key:0},{default:r(()=>[i(m(l(o)("need a road and a PT network")),1)]),_:1})):F("",!0),a(P),Ve,a(P),a(U,null,{default:r(()=>[i(" Hidden Markov Map Matching Through Noise and Sparseness "),Ie,i(" Paul Newson and John Krumm 2009 ")]),_:1}),a(P),a(U,null,{default:r(()=>[L.value?(f(),C(pe,{key:0,density:"compact",width:"50rem",variant:"outlined",text:"",type:"error"},{default:r(()=>[i(m(l(o)("There as been an error Mapmatching.             Please try again. If the problem persist, contact us."))+" ",1),(f(!0),T(z,null,H(Object.keys(S.value),t=>(f(),T("p",{key:t},[k("b",null,m(t)+": ",1),i(m(S.value[t]),1)]))),128))]),_:1})):F("",!0)]),_:1}),a(fe),a(P),a(me,{modelValue:l(e).exclusions,"onUpdate:modelValue":n[0]||(n[0]=t=>l(e).exclusions=t),items:_.value,disabled:p.value,hint:g.value?l(o)("routes type to not mapmatch (ex subway are not on roads)"):"",label:"route_type exclusion",variant:"outlined",multiple:""},{selection:r(({item:t,index:N})=>[N<2?(f(),C(ve,{key:0},{default:r(()=>[k("span",null,m(t.title),1)]),_:2},1024)):F("",!0),N===2?(f(),T("span",Ee," (+"+m(l(e).exclusions.length-2)+" others) ",1)):F("",!0)]),_:1},8,["modelValue","items","disabled","hint"]),(f(!0),T(z,null,H(I.value,(t,N)=>(f(),T("div",{key:N,class:"items"},[t.type==="Boolean"?(f(),C(he,{key:0,modelValue:t.value,"onUpdate:modelValue":A=>t.value=A,class:"pr-2",color:"primary",disabled:p.value,label:l(o)(t.text),hint:g.value?l(o)(t.hint):"","persistent-hint":g.value},null,8,["modelValue","onUpdate:modelValue","disabled","label","hint","persistent-hint"])):(f(),C(be,{key:1,modelValue:t.value,"onUpdate:modelValue":A=>t.value=A,type:t.type,disabled:p.value,label:l(o)(t.text),suffix:t.units,hint:g.value?l(o)(t.hint):"","persistent-hint":g.value,required:"",onWheel:()=>{}},null,8,["modelValue","onUpdate:modelValue","type","disabled","label","suffix","hint","persistent-hint"]))]))),128)),a(ge,null,{default:r(()=>[a(R,{variant:"outlined",color:"success",loading:p.value,disabled:p.value||j.value||B.value,onClick:c},{default:r(()=>[i(m(l(o)("Process")),1)]),_:1},8,["loading","disabled"]),K(a(R,{color:"grey",variant:"text",onClick:n[1]||(n[1]=t=>E())},{default:r(()=>[i(m(l(o)("Abort")),1)]),_:1},512),[[X,p.value&&J.value==="RUNNING"]]),K(a(ye,null,{default:r(()=>[i(" ~ "+m(D.value>0?Math.ceil(D.value/60):l(o)("less than 1"))+m(l(o)(" minutes remaining")),1)]),_:1},512),[[X,p.value]]),a(P),a(R,{size:"small",onClick:n[2]||(n[2]=t=>g.value=!g.value)},{default:r(()=>[a(_e,null,{default:r(()=>[i("far fa-question-circle small")]),_:1})]),_:1})]),_:1})]),_:1})]))}},Ae=ie(Ne,[["__scopeId","data-v-363751b2"]]);export{Ae as default};