import{d as now,i as elementTransitionEnd}from"../shared/utils.min.mjs";function freeMode(e){let{swiper:t,extendParams:o,emit:n,once:s}=e;o({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:o}=t;0===e.velocities.length&&e.velocities.push({position:o[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:o[t.isHorizontal()?"currentX":"currentY"],time:now()})},onTouchEnd:function(e){let{currentPos:o}=e;if(t.params.cssMode)return;const{params:i,wrapperEl:a,rtlTranslate:r,snapGrid:l,touchEventsData:m}=t,c=now()-m.touchStartTime;if(o<-t.minTranslate())t.slideTo(t.activeIndex);else if(o>-t.maxTranslate())t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1);else{if(i.freeMode.momentum){if(m.velocities.length>1){const e=m.velocities.pop(),o=m.velocities.pop(),n=e.position-o.position,s=e.time-o.time;t.velocity=n/s,t.velocity/=2,Math.abs(t.velocity)<i.freeMode.minimumVelocity&&(t.velocity=0),(s>150||now()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeMode.momentumVelocityRatio,m.velocities.length=0;let e=1e3*i.freeMode.momentumRatio;const o=t.velocity*e;let c=t.translate+o;r&&(c=-c);let d,u=!1;const f=20*Math.abs(t.velocity)*i.freeMode.momentumBounceRatio;let p;if(c<t.maxTranslate())i.freeMode.momentumBounce?(c+t.maxTranslate()<-f&&(c=t.maxTranslate()-f),d=t.maxTranslate(),u=!0,m.allowMomentumBounce=!0):c=t.maxTranslate(),i.loop&&i.centeredSlides&&(p=!0);else if(c>t.minTranslate())i.freeMode.momentumBounce?(c-t.minTranslate()>f&&(c=t.minTranslate()+f),d=t.minTranslate(),u=!0,m.allowMomentumBounce=!0):c=t.minTranslate(),i.loop&&i.centeredSlides&&(p=!0);else if(i.freeMode.sticky){let e;for(let t=0;t<l.length;t+=1)if(l[t]>-c){e=t;break}c=Math.abs(l[e]-c)<Math.abs(l[e-1]-c)||"next"===t.swipeDirection?l[e]:l[e-1],c=-c}if(p&&s("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=r?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),i.freeMode.sticky){const o=Math.abs((r?-c:c)-t.translate),n=t.slidesSizesGrid[t.activeIndex];e=o<n?i.speed:o<2*n?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void t.slideToClosest();i.freeMode.momentumBounce&&u?(t.updateProgress(d),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,elementTransitionEnd(a,(()=>{t&&!t.destroyed&&m.allowMomentumBounce&&(n("momentumBounce"),t.setTransition(i.speed),setTimeout((()=>{t.setTranslate(d),elementTransitionEnd(a,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(n("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,elementTransitionEnd(a,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeMode.sticky)return void t.slideToClosest();i.freeMode&&n("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||c>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})}export{freeMode as default};
//# sourceMappingURL=free-mode.mjs.map