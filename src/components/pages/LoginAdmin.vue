<script setup>
import {useRoute, useRouter} from "vue-router"
import {tokenStore} from '../stores/stores'

const router = useRouter();
let tokenLogin = tokenStore()

let email="restumailtest@gmail.com",password="1234",username="admin";

async function loginFunc(){
    let routing = await tokenLogin.login({"email":email,"password":password,"username":username})
    if(routing) router.push({name:'ValidateCode'})
}
</script>

<template>
    <div class="w-full max-h-full">
        <div class="border-2 rounded-lg formWrap w-full m-auto mt-6">

            <div class="text-center mt-10">
                <img src="../misc/exempelLogga1.png" alt="">
            </div>
            <div class="mb-6 m-4">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Din e-mejl</label>
                <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" placeholder="name@restuApp.com" required>
            </div>

            <div class="mb-6 m-4">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ditt användarnamn</label>
                <input type="text" id="username" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" placeholder="Username" required>
            </div>

            <div class="mb-6 m-4">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ditt lösenord</label>
                <input type="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" placeholder="*******" required>
            </div>
            <div class="mb-4 text-center"><button @click="loginFunc" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Logga in</button></div>
        </div>
    </div>
    
</template>

<style scoped>

    .formWrap{
        max-width: 400px;
    }
    img{
        user-select: none;
        margin: auto;
        width: 120px;
    }
</style>