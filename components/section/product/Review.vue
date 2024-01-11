<script setup>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from "vue";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        scrollAnimations();
        numCounterAnimation();
    })

    
    function scrollAnimations(){
        gsap.to(".parallax-bg", {
            y: "30vh",
            scrollTrigger: {
                start: 'top bottom',
                end:'bottom top',
                trigger: "#review-img",
                scrub: 1,
                ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
            }
        });
    }

    function numCounterAnimation(){
        gsap.from(".count-rating", {
            innerText: 4,
            duration: 2.5,
            snap: {
                innerText: 0.1
            },
            scrollTrigger: {
                start: 'top bottom',
                trigger: "#review-section",
            }
        })
        gsap.from(".count-amount", {
            innerText: 1400,
            duration: 2,
            snap: {
                innerText: 1
            },
            scrollTrigger: {
                start: 'top bottom',
                trigger: "#review-section",
            }
        })
    }


    const reviews = [
        {
            date: "14/02/2022",
            username : "Kayala Sidmore",
            rating: 5,
            description: "I'm amazed at how positively and how quickly my very sensitive/reactive skin has responded to this product. It's clearer, softer and smoother. Love it!",
            helpfulAgree: 4,
            helpfulDisagree: 0
        },
        {
            date: "14/02/2022",
            username : "Adelaide Harmony",
            rating: 5,
            description: "Amet pellentesque varius congue et. Semper a rhoncus mauris nunc et tellus. Aenean sed aliquet imperdiet magnis nulla tristique. Erat lectus quam blandit in. Vestibulum tellus velit nisl blandit nunc dictum.",
            helpfulAgree: 2,
            helpfulDisagree: 0
        },
    ]

</script>

<template>
    <section id="review-img">
        <img  class="parallax-bg" src="/img/product-detail/review/review-bg.jpg" alt="">
    </section>
    <section id="review-section">
        <div class="container-3">
            <div class="review-summary">
                <div class="r-info total-review">
                    <h3 class="playfair mb-1 count-amount">1485</h3>
                    <p>Total Reviews</p>
                </div>
                <div class="r-info avg-rating">
                    <div class="rating mb-1">
                        <h3 class="playfair count-rating">4.9</h3>
                        <NuxtRating class="mt-1" :read-only="true" :ratingValue="4.5" :activeColor="'#000000'" :ratingSize="'2vw'"/>
                    </div>
                    <p>Average Rating</p>
                </div>
                <div>
                    <Button primary black >Write a review</Button>
                </div>
            </div>
            <div class="review-item">
                <ReviewCard v-for="review in reviews" 
                :date="review.date"
                :username="review.username"
                :rating="review.rating"
                :description="review.description"
                :helpfulAgree="review.helpfulAgree"
                :helpfulDisagree="review.helpfulDisagree"
         ></ReviewCard>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    
    #review-img {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    #review-img {
        .parallax-bg{
            position: absolute;
            min-height: 120vh;
            bottom: 0;
            min-width: 100%;
            z-index: 1;
        }
    }
    .container-3{
        padding-top: 6vw;
        padding-bottom: 6vw;
    }
    .review-summary{
        background: $bg_gray;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8vw;
        padding-bottom: 3vw;
        margin-bottom: 3vw;
        border-bottom: 1px solid $gray-1;
        > div:last-child{
            margin-left: auto;
        }
        .rating{
            display: flex;
            align-items: center;
            gap: 1.5vw;
        }
    }
    .r-info{
        p{
            text-transform: uppercase;
        }
    }
</style>