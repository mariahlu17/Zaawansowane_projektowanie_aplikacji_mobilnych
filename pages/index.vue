<script setup>
    definePageMeta({
    layout: " ",
})
</script>

<script>
export default {
    created() {
    setTimeout(() => {
        this.$router.replace({ path: '/login' });
    }, 3000);
    }
}
</script>


<template>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet">
    </head>

<div class = "fisrt">
    <main class="first_page_content">
        <img src="~assets/logo_first_page.png" alt="">
        <p class="wsb">WSB MERITO GDAŃK</p>
    </main>
</div>
</template>

<style>
        

    .fisrt{
        background: linear-gradient(180deg, rgba(91, 157, 218, 0.40) 0%, #2986DB 68.23%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .first_page_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wsb{
        color: #DEDEDE;
        text-align: center;
        font-family: Inter;
        font-size: 40px;
        font-style: italic;
        font-weight: 900;
        line-height: normal;
    }

    @media (min-width: 768px) and (max-width: 1400px) { 
        .first_page_content{
            width: 75%;
        }
        .first_page_content img{
            width: 80%;
        }
    }
    @media (max-width: 768px)  { 
        .first_page_content{
            width: 75%;
        }
        .first_page_content img{
            width: 85%;
        }
        .wsb{
            display: none;
        }
    }
    </style> 