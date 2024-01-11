<script setup>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    
    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';

    onMounted(() => {
        scrollAnimations();
        revealAnimations();
    })

    function scrollAnimations(){
        

        let storySection = gsap.timeline({
            scrollTrigger:{
                trigger: '#story-section-grid',
                // pin: true,
                // pinSpacing: false,
                start: 'top 50%',
                end: 'bottom top',
                scrub: 2,
                //markers: true,
            }
        })


        storySection.to('#story-section-grid h3 svg', {
            rotation: 180
        } )
        gsap.utils.toArray("#story-section-grid .story-card img").forEach(function(el){

            gsap.to(el, {
            y: "20%",
            scrollTrigger: {
                start: 'top 80%',
                end:'bottom top',
                trigger: el,
                scrub: 1,
                ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
            }
        });
        
        })

        
        gsap.utils.toArray("#story-section-grid .story-card p").forEach(function(el){

            gsap.from(el, {
                y: "4vw",
                autoAlpha: 0,
                duration: 1.5,
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: el,
                    ease: 'Power3.inOut'
                }
            });

        })
                

    }

    
    function revealAnimations(){
        let revealAnim = gsap.timeline({
            scrollTrigger:{
                trigger: '#story-section-grid',
                toggleActions: 'restart none restart none',
            }
        })
        revealAnim.fromTo('#story-section-grid .title-wrap > *', 1 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, stagger: .75, easing: "Power3.inOut"});

        // let revealAbout = gsap.timeline({
        //     scrollTrigger:{
        //         trigger: '#about-section',
        //         toggleActions: 'restart none restart none',
        //     }
        // })
        // revealAbout.fromTo('#about-section .container > *', 1 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, stagger: .75, easing: "Power3.inOut"});

    }
</script>

<template>
    <section id="story-section-grid">
        <div class="container container-grid">
            <div class="title-wrap">
                
                <h3 class="mb-2">
                    <span class="line"><span class="highlight">Ornare </span>sem ornare dyamin</span>

                    <span class="line  indent-3 text-flex">
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
                        vulputate diam Dons
                    </span>
                </h3>

                <p class="indent-1">Ornare sem ornare diam in nulla fermentum ut. Velit mollis vulputate diam donec nisi arcu praesent. Morbi ornare quis ipsum, fames nec convallis tristique mauris volutpat.</p>

            </div>
            <div class="story-card">
                <figure class="mb-2">
                    <img src="/img/product-detail/story/story-1.jpg" alt="">
                </figure>
                <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices</p>
            </div>
            <div class="story-card">
                <figure class="mb-2">
                    <img src="/img/product-detail/story/story-2.jpg" alt="">
                </figure>
                <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. </p>
            </div>
            <div class="story-card">
                <figure class="mb-2">
                    <img src="/img/product-detail/story/story-3.jpg" alt="">
                </figure>
                <p>Elementum ut rutrum tellus vulputate augue odio mattis Arcu</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    #story-section{
        padding: 8vw 0;
        height: 95vw;
        .story-card{
        position: absolute;
        p{
            width: 100%;
            max-width: 22vw;
        }
        figure{
            width: 100%;
        }

        &:nth-child(1){
            width: 22vw;
        }
        &:nth-child(2){
            width: 30vw;
            right: 18vw;
            top: 21.5vw;
        }
        &:nth-child(3){
            width: 22vw;
            top: 40vw;
            left: 18vw;
        }
    }
    }
    #story-section .container{
        position: relative;
    }
    .title-wrap{ 
        position: absolute;
        right: 10vw;
        p{
            max-width: 38vw;
        }
    }

    .story-wrap{
        height: 100%;
        width: 100%;
    }

    .story-card figure{
        position: relative;
        overflow: hidden;
        height: 100%;

        img{
            position: absolute;
            height: calc(125%);
            bottom: 0;
        }
    }
    

    
    #story-section-grid{
        padding: 8vw 0;
    }

    .container-grid{
        display: grid;
        grid-template-rows: repeat(8, 10vw);
        grid-template-columns: repeat(10, 10%);

        .title-wrap{
            position: relative;
            grid-area : 1 / 5 / span 2 / -1;
        }

        .story-card:nth-child(2){
            grid-area: 1 / 1 / span 3 / span 2;
        }
        .story-card:nth-child(3){
            grid-area: 3 / 5 / span 2 / span 4;
        }
        .story-card:nth-child(4){
            grid-area: 5 / 2 / span 3 / span 2;
        }
    }
</style>