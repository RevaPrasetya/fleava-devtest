<script>
    // definePageMeta({
    //     pageTransition: {
    //         name: 'fadeGsap',
    //         mode: 'out-in',
    //         onBeforeEnter: (el) => {
    //             console.log('Before enter...')
    //         },
    //         onEnter: (el, done) => {},
    //         onAfterEnter: (el) => {}
    //     }
    // })

    onMounted(() => {
        setTimeout(function(){
            
            window.scrollTo(0, 0);

        }, 200)
    })
</script>

<template>
    <main>
        <sectionProductHeroSection 
            :title1="`Garoa Ampoule Cream`"
            :description1="`Sed felis est quam ipsum aliquam convallis maecenas. Venenatis turpis amet dolor massa semper. A, gravida id amet lorem.`"

            :title2="`Everything you need All in one`"
            :description2="`Elementum ut rutrum tellus vulputate augue odio mattis. Arcu tellus ultrices at malesuada eget tempor. Suscipit ultricies dictum semper vel, integer id urna. Nunc magna amet lorem ac non lectus eget.`"

            :img="`/img/product-detail/hero.jpg`"
        />
        
        <sectionProductComposition />

        <sectionProductStory />

        <sectionProductReview />

        <sectionSliderSection :title="`You might also like`" bgColor="#4C4F42" />
    </main>
</template>