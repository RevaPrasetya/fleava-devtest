<script>
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import {ref} from 'vue';

    gsap.registerPlugin(ScrollTrigger);
    let defaultEasing = 'cubic-bezier(0.65, 0, 0.35, 1)';

    export default {
        mounted: function() {
            this.scrollAnimations();
            this.revealAnimations();
        },
        methods: {
            scrollAnimations(){

                let clipSection = gsap.timeline({
                    scrollTrigger:{
                        trigger: 'footer',
                        start: 'top bottom',
                        end: 'top top',
                        scrub: 2,
                        //markers: true,
                    }
                })
                //clipSection.set('footer', {clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'})
                clipSection.to('footer',{clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' });

            },
            revealAnimations(){
                let revealAnim = gsap.timeline({
                    scrollTrigger:{
                        trigger: 'footer',
                        start: 'top 40%',
                        toggleActions: 'play none none reverse',
                        onLeave: () => {
                            revealAnim.timeScale(3).reverse();
                        },
                        onEnterBack: () => {
                            revealAnim.timeScale(1).restart();
                        }
                    }
                })

                
                revealAnim.fromTo('footer .line', 1 ,{y:'2vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .4})
                //.fromTo('.company-contact h3 .line', 1.5 ,{y:'5vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .4}, 1)
                .fromTo('.company-contact .ml-form', 1.5 ,{y:'5vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .2}, 1)
                .fromTo('.company-info > *', 1.5 ,{y:'5vw' , autoAlpha: 0}, {y: 0, autoAlpha: 1, easing: defaultEasing, stagger: .2}, 1)
                .fromTo('.company-socmed > *', 1.5 ,{x:'5vw' , autoAlpha: 0}, {x: 0, autoAlpha: 1, easing: defaultEasing, stagger: .2}, 1);
            }
        }

    }
</script>

<template>
    <footer>
        <div class="container-3 d-flex justify-between">
            <div class="company-info">
                <a href="" class="company-logo">
                    <h5 >Earth</h5>
                </a>
                <p class="company-desc">Lectus congue sed augue phasellus. Orci,curabiturlem entum ut. In risus, eu est nibh. Faucibus urna.</p>
                <ul class="company-contact">
                    <li>Phone : +62 8090 7667 4321</li>
                    <li>Email : earthwardah@mail.com</li>
                </ul>
                <div class="company-copyright">
                    ©2022 Earth Wardah, Copyright All Reserved.
                </div>
            </div>
            <div class="company-contact">
                <div class="company-ml">
                    <h3 class="mb-4"><span class="line">Join Our</span> <span class="line">Mailing List</span></h3>
                    <form action="" class="ml-form">
                        <input type="email" class="mb-2" name="" id="" placeholder="Email address here">
                        <button type="submit" href="" class="btn btn-primary white">
                            <div>Submit</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5"/>
                                <path d="M13 1L1 13" stroke="black" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div class="company-socmed d-flex items-center">
                    <a class="btn-icon" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
                        <path d="M31.3313 3.12932C30.9633 1.89755 29.879 0.927448 28.5022 0.598229C26.0067 0 16 0 16 0C16 0 5.99337 0 3.49781 0.598229C2.12103 0.9275 1.0367 1.89755 0.668671 3.12932C0 5.36198 -2.27987e-08 10.0202 -2.27987e-08 10.0202C-2.27987e-08 10.0202 0 14.6784 0.668671 16.9111C1.0367 18.1429 2.12103 19.0726 3.49781 19.4018C5.99337 20 16 20 16 20C16 20 26.0066 20 28.5022 19.4018C29.879 19.0726 30.9633 18.1429 31.3313 16.9111C32 14.6784 32 10.0202 32 10.0202C32 10.0202 32 5.36198 31.3313 3.12932ZM12.7273 14.2495V5.79088L21.0909 10.0203L12.7273 14.2495Z" fill="white"/>
                        </svg>
                    </a>
                    <a class="btn-icon"  href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                        <path d="M27.6854 5.98123C27.7049 6.24372 27.7049 6.50626 27.7049 6.76875C27.7049 14.775 21.3417 24 9.71142 24C6.12836 24 2.79987 23.0062 0 21.2813C0.509085 21.3375 0.998522 21.3563 1.52719 21.3563C4.48364 21.3563 7.20523 20.4 9.37856 18.7688C6.59827 18.7125 4.26831 16.9688 3.46554 14.5687C3.85716 14.625 4.24872 14.6625 4.65993 14.6625C5.22771 14.6625 5.79556 14.5874 6.32417 14.4563C3.42642 13.8937 1.25303 11.4562 1.25303 8.51249V8.43752C2.09492 8.88752 3.07397 9.16877 4.11161 9.20622C2.40819 8.1187 1.29221 6.26247 1.29221 4.16246C1.29221 3.03748 1.60542 2.00623 2.15368 1.10622C5.26683 4.78122 9.94634 7.18118 15.1936 7.44372C15.0957 6.99372 15.0369 6.52502 15.0369 6.05626C15.0369 2.71872 17.8564 4.22717e-08 21.3611 4.22717e-08C23.182 4.22717e-08 24.8267 0.731248 25.9819 1.9125C27.4111 1.65001 28.7817 1.14374 29.9957 0.450003C29.5257 1.85629 28.5272 3.03754 27.2154 3.78748C28.4881 3.6563 29.7216 3.31872 30.8571 2.85002C29.9958 4.04997 28.9189 5.11868 27.6854 5.98123V5.98123Z" fill="white"/>
                        </svg>
                    </a>
                    <a class="btn-icon" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0027 5.8467C8.59744 5.8467 5.85075 8.594 5.85075 12C5.85075 15.406 8.59744 18.1533 12.0027 18.1533C15.4079 18.1533 18.1546 15.406 18.1546 12C18.1546 8.594 15.4079 5.8467 12.0027 5.8467ZM12.0027 16.0004C9.80212 16.0004 8.00312 14.2064 8.00312 12C8.00312 9.7936 9.79677 7.99955 12.0027 7.99955C14.2086 7.99955 16.0022 9.7936 16.0022 12C16.0022 14.2064 14.2032 16.0004 12.0027 16.0004V16.0004ZM19.8412 5.595C19.8412 6.39295 19.1987 7.03024 18.4062 7.03024C17.6085 7.03024 16.9713 6.38759 16.9713 5.595C16.9713 4.80241 17.6138 4.15977 18.4062 4.15977C19.1987 4.15977 19.8412 4.80241 19.8412 5.595ZM23.9157 7.05166C23.8247 5.12909 23.3856 3.42609 21.9775 2.02298C20.5747 0.619882 18.8721 0.180743 16.9499 0.0843468C14.9689 -0.0281155 9.03112 -0.0281155 7.05008 0.0843468C5.1333 0.175388 3.43068 0.614526 2.02253 2.01763C0.614389 3.42073 0.180703 5.12373 0.0843279 7.0463C-0.0281093 9.02778 -0.0281093 14.9669 0.0843279 16.9483C0.175349 18.8709 0.614389 20.5739 2.02253 21.977C3.43068 23.3801 5.12794 23.8193 7.05008 23.9157C9.03112 24.0281 14.9689 24.0281 16.9499 23.9157C18.8721 23.8246 20.5747 23.3855 21.9775 21.977C23.3803 20.5739 23.8193 18.8709 23.9157 16.9483C24.0281 14.9669 24.0281 9.03314 23.9157 7.05166V7.05166ZM21.3564 19.0744C20.9388 20.1241 20.1303 20.9327 19.0755 21.3558C17.496 21.9824 13.7481 21.8378 12.0027 21.8378C10.2572 21.8378 6.50396 21.977 4.92984 21.3558C3.88042 20.9381 3.07195 20.1294 2.64897 19.0744C2.02253 17.4946 2.16709 13.7458 2.16709 12C2.16709 10.2542 2.02789 6.50006 2.64897 4.92558C3.06659 3.87593 3.87507 3.06728 4.92984 2.6442C6.50931 2.01763 10.2572 2.16222 12.0027 2.16222C13.7481 2.16222 17.5014 2.02298 19.0755 2.6442C20.1249 3.06192 20.9334 3.87058 21.3564 4.92558C21.9828 6.50541 21.8383 10.2542 21.8383 12C21.8383 13.7458 21.9828 17.4999 21.3564 19.0744Z" fill="white"/>
                        </svg>
                    </a>
                    <a class="btn-icon" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 12 26" fill="none">
                        <path d="M2.52524 25.9409H7.35654V12.8577H10.727L11.0818 8.48155H7.34613C7.34613 8.48155 7.34613 6.84615 7.34613 5.98897C7.34613 4.95133 7.53393 4.5453 8.46263 4.5453C9.20351 4.5453 11.0818 4.5453 11.0818 4.5453V0C11.0818 0 8.327 0 7.73221 0C4.1322 0 2.5148 1.71436 2.5148 4.98517C2.5148 7.83867 2.5148 8.48155 2.5148 8.48155H0V12.9141H2.5148V25.9409H2.52524Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @import '~/assets/scss/_variables.scss';
    footer{
        padding: 7vw 0;
        background: $dark_green;
        color: $white;

        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        .container-3{
            align-items: flex-end;
        }
        p,li,div{
            font-size: 1vw;    
        }
    }
    .company-info{
        width: 22vw;
        > *:not(:last-child){
            margin-bottom: $rem_2;
        }
        .company-logo{
            margin-bottom: $rem_1_5;
        }
    }
    .company-contact{
        max-width: 28vw;
        
        .company-ml{
            .ml-form{
                margin-bottom: 8vw;
                input{
                    width: 100%;
                    background: none;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid $white;
                    padding-bottom: $rem_1;
                    color: $white;
                    font-size: $rem_1;
                    &::placeholder{
                        color: #AFB0AC;
                    }
                }
            }
        }
        .company-socmed{
            column-gap: $rem_2;
        }
        .btn-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            width: 36px;
            cursor: pointer;
        }
    }
</style>