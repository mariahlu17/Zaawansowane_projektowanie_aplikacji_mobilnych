<script setup></script>

<template>
    <div class="infoBox">
        <p>
            text przykładowy
        </p>
    </div>
</template>

<style scoped>
.infoBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            border-radius: 20px;
            background: #E7EBEF;
            padding: 1%;
            color: #0068C8;
            text-align: center;
            font-size: 20px;
            line-height: normal;
            margin-bottom: 2%;
        }

        .infoBox:last-child {
                margin-bottom: 30px;
        }

        .infoBox img {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        @media (min-width: 768px) and (max-width: 1400px) { 
            .infoBox{
                width: 65%;
                font-size: 18px;
            }
        }
        @media (max-width: 768px) { 
            .infoBox {
                width: 80%;
                font-size: 18px;
                padding: 0% 3% 0% 3%;
                min-height: 50px;
            }
            .infoBox:last-child {
                margin-bottom: 20px;
            }
        }
</style>