<script setup>
import { drinkStore } from '../stores/stores';

let drinks = drinkStore()
if(drinks.drinks.length==0){
    drinks.getDrinks()
}


</script>
<template>
    <div class="main sm:grid sm:grid-cols-2">
        <div>
            <h2>Alkohol</h2>
            <div  v-for="drink in drinks.drinks">
                <div v-if="drink.alcohol" class="borderBottom grid m-4 p-5 grid-cols-4">
                    <div class="col-span-3 text-2xl mb-4 text-left">
                        <h5>{{ drink.title }} {{ drink.volume }}</h5>
                    </div>
                    
                    <div class="col-span-3 text-left">
                        <h6 class="description">{{ drink.description }}</h6>
                    </div>
                    <div class="col-span-1 pris">
                        <h6 class="">{{ drink.price }} kr</h6>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <h2>Alkoholfritt</h2>
            <div  v-for="drink in drinks.drinks">
                <div v-if="!drink.alcohol" class="borderBottom grid m-4 p-5 grid-cols-4">
                    <div class="col-span-3 text-2xl mb-4 text-left">
                        <h5>{{ drink.title }} {{ drink.volume }}</h5>
                    </div>
                    
                    <div class="col-span-3 text-left">
                        <h6 class="description">{{ drink.description }}</h6>
                    </div>
                    <div class="col-span-1 pris">
                        <h6 class="">{{ drink.price }} kr</h6>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<style scoped>

.borderBottom{
        border-bottom: 0.1px solid grey;
    }
    .main{
        max-width: 900px;
        margin: auto;
    }
    .description{
        font-family: 'Times New Roman', Times, serif;
    }
</style>