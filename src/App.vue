<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { infoStore } from './components/stores/stores';
let infos = infoStore()
infos.getInfo()
/* if(infos.info.length==0){
  infos.getInfo()
} */
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
</template>

