<template>
    <Navbar />
    <div class="flex flex-col justify-center">
        <h5 class="text-xl my-4 font-bold text-center">Hasil Deteksi</h5>
        <div class="w-1/2 mt-3 mx-auto">
            <p>Nama: Steven</p>
            <p>Usia: 57</p>
            <p>Alamat: Hongkong</p>
            <div class="showHasil mt-4 rounded text-white bg-red-500 w-1/2 mx-auto text-center">
                Anda terindikasi gejala "BERAT"
            </div>
        </div>
        <Button class="mt-4 mx-auto" @click="backToDashboard">
            OK, back to dashboard
        </Button>
    </div>
</template>

<style>
.showHasil {
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>

<script setup>
import Navbar from "../layouts/Navbar.vue";
import { ref } from 'vue'
import { Input, Button } from 'flowbite-vue'
import router from "../router";

// function 
function backToDashboard() {
    router.push('/')
}
</script>