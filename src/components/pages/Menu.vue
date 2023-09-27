<script setup>

import Dishes from '../dish-related/Dishes.vue';
import Drinks from '../drink-related/Drinks.vue';
import {menuBool, dishStore} from '../stores/stores'

let menu = menuBool()
let dishes = dishStore()

dishes.getDishes()

let cl="bg-green-200"
function updateButton(val){
    menu.menuUpdate(val)
    if(val){
        cl="bg-brown-400"
    }
}

</script>
<template>
    
    <div class="text-center">
        <div class="mt-10 divPicture">
            <h1 v-if="menu.menu" class="text-8xl text-green-400">Meny</h1>
            <h1 v-else class="text-8xl text-red-500">Drinkar</h1>
            <img v-if="menu.menu" src="../misc/menuPicture.png" alt="">
            <img v-else src="../misc/drinkPicture.jpg" alt="">
        </div>
        <div class="grid grid-cols-6 p-2">
            <div class="col-span-2"></div>
            
            <div class="p-2">
                <button class="p-2 rounded border-2 duration-150 hover:bg-green-400" :class="menu.menuClicked" @click="updateButton(true)">Meny</button>
            </div>
            <div class="p-2 ">
                <button class="p-2 rounded border-2 duration-150 hover:bg-red-500" :class="menu.drinkClicked" @click="menu.menuUpdate(false)">Drinkar</button>
            </div>
            
        </div>
        
        <div v-if="menu.menu">
            <Dishes></Dishes>
        </div>
        <div v-else-if="!menu.menu">
            <Drinks></Drinks>
        </div>

    </div>
    
</template>

<style scoped>
@font-face {
    font-family: menyFont;
    src: url('../misc/Freehand Signature.otf');
}
h1{
    user-select: none;
    font-family: menyFont;
    margin: auto;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
.divPicture{
    position: relative;
    text-align: center;
}
img{
    user-select: none;
    object-fit: cover;
    margin: auto;
    max-width: 868px;
    width: 100%;
    z-index:1;
    height: 160px;
}
</style>