<template>
    <header>
        <img src="~assets/heat_logo.png" alt="">
        <div class="daneHeader">
            <p>Imie Nazwisko</p>
            <img src="~assets/logout_logo.png" alt="" class="logoutLogo">
        </div>
    </header>
    <slot/>
</template>

<style>
    header {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    color: #0070B7;
}

.daneHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15%;
}

@media (min-width: 768px) and (max-width: 1400px) { 
    .daneHeader{
        width: 20%;
    }
    header{
        padding-left: 5%;
        padding-right: 6%;
    }
}
@media (max-width: 768px) { 
    .daneHeader p{
        display: none;
    }
    header img {
        width: 90px;
    }
    .logoutLogo {
        width: 50px;
    }
}
</style>