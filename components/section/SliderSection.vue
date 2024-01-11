<script setup>

    import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';

    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';

    const section = defineProps({
        title: String,
        description: String,
        bgColor : String
    })
     
    const { title, description } = section;

    onMounted(() => {
        //scrollAnimations();
        revealAnimations();
    })
    
    function revealAnimations(){
        let revealAnim = gsap.timeline({
            scrollTrigger:{
                trigger: '#products-section',
                start: 'top bottom',
                toggleActions: 'restart none restart none',
            }
        })
        revealAnim.set('#products-section h4',{autoAlpha: 0});
        revealAnim.fromTo('#products-section h4', 1.3 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, easing: defaultEasing}, .5)
        .fromTo('#products-section .section-desc p', 1.3 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, easing: defaultEasing}, 2);
    }
    
    function scrollAnimations(){

        let clipSection = gsap.timeline({
            scrollTrigger:{
                trigger: '#products-section',
                // pin: true,
                // pinSpacing: false,
                start: 'top bottom',
                end: '+=800',
                scrub: 2,
                //markers: true,
            }
        })
        clipSection.to('#products-section',{
            clipPath:  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            easing: defaultEasing,
        } )

        //clipSection.fromTo('#products-section h4',{scale: 1.1 }, {scale: 1 });

    }

    const products = [
        {
            id: 1,
            img: "/img/product/product-1.jpg",
            label: "Featured Product", 
            title: "Garoa Ampoule Cream",
        },
        {
            id: 2,
            img: "/img/product/product-2.jpg",
            label: "Featured Product", 
            title: "Garoa Atlantic Chamomile",
        },
        {
            id: 3,
            img: "/img/product/product-3.jpg",
            label: "Featured Product", 
            title: "Garoa Atlantic Cedar",
        },
    ]

    const SplideOptions = {
        type: 'loop',
        padding: '10vw',
        focus: 'center',
        snap: true,
        drag: 'free',
        autoWidth: true,

        pagination: false,
        arrows: false
    }

    function splideMoved(newIndex){
        console.log("yo its movin");
    }

    console.log("hmmmmmmmmmmmmm")
</script>

<template>
    
    <section id="products-section" :style="{backgroundColor: bgColor}">
        <div class="section-header">
            <div class="container">
                <h4>{{ section.title }}</h4>
            </div>
        </div>
        <div class="slider">
            <Splide :has-track="false" @splide:move="splideMoved" :options="SplideOptions"
            >
                <SplideTrack>
                    <SplideSlide class="slide" v-for="product in products">
                        <SliderCard :key="product.id" :img="product.img" :label="product.label" :link="`/products/${product.id}`" :title="product.title"></SliderCard>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <div class="section-desc">
            <div class="container">
                <p>{{ section.description }}</p>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    .swiper-slide {
        width: auto !important;
    }
    .swiper-slide:nth-child(2n) {
      width: auto;
    }

    .swiper-slide:nth-child(3n) {
      width: auto;
    }

    #products-section{
        background: $green;
        //clip-path: polygon(20% 0, 80% 0%, 80% 100%, 20% 100%);
        overflow: hidden;

        h4{
            margin: 0 auto;
            max-width: 55vw;
        }
        h2,h4,p{
            color: $white;
        }
        .section-header,.section-desc{
            h4,p{
                //visibility: hidden;
                text-align: center;
            }
        }
    }
    .section-header{
        padding: 5.8vw 0;
    }
    .section-desc{
        padding-top: 5vw;
        padding-bottom: 5.8vw;

        .container{
            max-width: 38vw;
        }
    }
    .product-card{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48vw;
        height: 30vw;
        .product-img{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }
        .product-details{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 2;
            .product-label{
                margin-bottom: 1rem;
            }
            .product-title{
                margin-bottom: 3rem
            }
        }
    }
    .slide{
        height: 31vw;
        padding: 2vw;
        .product-details{
            opacity: 0;
        }
        
        &.is-active{
            .product-details{
                opacity: 1;
            }
        }
    }
</style>