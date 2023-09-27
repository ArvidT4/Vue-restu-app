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
    //console.log(categoryTitle)
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
            <h1 class="text-center text-3xl col-span-3 border h-10">Information om maträtt</h1>
        </div>
        <div class=" grid-cols-7 grid-rows-4 gap-2 md:grid wrap">
    
            <div class="border col-span-1"><p class="border-b">Nummer</p> <p class="text-3xl m-2">{{ dish.number }}</p></div>
            <div class="border col-span-3"><p class="border-b">Namn</p> <p class="text-3xl m-2">{{ dish.title }}</p></div>
            <div class="border col-span-2"><p class="border-b">Pris</p> <p class="text-3xl m-2">{{ dish.price }} kr</p></div>
            <div class="col-span-1 border "><p class="border-b">Aktiv</p>
                <div v-if="dish.active" class="w-full">
                    <svg class="w-10 h-20 m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                </div>
                <div v-else>
                    <svg class="w-10 h-20  m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </div>
            </div>
            <div class="border col-span-4 row-span-3"><p class="border-b">Beskrivning</p> <p class="p-3">{{ dish.description }}</p></div>
            <div class="col-span-3 row-span-3 gap-2 grid grid-rows-3">
                <div class="border grid grid-rows-5">
                    <div class="grid grid-cols-3 w-full row-span-5 text-center">
                        <div class=" row-span-5">
                            <div class="row-span-1 border-b">Gluten</div>
                            <div class=" ">
                                <div v-if="dish.gluten">
                                    <svg class="w-10 h-20 m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                </div>
                                <div v-else>
                                    <svg class="w-10 h-20  m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="border-x row-span-5">
                            <p class="border-b">Laktos</p>
                                <div>
                                    <div v-if="dish.lactos">
                                        <svg class="w-10 h-18 m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                    </div>
                                    <div v-else>
                                        <svg class="w-10 h-20  m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        <div class="row-span-5"><p class="border-b">Vegetarisk</p>
                                <div>
                                    <div v-if="dish.veg">
                                        <svg class="w-10 h-20 m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                    </div>
                                    <div v-else>
                                        <svg class="w-10 h-20  m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="border"><p class="border-b">Kategori</p>
                    <div v-if="categoryTitle">
                        <div class="text-2xl">{{ categoryTitle.title }}</div>
                    </div>
                
                </div>
                <div class="border hover:border-black duration-200 text-2xl hover:bg-gray-200">
                    <router-link :to="{name:'EditDish', params:{id:dish.id}}">
                        <button class=" w-full h-full grid grid-cols-7">
                            <div></div>
                            <div class="col-span-4 m-auto">Redigera maträtten</div>
                            <div class="m-auto">
                                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                                </svg>
                            </div>
                        </button>
                    </router-link>
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
    .topTitle{
        margin: auto;
        width: 1000px;
    }
</style>