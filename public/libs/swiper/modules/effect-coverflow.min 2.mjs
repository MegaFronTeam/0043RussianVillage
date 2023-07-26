import{c as createShadow}from"../shared/create-shadow.min.mjs";import{e as effectInit}from"../shared/effect-init.min.mjs";import{e as effectTarget}from"../shared/effect-target.min.mjs";import{k as getSlideTransformEl}from"../shared/utils.min.mjs";function EffectCoverflow(e){let{swiper:t,extendParams:s,on:r}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}});effectInit({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:e,height:s,slides:r,slidesSizesGrid:o}=t,a=t.params.coverflowEffect,i=t.isHorizontal(),l=t.translate,f=i?e/2-l:s/2-l,d=i?a.rotate:-a.rotate,c=a.depth;for(let e=0,t=r.length;e<t;e+=1){const t=r[e],s=o[e],l=(f-t.swiperSlideOffset-s/2)/s,h="function"==typeof a.modifier?a.modifier(l):l*a.modifier;let n=i?d*h:0,w=i?0:d*h,p=-c*Math.abs(h),m=a.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(a.stretch)/100*s);let y=i?0:m*h,S=i?m*h:0,g=1-(1-a.scale)*Math.abs(h);Math.abs(S)<.001&&(S=0),Math.abs(y)<.001&&(y=0),Math.abs(p)<.001&&(p=0),Math.abs(n)<.001&&(n=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0);const b=`translate3d(${S}px,${y}px,${p}px)  rotateX(${w}deg) rotateY(${n}deg) scale(${g})`;if(effectTarget(a,t).style.transform=b,t.style.zIndex=1-Math.abs(Math.round(h)),a.slideShadows){let e=i?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),s=i?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=createShadow("coverflow",t,i?"left":"top")),s||(s=createShadow("coverflow",t,i?"right":"bottom")),e&&(e.style.opacity=h>0?h:0),s&&(s.style.opacity=-h>0?-h:0)}}},setTransition:e=>{t.slides.map((e=>getSlideTransformEl(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}export{EffectCoverflow as default};
//# sourceMappingURL=effect-coverflow.mjs.map