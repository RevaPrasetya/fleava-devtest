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

                    prodHover.fromTo(pc.querySelectorAll('h4'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3})
                    .fromTo(pc.querySelectorAll('p'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3}, 1.5)
                    .to(pc.querySelectorAll('.product-img'),2,{minWidth: '17vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img'), 1.5 ,{yPercent: -50 , top: '50%',duration: 1, easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img'),1 ,{ y: '3vw' , height: '23.5vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .to(pc.querySelectorAll('.product-img img'), 1 ,{minHeight: '23.5vw', minWidth: '17vw', width: '17vw', easing: 'cubic-bezier(0.33, 1, 0.68, 1)'}, 0)
                    .fromTo(pc.querySelectorAll('.btn-icon'), 1.5 ,{y:'3vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .3}, 1)

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
                       Faucibusue
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
                       Faucibusue
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
            row-gap: 65%;
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
                    right: -10vw;
                    bottom: 50%;
                    padding: 0;


                    height: 4.8vw;
                    width: 4.8vw;
                    background: $white;
                    svg{
                        transform: rotateZ(45deg);
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

                text-align: center;

            }
            h4{
                margin: 0 auto;
                width: 100%;
            }
            p{

                    max-width: 33vw;
            }
        }
    }
</style>