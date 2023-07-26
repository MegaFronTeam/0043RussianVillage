import{e as effectInit}from"../shared/effect-init.min.mjs";import{e as effectTarget}from"../shared/effect-target.min.mjs";import{e as effectVirtualTransitionEnd}from"../shared/effect-virtual-transition-end.min.mjs";import{k as getSlideTransformEl}from"../shared/utils.min.mjs";function EffectFade(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}});effectInit({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides[a];let r=-e.swiperSlideOffset;t.params.virtualTranslate||(r-=t.translate);let i=0;t.isHorizontal()||(i=r,r=0);const f=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=effectTarget(s,e);n.style.opacity=f,n.style.transform=`translate3d(${r}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>getSlideTransformEl(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),effectVirtualTransitionEnd({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}export{EffectFade as default};
//# sourceMappingURL=effect-fade.mjs.map