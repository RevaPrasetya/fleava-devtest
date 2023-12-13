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

                let newsSection = gsap.timeline({
                    scrollTrigger:{
                        trigger: '#news-section',
                        // pin: true,
                        // pinSpacing: false,
                        start: 'top 50%',
                        end: '+=800',
                        scrub: 2,
                        //markers: true,
                    }
                })
                newsSection.to('.news-card img',{
                    y: '-3vw'
                } )
                //newsSection.fromTo('#news-section h4',{scale: 1.1 }, {scale: 1 });

                

            },
            revealAnimations(){
                let revealAnim = gsap.timeline({
                    scrollTrigger:{
                        trigger: '#news-section',
                        start: 'top bottom',
                        toggleActions: 'restart none restart none',
                    }
                })
                revealAnim.set('#news-section h2',{autoAlpha: 0});
                revealAnim.fromTo('#news-section h2', 1.3 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, easing: defaultEasing}, .5)
                .fromTo('#news-section .section-header .btn', 1.3 ,{yPercent: 50, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, easing: defaultEasing}, .8)
                .fromTo('#news-section .slide', 1.3 ,{x: '20vw' ,yPercent: 10, autoAlpha: 0}, {x: '0' ,yPercent: 0, autoAlpha: 1, easing: defaultEasing, stagger: 0.3}, .8);
            }
        }

    }
</script>
<template>
    <section id="news-section">
        <div class="section-header mb-3 d-flex items-center justify-between container">
            <h2>What's New</h2>
            
            <Button primary>
                Explore Now
            </Button>
        </div>
        <div class="slider">
            <div class="slider-wrap">
                <div class="slide">
                    <div class="news-card">
                        <figure>
                            <img src="~/assets/img/news/news-img-1.jpg" alt="">
                        </figure>

                        <div class="news-details text-flex">
                            <a href="" class="text-flex news-type">Insight</a>
                            <a href="" class="news-topic">General Knowledge</a>
                        </div>
                        <h5 class="news-title">Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant</h5>
                        
                        <Button :primary="false">
                            Explore Now
                        </Button>
                    </div>
                </div>
                <div class="slide">
                    <div class="news-card">
                        <figure>
                            <img src="~/assets/img/news/news-img-2.jpg" alt="">
                        </figure>

                        <div class="news-details text-flex">
                            <a href="" class="text-flex news-type">Insight</a>
                            <a href="" class="news-topic">General Knowledge</a>
                        </div>
                        <h5 class="news-title">Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant</h5>
                        
                        <Button :primary="false">
                            Explore Now
                        </Button>
                    </div>
                </div>
                <div class="slide">
                    <div class="news-card">
                        <figure>
                            <img src="~/assets/img/news/news-img-3.jpg" alt="">
                        </figure>

                        <div class="news-details text-flex">
                            <a href="" class="text-flex news-type">Insight</a>
                            <a href="" class="news-topic">General Knowledge</a>
                        </div>
                        <h5 class="news-title">Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant</h5>
                        
                        <Button :primary="false">
                            Explore Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    #news-section{
        padding: 5.8vw 0;
    }

    .news-card{
        width: 44vw;
        figure{
            max-width: 100%;
            height: 32vw;
            margin-bottom: $rem_2;
            overflow: hidden;
            img{
                height: calc(100% + 5vw)
            }
        }
        .news-details {
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            a:first-child::after{
                content: "";
                height: $rem_1_5;
                width: 1px;
                background: $black;
            }
        }
        .news-title{
            margin-bottom: 3rem;
        }

    }

    .slider{
        .slider-wrap{
            column-gap: $rem_1_5;
            margin-left: $col_gap_v;
        }
    }
</style>