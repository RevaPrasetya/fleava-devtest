<script setup>
    const review = defineProps({
        date: String,
        username : String,
        rating: Number,
        description: String,
        helpfulAgree: Number,
        helpfulDisagree: Number

    })

    const { date, username, rating, description, helpfulAgree, helpfulDisagree } = review
</script>

<template>
    <div class="review-card mb-4 pb-4">
        <div class="review-name">
            <h6 class="mb-1">{{ review.username }}</h6>
            <p class="date">{{ review.date }}</p>
        </div>
        <div class="review-detail">
            <div class="rating mb-2">
                <h6 class="playfair">{{ review.rating }}.0</h6>
                <NuxtRating class="mt-0" :read-only="true" :ratingValue="review.rating" :activeColor="'#000000'" :ratingSize="'1.8vw'"/>
                   
            </div>
            <div class="description mb-2">
                <p>{{ review.description }}</p>
            </div>
            <div class="helpful-rating">
                <p class="mr-2">Helpful?</p>
                <button class="btn btn-primary black">
                    Yes • {{ helpfulAgree }}
                </button>
                <button class="btn btn-secondary black">
                    No • {{ helpfulDisagree ? helpfulDisagree : 0 }}
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .helpful-rating{
        display: flex;
        align-items: center;
        gap: 0.6vw;
    }
    .review-card{
        display: flex;
        border-bottom: 1px solid #C4C4C4;
    }
    .review-name{
        width: 30vw;
    }
    
    .review-detail{
        width: 40vw;
    }
    .rating{
        display: flex;
        align-items: center;
        gap: 1.5vw;
    }
    .btn{
        padding: 0.6vw 1.1vw !important;
    }
</style>