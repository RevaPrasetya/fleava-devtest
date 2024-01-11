<script setup>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';
    
    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        scrollAnimations();
        initMenuAnim();
        navLinkHover();
    })

    function  scrollAnimations(){

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

    }

    const initMenuAnim = () => {

        const menuOpenAnim = gsap.timeline({
            paused: true
        })

        menuOpenAnim.to(".header-menu", { autoAlpha: 1, duration: 0.5}, 0)
        menuOpenAnim.to(".open-menu-btn", {  autoAlpha: 0 , duration: 0.2}, 0)
        menuOpenAnim.from(".nav-link", {  autoAlpha: 0 , y: "-3vw", stagger: 0.2, duration: 1.5}, 0)

        menuOpenAnim.from(".menu-contact-info > *", {  autoAlpha: 0 , y: "3vw", stagger: 0.2, duration: 1}, 0)
        menuOpenAnim.from(".menu-socmed-info > *", {  autoAlpha: 0 , y: "3vw", stagger: -0.2, duration: 1}, 0.5)

        menuOpenAnim.fromTo(".close-menu-btn", { yPercent: 0, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.2 }, 0 )

        const menuCloseAnim = gsap.timeline({
            paused: true
        })

        menuCloseAnim.to(".nav-link", {  autoAlpha: 0, y: "3vw", stagger: 0.2, duration: .5, ease: "power1.out"}, 0)
        menuCloseAnim.to(".header-menu" ,{  autoAlpha: 0, duration: 0.5 }, 1)
        menuCloseAnim.to(".open-menu-btn" ,{ yPercent: 0, autoAlpha: 1, duration: 0.2 }, 0)
        menuCloseAnim.to(".close-menu-btn" ,{  autoAlpha: 0, duration: 0.2 }, 0)

        const showMenu = () =>{
            menuOpenAnim.restart();
            
        }
        const closeMenu = () => {
            menuCloseAnim.restart();
            //menuOpenAnim.timeScale(2).reverse()
            
        }

        document.querySelector(".open-menu-btn").addEventListener('click', showMenu);
        document.querySelector(".close-menu-btn").addEventListener('click', closeMenu);
        let navL = document.querySelectorAll(".header-menu .nav-link");
        navL.forEach(n => {
            n.addEventListener('click', closeMenu);
        })

    }

    const navLinkHover = () => {

        let navLink = document.querySelectorAll(".nav-link[data-nav]");
        navLink.forEach((el) => {
            let id = el.getAttribute("data-nav");

            console.log(id)

            el.addEventListener('mouseover', function(){
                gsap.to(el, {
                    x: "2vw",
                });
                                
                gsap.to(document.querySelector(`.nav-link-img[data-nav="${id}"]`), {
                    autoAlpha: 1
                })
            })
            el.addEventListener('mouseleave', function(){
                gsap.to(el, {
                    x: "0",
                });        
                gsap.to(document.querySelector(`.nav-link-img[data-nav="${id}"]`), {
                    autoAlpha: 0
                })

            })
        })
        

    }
</script>

