<script>
  import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';
    
    gsap.registerPlugin(ScrollTrigger);

    export default {
        mounted: function() {
            this.scrollAnimations();
        },
        methods: {
            scrollAnimations(){

                let darkclr = '#000';
                let lightclr = '#fff';
                //let headScroll = gsap.timeline({});
                // gsap.to("header", {
                //     color: darkclr,
                //     stroke: darkclr,
                //     duration: 1,
                //     scrollTrigger: {
                //         trigger: "#about-section",
                //         start: 'top top',
                //         end:'bottom top',
                //         easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
                //     }
                // });
                // gsap.to("header", {
                //     color: lightclr,
                //     stroke: lightclr,
                //     duration: 1,
                //     scrollTrigger: {
                //         trigger: "#products-section",
                //         start: 'top top',
                //         end:'bottom top',
                //         easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
                //         onEnterBack: () => {
                //             gsap.timeScale(1).restart();
                //         }
                //     }
                // });

            },
        }

    }
</script>

<template>
    <header>
        <div class="container-fluid">
            <a href="/" class="">
                <h5>Earth</h5>
            </a>
            <button class="menu-btn">
                <p>MENU</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M0 1L16 1" stroke-width="2"/>
                    <path d="M0 13L24 13" stroke-width="2"/>
                    </svg>
            </button>
        </div>
    </header>

    <div class="menu">
    
    </div>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    header{
        position: fixed;
        top: 0;
        width: 100%;
        color: $white;
        stroke: $white;
        //mix-blend-mode: difference;
        padding: $rem_1 0;

        z-index: 100;

        .container-fluid{
            display: flex;
            justify-content: space-between;
        }
    }
    button.menu-btn{
        display: inline-flex;
        align-items: center;
        gap: $rem_1_5;
        background: none;
        outline: none;
        border: none;
    }
    .menu{
        display: none;
        background: $dark_green;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
</style>