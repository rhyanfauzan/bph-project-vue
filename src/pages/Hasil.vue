<template>
  <Navbar />
  <div class="flex flex-col justify-center">
    <div class="flex justify-center items-center">
      <TheCard class="w-full mt-4" style="max-width: 800px">
        <h5 class="text-xl my-4 font-bold text-center">Hasil Deteksi</h5>
        <table class="text-md font-medium">
          <tr>
            <td>Nama</td>
            <td id="nama_pasien">: -</td>
          </tr>
          <tr>
            <td>Usia</td>
            <td id="usia_pasien">: -</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td id="alamat_pasien">: -</td>
          </tr>
        </table>
        <hr class="mt-3" />
        <!-- Revisi Kolo  -->
        <div class="mt-3 mx-auto">
          <table>
            <tr>
              <td class="">Sering sakit pinggang?</td>
              <td class="font-medium" id="sakit_pinggang">: No</td>
            </tr>
            <tr>
              <td class="">Kencing di malam hari lebih sering?</td>
              <td class="font-medium" id="nokturia">: No</td>
            </tr>
            <tr>
              <td class="">Perlu mengejan saat awal kencing?</td>
              <td class="font-medium" id="mengejan">: No</td>
            </tr>
            <tr>
              <td class="">Urin lemah saat kencing?</td>
              <td class="font-medium" id="urin_lemah">: No</td>
            </tr>
            <tr>
              <td class="">Urin menetes setelah kencing?</td>
              <td class="font-medium" id="urin_menetes">: No</td>
            </tr>
            <tr>
              <td class="">Kencing terasa tidak tuntas?</td>
              <td class="font-medium" id="kencing_tidak_tuntas">: No</td>
            </tr>
            <tr>
              <td class="">Urin tidak keluar sama sekali?</td>
              <td class="font-medium" id="urin_tidak_keluar_sama_sekali">
                : No
              </td>
            </tr>
            <tr>
              <td class="">Terdapat darah ketika kencing?</td>
              <td class="font-medium" id="darah_dalam_urin">: No</td>
            </tr>
            <tr>
              <td class="">Nyeri saat kencing?</td>
              <td class="font-medium" id="nyeri_saat_kencing">: No</td>
            </tr>
            <tr>
              <td class="">Inkontensia urin/beser?</td>
              <td class="font-medium" id="inkonsia_urin">: No</td>
            </tr>
          </table>
          <hr class="mt-3" />
        </div>
        <!-- End Revisi Kolo  -->
        <div class="mt-3 mx-auto">
          <p class="mt-4 text-center font-medium">
            Dari Keterangan Di Atas, Anda Terindikasi Gejala
          </p>
          <div
            class="showHasil mt-4 rounded text-white w-1/2 mx-auto text-center"
            :class="{
              'bg-red-500': isRedBackground,
              'bg-yellow-400': isYellowBackground,
              'bg-green-500': isGreenBackground,
            }"
          >
            {{ textHasil }}
          </div>
        </div>
      </TheCard>
    </div>
    <div class="space-20"></div>
    <Button class="mt-4 mb-4 mx-auto" @click="backToDashboard">
      OK, back to Dashboard
    </Button>
  </div>
  <div class="container" style="height: 70px"></div>
</template>

<style>
.showHasil {
  padding-top: 20px;
  padding-bottom: 20px;
}

.space-80 {
  height: 80px;
}

.space-20 {
  height: 20px;
}
</style>

<script setup>
import Navbar from '../layouts/Navbar.vue';
import { onMounted, ref } from 'vue';
import { Input, Button, TheCard } from 'flowbite-vue';
import router from '../router';

const isRedBackground = ref(false);
const isYellowBackground = ref(false);
const isGreenBackground = ref(false);
const textHasil = ref('');

onMounted(() => {
  const nama = sessionStorage.getItem('nama');
  const usia = sessionStorage.getItem('usia');
  const alamat = sessionStorage.getItem('alamat');
  const hasil = sessionStorage.getItem('hasil');

  // Revisi Kolo

  const umur = sessionStorage.getItem('umur');
  const sakit_pinggang = sessionStorage.getItem('sakit_pinggang');
  const mengejan = sessionStorage.getItem('mengejan');
  const urin_lemah = sessionStorage.getItem('urin_lemah');
  const urin_menetes = sessionStorage.getItem('urin_menetes');
  const kencing_tidak_tuntas = sessionStorage.getItem('kencing_tidak_tuntas');
  const nokturia = sessionStorage.getItem('nokturia');
  const inkonsia_urin = sessionStorage.getItem('inkonsia_urin');
  const nyeri_saat_kencing = sessionStorage.getItem('nyeri_saat_kencing');
  const darah_dalam_urin = sessionStorage.getItem('darah_dalam_urin');
  const urin_tidak_keluar_sama_sekali = sessionStorage.getItem(
    'urin_tidak_keluar_sama_sekali'
  );

  document.getElementById('nama_pasien').textContent = `: ${nama}`;
  document.getElementById('usia_pasien').textContent = `: ${usia}`;
  document.getElementById('alamat_pasien').textContent = `: ${alamat}`;

  if (sakit_pinggang == 1) {
    document.getElementById('sakit_pinggang').textContent = `: Yes`;
  }
  if (mengejan == 1) {
    document.getElementById('mengejan').textContent = `: Yes`;
  }
  if (urin_lemah == 1) {
    document.getElementById('urin_lemah').textContent = `: Yes`;
  }
  if (urin_menetes == 1) {
    document.getElementById('urin_menetes').textContent = `: Yes`;
  }
  if (kencing_tidak_tuntas == 1) {
    document.getElementById('kencing_tidak_tuntas').textContent = `: Yes`;
  }
  if (nokturia == 1) {
    document.getElementById('nokturia').textContent = `: Yes`;
  }
  if (inkonsia_urin == 1) {
    document.getElementById('inkonsia_urin').textContent = `: Yes`;
  }
  if (nyeri_saat_kencing == 1) {
    document.getElementById('nyeri_saat_kencing').textContent = `: Yes`;
  }
  if (darah_dalam_urin == 1) {
    document.getElementById('darah_dalam_urin').textContent = `: Yes`;
  }
  if (urin_tidak_keluar_sama_sekali == 1) {
    document.getElementById(
      'urin_tidak_keluar_sama_sekali'
    ).textContent = `: Yes`;
  }

  // End Revisi Kolo

  if (hasil == 'Berat') {
    isRedBackground.value = true;
    isYellowBackground.value = false;
    isGreenBackground.value = false;
    textHasil.value = hasil;
  } else if (hasil == 'Ringan') {
    isRedBackground.value = false;
    isYellowBackground.value = true;
    isGreenBackground.value = false;
    textHasil.value = hasil;
  } else if (hasil == 'Tidak Terkena') {
    isRedBackground.value = false;
    isYellowBackground.value = false;
    isGreenBackground.value = true;
    textHasil.value = hasil;
  }
});

// function
function backToDashboard() {
  router.push('/');
}
</script>
