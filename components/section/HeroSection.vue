<script>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Lenis from '@studio-freight/lenis';
    import {ref} from 'vue';
    
    gsap.registerPlugin(ScrollTrigger);

    export default {
        mounted: function() {
            this.scrollAnimations();
            this.lenisScroll();
        },
        methods: {
            scrollAnimations(){

                // let htl = gsap.timeline({
                //     ScrollTrigger:{
                //         trigger: '#hero-section',
                //         start: 'top top', 
                //         end: '+=200vh', 
                //         scrub: 2,
                //     }
                // })
                // htl.from('.parallax-bg', {y: 0}).to('.parallax-bg', {y: '-10vh'});

                gsap.to(".parallax-bg", {
                    y: "-10vh",
                    scrollTrigger: {
                        start: 'top top',
                        end:'bottom top',
                        trigger: "#hero-section",
                        scrub: 2,
                        ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
                    }
                });

            },
            lenisScroll(){
                const lenis = new Lenis({
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
    <section id="hero-section">

        <img  class="parallax-bg" src="~/assets/img/hero-section/hero-img.jpg" alt="">

        <div class="container">
        
            <a href="/" class="hero-product-card">
                <div class="hpc-detail">
                    <div class="text-flex">
                        <h6 class="mb-0">Hylauronic Booster</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="M1.62341 1H17V16.3766" stroke="white" stroke-width="2"/>
                            <path d="M17 1L1 17" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                    <p>Lectus condimentum facilisi purus tincidunt ultrices mattis vitae et. </p>
                </div>
                <figure class="hpc-img img-cover">
                    <img src="~/assets/img/hero-section/hpc-img.jpg">
                </figure>
            </a>
            <h1>
                <div class="line">Beauty Skin is a</div>
                <div class="line indent-1">Reflection of Wellness</div>
            </h1>
        </div>  

    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #hero-section{
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    #hero-section *{
        color: $white;
    }
    #hero-section {
        &::before{
            content: "";
            position: absolute;
            bottom:0;
            width: 100%;
            height: 60vh;
            opacity: 0.5;
            background: linear-gradient(0deg, #A76F48 12.92%, rgba(167, 111, 72, 0.00) 100%);
            z-index: 2;
        }
        .parallax-bg{
            position: absolute;
            min-height: 110vh;
            top: 0;
            min-width: 100%;
            z-index: 1;
            object-fit: cover;
        }
        .container{
            position: relative;
            height: 100%;
            padding-bottom: 10vh;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            z-index: 2;
        }
    }

    .hero-product-card{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        column-gap: 2vw;
        margin-bottom: -6.5vw;
        .hpc-img{
            width: 15.076vw;
            height: 9.242vw;
        }
        .hpc-detail{
            max-width: 21.212vw;

            svg{
                height: $rem_1_5;
                width: $rem_1_5;
            }
        }
    }
</style>