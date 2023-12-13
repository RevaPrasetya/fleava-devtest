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
                        trigger: '#presentation-section',
                        // pin: true,
                        // pinSpacing: false,
                        start: 'top 80%',
                        end: 'bottom top',
                        scrub: 2,
                        markers: true,
                    }
                })
                clipSection.to('#presentation-section h4 svg',{rotation: 180 });

            },
            revealAnimations(){
                let revealAnim = gsap.timeline({
                    scrollTrigger:{
                        trigger: '#presentation-section',
                        start: 'top 40%',
                        end: 'bottom top',
                        toggleActions: 'play none none reverse',
                        onLeave: () => {
                            revealAnim.timeScale(3).reverse();
                        },
                        onEnterBack: () => {
                            revealAnim.timeScale(1).restart();
                        }
                        //scrub: 1
                    }
                })

                //gsap.set('#presentation-section .line', {autoAlpha: 0});

                let poly = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                revealAnim.set('.pr-img', {autoAlpha: 0, duration: 1 , clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'})
                .set('.pr-img-highlight', {autoAlpha: 0, duration: 1 , clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'})

                .to('.pr-img-highlight', {y: 0,autoAlpha: 1, clipPath: poly, duration: 1.5, easing: defaultEasing}, 0)
                .to('.pr-img', {y: 0,autoAlpha: 1, clipPath: poly, duration: 1.5, easing: defaultEasing, stagger: 1}, 1)

                .fromTo('#presentation-section .line', 1.5 ,{y:'5vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .2}, 1.5)
                .fromTo('.pr-desc-wrap > *', 1.5 ,{y:'5vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .6}, 2);
            }
        }

    }
</script>


<template>
    <section id="presentation-section">
        <div class="container-2">
            <div class="columns">
                <div class="pr-highlight">
                    <figure class="pr-img-highlight mb-2">
                        <img src="~assets/img/presentation-section/presentation-img-3.jpg" alt="">
                    </figure>
                    <div class="pr-heading-wrap">
                        <h4>
                            <span class="line indent-2"><span class="highlight">Awaken </span>your innate</span>

                            <span class="line text-flex">
                                desire for beauty
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M18.4188 0H21.5814L20.5272 20H19.473L18.4188 0Z" fill="black"/>
                                    <path d="M18.4188 40.0002L21.5814 40.0002L20.5272 20.0003L19.473 20.0003L18.4188 40.0002Z" fill="black"/>
                                    <path d="M25.3646 0.666199L28.3364 1.74626L20.4953 20.1801L19.5047 19.8201L25.3646 0.666199Z" fill="black"/>
                                    <path d="M11.6635 38.2541L14.6353 39.3342L20.4953 20.1803L19.5047 19.8203L11.6635 38.2541Z" fill="black"/>
                                    <path d="M31.6635 3.66425L34.0862 5.6941L20.4038 20.3384L19.5962 19.6617L31.6635 3.66425Z" fill="black"/>
                                    <path d="M5.91385 34.3061L8.33652 36.3359L20.4038 20.3385L19.5962 19.6618L5.91385 34.3061Z" fill="black"/>
                                    <path d="M36.5556 8.63251L38.1369 11.3673L20.2636 20.4557L19.7365 19.5441L36.5556 8.63251Z" fill="black"/>
                                    <path d="M1.86328 28.6327L3.44457 31.3675L20.2637 20.4559L19.7366 19.5443L1.86328 28.6327Z" fill="black"/>
                                    <path d="M39.4508 14.9719L40 18.0818L20.0915 20.5182L19.9085 19.4815L39.4508 14.9719Z" fill="black"/>
                                    <path d="M3.05176e-05 21.9177L0.549206 25.0276L20.0915 20.518L19.9085 19.4814L3.05176e-05 21.9177Z" fill="black"/>
                                    <path d="M40 21.918L39.4508 25.0279L19.9085 20.5183L20.0916 19.4816L40 21.918Z" fill="black"/>
                                    <path d="M0.549255 14.9722L7.87178e-05 18.0821L19.9085 20.5184L20.0916 19.4818L0.549255 14.9722Z" fill="black"/>
                                    <path d="M38.1369 28.6324L36.5556 31.3673L19.7365 20.4557L20.2636 19.5441L38.1369 28.6324Z" fill="black"/>
                                    <path d="M3.44452 8.63232L1.86323 11.3671L19.7365 20.4555L20.2636 19.5439L3.44452 8.63232Z" fill="black"/>
                                    <path d="M34.0862 34.3058L31.6635 36.3357L19.5963 20.3382L20.4038 19.6616L34.0862 34.3058Z" fill="black"/>
                                    <path d="M8.33655 3.664L5.91387 5.69386L19.5963 20.3381L20.4038 19.6615L8.33655 3.664Z" fill="black"/>
                                    <path d="M28.3365 38.2538L25.3647 39.3338L19.5048 20.18L20.4954 19.82L28.3365 38.2538Z" fill="black"/>
                                    <path d="M14.6355 0.666016L11.6636 1.74608L19.5048 20.1799L20.4954 19.8199L14.6355 0.666016Z" fill="black"/>
                                </svg>
                            </span>
                        </h4>
                    </div>
                </div>
                <div class="pr-content">
                    <div class="pr-img-row mb-3">
                        <figure class="pr-img">
                            <img src="~assets/img/presentation-section/presentation-img-2.jpg" alt="">
                        </figure>
                        <figure class="pr-img">
                            <img src="~assets/img/presentation-section/presentation-img-1.jpg" alt="">
                        </figure>
                    </div>

                    <div class="pr-desc">
                        <div class="pr-desc-wrap">
                            <p class="mb-4">Lectus congue sed augue phasellus. Orci,curabiturlem entum ut. In risus, eu est nibh. Faucibus urna porttitor bibendum est morbi nam in sed in. Mattis id tristique blandit vestibulum venenatis commodo sodales nam. Etiam porttitor porttitor mattis duis amet, sed quisque. Purus eget tincidunt urna accumsan.</p>
                            
                            
                            <Button primary>
                                Explore Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #presentation-section{
        padding: 10vw 0;
        overflow: hidden;

        .columns{
            column-gap: 8vw;
        }
    }
    h4{
        text-align: left;
        .text-flex{
            column-gap: 40px;
        }
    }
    .pr-highlight{
        width: 35vw;
        
        .pr-img-highlight{
            height: 41.5vw;
            width: 35vw;
            overflow: hidden;
            //margin-bottom: 2rem;
        }
    }
    .pr-img-highlight, .pr-img{
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
    .pr-content{
        width: 30vw;
    }

    .pr-img-row{
        display: flex;
        width: 60vw;

        .pr-img{
            width: 33vw;
            height: 22vw;
            margin-right: 1.5rem;
        }
    }

    .pr-desc{
        text-align: left;
    }
</style>