<script setup>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';

    onMounted(() => {
        scrollAnimations();
        revealAnimations();
    })

    
    function scrollAnimations(){

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
    }

    function revealAnimations(){
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

    const newsies = [
        {
            img: "img/news/news-img-1.jpg",

            cat: "Insight",
            subcat: "General Knowledge",

            title: "Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant",
        },
        {
            img: "img/news/news-img-2.jpg",

            cat: "Insight",
            subcat: "General Knowledge",

            title: "Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant",
        },
        {
            img: "img/news/news-img-3.jpg",

            cat: "Insight",
            subcat: "General Knowledge",

            title: "Facilisi suspendisse quis ametvel sed cursus gravida ultricies habitant",
        },
    ];

    const splideOption = {
        snap: true,
        drag: 'free',
        autoWidth: true,

        pagination: false,
        arrows: false
    }

    console.log(newsies)
</script>
<template>
    <section id="news-section">
        <div class="section-header mb-3 d-flex items-center justify-between container">
            <h2>What's New</h2>
            
            <Button primary>
                Explore Now
            </Button>
        </div>

        <Splide :has-track="false" :options="splideOption">
            <SplideTrack>
                <SplideSlide class="slide" v-for="news in newsies">
                    <NewsCard :newsTitle="news.title" :newsCat="news.cat" :newsSubCat="news.subcat" :img="news.img"></NewsCard>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #news-section{
        padding: 5.8vw 0;
    }

    .splide__track{
        column-gap: $rem_1_5;
            margin-left: $col_gap_v;
    }
    .slide{
        padding: 1vw;
    }
    .slider{
        .slider-wrap{
            column-gap: $rem_1_5;
            margin-left: $col_gap_v;
        }
    }
</style>