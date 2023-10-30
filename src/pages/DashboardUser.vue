<template>
  <div class="bg-image">
    <Navbar />
    <div class="flex flex-col justify-center">
      <div
        class="text-xl font-bold text-black"
        style="opacity: 0.3; margin-top: 200px"
      >
        <h1>SELAMAT DATANG DI WEBSITE GEJALA BENIGN PROSTATIC HYPERPLASIA</h1>
      </div>
      <div class="w-1/2 flex flex-col justify-center mt-4 ml-4">
        <p class="text-sm text-black-500 h-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, maxime
          vero rerum voluptatibus necessitatibus iste temporibus illo earum.
          Mollitia dignissimos ab quaerat illo qui aut dolorem perspiciatis quis
          similique optio.
        </p>
      </div>
      <div>
        <Button
          gradient="blue"
          class="mt-4 mb-4 ml-4 mx-auto justify-center items-center"
          style="width: 100px"
          >DETEKSI</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../layouts/Navbar.vue";
import { Button } from "flowbite-vue";
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/images/banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}
</style>
