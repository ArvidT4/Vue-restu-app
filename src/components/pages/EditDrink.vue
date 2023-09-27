<script setup>
import {drinkStore} from "../stores/stores"
import {useRoute, useRouter} from "vue-router"

    const route = useRoute();
    const router = useRouter();
    let id = route.params.id
    let drinks = drinkStore()
    console.log(id)
    let drink = drinks.getDrink(id)
    console.log(drink)

    function edit(){
        drinks.editDrink(drink)
        router.go(-1)
    }
</script>

<template>
    <div v-if="drink">
        <div class="grid grid-cols-7 topTitle h-11 gap-2">
                <div class=" col-span-2 h-10">
                    <button class="h-full w-full text-left grid grid-cols-4 duration-200 border hover:bg-gray-200 hover:border-black" @click="router.go(-1)">
                        <div class="m-auto">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                            </svg>
                        </div>
                        <div class="m-auto col-span-2">Gå tillbaka</div>
                        
                    </button>
                </div>
                <h1 class="text-center text-3xl col-span-3 border h-10">Redigera info om drinken</h1>
            </div>
        <div class="wrap grid grid-cols-5 grid-rows-4 gap-3">
            <div class="border col-span-3"><div class="row-span-1 border-b">Titel</div><input type="text" v-model="drink.title" class="w-full"></div>
            <div class="border">
                <div class="row-span-1 border-b">Alkohol</div>
                <div class="h-20">
                    <fieldset id="group1" class="grid grid-rows-2 w-full h-full">
                        <div class="flex items-center  m-auto">
                            <input id="option-alc-1" @change="console.log(drink.alcohol)" type="radio" name="group1" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="drink.alcohol">
                            <label for="option-alc-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Aktiv
                            </label>
                        </div>

                        <div class="flex items-center  m-auto">
                            <input id="option-alc-2" @change="console.log(drink.alcohol)" type="radio" name="group1" value="false" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="drink.alcohol">
                            <label for="option-alc-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Inaktiv
                            </label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="border">
                <div class="row-span-1 border-b">Aktiv</div>
                <div class="h-20">
                    <fieldset id="group2"  class="grid grid-rows-2 w-full h-full">
                        <div class="flex items-center m-auto">
                            <input id="option-1" @change="console.log(drink.active)" type="radio" name="group2" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="drink.active">
                            <label for="option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Aktiv
                            </label>
                        </div>

                        <div class="flex items-center m-auto">
                            <input id="option-2" @change="console.log(drink.active)" type="radio" name="group2" value="false" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="drink.active">
                            <label for="option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Inaktiv
                            </label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="border col-span-3 row-span-3"><div class="row-span-1 border-b">Beskrivning</div><p class="p-3"><textarea name="" id="desc" cols="" rows="" v-model="drink.description"></textarea></p></div>
            <div class=" col-span-2 row-span-3 grid grid-rows-3 gap-3">
                <div class="border"><div class="row-span-1 border-b">Pris (kr)</div><input type="text" v-model="drink.price" class="w-full"></div>
                <div class="border"><div class="row-span-1 border-b">Volym (cl)</div><input type="text" v-model="drink.volume" class="w-full"></div>
                <div class="border hover:border-black duration-200 text-2xl hover:bg-gray-200">
                    <button class=" w-full h-full grid grid-cols-7" @click="edit()">
                        <div></div>
                        <div class="col-span-4 m-auto">Uppdatera drinken</div>
                        <div class="m-auto">
                            <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrap{
        margin: auto;
        max-width: 1000px;
        width: 100%;
        height: 500px;
    }
    #desc{
        width: 100%;
        height: 325px;
    
        resize: none;
    }
    .topTitle{
        margin: auto;
        width: 1000px;
    }
</style>