<script>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);

    export default {
        mounted: function() {
            this.scrollAnimations();
            this.revealAnimations();
        },
        methods: {
            scrollAnimations(){
                // let parallaxAnim = gsap.timeline({
                //     scrollTrigger:{
                //         trigger: '#about-section',
                //         start: 'top top',
                //         end: 'bottom top',
                //         toggleActions: 'restart none restart restart',
                //         scrub: 2
                //     }
                // })
                // document.querySelectorAll("[data-parallax]").forEach(img => {
                //     let pDuration = img.getAttribute("data-parallax");
                //     parallaxAnim.fromTo(img, {y: "20vh"}, { y: 0});
                // })

                document.querySelectorAll("[data-parallax]").forEach(img => {
                    let pDuration = img.getAttribute("data-parallax");
                    
                    gsap.to(img, {
                        y: pDuration * -10 + "px" ,
                        scrollTrigger: {
                            start: 'top 80%',
                            end:'bottom top',
                            trigger: "#about-section .col",
                            scrub: true,
                            ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
                        }
                    });
                })

            },
            revealAnimations(){
                let revealAnim = gsap.timeline({
                    scrollTrigger:{
                        trigger: '#about-section',
                        start: 'top bottom',
                        toggleActions: 'restart none restart none',
                    }
                })
                revealAnim.fromTo('#about-section .col > *', 2, {yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, stagger: 1})
            }
        }

    }
</script>

<template>
    <section id="about-section">
        <div class="container">
            <div class="columns">
                <div class="col">
                    <h4>A highly curated selection of products we believe in</h4>
                    <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna. Nunc magna amet lorem ac non lectus eget.</p>
                </div>
            </div>
            <div class="parallax-img pimg-1">
                <img data-parallax="2" class="secondary-1" src="~assets/img/about-section/secondary-img-1.jpg" alt="">
                <img data-parallax="10" class="primary-1" src="~assets/img/about-section/primary-img-1.jpg" alt="">

            </div>
            <div class="parallax-img pimg-2">
                <img data-parallax="5" class="secondary-2" src="~assets/img/about-section/secondary-img-2.jpg" alt="">
                <img data-parallax="15" class="primary-2" src="~assets/img/about-section/primary-img-2.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss">
    @import '~/assets/scss/_variables.scss';
    #about-section{
        margin-top: 13vw;
        margin-bottom: 12.7vw;
        height: 49vw;

        .container{
            position: relative;
            height: 100%;
        }
    }

    .columns{
        height: 100%;
        text-align: center;
        justify-content: center;

        .col{
            position: sticky;
            top: 20vw;
            z-index: 2;
            max-width: 38vw;
            h4{
                margin-bottom: $rem_2;
            }
            p{                
                max-width: 36vw;
            }
        }
    }
    
    .parallax-img{
        z-index: -1;

        &.pimg-1{
            
            img{
                position: absolute;

                &.secondary-1{
                    height: 35.5vw;
                    right: 2.5vw;
                    bottom: 0;
                }
                &.primary-1{
                    height: 17vw;
                    right: 10.5vw;
                    bottom: 6vw;
                }
            }
        }
        &.pimg-2{
            top: 20vh;

            img{
                position:absolute;
                
                &.secondary-2{
                    top: 0;
                    height: 35vw;
                    left: 0;
                }
                &.primary-2{
                    top: 24.5vw;
                    height: 24vw;
                    left: 3.2vw;
                }
            }
        }
    }
    
</style>