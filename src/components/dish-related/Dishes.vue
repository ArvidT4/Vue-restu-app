<script setup>
import GluLacVeg from '../GluLacVeg.vue';
import { dishStore, categoryStore } from '../stores/stores';

let dishes = dishStore()
let categories = categoryStore()



if(dishes.dishes.length==0){
    dishes.getDishes()
}
if(categories.categories.length==0){
    categories.getCategories()
}


</script>
<template>

    <div class="main">
        <div v-for="category in categories.categories">
            <div v-if="category.id!=0">
                <div v-if="category.id!=1">
                    <div class="grid grid-cols-4 m-4 p-5 borderBottom">
                <h2 class="text-center text-5xl pl-5 pt-4 col-span-3">{{ category.title }}</h2>

                <div>
                    <div>Innehåller om ifyllda</div>
                        <div class="grid grid-cols-3">
                            <div title="Vegetarisk" class="veg">
                                V
                            </div>
                            <div title="Gluten" class="lactos">
                                G
                            </div>
                            <div title="Laktos" class="lactos">
                                L
                            </div>
                    </div>
                </div>
            </div>
            
            
                <div  v-for="dish in dishes.dishes">
                    <div v-if="dish.category_id==category.id" class="borderBottom grid m-4 p-5 grid-cols-4">
                        <div class="col-span-3 text-2xl mb-4 text-left">
                            <h5> {{ dish.number }}. {{ dish.title }}</h5>
                        </div>
                        
                        <div class="col-span-1 ">
                            <div class="grid grid-cols-3">

                                <div class="veg" v-if="dish.veg">
                                    <GluLacVeg  color="bg-green-400"></GluLacVeg>
                                </div>
                                <div class="veg" v-if="!dish.veg">
                                    <GluLacVeg  color="border-2"></GluLacVeg>
                                </div>

                                <div class="gluten" v-if="dish.gluten">
                                    <GluLacVeg color="bg-blue-400"></GluLacVeg>
                                </div>
                                <div class="gluten" v-if="!dish.gluten">
                                    <GluLacVeg color="border-2"></GluLacVeg>
                                </div>

                                <div class="lactos" v-if="dish.lactos">
                                    <GluLacVeg color="bg-pink-400"></GluLacVeg>
                                </div>
                                <div class="lactos" v-if="!dish.lactos">
                                    <GluLacVeg color="border-2"></GluLacVeg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-span-3 text-left">
                            <h6 class="description">{{ dish.description }}</h6>
                        </div>
                        <div class="col-span-1 pris">
                            <h6 class="">{{ dish.price }} kr</h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
@font-face {
    font-family: categoryFont;
    src: url('../misc/WCManoNegraBta.ttf');
}
    .main{
        max-width: 900px;
        margin: auto;
    }
    .borderBottom{
        border-bottom: 0.1px solid grey;
    }
    .veg{
        border-right: 0.3px solid rgb(155, 155, 155);
        border-left: 0.3px solid rgb(155, 155, 155);
    }
    .gluten, .lactos{
        border-right: 0.3px solid rgb(155, 155, 155);

    }
    .pris{
        margin: auto;
        position: relative;
        right: -35%;
    }
    h2{
        font-family: categoryFont;
        margin: auto;
    }
    .description{
        font-family: 'Times New Roman', Times, serif;
    }
</style>