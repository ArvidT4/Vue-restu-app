<script setup>
import ActiveDishes from '../admin-comps/dish/ActiveDishes.vue';
import InactiveDishes from '../admin-comps/dish/InactiveDishes.vue';
import ActiveDrinks from '../admin-comps/drink/ActiveDrinks.vue';
import InactiveDrinks from '../admin-comps/drink/InactiveDrinks.vue';
import {dishStore, categoryStore,drinkStore} from "../stores/stores"
let dishes = dishStore()
let categories = categoryStore()
let drinks = drinkStore()
drinks.getDrinks()
categories.getCategories()
dishes.getDishes()

</script>


<template>

<h1 class="text-center text-3xl mb-5 mt-5">Admin panelen</h1>

<div class="w-full wrap place-items-center gap-10 m-auto bg-sky-300 grid grid-cols-1 lg:grid-cols-2">
    
    <div class="w-full "><ActiveDishes></ActiveDishes></div>
    <div class="w-full"><InactiveDishes></InactiveDishes></div>
    <div class="w-full"><ActiveDrinks></ActiveDrinks></div>
    <div class="w-full"><InactiveDrinks></InactiveDrinks></div>
    
</div>
</template>

<style scoped>
    .wrap{
        max-width:1000px;
        width: 100%;
    }
</style>