<template>
    <header>
        <div class="container-fluid">
            <a href="/" class="">
                <h5>Earth</h5>
            </a>
            <button class="menu">
                <p>MENU</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M0 1L16 1" stroke="white" stroke-width="2"/>
                    <path d="M0 13L24 13" stroke="white" stroke-width="2"/>
                    </svg>
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/_variables.scss';
    header{
        position: fixed;
        top: 0;
        width: 100%;
        color: #fff;
        mix-blend-mode: difference;
        padding: $rem_1 0;

        z-index: 100;

        .container-fluid{
            display: flex;
            justify-content: space-between;
        }
    }
    button.menu{
        display: inline-flex;
        align-items: center;
        gap: $rem_1_5;
        background: none;
        outline: none;
        border: none;
    }

</style>