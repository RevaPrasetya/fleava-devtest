<script setup>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);

    const product = defineProps({
        title1: String,
        description1: String,

        title2: String,
        description2: String,

        link: String,
        img: String
    })

    const {title1, description1, title2, description2, link, img} = product;

    onMounted(() => {
        scrollAnimations();
    })

    
    function scrollAnimations(){
        gsap.to(".parallax-bg", {
            y: "23vh",
            scrollTrigger: {
                start: 'top top',
                end:'bottom top',
                trigger: "#hero-section",
                scrub: 0,
                ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
            }
        });
    }
</script>

<template>
    <section id="hero-section">
    
        <img  class="parallax-bg" :src="product.img" alt="">

        <div class="container-1">
            
        <h1 class="mb-1">{{ product.title1 }}</h1>
        <p class="mb-2" >{{ product.description1 }}</p>

        <Button primary black>Explore Product</Button>
        </div>
    </section>

    <section id="about-section">
        <div class="container">
            <h4 class="mb-2">{{ product.title2  }}</h4>
            <p class="">{{ product.description2 }}</p>    
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #hero-section {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    #hero-section *{
        color: $white;
    }

    #about-section{
        padding: 6.2vw 0;
        text-align: center;
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h4{
            max-width: 35vw;
        }
        p{
            max-width: 30vw;
        }
    }
    
    #hero-section {
        .parallax-bg{
            position: absolute;
            min-height: 100vh;
            min-width: 100%;
            bottom: -20vh;
            z-index: 1;
        }
        .container-1{
            position: relative;
            height: 100%;
            padding-bottom: 10vh;

            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
        }

        h1{
            line-height: 1.2;
            max-width: 50vw;
        }
        p{
            max-width: 25vw;
        }
    }
</style>