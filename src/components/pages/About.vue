<script setup>
import { isProxy, toRaw } from 'vue';
import { infoStore } from '../stores/stores';
let info = infoStore()

//console.log(info.info)
//console.log(info.address[0])

let address={}
if(isProxy(info.address[0])){
  address = toRaw(info.address[0])
}
//console.log(address)
</script>

<template>
  <div class="wrap" v-for="info in info.info">
    <h1 class="text-center text-3xl mt-8">Om oss</h1>
    <div class="grid gap-2 sm:grid-cols-5 text-center">
      <div class="sm:col-span-3 border-2 text-left about">
        <p class="m-3">{{ info.aboutus }}</p>
      </div>
      <div class="sm:col-span-2 info grid sm:grid-rows-3 gap-2">
        <div class="border-2 time grid place-items-center">
          <div>
            <h4 class="openTime">Öppettider</h4>
          </div>
          <div>
            <div>Vardag {{ info.weekdays }}</div>
            <div>Lördag {{ info.saturday }}</div>
            <div>Söndag {{ info.sunday }}</div>
          </div>
          
        </div>
        <div class="border-2 grid grid-cols-1 place-items-center">
          <div>Address</div>
          <div>
            <div>{{info.name}}</div>
            <div>{{ address.street }}</div>
            <div>{{ address.city }} {{ address.postNr }}</div>
          </div>
        </div>
        <div class="border-2 grid place-items-center">
          <h4>Kontakt</h4>
          <div>
            <div>Telefon: {{ info.phone }}</div>
            <div>Mejl: {{ info.email }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<style scoped>
  .wrap{
    margin: auto;
    max-width: 900px;
  }
  .about{
    width: 100%;
    height: 400px;
  }
  .info{
    width: 100%;
    height:400px;
  }
  .openTime{
    width: 100%;
  }
</style>