<template>
    <header>
        <div class="container-fluid">
            <NuxtLink to="/" >
                <h5>Earth</h5>
            </NuxtLink>
            <button class="menu-btn open-menu-btn" >
                <p>MENU</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M0 1L16 1" stroke-width="2"/>
                    <path d="M0 13L24 13" stroke-width="2"/>
                </svg>
            </button>
            <button class="menu-btn close-menu-btn" >
                <p>Close</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M2 1L16 15" stroke="white" stroke-width="2"/>
                    <path d="M1 18L18 1" stroke="white" stroke-width="2"/>
                </svg>
            </button>
        </div>
    </header>

    <div class="header-menu">
        <div class="menu-nav">
            <ul>
                <li class="nav-link" data-nav="1">
                    <NuxtLink to="/products/1">
                        <h3>Our Story</h3>
                    </NuxtLink>
                </li>
                <li class="nav-link" data-nav="2">
                    <NuxtLink to="/products/1">
                        <h3>Products</h3>
                    </NuxtLink>
                </li>
                <li class="nav-link" data-nav="3">
                    <NuxtLink to="/products/1">
                        <h3>Anjay</h3>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="menu-img">
            <figure class="menu-img-wrap">
                <img  class="nav-link-img" data-nav="1" src="/img/product/product-1.jpg" alt="">
                <img  class="nav-link-img" data-nav="2" src="/img/product/product-2.jpg" alt="">
                <img  class="nav-link-img" data-nav="3" src="/img/product/product-3.jpg" alt="">
            </figure>
        </div>
        <div class="menu-contact">
            <ul class="menu-contact-info">
                <li>
                    Phone : +62 8090 7667 4321
                </li>
                <li>
                    Email : earthwardah@mail.com
                </li>
                <li>
                    ©2022 Earth Wardah, Copyright All Reserved.
                </li>
            </ul>
            <ul class="menu-socmed-info">
                <li>
                    <NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="21" viewBox="0 0 32 21" fill="none">
                            <path d="M31.3313 3.51018C30.9633 2.27841 29.879 1.30831 28.5022 0.979089C26.0067 0.380859 16 0.380859 16 0.380859C16 0.380859 5.99337 0.380859 3.49781 0.979089C2.12103 1.30836 1.0367 2.27841 0.668671 3.51018C0 5.74284 -2.27988e-08 10.4011 -2.27988e-08 10.4011C-2.27988e-08 10.4011 0 15.0593 0.668671 17.292C1.0367 18.5237 2.12103 19.4534 3.49781 19.7826C5.99337 20.3809 16 20.3809 16 20.3809C16 20.3809 26.0066 20.3809 28.5022 19.7826C29.879 19.4534 30.9633 18.5237 31.3313 17.292C32 15.0593 32 10.4011 32 10.4011C32 10.4011 32 5.74284 31.3313 3.51018V3.51018ZM12.7273 14.6304V6.17174L21.0909 10.4012L12.7273 14.6304V14.6304Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://twitter.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">
                            <path d="M27.6854 6.36209C27.7049 6.62458 27.7049 6.88712 27.7049 7.14961C27.7049 15.1558 21.3417 24.3809 9.71142 24.3809C6.12836 24.3809 2.79987 23.3871 0 21.6621C0.509085 21.7184 0.998522 21.7371 1.52719 21.7371C4.48364 21.7371 7.20523 20.7809 9.37856 19.1496C6.59827 19.0934 4.26831 17.3496 3.46554 14.9496C3.85716 15.0058 4.24872 15.0433 4.65993 15.0433C5.22771 15.0433 5.79556 14.9683 6.32417 14.8371C3.42642 14.2746 1.25303 11.8371 1.25303 8.89335V8.81838C2.09492 9.26838 3.07397 9.54962 4.11161 9.58708C2.40819 8.49956 1.29221 6.64333 1.29221 4.54332C1.29221 3.41834 1.60542 2.38709 2.15368 1.48708C5.26683 5.16208 9.94634 7.56204 15.1936 7.82458C15.0957 7.37458 15.0369 6.90588 15.0369 6.43712C15.0369 3.09958 17.8564 0.380859 21.3611 0.380859C23.182 0.380859 24.8267 1.11211 25.9819 2.29336C27.4111 2.03087 28.7817 1.5246 29.9957 0.830863C29.5257 2.23714 28.5272 3.4184 27.2154 4.16834C28.4881 4.03716 29.7216 3.69958 30.8571 3.23088C29.9958 4.43083 28.9189 5.49954 27.6854 6.36209V6.36209Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://twitter.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.8599 6.34866C9.45461 6.34866 6.70793 9.09595 6.70793 12.502C6.70793 15.908 9.45461 18.6552 12.8599 18.6552C16.2651 18.6552 19.0118 15.908 19.0118 12.502C19.0118 9.09595 16.2651 6.34866 12.8599 6.34866ZM12.8599 16.5024C10.6593 16.5024 8.8603 14.7084 8.8603 12.502C8.8603 10.2955 10.6539 8.50151 12.8599 8.50151C15.0658 8.50151 16.8594 10.2955 16.8594 12.502C16.8594 14.7084 15.0604 16.5024 12.8599 16.5024V16.5024ZM20.6983 6.09696C20.6983 6.8949 20.0558 7.53219 19.2634 7.53219C18.4657 7.53219 17.8285 6.88955 17.8285 6.09696C17.8285 5.30436 18.471 4.66172 19.2634 4.66172C20.0558 4.66172 20.6983 5.30436 20.6983 6.09696ZM24.7729 7.55361C24.6818 5.63104 24.2428 3.92804 22.8346 2.52494C21.4319 1.12183 19.7292 0.682696 17.8071 0.5863C15.8261 0.473838 9.8883 0.473838 7.90726 0.5863C5.99047 0.677341 4.28785 1.11648 2.87971 2.51958C1.47157 3.92268 1.03788 5.62568 0.941506 7.54825C0.829068 9.52973 0.829068 15.4688 0.941506 17.4503C1.03253 19.3729 1.47157 21.0759 2.87971 22.479C4.28785 23.8821 5.98512 24.3212 7.90726 24.4176C9.8883 24.5301 15.8261 24.5301 17.8071 24.4176C19.7292 24.3266 21.4319 23.8874 22.8346 22.479C24.2374 21.0759 24.6765 19.3729 24.7729 17.4503C24.8853 15.4688 24.8853 9.53509 24.7729 7.55361V7.55361ZM22.2136 19.5764C21.7959 20.626 20.9875 21.4347 19.9327 21.8577C18.3532 22.4843 14.6053 22.3397 12.8599 22.3397C11.1144 22.3397 7.36114 22.479 5.78702 21.8577C4.7376 21.44 3.92912 20.6314 3.50615 19.5764C2.87971 17.9965 3.02427 14.2478 3.02427 12.502C3.02427 10.7561 2.88506 7.00201 3.50615 5.42754C3.92377 4.37789 4.73225 3.56923 5.78702 3.14616C7.36649 2.51958 11.1144 2.66418 12.8599 2.66418C14.6053 2.66418 18.3586 2.52494 19.9327 3.14616C20.9821 3.56387 21.7906 4.37253 22.2136 5.42754C22.84 7.00736 22.6954 10.7561 22.6954 12.502C22.6954 14.2478 22.84 18.0019 22.2136 19.5764Z" fill="white"/>
                    </svg>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="28" viewBox="0 0 12 28" fill="none">
                            <path d="M3.38242 27.502H8.21372V13.6314H11.5842L11.939 8.99194H8.20331C8.20331 8.99194 8.20331 7.25812 8.20331 6.34936C8.20331 5.24929 8.39111 4.81882 9.31981 4.81882C10.0607 4.81882 11.939 4.81882 11.939 4.81882V0C11.939 0 9.18418 0 8.58939 0C4.98938 0 3.37198 1.81752 3.37198 5.28516C3.37198 8.31037 3.37198 8.99194 3.37198 8.99194H0.857178V13.6912H3.37198V27.502H3.38242Z" fill="white"/>
                        </svg>
                    </NuxtLink>
                </li>
            </ul>
        </div>
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
    button{
        cursor: pointer;
        &.menu-btn{
            display: inline-flex;
            align-items: center;
            gap: $rem_1_5;
            background: none;
            outline: none;
            border: none;
        }
        &.close-menu-btn{
            position: absolute;
            right: 0;
            margin: $rem_0_5 $rem_3;
            visibility: none;
        }
    }
    .header-menu{
        // display: none;
        background: $dark_green;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 99;

        display: flex;
        flex-wrap: wrap;

        opacity: 0;
        visibility: 0;
        pointer-events: 0;

        .menu-nav, .menu-img{
            width: 50%;
        }

        .menu-nav{
            padding: $rem_3;
            padding-top: 6vw;
            height: 100%;
            color: $white;
            ul{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 1vw;
            }
        }

        .menu-img{
            .menu-img-wrap{
                position: relative;
                width: 100%;
                height: 100vh;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    min-width: 100%;
                    height: 100%;
                }
                &::after{

                    content: "";
                    background: linear-gradient(90deg, #383A30 0%, rgba(56, 58, 48, 0.00) 100%);
                    position: absolute;
                    display: block;

                    left: 0;
                    top: 0;
                    bottom: 0;
                    right: 0;
                }
            }
        }
        .menu-contact{
            width: 100%;
            position: absolute;
            bottom: 0;

            display: flex;
            justify-content: space-between;

            padding: $rem_1 $rem_1_5;

            color: $white;

            ul{
                display: flex;
                align-items: center;
                gap: $rem_1_5;
            }
        }
    }
</style>