<script>
    
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Lenis from '@studio-freight/lenis';

    export default {
        mounted: function(){
            this.lenisScroll();
        },
        methods:{
            lenisScroll(){
                const lenis = new Lenis({
                    smoothWheel: true,
                    duration: 2,
                    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    // easing: 0.1
                });

                lenis.on('scroll', ScrollTrigger.update);

                gsap.ticker.add((time) => {
                    lenis.raf(time * 1000);
                });

                gsap.ticker.lagSmoothing(0);

                const nuxtApp = useNuxtApp()

                nuxtApp.hook("page:finish", () => {
                    lenis.scrollTo(0)
                })
            }
        }

    }    
</script>
<template>
    <Header />

    <main>
        <NuxtPage></NuxtPage>
    </main>

    <Footer /> 
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: blur(1rem);
}
</style>