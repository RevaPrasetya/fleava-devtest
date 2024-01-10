<script setup>
    const news = defineProps({
        img: String,
        linkCat: String,
        linkSubCat: String,
        linkNews: String, 

        newsCat: String,
        newsSubCat: String,

        newsTitle: String,
    })

    const { img, linkCat, linkSubCat, linkNews, newsCat, newsSubCat, newsTitle } = news;
</script>

<template>
    <div class="news-card">
        <figure>
            <img :src="news.img" alt="">
        </figure>

        <div class="news-details text-flex">
            <a href="" class="text-flex news-type">{{ news.newsCat }}</a>
            <a href="" class="news-topic">{{ news.newsSubCat }}</a>
        </div>
        <h5 class="news-title">{{ news.newsTitle }}</h5>
        
        <Button :primary="false">
            Explore Now
        </Button>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
    
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

</style>