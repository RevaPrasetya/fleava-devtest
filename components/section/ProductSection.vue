<script>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';


    export default {
        mounted: function() {
            this.animProductSect();
        },
        methods: {
            animProductSect(){

                let revealAnim = gsap.timeline({
                    scrollTrigger:{
                        trigger: '#product-section',
                        start: 'top 80%',
                        end: 'bottom top',
                        toggleActions: 'play none none restart',
                        //scrub: 1
                    }
                })

                

                let prodCol = document.querySelectorAll('.product-col');
                prodCol.forEach(pc => {
                    let productSection = gsap.timeline({
                        scrollTrigger: {
                            start: 'top bottom',
                            end:'bottom top',
                            trigger: "#product-section",
                            scrub: 2,
                            easing: defaultEasing 
                        }
                    })
                    productSection.to(pc.querySelectorAll('.product-img img'),{y: '-4vw' });

                    let prodHover = gsap.timeline({
                        paused: true,
                    });

                    let pimgWidth = document.querySelector('.product-img').offsetWidth;

                    prodHover.fromTo(pc.querySelectorAll('.line'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3})
                    .fromTo(pc.querySelectorAll('p'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3}, 1.5)
                    //.to(pc.querySelectorAll('.product-img'), 1.5 ,{yPercent: -50 , top: '50%',duration: 1, easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img'),1 ,{ y: '4vw' , height: '23.5vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img'),2,{minWidth: '17vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img img'), 1 ,{minHeight: '23.5vw', minWidth: '17vw', width: '17vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .fromTo(pc.querySelectorAll('.btn-icon'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3}, 1)

                    gsap.to(pc.querySelectorAll('.line svg'), {rotation: 360, duration: 30, repeat: -1})

                    pc.addEventListener('mouseover', function(){
                        //pc.classList.add('active');
                        prodHover.timeScale(1).play();
                    })
                    
                    pc.addEventListener('mouseleave', function(){
                        pc.classList.remove('active');
                        prodHover.timeScale(1).reverse();
                        //prodHover.restart();
                        //prodHover.pause();
                    })
                })
            }
        }

    }
</script>

