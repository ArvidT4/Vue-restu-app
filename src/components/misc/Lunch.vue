<script setup>
import { dishStore, infoStore } from '../stores/stores';
let info = infoStore()
let dishes = dishStore()
console.log(dishes.lunch)
</script>

<template>
    <div class="wrap border">
        <div class=" text-center border-b p-2">Dagens - Kl:{{ info.lunchTime }}</div>
        <div v-for="dish in dishes.lunch">
            <div class="p-4" v-if="dish.category_id==1">
                <div class="dishTitle">{{ dish.title }}</div>
                <div class="dishDesc">{{ dish.description }}</div>
            </div>
        </div>
    </div>
    

</template>

<style scoped>
    .dishTitle{
        font-size: 18px;
    }
    .dishDesc{
        font-size: 14px;
    }

</style>