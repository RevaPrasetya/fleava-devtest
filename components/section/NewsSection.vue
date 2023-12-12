<template>
    <section id="news-section">
        <div class="section-header mb-3 d-flex items-center justify-between container">
            <h2>What's New</h2>
            
            <a href="" class="btn btn-primary">
                <div>Explore Now</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                    <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                </svg>
            </a>
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
                        
                        <a href="" class="btn btn-secondary">
                            <div>Explore Now</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                                <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </a>
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
                        
                        <a href="" class="btn btn-secondary">
                            <div>Explore Now</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                                <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </a>
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
                        
                        <a href="" class="btn btn-secondary">
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