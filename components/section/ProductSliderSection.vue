<template>
    <section id="product-section">
        <div class="section-header">
            <div class="container">
                <h4>A highly curated selection of <br> products we believe in</h4>
            </div>
        </div>
        <div class="slider">
            <div class="slider-wrap">
                <div class="slide">
                    <div class="product-card">
                        <figure class="product-img">
                            <img src="~/assets/img/product/product-3.jpg" alt="">
                        </figure>
                        <div class="product-details">
                            <p class="product-label">OUR FEATURED PRODUCTS</p>
                            <h2 class="product-title">Daily Skincare</h2>
                            <a href="" class="btn btn-primary white">
                                <div>Explore Now</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                                <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-desc">
            <div class="container">
                <p>Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna. Nunc magna amet lorem ac non lectus eget.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';

    #product-section{
        background: $dark_green;

        h2,h4,p{
            color: $white;
        }
    }
    .section-header{
        padding: 5.8vw 0;
    }
    .section-desc{
        padding-top: 5vw;
        padding-bottom: 5.8vw;

        .container{
            max-width: 38vw;
        }
    }
    .section-header,.section-desc{
        h4,p{
            text-align: center;
        }
    }
    .product-card{
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
    .slider{
        height: 30vw;

        .slider-wrap{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            column-gap: 3rem;
        }
    }
</style>