<template>
    <section id="product-section">
        <div class="columns">
            <div class="col-1-2">
                <div class="product-col">
                    <h4>
                        <div class="line">Fulfill Your</div>
                        <div class="line text-flex indent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M18.4188 0H21.5813L20.5271 20H19.473L18.4188 0Z" fill="white"/>
                            <path d="M18.4188 40L21.5813 40L20.5272 20L19.473 20L18.4188 40Z" fill="white"/>
                            <path d="M25.3646 0.66626L28.3365 1.74632L20.4953 20.1801L19.5047 19.8201L25.3646 0.66626Z" fill="white"/>
                            <path d="M11.6635 38.2542L14.6354 39.3342L20.4953 20.1804L19.5047 19.8203L11.6635 38.2542Z" fill="white"/>
                            <path d="M31.6635 3.66406L34.0862 5.69392L20.4038 20.3382L19.5962 19.6616L31.6635 3.66406Z" fill="white"/>
                            <path d="M5.91388 34.306L8.33655 36.3359L20.4038 20.3384L19.5963 19.6618L5.91388 34.306Z" fill="white"/>
                            <path d="M36.5556 8.63257L38.1369 11.3674L20.2636 20.4558L19.7365 19.5442L36.5556 8.63257Z" fill="white"/>
                            <path d="M1.86328 28.6328L3.44457 31.3676L20.2637 20.456L19.7366 19.5444L1.86328 28.6328Z" fill="white"/>
                            <path d="M39.4507 14.9719L39.9999 18.0818L20.0915 20.5182L19.9084 19.4815L39.4507 14.9719Z" fill="white"/>
                            <path d="M6.10352e-05 21.9177L0.549237 25.0276L20.0915 20.518L19.9085 19.4814L6.10352e-05 21.9177Z" fill="white"/>
                            <path d="M40 21.9177L39.4508 25.0276L19.9085 20.518L20.0916 19.4814L40 21.9177Z" fill="white"/>
                            <path d="M0.549255 14.9719L7.87178e-05 18.0818L19.9085 20.5182L20.0916 19.4815L0.549255 14.9719Z" fill="white"/>
                            <path d="M38.1368 28.6324L36.5556 31.3673L19.7365 20.4557L20.2635 19.5441L38.1368 28.6324Z" fill="white"/>
                            <path d="M3.44447 8.63232L1.86318 11.3671L19.7365 20.4555L20.2636 19.5439L3.44447 8.63232Z" fill="white"/>
                            <path d="M34.0862 34.3059L31.6636 36.3358L19.5963 20.3383L20.4039 19.6616L34.0862 34.3059Z" fill="white"/>
                            <path d="M8.33655 3.66394L5.91387 5.69379L19.5963 20.3381L20.4038 19.6614L8.33655 3.66394Z" fill="white"/>
                            <path d="M28.3366 38.2537L25.3647 39.3337L19.5048 20.1799L20.4954 19.8198L28.3366 38.2537Z" fill="white"/>
                            <path d="M14.6355 0.665771L11.6637 1.74584L19.5048 20.1797L20.4954 19.8197L14.6355 0.665771Z" fill="white"/>
                            </svg>
                            Hydration
                        </div>
                    </h4>
                    <figure class="product-img">
                        <img src="~/assets/img/product-section/product-s-1.jpg" alt="" >
                        <div class="btn btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                            <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </figure>
                    <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna.</p>
                </div>
            </div>
            <div class="col-1-2">
                <div class="product-col">
                    <h4>
                        <div class="line">Fulfill Your</div>
                        <div class="line text-flex indent-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M18.4188 0H21.5813L20.5271 20H19.473L18.4188 0Z" fill="white"/>
                            <path d="M18.4188 40L21.5813 40L20.5272 20L19.473 20L18.4188 40Z" fill="white"/>
                            <path d="M25.3646 0.66626L28.3365 1.74632L20.4953 20.1801L19.5047 19.8201L25.3646 0.66626Z" fill="white"/>
                            <path d="M11.6635 38.2542L14.6354 39.3342L20.4953 20.1804L19.5047 19.8203L11.6635 38.2542Z" fill="white"/>
                            <path d="M31.6635 3.66406L34.0862 5.69392L20.4038 20.3382L19.5962 19.6616L31.6635 3.66406Z" fill="white"/>
                            <path d="M5.91388 34.306L8.33655 36.3359L20.4038 20.3384L19.5963 19.6618L5.91388 34.306Z" fill="white"/>
                            <path d="M36.5556 8.63257L38.1369 11.3674L20.2636 20.4558L19.7365 19.5442L36.5556 8.63257Z" fill="white"/>
                            <path d="M1.86328 28.6328L3.44457 31.3676L20.2637 20.456L19.7366 19.5444L1.86328 28.6328Z" fill="white"/>
                            <path d="M39.4507 14.9719L39.9999 18.0818L20.0915 20.5182L19.9084 19.4815L39.4507 14.9719Z" fill="white"/>
                            <path d="M6.10352e-05 21.9177L0.549237 25.0276L20.0915 20.518L19.9085 19.4814L6.10352e-05 21.9177Z" fill="white"/>
                            <path d="M40 21.9177L39.4508 25.0276L19.9085 20.518L20.0916 19.4814L40 21.9177Z" fill="white"/>
                            <path d="M0.549255 14.9719L7.87178e-05 18.0818L19.9085 20.5182L20.0916 19.4815L0.549255 14.9719Z" fill="white"/>
                            <path d="M38.1368 28.6324L36.5556 31.3673L19.7365 20.4557L20.2635 19.5441L38.1368 28.6324Z" fill="white"/>
                            <path d="M3.44447 8.63232L1.86318 11.3671L19.7365 20.4555L20.2636 19.5439L3.44447 8.63232Z" fill="white"/>
                            <path d="M34.0862 34.3059L31.6636 36.3358L19.5963 20.3383L20.4039 19.6616L34.0862 34.3059Z" fill="white"/>
                            <path d="M8.33655 3.66394L5.91387 5.69379L19.5963 20.3381L20.4038 19.6614L8.33655 3.66394Z" fill="white"/>
                            <path d="M28.3366 38.2537L25.3647 39.3337L19.5048 20.1799L20.4954 19.8198L28.3366 38.2537Z" fill="white"/>
                            <path d="M14.6355 0.665771L11.6637 1.74584L19.5048 20.1797L20.4954 19.8197L14.6355 0.665771Z" fill="white"/>
                            </svg>
                            Hydration
                        </div>
                    </h4>
                    <figure class="product-img">
                        <img src="~/assets/img/product-section/product-s-2.jpg" alt="" >
                        <div class="btn btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                            <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </figure>
                    <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #product-section{
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
    h4{
        text-align: left;
        .text-flex{
            column-gap: $rem_2;
        }
    }
    .columns{
        column-gap: 0px;
        margin: 0px;
        height: 100%;
        .col-1-2{
            background: $dark_chocolate;
            margin: 0;
        }
        .product-col{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 48.5%;
            position: relative;
            width: 100%;
            height: 100%;
            .product-img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: calc(100vh + 8vw );
                min-width: 100%;
                img{
                    object-fit: cover;
                }
                .btn-icon{
                    position: absolute;
                    right: -2.4vw;
                    bottom: 5vw;
                    padding: 0;


                    height: 4.8vw;
                    width: 4.8vw;
                    background: $white;
                    svg{
                        height: $rem_1;
                        width: $rem_1;
                    }
                    path{
                        stroke: $black;
                    }
                }
            }
            h4,p{
                position: relative;
                z-index: 2;
                color: $white;
                opacity: 1;
                pointer-events: none;
            }
            h4{
                
                //align-self: flex-start;
                transform: translateX(-5.7rem);
            }
            p{
                
                    max-width: 33vw;
            }

            &.active{
                // h4,p,.btn-icon{
                //     pointer-events: all;
                //     opacity: 1;
                // }
                // h4{
                //     //align-self: flex-start;
                //     transform: translateX(-5.7rem);
                // }
                // p{
                //     max-width: 33vw;
                // }
                // .product-img{
                //     top: 50%;
                //     transform:  translate(-50%, -50%);
                //     height: 23.5vw;
                //     //min-width: initial;
                //     width: 17vw;

                //     transition:ease 2s all;
                // }
            }
        }
    }
</style>