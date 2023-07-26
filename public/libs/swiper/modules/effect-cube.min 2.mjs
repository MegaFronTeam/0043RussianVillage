import{e as effectInit}from"../shared/effect-init.min.mjs";import{c as createElement}from"../shared/utils.min.mjs";function EffectCube(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const r=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),r=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=createElement("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"left":"top")).split(" ")),e.append(a)),r||(r=createElement("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"right":"bottom")).split(" ")),e.append(r)),a&&(a.style.opacity=Math.max(-t,0)),r&&(r.style.opacity=Math.max(t,0))};effectInit({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:o,height:i,rtlTranslate:l,size:d,browser:n}=t,p=t.params.cubeEffect,c=t.isHorizontal(),w=t.virtual&&t.params.virtual.enabled;let h,f=0;p.shadow&&(c?(h=t.wrapperEl.querySelector(".swiper-cube-shadow"),h||(h=createElement("div","swiper-cube-shadow"),t.wrapperEl.append(h)),h.style.height=`${o}px`):(h=e.querySelector(".swiper-cube-shadow"),h||(h=createElement("div","swiper-cube-shadow"),e.append(h))));for(let e=0;e<a.length;e+=1){const t=a[e];let s=e;w&&(s=parseInt(t.getAttribute("data-swiper-slide-index"),10));let o=90*s,i=Math.floor(o/360);l&&(o=-o,i=Math.floor(-o/360));const n=Math.max(Math.min(t.progress,1),-1);let h=0,m=0,u=0;s%4==0?(h=4*-i*d,u=0):(s-1)%4==0?(h=0,u=4*-i*d):(s-2)%4==0?(h=d+4*i*d,u=d):(s-3)%4==0&&(h=-d,u=3*d+4*d*i),l&&(h=-h),c||(m=h,h=0);const b=`rotateX(${c?0:-o}deg) rotateY(${c?o:0}deg) translate3d(${h}px, ${m}px, ${u}px)`;n<=1&&n>-1&&(f=90*s+90*n,l&&(f=90*-s-90*n)),t.style.transform=b,p.slideShadows&&r(t,n,c)}if(s.style.transformOrigin=`50% 50% -${d/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${d/2}px`,p.shadow)if(c)h.style.transform=`translate3d(0px, ${o/2+p.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`;else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,r=p.shadowOffset;h.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${i/2+r}px, ${-i/2/a}px) rotateX(-90deg)`}const m=(n.isSafari||n.isWebView)&&n.needPerspectiveFix?-d/2:0;s.style.transform=`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${m}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);r(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}export{EffectCube as default};
//# sourceMappingURL=effect-cube.mjs.map