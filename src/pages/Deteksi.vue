<template>
  <Navbar />
  <!-- isFormBiodata true tampilkan form biodata  -->
  <div v-if="isFormBiodata" class="flex flex-col justify-center">
    <h5 class="mb-5 text-center text-xl font-bold">Biodata Pasien</h5>
    <div class="w-1/2 mt-3 mx-auto">
      <Input v-model="nama" label="Nama" type="text" placeholder="Masukan nama.." size="md" />
    </div>
    <div class="w-1/2 mt-3 mx-auto">
      <Input v-model="usia" label="Usia" type="number" placeholder="Masukan usia.." size="md" />
    </div>
    <div class="w-1/2 mt-3 mx-auto">
      <Input v-model="alamat" label="Alamat" type="text" placeholder="Masukan alamat.." size="md" />
    </div>
    <Button class="w-1/2 mt-4 mx-auto" @click="nextStep"> Selanjutnya </Button>
  </div>
  <!-- isFormBiodata false tampilkan form deteksi  -->
  <div v-else class="flex flex-col justify-center">
    <div class="mt-3 mx-auto">
      <h5 class="mb-5 text-center text-xl font-bold">Pilih Gejala Apa Yang Anda Rasakan</h5>
    </div>
    <!-- perbaris  1 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Sering sakit pinggang?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="sakitPinggang" label="Yes" name="radio-sakitPinggang" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="sakitPinggang" label="No" name="radio-sakitPinggang" value="no" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Kencing di malam hari lebih sering?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="kencingMalam" label="Yes" name="radio-kencingMalam" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="kencingMalam" label="No" name="radio-kencingMalam" value="no" />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->

    <!-- perbaris  2 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Perlu mengejan saat awal kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="mengejan" label="Yes" name="radio-mengejan" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="mengejan" label="No" name="radio-mengejan" value="no" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Inkontensia urin/beser/susah menahan ketika ingin kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="inkontensia" label="Yes" name="radio-inkontensia" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="inkontensia" label="No" name="radio-inkontensia" value="no" />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->

    <!-- perbaris 3 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Urin lemah saat kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="urinLemah" label="Yes" name="radio-urinLemah" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="urinLemah" label="No" name="radio-urinLemah" value="no" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Nyeri saat kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="nyeriKencing" label="Yes" name="radio-nyeriKencing" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="nyeriKencing" label="No" name="radio-nyeriKencing" value="no" />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->

    <!-- perbaris 4 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Urin menetes setelah kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="urinMenetes" label="Yes" name="radio-urinMenetes" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="urinMenetes" label="No" name="radio-urinMenetes" value="no" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Terdapat darah ketika kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="darahUrin" label="Yes" name="radio-darahUrin" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="darahUrin" label="No" name="radio-darahUrin" value="no" />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->

    <!-- perbaris 4 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Kencing terasa tidak tuntas?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="kencingTidakTuntas" label="Yes" name="radio-kencingTidakTuntas" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="kencingTidakTuntas" label="No" name="radio-kencingTidakTuntas" value="no" />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Urin tidak keluar sama sekali?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio v-model="urinTidakKeluar" label="Yes" name="radio-urinTidakKeluar" value="yes" />
          </div>
          <div class="flex mt-2 items-center">
            <Radio v-model="urinTidakKeluar" label="No" name="radio-urinTidakKeluar" value="no" />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->
    <div class="space-20">
    </div>
    <Button class="w-1/2 mt-4 mb-4 mx-auto" @click="submit"> Submit </Button>
    <div class="space-80">
    </div>
  </div>
</template>

<style>
.space-80 {
  height: 80px;
}

.space-20 {
  height: 20px;
}
</style>

<script setup>
import Navbar from "../layouts/Navbar.vue";
import { ref } from "vue";
import { Input, Button, Radio } from "flowbite-vue";
import router from "../router";

const isFormBiodata = ref(true);
const nama = ref("");
const usia = ref("");
const alamat = ref("");
const sakitPinggang = ref("");
const kencingMalam = ref("");
const mengejan = ref("");
const inkontensia = ref("");
const urinLemah = ref("");
const nyeriKencing = ref("");
const urinMenetes = ref("");
const darahUrin = ref("");
const kencingTidakTuntas = ref("");
const urinTidakKeluar = ref("");

// function nextstep
function nextStep() {
  isFormBiodata.value = false;
}

// function submit
function submit() {
  isFormBiodata.value = true;
  router.push("/hasil");
}
</script>
