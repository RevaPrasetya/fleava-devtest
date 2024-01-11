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

            // function raf(time) {
            //     lenis.raf(time);
            //     requestAnimationFrame(raf);
            // }

            // requestAnimationFrame(raf);
            }
        }

    }   
</script>
<template>
    <Header />
    <NuxtPage></NuxtPage>
    <Footer />  
</template>