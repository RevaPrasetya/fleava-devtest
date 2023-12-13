<script>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';

    export default {
        mounted: function() {
            this.scrollAnimations();
            this.revealAnimations();
        },
        methods: {
            scrollAnimations(){

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

            },
            revealAnimations(){
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
        }

    }
</script>

<template>
    <section id="products-section">
        <div class="section-header">
            <div class="container">
                <h4>A highly curated selection of <br> products we believe in</h4>
            </div>
        </div>
        <div class="slider">
            <div class="slider-wrap">
                <div class="slide">
                    <div class="product-card">
                        <figure class="product-img">
                            <img src="~/assets/img/product/product-1.jpg" alt="">
                        </figure>
                        <div class="product-details">
                            <p class="product-label">OUR FEATURED PRODUCTS</p>
                            <h2 class="product-title">Daily Skincare</h2>
                            <Button primary white>
                                Explore Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="slide slide-active">
                    <div class="product-card">
                        <figure class="product-img">
                            <img src="~/assets/img/product/product-3.jpg" alt="">
                        </figure>
                        <div class="product-details">
                            <p class="product-label">OUR FEATURED PRODUCTS</p>
                            <h2 class="product-title">Daily Skincare</h2>
                            
                            <Button primary white>
                                Explore Now
                            </Button>
                            
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="product-card">
                        <figure class="product-img">
                            <img src="~/assets/img/product/product-2.jpg" alt="">
                        </figure>
                        <div class="product-details">
                            <p class="product-label">OUR FEATURED PRODUCTS</p>
                            <h2 class="product-title">Daily Skincare</h2>
                            
                            <Button primary white>
                                Explore Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-desc">
            <div class="container">
                <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna. Nunc magna amet lorem ac non lectus eget.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #products-section{
        background: $dark_green;
        clip-path: polygon(20% 0, 80% 0%, 80% 100%, 20% 100%);
        overflow: hidden;

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
    .slider{
        height: 31vw;

        .slider-wrap{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            column-gap: 3rem;
        }

        .slide:not(.slide-active){
            .product-details{
                display: none;
            }
        }
    }
</style>