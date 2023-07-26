import{g as getDocument}from"../shared/ssr-window.esm.min.mjs";import{s as setCSSProperty,e as elementChildren,c as createElement}from"../shared/utils.min.mjs";function Virtual(e){let s,{swiper:r,extendParams:t,on:i,emit:l}=e;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const a=getDocument();r.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const d=a.createElement("div");function n(e,s){const t=r.params.virtual;if(t.cache&&r.virtual.cache[s])return r.virtual.cache[s];let i;return t.renderSlide?(i=t.renderSlide.call(r,e,s),"string"==typeof i&&(d.innerHTML=i,i=d.children[0])):i=r.isElement?createElement("swiper-slide"):createElement("div",r.params.slideClass),i.setAttribute("data-swiper-slide-index",s),t.renderSlide||(i.innerHTML=e),t.cache&&(r.virtual.cache[s]=i),i}function o(e){const{slidesPerView:s,slidesPerGroup:t,centeredSlides:i,loop:a}=r.params,{addSlidesBefore:d,addSlidesAfter:o}=r.params.virtual,{from:c,to:u,slides:p,slidesGrid:f,offset:h}=r.virtual;r.params.cssMode||r.updateActiveIndex();const m=r.activeIndex||0;let v,g,E;v=r.rtlTranslate?"right":r.isHorizontal()?"left":"top",i?(g=Math.floor(s/2)+t+o,E=Math.floor(s/2)+t+d):(g=s+(t-1)+o,E=(a?s:t)+d);let S=m-E,x=m+g;a||(S=Math.max(S,0),x=Math.min(x,p.length-1));let w=(r.slidesGrid[S]||0)-(r.slidesGrid[0]||0);function A(){r.updateSlides(),r.updateProgress(),r.updateSlidesClasses(),l("virtualUpdate")}if(a&&m>=E?(S-=E,i||(w+=r.slidesGrid[0])):a&&m<E&&(S=-E,i&&(w+=r.slidesGrid[0])),Object.assign(r.virtual,{from:S,to:x,offset:w,slidesGrid:r.slidesGrid,slidesBefore:E,slidesAfter:g}),c===S&&u===x&&!e)return r.slidesGrid!==f&&w!==h&&r.slides.forEach((e=>{e.style[v]=w-Math.abs(r.cssOverflowAdjustment())+"px"})),r.updateProgress(),void l("virtualUpdate");if(r.params.virtual.renderExternal)return r.params.virtual.renderExternal.call(r,{offset:w,from:S,to:x,slides:function(){const e=[];for(let s=S;s<=x;s+=1)e.push(p[s]);return e}()}),void(r.params.virtual.renderExternalUpdate?A():l("virtualUpdate"));const b=[],M=[],y=e=>{let s=e;return e<0?s=p.length+e:s>=p.length&&(s-=p.length),s};if(e)r.slidesEl.querySelectorAll(`.${r.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=c;e<=u;e+=1)if(e<S||e>x){const s=y(e);r.slidesEl.querySelectorAll(`.${r.params.slideClass}[data-swiper-slide-index="${s}"], swiper-slide[data-swiper-slide-index="${s}"]`).forEach((e=>{e.remove()}))}const P=a?-p.length:0,C=a?2*p.length:p.length;for(let s=P;s<C;s+=1)if(s>=S&&s<=x){const r=y(s);void 0===u||e?M.push(r):(s>u&&M.push(r),s<c&&b.push(r))}if(M.forEach((e=>{r.slidesEl.append(n(p[e],e))})),a)for(let e=b.length-1;e>=0;e-=1){const s=b[e];r.slidesEl.prepend(n(p[s],s))}else b.sort(((e,s)=>s-e)),b.forEach((e=>{r.slidesEl.prepend(n(p[e],e))}));elementChildren(r.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=w-Math.abs(r.cssOverflowAdjustment())+"px"})),A()}i("beforeInit",(()=>{if(!r.params.virtual.enabled)return;let e;if(void 0===r.passedParams.virtual.slides){const s=[...r.slidesEl.children].filter((e=>e.matches(`.${r.params.slideClass}, swiper-slide`)));s&&s.length&&(r.virtual.slides=[...s],e=!0,s.forEach(((e,s)=>{e.setAttribute("data-swiper-slide-index",s),r.virtual.cache[s]=e,e.remove()})))}e||(r.virtual.slides=r.params.virtual.slides),r.classNames.push(`${r.params.containerModifierClass}virtual`),r.params.watchSlidesProgress=!0,r.originalParams.watchSlidesProgress=!0,r.params.initialSlide||o()})),i("setTranslate",(()=>{r.params.virtual.enabled&&(r.params.cssMode&&!r._immediateVirtual?(clearTimeout(s),s=setTimeout((()=>{o()}),100)):o())})),i("init update resize",(()=>{r.params.virtual.enabled&&r.params.cssMode&&setCSSProperty(r.wrapperEl,"--swiper-virtual-size",`${r.virtualSize}px`)})),Object.assign(r.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let s=0;s<e.length;s+=1)e[s]&&r.virtual.slides.push(e[s]);else r.virtual.slides.push(e);o(!0)},prependSlide:function(e){const s=r.activeIndex;let t=s+1,i=1;if(Array.isArray(e)){for(let s=0;s<e.length;s+=1)e[s]&&r.virtual.slides.unshift(e[s]);t=s+e.length,i=e.length}else r.virtual.slides.unshift(e);if(r.params.virtual.cache){const e=r.virtual.cache,s={};Object.keys(e).forEach((r=>{const t=e[r],l=t.getAttribute("data-swiper-slide-index");l&&t.setAttribute("data-swiper-slide-index",parseInt(l,10)+i),s[parseInt(r,10)+i]=t})),r.virtual.cache=s}o(!0),r.slideTo(t,0)},removeSlide:function(e){if(null==e)return;let s=r.activeIndex;if(Array.isArray(e))for(let t=e.length-1;t>=0;t-=1)r.virtual.slides.splice(e[t],1),r.params.virtual.cache&&delete r.virtual.cache[e[t]],e[t]<s&&(s-=1),s=Math.max(s,0);else r.virtual.slides.splice(e,1),r.params.virtual.cache&&delete r.virtual.cache[e],e<s&&(s-=1),s=Math.max(s,0);o(!0),r.slideTo(s,0)},removeAllSlides:function(){r.virtual.slides=[],r.params.virtual.cache&&(r.virtual.cache={}),o(!0),r.slideTo(0,0)},update:o})}export{Virtual as default};
//# sourceMappingURL=virtual.mjs.map