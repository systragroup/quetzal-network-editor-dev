import{bn as P,bo as ke,bp as De,bq as pe,br as _e,bs as Oe,bt as Ne,bu as $e,bv as R,bw as J,bx as Ue,by as Fe,bz as ze,bA as Te,bB as Me,bC as He,bD as Le,bE as je,bF as Ge,bG as qe,bH as Be,bI as We,bJ as Ve,bK as Je,bL as Ke,bM as Xe,bN as Ze,bO as Ye,bP as Qe,bQ as et,bR as tt,bS as st,bT as nt,bU as it,bV as ot,bW as rt,bX as at,bY as ct,bZ as dt,b_ as ut,b$ as lt,c0 as pt,c1 as mt,c2 as ht,c3 as yt,c4 as gt,c5 as wt,c6 as ft,c7 as g,c8 as St,c9 as me,ca as _,cb as Et,cc as bt,cd as vt,ce as he,cf as ye,cg as ge}from"./index-BMgGdpXO.js";const p=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(t=>t!=null).map(p);if(typeof e=="object"){const t={};for(const s of Object.keys(e))e[s]!=null&&(t[s]=p(e[s]));return t}return e};class xt{async sign(t,s,n){return t}}const Ct=e=>t=>async s=>{if(!P.isInstance(s.request))return t(s);const{request:n}=s,{handlerProtocol:i=""}=e.requestHandler.metadata||{};if(i.indexOf("h2")>=0&&!n.headers[":authority"])delete n.headers.host,n.headers[":authority"]=n.hostname+(n.port?":"+n.port:"");else if(!n.headers.host){let r=n.hostname;n.port!=null&&(r+=`:${n.port}`),n.headers.host=r}return t(s)},At={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},It=e=>({applyToStack:t=>{t.add(Ct(e),At)}}),Pt=()=>(e,t)=>async s=>{var n,i;try{const r=await e(s),{clientName:o,commandName:a,logger:c,dynamoDbDocumentClientOptions:d={}}=t,{overrideInputFilterSensitiveLog:u,overrideOutputFilterSensitiveLog:l}=d,b=u??t.inputFilterSensitiveLog,h=l??t.outputFilterSensitiveLog,{$metadata:Pe,...Re}=r.output;return(n=c==null?void 0:c.info)==null||n.call(c,{clientName:o,commandName:a,input:b(s.input),output:h(Re),metadata:Pe}),r}catch(r){const{clientName:o,commandName:a,logger:c,dynamoDbDocumentClientOptions:d={}}=t,{overrideInputFilterSensitiveLog:u}=d,l=u??t.inputFilterSensitiveLog;throw(i=c==null?void 0:c.error)==null||i.call(c,{clientName:o,commandName:a,input:l(s.input),error:r,metadata:r.$metadata}),r}},Rt={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},kt=e=>({applyToStack:t=>{t.add(Pt(),Rt)}});var K={};const X="X-Amzn-Trace-Id",Dt="AWS_LAMBDA_FUNCTION_NAME",_t="_X_AMZN_TRACE_ID",Ot=e=>t=>async s=>{const{request:n}=s;if(!P.isInstance(n)||e.runtime!=="node"||n.headers.hasOwnProperty(X))return t(s);const i=K[Dt],r=K[_t],o=a=>typeof a=="string"&&a.length>0;return o(i)&&o(r)&&(n.headers[X]=r),t({...s,request:n})},Nt={step:"build",tags:["RECURSION_DETECTION"],name:"recursionDetectionMiddleware",override:!0,priority:"low"},$t=e=>({applyToStack:t=>{t.add(Ot(e),Nt)}});function Ut(e){return{...e,customUserAgent:typeof e.customUserAgent=="string"?[[e.customUserAgent]]:e.customUserAgent}}const we=(e,t=!1)=>{if(t){for(const s of e.split("."))if(!we(s))return!1;return!0}return!(!ke(e)||e.length<3||e.length>63||e!==e.toLowerCase()||De(e))},Ft=e=>{const t=e.split(":");if(t.length<6)return null;const[s,n,i,r,o,...a]=t;return s!=="arn"||n===""||i===""||a[0]===""?null:{partition:n,service:i,region:r,accountId:o,resourceId:a[0].includes("/")?a[0].split("/"):a}},zt=[{id:"aws",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-east-1",name:"aws",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",regions:{"af-south-1":{description:"Africa (Cape Town)"},"ap-east-1":{description:"Asia Pacific (Hong Kong)"},"ap-northeast-1":{description:"Asia Pacific (Tokyo)"},"ap-northeast-2":{description:"Asia Pacific (Seoul)"},"ap-northeast-3":{description:"Asia Pacific (Osaka)"},"ap-south-1":{description:"Asia Pacific (Mumbai)"},"ap-south-2":{description:"Asia Pacific (Hyderabad)"},"ap-southeast-1":{description:"Asia Pacific (Singapore)"},"ap-southeast-2":{description:"Asia Pacific (Sydney)"},"ap-southeast-3":{description:"Asia Pacific (Jakarta)"},"ap-southeast-4":{description:"Asia Pacific (Melbourne)"},"aws-global":{description:"AWS Standard global region"},"ca-central-1":{description:"Canada (Central)"},"ca-west-1":{description:"Canada West (Calgary)"},"eu-central-1":{description:"Europe (Frankfurt)"},"eu-central-2":{description:"Europe (Zurich)"},"eu-north-1":{description:"Europe (Stockholm)"},"eu-south-1":{description:"Europe (Milan)"},"eu-south-2":{description:"Europe (Spain)"},"eu-west-1":{description:"Europe (Ireland)"},"eu-west-2":{description:"Europe (London)"},"eu-west-3":{description:"Europe (Paris)"},"il-central-1":{description:"Israel (Tel Aviv)"},"me-central-1":{description:"Middle East (UAE)"},"me-south-1":{description:"Middle East (Bahrain)"},"sa-east-1":{description:"South America (Sao Paulo)"},"us-east-1":{description:"US East (N. Virginia)"},"us-east-2":{description:"US East (Ohio)"},"us-west-1":{description:"US West (N. California)"},"us-west-2":{description:"US West (Oregon)"}}},{id:"aws-cn",outputs:{dnsSuffix:"amazonaws.com.cn",dualStackDnsSuffix:"api.amazonwebservices.com.cn",implicitGlobalRegion:"cn-northwest-1",name:"aws-cn",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^cn\\-\\w+\\-\\d+$",regions:{"aws-cn-global":{description:"AWS China global region"},"cn-north-1":{description:"China (Beijing)"},"cn-northwest-1":{description:"China (Ningxia)"}}},{id:"aws-us-gov",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-gov-west-1",name:"aws-us-gov",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^us\\-gov\\-\\w+\\-\\d+$",regions:{"aws-us-gov-global":{description:"AWS GovCloud (US) global region"},"us-gov-east-1":{description:"AWS GovCloud (US-East)"},"us-gov-west-1":{description:"AWS GovCloud (US-West)"}}},{id:"aws-iso",outputs:{dnsSuffix:"c2s.ic.gov",dualStackDnsSuffix:"c2s.ic.gov",implicitGlobalRegion:"us-iso-east-1",name:"aws-iso",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-iso\\-\\w+\\-\\d+$",regions:{"aws-iso-global":{description:"AWS ISO (US) global region"},"us-iso-east-1":{description:"US ISO East"},"us-iso-west-1":{description:"US ISO WEST"}}},{id:"aws-iso-b",outputs:{dnsSuffix:"sc2s.sgov.gov",dualStackDnsSuffix:"sc2s.sgov.gov",implicitGlobalRegion:"us-isob-east-1",name:"aws-iso-b",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isob\\-\\w+\\-\\d+$",regions:{"aws-iso-b-global":{description:"AWS ISOB (US) global region"},"us-isob-east-1":{description:"US ISOB East (Ohio)"}}},{id:"aws-iso-e",outputs:{dnsSuffix:"cloud.adc-e.uk",dualStackDnsSuffix:"cloud.adc-e.uk",implicitGlobalRegion:"eu-isoe-west-1",name:"aws-iso-e",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^eu\\-isoe\\-\\w+\\-\\d+$",regions:{"eu-isoe-west-1":{description:"EU ISOE West"}}},{id:"aws-iso-f",outputs:{dnsSuffix:"csp.hci.ic.gov",dualStackDnsSuffix:"csp.hci.ic.gov",implicitGlobalRegion:"us-isof-south-1",name:"aws-iso-f",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isof\\-\\w+\\-\\d+$",regions:{}}],Tt="1.1",Mt={partitions:zt,version:Tt};let Ht=Mt;const Lt=e=>{const{partitions:t}=Ht;for(const n of t){const{regions:i,outputs:r}=n;for(const[o,a]of Object.entries(i))if(o===e)return{...r,...a}}for(const n of t){const{regionRegex:i,outputs:r}=n;if(new RegExp(i).test(e))return{...r}}const s=t.find(n=>n.id==="aws");if(!s)throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");return{...s.outputs}},fe={isVirtualHostableS3Bucket:we,parseArn:Ft,partition:Lt};pe.aws=fe;const Z="user-agent",O="x-amz-user-agent",Y=" ",N="/",jt=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,Gt=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,Q="-",qt=e=>(t,s)=>async n=>{var l,b;const{request:i}=n;if(!P.isInstance(i))return t(n);const{headers:r}=i,o=((l=s==null?void 0:s.userAgent)==null?void 0:l.map($))||[],a=(await e.defaultUserAgentProvider()).map($),c=((b=e==null?void 0:e.customUserAgent)==null?void 0:b.map($))||[],d=[].concat([...a,...o,...c]).join(Y),u=[...a.filter(h=>h.startsWith("aws-sdk-")),...c].join(Y);return e.runtime!=="browser"?(u&&(r[O]=r[O]?`${r[Z]} ${u}`:u),r[Z]=d):r[O]=d,t({...n,request:i})},$=e=>{var o;const t=e[0].split(N).map(a=>a.replace(jt,Q)).join(N),s=(o=e[1])==null?void 0:o.replace(Gt,Q),n=t.indexOf(N),i=t.substring(0,n);let r=t.substring(n+1);return i==="api"&&(r=r.toLowerCase()),[i,r,s].filter(a=>a&&a.length>0).reduce((a,c,d)=>{switch(d){case 0:return c;case 1:return`${a}/${c}`;default:return`${a}#${c}`}},"")},Bt={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0},Wt=e=>({applyToStack:t=>{t.add(qt(e),Bt)}}),ee=e=>{var t,s;return _e.isInstance(e)?((t=e.headers)==null?void 0:t.date)??((s=e.headers)==null?void 0:s.Date):void 0},Se=e=>new Date(Date.now()+e),Vt=(e,t)=>Math.abs(Se(t).getTime()-e)>=3e5,te=(e,t)=>{const s=Date.parse(e);return Vt(s,t)?s-Date.now():t},A=(e,t)=>{if(!t)throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);return t},Jt=async e=>{var d,u,l;const t=A("context",e.context),s=A("config",e.config),n=(l=(u=(d=t.endpointV2)==null?void 0:d.properties)==null?void 0:u.authSchemes)==null?void 0:l[0],r=await A("signer",s.signer)(n),o=e==null?void 0:e.signingRegion,a=e==null?void 0:e.signingRegionSet,c=e==null?void 0:e.signingName;return{config:s,signer:r,signingRegion:o,signingRegionSet:a,signingName:c}};class Kt{async sign(t,s,n){var l;if(!P.isInstance(t))throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");const i=await Jt(n),{config:r,signer:o}=i;let{signingRegion:a,signingName:c}=i;const d=n.context;if(((l=d==null?void 0:d.authSchemes)==null?void 0:l.length)??!1){const[b,h]=d.authSchemes;(b==null?void 0:b.name)==="sigv4a"&&(h==null?void 0:h.name)==="sigv4"&&(a=(h==null?void 0:h.signingRegion)??a,c=(h==null?void 0:h.signingName)??c)}return await o.sign(t,{signingDate:Se(r.systemClockOffset),signingRegion:a,signingService:c})}errorHandler(t){return s=>{const n=s.ServerTime??ee(s.$response);if(n){const i=A("config",t.config),r=i.systemClockOffset;i.systemClockOffset=te(n,i.systemClockOffset),i.systemClockOffset!==r&&s.$metadata&&(s.$metadata.clockSkewCorrected=!0)}throw s}}successHandler(t,s){const n=ee(t);if(n){const i=A("config",s.config);i.systemClockOffset=te(n,i.systemClockOffset)}}}const Xt=e=>{let t;e.credentials&&(t=Oe(e.credentials,$e,Ne)),t||(e.credentialDefaultProvider?t=R(e.credentialDefaultProvider(Object.assign({},e,{parentClientConfig:e}))):t=async()=>{throw new Error("`credentials` is missing")});const{signingEscapePath:s=!0,systemClockOffset:n=e.systemClockOffset||0,sha256:i}=e;let r;return e.signer?r=R(e.signer):e.regionInfoProvider?r=()=>R(e.region)().then(async o=>[await e.regionInfoProvider(o,{useFipsEndpoint:await e.useFipsEndpoint(),useDualstackEndpoint:await e.useDualstackEndpoint()})||{},o]).then(([o,a])=>{const{signingRegion:c,signingService:d}=o;e.signingRegion=e.signingRegion||c||a,e.signingName=e.signingName||d||e.serviceId;const u={...e,credentials:t,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:s},l=e.signerConstructor||J;return new l(u)}):r=async o=>{o=Object.assign({},{name:"sigv4",signingName:e.signingName||e.defaultSigningName,signingRegion:await R(e.region)(),properties:{}},o);const a=o.signingRegion,c=o.signingName;e.signingRegion=e.signingRegion||a,e.signingName=e.signingName||c||e.serviceId;const d={...e,credentials:t,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:s},u=e.signerConstructor||J;return new u(d)},{...e,systemClockOffset:n,signingEscapePath:s,credentials:t,signer:r}},Zt=(e,t)=>Ue(e,t).then(s=>t.utf8Encoder(s)),U=(e,t)=>Zt(e,t).then(s=>{if(s.length)try{return JSON.parse(s)}catch(n){throw(n==null?void 0:n.name)==="SyntaxError"&&Object.defineProperty(n,"$responseBodyText",{value:s}),n}return{}}),Yt=async(e,t)=>{const s=await U(e,t);return s.message=s.message??s.Message,s},Qt=(e,t)=>{const s=(r,o)=>Object.keys(r).find(a=>a.toLowerCase()===o.toLowerCase()),n=r=>{let o=r;return typeof o=="number"&&(o=o.toString()),o.indexOf(",")>=0&&(o=o.split(",")[0]),o.indexOf(":")>=0&&(o=o.split(":")[0]),o.indexOf("#")>=0&&(o=o.split("#")[1]),o},i=s(e.headers,"x-amzn-errortype");if(i!==void 0)return n(e.headers[i]);if(t.code!==void 0)return n(t.code);if(t.__type!==void 0)return n(t.__type)},es=async(e,t,s)=>({operation:Fe(t).operation,region:await ze(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});function ts(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(t,s)=>({signingProperties:{config:t,context:s}})}}function k(e){return{schemeId:"smithy.api#noAuth"}}const ss=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":{t.push(k());break}case"GetId":{t.push(k());break}case"GetOpenIdToken":{t.push(k());break}case"UnlinkIdentity":{t.push(k());break}default:t.push(ts(e))}return t},ns=e=>({...Xt(e)}),is=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"}),Ee={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}},os="@aws-sdk/client-cognito-identity",rs="AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",as="3.624.0",cs={build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"},ds="./dist-cjs/index.js",us="./dist-types/index.d.ts",ls="./dist-es/index.js",ps=!1,ms={"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/client-sso-oidc":"3.624.0","@aws-sdk/client-sts":"3.624.0","@aws-sdk/core":"3.624.0","@aws-sdk/credential-provider-node":"3.624.0","@aws-sdk/middleware-host-header":"3.620.0","@aws-sdk/middleware-logger":"3.609.0","@aws-sdk/middleware-recursion-detection":"3.620.0","@aws-sdk/middleware-user-agent":"3.620.0","@aws-sdk/region-config-resolver":"3.614.0","@aws-sdk/types":"3.609.0","@aws-sdk/util-endpoints":"3.614.0","@aws-sdk/util-user-agent-browser":"3.609.0","@aws-sdk/util-user-agent-node":"3.614.0","@smithy/config-resolver":"^3.0.5","@smithy/core":"^2.3.2","@smithy/fetch-http-handler":"^3.2.4","@smithy/hash-node":"^3.0.3","@smithy/invalid-dependency":"^3.0.3","@smithy/middleware-content-length":"^3.0.5","@smithy/middleware-endpoint":"^3.1.0","@smithy/middleware-retry":"^3.0.14","@smithy/middleware-serde":"^3.0.3","@smithy/middleware-stack":"^3.0.3","@smithy/node-config-provider":"^3.1.4","@smithy/node-http-handler":"^3.1.4","@smithy/protocol-http":"^4.1.0","@smithy/smithy-client":"^3.1.12","@smithy/types":"^3.3.0","@smithy/url-parser":"^3.0.3","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.14","@smithy/util-defaults-mode-node":"^3.0.14","@smithy/util-endpoints":"^2.0.5","@smithy/util-middleware":"^3.0.3","@smithy/util-retry":"^3.0.3","@smithy/util-utf8":"^3.0.0",tslib:"^2.6.2"},hs={"@aws-sdk/client-iam":"3.624.0","@tsconfig/node16":"16.1.3","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^16.18.96",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~4.9.5"},ys={node:">=16.0.0"},gs={"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},ws=["dist-*/**"],fs={name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},Ss="Apache-2.0",Es={"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},bs="https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",vs={type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-cognito-identity"},xs={name:os,description:rs,version:as,scripts:cs,main:ds,types:us,module:ls,sideEffects:ps,dependencies:ms,devDependencies:hs,engines:ys,typesVersions:gs,files:ws,author:fs,license:Ss,browser:Es,"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:bs,repository:vs},Cs=({serviceId:e,clientVersion:t})=>async()=>{var i,r,o,a,c;const s=typeof window<"u"&&((i=window==null?void 0:window.navigator)!=null&&i.userAgent)?Te.parse(window.navigator.userAgent):void 0,n=[["aws-sdk-js",t],["ua","2.0"],[`os/${((r=s==null?void 0:s.os)==null?void 0:r.name)||"other"}`,(o=s==null?void 0:s.os)==null?void 0:o.version],["lang/js"],["md/browser",`${((a=s==null?void 0:s.browser)==null?void 0:a.name)??"unknown"}_${((c=s==null?void 0:s.browser)==null?void 0:c.version)??"unknown"}`]];return e&&n.push([`api/${e}`,t]),n},be="required",f="fn",S="argv",x="ref",se=!0,ne="isSet",I="booleanEquals",v="error",C="endpoint",E="tree",F="PartitionResult",ie={[be]:!1,type:"String"},oe={[be]:!0,default:!1,type:"Boolean"},re={[x]:"Endpoint"},ve={[f]:I,[S]:[{[x]:"UseFIPS"},!0]},xe={[f]:I,[S]:[{[x]:"UseDualStack"},!0]},w={},ae={[f]:"getAttr",[S]:[{[x]:F},"supportsFIPS"]},ce={[f]:I,[S]:[!0,{[f]:"getAttr",[S]:[{[x]:F},"supportsDualStack"]}]},de=[ve],ue=[xe],le=[{[x]:"Region"}],As={version:"1.0",parameters:{Region:ie,UseDualStack:oe,UseFIPS:oe,Endpoint:ie},rules:[{conditions:[{[f]:ne,[S]:[re]}],rules:[{conditions:de,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:v},{conditions:ue,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:v},{endpoint:{url:re,properties:w,headers:w},type:C}],type:E},{conditions:[{[f]:ne,[S]:le}],rules:[{conditions:[{[f]:"aws.partition",[S]:le,assign:F}],rules:[{conditions:[ve,xe],rules:[{conditions:[{[f]:I,[S]:[se,ae]},ce],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:w,headers:w},type:C}],type:E},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:v}],type:E},{conditions:de,rules:[{conditions:[{[f]:I,[S]:[ae,se]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:w,headers:w},type:C}],type:E},{error:"FIPS is enabled but this partition does not support FIPS",type:v}],type:E},{conditions:ue,rules:[{conditions:[ce],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:w,headers:w},type:C}],type:E},{error:"DualStack is enabled but this partition does not support DualStack",type:v}],type:E},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:w,headers:w},type:C}],type:E}],type:E},{error:"Invalid Configuration: Missing Region",type:v}]},Is=As,Ps=(e,t={})=>Me(Is,{endpointParams:e,logger:t.logger});pe.aws=fe;const Rs=e=>({apiVersion:"2014-06-30",base64Decoder:(e==null?void 0:e.base64Decoder)??He,base64Encoder:(e==null?void 0:e.base64Encoder)??Le,disableHostPrefix:(e==null?void 0:e.disableHostPrefix)??!1,endpointProvider:(e==null?void 0:e.endpointProvider)??Ps,extensions:(e==null?void 0:e.extensions)??[],httpAuthSchemeProvider:(e==null?void 0:e.httpAuthSchemeProvider)??ss,httpAuthSchemes:(e==null?void 0:e.httpAuthSchemes)??[{schemeId:"aws.auth#sigv4",identityProvider:t=>t.getIdentityProvider("aws.auth#sigv4"),signer:new Kt},{schemeId:"smithy.api#noAuth",identityProvider:t=>t.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new xt}],logger:(e==null?void 0:e.logger)??new je,serviceId:(e==null?void 0:e.serviceId)??"Cognito Identity",urlParser:(e==null?void 0:e.urlParser)??Ge,utf8Decoder:(e==null?void 0:e.utf8Decoder)??qe,utf8Encoder:(e==null?void 0:e.utf8Encoder)??Be}),ks=e=>{const t=tt(e),s=()=>t().then(st),n=Rs(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:(e==null?void 0:e.bodyLengthChecker)??We,credentialDefaultProvider:(e==null?void 0:e.credentialDefaultProvider)??(i=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:(e==null?void 0:e.defaultUserAgentProvider)??Cs({serviceId:n.serviceId,clientVersion:xs.version}),maxAttempts:(e==null?void 0:e.maxAttempts)??Ve,region:(e==null?void 0:e.region)??Je("Region is missing"),requestHandler:Ke.create((e==null?void 0:e.requestHandler)??s),retryMode:(e==null?void 0:e.retryMode)??(async()=>(await s()).retryMode||Xe),sha256:(e==null?void 0:e.sha256)??Ze,streamCollector:(e==null?void 0:e.streamCollector)??Ye,useDualstackEndpoint:(e==null?void 0:e.useDualstackEndpoint)??(()=>Promise.resolve(Qe)),useFipsEndpoint:(e==null?void 0:e.useFipsEndpoint)??(()=>Promise.resolve(et))}},Ds=e=>{const t=e.httpAuthSchemes;let s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(i){const r=t.findIndex(o=>o.schemeId===i.schemeId);r===-1?t.push(i):t.splice(r,1,i)},httpAuthSchemes(){return t},setHttpAuthSchemeProvider(i){s=i},httpAuthSchemeProvider(){return s},setCredentials(i){n=i},credentials(){return n}}},_s=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),D=e=>e,Os=(e,t)=>{const s={...D(ct(e)),...D(nt(e)),...D(it(e)),...D(Ds(e))};return t.forEach(n=>n.configure(s)),{...e,...ot(s),...rt(s),...at(s),..._s(s)}};class Ys extends dt{constructor(...[t]){const s=ks(t||{}),n=is(s),i=Ut(n),r=ut(i),o=lt(r),a=o,c=pt(a),d=ns(c),u=Os(d,(t==null?void 0:t.extensions)||[]);super(u),this.config=u,this.middlewareStack.use(Wt(this.config)),this.middlewareStack.use(mt(this.config)),this.middlewareStack.use(ht(this.config)),this.middlewareStack.use(It(this.config)),this.middlewareStack.use(kt(this.config)),this.middlewareStack.use($t(this.config)),this.middlewareStack.use(yt(this.config,{httpAuthSchemeParametersProvider:es,identityProviderConfigProvider:async l=>new gt({"aws.auth#sigv4":l.credentials})})),this.middlewareStack.use(wt(this.config))}destroy(){super.destroy()}}class m extends ft{constructor(t){super(t),Object.setPrototypeOf(this,m.prototype)}}class z extends m{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,z.prototype)}}class T extends m{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,T.prototype)}}class M extends m{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,M.prototype)}}class H extends m{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,H.prototype)}}class L extends m{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,L.prototype)}}class j extends m{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,j.prototype)}}class G extends m{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,G.prototype)}}class q extends m{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,q.prototype)}}class B extends m{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,B.prototype)}}class W extends m{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,W.prototype)}}class V extends m{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,V.prototype)}}const Ns=async(e,t)=>{const s=Ie("GetCredentialsForIdentity");let n;return n=JSON.stringify(p(e)),Ae(t,s,"/",void 0,n)},$s=async(e,t)=>{const s=Ie("GetId");let n;return n=JSON.stringify(p(e)),Ae(t,s,"/",void 0,n)},Us=async(e,t)=>{if(e.statusCode>=300)return Ce(e,t);const s=await U(e.body,t);let n={};return n=Ks(s),{$metadata:y(e),...n}},Fs=async(e,t)=>{if(e.statusCode>=300)return Ce(e,t);const s=await U(e.body,t);let n={};return n=p(s),{$metadata:y(e),...n}},Ce=async(e,t)=>{const s={...e,body:await Yt(e.body,t)},n=Qt(e,s.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await Hs(s);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await js(s);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await Gs(s);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await qs(s);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await Bs(s);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await Vs(s);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await Ws(s);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await Ms(s);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await Ls(s);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await Ts(s);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await zs(s);default:const i=s.body;return Xs({output:e,parsedBody:i,errorCode:n})}},zs=async(e,t)=>{const s=e.body,n=p(s),i=new V({$metadata:y(e),...n});return g(i,s)},Ts=async(e,t)=>{const s=e.body,n=p(s),i=new W({$metadata:y(e),...n});return g(i,s)},Ms=async(e,t)=>{const s=e.body,n=p(s),i=new q({$metadata:y(e),...n});return g(i,s)},Hs=async(e,t)=>{const s=e.body,n=p(s),i=new z({$metadata:y(e),...n});return g(i,s)},Ls=async(e,t)=>{const s=e.body,n=p(s),i=new B({$metadata:y(e),...n});return g(i,s)},js=async(e,t)=>{const s=e.body,n=p(s),i=new T({$metadata:y(e),...n});return g(i,s)},Gs=async(e,t)=>{const s=e.body,n=p(s),i=new M({$metadata:y(e),...n});return g(i,s)},qs=async(e,t)=>{const s=e.body,n=p(s),i=new H({$metadata:y(e),...n});return g(i,s)},Bs=async(e,t)=>{const s=e.body,n=p(s),i=new L({$metadata:y(e),...n});return g(i,s)},Ws=async(e,t)=>{const s=e.body,n=p(s),i=new G({$metadata:y(e),...n});return g(i,s)},Vs=async(e,t)=>{const s=e.body,n=p(s),i=new j({$metadata:y(e),...n});return g(i,s)},Js=(e,t)=>me(e,{AccessKeyId:_,Expiration:s=>Et(bt(vt(s))),SecretKey:_,SessionToken:_}),Ks=(e,t)=>me(e,{Credentials:s=>Js(s),IdentityId:_}),y=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Xs=St(m),Ae=async(e,t,s,n,i)=>{const{hostname:r,protocol:o="https",port:a,path:c}=await e.endpoint(),d={protocol:o,hostname:r,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+s:c+s,headers:t};return i!==void 0&&(d.body=i),new P(d)};function Ie(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class Qs extends he.classBuilder().ep({...Ee}).m(function(t,s,n,i){return[ye(n,this.serialize,this.deserialize),ge(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(Ns).de(Us).build(){}class en extends he.classBuilder().ep({...Ee}).m(function(t,s,n,i){return[ye(n,this.serialize,this.deserialize),ge(n,t.getEndpointParameterInstructions())]}).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser($s).de(Fs).build(){}export{Ys as CognitoIdentityClient,Qs as GetCredentialsForIdentityCommand,en as GetIdCommand};