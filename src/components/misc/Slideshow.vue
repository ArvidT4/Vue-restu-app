<script setup>
import { pictureStorage } from '../stores/stores';

let pictures = pictureStorage()

pictures.getPictures()


</script>



<template>
<div id="default-carousel" class="relative w-full text-center" data-carousel="slide">
    <h1 class="text-5xl">Slider</h1>   
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96 slide">
        
        
        <div v-for="picture in pictures.pictures">
            <div class="hidden duration-500 ease-in-out" data-carousel-item="active" >
                <img :src="'http://localhost:4000/'+picture.img" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        
    </div>

</div>

    
</template>

<style scoped>
 h1{
    user-select: none;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
  }
  .slide{
    z-index: 1;
  }
</style>