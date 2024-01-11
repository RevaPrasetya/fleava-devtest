<script setup>
    const slideCard = defineProps({
        img: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        }
    });
    const { img, label, title, link } = slideCard;
</script>

<template>
    <div class="product-card">
        <figure class="product-img">
            <img :src="img" alt="">
        </figure>
        <div class="product-details">
            <p class="product-label">{{ label }}</p>
            <h2 class="product-title">{{ title }}</h2>
            
            <Button :link="slideCard.link"  primary white >
                Explore Now
            </Button>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    .product-card{

        h2,h4,p{
            color: $white;
        }
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48vw;
        height: 30vw;
        .product-img{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }
        .product-details{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 2;
            .product-label{
                margin-bottom: 1rem;
            }
            .product-title{
                margin-bottom: 3rem
            }
        }
    }

    
    .slide{
        height: 31vw;
        padding: 2vw;
        .product-details{
            opacity: 0;
            transition: ease 0.5s all;
        }
        
        &.is-active{
            .product-details{
                opacity: 1;
            }
        }
    }
</style>