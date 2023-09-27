<script setup>
import {useRoute, useRouter} from "vue-router"
import {dishStore, categoryStore} from "../stores/stores"

    
    
    const route = useRoute();
    const router = useRouter();
    let id = route.params.id
    let dishes = dishStore()

   
    let categories = categoryStore()
    let dish = dishes.getDish(id)
    //console.log(dish)
    let categoryTitle = categories.getCategoryTitle(dish.category_id)
    let categoryMinusSelected = categories.removeOneCategory(dish.category_id)    
    //console.log(categories.categories)
    //console.log(categoryMinusSelected)

    async function update(){
        //console.log(dish)
        dishes.editDish(dish)
        router.go(-1)
    }
</script>
<template>
    <div v-if="dish">
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
            <h1 class="text-center text-3xl col-span-3 border h-10">Redigera info om maträtt</h1>
        </div>
        <div class=" grid-cols-7 grid-rows-4 gap-2 md:grid wrap">
    
            <div class="border col-span-1"><p class="border-b">Nummer</p> <input type="number" v-model="dish.number" class="w-full"></div>
            <div class="border col-span-3"><p class="border-b">Namn</p> <input type="text" class="w-full" v-model="dish.title"></div>
            <div class="border col-span-2"><p class="border-b">Pris (kr) </p> <input type="text" class="w-full" v-model="dish.price"></div>
            <div class="col-span-1 border "><p class="border-b">Aktiv</p>
                <div class="grid md:grid-rows-2  place-items-center w-full h-20">
                    <div class="flex items-center ">
                        <input id="option-1" @change="console.log(dish.active)" type="radio" name="countries" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="dish.active">
                        <label for="option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Aktiv
                        </label>
                    </div>

                    <div class="flex items-center ">
                        <input id="option-2" @change="console.log(dish.active)" type="radio" name="countries" value="false" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" v-model="dish.active">
                        <label for="option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Inaktiv
                        </label>
                    </div>
                </div>
            </div>
            <div class="border col-span-4 row-span-3"><p class="border-b">Beskrivning</p> <p class="p-3"><textarea name="" id="desc" cols="" rows="" v-model="dish.description"></textarea></p></div>
            <div class="col-span-3 row-span-3 gap-2 grid grid-rows-3">
                <div class="border"><p class="border-b">Kategori</p>
                    <div v-if="categoryTitle">
                        
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>{{categoryTitle.title}} - <p v-if="categoryTitle.active">Aktiv kategori</p><p v-else>Inaktiv kategori</p></option>
                            <option v-for="category in categoryMinusSelected" :value="category.id">
                                {{ category.title }} - <p v-if="category.active">Aktiv kategori</p><p v-else>Inaktiv kategori</p> 
                            </option>
                        </select>
                    </div>
                
                </div>

                <div class="border grid grid-rows-5">
                    <div class="grid grid-cols-3 w-full row-span-5 text-center">
                        <div class=" row-span-5">
                            <div class="row-span-1 border-b">Gluten</div>
                            <div class="items-center justify-center h-20 grid">
                                <input id="default-checkbox" type="checkbox" value="" v-model="dish.gluten" class=" w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                        </div>
                        <div class="border-x row-span-5">
                            <p class="border-b">Laktos</p>
                            <div class="items-center justify-center h-20 grid">
                                <input id="default-checkbox" type="checkbox" value="" v-model="dish.lactos" class=" w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            </div>
                        <div class="row-span-5">
                            <p class="border-b">Vegetarisk</p>
                            <div class="items-center justify-center h-20 grid">
                                <input id="default-checkbox" type="checkbox" value="" v-model="dish.veg" class=" w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="border hover:border-black duration-200 text-2xl hover:bg-gray-200">
                    <button @click="update()" class="w-full h-full grid grid-cols-7">
                        <div></div>
                        <div class="col-span-4 m-auto">Uppdatera maträtten</div>
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