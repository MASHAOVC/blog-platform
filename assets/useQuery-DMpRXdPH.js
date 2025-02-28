var ce=t=>{throw TypeError(t)};var $=(t,e,i)=>e.has(t)||ce("Cannot "+i);var s=(t,e,i)=>($(t,e,"read from private field"),i?i.call(t):e.get(t)),f=(t,e,i)=>e.has(t)?ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),u=(t,e,i,r)=>($(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),l=(t,e,i)=>($(t,e,"access private method"),i);import{aB as Se,aC as le,aD as E,aE as q,aF as K,aG as Ee,aH as X,aI as de,aJ as Oe,aK as Ie,aL as Qe,aM as fe,aN as ye,r as Q,ad as xe}from"./index-BIGqcniS.js";import{s as we,n as pe}from"./useMutation-CFXNc7Zj.js";var R,n,z,m,T,P,x,S,V,_,L,F,D,w,B,h,N,Y,Z,ee,te,se,ie,re,Ce,Re,Te=(Re=class extends Se{constructor(e,i){super();f(this,h);f(this,R);f(this,n);f(this,z);f(this,m);f(this,T);f(this,P);f(this,x);f(this,S);f(this,V);f(this,_);f(this,L);f(this,F);f(this,D);f(this,w);f(this,B,new Set);this.options=i,u(this,R,e),u(this,S,null),u(this,x,le()),this.options.experimental_prefetchInRender||s(this,x).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),be(s(this,n),this.options)?l(this,h,N).call(this):this.updateResult(),l(this,h,te).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ne(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ne(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,h,se).call(this),l(this,h,ie).call(this),s(this,n).removeObserver(this)}setOptions(e,i){const r=this.options,d=s(this,n);if(this.options=s(this,R).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof E(this.options.enabled,s(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,h,re).call(this),s(this,n).setOptions(this.options),r._defaulted&&!q(this.options,r)&&s(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const c=this.hasListeners();c&&ge(s(this,n),d,this.options,r)&&l(this,h,N).call(this),this.updateResult(i),c&&(s(this,n)!==d||E(this.options.enabled,s(this,n))!==E(r.enabled,s(this,n))||K(this.options.staleTime,s(this,n))!==K(r.staleTime,s(this,n)))&&l(this,h,Y).call(this);const a=l(this,h,Z).call(this);c&&(s(this,n)!==d||E(this.options.enabled,s(this,n))!==E(r.enabled,s(this,n))||a!==s(this,w))&&l(this,h,ee).call(this,a)}getOptimisticResult(e){const i=s(this,R).getQueryCache().build(s(this,R),e),r=this.createResult(i,e);return De(this,r)&&(u(this,m,r),u(this,P,this.options),u(this,T,s(this,n).state)),r}getCurrentResult(){return s(this,m)}trackResult(e,i){const r={};return Object.keys(e).forEach(d=>{Object.defineProperty(r,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),i==null||i(d),e[d])})}),r}trackProp(e){s(this,B).add(e)}getCurrentQuery(){return s(this,n)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const i=s(this,R).defaultQueryOptions(e),r=s(this,R).getQueryCache().build(s(this,R),i);return r.fetch().then(()=>this.createResult(r,i))}fetch(e){return l(this,h,N).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,m)))}createResult(e,i){var ue;const r=s(this,n),d=this.options,c=s(this,m),a=s(this,T),O=s(this,P),C=e!==r?e.state:s(this,z),{state:I}=e;let o={...I},j=!1,b;if(i._optimisticResults){const g=this.hasListeners(),U=!g&&be(e,i),M=g&&ge(e,r,i,d);(U||M)&&(o={...o,...Qe(I.data,e.options)}),i._optimisticResults==="isRestoring"&&(o.fetchStatus="idle")}let{error:k,errorUpdatedAt:H,status:y}=o;if(i.select&&o.data!==void 0)if(c&&o.data===(a==null?void 0:a.data)&&i.select===s(this,V))b=s(this,_);else try{u(this,V,i.select),b=i.select(o.data),b=fe(c==null?void 0:c.data,b,i),u(this,_,b),u(this,S,null)}catch(g){u(this,S,g)}else b=o.data;if(i.placeholderData!==void 0&&b===void 0&&y==="pending"){let g;if(c!=null&&c.isPlaceholderData&&i.placeholderData===(O==null?void 0:O.placeholderData))g=c.data;else if(g=typeof i.placeholderData=="function"?i.placeholderData((ue=s(this,L))==null?void 0:ue.state.data,s(this,L)):i.placeholderData,i.select&&g!==void 0)try{g=i.select(g),u(this,S,null)}catch(U){u(this,S,U)}g!==void 0&&(y="success",b=fe(c==null?void 0:c.data,g,i),j=!0)}s(this,S)&&(k=s(this,S),b=s(this,_),H=Date.now(),y="error");const A=o.fetchStatus==="fetching",G=y==="pending",J=y==="error",he=G&&A,oe=b!==void 0,v={status:y,fetchStatus:o.fetchStatus,isPending:G,isSuccess:y==="success",isError:J,isInitialLoading:he,isLoading:he,data:b,dataUpdatedAt:o.dataUpdatedAt,error:k,errorUpdatedAt:H,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>C.dataUpdateCount||o.errorUpdateCount>C.errorUpdateCount,isFetching:A,isRefetching:A&&!G,isLoadingError:J&&!oe,isPaused:o.fetchStatus==="paused",isPlaceholderData:j,isRefetchError:J&&oe,isStale:ae(e,i),refetch:this.refetch,promise:s(this,x)};if(this.options.experimental_prefetchInRender){const g=W=>{v.status==="error"?W.reject(v.error):v.data!==void 0&&W.resolve(v.data)},U=()=>{const W=u(this,x,v.promise=le());g(W)},M=s(this,x);switch(M.status){case"pending":e.queryHash===r.queryHash&&g(M);break;case"fulfilled":(v.status==="error"||v.data!==M.value)&&U();break;case"rejected":(v.status!=="error"||v.error!==M.reason)&&U();break}}return v}updateResult(e){const i=s(this,m),r=this.createResult(s(this,n),this.options);if(u(this,T,s(this,n).state),u(this,P,this.options),s(this,T).data!==void 0&&u(this,L,s(this,n)),q(r,i))return;u(this,m,r);const d={},c=()=>{if(!i)return!0;const{notifyOnChangeProps:a}=this.options,O=typeof a=="function"?a():a;if(O==="all"||!O&&!s(this,B).size)return!0;const p=new Set(O??s(this,B));return this.options.throwOnError&&p.add("error"),Object.keys(s(this,m)).some(C=>{const I=C;return s(this,m)[I]!==i[I]&&p.has(I)})};(e==null?void 0:e.listeners)!==!1&&c()&&(d.listeners=!0),l(this,h,Ce).call(this,{...d,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,h,te).call(this)}},R=new WeakMap,n=new WeakMap,z=new WeakMap,m=new WeakMap,T=new WeakMap,P=new WeakMap,x=new WeakMap,S=new WeakMap,V=new WeakMap,_=new WeakMap,L=new WeakMap,F=new WeakMap,D=new WeakMap,w=new WeakMap,B=new WeakMap,h=new WeakSet,N=function(e){l(this,h,re).call(this);let i=s(this,n).fetch(this.options,e);return e!=null&&e.throwOnError||(i=i.catch(Ee)),i},Y=function(){l(this,h,se).call(this);const e=K(this.options.staleTime,s(this,n));if(X||s(this,m).isStale||!de(e))return;const r=Oe(s(this,m).dataUpdatedAt,e)+1;u(this,F,setTimeout(()=>{s(this,m).isStale||this.updateResult()},r))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},ee=function(e){l(this,h,ie).call(this),u(this,w,e),!(X||E(this.options.enabled,s(this,n))===!1||!de(s(this,w))||s(this,w)===0)&&u(this,D,setInterval(()=>{(this.options.refetchIntervalInBackground||Ie.isFocused())&&l(this,h,N).call(this)},s(this,w)))},te=function(){l(this,h,Y).call(this),l(this,h,ee).call(this,l(this,h,Z).call(this))},se=function(){s(this,F)&&(clearTimeout(s(this,F)),u(this,F,void 0))},ie=function(){s(this,D)&&(clearInterval(s(this,D)),u(this,D,void 0))},re=function(){const e=s(this,R).getQueryCache().build(s(this,R),this.options);if(e===s(this,n))return;const i=s(this,n);u(this,n,e),u(this,z,e.state),this.hasListeners()&&(i==null||i.removeObserver(this),e.addObserver(this))},Ce=function(e){ye.batch(()=>{e.listeners&&this.listeners.forEach(i=>{i(s(this,m))}),s(this,R).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},Re);function Fe(t,e){return E(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function be(t,e){return Fe(t,e)||t.state.data!==void 0&&ne(t,e,e.refetchOnMount)}function ne(t,e,i){if(E(e.enabled,t)!==!1){const r=typeof i=="function"?i(t):i;return r==="always"||r!==!1&&ae(t,e)}return!1}function ge(t,e,i,r){return(t!==e||E(r.enabled,t)===!1)&&(!i.suspense||t.state.status!=="error")&&ae(t,i)}function ae(t,e){return E(e.enabled,t)!==!1&&t.isStaleByTime(K(e.staleTime,t))}function De(t,e){return!q(t.getCurrentResult(),e)}var ve=Q.createContext(!1),Ue=()=>Q.useContext(ve);ve.Provider;function Me(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Pe=Q.createContext(Me()),_e=()=>Q.useContext(Pe),Le=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},Be=t=>{Q.useEffect(()=>{t.clearReset()},[t])},je=({result:t,errorResetBoundary:e,throwOnError:i,query:r,suspense:d})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&(d&&t.data===void 0||we(i,[t.error,r])),ke=t=>{const e=t.staleTime;t.suspense&&(t.staleTime=typeof e=="function"?(...i)=>Math.max(e(...i),1e3):Math.max(e??1e3,1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},He=(t,e)=>t.isLoading&&t.isFetching&&!e,Ae=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,me=(t,e,i)=>e.fetchOptimistic(t).catch(()=>{i.clearReset()});function Ne(t,e,i){var o,j,b,k,H;const r=xe(),d=Ue(),c=_e(),a=r.defaultQueryOptions(t);(j=(o=r.getDefaultOptions().queries)==null?void 0:o._experimental_beforeQuery)==null||j.call(o,a),a._optimisticResults=d?"isRestoring":"optimistic",ke(a),Le(a,c),Be(c);const O=!r.getQueryCache().get(a.queryHash),[p]=Q.useState(()=>new e(r,a)),C=p.getOptimisticResult(a),I=!d&&t.subscribed!==!1;if(Q.useSyncExternalStore(Q.useCallback(y=>{const A=I?p.subscribe(ye.batchCalls(y)):pe;return p.updateResult(),A},[p,I]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Q.useEffect(()=>{p.setOptions(a,{listeners:!1})},[a,p]),Ae(a,C))throw me(a,p,c);if(je({result:C,errorResetBoundary:c,throwOnError:a.throwOnError,query:r.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw C.error;if((k=(b=r.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||k.call(b,a,C),a.experimental_prefetchInRender&&!X&&He(C,d)){const y=O?me(a,p,c):(H=r.getQueryCache().get(a.queryHash))==null?void 0:H.promise;y==null||y.catch(pe).finally(()=>{p.updateResult()})}return a.notifyOnChangeProps?C:p.trackResult(C)}function Ge(t,e){return Ne(t,Te)}export{Ge as u};
