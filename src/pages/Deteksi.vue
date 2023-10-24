<template>
    <Navbar />
    <!-- isFormBiodata true tampilkan form biodata  -->
    <div v-if="isFormBiodata" class="flex flex-col justify-center">
        <div class="w-1/2 mt-3 mx-auto">
            <Input v-model="nama" label="Nama" type="text" placeholder="Masukan nama.." size="md" />
        </div>
        <div class="w-1/2 mt-3 mx-auto">
            <Input v-model="usia" label="Usia" type="number" placeholder="Masukan usia.." size="md" />
        </div>
        <div class="w-1/2 mt-3 mx-auto">
            <Input v-model="alamat" label="Alamat" type="text" placeholder="Masukan alamat.." size="md" />
        </div>
        <Button class="w-1/2 mt-4 mx-auto" @click="nextStep">
            Selanjutnya
        </Button>
    </div>
    <!-- isFormBiodata false tampilkan form deteksi  -->
    <div v-else class="flex flex-col justify-center">
        <div class="mt-3 mx-auto">
            <h5>PILIH GEJALA APA YANG DIRASAKAN OLEH ANDA</h5>
        </div>
        <!-- perbaris  -->
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

        <!-- perbaris  -->
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

        <Button class=" w-1/2 mt-4 mx-auto" @click="submit">
            Submit
        </Button>
    </div>
</template>

<script setup>
import Navbar from "../layouts/Navbar.vue";
import { ref } from 'vue'
import { Input, Button, Radio } from 'flowbite-vue'
import router from "../router";

const isFormBiodata = ref(true)
const nama = ref('')
const usia = ref('')
const alamat = ref('')
const sakitPinggang = ref('no')
const kencingMalam = ref('no')

// function nextstep
function nextStep() {
    isFormBiodata.value = false;
}

// function submit
function submit() {
    isFormBiodata.value = true;
    router.push('/hasil')
}
</script>