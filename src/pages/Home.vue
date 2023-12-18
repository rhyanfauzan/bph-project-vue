<template>
  <Navbar />
  <div class="row mt-4">
    <div class="col text-center">
      <h3 class=" font-bold text-lg">SELAMAT DATANG DI WEBSITE DETEKSI DINI BPH</h3>
    </div>
  </div>
  <div class="container mt-4">
    <!-- Kiri  -->
    <div class="col-2 p-3 fixed">
      <img src="../assets/images/gambar_prostat.png" alt="" srcset="" style="width: 100%;">
      <p class="mt-4 text-sm">
        <strong>Benign Prostatic Hyperplasia (BPH) </strong>adalah kondisi ketika kelenjar prostat mengalami perbesaran
        yang berakibat
        aliran urine menjadi tidak lancar dan buang air kecil terasa tidak tuntas.
      </p>
      <a class="link" target="_blank"
        href="https://yankes.kemkes.go.id/view_artikel/1989/benign-prostatic-hyperplasia-bph">Read
        more..</a>
      <div class="row justify-center">
        <div class="col text-center">
          <Button @click="startDetection" class="mt-4">Mulai Deteksi</Button>
        </div>
      </div>
    </div>
    <!-- Tengah  -->
    <div class="col-8 scrollable">
      <div class="row">
        <div class="col-5">
          <TheCard class="my-card">
            <img slot="image" src="../assets//images/banner-bg.jpg" alt="Card Image" class="w-full" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gejala Penyakit Benign Prostatic Hyperplasia (BPH)
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                BPH menimbulkan gangguan pada saluran kemih bawah dengan tertekannya uretra dan terganggunya aliran urine
                dari kandung kemih. Karena makin terdesak, kandung kemih menjadi terus berkontraksi meski tidak penuh
                sehingga urine tidak bisa keluar dari kandung kemih.
                <br>
                <br>
                Gejala pembengkakan prostat, antara lain:
                <br>
              <ol class="list-decimal pl-5"> <!-- Use "list-decimal" for ordered list and adjust the padding -->
                <li>1. Sakit pinggang</li>
                <li>2. harus mengejan untuk mulai kencing (urinary hesitancy)</li>
                <li>3. Aliran kencing melemah atau berkurang</li>
                <li>4. Kencing tersendat-sendat (aliran kencing tidak stabil: berhenti lalu mengalir secara
                  berulang-ulang)
                </li>
                <li>5. Lebih sering buang air kecil (beser/inkontensia urin)
                </li>
                <li>6. Buang air kecil yang tidak tuntas</li>
                <li>7. Sering terbangun pada malam hari untuk buang air kecil (nokturia)
                </li>
                <li>8. Tiba-tiba hendak buang air kecil (urgensi) atau tiba-tiba tidak mampu mengeluarkan urine (retensi
                  urine
                  akut)
                </li>
                <li>9. Nyeri saat buang air kecil (anyang-anyangan atau disuria) atau saat ejakulasi
                </li>
                <li>10. Kencing berdarah</li>
              </ol>
              </p>
              <a class="link mt-2" target="_blank"
                href="https://www.gleneagles.com.sg/id/conditions-diseases/benign-prostate-hyperplasia/symptoms-causes">Read
                more..</a>
            </div>
          </TheCard>
        </div>
      </div>
    </div>
    <!-- Kanan  -->
    <div class="col-2 fixed p-2">
      <TheCard class="my-card mb-3">
        <img slot="image" src="../assets/images/gg.jpeg" alt="Card Image" class="w-full" />
        <div class="p-1">
          <h5 class="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white">
            Apa Itu Gagal Ginjal?
          </h5>
          <p class="font-normal text-xs text-gray-700 dark:text-gray-400">
            Gagal ginjal adalah suatu kondisi penurunan fungsi ginjal dalam menyaring limbah sisa metabolisme..
          </p>
          <a class="link mt-2 text-sm" target="_blank"
            href="https://www.siloamhospitals.com/en/informasi-siloam/artikel/gagal-ginjal">Read
            more..</a>
        </div>
      </TheCard>
      <TheCard class="my-card mb-3">
        <img slot="image" src="../assets/images/kemih.jpeg" alt="Card Image" class="w-full" />
        <div class="p-1">
          <h5 class="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white">
            Infeksi Saluran Kemih?
          </h5>
          <p class="font-normal text-xs text-gray-700 dark:text-gray-400">
            Infeksi saluran kemih (ISK) adalah infeksi yang terjadi ketika bakteri masuk melalui uretra dan menginfeksi
            saluran kemih.
          </p>
          <a class="link mt-2 text-sm" target="_blank"
            href="https://www.prudential.co.id/id/pulse/article/infeksi-saluran-kemih/">Read
            more..</a>
        </div>
      </TheCard>
    </div>
  </div>
</template>

<style scoped src="../assets/css/home.css"></style>

<script setup>
import Navbar from "../layouts/Navbar.vue";
import { Button, TheCard } from 'flowbite-vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const startDetection = () => {
  router.push('/deteksi');
}
</script>
