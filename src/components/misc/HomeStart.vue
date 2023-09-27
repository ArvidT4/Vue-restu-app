<script setup>
    import { infoStore } from '../stores/stores';
    let infos = infoStore()

</script>
<template>

    <div class="wrap sm:col-span-2 gap-2 m-0 p-0 grid grid-cols-2 w-full" v-for="info in infos.info">
        <div class="border sm:col-span-1 col-span-2 img m-0 p-0"><img src="../misc/exempelLogga1.png" alt=""></div>
        <div class=" time img col-span-2 sm:col-span-1 text-center text-2xl">
            <h5 class="m-2">Öppettider</h5>
            <div class="m-2">Vardagar: {{ info.weekdays }}</div>
            <div class="m-2">Lördagar: {{ info.saturday }}</div>
            <div class="m-2">Söndagar: {{ info.sunday }}</div>
        </div>
        <div class="col-span-2 p-3 border ">
            <div class="infoName text-6xl">{{ info.name }}</div>
            <div>{{ info.aboutus }}</div>
            
        </div>
    </div>
    
</template>

<style scoped>
@font-face {
    font-family: menyFont;
    src: url('./misc/Freehand Signature.otf');
}
    img{
        margin: auto;
        max-height: 340px;
    }
    .time{
        margin: auto;
    }
    .infoName{
        font-family: menyFont;
    }
</style>