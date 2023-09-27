<script setup>
import Slideshow from '../misc/Slideshow.vue';
import Lunch from '../misc/Lunch.vue'
import HomeStart from '../misc/HomeStart.vue';
</script>

<template>
  <main>
    <div>
      
      <Slideshow class="slide"></Slideshow>
    </div>
    <div class="grid test:text-4xl sm:grid-cols-3 grid-cols-2 sm:grid-rows-2 gap-2 homeWrap">
      <div class="col-span-1 row-span-2"><Lunch></Lunch></div>
      <HomeStart></HomeStart>
    </div>
    
    
  </main>
</template>

<style scoped>
  .homeWrap{
    margin: auto;
    max-width: 1000px;
    max-height: 600px;
  }
 
</style>