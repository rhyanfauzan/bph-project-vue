<template>
    <Navbar>
        <template #logo>
            <NavbarLogo :image-url="logoKemenkes" alt="Kemenkes logo">
                BPH Project
            </NavbarLogo>
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse :isShowMenu="isShowMenu">
                <NavbarLink isActive>Dashboard</NavbarLink>
                <NavbarLink>Deteksi</NavbarLink>
                <NavbarLink>Hasil</NavbarLink>
            </NavbarCollapse>
        </template>
    </Navbar>
</template>

<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import logoKemenkes from "../assets/images/logo-kemenkes.png";
</script>