<template>
    <Navbar style="background-color: #40AE86;">
        <template #logo>
            <NavbarLogo :image-url="logoKemenkes" alt="Kemenkes logo">
                BPH Project
            </NavbarLogo>
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse :isShowMenu="isShowMenu">
                <router-link to="/" tag="span">
                    <NavbarLink class=" text-white" :isActive="route.path === '/'">Home</NavbarLink>
                </router-link>
                <router-link to="/deteksi" tag="span">
                    <NavbarLink :isActive="route.path === '/deteksi'">Deteksi</NavbarLink>
                </router-link>
            </NavbarCollapse>
        </template>
    </Navbar>
</template>

<style>
.text-white {
    color: white !important;
}
</style>
  
<script>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import logoKemenkes from "../assets/images/logo-kemenkes.png";

export default {
    components: {
        NavbarCollapse,
        NavbarLink,
        NavbarLogo,
        Navbar,
    },
    setup() {
        const route = useRoute(); // Get the current route object
        const isShowMenu = computed(() => {
            // Your logic to determine isShowMenu value
            // For example:
            return true;
        });

        return {
            isShowMenu,
            route,
            logoKemenkes,
        };
    },
};
</script>
  