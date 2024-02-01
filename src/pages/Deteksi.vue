<template>
  <Navbar />
  <!-- isFormBiodata true tampilkan form biodata  -->
  <div v-if="isFormBiodata" class="flex flex-col justify-center">
    <h5 class="mb-5 text-center text-xl font-bold">Biodata Pasien</h5>
    <div class="w-1/2 mt-3 mx-auto">
      <Input
        v-model="nama"
        label="Nama"
        type="text"
        placeholder="Masukan nama.."
        size="md"
      />
    </div>
    <div class="w-1/2 mt-3 mx-auto">
      <Input
        v-model="usia"
        label="Usia"
        type="number"
        placeholder="Masukan usia.."
        size="md"
      />
    </div>
    <div class="w-1/2 mt-3 mx-auto">
      <Input
        v-model="alamat"
        label="Alamat"
        type="text"
        placeholder="Masukan alamat.."
        size="md"
      />
    </div>
    <Button class="w-1/2 mt-4 mx-auto" @click="nextStep"> Selanjutnya </Button>
  </div>
  <!-- isFormBiodata false tampilkan form deteksi  -->
  <div v-else class="flex flex-col justify-center">
    <div class="mt-3 mx-auto">
      <h5 class="mb-5 text-center text-xl font-bold">
        Pilih Gejala Apa Yang Anda Rasakan
      </h5>
    </div>
    <!-- perbaris  1 -->
    <div class="w-1/2 flex mt-3 mx-auto">
      <div class="w-1/2">
        <p>Sering sakit pinggang?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="sakitPinggang"
              label="Yes"
              name="radio-sakitPinggang"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="sakitPinggang"
              label="No"
              name="radio-sakitPinggang"
              value="0"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Kencing di malam hari lebih sering?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="kencingMalam"
              label="Yes"
              name="radio-kencingMalam"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="kencingMalam"
              label="No"
              name="radio-kencingMalam"
              value="0"
            />
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
            <Radio
              v-model="mengejan"
              label="Yes"
              name="radio-mengejan"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="mengejan"
              label="No"
              name="radio-mengejan"
              value="0"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Inkontensia urin/beser/susah menahan ketika ingin kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="inkontensia"
              label="Yes"
              name="radio-inkontensia"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="inkontensia"
              label="No"
              name="radio-inkontensia"
              value="0"
            />
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
            <Radio
              v-model="urinLemah"
              label="Yes"
              name="radio-urinLemah"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="urinLemah"
              label="No"
              name="radio-urinLemah"
              value="0"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Nyeri saat kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="nyeriKencing"
              label="Yes"
              name="radio-nyeriKencing"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="nyeriKencing"
              label="No"
              name="radio-nyeriKencing"
              value="0"
            />
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
            <Radio
              v-model="urinMenetes"
              label="Yes"
              name="radio-urinMenetes"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="urinMenetes"
              label="No"
              name="radio-urinMenetes"
              value="0"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Terdapat darah ketika kencing?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="darahUrin"
              label="Yes"
              name="radio-darahUrin"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="darahUrin"
              label="No"
              name="radio-darahUrin"
              value="0"
            />
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
            <Radio
              v-model="kencingTidakTuntas"
              label="Yes"
              name="radio-kencingTidakTuntas"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="kencingTidakTuntas"
              label="No"
              name="radio-kencingTidakTuntas"
              value="0"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <p>Urin tidak keluar sama sekali?</p>
        <div class="flex">
          <div class="flex mr-2 mt-2 items-center">
            <Radio
              v-model="urinTidakKeluar"
              label="Yes"
              name="radio-urinTidakKeluar"
              value="1"
            />
          </div>
          <div class="flex mt-2 items-center">
            <Radio
              v-model="urinTidakKeluar"
              label="No"
              name="radio-urinTidakKeluar"
              value="0"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- akhir perbaris  -->
    <div class="space-20"></div>
    <Button class="w-1/2 mt-4 mb-4 mx-auto" @click="submit"> Submit </Button>
    <div class="space-80"></div>
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
import Navbar from '../layouts/Navbar.vue';
import { ref } from 'vue';
import { Input, Button, Radio } from 'flowbite-vue';
import router from '../router';

const isFormBiodata = ref(true);
const nama = ref('');
const usia = ref('');
const alamat = ref('');
const sakitPinggang = ref('0');
const kencingMalam = ref('0');
const mengejan = ref('0');
const inkontensia = ref('0');
const urinLemah = ref('0');
const nyeriKencing = ref('0');
const urinMenetes = ref('0');
const darahUrin = ref('0');
const kencingTidakTuntas = ref('0');
const urinTidakKeluar = ref('0');

// function nextstep
function nextStep() {
  isFormBiodata.value = false;
}

// function submit
function submit() {
  isFormBiodata.value = true;

  sessionStorage.setItem('nama', nama.value ?? '');
  sessionStorage.setItem('usia', usia.value ?? 0);
  sessionStorage.setItem('alamat', alamat.value ?? '');

  fetchKNN();
}

function fetchKNN() {
  const formdata = new FormData();
  formdata.append('umur', usia.value);
  formdata.append('sakit_pinggang', sakitPinggang.value);
  formdata.append('mengejan', mengejan.value);
  formdata.append('urin_lemah', urinLemah.value);
  formdata.append('urin_menetes', urinMenetes.value);
  formdata.append('kencing_tidak_tuntas', kencingTidakTuntas.value);
  formdata.append('nokturia', kencingMalam.value);
  formdata.append('inkonsia_urin', inkontensia.value);
  formdata.append('nyeri_saat_kencing', nyeriKencing.value);
  formdata.append('darah_dalam_urin', darahUrin.value);
  formdata.append('urin_tidak_keluar_sama_sekali', urinTidakKeluar.value);

  // set to sessionStorage
  sessionStorage.setItem('umur', usia.value);
  sessionStorage.setItem('sakit_pinggang', sakitPinggang.value);
  sessionStorage.setItem('mengejan', mengejan.value);
  sessionStorage.setItem('urin_lemah', urinLemah.value);
  sessionStorage.setItem('urin_menetes', urinMenetes.value);
  sessionStorage.setItem('kencing_tidak_tuntas', kencingTidakTuntas.value);
  sessionStorage.setItem('nokturia', kencingMalam.value);
  sessionStorage.setItem('inkonsia_urin', inkontensia.value);
  sessionStorage.setItem('nyeri_saat_kencing', nyeriKencing.value);
  sessionStorage.setItem('darah_dalam_urin', darahUrin.value);
  sessionStorage.setItem(
    'urin_tidak_keluar_sama_sekali',
    urinTidakKeluar.value
  );

  var requestOptions = {
    method: 'POST',
    body: formdata,
  };

  fetch('http://127.0.0.1:5000/api/v1/predict', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const hasil = result.response.status;
      sessionStorage.setItem('hasil', hasil);
      router.push('/hasil');
    })
    .catch((error) => console.log('error', error));
}
</script>
